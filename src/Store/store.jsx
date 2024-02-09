import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import tabSlice from "./tabSlice";


const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        auth: authSlice,
        tab: tabSlice,
    })
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE, FLUSH]
        }
    })
});

const persistor = persistStore(store);

export { store, persistor };
