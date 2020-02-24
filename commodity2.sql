-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.10-MariaDB
-- PHP 版本： 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `commodity2`
--

-- --------------------------------------------------------

--
-- 資料表結構 `items`
--

CREATE TABLE `items` (
  `tId` int(11) NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名稱',
  `itemName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品名稱',
  `itemImg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品照片',
  `itemPrice` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品價格',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `items`
--

INSERT INTO `items` (`tId`, `Name`, `itemName`, `itemImg`, `itemPrice`, `created_at`, `updated_at`) VALUES
(197, 'Apple', 'Apple Watch Nike', 'watch.jpg', '6400', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(198, 'Apple2', 'Apple Watch Nike2', 'watch2.jpg', '6000', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(199, 'Apple3', 'Apple Watch Nike3', 'watch3.jpg', '6500', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(200, 'Apple4', 'Apple Watch Nike4', 'watch4.jpg', '6100', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(201, 'Apple5', 'Apple Watch Nike5', 'watch5.jpg', '6200', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(202, 'Apple6', 'Apple Watch Nike6', 'watch6.jpg', '6300', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(203, 'Apple7', 'Apple Watch Nike7', 'watch7.jpg', '6800', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(204, 'Apple8', 'Apple Watch Nike8', 'watch8.jpg', '7000', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(205, 'Apple9', 'Apple Watch Nike9', 'watch9.jpg', '6600', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(206, 'Apple10', 'Apple Watch Nike10', 'watch10.jpg', '8000', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(207, 'Apple11', 'Apple Watch Nike11', 'watch3.jpg', '5000', '2020-02-24 16:08:30', '2020-02-24 16:08:30'),
(208, 'Apple12', 'Apple Watch Nike12', 'watch6.jpg', '9000', '2020-02-24 16:08:30', '2020-02-24 16:08:30');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`tId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `items`
--
ALTER TABLE `items`
  MODIFY `tId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
