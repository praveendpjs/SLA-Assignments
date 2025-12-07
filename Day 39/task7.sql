DELIMITER $$

CREATE PROCEDURE calculate_bill(
    IN price DECIMAL(10,2),
    IN quantity INT,
    OUT bill DECIMAL(10,2)
)
BEGIN
    SET bill = price * quantity;
END $$

DELIMITER ;
