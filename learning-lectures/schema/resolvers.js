const { UserInputError } = require("apollo-server");
const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");
const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },
  Mutation: {
    CreateUser: (parent, args) => {
      const user = args.input;
      const id = UserList[UserList.length - 1].id;
      user.id = id;
      UserList.push(user);
      return user;
    },
    UpdateUsernameInput: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id == Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },
    DeleteUsernameInput: (parent, args) => {
      const {deleteUsernameInputId} = args.input;
      _.remove(UserList,(user)=>{user.id===(deleteUsernameInputId)});
      return null;
    },
  },
};

module.exports = { resolvers };
