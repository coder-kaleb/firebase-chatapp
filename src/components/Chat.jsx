import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import SendMessages from "./SendMessages";

const style = {
  main: `flex flex-col p-[10px]`,
};
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);

      return () => unsubscribe();
    });
  }, []);
  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessages scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
