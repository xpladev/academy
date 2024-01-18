/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.5.5-MariaDB : Database - xplaGame
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`xplaGame` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `xplaGame`;

/*Table structure for table `cheat_user` */

DROP TABLE IF EXISTS `cheat_user`;

CREATE TABLE `cheat_user` (
  `pid` BIGINT(20) NOT NULL,
  `isCheat` INT(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4;

/*Table structure for table `convert_tx` */

DROP TABLE IF EXISTS `convert_tx`;

CREATE TABLE `convert_tx` (
  `idx` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `convertType` VARCHAR(10) DEFAULT NULL,
  `playerId` BIGINT(20) NOT NULL,
  `groupId` VARCHAR(255) NOT NULL,
  `tId` BIGINT(30) NOT NULL,
  `gamecurrencyAmount` INT(11) NOT NULL,
  `coinAmount` DOUBLE NOT NULL,
  `isComplete` INT(11) NOT NULL DEFAULT 0,
  `success` INT(11) DEFAULT 0,
  `regDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`idx`),
  UNIQUE KEY `convert_tx_tg` (`tId`,`groupId`)
) ENGINE=INNODB AUTO_INCREMENT=392 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `daily_convert` */

DROP TABLE IF EXISTS `daily_convert`;

CREATE TABLE `daily_convert` (
  `idx` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pid` BIGINT(20) DEFAULT NULL,
  `convertValue` BIGINT(20) DEFAULT NULL,
  `convertDate` DATETIME DEFAULT NULL,
  PRIMARY KEY (`idx`),
  KEY `daily_convert_p` (`pid`)
) ENGINE=INNODB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `game_config` */

DROP TABLE IF EXISTS `game_config`;

CREATE TABLE `game_config` (
  `idx` INT(11) NOT NULL,
  `gameCurrencyAmountMin` INT(11) DEFAULT NULL,
  `isNft` INT(11) DEFAULT NULL,
  `numberOfMaterials` INT(11) DEFAULT NULL,
  `c2xMintingFee` INT(11) DEFAULT NULL,
  `gameTokenMintingFee` INT(11) DEFAULT NULL,
  `traitAffectingFees` VARCHAR(255) DEFAULT NULL,
  `affectedC2xMintingFees` INT(11) DEFAULT NULL,
  `affectedGameTokenMintingFees` INT(11) DEFAULT NULL,
  `convertUri` VARCHAR(255) DEFAULT NULL,
  `leaderboardUri` VARCHAR(255) DEFAULT NULL,
  `mintUri` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4;

/*Table structure for table `id_filter` */

DROP TABLE IF EXISTS `id_filter`;

CREATE TABLE `id_filter` (
  `idx` INT(11) NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`idx`),
  KEY `id_filter_i` (`id`)
) ENGINE=INNODB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `user_info` */

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `pid` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `wallet` VARCHAR(255) DEFAULT '',
  `diamond` INT(11) DEFAULT 0,
  `diamond_min` INT(11) DEFAULT 0,
  `diamond_max` INT(11) DEFAULT 0,
  `high_score` BIGINT(20) DEFAULT 0,
  `high_score_date` DATETIME DEFAULT CURRENT_TIMESTAMP(),
  `high_stage` INT(11) DEFAULT 0,
  `chain_high_score` BIGINT(20) DEFAULT 0,
  `chain_high_score_date` DATETIME DEFAULT CURRENT_TIMESTAMP(),
  `isRecoding` INT(11) DEFAULT 0,
  `name` VARCHAR(255) DEFAULT '',
  PRIMARY KEY (`pid`),
  UNIQUE KEY `user_info_i` (`id`),
  KEY `user_info_p` (`pid`)
) ENGINE=INNODB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
