select 
    phone as raw_phone,
    replace(phone, '-', '') AS cleaned_phone
FROM employees;