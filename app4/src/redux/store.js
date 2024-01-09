import { createStore } from "redux";
import reducerHander from "./reducer";
const store = createStore(reducerHander);

export default store