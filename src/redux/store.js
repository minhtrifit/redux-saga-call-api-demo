import { configureStore } from "@reduxjs/toolkit";

// Redux saga
import createSagaMiddleware from "redux-saga";
import userSaga from "./sagas";

// Reducer
import UserReducer from "./reducers/UserReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);
