// a set of parallel Scenes.
// it watches a multiroom change, and updates its scenes to match.

var Theatre = {
  queue: ActionQueue.create(),
  
  empty: function() {
    // same API as a regular Theatre, but holds no rooms.
    // useful to simplify the logic of callers,  who don't have
    // to distinguish between a Theatre and null.
    return {
      remove: function() {}
    };
  },
  create: function(container, room) {
    var element = container;
    
    var scenes = Multi.create(room, function(room) {
      return Scene.create(element, room);
    });
    Theatre.queue.enqueue_async(function() {
      scenes.current().show(function() {
        Theatre.queue.resume();
      });
    });
    
    return {
      process_events: function(events) {
        // remember how things were
        var old_count = scenes.count();
        var old_scene = scenes.current();
        
        // process all events
        scenes.process_events(events);
        
        // have things changed?
        var new_count = scenes.count();
        var new_scene = scenes.current();
        
        if (new_count != old_count) {
          // rearrange the scenes (max 2 for now)
          
          if (new_count == 1) {
            scenes.at(0).move_center();
          } else if (new_count == 2) {
            scenes.at(0).move_left();
            scenes.at(1).move_right();
          }
        }
        if (new_scene != old_scene) {
          // highlight the current scene
            
          old_scene.darken();
          new_scene.lighten();
        }
      },
    
      remove: function() {
        var n = scenes.count();
        if (n > 0) {
          Theatre.queue.enqueue_async(function() {
            var j=0;
            for(var i=0; i<n; ++i) {
              scenes.at(i).remove(function() {
                ++j;
                if (j == n) {
                  Theatre.queue.resume();
                }
              });
            }
          });
        }
      }
    };
  },
};
