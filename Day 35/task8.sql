ALTER TABLE employees 
ADD COLUMN username VARCHAR(50);

UPDATE employees e
JOIN (
    SELECT 
        emp_id,
        base_username,
        ROW_NUMBER() OVER (
            PARTITION BY base_username 
            ORDER BY emp_id
        ) AS rn
    FROM (
        SELECT
            emp_id,
            LOWER(
                CONCAT(
                    SUBSTRING(first_name, 1, 1),
                    last_name
                )
            ) AS base_username
        FROM employees
    ) AS t
) AS u
ON e.emp_id = u.emp_id
SET e.username = CASE 
    WHEN u.rn = 1 THEN u.base_username
    ELSE CONCAT(u.base_username, LPAD(u.rn - 1, 2, '0'))
END;

select * from employees;


