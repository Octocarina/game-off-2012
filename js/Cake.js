// visually appealing, and made of Layers :)
// it is responsible for updating the Sprite Layers
// as the room contents changes.
// 
// if you create a class to display some special effects on top of this,
// please call it Icing :P

var Cake = {
  display: function(container, room) {
    container.empty();
    
    // add the floor
    var floor_tiles = this.create_floor(room);
    Layer.create(container, floor_tiles);
    
    // add the actual obstacles
    var tiles = this.extract_tiles(room);
    var layer = Layer.create(container, tiles);
    
    // monitor tile changes
    room.tile_change(function(index, new_tile) {
      var sprite = layer.sprite_at(index);
      
      sprite.change_tile(new_tile);
    });
  },
  
  create_floor: function(room) {
    var tiles = new Array(room.size);
    for(var i=0; i<room.size; ++i) {
      tiles[i] = Tile.floor;
    }
    return tiles;
  },
  extract_tiles: function(room) {
    var tiles = new Array(room.size);
    for(var i=0; i<room.size; ++i) {
      tiles[i] = room.tile_at(i);
    }
    return tiles;
  }
};
