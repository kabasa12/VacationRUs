-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2020 at 09:43 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacation_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  `last_updated_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `role_id`, `name`, `creation_date`, `last_updated_date`) VALUES
(1, 1, 'INSERT', '2020-03-08 09:12:46', '2020-03-08 09:12:46'),
(2, 1, 'UPDATE', '2020-03-08 09:12:46', '2020-03-08 09:12:46'),
(3, 1, 'VIEW', '2020-03-08 09:12:46', '2020-03-08 09:12:46'),
(4, 2, 'VIEW', '2020-03-08 09:12:46', '2020-03-08 09:12:46');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  `last_updated_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `creation_date`, `last_updated_date`) VALUES
(1, 'Admin', '2020-03-08 09:02:41', '2020-03-08 09:02:41'),
(2, 'User', '2020-03-08 09:02:41', '2020-03-08 09:02:41');

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `token` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  `last_updated_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role_id`, `creation_date`, `last_updated_date`) VALUES
(4, 'Dana', 'Mualem', 'danamu@gmail.com', '$2b$10$YBXfVIdybNuC3o1cch3E6uclnx7QCuSmli1CUXp3Grt9KMqF69yWq', 2, '2020-03-16 14:23:29', '2020-04-20 22:36:15'),
(21, 'Moshe', 'Simp', 'moshesm@gmail.com', '$2b$10$/FynWAQFfoTU6.CIbGoa7uXVZLlLoPXeR1D1ATk.PSyGJFwHIu0jK', 2, '2020-04-18 14:24:49', '2020-04-20 14:46:28'),
(25, 'Alona', 'Kabesa', 'alonaKb@gmail.com', '$2b$10$Y8iP.CKe/g5FKL88v2ZzeONuLRVbLrNm8CRSdzugW202m4mS7j7Lu', 1, '2020-04-19 01:22:56', '2020-04-19 01:23:48'),
(26, 'Bart', 'Simpson', 'bartsm@gmail.com', '$2b$10$3qGc9MgvjZxa9ykhsQQ5veiYwKXTzvPSnRU2NXPjlixPDZ/4ZedXG', 2, '2020-04-20 14:47:52', '2020-04-20 14:47:52');

-- --------------------------------------------------------

--
-- Table structure for table `users_vacation`
--

CREATE TABLE `users_vacation` (
  `id` int(10) UNSIGNED NOT NULL,
  `vacation_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  `last_updated_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_vacation`
--

INSERT INTO `users_vacation` (`id`, `vacation_id`, `user_id`, `creation_date`, `last_updated_date`) VALUES
(9, 15, 4, '2020-04-20 22:36:30', '2020-04-20 22:36:30'),
(10, 16, 4, '2020-04-20 22:36:32', '2020-04-20 22:36:32'),
(11, 25, 4, '2020-04-20 22:36:34', '2020-04-20 22:36:34'),
(12, 1, 21, '2020-04-20 22:37:37', '2020-04-20 22:37:37'),
(13, 4, 21, '2020-04-20 22:37:39', '2020-04-20 22:37:39'),
(14, 25, 21, '2020-04-20 22:37:43', '2020-04-20 22:37:43'),
(15, 2, 26, '2020-04-20 22:38:30', '2020-04-20 22:38:30'),
(16, 4, 26, '2020-04-20 22:38:33', '2020-04-20 22:38:33'),
(17, 16, 26, '2020-04-20 22:38:35', '2020-04-20 22:38:35'),
(18, 15, 26, '2020-04-20 22:38:37', '2020-04-20 22:38:37');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(400) NOT NULL,
  `destination` varchar(250) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(400) NOT NULL,
  `from_date` datetime NOT NULL,
  `to_date` datetime NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `num_of_followers` int(10) UNSIGNED NOT NULL,
  `show_vacation` tinyint(1) DEFAULT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  `last_updated_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `name`, `destination`, `description`, `image`, `from_date`, `to_date`, `price`, `num_of_followers`, `show_vacation`, `creation_date`, `last_updated_date`) VALUES
