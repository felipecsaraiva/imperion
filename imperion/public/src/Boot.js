Imperion = {
};

Imperion.Boot = function (game) {
	
};

Imperion.Boot.prototype = {

    preload: function () {
        this.load.image('preloaderBar', 'assets/preloadingbar.jpg');
		this.load.image('background', 'assets/background/back.png');
		this.load.image('logotipo','assets/imperion/logoclaro.png');
		$('#novo_personagem').hide();
    },

    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.maxWidth = 1024;
		this.scale.maxHeight = 600;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = false;
		this.scale.setScreenSize(true);

        this.state.start('Preloader');
    }

};