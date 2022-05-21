import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
    console.log('Logowanie udane');
  } catch (error) {
    console.log('Nieudane logowanie. Spróbuj ponownie');
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
    console.log('Rejestracja udane');
  } catch (error) {
    console.log('Nieudana rejestracja. Spróbuj ponownie');
    console.log(error);
  }
};
