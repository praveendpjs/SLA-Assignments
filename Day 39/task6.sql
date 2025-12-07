DELIMITER $$

CREATE PROCEDURE insert_order(
    IN c_id INT,
    IN o_date DATE,
    IN total DECIMAL(10,2)
)
BEGIN
    INSERT INTO orders(customer_id, order_date, total_amount)
    VALUES (c_id, o_date, total);
END $$

DELIMITER ;
