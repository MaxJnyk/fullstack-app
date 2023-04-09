import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConversationType } from "../utils/types";

interface ConversationsState {
  conversations: ConnectionType[];
}

const initialState: ConversationsState = {
  conversations: [],
};

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addConversation: (state, action: PayloadAction<ConversationType>) => {
      console.log("addConversation");
      // @ts-ignore
      state.conversations.push(action.payload);
    },
  },
});

export const { addConversation } = conversationsSlice.actions;

export default conversationsSlice.reducer;
