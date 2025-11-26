SELECT DATEDIFF(
    STR_TO_DATE(
        CONCAT(
            IF(DATE_FORMAT(CURDATE(), '%m-%d') <= '11-06', YEAR(CURDATE()), YEAR(CURDATE()) + 1),
            '-11-06'
        ),
        '%Y-%m-%d'
    ),
    CURDATE()
) AS days_to_birthday;