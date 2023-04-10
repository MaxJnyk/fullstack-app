import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  ConversationPanel,
  ConversationSidebar,
} from "../components/conversations";
import { Page } from "../utils/styles";
import { ConversationType } from "../utils/types";
import { fetchConversationsThunk } from "../helpers/fetchConversationsThunk";
import { useDispatch } from "react-redux";

export const ConversationPage = () => {
  const { id } = useParams();
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchConversationsThunk());
  }, [dispatch]);

  return (
    <Page>
      <ConversationSidebar conversations={conversations} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};
