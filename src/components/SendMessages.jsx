import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, colRef } from "../firebase";

const SendMessages = ({ scroll }) => {
  const [input, setInput] = useState("");

  const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    scroll.current.scrollIntoView();
    let { uid, displayName } = auth.currentUser;

    let nickName = displayName.split(" ")[0];

    if (!input) {
      alert("Please enter a message");
      return;
    }
    await addDoc(colRef, {
      text: input,
      name: nickName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Messages"
        className={style.input}
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessages;
