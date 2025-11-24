select emp_id,hire_date,
DATEDIFF(NOW(), hire_date)
from employees
where emp_id = 1;