SELECT 
    YEAR(hire_date) AS hire_year,
    MONTH(hire_date) AS hire_month,
    COUNT(*) AS hire_count
FROM employees
WHERE hire_date >= DATE_SUB(now(), INTERVAL 24 MONTH)
GROUP BY YEAR(hire_date), MONTH(hire_date)
WITH ROLLUP
ORDER BY hire_year, hire_month;