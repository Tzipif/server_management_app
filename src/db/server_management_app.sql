-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2024 at 09:30 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `server_management_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `hostingcompanie`
--

CREATE TABLE `hostingcompanie` (
  `id` int(11) NOT NULL,
  `name` enum('Microsoft','IBM','GoDaddy','DigitalO') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hostingcompanie`
--

INSERT INTO `hostingcompanie` (`id`, `name`) VALUES
(1, 'Microsoft'),
(2, 'GoDaddy'),
(3, 'IBM'),
(4, 'DigitalO');

-- --------------------------------------------------------

--
-- Table structure for table `server`
--

CREATE TABLE `server` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ip` varchar(45) NOT NULL,
  `hostingCompany_id` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdTime` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `server`
--

INSERT INTO `server` (`id`, `name`, `ip`, `hostingCompany_id`, `status`, `createdTime`) VALUES
(1, 'Server 1', '192.168.1.1', 1, 0, '2024-12-01 22:18:11'),
(2, 'Server 2', '192.168.1.2', 2, 1, '2024-12-01 22:18:11'),
(3, 'Server 3', '192.168.1.3', 3, 1, '2024-12-01 22:18:11'),
(4, 'Server 4', '192.168.1.4', 4, 0, '2024-12-01 22:18:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hostingcompanie`
--
ALTER TABLE `hostingcompanie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hostingCompany_id` (`hostingCompany_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hostingcompanie`
--
ALTER TABLE `hostingcompanie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `server`
--
ALTER TABLE `server`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `server`
--
ALTER TABLE `server`
  ADD CONSTRAINT `server_ibfk_1` FOREIGN KEY (`hostingCompany_id`) REFERENCES `hostingcompanie` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
