const faker = require('faker');

var users = [];

for(let i=0; i < 10; i++){
    users[i]={name: faker.name.findName(), email: faker.internet.email()};
}

module.exports= users;
