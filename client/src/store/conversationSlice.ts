import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConversationType } from "../utils/types";
import { fetchConversationsThunk } from "../helpers/fetchConversationsThunk";

interface ConversationsState {
  conversations: Map<number, ConversationType>;
}

const initialState: ConversationsState = {
  conversations: new Map(),
};

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addConversation: (state, action: PayloadAction<ConversationType | any>) => {
      console.log("addConversation");
      /*state.conversations.push(action.payload);*/
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConversationsThunk.fulfilled, (state, action) => {
      action.payload.data.forEach((conversation) => {
        console.log(conversation);
        state.conversations.set(conversation.id, conversation);
      });
      console.log(state.conversations);
    });
  },
});

export const { addConversation } = conversationsSlice.actions;

export default conversationsSlice.reducer;
