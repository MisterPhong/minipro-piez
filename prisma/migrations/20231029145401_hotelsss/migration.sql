-- CreateTable
CREATE TABLE `employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FullName` VARCHAR(191) NOT NULL,
    `Phone` VARCHAR(191) NOT NULL,
    `Gender` VARCHAR(191) NOT NULL,
    `Occupation` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `CheckInDate` VARCHAR(191) NOT NULL,
    `CheckOutDate` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
