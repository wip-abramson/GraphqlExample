/**
 * Created by will on 01/03/18.
 */
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import schema from './graphql/schema';
import bodyParser from 'body-parser';

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));
app.use('/', (req, res) => {
  res.json('Go to /graphql to test your queries and mutations!');
});

const server = app.listen(3000, () => {
  const { port } = server.address();
  console.info(`\n\nExpress listen at http://localhost:${port} \n`);
});

