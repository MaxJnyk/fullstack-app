import React from 'react';
import { RegisterForm } from "../components/forms";
import { Page } from "../utils/styles";

export const RegisterPage = () => {
    return <Page display='flex' alignItems='center' justifyContent='center'>
        <RegisterForm/>
    </Page>
};
