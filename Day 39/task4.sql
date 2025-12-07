DELIMITER $$

CREATE PROCEDURE get_employees_by_salary_range(
    IN min_salary DECIMAL(10,2),
    IN max_salary DECIMAL(10,2)
)
BEGIN
    SELECT *
    FROM employees
    WHERE salary BETWEEN min_salary AND max_salary;
END $$

DELIMITER ;
