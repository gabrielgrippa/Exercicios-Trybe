SELECT MAX(salary) FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT job_id, AVG(salary) AS 'average_salary' FROM hr.employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;

SELECT SUM(salary) FROM hr.employees;

SELECT ROUND(MAX(salary), 2), ROUND(MIN(salary), 2), ROUND(SUM(salary), 2), ROUND(AVG(salary), 2) FROM hr.employees;

SELECT COUNT(*) FROM hr.employees
WHERE job_id = 'IT_PROG';

SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id;

SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT job_id, AVG(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id != 'IT_PROG'
ORDER BY AVG(salary) DESC;

SELECT department_id, AVG(salary), COUNT(*) 'number_of_employees' FROM hr.employees 
GROUP BY department_id
HAVING COUNT(*) > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

SELECT CONCAT(first_name, ' ', last_name), DATEDIFF(CURRENT_DATE, hire_date) FROM hr.employees;