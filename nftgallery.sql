-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Ápr 23. 19:47
-- Kiszolgáló verziója: 10.4.21-MariaDB
-- PHP verzió: 8.0.11

Create database `nftgallery`;
use `nftgallery`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `nftgallery`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `categorie`
--

CREATE TABLE `categorie` (
  `idcategorie` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `categorie`
--

INSERT INTO `categorie` (`idcategorie`, `name`) VALUES
(1, 'Nature'),
(2, 'Friends'),
(3, 'Animals'),
(4, 'Family'),
(5, 'Occasions');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `image`
--

CREATE TABLE `image` (
  `idimage` int(11) NOT NULL,
  `title` varchar(45) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `user_iduser` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `categorie_idcategorie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;


INSERT INTO `image`  (`idimage`,`title`,`description`,`link`,`user_iduser`,`created_at`,`updated_at`,`categorie_idcategorie`) VALUES
(36,'probakep','probakepleiras','https://rozsakert.bloglap.hu/galeria/65718.jpg',1,'2000.01.11','2000.01.11',1),
(37,'probakep2','probakepleiras2','https://www.bloki.hu/funpics/387.jpg',1,'2000.01.11','2000.01.11',1),
(38,'probakep3','probakepleiras3','https://www.bloki.hu/funpics/357.jpg',2,'2000.01.11','2000.01.11',1),
(61,'probakep','probakepleiras','https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/640px-Male_and_female_chicken_sitting_together.jpg',2,'2000.01.11','2000.01.11',2),
(72,'probakep','probakepleiras','https://cdn.nwmgroups.hu/s/img/i/1912/20191204macska-cica.jpg',2,'2000.01.11','2000.01.11',3),
(39,'probakepx','probakepleiras h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk','https://rozsakert.bloglap.hu/galeria/65718.jpg',1,'2000.01.11','2000.01.11',1),
(40,'probakep2x','probakepleiras2 h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk','https://www.bloki.hu/funpics/387.jpg',1,'2000.01.11','2000.01.11',1),
(41,'probakep3x','probakepleiras3 h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk','https://www.bloki.hu/funpics/357.jpg',2,'2000.01.11','2000.01.11',1),
(62,'probakepxx','probakepleiras h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk','https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/640px-Male_and_female_chicken_sitting_together.jpg',2,'2000.01.11','2000.01.11',2),
(73,'probakepxxx','probakepleiras h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk','https://cdn.nwmgroups.hu/s/img/i/1912/20191204macska-cica.jpg',2,'2000.01.11','2000.01.11',3),
(75,'probakepxxx large szövegeseg','probakepleiras kf kf kfkfkfk h hh h h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk h hh h h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk h hh h h hh h fdnljmlk jfl fl kd kf k f','https://cdn.nwmgroups.hu/s/img/i/1912/20191204macska-cica.jpg',2,'2000.01.11','2000.01.11',3),
(76,'probakepxxx extra szuper large cuccosmuccos','probakepleiras dfsfkjl dsfhjkhd sfjklhsdljf fhfhhf hfhhfhfhhf hhhhhh hhhhhhhh hhhhh hh hhhhhh hhhhhhhh hhhhhh hhhhh hhhhhhhh iiiii iiiiii iiii jjjjjjj jjjjj kkkk kkkkkk kkkk llll llllll llll mmmmmmm mmmm mmmm mmmmm mmmmmmm nn nnnnn nnnn nnnnn nnnnnn lllll llllll lll llll llll llllll lllll llllllll llllll llll llll llllll oijfdo kjfs dklnfs dmln  nfnjnlén jnjnl jdn dnnjnd nnjdnjn jnd  oijfdokj fsdkl nfsdmln  nfnjn lén jnjnlj dn dn njnd nnjdn jnjnd  oijfdok jfsdkln fsdmln  nfnjnlénjnjnljdn dnnjnd nnjdnjnjnd oijfd okj fsdklnf sdmln  nfnjnlén njnl jdn dnn jnd nnjd nj njnd kf kf kfkfkfk h hh h h hh h fdnl jmlk jfl fl kd kf k fk fk kf kf kfkfkfk h hh h h hh h fdnljmlk jfl fl kd kf k fk fk kf kf kfkfkfk h hh h h hh h fdnl jmlk jfl fl kd kf k f','https://cdn.nwmgroups.hu/s/img/i/1912/20191204macska-cica.jpg',2,'2000.01.11','2000.01.11',3);
 
-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `username` varchar(45) COLLATE utf8_hungarian_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_hungarian_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_hungarian_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `avatar` varchar(200) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `status` varchar(20) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `confirmationCode` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `role` enum('user','Admin') COLLATE utf8_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

delete from user where iduser=2;

select u.iduser, u.username, u.email, u.created_at, u.updated_at, u.role from user u;

INSERT INTO `user`  (`iduser`, `username`, `password`, `email`, `created_at`, `updated_at`,`status`,`confirmationCode`,`role`) VALUES
(1, 'proba','proba','proba@proba.hu','2000.01.11','2000.01.11','active','34324324','user'),
(2, 'proba2','proba2','proba@proba.hu','2000.01.11','2000.01.11','active','34324324','user'), 
(3, 'proba3torlendo','proba3torlendo','proba@proba.hu','2000.01.11','2000.01.11','active','34324324','user'),
(4, 'admin','admin','proba@proba.hu','2000.01.11','2000.01.11','active','34324324','Admin');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`idcategorie`);

--
-- A tábla indexei `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`idimage`),
  ADD KEY `fk_user` (`user_iduser`),
  ADD KEY `fk_categorie` (`categorie_idcategorie`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `categorie`
--
ALTER TABLE `categorie`
  MODIFY `idcategorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `image`
--
ALTER TABLE `image`
  MODIFY `idimage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `fk_categorie` FOREIGN KEY (`categorie_idcategorie`) REFERENCES `categorie` (`idcategorie`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`iduser`) ON DELETE CASCADE;
COMMIT;


delete from user where iduser=3;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
