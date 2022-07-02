import { createStore } from "redux";
import rootre from "./redux/reducer/main";

const store = createStore(
    rootre
);
export default store;

