var express = require('express');
var router = express.Router();
var playerServices = require('../services/playerServices');

/* GET users listing. */

router.get('/getPlayerByPlayerId/:playerId', function(req, res, next) {
  
  res.send(playerServices.findPlayerByPlayerId(parseInt(req.params.playerId)));

});


/* POST update player */
router.post('/signInPlayer', function(req, res, next) {
  const playerId = req.body
  res.send(playerServices.findPlayerByPlayerId(playerId));
});

/* POST sign up player */
router.post('/signUpPlayer', function(req, res, next) {
  const player = req.body
  try {
    res.send(playerServices.createPlayer(player));
  } catch(e){
    console.log(e)
  }
  
});






module.exports = router;
