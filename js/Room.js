// a grid of Tiles.
// tiles can change type, and you can listen for those changes.

var Room = {
  from_tiles: function(tiles) {
    // find the player and the other moveables
    var player = null;
    var moveables = tiles.map(function(pos, tile) {
      if (tile.moveable) {
        var moveable = {pos: pos, tile: tile, floor: Tile.empty};
        
        if (tile === Tile.player) {
          player = moveable;
        }
        
        return moveable;
      } else {
        return null;
      }
    });
    
    var change_tile_callbacks = $.Callbacks();
    var move_callbacks = $.Callbacks();
    return {
      size: tiles.size,
      w: tiles.w,
      h: tiles.h,
      
      tile_at: function(pos) {
        return tiles.at(pos, function() {
          // prevent the player from falling off the map
          return Tile.wall;
        });
      },
      change_tile: function(pos, new_tile) {
        if (arguments.length == 1) {
          // add a watcher
          var callback = pos;
          change_tile_callbacks.add(callback);
        } else {
          // notify watchers
          change_tile_callbacks.fire(pos, new_tile);
          
          tiles.change_at(pos, new_tile);
        }
      },
      each_door: function(body) {
        tiles.each(function(pos, tile) {
          if( tile === Tile.open_door || tile === Tile.closed_door )
            body(pos, tile);
        });
      },
      
      moveable_at: function(pos) {
        return moveables.at(pos);
      },
      force_move: function(moveable, new_pos) {
        if (arguments.length == 1) {
          // add a watcher
          var callback = moveable;
          move_callbacks.add(callback);
        } else {
          var old_pos = moveable.pos;
          var old_floor = moveable.floor;
          var new_floor = this.tile_at(new_pos);

          var self = this;
          if (old_floor.button) {
            this.each_door(function(pos, tile) {
              self.change_tile(pos, Tile.closed_door);
            });
          }
          
          this.change_tile(old_pos, old_floor);
          this.change_tile(new_pos, moveable.tile);
          
          moveables.change_at(old_pos, null);
          moveables.change_at(new_pos, moveable);
          
          if (new_floor.button) {
            var correct_color = true;
            if (new_floor.color) {
              correct_color = (moveable.tile.color == new_floor.color);
            }
            
            if (correct_color) {
              var self = this;
              this.each_door(function(pos, tile) {
                self.change_tile(pos, Tile.open_door);
              });
            }
          }
          
          // notify watchers
          move_callbacks.fire(moveable, new_pos);
          
          moveable.pos = new_pos;
          moveable.floor = new_floor;
        }
      },
      move: function(moveable, dx, dy) {
        var old_pos = moveable.pos;
        var new_pos = old_pos.plus(dx, dy);
        var new_pos2 = old_pos.plus(2*dx, 2*dy);
        
        var target = this.tile_at(new_pos);
        var target2 = this.tile_at(new_pos2);
        
        if (target.moveable && !target2.solid) {
          var block = this.moveable_at(new_pos);
          
          this.force_move(block, new_pos2);
          this.force_move(moveable, new_pos);
        } else if (!target.solid) {
          this.force_move(moveable, new_pos);
        }
      },
      
      player: player,
      player_pos: function() {
        return player.pos;
      },
      move_player: function(dx, dy) {
        this.move(player, dx, dy);
      },
      
      fork: function() {
        return Room.from_tiles(tiles.copy());
      }
    };
  },
  from_symbols: function(tile_symbols) {
    // convert the tile symbols into tile types
    var tiles = tile_symbols.map(function(pos, symbol) {
      return Tile.from_symbol(symbol);
    });
    
    return this.from_tiles(tiles);
  }
};
