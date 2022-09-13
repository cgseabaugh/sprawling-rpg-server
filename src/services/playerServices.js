const Player = require('../entity/player');

let playerCounter = 4;

let playerDatabase = [
    new Player(1, "Nezlo", 9, 40, 40, "", 50, 50, 50, 50, 1000, 0),
    new Player(2, "Ludence", 6, 30, 30, "", 30, 30, 30, 30, 500, 0),
    new Player(3, "Ender", 3, 20, 20, "", 10, 10, 10, 10, 100, 0)
]

const findPlayerByPlayerId = (playerId) => {
    return playerDatabase.filter((player) => {
        if(player.getPlayerId === playerId){
            return player
        }
    })
}

// exports.findUserByEmailAndPassword = findUserByEmailAndPassword = (email, password) => {
//     userDataBaseTable.filter((user) => {
//         if(user.getEmail === email && user.getPassword === password){
//             return user
//         }
//     })
// }

exports.createPlayer = createPlayer = (player) => {
    const createdPlayer = new Player(playerCounter, player.name, 1, player.maxHealth, player.maxHealth, player.img, player.physicalAttack, player.physicalDefense, player.magicAttack, player.magicDefense, player.gold, player.experience)
    playerDatabase.push(createdPlayer);
    playerCounter++
    return createdPlayer
}

exports.findPlayerByPlayerId = findPlayerByPlayerId