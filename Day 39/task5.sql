DELIMITER $$

CREATE PROCEDURE update_student_phone(
    IN s_id INT,
    IN new_phone VARCHAR(15)
)
BEGIN
    UPDATE students
    SET phone = new_phone
    WHERE id = s_id;
END $$

DELIMITER ;
