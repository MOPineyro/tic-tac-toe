var Player = {

  all: [],

  initialize : function(symbol) {
    this.symbol = symbol;
  },

  create : function(symbol) {
    var playerInstance = Object.create(Player);
    playerInstance.initialize(symbol);
    Player.all.push(playerInstance);
    return playerInstance;
  }

};

var Space = {

  all: [],

  initialize : function(posx, posy) {
    this.xCoordinate = posx;
    this.yCoordinate = posy;
  },

  create : function(posx, posy) {
    var spaceInstance = Object.create(Space);
    spaceInstance.initialize(posx,posy);
    Space.all.push(spaceInstance);
    return spaceInstance;
  },

  markBy : function(player) {
    this.markBy = player;
  }
};









