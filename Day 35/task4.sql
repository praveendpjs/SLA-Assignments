select 
    emp_id,
    LPAD(emp_id, 4, '0') AS padded_code
FROM employees;