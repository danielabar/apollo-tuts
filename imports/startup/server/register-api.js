import ResolutionsSchema from '../../api/resolutions/Resolution.graphql';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

// Define schema(s)
const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`;

// Query is a function
const typeDefs = [
  testSchema,
  ResolutionsSchema
];

const resolvers = {
  Query: {
    hi() {
      return 'Hello Level Up';
    },
    resolutions() {
      return [
        {
          _id: '111aaa',
          name: 'Get stuff done!'
        },
        {
          _id: '222bbb',
          name: 'Get more stuff done!'
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });