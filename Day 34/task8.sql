SELECT 
    dept_id,
    SUM(salary) AS total_salary,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary
FROM employees
GROUP BY dept_id
ORDER BY AVG(salary) DESC;