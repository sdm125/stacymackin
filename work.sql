-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 15, 2017 at 06:11 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stacy-mackin`
--

-- --------------------------------------------------------

--
-- Table structure for table `work`
--

CREATE TABLE `work` (
  `id` int(11) NOT NULL,
  `title` tinytext NOT NULL,
  `subtitle` tinytext NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `work`
--

INSERT INTO `work` (`id`, `title`, `subtitle`, `description`, `image`, `url`) VALUES
(1, 'mackin engineering company', 'redesign, responsive website', 'Designed and developed a new responsive company website. Coordinated\r\nupdated content with the Manager of Marketing and various departments.\r\nUtilized many web development technologies such as HTML, CSS,\r\nJavaScript, jQuery, AngularJS, Bootstrap, and MongoDB.', 'mec-combined.png', 'http://www.mackinengineering.com'),
(2, 'university of pittsburgh medical center', 'content migration', 'Worked on UPMC Infonet team to build a new responsive SharePoint website that provides news and information to all 60,000 members of the UPMC staff. Tested mobile responsiveness of styling and formatting.  Created a JavaScript program that takes a filename as input and outputs the name in the correct naming convention format. Produced web browser macros to automate repetitive tasks.', 'upmc-combined.png', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `work`
--
ALTER TABLE `work`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `work`
--
ALTER TABLE `work`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
