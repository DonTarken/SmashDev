class NewGame extends Phaser.Scene {

    constructor () {
        super({key:"game"});
    }

    preload () {
        this.load.image('MAP', 'assets/map2D.jpg');
        this.load.image('PERSO', 'assets/character.png');
        this.load.image('PERSO2', 'assets/knight.png');
        this.load.image('spriter', 'assets/spriter.jpg');
        this.load.image('ground', 'assets/platform1.png');
        this.load.image('ground2', 'assets/platform2.png');
        this.load.image('ground3', 'assets/platform3.png')
    }

    create () {
        this.image = this.add.image(450,253,'MAP');
        this.player = this.physics.add.image(100,430, 'PERSO');
        this.player.setCollideWorldBounds(true);
        this.player.body.checkCollision.up;
        this.player2 = this.physics.add.image(800,430, 'PERSO2');
        this.player2.body.collideWorldBounds = true;

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(450, 280, 'ground').setScale(0.7).refreshBody();
        this.platforms.create(770, 140, 'ground2').setScale(0.2).refreshBody();
        this.platforms.create(750, 140, 'ground2').setScale(0.2).refreshBody();
        this.platforms.create(720, 140, 'ground2').setScale(0.2).refreshBody();
        this.platforms.create(700, 140, 'ground2').setScale(0.2).refreshBody();
        this.platforms.create(100, 140, 'ground3').setScale(0.4).refreshBody();
        // var platforms = this.physics.add.staticGroup();
        //  platforms.create(450, 300, 'ground').setScale(0.2).refreshBody();


        // this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // this.key_Q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        // this.key_Space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        // this.key_LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // this.key_RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, this.platforms);


        console.log(this.physics.add)
    }

    update () {
        this.player.setVelocityX(0);
        this.player2.setVelocityX(0);

        if(this.cursors.right.isDown)
            this.player.body.velocity.x = 300;
        if(this.cursors.left.isDown)
            this.player.body.velocity.x = -300;
        if(this.cursors.space.isDown && this.player.body.blocked.down){
            this.player.body.velocity.y = -1200;
        while(!this.player.body.blocked.down){
            this.players.rotation = 0.2;
        }
        }
    //     if(this.key_RIGHT.isDown)
    //        this.player2.body.velocity.x = 300;
    //        if(this.key_LEFT.isDown)
    //        this.player2.body.velocity.x = -300;
     }
}