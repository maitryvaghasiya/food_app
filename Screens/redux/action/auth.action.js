import auth from '@react-native-firebase/auth';
import * as ActionTypes from '../ActionTypes'
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export const signupUser = (data) => (dispatch) => {
  console.log(data.email, data.password,data.name);
  try {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password ,data.name)
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

export const LoginUser = (data) => (dispatch) => {
  try {
      auth()
        .signInWithEmailAndPassword(data.email, data.password)
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




export const googleLogin = () => async (dispatch) =>  {
  console.log("xxxxxxxx");
  try {
    const { idToken } = await GoogleSignin.signIn();

    console.log("idTokennnnnnnnnnnnnn", idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    console.log(googleCredential);
    // Sign-in the user with the credential
    //return auth().signInWithCredential(googleCredential);
  } catch (error) {

  }
  // dispatch({type: ActionTypes.LOGIN_SUCCESS})
}