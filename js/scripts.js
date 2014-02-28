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
  },

  find : function(posx, posy) {
    var matchedSpaces = Space.all.filter(function(space) {
      return posx === space.xCoordinate && posy === space.yCoordinate;
    });
    console.log(matchedSpaces[0]);
    return matchedSpaces[0];
  }
};

var Board = {

  initialize : function(posx, posy) {
    this.spaces = [];
    for (var x = 1; x <= 3; x++) {
      for (var y = 1; y <= 3; y++) {
        this.spaces.push(Space.create(x,y));

      };
    };
  }
};




