/**
 * Created by will on 01/03/18.
 */
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';



// Construct a schema using the GraphQL schema language
const typeDefs = `
  "Projects hold structures"
  type Project {
    
    id: Int!
    "list of structures in project"
    structures: [Structure]
    name: String
  }
  
  "Chemical Structures"
  type Structure {
    id: Int!
    "List of Predictions run with this structure"
    predictions: [Prediction]
    "Molecular Weight calculated from structureData"
    molecularWeight: Int!
    "Project structure belongs to"
    project: Project
    structureData: String!
  }
  type Prediction {
    id: Int!
    "Structures produced by running prediction"
    results(limit: Int): [Structure]
    root: Structure!
  }
  type Query {
    "return all structures for a particular Id"
    structures(projectId: Int!): [Structure]
    projects: [Project]
    prediction(id: Int!): Prediction
  }
`;



// Get a GraphQL.js Schema object
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default executableSchema;

