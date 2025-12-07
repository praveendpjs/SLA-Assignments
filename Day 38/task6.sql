CREATE VIEW customer_order_summary AS
SELECT 
    c.customer_id,
    c.name,
    COUNT(o.order_id) AS total_orders
FROM customers c
LEFT JOIN orders o 
ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name;
