const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema, rootValue } = require("./graphql");

const app = express();

app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is started at http://localhost:4000/graphql`);
});
