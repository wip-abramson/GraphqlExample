/**
 * Created by will on 01/03/18.
 */
import { find, filter } from 'lodash';
import casual from 'casual';
import {
  projects,
  predictions,
  structures
} from './data';

// Provide resolver functions for your schema fields
export default {
  Query: {
    projects: () => projects,
    prediction: (_, args) => find(predictions, { id: args.id }),
    structures: (_, args) => filter(structures, { projectId: args.projectId})
  },
  Structure: {
    predictions: (structure) => filter(predictions, { rootStructureId: structure.id }),
    molecularWeight: (structure) => calculateMolecularWeight(structure.structureData),
    project: (structure) => find(projects, { id: structure.projectId })
  },
  Project: {
    structures: (project) => filter(structures, { projectId: project.id }),
  },
  Prediction: {
    results: (prediction, args) => {
      return args.limit ? filter(structures, {predictionId: prediction.id}).slice(0,args.limit) : filter(structures, {predictionId: prediction.id});
    },
    root: (prediction) => find(structures, {id: prediction.rootStructureId})
  }
};

// your resolvers can do logic
function calculateMolecularWeight(structureData) {
  return casual.integer(0,500);
}