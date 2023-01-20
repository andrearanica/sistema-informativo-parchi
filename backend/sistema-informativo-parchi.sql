-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Gen 20, 2023 alle 09:13
-- Versione del server: 10.4.27-MariaDB
-- Versione PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sistema-informativo-parchi`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `animali`
--

CREATE TABLE `animali` (
  `id_animale` int(11) NOT NULL,
  `id_specie` int(11) NOT NULL,
  `sesso` char(1) NOT NULL,
  `adulto` bit(1) NOT NULL,
  `dataDiNascita` date NOT NULL,
  `id_parco` int(11) NOT NULL,
  `nome_animale` varchar(255) NOT NULL,
  `statoSalute` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `animali`
--

INSERT INTO `animali` (`id_animale`, `id_specie`, `sesso`, `adulto`, `dataDiNascita`, `id_parco`, `nome_animale`, `statoSalute`) VALUES
(1, 2, 'M', b'1', '2022-01-19', 1, 'Gyno', 'Va bene'),
(2, 2, 'F', b'1', '2022-11-07', 1, 'Cane', 'Ok'),
(3, 1, 'M', b'1', '2023-01-11', 1, 'Gianni', 'Ha mangiato poco'),
(4, 3, 'M', b'0', '2022-11-07', 2, 'Tigre', 'Perfetto'),
(5, 2, 'M', b'1', '1948-01-09', 1, 'Doggo', 'Stabile'),
(6, 3, 'M', b'1', '2016-01-20', 2, 'Tigre', 'Perfetta');

-- --------------------------------------------------------

--
-- Struttura della tabella `parchi`
--

CREATE TABLE `parchi` (
  `id_parco` int(11) NOT NULL,
  `nome_parco` varchar(255) NOT NULL,
  `regione` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `parchi`
--

INSERT INTO `parchi` (`id_parco`, `nome_parco`, `regione`) VALUES
(1, 'Parco del Serio', 'Lombardia'),
(2, 'Ompi di Brembate', 'Lombardia');

-- --------------------------------------------------------

--
-- Struttura della tabella `specie`
--

CREATE TABLE `specie` (
  `id_specie` int(11) NOT NULL,
  `nome_specie` varchar(255) NOT NULL,
  `id_parco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `specie`
--

INSERT INTO `specie` (`id_specie`, `nome_specie`, `id_parco`) VALUES
(1, 'Sciurus', 1),
(2, 'Canis', 1),
(3, 'Panthera tigris', 2);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `animali`
--
ALTER TABLE `animali`
  ADD PRIMARY KEY (`id_animale`),
  ADD KEY `id_specie` (`id_specie`),
  ADD KEY `id_parco` (`id_parco`);

--
-- Indici per le tabelle `parchi`
--
ALTER TABLE `parchi`
  ADD PRIMARY KEY (`id_parco`);

--
-- Indici per le tabelle `specie`
--
ALTER TABLE `specie`
  ADD PRIMARY KEY (`id_specie`),
  ADD KEY `id_parco` (`id_parco`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `animali`
--
ALTER TABLE `animali`
  MODIFY `id_animale` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `parchi`
--
ALTER TABLE `parchi`
  MODIFY `id_parco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `specie`
--
ALTER TABLE `specie`
  MODIFY `id_specie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `animali`
--
ALTER TABLE `animali`
  ADD CONSTRAINT `animali_ibfk_1` FOREIGN KEY (`id_specie`) REFERENCES `specie` (`id_specie`),
  ADD CONSTRAINT `animali_ibfk_2` FOREIGN KEY (`id_parco`) REFERENCES `parchi` (`id_parco`);

--
-- Limiti per la tabella `specie`
--
ALTER TABLE `specie`
  ADD CONSTRAINT `specie_ibfk_1` FOREIGN KEY (`id_parco`) REFERENCES `parchi` (`id_parco`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
