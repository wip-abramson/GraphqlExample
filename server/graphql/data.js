/**
 * Created by will on 01/03/18.
 */
export const projects = [
  { id: 1, name: "TestProject"},
  { id: 2, name: "Wills Project"}
];

export const structures = [
  { id: 1, structureData: 'CCC',  projectId: 1, predictionId: 1},
  { id: 2, structureData: 'C1CCC1', projectId: 1, predictionId: 2 },
  { id: 3, structureData: 'CH4', projectId: null, predictionId: 1 },
  { id: 4, structureData: 'NH3', projectId: null, predictionId: 2 },
  { id: 4, structureData: 'CCCC', projectId: null, predictionId: 2 },
  { id: 5, structureData: 'CH4', projectId: 2, predictionId: 3 },
  { id: 6, structureData: 'H2O', projectId: null, predictionId: 3 },

];
export const predictions = [
  { id: 1, rootStructureId: 1},
  { id: 2, rootStructureId: 2},
  { id: 3, rootStructureId: 5},

];