SELECT
    CASE
        WHEN TIMESTAMPDIFF(YEAR, hire_date, now()) < 1 THEN '<1 year'
        WHEN TIMESTAMPDIFF(YEAR, hire_date, now()) BETWEEN 1 AND 3 THEN '1–3 years'
        WHEN TIMESTAMPDIFF(YEAR, hire_date, now()) BETWEEN 3 AND 5 THEN '3–5 years'
        ELSE '5+ years'
    END AS tenure_bucket,
    COUNT(*) AS employee_count
FROM employees
GROUP BY tenure_bucket;