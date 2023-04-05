import { TbEdit } from "react-icons/tb";
import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarStyle,
  ConversationsSidebarItem,
} from "../../utils/styles";
import { FC, useContext, useState } from "react";
import { ConversationType } from "../../utils/types";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { CreateConversationModal } from "../modals/CreateConversationModal";
import { AuthContext } from "../../utils/context/AuthContext";

type Props = {
  conversations: ConversationType[];
};

export const ConversationSidebar: FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const getDisplayPlayer = (conversation: ConversationType) => {
    return conversation.creator.id === user?.id
      ? conversation.recipient
      : conversation.creator;
  };

  return (
    <>
      {showModal && <CreateConversationModal setShowModal={setShowModal} />}
      <ConversationSidebarStyle>
        <ConversationSidebarHeader>
          <h1>Conversations</h1>
          <div onClick={() => setShowModal(!showModal)}>
            <TbEdit size={40} cursor="pointer" />
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
                <span className={styles.conversationName}>
                  {`${getDisplayPlayer(conversation).firstName} ${
                    getDisplayPlayer(conversation).lastName
                  }`}
                </span>
                <span className={styles.conversationLastMessage}>
                  Sample text
                </span>
              </div>
            </ConversationsSidebarItem>
          ))}
        </ConversationSidebarContainer>
      </ConversationSidebarStyle>
    </>
  );
};
