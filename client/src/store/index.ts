import { configureStore } from "@reduxjs/toolkit";
import { conversationsSlice } from "./conversationSlice";

export const store = configureStore({
  reducer: {
    conversations: conversationsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
