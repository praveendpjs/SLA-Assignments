create database company_db;

use company_db;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL
);
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
INSERT INTO students (student_name)
VALUES 
('Arun'),
('Priya'),
('Karthik'),
('Meena');
INSERT INTO courses (course_name)
VALUES 
('Maths'),
('Physics'),
('Chemistry'),
('Biology');
INSERT INTO enrollments (student_id, course_id)
VALUES
(1, 1),   -- Arun -> Maths
(1, 2),   -- Arun -> Physics
(2, 1),   -- Priya -> Maths
(3, 3),   -- Karthik -> Chemistry
(4, 4);   -- Meena -> Biology
SELECT 
    s.student_name,
    c.course_name
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id;
