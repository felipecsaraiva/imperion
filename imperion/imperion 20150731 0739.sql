-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.6.19


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema dbimperion
--

CREATE DATABASE IF NOT EXISTS dbimperion;
USE dbimperion;

--
-- Definition of table `tb_centro_comando`
--

DROP TABLE IF EXISTS `tb_centro_comando`;
CREATE TABLE `tb_centro_comando` (
  `id_centro_comando` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_personagem` bigint(20) NOT NULL,
  `nr_nivel` int(11) DEFAULT NULL,
  `nr_custo_nivel` int(11) DEFAULT NULL,
  `nr_personagem_nivel` int(11) DEFAULT NULL,
  `dt_acao` datetime DEFAULT NULL,
  `st_acao` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id_centro_comando`),
  CONSTRAINT `tb_centro_comando_ibfk_1` FOREIGN KEY (`id_personagem`) REFERENCES `tb_personagem` (`id_personagem`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_centro_comando`
--

/*!40000 ALTER TABLE `tb_centro_comando` DISABLE KEYS */;
INSERT INTO `tb_centro_comando` (`id_centro_comando`,`id_personagem`,`nr_nivel`,`nr_custo_nivel`,`nr_personagem_nivel`,`dt_acao`,`st_acao`) VALUES 
 (1,1,1,1500,5,NULL,NULL);
/*!40000 ALTER TABLE `tb_centro_comando` ENABLE KEYS */;


--
-- Definition of table `tb_centro_pesquisa`
--

DROP TABLE IF EXISTS `tb_centro_pesquisa`;
CREATE TABLE `tb_centro_pesquisa` (
  `id_centro_pesquisa` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_personagem` bigint(20) DEFAULT NULL,
  `nr_nivel` int(11) DEFAULT NULL,
  `nr_custo_nivel` int(11) DEFAULT NULL,
  `nr_tecnologia_nivel` int(11) DEFAULT NULL,
  `nr_personagem_nivel` int(11) DEFAULT NULL,
  `dt_acao` datetime DEFAULT NULL,
  `st_acao` varchar(1) DEFAULT NULL,
  `nr_pontos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_centro_pesquisa`),
  CONSTRAINT `tb_centro_pesquisa_ibfk_1` FOREIGN KEY (`id_personagem`) REFERENCES `tb_personagem` (`id_personagem`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_centro_pesquisa`
--

/*!40000 ALTER TABLE `tb_centro_pesquisa` DISABLE KEYS */;
INSERT INTO `tb_centro_pesquisa` (`id_centro_pesquisa`,`id_personagem`,`nr_nivel`,`nr_custo_nivel`,`nr_tecnologia_nivel`,`nr_personagem_nivel`,`dt_acao`,`st_acao`,`nr_pontos`) VALUES 
 (1,1,4,12000,20,0,NULL,NULL,0);
/*!40000 ALTER TABLE `tb_centro_pesquisa` ENABLE KEYS */;


--
-- Definition of table `tb_especialidade`
--

DROP TABLE IF EXISTS `tb_especialidade`;
CREATE TABLE `tb_especialidade` (
  `id_especialidade` int(11) NOT NULL AUTO_INCREMENT,
  `tx_descricao` varchar(60) DEFAULT NULL,
  `nr_tecnologia` int(11) DEFAULT NULL,
  `nr_poder` int(11) DEFAULT NULL,
  `nr_captacao` int(11) DEFAULT NULL,
  `nr_diplomacia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_especialidade`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_especialidade`
--

/*!40000 ALTER TABLE `tb_especialidade` DISABLE KEYS */;
INSERT INTO `tb_especialidade` (`id_especialidade`,`tx_descricao`,`nr_tecnologia`,`nr_poder`,`nr_captacao`,`nr_diplomacia`) VALUES 
 (1,'Jessica Jones',0,1,1,0),
 (2,'Juan Garcia',0,1,1,0),
 (3,'Leon Jones',1,1,0,0),
 (4,'Maria Salvatore',1,1,0,0),
 (5,'Petry Sulivan',0,0,1,1),
 (6,'Sun Yanno',0,0,1,1);
/*!40000 ALTER TABLE `tb_especialidade` ENABLE KEYS */;


--
-- Definition of table `tb_fabrica`
--

DROP TABLE IF EXISTS `tb_fabrica`;
CREATE TABLE `tb_fabrica` (
  `id_fabrica` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_personagem` bigint(20) DEFAULT NULL,
  `nr_nivel` int(11) DEFAULT NULL,
  `nr_custo_nivel` int(11) DEFAULT NULL,
  `nr_tecnologia_nivel` int(11) DEFAULT NULL,
  `nr_personagem_nivel` int(11) DEFAULT NULL,
  `dt_acao` datetime DEFAULT NULL,
  `st_acao` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id_fabrica`),
  CONSTRAINT `tb_fabrica_ibfk_1` FOREIGN KEY (`id_personagem`) REFERENCES `tb_personagem` (`id_personagem`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_fabrica`
--

/*!40000 ALTER TABLE `tb_fabrica` DISABLE KEYS */;
INSERT INTO `tb_fabrica` (`id_fabrica`,`id_personagem`,`nr_nivel`,`nr_custo_nivel`,`nr_tecnologia_nivel`,`nr_personagem_nivel`,`dt_acao`,`st_acao`) VALUES 
 (1,1,1,1600,5,0,NULL,NULL);
/*!40000 ALTER TABLE `tb_fabrica` ENABLE KEYS */;


--
-- Definition of table `tb_inimigo`
--

DROP TABLE IF EXISTS `tb_inimigo`;
CREATE TABLE `tb_inimigo` (
  `id_inimigo` bigint(20) NOT NULL AUTO_INCREMENT,
  `tx_nome` varchar(100) DEFAULT NULL,
  `nr_nivel` int(11) DEFAULT NULL,
  `nr_exp` int(11) DEFAULT NULL,
  `nr_energia` int(11) DEFAULT NULL,
  `nr_poder` int(11) DEFAULT NULL,
  `nr_diplomacia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_inimigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_inimigo`
--

/*!40000 ALTER TABLE `tb_inimigo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_inimigo` ENABLE KEYS */;


--
-- Definition of table `tb_inventario`
--

DROP TABLE IF EXISTS `tb_inventario`;
CREATE TABLE `tb_inventario` (
  `id_inventario` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_personagem` bigint(20) NOT NULL,
  `id_item` bigint(20) DEFAULT NULL,
  `nr_quantidade` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_inventario`),
  CONSTRAINT `tb_inventario_ibfk_1` FOREIGN KEY (`id_item`) REFERENCES `tb_item` (`id_item`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tb_inventario_ibfk_2` FOREIGN KEY (`id_personagem`) REFERENCES `tb_personagem` (`id_personagem`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_inventario`
--

/*!40000 ALTER TABLE `tb_inventario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_inventario` ENABLE KEYS */;


--
-- Definition of table `tb_item`
--

DROP TABLE IF EXISTS `tb_item`;
CREATE TABLE `tb_item` (
  `id_item` bigint(20) NOT NULL AUTO_INCREMENT,
  `tx_nome` varchar(200) DEFAULT NULL,
  `tx_descricao` varchar(500) DEFAULT NULL,
  `nr_custo` int(11) DEFAULT NULL,
  `nr_nivel` int(11) DEFAULT NULL,
  `nr_nivel_fabrica` int(11) DEFAULT NULL,
  `nr_nivel_tecnologia` int(11) DEFAULT NULL,
  `nr_defesa` int(11) DEFAULT NULL,
  `nr_poder` int(11) DEFAULT NULL,
  `nr_estabilidade` int(11) DEFAULT NULL,
  `nr_velocidade` int(11) DEFAULT NULL,
  `nr_energia` int(11) DEFAULT NULL,
  `nr_combustivel` int(11) DEFAULT NULL,
  `nr_critico` int(11) DEFAULT NULL,
  `st_tipo` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id_item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_item`
--

/*!40000 ALTER TABLE `tb_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_item` ENABLE KEYS */;


--
-- Definition of table `tb_item_fabrica`
--

DROP TABLE IF EXISTS `tb_item_fabrica`;
CREATE TABLE `tb_item_fabrica` (
  `id_item_fabrica` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_item` bigint(20) DEFAULT NULL,
  `id_fabrica` bigint(20) DEFAULT NULL,
  `nr_tempo` int(11) DEFAULT NULL,
  `st_fabricando` varchar(1) DEFAULT NULL,
  `dt_fabricacao` datetime DEFAULT NULL,
  PRIMARY KEY (`id_item_fabrica`),
  CONSTRAINT `tb_item_fabrica_ibfk_1` FOREIGN KEY (`id_item`) REFERENCES `tb_item` (`id_item`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tb_item_fabrica_ibfk_2` FOREIGN KEY (`id_fabrica`) REFERENCES `tb_fabrica` (`id_fabrica`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_item_fabrica`
--

/*!40000 ALTER TABLE `tb_item_fabrica` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_item_fabrica` ENABLE KEYS */;


--
-- Definition of table `tb_mina`
--

DROP TABLE IF EXISTS `tb_mina`;
CREATE TABLE `tb_mina` (
  `id_mina` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_personagem` bigint(20) DEFAULT NULL,
  `nr_nivel` int(11) DEFAULT NULL,
  `nr_custo_nivel` int(11) DEFAULT NULL,
  `nr_captacao_nivel` int(11) DEFAULT NULL,
  `nr_personagem_nivel` int(11) DEFAULT NULL,
  `dt_acao` datetime DEFAULT NULL,
  `st_acao` varchar(1) DEFAULT NULL,
  `nr_ouro` int(11) DEFAULT NULL,
  `nr_cristal` int(11) DEFAULT NULL,
  `nr_plutonio` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_mina`),
  CONSTRAINT `tb_mina_ibfk_1` FOREIGN KEY (`id_personagem`) REFERENCES `tb_personagem` (`id_personagem`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_mina`
--

/*!40000 ALTER TABLE `tb_mina` DISABLE KEYS */;
INSERT INTO `tb_mina` (`id_mina`,`id_personagem`,`nr_nivel`,`nr_custo_nivel`,`nr_captacao_nivel`,`nr_personagem_nivel`,`dt_acao`,`st_acao`,`nr_ouro`,`nr_cristal`,`nr_plutonio`) VALUES 
 (1,1,1,600,3,0,NULL,NULL,0,0,0);
/*!40000 ALTER TABLE `tb_mina` ENABLE KEYS */;


--
-- Definition of table `tb_missao`
--

DROP TABLE IF EXISTS `tb_missao`;
CREATE TABLE `tb_missao` (
  `id_missao` bigint(20) NOT NULL AUTO_INCREMENT,
  `tx_nome` varchar(200) DEFAULT NULL,
  `tx_descricao` text,
  `id_ordem` int(11) DEFAULT NULL,
  `st_tipo` varchar(1) DEFAULT NULL,
  `nr_recurso` int(11) DEFAULT NULL,
  `nr_exp` int(11) DEFAULT NULL,
  `nr_contador` int(11) DEFAULT NULL,
  `id_inimigo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_missao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_missao`
--

/*!40000 ALTER TABLE `tb_missao` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_missao` ENABLE KEYS */;


--
-- Definition of table `tb_missao_personagem`
--

DROP TABLE IF EXISTS `tb_missao_personagem`;
CREATE TABLE `tb_missao_personagem` (
  `id_missao_personagem` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_personagem` bigint(20) DEFAULT NULL,
  `id_missao` bigint(20) DEFAULT NULL,
  `st_situacao` varchar(1) DEFAULT NULL,
  `nr_contador` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_missao_personagem`),
  CONSTRAINT `tb_missao_personagem_ibfk_1` FOREIGN KEY (`id_missao`) REFERENCES `tb_missao` (`id_missao`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tb_missao_personagem_ibfk_2` FOREIGN KEY (`id_personagem`) REFERENCES `tb_personagem` (`id_personagem`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_missao_personagem`
--

/*!40000 ALTER TABLE `tb_missao_personagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_missao_personagem` ENABLE KEYS */;


--
-- Definition of table `tb_pericia`
--

DROP TABLE IF EXISTS `tb_pericia`;
CREATE TABLE `tb_pericia` (
  `id_pericia` int(11) NOT NULL AUTO_INCREMENT,
  `tx_nome` varchar(200) DEFAULT NULL,
  `tx_descricao` varchar(500) DEFAULT NULL,
  `nr_defesa` int(11) DEFAULT NULL,
  `nr_poder` int(11) DEFAULT NULL,
  `nr_estabilidade` int(11) DEFAULT NULL,
  `nr_velocidade` int(11) DEFAULT NULL,
  `nr_energia` int(11) DEFAULT NULL,
  `nr_combustivel` int(11) DEFAULT NULL,
  `nr_critico` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pericia`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_pericia`
--

/*!40000 ALTER TABLE `tb_pericia` DISABLE KEYS */;
INSERT INTO `tb_pericia` (`id_pericia`,`tx_nome`,`tx_descricao`,`nr_defesa`,`nr_poder`,`nr_estabilidade`,`nr_velocidade`,`nr_energia`,`nr_combustivel`,`nr_critico`) VALUES 
 (1,'Defesas','Concede 1% a mais de defesa para cada nível de Defesas',1,0,0,0,0,0,0),
 (2,'Energia','Concede 1% a mais de energia total para cada nível de Energia',0,0,0,0,1,0,0),
 (3,'Estabilidade','Concede 1% a mais de estabilidade para cada nível de Estabilidade',0,0,1,0,0,0,0),
 (4,'Balística','Concede 1% a mais de poder de fogo para cada nível de Balística',0,1,0,0,0,0,0),
 (5,'Defesas Aprimoradas','Concede 2% a mais de defesa para cada nível de Defesas Aprimoradas',2,0,0,0,0,0,0),
 (6,'Balística Aprimorada','Concede 2% a mais de poder de fogo para cada nível de Balística Aprimorada',0,2,0,0,0,0,0),
 (7,'Estabilidade Aprimorada','Concede 2% a mais de estabilidade para cada nível de Estabilidade Aprimorada',0,0,2,0,0,0,0),
 (8,'Dano Crítico','Concede 2% a mais de dano crítico para cada nível de Dano Crítico ',0,0,0,0,0,0,2),
 (9,'Impulso de Meteorito','Concede 5% a mais de velocidade para cada nível de Impulso de Meteorito',0,0,0,5,0,0,0),
 (10,'Reservas de Plutônio','Concede 5% a mais de combustível total para cada nível de Reserva de Plutônio',0,0,0,0,0,5,0),
 (11,'Abalo Císmico','Concede 5% a mais de dano crítico para cada nível de Abalo Císmico',0,0,0,0,0,0,5),
 (12,'Defesas Mestras','Concede 5% a mais de defesa para cada nível de Devesas Mestras',5,0,0,0,0,0,0);
/*!40000 ALTER TABLE `tb_pericia` ENABLE KEYS */;


--
-- Definition of table `tb_pericia_centro`
--

DROP TABLE IF EXISTS `tb_pericia_centro`;
CREATE TABLE `tb_pericia_centro` (
  `id_pericia_centro` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_pericia` int(11) NOT NULL,
  `id_centro_pesquisa` bigint(20) NOT NULL,
  `nr_nivel` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pericia_centro`),
  CONSTRAINT `tb_pericia_centro_ibfk_1` FOREIGN KEY (`id_centro_pesquisa`) REFERENCES `tb_centro_pesquisa` (`id_centro_pesquisa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tb_pericia_centro_ibfk_2` FOREIGN KEY (`id_pericia`) REFERENCES `tb_pericia` (`id_pericia`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_pericia_centro`
--

/*!40000 ALTER TABLE `tb_pericia_centro` DISABLE KEYS */;
INSERT INTO `tb_pericia_centro` (`id_pericia_centro`,`id_pericia`,`id_centro_pesquisa`,`nr_nivel`) VALUES 
 (1,1,1,28),
 (2,2,1,6),
 (3,3,1,2),
 (4,4,1,4),
 (5,5,1,5),
 (6,6,1,1),
 (7,7,1,3),
 (8,8,1,1),
 (9,9,1,7),
 (10,10,1,26),
 (11,11,1,6),
 (12,12,1,8);
/*!40000 ALTER TABLE `tb_pericia_centro` ENABLE KEYS */;


--
-- Definition of table `tb_personagem`
--

DROP TABLE IF EXISTS `tb_personagem`;
CREATE TABLE `tb_personagem` (
  `id_personagem` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint(20) DEFAULT NULL,
  `tx_nome` varchar(60) DEFAULT NULL,
  `nr_nivel` int(11) DEFAULT NULL,
  `nr_exp_atual` int(11) DEFAULT NULL,
  `nr_exp_next` int(11) DEFAULT NULL,
  `nr_energia` int(11) DEFAULT NULL,
  `nr_energia_total` int(11) DEFAULT NULL,
  `nr_combustivel` int(11) DEFAULT NULL,
  `nr_combustivel_total` int(11) DEFAULT NULL,
  `nr_ouro` int(11) DEFAULT NULL,
  `nr_diplomacia` int(11) DEFAULT NULL,
  `nr_tecnologia` int(11) DEFAULT NULL,
  `nr_poder` int(11) DEFAULT NULL,
  `nr_captacao` int(11) DEFAULT NULL,
  `nr_pontos` int(11) DEFAULT NULL,
  `id_especialidade` int(11) DEFAULT NULL,
  `nr_cristal` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_personagem`),
  CONSTRAINT `tb_personagem_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_personagem`
--

/*!40000 ALTER TABLE `tb_personagem` DISABLE KEYS */;
INSERT INTO `tb_personagem` (`id_personagem`,`id_usuario`,`tx_nome`,`nr_nivel`,`nr_exp_atual`,`nr_exp_next`,`nr_energia`,`nr_energia_total`,`nr_combustivel`,`nr_combustivel_total`,`nr_ouro`,`nr_diplomacia`,`nr_tecnologia`,`nr_poder`,`nr_captacao`,`nr_pontos`,`id_especialidade`,`nr_cristal`) VALUES 
 (1,1,'Asa',1,0,100,30,30,10,10,1000,1,106,1,1,0,2,20);
/*!40000 ALTER TABLE `tb_personagem` ENABLE KEYS */;


--
-- Definition of table `tb_usuario`
--

DROP TABLE IF EXISTS `tb_usuario`;
CREATE TABLE `tb_usuario` (
  `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT,
  `tx_usuario` varchar(100) DEFAULT NULL,
  `tx_nome` varchar(100) DEFAULT NULL,
  `tx_email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_usuario`
--

/*!40000 ALTER TABLE `tb_usuario` DISABLE KEYS */;
INSERT INTO `tb_usuario` (`id_usuario`,`tx_usuario`,`tx_nome`,`tx_email`) VALUES 
 (1,'0000000001','Luís Felipe','');
/*!40000 ALTER TABLE `tb_usuario` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
