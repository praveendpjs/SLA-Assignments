CREATE VIEW order_details AS
select 
    o.order_id,
    c.name AS customer_name,
    o.qty
from orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;
