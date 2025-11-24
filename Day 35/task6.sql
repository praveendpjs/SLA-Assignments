select emp_id,email as raw_email, 
phone as raw_phone,
lower(trim(email)) as cleaned_email,
replace(replace(replace(phone,'-',''),'.',''),' ','') as cleaned_phone
from employees;

