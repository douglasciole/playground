import React, { Component, useState, useRef, useEffect } from 'react';
import BackButton from '../BackButton';
import './chat.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useCollectionData } from 'react-firebase-hooks/firestore';

var firebaseConfig = { /* Firebase config iformations */};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn() {
    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return(
        <h1>
            <button className="button" onClick={signIn}>Login with Google</button>
        </h1>
    )
}

function SignOut() {
    const signOut = () => {
        auth.signOut();
    }

    return(
        <button className="button" onClick={signOut}>Login out</button>
    )
}

function ChatRoom() {
    const dummy = useRef();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    const sendMessage = async(e) => {
        e.preventDefault();

        if (formValue.trim() !== "") {
            const {uid, photoURL} = auth.currentUser;

            await messagesRef.add({
                text: formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL
            });
        }

        setFormValue('');
    }

    return (<>
        <header>
            <h1>React Chat <SignOut /></h1>    
        </header>

        <main className="messageDisplay">    
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <span ref={dummy}></span>
        </main>

        <footer className="chatFooter">
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message" />
                <button onClick={sendMessage}>Send</button>
            </form>
        </footer>
    </>)
}



function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>
        </div>
    </>)
}


function Chat() {
    const [user] = useAuthState(auth);
  
    return (
        <>
            <BackButton />

            <div className="App">
                <section className="chatContainer">
                    {user ? <ChatRoom /> : <SignIn />}
                </section>
            </div>
        </>
    );
  }


export default Chat;