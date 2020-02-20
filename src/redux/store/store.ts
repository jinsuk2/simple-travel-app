import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { persistStore } from "redux-persist";
import sagas from "./saga"


export default function initializeStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));

    persistStore(store, null, () => {
        store.getState();
    });

    sagaMiddleware.run(sagas);

    return store;
}
