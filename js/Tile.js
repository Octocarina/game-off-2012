// an immutable representation of a tile type,
// like Tile.wall or Tile.floor;
// remember to always compare with "===".

var Tile = {
  list: {},
  from_symbol: function(symbol) {
    return this.list[symbol];
  },
  create: function(symbol, tile) {
    this.list[symbol] = tile;
    return tile;
  }
};

Tile.empty = Tile.create('', {
    sprite_class : 'empty-tile'
});
Tile.floor = Tile.create('.', {
    sprite_class : 'floor-tile',
    is_floor     : true
});
Tile.wall = Tile.create('#', {
    sprite_class : 'wall-tile',
    solid        : true
});

Tile.player = Tile.create('C', {
    sprite_class : 'player-sprite',
    solid        : true,
    moveable     : true
});
Tile.lover = Tile.create('c', {
    sprite_class : 'lover-sprite',
    solid        : true,
    moveable     : true
});

Tile.closed_door = Tile.create('D', {
    sprite_class : 'closed-door-tile',
    solid        : true
});
Tile.open_door   = Tile.create('d', {
    sprite_class : 'open-door-tile'
});

Tile.red_button    = Tile.create('R', {
    sprite_class : 'red-button-tile',
    color        : 'red',
    is_floor     : true,
    button       : true
});
Tile.green_button  = Tile.create('G', {
    sprite_class : 'green-button-tile',
    color        : 'green',
    is_floor     : true,
    button       : true
});
Tile.blue_button   = Tile.create('B', {
    sprite_class : 'blue-button-tile',
    color        : 'blue',
    is_floor     : true,
    button       : true
});
Tile.orange_button = Tile.create('O', {
    sprite_class : 'orange-button-tile',
    color        : 'orange',
    is_floor     : true,
    button       : true
});

Tile.block        = Tile.create('w', {
    sprite_class : 'wooden-block-sprite',
    solid        : true,
    moveable     : true
  });
Tile.red_block    = Tile.create('r', {
    sprite_class : 'red-block-sprite',
    color        : 'red',
    solid        : true,
    moveable     : true
  });
Tile.green_block  = Tile.create('g', {
    sprite_class : 'green-block-sprite',
    color        : 'green',
    solid        : true,
    moveable     : true
});
Tile.blue_block   = Tile.create('b', {
    sprite_class : 'blue-block-sprite',
    color        : 'blue',
    solid        : true,
    moveable     : true
});
Tile.orange_block = Tile.create('o', {
    sprite_class : 'orange-block-sprite',
    color        : 'orange',
    solid        : true,
    moveable     : true
});
