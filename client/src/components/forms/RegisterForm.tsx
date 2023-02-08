import React from 'react';
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from './index.module.scss'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    console.log(errors)
    const onSubmit = (data: any) => {
        console.log(data)
    }

    return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <InputField
                type='email'
                id='email'
                {...register('email', {required: 'Email is required'})}
            />
        </InputContainer>
        <section className={styles.nameField}>
            <InputContainer>
                <InputLabel htmlFor='firstname'>First Name</InputLabel>
                <InputField
                    type='text'
                    id='firstname'
                    {...register('firstname', {required: 'First Name is Required'})}
                />
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor='lastname'>Last Name</InputLabel>
                <InputField
                    type='text'
                    id='lastname'
                    {...register('lastname', {required: 'Last Name is Required'})}
                />
            </InputContainer>
        </section>
        <InputContainer>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <InputField
                type='password'
                id='password'
                {...register('password', {required: 'Password is Required'})}
            />
        </InputContainer>
        <Button className={styles.button}>Create My Account</Button>
        <div className={styles.footerText}>
            <span>Already have an account? </span>
            <Link to='/login'> <span>Login</span></Link>
        </div>
    </form>
};

