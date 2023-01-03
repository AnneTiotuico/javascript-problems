/*
We're putting together some information about our new company Space Design.
Not all roles have been filled yet. But although we have a CEO and
Scrum Master, displaying them shows undefined. Why is that?
*/

// // Roles (salary still to be determined)

// const ceo = {
//   tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
//   salary: 0,
// };

// const developer = {
//   tasks: ['turn product vision into code'],
//   salary: 0,
// };

// const scrumMaster = {
//   tasks: ['organize scrum process', 'manage scrum teams'],
//   salary: 0,
// };

// // Team -- we're hiring!

// const team = {};

// team[ceo] = 'Kim';
// team[scrumMaster] = 'Alice';
// team[developer] = undefined;

// const company = {
//   name: 'Space Design',
//   team,
//   projectedRevenue: 500000,
// };

// console.log(`----{ ${company.name} }----`);
// console.log(`CEO: ${company.team[ceo]}`);
// console.log(`Scrum master: ${company.team[scrumMaster]}`);
// console.log(`Projected revenue: $${company.projectedRevenue}`);

// // ----{ Space Design }----
// // CEO: undefined
// // Scrum master: undefined
// // Projected revenue: $500000

/*
we have to use quotes when using bracket notation so that it doesn't look for a variable
with the same name instead.
*/

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;



const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};


console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team['ceo']}`);
console.log(`Scrum master: ${company.team['scrumMaster']}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);


/*
LS Solution:

const team = {};

team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;

console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team['ceo']);
console.log('Scrum master: ' + company.team['scrumMaster']);
console.log('Projected revenue: $' + company.projectedRevenue);

OR

const team = {};

team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;

console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team.ceo);
console.log('Scrum master: ' + company.team.scrumMaster);
console.log('Projected revenue: $' + company.projectedRevenue);


Recall from the assignment on object properties that property names are always strings.
To assign and access the property value, we can use either dot notation or strings w
ith bracket notation, as shown in the two solutions above.
(JavaScript style guides typically recommend using dot notation when possible.)

Most relevant here is that when we use bracket notation to assign or access
an object property, the expression inside the brackets must be a string value;
if it is not, JavaScript will convert it into one. Our original code
unintentionally references the variables ceo, scrumMaster, and developer rather
than passing in strings. JavaScript looks up the values assigned to those variables,
and since the values are objects, converts them to strings. The string representation
of all three values is [object Object], so on lines 22-24 we were actually
repeatedly re-assigning the value of team['[object Object]']. The last assignment,
on line 24, assigned it to undefined. As a result, the value of team ended up as follows:
{ '[object Object]': undefined }

Further Exploration
You may wish to take a look at the MDN documentation for accessing object
properties via bracket or dot notation.

*/