/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.5.5-MariaDB : Database - xplaWallet
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`xplaWallet` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `xplaWallet`;

/*Table structure for table `error_log` */

DROP TABLE IF EXISTS `error_log`;

CREATE TABLE `error_log` (
  `idx` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `reg_date` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `info_log` */

DROP TABLE IF EXISTS `info_log`;

CREATE TABLE `info_log` (
  `idx` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `reg_date` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=33340 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `nft_shop` */

DROP TABLE IF EXISTS `nft_shop`;

CREATE TABLE `nft_shop` (
  `idx` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `thumbnailUrl` varchar(500) DEFAULT NULL,
  `imageUrl` varchar(500) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `ball` int(11) DEFAULT NULL,
  `clearStage` int(11) DEFAULT 0,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Table structure for table `publisher_sequence` */

DROP TABLE IF EXISTS `publisher_sequence`;

CREATE TABLE `publisher_sequence` (
  `accAddress` varchar(255) NOT NULL,
  `sequence` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`accAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Table structure for table `server_info` */

DROP TABLE IF EXISTS `server_info`;

CREATE TABLE `server_info` (
  `idx` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dbSourceVer` int(11) NOT NULL DEFAULT 0,
  `cw20MnemonicKey` varchar(255) NOT NULL,
  `cw20Contract` varchar(100) NOT NULL,
  `cw721MnemonicKey` varchar(255) NOT NULL,
  `cw721Contract` varchar(100) NOT NULL,
  `cw20ScoreContract` varchar(255) NOT NULL,
  `ipfs` varchar(100) DEFAULT NULL,
  `ipfsPort` int(11) DEFAULT NULL,
  `ipfsCluster` varchar(100) DEFAULT NULL,
  `ipfsClusterPort` int(11) DEFAULT NULL,
  `ipfsGetUrl` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `txhash` */

DROP TABLE IF EXISTS `txhash`;

CREATE TABLE `txhash` (
  `tid` bigint(20) NOT NULL AUTO_INCREMENT,
  `wallet` varchar(255) DEFAULT NULL,
  `pid` bigint(20) DEFAULT NULL,
  `groupId` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT 0,
  `gamecurrencyAmount` bigint(11) DEFAULT NULL,
  `coinAmount` double DEFAULT NULL,
  `txhash` varchar(255) DEFAULT NULL,
  `isTutorial` int(11) DEFAULT 0,
  `status` int(11) DEFAULT 0,
  `regDate` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`tid`),
  KEY `txhash_wsi` (`wallet`,`isTutorial`,`status`),
  KEY `txhash_ws` (`wallet`,`status`),
  KEY `txhash_ts` (`tid`,`status`)
) ENGINE=InnoDB AUTO_INCREMENT=1795 DEFAULT CHARSET=utf8mb4;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

/*Table structure for table `nft_shop` */

DROP TABLE IF EXISTS `nft_shop`;

CREATE TABLE `nft_shop` (
  `idx` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `thumbnailUrl` varchar(500) DEFAULT NULL,
  `imageUrl` varchar(500) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `ball` int(11) DEFAULT NULL,
  `clearStage` int(11) DEFAULT 0,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `nft_shop` */

insert  into `nft_shop`(`idx`,`name`,`price`,`thumbnailUrl`,`imageUrl`,`width`,`count`,`ball`,`clearStage`) values 
(1,'PADDLE_3407',2600,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmYSDC1wFqgg3ZvdhupfQ2jyGvGGCWxQ28djNf4xR8crwv','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmPX26gAwSURkJhrs5AFgL8zjA5sZDjbWjQoJ2xxr3SuLQ',140,3,7,20),
(2,'PADDLE_3405',2500,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmaAKCRaCcP3YC85PoYDWeF6xFCKbg9r8FnC88ZN98hHus','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmPX26gAwSURkJhrs5AFgL8zjA5sZDjbWjQoJ2xxr3SuLQ',140,3,5,0),
(3,'PADDLE_3403',2400,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmNxZsUpvz4ESgXLxMKUMtXuNH7eL7zdXuq1bkyrHT8ky6','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmPX26gAwSURkJhrs5AFgL8zjA5sZDjbWjQoJ2xxr3SuLQ',140,3,3,0),
(4,'PADDLE_3207',2100,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmUvXokiLf8D1hXXVx1k13PuVqHJYVD34i5jfswbJzbGbz','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmQn664nXMB7pNhYnX2Ruauby4pW7CeubCUY5D8ktYQcNh',120,3,7,0),
(5,'PADDLE_3205',2000,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmeUqL8BgoGqoLCyaKQf89AENYmUYZVKbL6wYuaRQCyuJT','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmQn664nXMB7pNhYnX2Ruauby4pW7CeubCUY5D8ktYQcNh',120,3,5,0),
(6,'PADDLE_3203',1900,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmRE3miKv8sWcMsB48ybpXoUxjTCSoKfWYqqbou4xCwwkR','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmQn664nXMB7pNhYnX2Ruauby4pW7CeubCUY5D8ktYQcNh',120,3,3,0),
(7,'PADDLE_3007',1700,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmZRqK5B8bo12QnNdRWeS4xhGbcUvz2DxqEaExQ1oWrry2','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/Qmf5RJRqzZWLAuNEUMG6tUXiG9xLGakZSBvUAEStt6GP9R',100,3,7,0),
(8,'PADDLE_3005',1600,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/Qmdv4oqJKCN1hmpnezPg7YYwk6GTMkQrLr2BvwVhwdyZe2','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/Qmf5RJRqzZWLAuNEUMG6tUXiG9xLGakZSBvUAEStt6GP9R',100,3,5,0),
(9,'PADDLE_3003',1500,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmPPPBAzoTGSqiRgWrQH2Ptw4PgyDJx8EyYKPYHd1SyBfn','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/Qmf5RJRqzZWLAuNEUMG6tUXiG9xLGakZSBvUAEStt6GP9R',100,3,3,0),
(10,'PADDLE_2407',750,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmSTuQCHYhQxJZVX5VfZfZAEaaB7sgsZdCN1RcWpXAGMJy','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmaWQV6TboT14pR6uEHqATCrZpQgjcx4jpZbEKw8nz4mZ1',140,2,7,0),
(11,'PADDLE_2405',700,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/Qmadh5ecSRcny8E5mSs9zU5dETkvt6ov5vnaRW5U9kjK65','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmaWQV6TboT14pR6uEHqATCrZpQgjcx4jpZbEKw8nz4mZ1',140,2,5,0),
(12,'PADDLE_2403',650,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmdKa1dRcgF5RtvfUAiHT9Ge24YbDexVFVHzWw2TR5DWaw','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmaWQV6TboT14pR6uEHqATCrZpQgjcx4jpZbEKw8nz4mZ1',140,2,3,0),
(13,'PADDLE_2207',550,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmW11qeiHyYg2ZmThFV3iwanzbLzEXPFAsDBV9PzA7buCv','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmWZXHn7JwDsdDggPxKVK7LtgofFg8afAd2d3nJp7wrQaq',120,2,7,0),
(14,'PADDLE_2205',500,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmPfLMhfdUrHT33dX5CccPbTUHHHNkusCnms8ZeXBfwukL','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmWZXHn7JwDsdDggPxKVK7LtgofFg8afAd2d3nJp7wrQaq',120,2,5,0),
(15,'PADDLE_2203',450,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmSV8Kt4VBqJ1bm7GKF7gcLDkQNsPocTb6TiWqWpjs5srR','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmWZXHn7JwDsdDggPxKVK7LtgofFg8afAd2d3nJp7wrQaq',120,2,3,0),
(16,'PADDLE_2007',350,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmTER58hCXy4cVWY8Bfre7Zh176JPmgGD2JqAPDEymwGUX','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmfRr15yHSsZYnAHwheNDGTvgyfvgjn3un5gpX5Nau4SVU',100,2,7,0),
(17,'PADDLE_2005',300,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmZ4YZsPZFSQqzq48bT9gU5sJKJHtqrEdJTM1AjVfM3mkd','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmfRr15yHSsZYnAHwheNDGTvgyfvgjn3un5gpX5Nau4SVU',100,2,5,0),
(18,'PADDLE_2003',250,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/Qmc2L18vqLUJ4vXvNBq4Qvwg9a2EKx5JXUKHL1gimyGdEP','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmfRr15yHSsZYnAHwheNDGTvgyfvgjn3un5gpX5Nau4SVU',100,2,3,0),
(19,'PADDLE_1407',100,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmcdKrpU1XKoX78n5zNSUhZLeFkCCETapCgt45p4vBtzt2','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmS7WUVJM66syaRwmBggnDjSnq15L2HsU7jTzbpapFZKmR',140,1,7,0),
(20,'PADDLE_1405',90,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmYKw3L3hhAhwgsWUmdj6GWTQwoFT5zxweKWqAn63VcTJo','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmS7WUVJM66syaRwmBggnDjSnq15L2HsU7jTzbpapFZKmR',140,1,5,0),
(21,'PADDLE_1403',80,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmcFRu5XynDSXcT2YvVU5dAtwrGNGCxhV78ArM2PdKsw9Q','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmS7WUVJM66syaRwmBggnDjSnq15L2HsU7jTzbpapFZKmR',140,1,3,0),
(22,'PADDLE_1207',60,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmfB6NH2gtqar5b8dGF3KCgZFscda5aSzBjhZFST5joczY','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmWES8g1cKBbA8v5vSbDgfWhCTB3e9NhYimUz1JEZt9dvF',120,1,7,0),
(23,'PADDLE_1205',50,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmPjQS7qLf1o4ms97pqtyD5wfBPmCwuEPufrJdih8RAvV1','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmWES8g1cKBbA8v5vSbDgfWhCTB3e9NhYimUz1JEZt9dvF',120,1,5,0),
(24,'PADDLE_1203',40,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmZZFyyKVKpFXn7nwE2YFG1tytyPcVbT5chMHXvivD3PcY','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmWES8g1cKBbA8v5vSbDgfWhCTB3e9NhYimUz1JEZt9dvF',120,1,3,0),
(25,'PADDLE_1007',20,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmSu7zdDBiZDb3UuVAW8D2xnW8L61i2KpyKzrKPiMGFYMo','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmXzcy9majGtpjPLJEUD6iCVyD7Tcdcbs9W9DLgd1ZiEbf',100,1,7,0),
(26,'PADDLE_1005',10,'https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmUaMUECG6yWTHAg1JX4tNRraxrLKkcygVY5oRCVT8THem','https://ipfs-qa-gcl.c2xstation.net:8080/ipfs/QmXzcy9majGtpjPLJEUD6iCVyD7Tcdcbs9W9DLgd1ZiEbf',100,1,5,0);
