import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessagePanel } from "../components/messages";
import { getConversationMessages } from "../utils/api";
import { AuthContext, SocketContext } from "../utils/context";
import { ConversationChannelPageStyle } from "../utils/styles";
import { MessageEventPayload, MessageType } from "../utils/types";

export const ConversationChannelPage = () => {
  const { user } = useContext(AuthContext);
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const conversationId = parseInt(id!);
    getConversationMessages(conversationId)
      .then(({ data }) => {
        setMessages(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    socket.on("connected", () => console.log("Message Received"));
    socket.on("onMessage", (payload: MessageEventPayload) => {
      const { conversation, ...message } = payload;
      // @ts-ignore
      setMessages((prev) => [message, ...prev]);
    });

    return () => {
      socket.off("connected");
      socket.off("onMessage");
    };
  }, [socket]);

  return (
    <ConversationChannelPageStyle>
      <MessagePanel messages={messages}></MessagePanel>
    </ConversationChannelPageStyle>
  );
};
