const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
    hello: String
    car(id: ID!): Car
    cars: [Car]
}

type Car {
    id: ID,
    color: String!,
    type: String!
    capacity: Int!
}
`);

module.exports = schema;
