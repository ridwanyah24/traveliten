import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = combineReducers({ 
   
  });
  
  // Redux persist configuration
  const persistConfig = {
    key: "root",
    storage,
    whiteList: ["auth", "createCourse", "addNote", "courseFilter"],
    blacklist: [], // Prevent persisting the request slice
  };
  
  // Apply persist reducer
  const persistedReducer = persistReducer(persistConfig, reducers);
  
  // Configure the store
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore redux-persist actions
          ignoredActions: [
            "persist/PERSIST",
            "persist/REHYDRATE",
            "persist/PAUSE",
            "persist/PURGE",
            "persist/FLUSH",
            "persist/REGISTER",
          ],
        },})
    //   }).concat(request.middleware),
  });
  
  // Setup listeners for RTK Query
  setupListeners(store.dispatch);
  
  // Type exports
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  // Persistor
  export const persistor = persistStore(store);
  