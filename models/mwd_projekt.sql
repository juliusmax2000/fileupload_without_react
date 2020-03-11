-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 15. Jan 2020 um 22:13
-- Server-Version: 10.4.8-MariaDB
-- PHP-Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `mwd_projekt`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzer`
--

CREATE TABLE `benutzer` (
  `B_ID` int(10) NOT NULL,
  `B_Vorname` varchar(50) DEFAULT NULL,
  `B_Nachname` varchar(50) DEFAULT NULL,
  `B_Email_adresse` varchar(60) DEFAULT NULL,
  `B_Passwort` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `benutzer`
--

INSERT INTO `benutzer` (`B_ID`, `B_Vorname`, `B_Nachname`, `B_Email_adresse`, `B_Passwort`) VALUES
(1, 'Collin', 'Gedak', 'C_Gedak@t-online.de', 'Passwort'),
(2, 'Clara', 'Müller', 'C_M@t-online.de', 'Passwort'),
(3, 'Name', 'Nachname', 'email', 'Pass'),
(4, 'Name', 'Nachname', 'email', 'Pass'),
(5, 'Name', 'Nachname', 'email', 'Pass'),
(6, 'Name', 'Nachname', 'email', 'Pass'),
(7, 'Name', 'Nachname', 'email', 'Pass'),
(8, 'Name', 'Nachname', 'email', 'Pass');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  ADD PRIMARY KEY (`B_ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  MODIFY `B_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
