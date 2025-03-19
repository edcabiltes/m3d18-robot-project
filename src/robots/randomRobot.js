import { randomPick } from "../models/villageState.js";
import { buildGraph } from "../utils/graph.js";
import { roads } from "../constants/roads.js";

const roadGraph = buildGraph(roads);

export function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) }; // Pick a valid move
  }