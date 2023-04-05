import { Outlet, useParams } from "react-router-dom";
import {
  ConversationPanel,
  ConversationSidebar,
} from "../components/conversations";
import { Page } from "../utils/styles";
import { useEffect, useState } from "react";
import { getConversations } from "../utils/api";
import { ConversationType } from "../utils/types";

export const ConversationPage = () => {
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getConversations()
      .then(({ data }) => {
        setConversations(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Page>
      <ConversationSidebar conversations={conversations} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};
