$(function() {
    var toplevel_container = $('#content');
    var sprite_container = toplevel_container;
    
    
    var level_number = 0;
    var level_model;
    
    function load_level(i) {
      level_number = i;
      level_model = Level_Model.load(level_number);
      Level_View.monitor(sprite_container, level_model);
    }
    
    function try_again() {
      load_level(level_number);
    }
    
    function next_level() {
      load_level(level_number + 1);
    }
    
    
    var player_index = 33;
    function move_player(new_index) {
      level_model.change_tile_type(player_index, Tile.empty);
      
      player_index = new_index;
      
      level_model.change_tile_type(player_index, Tile.player);
    }
    
    var keyHandler;
    function handleKey(key) {
      switch(key) {
      case Keycode.left:  return move_player(player_index - 1);
      case Keycode.right: return move_player(player_index + 1);
      case Keycode.up:    return move_player(player_index - 8);
      case Keycode.down:  return move_player(player_index + 8);
      }
    }
    
    
    function begin() {
      toplevel_container.addClass('well').empty();
      load_level(0);
      keyHandler = handleKey;
    }
    
    $('#begin').click(begin);
    
    // first keypress begins the game
    keyHandler = begin;
    $(document).keydown(function(e) {
      keyHandler(e['keyCode']);
    });
});
