const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  
  type Query {
    books: [Book]
  }
`;


const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books
  }
}

const {
  ApolloServerPLuginLandingPageLocalDefault
} = require('apollo-server-core');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPLuginLandingPageLocalDefault({ embed: true })
  ]
})

server.listen()
  .then(({ url }) =>
    console.log(`🚀  Server ready at ${url}`)
  );