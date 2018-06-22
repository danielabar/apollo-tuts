import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolution.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';

const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolver = {
  Query: {
    hi() {
      return 'Hello Level Up';
    }
  },
};

const resolvers = merge(resolver, ResolutionsResolvers)

// temp debug
console.log(resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });