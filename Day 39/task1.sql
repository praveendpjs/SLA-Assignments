DELIMITER $$

CREATE PROCEDURE get_all_students()
BEGIN
    SELECT * FROM students;
END $$

DELIMITER ;
