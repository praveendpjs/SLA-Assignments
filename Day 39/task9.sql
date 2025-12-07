DELIMITER $$

CREATE PROCEDURE get_monthly_sales(
    IN sale_month INT,
    IN sale_year INT,
    OUT total_sales DECIMAL(12,2)
)
BEGIN
    SELECT SUM(total_amount)
    INTO total_sales
    FROM orders
    WHERE MONTH(order_date) = sale_month
    AND YEAR(order_date) = sale_year;
END $$

DELIMITER ;
