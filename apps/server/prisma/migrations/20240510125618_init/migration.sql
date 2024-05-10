-- CreateTable
CREATE TABLE `map_record` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` INTEGER NOT NULL,
    `map_id` INTEGER NOT NULL,
    `region_name` VARCHAR(191) NOT NULL,
    `data_type` VARCHAR(191) NOT NULL,
    `data` JSON NOT NULL,
    `trip_start_date` DATETIME(3) NOT NULL,
    `trip_end_date` DATETIME(3) NOT NULL,
    `trip_memo` VARCHAR(191) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
