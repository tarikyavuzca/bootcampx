const { Pool } = require('pg');

const pool = new Pool({
  user: 'yavuztarikdengiz',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`;

const cohortName = process.argv[2];
const values = [cohortName || 'JUL02'];

pool.query(queryString, values)
.then(res => {
  console.log("connected")
  res.rows.forEach((teacher) => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`)
  })
}).catch(err => console.error('query error', err.stack))
.finally(() => pool.end());

