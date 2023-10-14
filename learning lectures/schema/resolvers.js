const UserList = require('../FakeData');

const resolvers = {
  Query: {
    users() {
      return Promise.resolve(UserList); // Return a Promise that resolves to UserList
    },
  },
};

module.exports = { resolvers };
