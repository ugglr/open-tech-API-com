const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const Event = require("./models/laptops");

const app = express();

app.use(bodyParser.json());

app.use(
  "graphql",
  graphqlHttp({
    schema: buildSchema(`
            type Laptop {
                _id: ID!
            }

            input LaptopInput {

            }

            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `)
  })
);
