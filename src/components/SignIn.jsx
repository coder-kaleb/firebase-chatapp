import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
const style = {
  wrapper: `flex justify-center`,
};

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={signInWithGoogle} />
    </div>
  );
};

export default SignIn;