(1, 'Cockroach Hotel', 'Larnaca Cyprus', 'Cockroach Hotel is located in the centre of Larnaca city, just 50 metres away from Phinikoudes Beach. It offers accommodation with free Wi-Fi access and a fully equipped fitness centre', 'http://localhost:4000/uploads/2038hotel1.jpg', '2020-04-04 00:00:00', '2020-04-08 00:00:00', 2501, 1, 1, '2020-03-08 09:49:15', '2020-04-20 22:37:37'),
(2, 'BadBreakfast Hotel', 'Haifa Israel', 'The Haifa BadBreakfast Hotel overlooks the Haifa Bay and is just a 2-minute walk from the Baha\'i Gardens in the Carmel area of Haifa. It offers a bar and terrace with panoramic views across the bay. Free WiFi is available in all areas', 'http://localhost:4000/uploads/2038hotel2.jpg', '2020-05-05 00:00:00', '2020-05-08 00:00:00', 3100, 1, 1, '2020-03-08 09:54:15', '2020-04-20 22:38:30'),
(3, 'Corona Vip Hotel', 'HollyWood LA', 'Corona Vip Hotel is Where All the Action Begins! Corona Vip Hotel is conveniently located across the street from a Redline Metro ( Subway or Tube ) station at the corner of Vermont Avenue and Santa Monica Blvd.. Hollywood Hotel has just completed a restoration of it\'s 3000 sq ft courtyard', 'http://localhost:4000/uploads/2042hotel6.jpg', '2020-03-12 00:00:00', '2020-03-20 00:00:00', 2720, 0, 0, '2020-04-04 16:48:02', '2020-04-20 14:45:43'),
(4, 'HollyShit Hotel', 'Jerusalem Israel', 'A family run hotel situated in an old Arab mansion located only a few meters from the Garden Tomb and The Damascus Gate and within a short walking distance to major historical and cultural sites.Originally built by a feudal lord in the heart of the ancient city of Jerusalem', 'http://localhost:4000/uploads/2038hotel4.jpg', '2020-05-11 00:00:00', '2020-05-18 00:00:00', 1100, 2, 1, '2020-04-04 17:30:38', '2020-04-20 22:38:33'),
(5, 'Go Away Hotel', 'Harlem New York', 'Go Away Harlem hotel is steps from the Apollo Theater, Central Park, and NYC express subway stations. Our boutique accommodation has free wifi, on-site dining, and Plug & Play equipped guest rooms', 'http://localhost:4000/uploads/2038hotel5.jpg', '2020-05-09 00:00:00', '2020-05-12 00:00:00', 750, 0, 1, '2020-04-04 17:32:37', '2020-04-20 14:45:43'),
(6, 'Beach Resort', 'Caribbean Usa', 'Beach Resort brings a signature approach to luxury lifestyle that redefines the destination resort experience. Each of the 91 guestrooms and 5 Villas offers sweeping ocean views positioned and designed to pay homage to the unspoiled island', 'http://localhost:4000/uploads/2038hotel6.jpg', '2020-05-31 00:00:00', '2020-06-09 00:00:00', 7200, 0, 0, '2020-04-04 17:35:56', '2020-04-20 14:45:43'),
(7, 'Crazy Hotel', 'South Beach Florida', 'Crazy Hotel is a 101 room property where you will feel right at home. All of our rooms have lake views, we offer Tempur-pedic mattresses (ask for our Deluxe Rooms), a hot free breakfast and of course an airport shuttle', 'http://localhost:4000/uploads/2038hotel7.jpg', '2020-07-11 00:00:00', '2020-07-17 00:00:00', 6300, 0, 0, '2020-04-04 17:42:12', '2020-04-20 14:45:43'),
(8, 'Atlantis Hotel', 'The Palm Dubai', 'Situated on the tip of Palm Jumeirah’s east crescent, Rixos The Palm Dubai is Dubai’s only Ultra All-Inclusive beach resort. The resort boasts the city’s most spectacular location offering panoramic views of the azure waters of the Arabian Gulf, Dubai\'s iconic skyscrapers, the glittering skyline of Dubai Marina and the remarkable lagoons and architecture of Palm Jumeirah itself', 'http://localhost:4000/uploads/2038hotel8.jpg', '2020-06-03 00:00:00', '2020-06-20 00:00:00', 32000, 0, 0, '2020-04-04 17:44:11', '2020-04-20 14:45:43'),
(9, 'Smelly Resort', 'Gaza Israel', 'The newest hotel in Palestine, we offer 66 spacious suites, each with King or 2 Queen beds, partial room divider, living area with pull-out sofa, flat-screen TV, mini fridge, microwave, and desk. We provide our guests with a 100% smoke-free environment', 'http://localhost:4000/uploads/2038hotel9.jpg', '2020-08-18 00:00:00', '2020-08-22 00:00:00', 1925, 0, 0, '2020-04-04 18:06:16', '2020-04-20 14:45:43'),
(10, 'Do Not Enter Hotel', 'Honolulu Hawaii', 'Do Not Enter Hotel is Waikiki\'s only true resort destination located on the widest stretch of beach in Waikiki. Do as much or as little as you like on Duke Kahanamoku Beach & Lagoon, the world-famous stretch of pristine white sands and azure waters fronting the Do Not Enter Hotel', 'http://localhost:4000/uploads/2038hotel10.jpg', '2020-10-10 00:00:00', '2020-10-16 00:00:00', 5140, 0, 0, '2020-04-04 18:08:42', '2020-04-20 14:45:43'),
(13, 'Gaaton Resort', 'Nahariya Israel', 'Come and loose all your mony', 'http://localhost:4000/uploads/2038hotel11.jpg', '2020-07-21 00:00:00', '2020-07-24 00:00:00', 1500, 0, 0, '2020-04-12 21:34:43', '2020-04-15 22:54:57'),
(14, 'Hell Hotel', 'Corona City', 'All Sick Fuck Come Here', 'http://localhost:4000/uploads/2038hotel12.jpg', '2020-04-12 00:00:00', '2020-04-19 00:00:00', 1450, 0, 0, '2020-04-13 00:00:02', '2020-04-15 22:55:06'),
(15, 'Balagan Motel', 'Tel-Aviv Israel', 'The most ugly place you can spend your money on,We will love to take it though', 'http://localhost:4000/uploads/2042hotel23.jpg', '2020-08-19 00:00:00', '2020-08-25 00:00:00', 3210, 2, 1, '2020-04-13 00:05:32', '2020-04-20 22:38:37'),
(16, 'ChopStick Hotel', 'Tel-Aviv Israel', 'We have the most beautiful sunset you\'ll ever see', 'http://localhost:4000/uploads/2041hotel19.jpg', '2020-04-12 00:00:00', '2020-04-24 00:00:00', 3750, 2, 1, '2020-04-13 22:05:21', '2020-04-20 22:38:35'),
(25, 'Alex Palace', 'Gadera Israel', 'We have the most beautiful sunset you\'ll ever see', 'http://localhost:4000/uploads/2043hotel24.jpg', '2020-09-08 00:00:00', '2020-09-16 00:00:00', 5120, 2, 1, '2020-04-20 21:43:53', '2020-04-20 22:37:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `users_vacation`
--
ALTER TABLE `users_vacation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vacation_id` (`vacation_id`,`user_id`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `users_vacation`
--
ALTER TABLE `users_vacation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
