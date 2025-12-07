SELECT 
    product_name,
    quantity,
    price,
    calc_total_price(quantity, price) AS total_price
FROM order_items;
