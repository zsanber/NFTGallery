CREATE DATABASE  IF NOT EXISTS `qkkpkik8squpijha` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `qkkpkik8squpijha`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: ilzyz0heng1bygi8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com    Database: qkkpkik8squpijha
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `idcategorie` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`idcategorie`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (1,'Nature'),(2,'Friends'),(3,'Animals'),(4,'Family'),(5,'Occasions');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `idimage` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `user_iduser` int DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `categorie_idcategorie` int DEFAULT NULL,
  PRIMARY KEY (`idimage`),
  KEY `fk_user` (`user_iduser`),
  KEY `fk_categorie` (`categorie_idcategorie`),
  CONSTRAINT `fk_categorie` FOREIGN KEY (`categorie_idcategorie`) REFERENCES `categorie` (`idcategorie`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'kutya','kutyus','https://res.cloudinary.com/huiuv6wa3/image/upload/v1650053856/kutya_bexqk8.jpg',10,'2022-04-16',NULL,1),(36,'probakep','probakepleiras','https://rozsakert.bloglap.hu/galeria/65718.jpg',10,'2000-01-11','2000-01-11',1),(37,'probakep kutyuli','proba kep és még leiras','https://www.bloki.hu/funpics/387.jpg',10,'2000-01-11','2022-05-02',3),(41,'probakep3x','probakepleiras3 h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk','https://www.bloki.hu/funpics/357.jpg',10,'2000-01-11','2022-04-28',1),(61,'probakep','probakepleiras','https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/640px-Male_and_female_chicken_sitting_together.jpg',10,'2000-01-11','2000-01-11',2),(72,'probakep','probakepleiras','https://cdn.nwmgroups.hu/s/img/i/1912/20191204macska-cica.jpg',10,'2000-01-11','2000-01-11',3),(80,'citromka','citromka','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651005956/e9nlbxkkqpgv2pyvny6z.png',10,'2022-04-26',NULL,2),(82,'dsbdkn','dsdsvdsvds','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651083209/xde0gdxfuwaxsw7uqc7l.jpg',11,'2022-04-27',NULL,1),(83,'dsbdkn','dsdsvdsvds','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651083229/uyvaoodlr8pp8lmbchw4.jpg',11,'2022-04-27',NULL,1),(84,'hgjhj','jghjghj','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651083896/u9ewbgyxtifkfyardsk4.jpg',11,'2022-04-27',NULL,5),(85,'hgjhjgfhgfhgfh','jghjghjhgfhfhf','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651083904/ciepmyhu72ssvyeb2iu4.jpg',11,'2022-04-27',NULL,4),(88,'City','On a city trip!!!!','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651177816/ztbfyi2vztkfayl3zoro.jpg',10,'2022-04-28','2022-04-30',3),(89,'skateboard','My favorite','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651177890/hry9musx7c9iywols2g1.jpg',10,'2022-04-28',NULL,5),(90,'Pet','Beast','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651177956/f6rkv6mpusricvun0c5p.jpg',10,'2022-04-28',NULL,3),(91,'Gyümölcs','Gyümölcsök','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178021/m5iljl2fmg0mbt6lk7ng.jpg',10,'2022-04-28',NULL,1),(92,'Horizon','Horizon','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178056/gqhfdl771rgx6ss5vcta.jpg',10,'2022-04-28',NULL,1),(93,'Monument','Soha nem lehetünk elégedettek a már elért eredményekkel, hanem mindig még jobbra kell törekednünk.','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178129/lckynujoieh08s2nis4t.jpg',10,'2022-04-28',NULL,1),(94,'map','Akármihez fogunk, a kellő alkalom visz célhoz.','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178172/uefeupiqt7jhgux35qlh.jpg',10,'2022-04-28',NULL,2),(95,'Flight','Nem az a fontos, hogy kit követ ma a nagyobb vagy kisebb \"tömeg\" - a tanítás lényege a fontos.','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178225/wduw8x8xyc6bhkmqzplc.jpg',10,'2022-04-28',NULL,1),(96,'Sun','A siker titka: megvetni az embereket, de számba venni őket; senkit sem tartani nagynak, de senkit se venni kevésbe.','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178298/qsqldlpaavlynzgurlll.jpg',10,'2022-04-28',NULL,1),(97,'Anything','Aki messzire jutott a siker országútján, arról mindig kiderült, hogy háromszor annyit dolgozott, mint mások.','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178348/j6t2kygihlxu1hsa9ukz.jpg',10,'2022-04-28',NULL,4),(98,'Post','Ne csodálkozzunk azon, hogy senki sem látja szívesen a más fején a babért. Nincs annak értéke, ami sokaknak jut ki.','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178458/vob8xoaceqehqfenvxqn.jpg',10,'2022-04-28',NULL,5),(99,'Sea','A kudarc mindössze azt bizonyítja, hogy a határainkat feszegetjük, és ezért fontos eleme a sikernek.','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178535/agvwuodume93ggb8fi62.jpg',10,'2022-04-28',NULL,1),(100,'Snow','Kiérdemelni valamit nem szerencse kérdése, hanem keményen dolgozni kell érte.','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651178598/lxshselnqexvfne4lfcr.jpg',10,'2022-04-28',NULL,1),(101,'Paris','Paris','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651344100/uin9fdsfuhkwdlvpt7so.jpg',10,'2022-04-30',NULL,1),(102,'metro4','negyedik','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651356870/zns6bu9ehlgnjfzp0tkh.jpg',10,'2022-04-30',NULL,4),(103,'dsadas','dasdsadsad','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651357779/yiqzxtb51rtafjvq7jcg.jpg',10,'2022-04-30',NULL,4),(104,'dsadas','dasdsadsad','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651357780/jn6zjopjhgjqp5wtuzm2.jpg',10,'2022-04-30',NULL,4),(105,'dasds','dsadsad','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651357800/vhnueeliwikwrpljubpv.jpg',10,'2022-04-30',NULL,3),(106,'omomo','ewqewqe','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651357832/n67kyrxfyhbvf90sd7ay.jpg',10,'2022-04-30',NULL,2),(107,'dsada','dasdsad','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651357870/zom21u4h9ou3oike9zmy.jpg',10,'2022-04-30',NULL,2),(108,'sdsadasd','dsadsa','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651357957/xrsamiix9a7pl248coqt.jpg',10,'2022-04-30',NULL,2),(109,'szines1','szines1','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651358072/havf6e34nlal6vhmviki.png',10,'2022-04-30','2022-04-30',4),(110,'Raindrops','Raindrops on a treebranch','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651424984/nswhfckvwx5iqscnnof4.jpg',44,'2022-05-01','2022-05-01',1),(111,'Bad day','Bad days','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651481486/wcjfxtjccucrijyysx5m.jpg',10,'2022-05-02',NULL,5),(112,'kismacska','Vmi macsek','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651485505/o2ib9flmfll5klxgs6bg.jpg',10,'2022-05-02',NULL,4),(113,'Nice weekend','Good memories','http://res.cloudinary.com/huiuv6wa3/image/upload/v1651486459/oagq2vyqgydgyabfj1ae.jpg',10,'2022-05-02',NULL,1);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `avatar` varchar(200) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `status` varchar(20) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  `confirmationCode` varchar(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `role` enum('user','admin') COLLATE utf8_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (10,'valamike','$2a$10$RPdwe4ecXJLO9T2srT6ehuFeoLo7TLpiq2XRnPkdqvyBqE7zy52Qi','haho@haho.hu','2022-04-26','0000-00-00',NULL,'active','jKWDazz5pddAyvgM0xg9gAoYX','admin'),(11,'nft','$2a$10$LEpQ59W2Ir5/81TOz015P.WyMAnF1Z4rhJ7HGct1n/8fc4A./LBP.','nft@nft.com','2022-04-27','0000-00-00',NULL,'active','l0805GCFDCU4HbuyGf55nSURW',NULL),(42,'zsanber','$2a$10$t/Wy78PvQ2cLVFeiaikQiuN245HKtLohKAAPWX9imwmb3Z5GbCXbq','zsanber@gmail.com','2022-05-01','0000-00-00',NULL,'active','OMqv481JaCuKADvs8h0h7cJJH',NULL),(44,'Liliproba','$2a$10$G2/b5kKa8rHAW7dZJMr6r.waWCgjxJN/Af3urQrJKv2GyU87kNu/S','lilinagy755@gmail.com','2022-05-01','0000-00-00',NULL,'active','TS3pGgJtwAMDHnKOGycQKr6wS',NULL),(45,'Lac','$2a$10$ilf0lTd0091NOFOueYKMl.QSNiADqYqZEJ7u7oOw9PY0KXJgMfGfa','tl@llh.hu','2022-05-02','0000-00-00',NULL,'pending','Kt7VnuSZKsJMWSVaoQ1h3czaQ',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-02 17:30:59
