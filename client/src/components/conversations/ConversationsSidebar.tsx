import { TbEdit } from 'react-icons/tb'
import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarStyle,
  ConversationsSidebarItem
} from "../../utils/styles";
import { FC } from "react";
import { ConversationType } from "../../utils/types";
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";

type Props = {
  conversations: ConversationType[]
}

export const ConversationsSidebar: FC<Props> = ({ conversations }) => {
  const navigate = useNavigate()

  return <ConversationSidebarStyle>
    <ConversationSidebarHeader>
      <h1>Conversations</h1>
      <TbEdit size={40}/>
    </ConversationSidebarHeader>
    <ConversationSidebarContainer>
      {conversations.map((conversation) => (
        <ConversationsSidebarItem key={conversation.id} onClick={() => navigate(`/conversations/${conversation.id}`)}>
          <div className={styles.conversationAvatar}></div>
          <div>
            <span className={styles.conversationName}>{conversation.name}</span>
            <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
          </div>
        </ConversationsSidebarItem>))}
    </ConversationSidebarContainer>
  </ConversationSidebarStyle>
};

