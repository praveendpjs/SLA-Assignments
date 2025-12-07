DELIMITER $$

CREATE PROCEDURE log_user_login(IN u_id INT)
BEGIN
    INSERT INTO login_logs(user_id, login_time)
    VALUES (u_id, NOW());
END $$

DELIMITER ;
