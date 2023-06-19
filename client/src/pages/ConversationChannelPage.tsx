import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MessagePanel } from "../components/messages/MessagePanel";
import { getConversationMessages } from "../utils/api";
import { AuthContext } from "../utils/context/AuthContext";
import { SocketContext } from "../utils/context/SocketContext";
import { ConversationChannelPageStyle } from "../utils/styles";
import {
  ConversationType,
  MessageEventPayload,
  MessageType,
} from "../utils/types";
import { AppDispatch, RootState } from "../store";
import { addMessage, fetchMessagesThunk } from "../store/messageSlice";
import {
  addConversation,
  updateConversation,
} from "../store/conversationSlice";

export const ConversationChannelPage = () => {
  const { user } = useContext(AuthContext);
  const socket = useContext(SocketContext);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const conversationId = parseInt(id!);
    dispatch(fetchMessagesThunk(conversationId));
  }, [id]);

  useEffect(() => {
    socket.emit("onClientConnect", {
      conversationId: parseInt(id!),
    });
    socket.on("connected", (data) => {
      console.log("Connected to WebSocket");
      console.log(data);
    });
    socket.on("onMessage", (payload: MessageEventPayload) => {
      console.log("Message Received");
      const { conversation, message } = payload;
      console.log(conversation, message);
      dispatch(addMessage(payload));
      dispatch(updateConversation(conversation));
    });
    socket.on("onConversation", (payload: ConversationType) => {
      console.log("Received onConversation Event");
      console.log(payload);
      dispatch(addConversation(payload));
    });
    return () => {
      socket.off("connected");
      socket.off("onMessage");
      socket.off("onConversation");
    };
  }, [id]);

  const sendTypingStatus = () => {
    console.log("You are typing");
    socket.emit("onUserTyping", { conversationId: id });
  };

  return (
    <ConversationChannelPageStyle>
      <MessagePanel sendTypingStatus={sendTypingStatus}></MessagePanel>
    </ConversationChannelPageStyle>
  );
};
