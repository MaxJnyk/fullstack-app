import React, { FC, useState } from "react";
import { MessagePanelBody, MessagePanelStyle } from "../../utils/styles";
import { MessageType } from "../../utils/types";
import {
  MessageContainer,
  MessagePanelHeader,
  MessageInputField,
} from "./index";
import { useParams } from "react-router-dom";
import { posNewtMessage } from "../../utils/api";

type Props = {
  messages: MessageType[];
};

export const MessagePanel: FC<Props> = ({ messages }) => {
  const [content, setContent] = useState("");
  const { id } = useParams();

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id);
    console.log("Sending Message", content);
    if (!id || !content) return;
    const conversationId = parseInt(id!);
    try {
      await posNewtMessage({
        conversationId,
        content,
      });
      setContent("");
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <>
      <MessagePanelStyle>
        <MessagePanelHeader />
        <MessagePanelBody>
          <MessageContainer messages={messages} />
          <MessageInputField
            content={content}
            setContent={setContent}
            sendMessage={sendMessage}
          />
        </MessagePanelBody>
      </MessagePanelStyle>
    </>
  );
};
