-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 11:42 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db66_employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(1) NOT NULL,
  `depname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `depname`) VALUES
(1, 'สื่อสารองค์กร'),
(2, 'เทคโนโลยีสารสนเทศ'),
(3, 'บริหารทั่วไป');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(3) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `salary` int(7) NOT NULL,
  `startdate` date NOT NULL,
  `dep_id` int(1) NOT NULL,
  `pos_id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `firstname`, `lastname`, `gender`, `address`, `salary`, `startdate`, `dep_id`, `pos_id`) VALUES
(1, 'กันย์', 'อดิศวร', 'ชาย', 'นครราชสีมา', 66500, '2008-02-01', 3, 2),
(2, 'กรณ์', 'ปุญญธารา', 'ชาย', 'ร้อยเอ็ด', 58400, '2009-04-23', 1, 3),
(3, 'ก้าว', 'กิตติธน', 'ชาย', 'อุบลราชธานี', 34900, '2012-05-03', 1, 4),
(4, 'ขุนเขา', 'วีระกิต', 'ชาย', 'มุกดาหาร', 54200, '2010-09-14', 1, 4),
(5, 'เขตต์', 'วงศ์เศวต', 'ชาย', 'ร้อยเอ็ด', 46900, '2010-10-15', 2, 2),
(6, 'จินดา', 'ประดิษฐ์', 'หญิง', 'กาฬสินธุ์', 28100, '2001-09-18', 3, 5),
(7, 'กองพล', 'ทรัพยภักดิ์', 'ชาย', 'นครราชสีมา', 45900, '2008-04-07', 1, 4),
(8, 'ศิริ', 'มงกุฎ', 'หญิง', 'กาฬสินธุ์', 41500, '2001-02-18', 2, 4),
(9, 'แทน', 'ธนะสกุล', 'ชาย', 'กาฬสินธุ์', 31400, '2000-12-19', 1, 3),
(10, 'เธียร', 'ตรีอัปสร', 'ชาย', 'กระบี่', 68000, '2004-06-12', 1, 1),
(11, 'ใจดี', 'วีระกิต', 'หญิง', 'อุบลราชธานี', 47300, '2015-06-11', 2, 5),
(12, 'นภ', 'มงกุฎ', 'หญิง', 'ร้อยเอ็ด', 73800, '2001-12-12', 2, 5),
(13, 'ปิ่น', 'ทรงพลัง', 'หญิง', 'เลย', 41300, '2005-07-29', 1, 3),
(14, 'ปราชญ์', 'ภัทรโสภณ', 'ชาย', 'น่าน', 20400, '2006-09-14', 2, 2),
(15, 'ภิน', 'ปานรุ้ง ', 'หญิง', 'ร้อยเอ็ด', 30200, '2013-05-25', 3, 1),
(16, 'อรรธ', 'พลาธร', 'ชาย', 'ร้อยเอ็ด', 74100, '2005-03-09', 2, 2),
(17, 'แอน', 'ธาราสกุล', 'หญิง', 'อุบลราชธานี', 45500, '2011-02-17', 3, 5),
(18, 'แทนคุณ', 'ปานรุ้ง ', 'ชาย', 'สงขลา', 18500, '2010-02-18', 2, 5),
(19, 'มังกร', 'ประดิษฐ์', 'ชาย', 'กาฬสินธุ์', 69900, '2002-05-19', 2, 3),
(20, 'ศิลา', 'ธนะสกุล', 'ชาย', 'เลย', 63000, '2004-11-20', 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `id` int(1) NOT NULL,
  `posname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`id`, `posname`) VALUES
(1, 'เจ้าหน้าที่ธุรการ'),
(2, 'เจ้าหน้าที่การเงินและบัญชี'),
(3, 'โปรแกรมเมอร์'),
(4, 'เจ้าหน้าที่การตลาด'),
(5, 'เจ้าหน้าที่ไอที');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkdep` (`dep_id`),
  ADD KEY `fkpos` (`pos_id`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fkdep` FOREIGN KEY (`dep_id`) REFERENCES `department` (`id`),
  ADD CONSTRAINT `fkpos` FOREIGN KEY (`pos_id`) REFERENCES `position` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
