describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("create", function() {
    it("creates a new player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  
  describe("create", function() {
    it("Creates positions on a board", function() {
      var testSpace = Space.create(1,2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe("markBy", function() {
    it("Lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1,2);
      testSpace.markBy(testPlayer);
      testSpace.markBy.should.equal(testPlayer);
    });
  });
});









//   describe("assign", function() {
//     it("Will assign playerOne an X", function() {
//       var playerOne = Object.create(Player);      
//       playerOne.assign("x");
//       playerOne.letter.should.equal("x");
//     });

//     it("Will assign playerTwo an O", function() {
//       var playerTwo = Object.create(Player);
//       playerTwo.assign();
//       playerTwo.letter.should.equal("o");
//     });
//   });
// });

