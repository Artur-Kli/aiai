import { GraphQLScalarType } from "graphql";
import { Kind } from 'graphql/language'
import GraphQLJSON from "graphql-type-json";

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: Date) {
      return value.toISOString(); // Value send to the client
    },
    parseValue(value: string) {
      return new Date(value); // Value from to client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
  JSON: GraphQLJSON,
}
