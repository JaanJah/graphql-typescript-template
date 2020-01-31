import express from 'express';
import {ApolloServer} from "apollo-server-express";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

// Create an express application
const app = express();
export const server = async () => {
    const apolloServer = new ApolloServer({typeDefs: await typeDefs(), resolvers});

    // Apply express application as middleware
    apolloServer.applyMiddleware({ app });

    // Start listening the server
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
    );
};

server().then();