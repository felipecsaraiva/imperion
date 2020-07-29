Imperion.Main = function(game) {
   var isBaseOpen = false;
   var isMinasOpen = false;
   var isFabricasOpen = false;
   var isCentroTecnologicoOpen = false;
   var isMinasOpen = false;
   var lControlCaptacao = false;
   var isNaveOpen = false;
   var nivelExploracao = 1;
};
Imperion.Main.prototype = {
    create: function() {
		isBaseOpen = false;
		isMinasOpen = false;
		isFabricasOpen = false;
		isCentroTecnologicoOpen = false;
		isMinasOpen = false;
		isNaveOpen = false;
		nivelExploracao = 1;
		
		this.add.sprite(0,0,'mainscreen');

		nPerLife = parseInt(aplayer.hp * 134 / aplayer.hpmax);
		
		backhpbar = this.add.sprite(83,37,'backhp');
		backhpbar.width = 135;
		backhpbar.height = 17;
		
		for (i = 0; i < nPerLife; i++) {
			this.add.sprite(i+83,37,'lifebar');
		}
		
		nPerEnergy = parseInt(aplayer.mp * 119 / aplayer.mpmax);
		
		
		backmpbar = this.add.sprite(81,58,'backhp');
		backmpbar.width = 120;
		backmpbar.height = 13;
		
		for (i = 0; i < nPerEnergy; i++) {
			this.add.sprite(i+81,58,'energybar');
		}
		
		if (aplayer.conselheiro == "Jessica Jones")
			this.add.sprite(21,32,'portrait_jessica');
		if (aplayer.conselheiro == "Leon Jones")
			this.add.sprite(21,32,'portrait_leon');
		if (aplayer.conselheiro == "Juan Garcia")
			this.add.sprite(21,32,'portrait_juan');
		if (aplayer.conselheiro == "Maria Salvatore")
			this.add.sprite(21,32,'portrait_maria');
		if (aplayer.conselheiro == "Petry Sulivan")
			this.add.sprite(21,32,'portrait_petry');
		if (aplayer.conselheiro == "Sun Yanno")
			this.add.sprite(21,32,'portrait_sun');
		
		this.add.sprite(12,12,'player_info');
		
		nPerExp = parseInt((aplayer.exp-aplayer.expbase) * 100 / (aplayer.expnext-aplayer.expbase));
	
		if (nPerExp > 10){
			if (nPerExp < 20) {
				nExp = 10;
			} else if (nPerExp < 30){
				nExp = 20;			
			}else if (nPerExp < 40){
				nExp = 30;			
			}else if (nPerExp < 50){
				nExp = 40;
			}else if (nPerExp < 60){
				nExp = 50;
			}else if (nPerExp < 70){
				nExp = 60;
			}else if (nPerExp < 80){
				nExp = 70;
			}else if (nPerExp < 90){
				nExp = 80;
			}else if (nPerExp < 100){
				nExp = 90;
			}else{
				nExp = 100;
			}
			
			this.add.sprite(78,75,'exp'+nExp);
		}
		
		txtNomeChar = this.add.text(140, 19, aplayer.nome , { fill: "#F0F0F0", font: "bold 9pt Arial"});
		txtNomeChar.anchor.setTo(0.5,0);
		txtConselheiro = this.add.text(65,88, aplayer.conselheiro , { fill: "#83B5D0", font: "7pt Arial"});
		txtConselheiro.anchor.setTo(0,0);
		txtNivelChar = this.add.text(190, 88, "Nv. " + aplayer.nivel, { fill: "#FCFCFC", font: "7pt Arial"});
		txtNivelChar.anchor.setTo(1,0);
		
		goldimg = this.add.sprite(184,100,'gold');
		txtOuroChar = this.add.text(180,100, aplayer.ouro.toLocaleString() , { fill: "#F0F0F0", font: "7pt Arial"});
		txtOuroChar.anchor.setTo(1,0);
		
		base = this.add.button(100,190,'base',this.clickBase,this,1,0);
		base.inputEnabled = true;
		base.input.useHandCursor = true;	
		
		centro_pesquisa = this.add.button(368,95,'centro_pesquisa',this.clickCentroPesquisa,this,1,0);
		centro_pesquisa.inputEnabled = true;
		centro_pesquisa.input.useHandCursor = true;
		
	    fabricas = this.add.button(570,30,'fabricas',this.clickFabricas,this,1,0);
		fabricas.inputEnabled = false;
		fabricas.input.useHandCursor = true;
		
	    minas = this.add.button(880,220,'minas',this.clickMinas,this,1,0);
		minas.inputEnabled = true;
		minas.input.useHandCursor = true;
		
		exclminas = this.add.sprite(910,220,'exclamacao');
		anim = exclminas.animations.add('anima');
		anim.play(5,true);
		exclminas.scale.setTo(0);
				
		teleport = this.add.sprite(510,400,'teleport');
		teleport.animations.add('over', [1,2,3,4]);
		teleport.animations.play('over',10,true);
		teleport.scale.setTo(0.5);
		
		sprite = this.add.button(555, 420, 'player',this.clickNave,this);
		sprite.anchor.set(0.5);
		sprite.angle = 45;
		sprite.inputEnabled = true;
		sprite.input.useHandCursor = true;
		
    },
	clickNave: function() {
		base.input.useHandCursor = false;
		base.inputEnabled = false;
		centro_pesquisa.input.useHandCursor = false;
		centro_pesquisa.inputEnabled = false;
		fabricas.input.useHandCursor = false;
		fabricas.inputEnabled = false;
		minas.input.useHandCursor = false;
		minas.inputEnabled = false;
			
		offset = this.add.sprite(0,0,'offset');
		tela = this.add.sprite(512,300,'subscreen');
		tela.anchor.setTo(0.5,0.5);
		cmp1 = this.add.button(512,460,'btfechar',this.clickFecharNave,this);		
		cmp1.anchor.setTo(0.5,0);
		cmp1.inputEnabled = true;
		cmp1.input.useHandCursor = true;
		
		cmp2 = this.add.text(512,101,"EXPLORAR", { fill: "#83B5D0", font: "bold 10pt Arial"});
		cmp2.anchor.setTo(0.5,0);
		
		cmp3 = this.add.text(240,140,"Selecione um território para explorar", { fill: "#CCCCCC", font: "9pt Arial"});
		
		cmp4 = this.add.button(240,160,'area1',this.clickExplorar,this);
		cmp4.inputEnabled = true;
		cmp4.input.useHandCursor = true;
		cmp4.nivel = 1;
		
		cmp5 = this.add.button(350,160,'arealocked');
		cmp5.alpha = 0.5;
		
		cmp6 = this.add.button(460,160,'arealocked');
		cmp6.alpha = 0.5;
		
		cmp7 = this.add.button(570,160,'arealocked');
		cmp7.alpha = 0.5;
		
		cmp8 = this.add.button(680,160,'arealocked');
		cmp8.alpha = 0.5;
		
		isNaveOpen = true;
	},
	clickFecharNave: function() {
		isNaveOpen = false;
		
		base.input.useHandCursor = true;
		base.inputEnabled = true;
		centro_pesquisa.input.useHandCursor = true;
		centro_pesquisa.inputEnabled = true;
		fabricas.input.useHandCursor = true;
		fabricas.inputEnabled = true;
		minas.input.useHandCursor = true;
		minas.inputEnabled = true;
		
		cmp1.destroy();
		cmp2.destroy();
		cmp3.destroy();
		cmp4.destroy();
		cmp5.destroy();
		cmp6.destroy();
		cmp7.destroy();
		cmp8.destroy();
				
		offset.destroy();
		tela.destroy();
	},
	clickBase: function() {
		base.input.useHandCursor = false;
		base.inputEnabled = false;
		centro_pesquisa.input.useHandCursor = false;
		centro_pesquisa.inputEnabled = false;
		fabricas.input.useHandCursor = false;
		fabricas.inputEnabled = false;
		minas.input.useHandCursor = false;
		minas.inputEnabled = false;
			
		offset = this.add.sprite(0,0,'offset');
		tela = this.add.sprite(512,300,'subscreen');
		tela.anchor.setTo(0.5,0.5);
		cmp1 = this.add.button(512,460,'btfechar',this.clickFecharBase,this);		
		cmp1.anchor.setTo(0.5,0);		
		cmp1.inputEnabled = true;
		cmp1.input.useHandCursor = true;
		
		cmp2 = this.add.text(512,101,"CENTRAL DE COMANDO", { fill: "#83B5D0", font: "bold 10pt Arial"});
		cmp2.anchor.setTo(0.5,0);
		
		if (aplayer.conselheiro == "Jessica Jones")
			cmp3 = this.add.sprite(250,140,'jessica_jones');
		if (aplayer.conselheiro == "Leon Jones")
			cmp3 = this.add.sprite(250,140,'leon_jones');
		if (aplayer.conselheiro == "Juan Garcia")
			cmp3 = this.add.sprite(250,140,'juan_garcia');
		if (aplayer.conselheiro == "Maria Salvatore")
			cmp3 = this.add.sprite(250,140,'maria_salvatore');
		if (aplayer.conselheiro == "Petry Sulivan")
			cmp3 = this.add.sprite(250,140,'petry_sulivan');
		if (aplayer.conselheiro == "Sun Yanno")
			cmp3 = this.add.sprite(250,140,'sun_yanno');
		
		cmp3.scale.set(0.5);
		cmp4 = this.add.text(400,140,aplayer.nome , { fill: "#F0F0F0", font: "bold 11pt Arial"});
		cmp5 = this.add.text(400,160, aplayer.conselheiro , { fill: "#83B5D0", font: "9pt Arial"});
		
		cmp6 = this.add.text(400,190, "Energia:", { fill: "#F0F0F0", font: "9pt Arial"});
		cmp7 = this.add.text(480,190, aplayer.hp + " / " + aplayer.hpmax , { fill: "#FCFCFC", font: "bold 9pt Arial"});
		
		cmp8 = this.add.text(400,210, "Combustível:", { fill: "#F0F0F0", font: "9pt Arial"});
		cmp9 = this.add.text(480,210, aplayer.mp + " / " + aplayer.mpmax , { fill: "#FCFCFC", font: "bold 9pt Arial"});
		
		cmp10 = this.add.text(400,230, "Experiência:", { fill: "#F0F0F0", font: "9pt Arial"});
		cmp11 = this.add.text(480,230, aplayer.exp + " / " + aplayer.expnext , { fill: "#FCFCFC", font: "bold 9pt Arial"});
		
		cmp12 = this.add.text(400,250, "Nível " + aplayer.nivel, { fill: "#FCFCFC", font: "bold 9pt Arial"});
		
		cmp13 = this.add.sprite(250,280,'separator');
		
		cmp14 = this.add.text(250,300, "Características ("+aplayer.pontos+")" , { fill: "#FCFCFC", font: "bold 9pt Arial"});
		cmp15 = this.add.text(250,320, "Diplomacia",{ fill: "#F0F0F0", font: "9pt Arial"});
		cmp16 = this.add.text(350,320, aplayer.diplomacia,{ fill: "#FCFCFC", font: "bold 9pt Arial"});
		cmp16.anchor.setTo(1,0);
		
		btMaisDiplomacia = this.add.button(360,318,'btmais',this.clickMaisDiplomacia,this);
		btMaisDiplomacia.scale.setTo(0);
		
		cmp17 = this.add.text(250,340, "Tecnologia",{ fill: "#F0F0F0", font: "9pt Arial"});
		cmp18 = this.add.text(350,340, aplayer.tecnologia,{ fill: "#FCFCFC", font: "bold 9pt Arial"});
		cmp18.anchor.setTo(1,0);
		
		btMaisTecnologia = this.add.button(360,338,'btmais',this.clickMaisTecnologia,this);
		btMaisTecnologia.scale.setTo(0);
				
		cmp19 = this.add.text(250,360, "Poder",{ fill: "#F0F0F0", font: "9pt Arial"});
		cmp20 = this.add.text(350,360, aplayer.poder,{ fill: "#FCFCFC", font: "bold 9pt Arial"});
		cmp20.anchor.setTo(1,0);
		
		btMaisPoder = this.add.button(360,358,'btmais',this.clickMaisPoder,this);
		btMaisPoder.scale.setTo(0);
		
		cmp21 = this.add.text(250,380, "Captação",{ fill: "#F0F0F0", font: "9pt Arial"});
		cmp22 = this.add.text(350,380, aplayer.captacao,{ fill: "#FCFCFC", font: "bold 9pt Arial"});
		cmp22.anchor.setTo(1,0);
		
		btMaisCaptacao = this.add.button(360,378,'btmais',this.clickMaisCaptacao,this);
		btMaisCaptacao.scale.setTo(0);
		
		cmp23 = this.add.text(540,140, "Central de Comando Nivel " + aplayer.base.nivel , { fill: "#F0F0F0", font: "bold 11pt Arial"});
		cmp24 = this.add.text(540,160, "Próxima melhoria no nível de personagem " + aplayer.base.nivel_personagem , { fill: "#666666", font: "8pt Arial"});
		
		btMelhorarBase = this.add.button(660,160,'btmelhorar',this.clickMelhorarBase,this);
		btMelhorarBase.scale.setTo(0);
		
		cmp25 = this.add.sprite(640,170,'gold');
		cmp26 = this.add.text(637,170,aplayer.base.custo.toLocaleString() , { fill: "#f2ed7a", font: "bold 9pt Arial"});
		cmp26.anchor.setTo(1,0);
		
		cmp27 = this.add.text(500,320, "Poder de Dano: 0~" + aplayer.gun.poder , { fill: "#F0F0F0", font: "9pt Arial"});
		cmp28 = this.add.text(500,340, "Velocidade de Ataque: " + aplayer.gun.velocidade + " ms", { fill: "#F0F0F0", font: "9pt Arial"});
		cmp29 = this.add.text(500,360, "Alcance do Ataque: " + aplayer.gun.alcance, { fill: "#F0F0F0", font: "9pt Arial"});
		cmp30 = this.add.text(500,380, "Velocidade da Nave: " + aplayer.velocidade, { fill: "#F0F0F0", font: "9pt Arial"});
		
		isBaseOpen = true;
	},
	clickMelhorarBase: function() {
		aplayer.base.nivel_personagem += 5;
		aplayer.base.nivel += 1;
		aplayer.ouro -= aplayer.base.custo;
		aplayer.base.custo = aplayer.base.nivel_personagem * 1000;
		cmp23.setText("Central de Comando Nivel " + aplayer.base.nivel);
		cmp24.setText("Próxima melhoria no nível de personagem " + aplayer.base.nivel_personagem);
		cmp26.setText(aplayer.base.custo.toLocaleString());
		txtOuroChar.setText(aplayer.ouro.toLocaleString());
		
		$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'melhorarbase' }, function(ev){
			
			if (aplayer.nivel >= aplayer.base.nivel_personagem)
			{
				btMelhorarBase.scale.setTo(1);
				cmp24.scale.setTo(0);
			}
			else
			{
				btMelhorarBase.scale.setTo(0);
				cmp24.scale.setTo(1);				
			}
			
		} ).fail(function() {
			console.log( "error" );
		});
	},
	clickMaisDiplomacia: function() {
		aplayer.diplomacia++;
		aplayer.pontos--;
		
		$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'updiplomacia' }, function(ev){
			
			cmp16.setText(aplayer.diplomacia);
			cmp14.setText("Características ("+aplayer.pontos+")");			
		} ).fail(function() {
			console.log( "error" );
		});
		
		if (aplayer.pontos == 0)
		{
			btMaisDiplomacia.scale.setTo(0);
			btMaisTecnologia.scale.setTo(0);
			btMaisPoder.scale.setTo(0);
			btMaisCaptacao.scale.setTo(0);
		}
	},
	clickMaisTecnologia: function() {
		aplayer.tecnologia++;
		aplayer.pontos--;
		
		aplayer.velocidade = parseInt(38+(aplayer.nivel*10)+(aplayer.tecnologia*2));
		aplayer.gun.velocidade = parseInt(1052-(aplayer.nivel*50)-(aplayer.tecnologia/2)*5);
		aplayer.gun.alcance = parseInt(188+(aplayer.nivel*10)+(aplayer.tecnologia*2));
		
		$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'uptecnologia' }, function(ev){
			
			cmp18.setText(aplayer.tecnologia);
			cmp14.setText("Características ("+aplayer.pontos+")");
			
			cmp28.setText("Velocidade de Ataque: " + aplayer.gun.velocidade + " ms");
			cmp29.setText("Alcance do Ataque: " + aplayer.gun.alcance);
			cmp30.setText("Velocidade da Nave: " + aplayer.velocidade);
			
		} ).fail(function() {
			console.log( "error" );
		});
		if (aplayer.pontos == 0)
		{
			btMaisDiplomacia.scale.setTo(0);
			btMaisTecnologia.scale.setTo(0);
			btMaisPoder.scale.setTo(0);
			btMaisCaptacao.scale.setTo(0);
		}
		
		
	},
	clickMaisPoder: function() {
		aplayer.poder++;
		aplayer.pontos--;
		
		aplayer.gun.poder = parseInt(88+(aplayer.nivel*10)+(aplayer.poder*2));
			
		$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'uppoder' }, function(ev){
			
			cmp20.setText(aplayer.poder);
			cmp14.setText("Características ("+aplayer.pontos+")");
			cmp27.setText("Poder de Ataque: 0~" + aplayer.gun.poder);
		} ).fail(function() {
			console.log( "error" );
		});
		if (aplayer.pontos == 0)
		{
			btMaisDiplomacia.scale.setTo(0);
			btMaisTecnologia.scale.setTo(0);
			btMaisPoder.scale.setTo(0);
			btMaisCaptacao.scale.setTo(0);
		}
	},
	clickMaisCaptacao: function() {
		aplayer.captacao++;
		aplayer.pontos--;
		$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'upcaptacao' }, function(ev){
				
			cmp22.setText(aplayer.captacao);
			cmp14.setText("Características ("+aplayer.pontos+")");
			
		} ).fail(function() {
			console.log( "error" );
		});
		if (aplayer.pontos == 0)
		{
			btMaisDiplomacia.scale.setTo(0);
			btMaisTecnologia.scale.setTo(0);
			btMaisPoder.scale.setTo(0);
			btMaisCaptacao.scale.setTo(0);
		}
	},
	clickFecharBase: function() {
		
		isBaseOpen = false;
		
		base.input.useHandCursor = true;
		base.inputEnabled = true;
		centro_pesquisa.input.useHandCursor = true;
		centro_pesquisa.inputEnabled = true;
		fabricas.input.useHandCursor = true;
		fabricas.inputEnabled = true;
		minas.input.useHandCursor = true;
		minas.inputEnabled = true;
		
		cmp1.destroy();
		cmp2.destroy();
		cmp3.destroy();
		cmp4.destroy();
		cmp5.destroy();
		cmp6.destroy();
		cmp7.destroy();
		cmp8.destroy();
		cmp9.destroy();
		cmp10.destroy();
		cmp11.destroy();
		cmp12.destroy();
		cmp13.destroy();
		cmp14.destroy();
		cmp15.destroy();
		cmp16.destroy();
		cmp17.destroy();
		cmp18.destroy();
		cmp19.destroy();
		cmp20.destroy();
		cmp21.destroy();
		cmp22.destroy();
		cmp23.destroy();
		cmp24.destroy();
		cmp25.destroy();
		cmp26.destroy();
		cmp27.destroy();
		cmp28.destroy();
		cmp29.destroy();
		cmp30.destroy();
		
		
		btMaisDiplomacia.destroy();
		btMaisTecnologia.destroy();
		btMaisPoder.destroy();
		btMaisCaptacao.destroy();
		btMelhorarBase.destroy();
		
		offset.destroy();
		tela.destroy();
	},
	clickCentroPesquisa: function() {
		base.input.useHandCursor = false;
		base.inputEnabled = false;
		centro_pesquisa.input.useHandCursor = false;
		centro_pesquisa.inputEnabled = false;
		fabricas.input.useHandCursor = false;
		fabricas.inputEnabled = false;
		minas.input.useHandCursor = false;
		minas.inputEnabled = false;
			
		offset = this.add.sprite(0,0,'offset');
		tela = this.add.sprite(512,300,'subscreen');
		tela.anchor.setTo(0.5,0.5);
		cmp1 = this.add.button(512,460,'btfechar',this.clickFecharCentroPesquisa,this);		
		cmp1.anchor.setTo(0.5,0);
		cmp1.inputEnabled = true;
		cmp1.input.useHandCursor = true;
		
		cmp2 = this.add.text(512,101,"CENTRO DE PESQUISAS", { fill: "#83B5D0", font: "bold 10pt Arial"});
		cmp2.anchor.setTo(0.5,0);
			
		cmp3 = this.add.text(540,140, "Centro de Pesquisas Nivel " + aplayer.centro_pesquisa.nivel , { fill: "#F0F0F0", font: "bold 11pt Arial"});
		cmp4 = this.add.text(540,160, "Próxima melhoria no nível de tecnologia " + aplayer.centro_pesquisa.tecnologia , { fill: "#666666", font: "8pt Arial"});
		
		btMelhorarCentroPesquisa = this.add.button(660,160,'btmelhorar',this.clickMelhorarCentroPesquisa,this);
		btMelhorarCentroPesquisa.scale.setTo(0);
		
		cmp50 = this.add.sprite(640,170,'gold');
		cmp51 = this.add.text(637,170,aplayer.centro_pesquisa.custo.toLocaleString() , { fill: "#f2ed7a", font: "bold 9pt Arial"});
		cmp51.anchor.setTo(1,0);
		
		cmp29 = this.add.text(770,190, aplayer.centro_pesquisa.pontos + " pontos restantes" , { fill: "#83B5D0", font: "bold 10pt Arial"});
		cmp29.anchor.setTo(1,0);
		
		cmp5 = this.add.text(250,190, "Nivel 1" , { fill: "#83B5D0", font: "bold 9pt Arial"}); 
		cmp10 = this.add.sprite(250,210,'separator');
		cmp6 = this.add.sprite(400,220,'tec1');
		cmp6.identify = 1;
		cmp6.inputEnabled = true;
		cmp6.events.onInputOver.add(this.overTec, this);
		cmp6.events.onInputOut.add(this.outTec, this);
		
		cmp30 = this.add.text(447,223, aplayer.centro_pesquisa.pericia1.toString() , { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp30.anchor.setTo(1,0);
		cmp25 = this.add.button(420,265,'btmais',this.clickMaisTec,this);
		cmp25.identify = 1;
		cmp25.scale.setTo(0);
		
		cmp7 = this.add.sprite(460,220,'tec2');
		cmp7.identify = 2;
		cmp7.inputEnabled = true;
		cmp7.events.onInputOver.add(this.overTec,this);
		cmp7.events.onInputOut.add(this.outTec,this);
		
		cmp31 = this.add.text(507,223, aplayer.centro_pesquisa.pericia2.toString() , { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp31.anchor.setTo(1,0);
		cmp26 = this.add.button(480,265,'btmais',this.clickMaisTec,this);
		cmp26.identify = 2;
		cmp26.scale.setTo(0);
		
		cmp8 = this.add.sprite(520,220,'tec3');
		cmp8.identify = 3;
		cmp8.inputEnabled = true;
		cmp8.events.onInputOver.add(this.overTec,this);
		cmp8.events.onInputOut.add(this.outTec,this);
		
		cmp32 = this.add.text(567,223, aplayer.centro_pesquisa.pericia3.toString() , { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp32.anchor.setTo(1,0);
		cmp27 = this.add.button(540,265,'btmais',this.clickMaisTec,this);
		cmp27.identify = 3;
		cmp27.scale.setTo(0);
		
		cmp9 = this.add.sprite(580,220,'tec4');
		cmp9.identify = 4;
		cmp9.inputEnabled = true;
		cmp9.events.onInputOver.add(this.overTec,this);
		cmp9.events.onInputOut.add(this.outTec,this);
		
		cmp33 = this.add.text(627,223, aplayer.centro_pesquisa.pericia4.toString() , { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp33.anchor.setTo(1,0);
		cmp28 = this.add.button(600,265,'btmais',this.clickMaisTec,this);
		cmp28.identify = 4;
		cmp28.scale.setTo(0);
		
		cmp11 = this.add.text(250,280, "Nivel 5" , { fill: "#83B5D0", font: "bold 9pt Arial"}); 
		cmp12 = this.add.sprite(250,300,'separator');
		
		cmp13 = this.add.sprite(400,310,'tec5');
		cmp13.identify = 5;
		cmp13.inputEnabled = true;
		cmp13.events.onInputOver.add(this.overTec,this);
		cmp13.events.onInputOut.add(this.outTec,this);
		
		cmp34 = this.add.text(447,313, aplayer.centro_pesquisa.pericia5.toString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp34.anchor.setTo(1,0);
		cmp35 = this.add.button(420,355,'btmais', this.clickMaisTec,this);
		cmp35.identify = 5;
		cmp35.scale.setTo(0);
		
		cmp14 = this.add.sprite(460,310,'tec6');
		cmp14.identify = 6;
		cmp14.inputEnabled = true;
		cmp14.events.onInputOver.add(this.overTec,this);
		cmp14.events.onInputOut.add(this.outTec,this);
		
		cmp36 = this.add.text(507,313, aplayer.centro_pesquisa.pericia6.toString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp36.anchor.setTo(1,0);
		cmp37 = this.add.button(480,355,'btmais', this.clickMaisTec,this);
		cmp37.identify = 6;
		cmp37.scale.setTo(0);
		
		cmp15 = this.add.sprite(520,310,'tec7');
		cmp15.identify = 7;
		cmp15.inputEnabled = true;
		cmp15.events.onInputOver.add(this.overTec,this);
		cmp15.events.onInputOut.add(this.outTec,this);
		
		cmp38 = this.add.text(567,313, aplayer.centro_pesquisa.pericia7.toString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp38.anchor.setTo(1,0);
		cmp39 = this.add.button(540,355,'btmais', this.clickMaisTec,this);
		cmp39.identify = 7;
		cmp39.scale.setTo(0);
		
		cmp16 = this.add.sprite(580,310,'tec8');
		cmp16.identify = 8;
		cmp16.inputEnabled = true;
		cmp16.events.onInputOver.add(this.overTec,this);
		cmp16.events.onInputOut.add(this.outTec,this);
		
		cmp40 = this.add.text(627,313, aplayer.centro_pesquisa.pericia8.toString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp40.anchor.setTo(1,0);
		cmp41 = this.add.button(600,355,'btmais', this.clickMaisTec,this);
		cmp41.identify = 8;
		cmp41.scale.setTo(0);
		
		
		cmp17 = this.add.text(250,370, "Nivel 10" , { fill: "#83B5D0", font: "bold 9pt Arial"}); 
		cmp18 = this.add.sprite(250,390,'separator');
		
		cmp19 = this.add.sprite(400,400,'tec9');
		cmp19.identify = 9;
		cmp19.inputEnabled = true;
		cmp19.events.onInputOver.add(this.overTec,this);
		cmp19.events.onInputOut.add(this.outTec,this);
		
		cmp42 = this.add.text(447,403, aplayer.centro_pesquisa.pericia9.toString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp42.anchor.setTo(1,0);
		cmp43 = this.add.button(420,445,'btmais', this.clickMaisTec,this);
		cmp43.identify = 9;
		cmp43.scale.setTo(0);
		
		cmp20 = this.add.sprite(460,400,'tec10');
		cmp20.identify = 10;
		cmp20.inputEnabled = true;
		cmp20.events.onInputOver.add(this.overTec,this);
		cmp20.events.onInputOut.add(this.outTec,this);
		
		cmp44 = this.add.text(507,403, aplayer.centro_pesquisa.pericia10.toString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp44.anchor.setTo(1,0);
		cmp45 = this.add.button(480,445,'btmais', this.clickMaisTec,this);
		cmp45.identify = 10;
		cmp45.scale.setTo(0);
				
		cmp21 = this.add.sprite(520,400,'tec11');
		cmp21.identify = 11;
		cmp21.inputEnabled = true;
		cmp21.events.onInputOver.add(this.overTec,this);
		cmp21.events.onInputOut.add(this.outTec,this);
		
		cmp46 = this.add.text(567,403, aplayer.centro_pesquisa.pericia11.toString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp46.anchor.setTo(1,0);
		cmp47 = this.add.button(540,445,'btmais', this.clickMaisTec,this);
		cmp47.identify = 11;
		cmp47.scale.setTo(0);
		
		cmp22 = this.add.sprite(580,400,'tec12');
		cmp22.identify = 12;
		cmp22.inputEnabled = true;
		cmp22.events.onInputOver.add(this.overTec,this);
		cmp22.events.onInputOut.add(this.outTec,this);
		
		cmp48 = this.add.text(627,403, aplayer.centro_pesquisa.pericia12.toString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp48.anchor.setTo(1,0);
		cmp49 = this.add.button(600,445,'btmais', this.clickMaisTec,this);
		cmp49.identify = 12;
		cmp49.scale.setTo(0);
		
		cmp23 = this.add.text(250,140, "" , { fill: "#feff89", font: "9pt Arial"});
		cmp24 = this.add.text(250,155, "", { fill: "#CCCCCC", font: "8pt Arial"});
		cmp24.wordWrap = true;
		cmp24.wordWrapWidth = 300;
		
		isCentroTecnologicoOpen = true;
	},
	clickMaisTec: function(item) {
		aplayer.centro_pesquisa.pontos--;
		$.post( serverlink+"update.php", { uId: aplayer.centro_pesquisa.id, pericia: item.identify, tipo: 'melhorarpericia' }, function(ev){
				if (item.identify == 1)
				{
					aplayer.centro_pesquisa.pericia1++;
				}
				if (item.identify == 2)
				{
					aplayer.centro_pesquisa.pericia2++;					
				}
				if (item.identify == 3)
				{
					aplayer.centro_pesquisa.pericia3++;					
				}
				if (item.identify == 4)
				{
					aplayer.centro_pesquisa.pericia4++;					
				}
				if (item.identify == 5)
				{
					aplayer.centro_pesquisa.pericia5++;					
				}
				if (item.identify == 6)
				{
					aplayer.centro_pesquisa.pericia6++;					
				}
				if (item.identify == 7)
				{
					aplayer.centro_pesquisa.pericia7++;					
				}
				if (item.identify == 8)
				{
					aplayer.centro_pesquisa.pericia8++;					
				}
				if (item.identify == 9)
				{
					aplayer.centro_pesquisa.pericia9++;					
				}
				if (item.identify == 10)
				{
					aplayer.centro_pesquisa.pericia10++;					
				}
				if (item.identify == 11)
				{
					aplayer.centro_pesquisa.pericia11++;					
				}
				if (item.identify == 12)
				{
					aplayer.centro_pesquisa.pericia12++;					
				}
			} ).fail(function() {
				console.log( "error" );
			});
	},
	overTec: function(item) {
		if (item.identify == 1)
		{
			cmp23.setText(apericias.pericia1);
			cmp24.setText(apericias.descper1);
		}
		if (item.identify == 2)
		{
			cmp23.setText(apericias.pericia2);
			cmp24.setText(apericias.descper2);
		}
		if (item.identify == 3)
		{
			cmp23.setText(apericias.pericia3);
			cmp24.setText(apericias.descper3);
		}
		if (item.identify == 4)
		{
			cmp23.setText(apericias.pericia4);
			cmp24.setText(apericias.descper4);		
		}
		if (item.identify == 5)
		{
			cmp23.setText(apericias.pericia5);
			cmp24.setText(apericias.descper5);	
		}
		if (item.identify == 6)
		{
			cmp23.setText(apericias.pericia6);
			cmp24.setText(apericias.descper6);	
		}
		if (item.identify == 7)
		{
			cmp23.setText(apericias.pericia7);
			cmp24.setText(apericias.descper7);	
		}
		if (item.identify == 8)
		{
			cmp23.setText(apericias.pericia8);
			cmp24.setText(apericias.descper8);	
		}
		if (item.identify == 9)
		{
			cmp23.setText(apericias.pericia9);
			cmp24.setText(apericias.descper9);	
		}
		if (item.identify == 10)
		{
			cmp23.setText(apericias.pericia10);
			cmp24.setText(apericias.descper10);	
		}
		if (item.identify == 11)
		{
			cmp23.setText(apericias.pericia11);
			cmp24.setText(apericias.descper11);	
		}
		if (item.identify == 12)
		{
			cmp23.setText(apericias.pericia12);
			cmp24.setText(apericias.descper12);	
		}
	},
	outTec: function(item) {
		cmp23.setText("");
		cmp24.setText("");
	},
	clickMelhorarCentroPesquisa: function() {
		aplayer.centro_pesquisa.tecnologia += 5;
		aplayer.ouro -= aplayer.centro_pesquisa.custo;
		aplayer.centro_pesquisa.custo = aplayer.centro_pesquisa.tecnologia*600;
		aplayer.centro_pesquisa.nivel += 1;
		aplayer.centro_pesquisa.pontos += 3;
		cmp3.setText("Centro de Pesquisas Nivel " + aplayer.centro_pesquisa.nivel);
		cmp4.setText("Próxima melhoria no nível de tecnologia " + aplayer.centro_pesquisa.tecnologia);
		cmp29.setText(aplayer.centro_pesquisa.pontos + " pontos restantes");
		cmp51.setText(aplayer.centro_pesquisa.custo.toLocaleString());
		txtOuroChar.setText(aplayer.ouro.toLocaleString());
		
		$.post( serverlink+"update.php", { uId: aplayer.centro_pesquisa.id, tipo: 'melhorarcentropesquisa' }, function(ev){
			
			if (aplayer.tecnologia >= aplayer.centro_pesquisa.tecnologia)
			{
				btMelhorarCentroPesquisa.scale.setTo(1);
				cmp4.scale.setTo(0);
			}
			else
			{
				btMelhorarCentroPesquisa.scale.setTo(0);
				cmp4.scale.setTo(1);				
			}
			
			if (aplayer.centro_pesquisa.nivel < 10)
			{
				cmp19.alpha = 0.3;
				cmp20.alpha = 0.3;
				cmp21.alpha = 0.3;
				cmp22.alpha = 0.3;
				if (aplayer.centro_pesquisa.nivel < 5)
				{
					cmp13.alpha = 0.3;
					cmp14.alpha = 0.3;
					cmp15.alpha = 0.3;
					cmp16.alpha = 0.3;
				}
			}
		} ).fail(function() {
			console.log( "error" );
		});
	},
	clickFecharCentroPesquisa: function() {
		$.getJSON(serverlink+"getuserplayers.php?callback=?", { Id: aplayer.idusuario }, function (data) {
			$.each( data, function ( i, val ) {
				aplayer = { 
					idusuario: parseInt(val["id_usuario"]),
					id: parseInt(val["id_personagem"]),
					nome: val["tx_nome"].toString(),
					hpmax: parseInt(88+(parseInt(val["nr_nivel_personagem"])*10)+(parseInt(val["nr_poder"])*2)), //parseInt(val["nr_energia_total"]),
					hp: parseInt(val["nr_energia"]),
					mpmax: parseInt(9+(parseInt(val["nr_nivel_personagem"]))+(parseInt(val["nr_tecnologia"])*0.2)), //parseInt(val["nr_combustivel_total"]),
					mp: parseInt(val["nr_combustivel"]),
					exp: parseInt(val["nr_exp_atual"]),
					expnext: parseInt(val["nr_exp_next"]),
					expbase: parseInt(val["nr_exp_base"]),
					nivel: parseInt(val["nr_nivel_personagem"]),
					especialidade: parseInt(val["id_especialidade"]),
					conselheiro: val["tx_conselheiro"].toString(),
					ouro: parseInt(val["nr_ouro"]),
					diplomacia: parseInt(val["nr_diplomacia"]),
					tecnologia: parseInt(val["nr_tecnologia"]),
					poder: parseInt(val["nr_poder"]),
					captacao: parseInt(val["nr_captacao"]),
					pontos: parseInt(val["nr_pontos"]),
					velocidade: parseInt(38+(parseInt(val["nr_nivel_personagem"])*10)+(parseInt(val["nr_tecnologia"])*2)),			
					pericias: {
						alcance: parseInt(val["nr_mais_alcance"]),
						poder: parseInt(val["nr_mais_poder"]),
						velocidadeataque: parseInt(val["nr_mais_velocidade_ataque"]),
						velocidade: parseInt(val["nr_mais_velocidade"]),
						energia: parseInt(val["nr_mais_energia"]),
						combustivel: parseInt(val["nr_mais_combustivel"]),
						critico: parseInt(val["nr_mais_critico"])
					},
					gun: {
						poder: parseInt(88+(parseInt(val["nr_nivel_personagem"])*10)+(parseInt(val["nr_poder"])*2)),
						velocidade: parseInt(1052-(parseInt(val["nr_nivel_personagem"])*50)-(parseInt(val["nr_tecnologia"])/2)*5),
						alcance: parseInt(188+(parseInt(val["nr_nivel_personagem"])*10)+(parseInt(val["nr_tecnologia"])*2))
					},
					base: {
						nivel: parseInt(val["nr_nivel_base"]),
						custo: parseInt(val["nr_custo_base"]),
						nivel_personagem: parseInt(val["nr_personagem_nivel"])
					},
					centro_pesquisa: {
						id: parseInt(val["id_centro_pesquisa"]),
						nivel: parseInt(val["nr_nivel_centro_pesquisa"]),
						nivel_personagem: parseInt(val["nr_nivel_personagem_centro_pesquisa"]),
						custo: parseInt(val["nr_custo_centro_pesquisa"]),
						tecnologia: parseInt(val["nr_tecnolgia_centro_pesquisa"]),
						pontos: parseInt(val["nr_pontos_centro_pesquisa"]),
						pericia1: parseInt(val["nr_nivel_pericia1"]),
						pericia2: parseInt(val["nr_nivel_pericia2"]),
						pericia3: parseInt(val["nr_nivel_pericia3"]),
						pericia4: parseInt(val["nr_nivel_pericia4"]),
						pericia5: parseInt(val["nr_nivel_pericia5"]),
						pericia6: parseInt(val["nr_nivel_pericia6"]),
						pericia7: parseInt(val["nr_nivel_pericia7"]),
						pericia8: parseInt(val["nr_nivel_pericia8"]),
						pericia9: parseInt(val["nr_nivel_pericia9"]),
						pericia10: parseInt(val["nr_nivel_pericia10"]),
						pericia11: parseInt(val["nr_nivel_pericia11"]),
						pericia12: parseInt(val["nr_nivel_pericia12"])
					},
					minas: {
						id: parseInt(val["id_mina"]),
						nivel: parseInt(val["nr_nivel_mina"]),
						nivel_personagem: parseInt(val["nr_nivel_personagem_mina"]),
						captacao: parseInt(val["nr_captacao_mina"]),
						custo: parseInt(val["nr_custo_mina"]),
						ouro: parseInt(val["nr_ouro_mina"]),
						cristal:  parseInt(val["nr_cristal_mina"]),
						plutonio:  parseInt(val["nr_plutonio_mina"]),
						data: new Date(parseInt(val["ano_acao_mina"]),parseInt(val["mes_acao_mina"])-1,parseInt(val["dia_acao_mina"]),parseInt(val["hora_acao_mina"]),parseInt(val["minuto_acao_mina"]),parseInt(val["segundo_acao_mina"]))
					},
					fabricas: {
						id: parseInt(val["id_fabrica"]),
						nivel: parseInt(val["nr_nivel_fabrica"]),
						tecnologia: parseInt(val["nr_tecnologia_fabrica"]),
						custo: parseInt(val["nr_custo_fabrica"])
					}
				}
				
				aplayer.gun.alcance = parseInt(aplayer.gun.alcance * (1+(aplayer.pericias.alcance * 0.01)));
				aplayer.gun.poder = parseInt(aplayer.gun.poder * (1+(aplayer.pericias.poder * 0.01)));
				aplayer.gun.velocidade = parseInt(aplayer.gun.velocidade - (aplayer.gun.velocidade*(aplayer.pericias.velocidadeataque * 0.01)));
				aplayer.velocidade = parseInt(aplayer.velocidade * (1+(aplayer.pericias.velocidade * 0.01)));
				
				aplayer.hpmax = parseInt(aplayer.hpmax * (1+(aplayer.pericias.energia*0.01)));
				aplayer.mpmax = parseInt(aplayer.mpmax * (1+(aplayer.pericias.combustivel*0.01)));
				if (aplayer.gun.velocidade < 100)
				{
					aplayer.gun.velocidade = 100;
				}
						
				isCentroTecnologicoOpen = false;
				
				base.input.useHandCursor = true;
				base.inputEnabled = true;
				centro_pesquisa.input.useHandCursor = true;
				centro_pesquisa.inputEnabled = true;
				fabricas.input.useHandCursor = true;
				fabricas.inputEnabled = true;
				minas.input.useHandCursor = true;
				minas.inputEnabled = true;
				
				cmp1.destroy();
				cmp2.destroy();
				cmp3.destroy();
				cmp4.destroy();
				cmp5.destroy();
				cmp6.destroy();
				cmp7.destroy();
				cmp8.destroy();
				cmp9.destroy();
				cmp10.destroy();
				cmp11.destroy();
				cmp12.destroy();
				cmp13.destroy();
				cmp14.destroy();
				cmp15.destroy();
				cmp16.destroy();
				cmp17.destroy();
				cmp18.destroy();
				cmp19.destroy();
				cmp20.destroy();
				cmp21.destroy();
				cmp22.destroy();
				cmp23.destroy();
				cmp24.destroy();
				cmp25.destroy();
				cmp26.destroy();
				cmp27.destroy();
				cmp28.destroy();
				cmp29.destroy();
				cmp30.destroy();
				cmp31.destroy();
				cmp32.destroy();
				cmp33.destroy();
				cmp34.destroy();
				cmp35.destroy();
				cmp36.destroy();
				cmp37.destroy();
				cmp38.destroy();
				cmp39.destroy();
				cmp40.destroy();
				cmp41.destroy();
				cmp42.destroy();
				cmp43.destroy();
				cmp44.destroy();
				cmp45.destroy();
				cmp46.destroy();
				cmp47.destroy();
				cmp48.destroy();
				cmp49.destroy();
				cmp50.destroy();
				cmp51.destroy();
						
				btMelhorarCentroPesquisa.destroy();
				
				offset.destroy();
				
				
				tela.destroy();
				
			});
		});

	},
	clickFabricas: function() {
		base.input.useHandCursor = false;
		base.inputEnabled = false;
		centro_pesquisa.input.useHandCursor = false;
		centro_pesquisa.inputEnabled = false;
		fabricas.input.useHandCursor = false;
		fabricas.inputEnabled = false;
		minas.input.useHandCursor = false;
		minas.inputEnabled = false;
			
		offset = this.add.sprite(0,0,'offset');
		tela = this.add.sprite(512,300,'subscreen');
		tela.anchor.setTo(0.5,0.5);
		cmp1 = this.add.button(512,460,'btfechar',this.clickFecharFabricas,this);		
		cmp1.anchor.setTo(0.5,0);
		cmp1.inputEnabled = true;
		cmp1.input.useHandCursor = true;
		
		cmp2 = this.add.text(512,101,"FÁBRICAS", { fill: "#83B5D0", font: "bold 10pt Arial"});
		cmp2.anchor.setTo(0.5,0);
			
		cmp3 = this.add.text(630,140, "Fábricas Nivel " + aplayer.fabricas.nivel , { fill: "#F0F0F0", font: "bold 11pt Arial"});
		cmp4 = this.add.text(540,160, "Próxima melhoria no nível de tecnologia " + aplayer.fabricas.tecnologia , { fill: "#666666", font: "8pt Arial"});
		
		btMelhorarFabricas = this.add.button(660,160,'btmelhorar',this.clickMelhorarFabricas,this);
		btMelhorarFabricas.scale.setTo(0);
		
		cmp5 = this.add.sprite(640,170,'gold');
		cmp6 = this.add.text(637,170,aplayer.fabricas.custo.toLocaleString() , { fill: "#f2ed7a", font: "bold 9pt Arial"});
		cmp6.anchor.setTo(1,0);
		
		cmp7 = this.add.sprite(250,200,'separator');
		cmp8 = this.add.sprite(250,211,'gun1');
		cmp9 = this.add.sprite(250,262,'gun2');
		cmp10 = this.add.sprite(250,313,'gun3');
		cmp11 = this.add.sprite(250,364,'gun4');
		
		isFabricasOpen = true;
	},
	clickMelhorarFabricas: function() {
		aplayer.fabricas.tecnologia += 3;
		aplayer.fabricas.nivel += 1;
		aplayer.ouro -= aplayer.fabricas.custo;
		aplayer.fabricas.custo = aplayer.fabricas.tecnologia * 300
		cmp3.setText("Fábricas Nivel " + aplayer.fabricas.nivel);
		cmp4.setText("Próxima melhoria no nível de tecnologia " + aplayer.fabricas.tecnologia);
		txtOuroChar.setText(aplayer.ouro.toLocaleString());
		cmp6.setText(aplayer.fabricas.custo.toLocaleString());
		
		$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'melhorarfabricas' }, function(ev){
			
			if (aplayer.tecnologia >= aplayer.fabricas.tecnologia)
			{
				btMelhorarFabricas.scale.setTo(1);
				cmp4.scale.setTo(0);
			}
			else
			{
				btMelhorarFabricas.scale.setTo(0);
				cmp4.scale.setTo(1);				
			}			
		} ).fail(function() {
			console.log( "error" );
		});
	},
	clickFecharFabricas: function() {
		isFabricasOpen = false;
		
		base.input.useHandCursor = true;
		base.inputEnabled = true;
		centro_pesquisa.input.useHandCursor = true;
		centro_pesquisa.inputEnabled = true;
		fabricas.input.useHandCursor = true;
		fabricas.inputEnabled = true;
		minas.input.useHandCursor = true;
		minas.inputEnabled = true;
		
		cmp1.destroy();
		cmp2.destroy();
		cmp3.destroy();
		cmp4.destroy();
		cmp5.destroy();
		cmp6.destroy();
		cmp7.destroy();
		cmp8.destroy();
		cmp9.destroy();
		cmp10.destroy();
		cmp11.destroy();
		
		btMelhorarFabricas.destroy();
		
		offset.destroy();
		tela.destroy();
	},
	clickMinas: function() {
		base.input.useHandCursor = false;
		base.inputEnabled = false;
		centro_pesquisa.input.useHandCursor = false;
		centro_pesquisa.inputEnabled = false;
		fabricas.input.useHandCursor = false;
		fabricas.inputEnabled = false;
		minas.input.useHandCursor = false;
		minas.inputEnabled = false;
			
		offset = this.add.sprite(0,0,'offset');
		tela = this.add.sprite(512,300,'subscreen');
		tela.anchor.setTo(0.5,0.5);
		cmp1 = this.add.button(512,460,'btfechar',this.clickFecharMinas,this);		
		cmp1.anchor.setTo(0.5,0);
		cmp1.inputEnabled = true;
		cmp1.input.useHandCursor = true;
		
		cmp2 = this.add.text(512,101,"MINAS", { fill: "#83B5D0", font: "bold 10pt Arial"});
		cmp2.anchor.setTo(0.5,0);
		
			
		cmp3 = this.add.text(630,140, "Minas Nivel " + aplayer.minas.nivel , { fill: "#F0F0F0", font: "bold 11pt Arial"});
		cmp4 = this.add.text(540,160, "Próxima melhoria no nível de captação " + aplayer.minas.captacao , { fill: "#666666", font: "8pt Arial"});
		
		btMelhorarMinas = this.add.button(660,160,'btmelhorar',this.clickMelhorarMinas,this);
		btMelhorarMinas.scale.setTo(0);
		
		cmp15 = this.add.sprite(640,170,'gold');
		cmp16 = this.add.text(637,170,aplayer.minas.custo.toLocaleString() , { fill: "#f2ed7a", font: "bold 9pt Arial"});
		cmp16.anchor.setTo(1,0);
		
		cmp5 = this.add.sprite(250,210,'separator');
		cmp6 = this.add.text(250,225,'Próxima captação de recursos em ' + aplayer.minas.data.toString(), { fill: "#FCFCFC", font: "bold 9pt Arial"});
		
		cmp7 = this.add.text(250,250,'Recursos disponíveis', { fill: "#83B5D0", font: "9pt Arial"});
		
		cmp8 = this.add.sprite(250,270,'capgold');
		cmp9 = this.add.sprite(250,330,'capplut');
		cmp10 = this.add.sprite(250,390,'capcristal');
		
		cmp11 = this.add.text(310,290,aplayer.minas.ouro.toLocaleString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp12 = this.add.text(310,350,aplayer.minas.plutonio.toLocaleString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		cmp13 = this.add.text(310,410,aplayer.minas.cristal.toLocaleString(), { fill: "#FFFFFF", font: "bold 9pt Arial"});
		
		cmp14 =  this.add.button(500,215,'btiniciar',this.clickIniciarCaptacao,this);
		cmp14.scale.setTo(0);
		
		lControlCaptacao = false;
		isMinasOpen = true;
	},
	clickIniciarCaptacao: function() {
		cmp14.scale.setTo(0);
		lControlCaptacao = true;
		$.post( serverlink+"update.php", { uId: aplayer.minas.id, tipo: 'captacao' }, function(ev){
			aplayer.ouro += aplayer.minas.ouro;
			
			aret = ev.split(";");
			ev = aret[0];
			ano = ev.substring(0,4);
			mes = ev.substring(5,7);
			dia = ev.substring(8,10);
			hora = ev.substring(11,13);
			minuto = ev.substring(14,16);
			segundo = ev.substring(17,19);
			aplayer.minas.data = new Date(parseInt(ano),parseInt(mes)-1,parseInt(dia),parseInt(hora),parseInt(minuto),parseInt(segundo));
			aplayer.minas.ouro = parseInt(aret[1]);
			aplayer.minas.plutonio = parseInt(aret[2]);
			aplayer.minas.cristal = parseInt(aret[3]);
			
			cmp11.setText(aplayer.minas.ouro.toLocaleString());
			cmp12.setText(aplayer.minas.plutonio.toLocaleString());
			cmp13.setText(aplayer.minas.cristal.toLocaleString());
			txtOuroChar.setText(aplayer.ouro.toLocaleString());
			
			lControlCaptacao = false;
		} ).fail(function() {
			console.log( "error" );
		});
	},
	clickMelhorarMinas: function() {
		aplayer.minas.captacao += 3;
		aplayer.minas.nivel += 1;
		aplayer.ouro -= aplayer.minas.custo;
		aplayer.minas.custo = aplayer.minas.captacao * 500
		cmp3.setText("Minas Nivel " + aplayer.minas.nivel);
		cmp4.setText("Próxima melhoria no nível de captação " + aplayer.minas.captacao);
		txtOuroChar.setText(aplayer.ouro.toLocaleString());
		cmp16.setText(aplayer.minas.custo.toLocaleString());
		
		$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'melhorarminas' }, function(ev){
			
			if (aplayer.captacao >= aplayer.minas.captacao)
			{
				btMelhorarMinas.scale.setTo(1);
				cmp4.scale.setTo(0);
			}
			else
			{
				btMelhorarMinas.scale.setTo(0);
				cmp4.scale.setTo(1);				
			}			
		} ).fail(function() {
			console.log( "error" );
		});
	},
	clickFecharMinas: function() {
		isMinasOpen = false;
		
		base.input.useHandCursor = true;
		base.inputEnabled = true;
		centro_pesquisa.input.useHandCursor = true;
		centro_pesquisa.inputEnabled = true;
		fabricas.input.useHandCursor = true;
		fabricas.inputEnabled = true;
		minas.input.useHandCursor = true;
		minas.inputEnabled = true;
		
		cmp1.destroy();
		cmp2.destroy();
		cmp3.destroy();
		cmp4.destroy();
		cmp5.destroy();
		cmp6.destroy();
		cmp7.destroy();
		cmp8.destroy();
		cmp9.destroy();
		cmp10.destroy();
		cmp11.destroy();
		cmp12.destroy();
		cmp13.destroy();
		cmp14.destroy();
		cmp15.destroy();
		cmp16.destroy();
		
		btMelhorarMinas.destroy();
		
		offset.destroy();
		tela.destroy();
	},
    clickExplorar: function(item) {	
		var tgame = this;
		nivelExploracao = item.nivel;
		$.getJSON(serverlink+"getmonster.php?callback=?", { uId: nivelExploracao },	function (data) {
			var first = true;
			$.each( data, function ( i, val ) {
				if (first)
				{
					first = false;
					inimigo = {
						nome: val["tx_nome"].toString(),
						hp: parseInt(val["nr_energia"]),
						poder: parseInt(val["nr_poder"]),
						exp: parseInt(val["nr_exp"]),
						diplomacia: parseInt(val["nr_diplomacia"]),
						speed: parseInt(val["nr_velocidade"]),
						posx: 0 ,
						posy: 0 ,
						alcance: parseInt(val["nr_alcance"]),
						velocidadeatk: parseInt(val["nr_velocidade_ataque"]),
						maxrespaw: parseInt(val["nr_max_respaw"]),
						sprite: val["tx_sprite"].toString().trim(),
						agressividade: parseInt(val["nr_agressividade"]),
						ouro: parseInt(val["nr_ouro"])
					};			
				}
				else
				{
					boss = {
						nome: val["tx_nome"].toString(),
						hp: parseInt(val["nr_energia"]),
						poder: parseInt(val["nr_poder"]),
						exp: parseInt(val["nr_exp"]),
						diplomacia: parseInt(val["nr_diplomacia"]),
						speed: parseInt(val["nr_velocidade"]),
						posx: 0 ,
						posy: 0 ,
						alcance: parseInt(val["nr_alcance"]),
						velocidadeatk: parseInt(val["nr_velocidade_ataque"]),
						maxrespaw: parseInt(val["nr_max_respaw"]),
						sprite: val["tx_sprite"].toString().trim(),
						agressividade: parseInt(val["nr_agressividade"]),
						ouro: parseInt(val["nr_ouro"])
					};	
				}
			});
			tgame.state.start('Game');
		});		
    },
    update: function() {
		
    },
	render: function() {
		if (isBaseOpen)
		{
			if (aplayer.pontos > 0)
			{
				btMaisDiplomacia.scale.setTo(0.5);
				btMaisTecnologia.scale.setTo(0.5);
				btMaisPoder.scale.setTo(0.5);
				btMaisCaptacao.scale.setTo(0.5);
			}
			if (aplayer.nivel >= aplayer.base.nivel_personagem)
			{
				btMelhorarBase.scale.setTo(1);
				cmp24.scale.setTo(0);
				cmp25.scale.setTo(1);
				cmp26.scale.setTo(1);
				if (aplayer.ouro < aplayer.minas.custo)
				{
					cmp26.alpha = 0.4;
					btMelhorarBase.alpha = 0.4;
					btMelhorarBase.inputEnabled = false;
				}
				else
				{
					cmp26.alpha = 1;
					btMelhorarBase.alpha = 1;
					btMelhorarBase.inputEnabled = true;
				}
			}
			else
			{
				btMelhorarBase.scale.setTo(0);
				cmp24.scale.setTo(1);		
				cmp25.scale.setTo(0);
				cmp26.scale.setTo(0);				
			}
			
		}
		if (isCentroTecnologicoOpen)
		{
			if (aplayer.tecnologia >= aplayer.centro_pesquisa.tecnologia)
			{
				btMelhorarCentroPesquisa.scale.setTo(1);
				cmp4.scale.setTo(0);
				
				cmp50.scale.setTo(1);
				cmp51.scale.setTo(1);
				if (aplayer.ouro < aplayer.centro_pesquisa.custo)
				{
					cmp51.alpha = 0.4;
					btMelhorarCentroPesquisa.alpha = 0.4;
					btMelhorarCentroPesquisa.inputEnabled = false;
				}
				else
				{
					cmp51.alpha = 1;
					btMelhorarCentroPesquisa.alpha = 1;
					btMelhorarCentroPesquisa.inputEnabled = true;
				}
			}
			else
			{
				btMelhorarCentroPesquisa.scale.setTo(0);
				cmp4.scale.setTo(1);	
				cmp50.scale.setTo(0);
				cmp51.scale.setTo(0);
			}
			
			cmp13.alpha = 1;
			cmp14.alpha = 1;
			cmp15.alpha = 1;
			cmp16.alpha = 1;
			cmp19.alpha = 1;
			cmp20.alpha = 1;
			cmp21.alpha = 1;
			cmp22.alpha = 1;
					
			if (aplayer.centro_pesquisa.nivel < 10)
			{
				cmp19.alpha = 0.3;
				cmp20.alpha = 0.3;
				cmp21.alpha = 0.3;
				cmp22.alpha = 0.3;
				if (aplayer.centro_pesquisa.nivel < 5)
				{
					cmp13.alpha = 0.3;
					cmp14.alpha = 0.3;
					cmp15.alpha = 0.3;
					cmp16.alpha = 0.3;
				}
			}
			
			cmp25.scale.setTo(0);
			cmp26.scale.setTo(0);
			cmp27.scale.setTo(0);
			cmp28.scale.setTo(0);
			cmp35.scale.setTo(0);
			cmp37.scale.setTo(0);
			cmp39.scale.setTo(0);
			cmp41.scale.setTo(0);
			cmp43.scale.setTo(0);
			cmp45.scale.setTo(0);
			cmp47.scale.setTo(0);
			cmp49.scale.setTo(0);
			
			if (aplayer.centro_pesquisa.pontos > 0)
			{
				cmp25.scale.setTo(0.5);
				cmp26.scale.setTo(0.5);
				cmp27.scale.setTo(0.5);
				cmp28.scale.setTo(0.5);
				cmp35.scale.setTo(0.5);
				cmp37.scale.setTo(0.5);
				cmp39.scale.setTo(0.5);
				cmp41.scale.setTo(0.5);
				cmp43.scale.setTo(0.5);
				cmp45.scale.setTo(0.5);
				cmp47.scale.setTo(0.5);
				cmp49.scale.setTo(0.5);
			}
			
			cmp29.setText(aplayer.centro_pesquisa.pontos + " pontos restantes");
			cmp30.setText(aplayer.centro_pesquisa.pericia1.toString());
			cmp31.setText(aplayer.centro_pesquisa.pericia2.toString());
			cmp32.setText(aplayer.centro_pesquisa.pericia3.toString());
			cmp33.setText(aplayer.centro_pesquisa.pericia4.toString());
			cmp34.setText(aplayer.centro_pesquisa.pericia5.toString());
			cmp36.setText(aplayer.centro_pesquisa.pericia6.toString());
			cmp38.setText(aplayer.centro_pesquisa.pericia7.toString());
			cmp40.setText(aplayer.centro_pesquisa.pericia8.toString());
			cmp42.setText(aplayer.centro_pesquisa.pericia9.toString());
			cmp44.setText(aplayer.centro_pesquisa.pericia10.toString());
			cmp46.setText(aplayer.centro_pesquisa.pericia11.toString());
			cmp48.setText(aplayer.centro_pesquisa.pericia12.toString());
		}
		if (isFabricasOpen)
		{
			if (aplayer.tecnologia >= aplayer.fabricas.tecnologia)
			{
				btMelhorarFabricas.scale.setTo(1);
				cmp4.scale.setTo(0);
				cmp5.scale.setTo(1);
				cmp6.scale.setTo(1);
				if (aplayer.ouro < aplayer.fabricas.custo)
				{
					cmp6.alpha = 0.4;
					btMelhorarFabricas.alpha = 0.4;
					btMelhorarFabricas.inputEnabled = false;
				}
				else
				{
					cmp6.alpha = 1;
					btMelhorarFabricas.alpha = 1;
					btMelhorarFabricas.inputEnabled = true;
				}
			}
			else
			{
				btMelhorarFabricas.scale.setTo(0);
				cmp4.scale.setTo(1);			
				cmp5.scale.setTo(0);
				cmp6.scale.setTo(0);	
			}
		}
		if (isMinasOpen)
		{
		
			if (aplayer.captacao >= aplayer.minas.captacao)
			{
				btMelhorarMinas.scale.setTo(1);
				cmp4.scale.setTo(0);
				cmp15.scale.setTo(1);
				cmp16.scale.setTo(1);
				if (aplayer.ouro < aplayer.minas.custo)
				{
					cmp16.alpha = 0.4;
					btMelhorarMinas.alpha = 0.4;
					btMelhorarMinas.inputEnabled = false;
				}
				else
				{
					cmp16.alpha = 1;
					btMelhorarMinas.alpha = 1;
					btMelhorarMinas.inputEnabled = true;
				}
			}
			else
			{
				btMelhorarMinas.scale.setTo(0);
				cmp4.scale.setTo(1);			
				cmp15.scale.setTo(0);
				cmp16.scale.setTo(0);	
			}
		
			var date1 = new Date();
			var date2 = aplayer.minas.data;

			var dif = date2.getTime() - date1.getTime()

			var Seconds_from_T1_to_T2 = dif / 1000;
			var segundos = parseInt(Math.abs(Seconds_from_T1_to_T2));
			
			var minutos = parseInt(segundos/60);
			segundos = segundos - (minutos*60);
			
			if (minutos < 10)
			{
				minutos = '0' + minutos.toString();
			}
			if (segundos < 10)
			{
				segundos = '0' + segundos.toString();
			}
			
			if (dif < 0)
			{
				if (!lControlCaptacao)
				{
					cmp6.setText("Próxima captação de recursos disponível.");
					cmp14.scale.setTo(1);
				}
			}
			else
			{
				cmp14.scale.setTo(0);
				cmp6.setText("Próxima captação de recursos em "+minutos.toString() + ":" + segundos.toString());
			}
		}
		var dateatual = new Date();
		var datemina = aplayer.minas.data;

		var difver = datemina.getTime() - dateatual.getTime()

		exclminas.scale.setTo(0);
		if (difver<0)
		{
			exclminas.scale.setTo(1);
		}
	}
};