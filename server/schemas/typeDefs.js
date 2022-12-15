const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        ein: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(ein: String!): User
        me: User
    }

    type Mutation {
        addUser(ein: String!): Auth
        login(ein: String!): Auth
    }
`;

module.exports = typeDefs;