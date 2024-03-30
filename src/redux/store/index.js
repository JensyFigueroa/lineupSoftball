import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "../reducer/index.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistConfig = {
  key: "root",
  storage,
  whiteList: [
    "substitutes",
    "playersLineup",
    "statechangePlayer",
    "scoresHomeClub",
    "scoresVisitor",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store;
