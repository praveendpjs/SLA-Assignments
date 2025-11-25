select phone as raw_phone,
replace(replace(replace(replace(replace(replace(phone,'-',''),'.',''),' ',''),')',''),'(',''),'+91','') as cleaned_phone
from employees;