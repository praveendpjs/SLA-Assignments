create VIEW high_scorers as
SELECT * 
FROM students
WHERE marks > 80;
