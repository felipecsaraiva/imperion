Imperion.Preloader = function(game) {
	this.background = null;
	this.preloadBar = null;
	var lConnect = false;
	var uId = '0000000001';
	var idUsuario = 0; 
	var aplayer = { 
		id: 1,
		nome: "Thelonious Black",
		hpmax: 30,
		hp: 30,
		mpmax: 10,
		mp: 10,
		exp: 0,
		expnext: 100,
		expbase: 0,
		nivel: 1,
		especialidade: 1,
		conselheiro: "Leon Jones",
		ouro: 0,
		diplomacia: 1,
		tecnologia: 1,
		poder: 1,
		captacao: 1,
		pontos: 5,
		gun: {
			poder: 100,
			velocidade: 100,
			alcance: 100
		},
		base: {
			nivel: 1,
			custo: 0,
			nivel_personagem: 5
		},
		centro_pesquisa: {
			id: 1,
			nivel: 1,
			nivel_personagem: 5,
			custo: 0,
			tecnologia: 5,
			pontos: 3,
			pericia1: 0,
			pericia2: 0,
			pericia3: 0,
			pericia4: 0,
			pericia5: 0,
			pericia6: 0,
			pericia7: 0,
			pericia8: 0,
			pericia9: 9,
			pericia10: 9,
			pericia11: 9,
			pericia12: 9
		},
		minas: {
			id: 1,
			nivel: 1,
			nivel_personagem: 1,
			custo: 0,
			captacao: 5,
			ouro: 1000,
			cristal: 4,
			plutonio: 100,
			data: Date()
		},
		fabricas: {
			id: 1,
			nivel: 1,
			tecnologia: 3,
			custo: 0
		}
    }
	var apericias = {
		pericia1: "Nome",
		descper1: "Descricao",
		pericia2: "Nome",
		descper2: "Descricao",
		pericia3: "Nome",
		descper3: "Descricao",
		pericia4: "Nome",
		descper4: "Descricao",
		pericia5: "Nome",
		descper5: "Descricao",
		pericia6: "Nome",
		descper6: "Descricao",
		pericia7: "Nome",
		descper7: "Descricao",
		pericia8: "Nome",
		descper8: "Descricao",
		pericia9: "Nome",
		descper9: "Descricao",
		pericia10: "Nome",
		descper10: "Descricao",
		pericia11: "Nome",
		descper11: "Descricao",
		pericia12: "Nome",
		descper12: "Descricao"
	}
	var serverlink = "localhost/imperionserver/";
	
	
	var inimigo = {
		
	};
	
	var boss = {
		
	};
};
Imperion.Preloader.prototype = {
	preload: function() {
		this.add.sprite(0,0,'background');
		this.preloadBar = this.add.sprite(0, 0, 'preloaderBar');
		logotipo = this.add.sprite(this.scale.width/2,this.scale.height/2,'logotipo');
		logotipo.anchor.setTo(0.5,0.5);
		this.load.setPreloadSprite(this.preloadBar);
        txt = this.add.text(this.scale.width/2, 568, "Aguarde, carregando arquivos...", { fill: "#F0F0F0", font: "12pt Open Sans"});
		txt.anchor.setTo(0.5,0);
		
		this.load.image('starfield','assets/background/starfield.png');
		this.load.image('gameground','assets/background/game.png');
		this.load.image('bullet', 'assets/player/bullets.png');
		this.load.image('mainscreen', 'assets/background/main.png');
		this.load.image('subscreen', 'assets/background/subscreen.png');
		this.load.image('offset', 'assets/background/offset.png');
		this.load.image('separator', 'assets/background/separator.png');
		this.load.image('player_info', 'assets/imperion/player_info.png');
		this.load.image('lifebar', 'assets/imperion/en1.png');
		this.load.image('energybar', 'assets/imperion/comb1.png');
		this.load.image('comfirmButton', 'assets/imperion/btconfirmar.png');
		this.load.image('btfechar','assets/imperion/btfechar.png');
		this.load.image('btmais','assets/imperion/plus.png');
		this.load.image('btmenos','assets/imperion/minus.png')
		this.load.image('btmelhorar','assets/imperion/melhorar.png');
		this.load.image('btiniciar','assets/imperion/btiniciar.png');
		this.load.image('gold','assets/imperion/gold.png');
		this.load.image('earthground','assets/background/earthground.png');
		
		this.load.image('exp10','assets/imperion/exp10.png');
		this.load.image('exp20','assets/imperion/exp20.png');
		this.load.image('exp30','assets/imperion/exp30.png');
		this.load.image('exp40','assets/imperion/exp40.png');
		this.load.image('exp50','assets/imperion/exp50.png');
		this.load.image('exp60','assets/imperion/exp60.png');
		this.load.image('exp70','assets/imperion/exp70.png');
		this.load.image('exp80','assets/imperion/exp80.png');
		this.load.image('exp90','assets/imperion/exp90.png');
		this.load.image('exp100','assets/imperion/exp100.png');
		this.load.image('portrait_leon', 'assets/imperion/portrait_leon.png');
		this.load.image('portrait_jessica', 'assets/imperion/portrait_jessica.png');
		this.load.image('portrait_juan', 'assets/imperion/portrait_juan.png');
		this.load.image('portrait_maria', 'assets/imperion/portrait_maria.png');
		this.load.image('portrait_petry', 'assets/imperion/portrait_petry.png');
		this.load.image('portrait_sun', 'assets/imperion/portrait_sun.png');
	
		this.load.image('tec1', 'assets/imperion/tec1.png');
		this.load.image('tec2', 'assets/imperion/tec2.png');
		this.load.image('tec3', 'assets/imperion/tec3.png');
		this.load.image('tec4', 'assets/imperion/tec4.png');
		this.load.image('tec5', 'assets/imperion/tec5.png');
		this.load.image('tec6', 'assets/imperion/tec6.png');
		this.load.image('tec7', 'assets/imperion/tec7.png');
		this.load.image('tec8', 'assets/imperion/tec8.png');
		this.load.image('tec9', 'assets/imperion/tec9.png');
		this.load.image('tec10', 'assets/imperion/tec10.png');
		this.load.image('tec11', 'assets/imperion/tec11.png');
		this.load.image('tec12', 'assets/imperion/tec12.png');
		
		this.load.image('arealocked', 'assets/imperion/arealocked.png');
		this.load.image('area1', 'assets/imperion/area1.png');
		this.load.image('area2', 'assets/imperion/area2.png');
		this.load.image('area3', 'assets/imperion/area3.png');
		this.load.image('area4', 'assets/imperion/area4.png');
		this.load.image('area5', 'assets/imperion/area5.png');
		
		
		this.load.image('gun1', 'assets/imperion/gun1.png');
		this.load.image('gun2', 'assets/imperion/gun2.png');
		this.load.image('gun3', 'assets/imperion/gun3.png');
		this.load.image('gun4', 'assets/imperion/gun4.png');
		
		this.load.image('capgold', 'assets/imperion/capgold.png');
		this.load.image('capplut', 'assets/imperion/capplut.png');
		this.load.image('capcristal', 'assets/imperion/capcristal.png');
		
		this.load.image('jessica_jones', 'assets/imperion/jessica_jones.png');
		this.load.image('juan_garcia', 'assets/imperion/juan_garcia.png');
		this.load.image('leon_jones', 'assets/imperion/leon_jones.png');
		this.load.image('maria_salvatore', 'assets/imperion/maria_salvatore.png');
		this.load.image('petry_sulivan', 'assets/imperion/petry_sulivan.png');
		this.load.image('sun_yanno', 'assets/imperion/sun_yanno.png');
		
		this.load.spritesheet('base', 'assets/imperion/base.png',168,169,2);
		
		this.load.spritesheet('player', 'assets/player/ship.png',38,29,3);		
		this.load.spritesheet('centro_pesquisa', 'assets/imperion/centro_pesquisa.png',80,127,2);
		this.load.spritesheet('fabricas', 'assets/imperion/fabricas.png',165,124,2);
		this.load.spritesheet('minas', 'assets/imperion/minas.png',87,81,2);
		this.load.spritesheet('exclamacao','assets/imperion/exclamacao.png',32,32,3);
		this.load.spritesheet('teleport','assets/imperion/teleport.png',180,98,5);
		
		this.load.spritesheet('monster1','assets/enemies/monster1.png',36,50,3);
		
		this.load.image('mapradar','assets/imperion/mapradar.png');
		this.load.image('enemydot','assets/imperion/enemydot.png');
		this.load.image('medot','assets/imperion/medot.png');
		
		this.load.image('backhp','assets/imperion/backhp.png');
		
		serverlink = "http://localhost/imperionserver/";
		uId = '0000000001';
		lConnect = false;		
	},
	create: function() {
		var t = this;
		$.getJSON(serverlink+"index.php?callback=?", { uId: uId },	function (data) {
			var exist = false;
			$.each( data, function ( i, val ) {
				exist = true;
				idUsuario = parseInt(val["id_usuario"]);
				$.getJSON(serverlink+"getuserplayers.php?callback=?", { Id: parseInt(val["id_usuario"]) }, function (data) {
					$.each( data, function ( i, val ) {
						lConnect = true;
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
						
						apericias = {
							pericia1: val["tx_pericia1"].toString(),
							descper1: val["tx_descper1"].toString(),
							pericia2: val["tx_pericia2"].toString(),
							descper2: val["tx_descper2"].toString(),
							pericia3: val["tx_pericia3"].toString(),
							descper3: val["tx_descper3"].toString(),
							pericia4: val["tx_pericia4"].toString(),
							descper4: val["tx_descper4"].toString(),
							pericia5: val["tx_pericia5"].toString(),
							descper5: val["tx_descper5"].toString(),
							pericia6: val["tx_pericia6"].toString(),
							descper6: val["tx_descper6"].toString(),
							pericia7: val["tx_pericia7"].toString(),
							descper7: val["tx_descper7"].toString(),
							pericia8: val["tx_pericia8"].toString(),
							descper8: val["tx_descper8"].toString(),
							pericia9: val["tx_pericia9"].toString(),
							descper9: val["tx_descper9"].toString(),
							pericia10: val["tx_pericia10"].toString(),
							descper10: val["tx_descper10"].toString(),
							pericia11: val["tx_pericia11"].toString(),
							descper11: val["tx_descper11"].toString(),
							pericia12: val["tx_pericia12"].toString(),
							descper12: val["tx_descper12"].toString()
						}
						t.state.start('Main');
					});
					if (!lConnect){
						t.state.start('NewPlayer');
					}
				});
			});
			if (!exist)
			{
				$.post( serverlink+"new.php", { uId: uId, nome: 'Luís Felipe' }, function(ev){
					console.log(ev); 
					t.state.start('Preloader');
				} ).fail(function() {
					console.log( "error" );
				});
			}
		});
		
		
	}
};