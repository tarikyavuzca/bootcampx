SELECT  SUM(duration) as "total duration" FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE name = 'Ibrahim Schimmel';