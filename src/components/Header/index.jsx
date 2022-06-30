import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth, selectUser } from '../../redux/slices/auth';
import { Typography } from '@mui/material';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const onClickLogout = () => {
    if(window.confirm('Rostdan chiqishni xoxlaysizmi ?')){
      dispatch(logout())
      window.localStorage.removeItem('token')
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>Growth Market Fit</div>
          </Link>
          
          <div className={styles.buttons}>
            {isAuth ? (
              <div className={styles.actions}>
                <Link className={styles.playbooklink} to="/playbook">
            <div>Playbook</div>
          </Link>
                <Link to="/add-post">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Typography style={{marginLeft: 10}} className={styles.logo}> {user.fullName} </Typography>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </div>
            ) : (
              <div className={styles.actions}>
                <Link className={styles.playbooklink} to="/playbook">
                  <div>Playbook</div>
                </Link>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
