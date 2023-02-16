import React from 'react';
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from './index.module.scss'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CreateUserParams } from '../../utils/types';
import { postRegisterUser } from '../../utils/api';

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserParams>()
  console.log(errors)

  const onSubmit = async (data: CreateUserParams) => {
    console.log(data)
    try {
      await postRegisterUser(data)
    } catch (e) {
      console.log(e)
    }
  }

  return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <InputContainer>
      <InputLabel htmlFor='email'>Email</InputLabel>
      <InputField
        type='email'
        id='email'
        {...register('email', { required: 'Email is required' })}
      />
    </InputContainer>
    <section className={styles.nameField}>
      <InputContainer>
        <InputLabel htmlFor='firstname'>First Name</InputLabel>
        <InputField
          type='text'
          id='firstname'
          {...register('firstName', { required: 'First Name is Required' })}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor='lastname'>Last Name</InputLabel>
        <InputField
          type='text'
          id='lastname'
          {...register('lastName', { required: 'Last Name is Required' })}
        />
      </InputContainer>
    </section>
    <InputContainer>
      <InputLabel htmlFor='password'>Password</InputLabel>
      <InputField
        type='password'
        id='password'
        {...register('password', { required: 'Password is Required' })}
      />
    </InputContainer>
    <Button className={styles.button}>Create My Account</Button>
    <div className={styles.footerText}>
      <span>Already have an account? </span>
      <Link to='/login'> <span>Login</span></Link>
    </div>
  </form>
};

