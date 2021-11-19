import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});

// import { createStore, applyMiddleware, compose } from "redux"
// import thunk from "redux-thunk"
// import { createWrapper } from "next-redux-wrapper"
// import rootReducer from "./reducers/rootReducer"

// const middleware = [thunk];

// // To be able to debug with Redux Dev Tools
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

// const makeStore = () => createStore(rootReducer, enhancer);

// export const wrapper = createWrapper(makeStore);