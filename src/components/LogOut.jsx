import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const LogOut = () => {
  return (
    <button
      className={style.button}
      onClick={() => {
        signOut(auth).then(() => {
          console.log("user signed out");
        });
      }}
    >
      LogOut
    </button>
  );
};

export default LogOut;
