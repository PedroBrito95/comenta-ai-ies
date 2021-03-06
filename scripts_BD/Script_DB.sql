-- MySQL Script generated by MySQL Workbench
-- Tue Sep 25 20:02:45 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema comenta-ai
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema comenta-ai
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `comenta-ai` DEFAULT CHARACTER SET utf8 ;
USE `comenta-ai` ;

-- -----------------------------------------------------
-- Table `comenta-ai`.`alunos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comenta-ai`.`alunos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `comenta-ai`.`ies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comenta-ai`.`ies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `local` VARCHAR(45) NOT NULL,
  `media` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `comenta-ai`.`cursos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comenta-ai`.`cursos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `comenta-ai`.`avaliacoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comenta-ai`.`avaliacoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pros` VARCHAR(1000) NOT NULL,
  `contras` VARCHAR(1000) NOT NULL,
  `conselho_direcao` VARCHAR(1000) NULL,
  `nota` DOUBLE NOT NULL,
  `voltaria` BOOLEAN NULL DEFAULT 1,
  `alunos_id` INT NOT NULL,
  `ies_id` INT NOT NULL,
  `cursos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_alunos_idx` (`alunos_id` ASC),
  INDEX `fk_ies_idx` (`ies_id` ASC),
  INDEX `fk_cursos_idx` (`cursos_id` ASC),
  CONSTRAINT `fk_alunos`
    FOREIGN KEY (`alunos_id`)
    REFERENCES `comenta-ai`.`alunos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ies`
    FOREIGN KEY (`ies_id`)
    REFERENCES `comenta-ai`.`ies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cursos`
    FOREIGN KEY (`cursos_id`)
    REFERENCES `comenta-ai`.`cursos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
