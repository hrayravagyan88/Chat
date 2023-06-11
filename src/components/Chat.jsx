import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Context } from "../main";
import { useContext } from "react";
import { Container, Grid, Button, TextField, Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  serverTimestamp,
  orderBy,
  getDocs,
} from "firebase/firestore";

const Chat = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const { db } = useContext(Context);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const getData = async () => {
    const q = await query(collection(db, "Messages"), orderBy("timestamp"));

    const res = await getDocs(q);
    
    const newData = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setMessages(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  const sendMessage = async () => {
    try {
      await addDoc(collection(db, "Messages"), {
        id: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        text: value,
        timestamp: serverTimestamp(),
      });

      getData();
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setValue("");
  };

  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 50,
          marginTop: "5px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid grey",
            overflowY: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                margin: "10px",
                border:
                  message.displayName === user.displayName
                    ? "2px solid green"
                    : "2px solid red",
                marginLeft:
                  message.displayName === user.displayName ? "auto" : "10px",
                width: "fit-content",
                padding: "10px",
              }}
            >
              <Grid container>
                <Avatar src={message.photoUrl} />
                <div>{message.displayName}</div>
              </Grid>
              {message.text}
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            maxRows={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
