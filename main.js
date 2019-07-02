var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 507,
    physics: {
        default: 'arcade',
            arcade: {
                gravity: {y: 2000},
            }
    },
    scene : [ NewGame ]
};

var game = new Phaser.Game(config);