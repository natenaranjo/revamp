const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { ein }) => {
            return User.findOne({ username });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { ein }) => {
            const user = await User.create({ ein });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { ein }) => {
            const user = await User.findOne({ ein });

            if (!user) {
                throw new AuthenticationError('No user found with the ein!');
            }

            const correctPw = await user.isCorrectPassword(password);
            
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);
            
            return { token, user };
        },
    },
};

module.exports = resolvers;