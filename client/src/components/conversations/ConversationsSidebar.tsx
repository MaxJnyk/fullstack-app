import { TbEdit } from 'react-icons/tb'
import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarStyle,
  ConversationsSidebarItem
} from "../../utils/styles";
import { FC, useState } from "react";
import { ConversationType } from "../../utils/types";
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";
import { CreateConversationModal } from '../modals/CreateConversationModal';

type Props = {
  conversations: ConversationType[]
}

export const ConversationsSidebar: FC<Props> = ({ conversations }) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)


  return <>
    {showModal &&  <CreateConversationModal setShowModal={setShowModal} />}
    <ConversationSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <div onClick={() => setShowModal(!showModal)}>
          <TbEdit size={40} cursor='pointer'/>
        </div>
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationsSidebarItem
            key={conversation.id}
            onClick={() => navigate(`/conversations/${conversation.id}`)}
          >
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>{conversation.name}</span>
              <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
            </div>
          </ConversationsSidebarItem>))}
      </ConversationSidebarContainer>
    </ConversationSidebarStyle>
  </>
};

