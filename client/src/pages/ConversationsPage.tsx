import { Page } from "../utils/styles";
import { ConversationPanel, ConversationsSidebar } from "../components/conversations";
import { Outlet, useParams } from "react-router-dom";
import mockConversations from '../_mocks_/conversations'

export const ConversationsPage = () => {
    const { id } = useParams()
    console.log(id)

    return <Page>
        <ConversationsSidebar conversations={mockConversations}/>
        {!id && <ConversationPanel />}
        <Outlet/>
    </Page>
};

