Imperion.NewPlayer = function(game) {
	var idChar = 1;
	var txtNomeChar;
	var txtHistoria;
	var idEspecialidade = 1;
};
Imperion.NewPlayer.prototype = {
    preload: function() {
		$('#novo_personagem').show();
	},
	create: function() {

		txt = this.add.text(512, 25, "NOVO PERSONAGEM", { fill: "#27B4E1", font: "bold 16pt Arial"});
		txt.anchor.setTo(0.5,0);

		txt = this.add.text(300, 70, "Selecione um conselheiro", { fill: "#F0F0F0", font: "12pt Arial"});
		txt.anchor.setTo(0.5,0);
		
		txtNomeChar = this.add.text(520, 100, "Jessica Jones", { fill: "#ffff00", font: "bold 14pt Arial"});
		txtNomeChar.anchor.setTo(0,0);
		
		txtHistoria = this.add.text(520, 130, "Aqui vai um pouco da história da personagem, contando um breve resumo de quem ela é e as habilidades que ela possui.", { fill: "#F0F0F0", font: "10pt Arial"});
		txtHistoria.anchor.set(0);
		txtHistoria.wordWrap = true;
		txtHistoria.wordWrapWidth = 400;
	
		idChar =1;
		sp_jessica = this.add.button(160,100,'jessica_jones', this.clickCharacter, this);
		sp_jessica.anchor.setTo(0.5,0);
		sp_jessica.scale.set(0.5);
		sp_jessica.inputEnabled = true;
		sp_jessica.input.useHandCursor = true;
		sp_jessica.variable = 1;
		sp_jessica.nome = "Jessica Jones";
		sp_jessica.esp = 1;
		
		sp_juan = this.add.button(300, 100, 'juan_garcia', this.clickCharacter, this);
		sp_juan.anchor.setTo(0.5,0);
		sp_juan.scale.set(0.5);
		sp_juan.alpha = 0.4;
		sp_juan.inputEnabled = true;
		sp_juan.input.useHandCursor = true;
		sp_juan.variable = 2;
		sp_juan.nome = "Juan Garcia";
		sp_juan.esp = 1;
		
		sp_leon = this.add.button(440,100,'leon_jones', this.clickCharacter, this);
		sp_leon.anchor.setTo(0.5,0);
		sp_leon.scale.set(0.5);
		sp_leon.alpha = 0.4;
		sp_leon.inputEnabled = true;
		sp_leon.input.useHandCursor = true;
		sp_leon.variable = 3;
		sp_leon.nome = "Leon Jones";
		sp_leon.esp = 2;
				
		sp_maria = this.add.button(160,240,'maria_salvatore', this.clickCharacter, this);
		sp_maria.anchor.setTo(0.5,0);
		sp_maria.scale.set(0.5);
		sp_maria.alpha = 0.4;
		sp_maria.inputEnabled = true;
		sp_maria.input.useHandCursor = true;
		sp_maria.variable = 4;
		sp_maria.nome = "Maria Salvatore";
		sp_maria.esp = 2;
		
		sp_petry = this.add.button(300,240,'petry_sulivan', this.clickCharacter, this);
		sp_petry.anchor.setTo(0.5,0);
		sp_petry.scale.set(0.5);
		sp_petry.alpha = 0.4;
		sp_petry.inputEnabled = true;
		sp_petry.input.useHandCursor = true;
		sp_petry.variable = 5;
		sp_petry.nome = "Petry Sulivan";
		sp_petry.esp = 3;
		
		sp_sun = this.add.button(440,240,'sun_yanno', this.clickCharacter, this);
		sp_sun.anchor.setTo(0.5,0);
		sp_sun.scale.set(0.5);
		sp_sun.alpha = 0.4;
		sp_sun.inputEnabled = true;
		sp_sun.input.useHandCursor = true;
		sp_sun.variable = 6;
		sp_sun.nome = "Sun Yanno";
		sp_sun.esp = 3;
		
		confirmButton = this.add.button(this.scale.width/2, 500, 'comfirmButton', this.clickConfirmar, this, 1, 0);
		confirmButton.anchor.setTo(0.5,0);
		confirmButton.inputEnabled = true;
		confirmButton.input.useHandCursor = true;		
    },
    clickConfirmar: function() {
        var t = this;
		$.post( serverlink+"newplayer.php", { uId: idUsuario, nome: $('#tbNome').val(), esp: idEspecialidade}, function(ev){
			console.log(ev); 
			$('#tbNome').val('');
			$('#novo_personagem').hide();
			t.state.start('Preloader');
		} ).fail(function() {
			console.log( "error" );
		});
    },
	clickCharacter: function(item) {
		sp_jessica.alpha = 0.4;
		sp_juan.alpha = 0.4;
		sp_leon.alpha = 0.4;
		sp_maria.alpha = 0.4;
		sp_petry.alpha = 0.4;
		sp_sun.alpha = 0.4;
		
		item.alpha = 1;
		idChar = item.variable;
		txtNomeChar.setText(item.nome);
		idEspecialidade = item.variable;
	},
    update: function() {
		
    }
};