DELIMITER $$

CREATE PROCEDURE update_stock(
    IN p_id INT,
    IN new_stock INT
)
BEGIN
    UPDATE products
    SET stock = new_stock
    WHERE product_id = p_id;
END $$

DELIMITER ;
