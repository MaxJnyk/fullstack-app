import React from 'react';
import { ConversationChannelPageStyle } from "../utils/styles";
import { useParams, useSearchParams } from "react-router-dom";

export const ConversationChannelPage = () => {
    console.log(useParams())

    return <ConversationChannelPageStyle>
        Channel Page
    </ConversationChannelPageStyle>
};

