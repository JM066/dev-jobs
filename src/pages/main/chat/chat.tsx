import React, { useEffect } from "react";
import { firestore } from "../../../firebase/firebase.utils";

function Chat() {
  // const [messages, setMessages] = useState<string[]>();

  useEffect(() => {
    // const messageData: any[] = [];
    firestore.collection("messages").onSnapshot((snapshot) => {
      console.log("snapshot", snapshot);
      snapshot.docs.map((doc) => console.log("message", doc.data()));
      console.log("message??");
      // setMessages(messageData);
    });
  }, []);
  return <div>Message</div>;
}

export default Chat;
