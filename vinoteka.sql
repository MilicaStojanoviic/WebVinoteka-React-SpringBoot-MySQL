-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: vinoteka
-- ------------------------------------------------------
-- Server version	9.2.0

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

--
-- Table structure for table `porudzbina`
--

DROP TABLE IF EXISTS `porudzbina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `porudzbina` (
  `porudzbina_id` bigint NOT NULL AUTO_INCREMENT,
  `datum` datetime(6) DEFAULT NULL,
  `ukupna_cena` double DEFAULT NULL,
  PRIMARY KEY (`porudzbina_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `porudzbina`
--

LOCK TABLES `porudzbina` WRITE;
/*!40000 ALTER TABLE `porudzbina` DISABLE KEYS */;
INSERT INTO `porudzbina` VALUES (1,'2025-02-23 01:30:58.870222',4400),(2,'2025-02-23 01:40:34.386462',2700),(3,'2025-02-23 01:41:10.047925',2700),(4,'2025-02-23 01:42:52.038272',2700),(6,'2025-02-23 01:47:28.117374',2700),(7,'2025-02-23 18:19:44.019583',3000),(8,'2025-02-23 18:26:20.918412',3700);
/*!40000 ALTER TABLE `porudzbina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sorta`
--

DROP TABLE IF EXISTS `sorta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sorta` (
  `sorta_id` int NOT NULL AUTO_INCREMENT,
  `naziv` varchar(255) NOT NULL,
  PRIMARY KEY (`sorta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sorta`
--

LOCK TABLES `sorta` WRITE;
/*!40000 ALTER TABLE `sorta` DISABLE KEYS */;
INSERT INTO `sorta` VALUES (1,'Prokupac'),(2,'Tamjanika'),(3,'Šardone'),(4,'Sovinjon');
/*!40000 ALTER TABLE `sorta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stavka_porudzbine`
--

DROP TABLE IF EXISTS `stavka_porudzbine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stavka_porudzbine` (
  `stavka_id` bigint NOT NULL AUTO_INCREMENT,
  `kolicina` int NOT NULL,
  `porudzbina_id` bigint NOT NULL,
  `vino_id` bigint NOT NULL,
  PRIMARY KEY (`stavka_id`),
  KEY `FK5xic2vyqcy7cas0jpqcjs7w7i` (`porudzbina_id`),
  KEY `FK8f28nibaqa50ygj8w3j2t1lu1` (`vino_id`),
  CONSTRAINT `FK5xic2vyqcy7cas0jpqcjs7w7i` FOREIGN KEY (`porudzbina_id`) REFERENCES `porudzbina` (`porudzbina_id`),
  CONSTRAINT `FK8f28nibaqa50ygj8w3j2t1lu1` FOREIGN KEY (`vino_id`) REFERENCES `vino` (`vino_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stavka_porudzbine`
--

LOCK TABLES `stavka_porudzbine` WRITE;
/*!40000 ALTER TABLE `stavka_porudzbine` DISABLE KEYS */;
INSERT INTO `stavka_porudzbine` VALUES (1,2,1,1),(2,1,1,3),(3,1,2,1),(4,1,2,2),(5,1,3,1),(6,1,3,2),(7,1,4,1),(8,1,4,2),(11,1,6,1),(12,1,6,2),(13,2,7,2),(14,1,8,3),(15,1,8,4);
/*!40000 ALTER TABLE `stavka_porudzbine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stil`
--

DROP TABLE IF EXISTS `stil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stil` (
  `stil_id` bigint NOT NULL AUTO_INCREMENT,
  `naziv` varchar(255) NOT NULL,
  PRIMARY KEY (`stil_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stil`
--

LOCK TABLES `stil` WRITE;
/*!40000 ALTER TABLE `stil` DISABLE KEYS */;
INSERT INTO `stil` VALUES (1,'Crveno'),(2,'Belo'),(3,'Rose'),(4,'Penušavo'),(5,'Dezertno');
/*!40000 ALTER TABLE `stil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vino`
--

DROP TABLE IF EXISTS `vino`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vino` (
  `vino_id` bigint NOT NULL AUTO_INCREMENT,
  `cena` double NOT NULL,
  `naziv` varchar(255) NOT NULL,
  `slika` varchar(255) DEFAULT NULL,
  `sorta_id` int NOT NULL,
  `stil_id` bigint NOT NULL,
  PRIMARY KEY (`vino_id`),
  KEY `FK6dom5moognn6py388ikaf77f7` (`sorta_id`),
  KEY `FKge6pkbcxr998ivu6h3hb5bepg` (`stil_id`),
  CONSTRAINT `FK6dom5moognn6py388ikaf77f7` FOREIGN KEY (`sorta_id`) REFERENCES `sorta` (`sorta_id`),
  CONSTRAINT `FKge6pkbcxr998ivu6h3hb5bepg` FOREIGN KEY (`stil_id`) REFERENCES `stil` (`stil_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vino`
--

LOCK TABLES `vino` WRITE;
/*!40000 ALTER TABLE `vino` DISABLE KEYS */;
INSERT INTO `vino` VALUES (1,1200,'Magique','/images/vino1.jpg',3,3),(2,1500,'Alosios','/images/vino2.jpg',2,1),(3,2000,'Magic','/images/vino3.jpg',2,5),(4,1700,'Shine','/images/vino4.jpg',1,1);
/*!40000 ALTER TABLE `vino` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-23 20:10:42
