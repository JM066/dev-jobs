import React, { useEffect } from "react";
import { firestore } from "../../../firebase/firebase.utils";

function Chat() {
  useEffect(() => {
    firestore.collection("messages").onSnapshot((snapshot) => {
      console.log("snapshot", snapshot);
      snapshot.docs.map((doc) => console.log("message", doc.data()));
      console.log("message??");
    });
  }, []);
  return <div>Message</div>;
}

export default Chat;
