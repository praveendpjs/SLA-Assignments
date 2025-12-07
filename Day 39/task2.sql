DELIMITER $$

CREATE PROCEDURE get_employees_by_dept(IN dept_id INT)
BEGIN
    SELECT * 
    FROM employees 
    WHERE department_id = dept_id;
END $$

DELIMITER ;
