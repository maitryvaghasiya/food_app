import auth from '@react-native-firebase/auth';
import * as ActionTypes from '../ActionTypes'

export const signupUser = (data) => (dispatch) => {
  console.log(data.mail, data.password);
  try {
    auth()
      .createUserWithEmailAndPassword(data.mail, data.password)
      .then(() => {
        auth()
          .onAuthStateChanged((user) => {
            user.sendEmailVerification()
              .then(dispatch({ type: ActionTypes.EMAIL_VERIFICATION, payload: { user, authMsg: "Please verify your email." } }))
          })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  } catch (e) {
    console.log(e);
  }
}

export const signinUser = (data) => (dispatch) => {
  try {
      auth()
        .signInWithEmailAndPassword(data.mail, data.password)
        .then((user) => {
          if (user.user.emailVerified) {
            dispatch({type: ActionTypes.LOGIN_SUCCESS, payload: {user: user.user, authMsg: "Login successfull."}})
          }
        })
        .catch((error) => {
          console.log(error);
        })
  } catch (error) {

  }
}