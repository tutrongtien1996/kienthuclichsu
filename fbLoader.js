FBInstant.initializeAsync() 
  .then(function() {
  // Start loading game assets here
});


FBInstant.player.getSignedPlayerInfoAsync('my_metadata')
  .then(function (result) {
    // The verification of the ID and signature should happen on server side.
    SendToMyServer(
      result.getPlayerID(), // same value as FBInstant.player.getID()
      result.getSignature(),
      'GAIN_COINS',
      100);
  });