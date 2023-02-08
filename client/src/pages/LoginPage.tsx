import React from 'react';
import { Page } from "../utils/styles";
import { LoginForm } from "../components/forms";

export const LoginPage = () => {
    return <Page display='flex' alignItems='center' justifyContent='center'>
        <LoginForm />
    </Page>
};

