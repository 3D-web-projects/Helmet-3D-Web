import "./style.css";

import setup from "./setup";
import modelSetup from "./model";
import modelName from "./modelName";

const { scene } = setup();
modelSetup(scene, modelName);
