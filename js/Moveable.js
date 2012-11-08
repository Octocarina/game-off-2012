// a game object which can move,
// such as blocks and the player.

var Moveable = {
  create: function(tile) {
    return {
      tile: tile,
      floor: Tile.empty,
      pos: null,
      id: null,
      
      forked: false,
      
      copy: function() {
        var other = Moveable.create(this.tile);
        
        other.floor = this.floor;
        other.pos = this.pos;
        other.id = this.id;
        
        other.forked = this.forked;
        
        return other;
      }
    };
  }
};
