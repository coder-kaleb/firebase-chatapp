import Navbar from "./components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Chat from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);
  // console.log(user);
  const style = {
    appContainer: `max-w-[728px] mx-auto  text-center relative`,
    sectionContainer: ` h-[90vh] bg-gray-100 mt-10 shadow-xl border `,
  };
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />

        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
