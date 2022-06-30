import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

export const AdminLogin = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all"
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values))
    console.log(data);
    if(!data.payload){
      return alert('Avtorizatsiya qilaolmadingiz!!!')
    }


    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token);
    } 

  };

  if(isAuth){
    return <Navigate to="/" />
  }

  console.log('isauth', isAuth);

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт Adminku
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
        type="email"
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", { required: "Pochtangizni ko`rsating" })}
          fullWidth
        />
        <TextField
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", { required: "Parolingiz ko`rsating" })}
          className={styles.field}
          label="Пароль"
          fullWidth
        />
      
      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        Войти
      </Button>
      </form>
    </Paper>
  );
};
