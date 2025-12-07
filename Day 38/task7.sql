DELIMITER $$

CREATE PROCEDURE insert_employee(
    IN emp_name VARCHAR(100),
    IN emp_dept VARCHAR(50),
    IN emp_salary DECIMAL(10,2)
)
BEGIN
    INSERT INTO employees(name, department, salary)
    VALUES (emp_name, emp_dept, emp_salary);
END $$

DELIMITER ;
