import React, { useEffect } from "react";
// import { firestore } from "../../../firebase/firebase.utils";

function Chat() {
  // const [messages, setMessages] = useState("");

  useEffect(() => {
    // firestore
    //   .collection("messages")
    //   .orderBy("createdAt")
    //   .limit(50)
    //   .onSnapshot(() => {});
  }, []);
  return <div>Message</div>;
}

export default Chat;
