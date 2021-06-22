import express from "express";
import { resolvers, typeDefs } from "./graphql";
import { ApolloServer } from "apollo-server-express";

const app = express();
const port = 9000;

const server = new ApolloServer({ typeDefs, resolvers }) as any;
server.applyMiddleware({ app, path: "/api" });

app.listen(port);
console.log(`[app]: http://localhost:${port}`);
