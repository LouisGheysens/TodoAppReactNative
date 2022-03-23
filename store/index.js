import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as taskReducer } from "./todos/slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore,} from "redux-persist";

const persistConfig = {
    key: "state",
    version: 1,
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    tasks: taskReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
