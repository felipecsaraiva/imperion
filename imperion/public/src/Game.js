Imperion.Game = function(game) {
	var cursors, sprite;
		
	var bullet;
	var bullets;
	var enemies;
	var enemy;
	var bulletTime = 0;
	var enbulletTime = 0;
	var enemyTime = 0;
	var healthTime = 0;
	var mpTime = 0;
	var combustTime = 0;
	
	var temBoss = false;
	var podeTeleportar = false;
};
Imperion.Game.prototype = {
	create: function() {
		podeTeleportar = false;
		bulletTime = 0;
		enbulletTime = 0;
		enemyTime = 0;
		healthTime = 0;
		mpTime = 0;
		combustTime = this.time.now + 60000;
		//  We need arcade physics
		this.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.world.setBounds(0, 0, 5000, 5000);
        this.physics.arcade.setBoundsToWorld();
		
		ground = this.add.sprite(0,0,'gameground');
		ground.width = 5000;
		ground.height = 5000;
		
		earthground = this.add.sprite(0,0,'earthground');
		
		teleport = this.add.sprite(20,100,'teleport');
		teleport.animations.add('stay', [0]);
		teleport.animations.add('over', [1,2,3,4]);
		teleport.animations.play('stay',0,false);
		this.physics.enable(teleport, Phaser.Physics.ARCADE);
		teleport.body.immovable = true;
		
		//  Our ships bullets
		bullets = this.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;

		//  All 40 of them
		bullets.createMultiple(40, 'bullet');
		bullets.setAll('anchor.x', 0.5);
		bullets.setAll('anchor.y', 0.5);
		
		enbullets = this.add.group();
		enbullets.enableBody = true;
		enbullets.physicsBodyType = Phaser.Physics.ARCADE;
		
		enbullets.createMultiple(40, 'bullet');
		enbullets.setAll('anchor.x', 0.5);
		enbullets.setAll('anchor.y', 0.5);
		
		enemies = this.add.group();
		enemies.enableBody = true;
		enemies.physicsBodyType = Phaser.Physics.ARCADE;
		
		enemies.createMultiple(inimigo.maxrespaw,inimigo.sprite);
		enemies.setAll('anchor.x', 0.5);
		enemies.setAll('anchor.y', 0.5);
		
		mapradar = this.add.sprite(899,19,'mapradar');
		mapradar.fixedToCamera = true;
		
		
		enradar = this.add.group();
		enradar.createMultiple(inimigo.maxrespaw,'enemydot');
		enradar.setAll('fixedToCamera', true);
		
		//  Our player ship
		sprite = this.add.sprite(110, 140, 'player');
		sprite.anchor.set(0.5);
		sprite.animations.add('walk',[1,2]);
		sprite.animations.play('walk',5,true);

		//  and its physics settings
		this.physics.enable(sprite, Phaser.Physics.ARCADE);
		this.camera.follow(sprite);

        sprite.body.collideWorldBounds = true;
		sprite.body.drag.set(100);
		sprite.body.maxVelocity.set(1000);

		//  Game input
		cursors = this.input.keyboard.createCursorKeys();
		this.input.keyboard.addKeyCapture([ Phaser.Keyboard.ESC ]);
		this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

		
		nPerLife = parseInt(aplayer.hp * 134 / aplayer.hpmax);
		
		/*for (i = 0; i < nPerLife; i++) {
			this.add.sprite(i+83,37,'lifebar');
		}*/
		
		backhpbar = this.add.sprite(83,37,'backhp');
		backhpbar.fixedToCamera = true;
		backhpbar.width = 134;
		backhpbar.height = 17;
		hpbar = this.add.sprite(83,37,'lifebar');
		hpbar.width = nPerLife;
		hpbar.fixedToCamera = true;
		
		
		nPerEnergy = parseInt(aplayer.mp * 119 / aplayer.mpmax);
		
		/*for (i = 0; i < nPerEnergy; i++) {
			this.add.sprite(i+81,58,'energybar');
		}*/
		
		backmpbar = this.add.sprite(81,58,'backhp');
		backmpbar.fixedTo = true;
		backmpbar.width = 119;
		backmpbar.height = 13;
		mpbar = this.add.sprite(81,58,'energybar');
		mpbar.width = nPerEnergy;
		mpbar.fixedToCamera = true;
		
		if (aplayer.conselheiro == "Jessica Jones")
			portrait = this.add.sprite(21,32,'portrait_jessica');
		if (aplayer.conselheiro == "Leon Jones")
			portrait = this.add.sprite(21,32,'portrait_leon');
		if (aplayer.conselheiro == "Juan Garcia")
			portrait = this.add.sprite(21,32,'portrait_juan');
		if (aplayer.conselheiro == "Maria Salvatore")
			portrait = this.add.sprite(21,32,'portrait_maria');
		if (aplayer.conselheiro == "Petry Sulivan")
			portrait = this.add.sprite(21,32,'portrait_petry');
		if (aplayer.conselheiro == "Sun Yanno")
			portrait = this.add.sprite(21,32,'portrait_sun');
		
		portrait.fixedToCamera = true;
		
		pinfo = this.add.sprite(12,12,'player_info');
		pinfo.fixedToCamera = true;
		
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
			
			expbar = this.add.sprite(78,75,'exp'+nExp);
			expbar.fixedToCamera = true;
		}
		
		txtNomeChar = this.add.text(140, 19, aplayer.nome , { fill: "#F0F0F0", font: "bold 9pt Arial"});
		txtNomeChar.anchor.setTo(0.5,0);
		txtNomeChar.fixedToCamera = true;
		txtConselheiro = this.add.text(65,88, aplayer.conselheiro , { fill: "#83B5D0", font: "7pt Arial"});
		txtConselheiro.anchor.setTo(0,0);
		txtConselheiro.fixedToCamera = true;
		txtNivelChar = this.add.text(190, 88, "Nv. " + aplayer.nivel, { fill: "#FCFCFC", font: "7pt Arial"});
		txtNivelChar.anchor.setTo(1,0);
		txtNivelChar.fixedToCamera = true;
		
		goldimg = this.add.sprite(184,100,'gold');
		goldimg.fixedToCamera = true;
		txtOuroChar = this.add.text(180,100, aplayer.ouro.toLocaleString() , { fill: "#F0F0F0", font: "7pt Arial"});
		txtOuroChar.anchor.setTo(1,0);
		txtOuroChar.fixedToCamera = true;
		
		mapplayer = this.add.sprite(0,0,'medot');
		mapplayer.fixedToCamera = true;
		
		offset = this.add.sprite(0,0,'offset');
		offset.fixedToCamera = true;
		offset.alpha = 0;
		tela = this.add.sprite(512,300,'subscreen');
		tela.anchor.setTo(0.5,0.5);
		tela.fixedToCamera = true;
		tela.alpha = 0;
		cmp1 = this.add.button(512,460,'btfechar',this.btfecharclick,this);		
		cmp1.anchor.setTo(0.5,0);
		cmp1.fixedToCamera = true;
		cmp1.scale.setTo(0);
		cmp2 = this.add.text(512,101,"CENTRAL DE COMANDO", { fill: "#83B5D0", font: "bold 10pt Arial"});
		cmp2.anchor.setTo(0.5,0);
		cmp2.fixedToCamera = true;
		cmp2.alpha = 0;
		cmp3 = this.add.text(512,300,"VOCÊ MORREU. TENTE NOVAMENTE." , { fill: "#FFFFFF", font: "bold 10pt Arial"});
		cmp3.fixedToCamera = true;
		cmp3.alpha = 0;
		cmp3.anchor.setTo(0.5,0);
		
		
		temBoss = false;
	},
    update: function() {
		this.physics.arcade.collide(enemies);
		this.physics.arcade.collide(enemies, teleport);
		this.physics.arcade.collide(sprite, enemies);
		if (cursors.up.isDown)
		{
			if (this.time.now > combustTime)
			{
				aplayer.mp--;
				nPerEnergy = parseInt(aplayer.mp * 119 / aplayer.mpmax);
				mpbar.width = nPerEnergy;
				combustTime = this.time.now + 60000;
			}	
			this.physics.arcade.accelerationFromRotation(sprite.rotation, aplayer.velocidade, sprite.body.acceleration);
		}
		else
		{
			sprite.body.acceleration.set(0);			
		}

		if (cursors.left.isDown)
		{
			sprite.body.angularVelocity = -300;
		}
		else if (cursors.right.isDown)
		{
			sprite.body.angularVelocity = 300;
		}
		else
		{
			sprite.body.angularVelocity = 0;
		}
		
		if (this.input.keyboard.isDown(Phaser.Keyboard.ESC))
		{
			if (podeTeleportar)
			{
				var othis = this;
				$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'leave', hp: aplayer.hp, mp: aplayer.mp }, function(ev){
					othis.state.start('Main');
				} ).fail(function() {
					console.log( "error" );
				});
			}
		}
		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			if (!podeTeleportar)
			{
				if (this.time.now > bulletTime)
				{
					bulletcheck = bullets.getFirstExists(true);
					if (!bulletcheck)
					{
						bullet = bullets.getFirstExists(false);

						if (bullet)
						{
							bullet.reset(sprite.body.x + 16, sprite.body.y + 16);
							bullet.lifespan = aplayer.gun.alcance;
							bullet.speed = 800;
							bullet.rotation = sprite.rotation;
							//this.physics.arcade.velocityFromRotation(sprite.rotation, 1000, bullet.body.velocity);
							bullet.body.velocity.x = Math.cos(bullet.rotation) * bullet.speed + sprite.body.velocity.x;
							bullet.body.velocity.y = Math.sin(bullet.rotation) * bullet.speed + sprite.body.velocity.y;
							
							bulletTime = this.time.now + aplayer.gun.velocidade;
						}
					}
				}
			}
		}
		
		if (this.time.now > enemyTime)
		{
			//enemycheck = enemies.getFirstExists(true);
			//if (!enemycheck)
			//{
				enemy = enemies.getFirstExists(false);

				if (enemy)
				{
					var guardainimigo = inimigo;
					var isboss = Math.floor(Math.random() * 1000) + 1;
					if (isboss <= 50)
					{
						if (!temBoss)
						{
							temBoss = true;
							inimigo = boss;
						}
					}
				
					enemy.reset(Math.floor(Math.random() * 5000) + 1, Math.floor(Math.random() * 5000) + 1);
					enemy.speed = inimigo.speed;
					enemy.rotation = sprite.rotation;
					enemy.life = inimigo.hp;
					enemy.totallife = inimigo.hp;
					enemy.exp = inimigo.exp;
					enemy.alcance = inimigo.alcance;
					enemy.poder = inimigo.poder;
					enemy.attackspeed = inimigo.velocidadeatk;
					enemy.agressividade = inimigo.agressividade;
					enemy.ouro = inimigo.ouro;
								
					enemy.ehpbar = this.add.sprite(enemy.body.x,enemy.body.y-10,'lifebar');
					enemy.ehpbar.width = 60;
					enemy.ehpbar.height = 5;
					enemy.ehpbar.anchor.setTo(0.5,0);
					
					enemy.nome = this.add.text(enemy.ehpbar.x,enemy.ehpbar.y,inimigo.nome, { fill: "#F0F0F0", font: "7pt Arial"});
					enemy.nome.anchor.setTo(0.5,0);
					
					enemy.animations.add('walk', [0,1]);
					enemy.animations.add('hit',[1,2]);
					
					enemyTime = this.time.now + 5000;
					enemy.AttackTime = 0;
					/*
					noradar = enradar.getFirstExists(false);
					if (noradar)
					{	
						noradar.reset(900 + parseInt(enemy.body.x / 100), 20 + parseInt(enemy.body.y / 100));
						noradar.fixedToCamera = true;						
					}*/
					inimigo = guardainimigo;
				}
			//}
		}	
		/*
		enemycheck = enemies.getFirstExists(true);
		if (enemycheck)
		{	
			
		 	
		}
		var t = this;
		enemies.forEach(function(enemycheck) {
			var pEnLife = (enemycheck.life * 60) / enemycheck.totallife;
			enemycheck.ehpbar.width = pEnLife;
			enemycheck.ehpbar.x = enemycheck.body.x;
			enemycheck.ehpbar.y = enemycheck.body.y-10;
			enemycheck.nome.x = enemycheck.ehpbar.x;
			enemycheck.nome.y = enemycheck.ehpbar.y-10;
			t.physics.arcade.angleToXY(enemycheck, sprite.body.x, sprite.body.y);
			t.physics.arcade.moveToObject(enemycheck,sprite,50);
		    enemycheck.rotation = t.physics.arcade.angleBetween(enemycheck, sprite);
		}, this);
		*/
		enradar.forEachExists(this.limpaMap, this);
		enemies.forEachExists(this.doUpdateEnemies, this);
		
		this.physics.arcade.overlap(bullets, enemies, this.collisionHandler, null, this);
		this.physics.arcade.overlap(enbullets, sprite, this.playerHit, null, this)
		
		//this.physics.arcade.overlap(sprite,teleport,this.isteleporting,null,this);
		
		if (Phaser.Rectangle.intersects(sprite.getBounds(),teleport.getBounds()))
		{
			podeTeleportar = true;
			teleport.animations.play('over',20,true);
			if (this.time.now > healthTime)
			{
				if (aplayer.hp < aplayer.hpmax)
				{
					aplayer.hp++;
					nPerLife = parseInt(aplayer.hp * 134 / aplayer.hpmax);
					this.sendText(sprite.body.x,sprite.body.y,'+1',"#1bff1b");
					
					hpbar.width = nPerLife;
				}
				healthTime = this.time.now + 1000;
			}
			if (this.time.now > mpTime)
			{
				if (aplayer.mp < aplayer.mpmax)
				{
					aplayer.mp++
					nPerEnergy = parseInt(aplayer.mp * 119 / aplayer.mpmax);
					
					mpbar.width = nPerEnergy;
				}
				mpTime = this.time.now + 10000;
			}
		}
		else
		{
			podeTeleportar = false;
			teleport.animations.play('stay',0,false);		
		}
		
		mapplayer.x = 900 + parseInt(sprite.body.x / 100);
		mapplayer.y = 20 + parseInt(sprite.body.y / 100);
		mapplayer.fixedToCamera = true;
		
    },
	isteleporting: function() {		
		podeTeleportar = true;
		teleport.animations.play('over',20,true);
	},
	doUpdateEnemies: function(enemycheck) {
		var pEnLife = (enemycheck.life * 60) / enemycheck.totallife;
		enemycheck.ehpbar.width = pEnLife;
		enemycheck.ehpbar.x = enemycheck.body.x;
		enemycheck.ehpbar.y = enemycheck.body.y-10;
		enemycheck.nome.x = enemycheck.ehpbar.x;
		enemycheck.nome.y = enemycheck.ehpbar.y-10;
		if (this.physics.arcade.distanceBetween(sprite, enemycheck) <= enemycheck.alcance)
		{ 
			if (this.physics.arcade.distanceBetween(sprite, enemycheck) < 40)
			{
				enemycheck.animations.play('hit',5,true);
				
				enemycheck.body.velocity.x = 0;
				enemycheck.body.velocity.y = 0;
				if (this.time.now > enemycheck.AttackTime)
				{
					this.playerHit(sprite,enemycheck);
					enemycheck.AttackTime = this.time.now + enemycheck.attackspeed;
				}
			}
			else
			{
				enemycheck.animations.play('walk',5,true);
				this.physics.arcade.moveToObject(enemycheck,sprite,enemycheck.speed);
				enemycheck.rotation = this.physics.arcade.angleBetween(enemycheck, sprite);
				
				if (this.time.now > enbulletTime)
				{
					var isenbullet = Math.floor(Math.random() * 1000) + 1;
					if (isenbullet <= enemycheck.agressividade)
					{
						enbullet = enbullets.getFirstExists(false);

						if (enbullet)
						{
							enbullet.reset(enemycheck.body.x + 16, enemycheck.body.y + 16);
							enbullet.lifespan = enemycheck.alcance/2;
							enbullet.speed = 800;
							enbullet.rotation = enemycheck.rotation;
							enbullet.poder = enemycheck.poder;
							enbullet.nome = 'tiro';
							//this.physics.arcade.velocityFromRotation(sprite.rotation, 1000, bullet.body.velocity);
							enbullet.body.velocity.x = Math.cos(enbullet.rotation) * enbullet.speed + enemycheck.body.velocity.x;
							enbullet.body.velocity.y = Math.sin(enbullet.rotation) * enbullet.speed + enemycheck.body.velocity.y;
							
							
						}
					}
					enbulletTime = this.time.now + enemycheck.attackspeed;
				}
				
			}
		} 	
		else
		{
			enemycheck.animations.stop();
					
			enemycheck.body.velocity.x = 0;
			enemycheck.body.velocity.y = 0;
		}
		
		noradar = enradar.getFirstExists(false);
		if (noradar)
		{	
			noradar.reset(900 + parseInt(enemycheck.body.x / 100), 20 + parseInt(enemycheck.body.y / 100));
			noradar.fixedToCamera = true;						
		}
	},
	limpaMap: function(rad) {
		rad.kill();
	},
	collisionHandler: function(me,monster) {
		me.kill();
		var dano = Math.floor(Math.random() * aplayer.gun.poder);
		if (dano > 0)
		{
			monster.life -= dano;
			this.sendText(monster.body.x,monster.body.y,'-'+dano.toString(),"#ff0000");
			if (monster.life <= 0)
			{
				var isdeuouro = Math.floor(Math.random() * 1000) + 1;
				console.log(isdeuouro);
				if (isdeuouro <= 400)
				{
					monster.ouro = Math.floor(Math.random() * monster.ouro);
					if (monster.ouro > 0)
					{
						$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'getouro', ouro: monster.ouro }, function(ev){
							aplayer.ouro += monster.ouro;
							txtOuroChar.setText(aplayer.ouro.toLocaleString());
							var txtouro = ' ouro';
							if (monster.ouro > 1)
								txtouro = ' ouros';
							this.sendText(sprite.body.x,sprite.body.y,'+'+monster.ouro.toString() + txtouro,"#f2ea2f");
						} ).fail(function() {
							console.log( "error" );
						});	
					}				
				}
				
				this.sendText(sprite.body.x,sprite.body.y,monster.exp.toString()+' exp',"#FFFFFF");
					
				tc = this;
				$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'upexp', exp: monster.exp }, function(ev){
					
					aret = ev.split(";");
				
					aplayer.exp += monster.exp;

					if (aret[0] == 'levelup')
					{
						aplayer.expbase = aplayer.expnext;
						aplayer.expnext = parseInt(aret[1]);
						aplayer.nivel++;
						aplayer.pontos += 5;
						txtNivelChar.setText("Nv. " + aplayer.nivel);
						tc.sendText(sprite.body.x,sprite.body.y,'SUBIU DE NIVEL!',"#FFFFFF");
					}
					
					
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
						expbar.loadTexture('exp'+nExp, 0, false);
	//					expbar = this.add.sprite(78,75,'exp'+nExp);
					}
					
					
				} ).fail(function() {
					console.log( "error" );
				});			
				monster.nome.destroy();
				monster.ehpbar.destroy();
				monster.kill();
			}
		}
	},
	playerHit: function(me,monster) {
		var dano = Math.floor(Math.random() *  monster.poder);
		if (dano > 0)
		{
			aplayer.hp -= dano;
			nPerLife = parseInt(aplayer.hp * 134 / aplayer.hpmax);
			this.sendText(sprite.body.x,sprite.body.y,'-'+dano.toString(),"#ff0000");
			if (monster.nome == 'tiro')
			{
				monster.kill();
			}
			
			hpbar.width = nPerLife;
			
			if (aplayer.hp <= 0)
			{
				$.post( serverlink+"update.php", { uId: aplayer.id, tipo: 'dead' }, function(ev){
				
					enemies.forEachExists(function(monster) { 
						monster.ehpbar.destroy();
						monster.nome.destroy();					
						monster.kill();
					}, this);
				
					aplayer.hp = aplayer.hpmax;
					aplayer.mp = aplayer.mpmax;
				
					offset.alpha = 1;
					tela.alpha = 1;
					cmp1.scale.setTo(1);
					cmp2.alpha = 1;
					cmp3.alpha = 1;							
					
				} ).fail(function() {
					console.log( "error" );
				});
			}
		}
	},
	btfecharclick: function() {		
		this.state.start('Main');		
	},
	sendText: function(px,py,texto,color) {
		var t = this.add.text(px,py,texto , { font: "bold 12pt Arial"});
		t.anchor.setTo(0.5,0);
		
		//t.stroke = '#FFFFFF';
		//t.strokeThickness = 1;
		t.fill = color;
		
		tween = this.add.tween(t);
		tween.onComplete.add(function() { 
			t.destroy();
		}, this);
		tween.to({y: py - 100, alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
		tween.start();       
	}
};
