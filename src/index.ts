import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import { resolvers, typeDefs } from "./graphql";
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from "./database";

const mount = async (app: Application) => {
  const db = await connectDatabase();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  }) as any;
  server.applyMiddleware({ app, path: "/api" });

  app.listen(process.env.PORT);
  console.log(`[app]: http://localhost:${process.env.PORT}`);
};

mount(express());
