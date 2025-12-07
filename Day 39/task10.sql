DELIMITER $$

CREATE PROCEDURE increase_price_by_percentage(
    IN percent_increase DECIMAL(5,2)
)
BEGIN
    UPDATE products
    SET price = price + (price * percent_increase / 100);
END $$

DELIMITER ;
