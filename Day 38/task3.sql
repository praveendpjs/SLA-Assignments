DELIMITER $$

CREATE PROCEDURE get_product_by_id(IN p_id INT)
BEGIN
    SELECT * 
    FROM products 
    WHERE product_id = p_id;
END $$

DELIMITER ;
