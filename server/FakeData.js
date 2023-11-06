const UserList = [
    {
      id:1,
      name: "John Doe",
      username: "johndoe123",
      age: 25,
      nationality: "USA",
      friends:[
        {
          id:2,
          name: "Alice Smith",
          username: "alicesmith456",
          age: 30,
          nationality: "CANADA"
        },
        {
          id:3,
          name: "Bob Johnson",
          username: "bobjohnson789",
          age: 28,
          nationality: "UK"
        },
      ]
    },
    {
      id:2,
      name: "Alice Smith",
      username: "alicesmith456",
      age: 30,
      nationality: "CANADA"
    },
    {
      id:3,
      name: "Bob Johnson",
      username: "bobjohnson789",
      age: 28,
      nationality: "UK"
    },
    {
      id:4,
      name: "Eva Williams",
      username: "evawilliams101",
      age: 22,
      nationality: "AUSTRALIA"
    },
    {
      id:5,
      name: "Carlos Garcia",
      username: "carlosgarcia222",
      age: 35,
      nationality: "SPAIN"
    }
  ];
  const MovieList = [
    {
      id: 1,
      name: "Avengers Endgame",
      yearOfPublication: 2019,
      isInTheaters: true,
    },
    {
      id: 2,
      name: "Interstellar",
      yearOfPublication: 2007,
      isInTheaters: true,
    },
    {
      id: 3,
      name: "Superbad",
      yearOfPublication: 2009,
      isInTheaters: true,
    },
    {
      id: 4,
      name: "PedroTech The Movie",
      yearOfPublication: 2035,
      isInTheaters: false,
    },
  ];
module.exports={UserList,MovieList}