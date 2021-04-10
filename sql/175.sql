-- 175. Combine Two Tables

SELECT FirstName, LastName, City, State
FROM Person
LEFT JOIN Address 
on Person.PersonId = Address.PersonId


