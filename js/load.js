// saknar class samt funktioner till uppgift1

const loadState = {

    preload: function () {

        const loadingLabel = game.add.text(game.world.centerX, 150,
            'loading...', {font: '30px Arial', fill: '#ffffff'});

        loadingLabel.anchor.setTo(0.5, 0.5);

        // Load all assets

        // mute button
        game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
        game.load.image('coin', 'assets/coin.png');
        game.load.image('enemy', 'assets/enemy.png');
        game.load.image('bg', 'assets/bg.png');
        game.load.image('player', 'assets/player.png');
        game.load.image('wallH', 'assets/wallH.png');
        game.load.image('wallV', 'assets/wallV.png');
    },

    create: function () {

        game.state.start('menu');


    }


};