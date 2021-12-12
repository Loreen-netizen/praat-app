
import React, { useEffect, useState} from 'react'
import Nickname from "./components/Nickname"
import MainChat from "./components/MainChat"
import {io} from "socket.io-client"

function App() {

  const socket= io("https://chat.peruzal.com"
  ,{autoConnect: false})

  useEffect(()=>{
    socket.connect()
      socket.on("connect", ()=>{
          // TODO set visible icon for connection status, are you connected or not
          console.log("connected")
      })
      socket.on("connect_error", (error)=>
      console.log(error, "errormessage")
      )
     
      socket.on("new message", (message)=> setNewMessage(message.message))
      socket.on("user joined", (userObject)=>  console.log(userObject, "userjoined")
      
      // displayMessage(userObject)
    )
    socket.on("login",(logInObject)=>setUsercount(logInObject.numUsers))
      socket.on("user left", (userLeft)=>  
      // displayMessage(userLeft)
       console.log(userLeft,"userLeft")
      )
      socket.on("typing", (typing)=> console.log("typing",typing))
      socket.on("stop typing", (stoptyping)=> console.log("stop typing",stoptyping))
      socket.on("disconnect",(message)=> console.log(message, "disconnected"))
      return ()=>{
        // unscubscribe and cleanupfunction
        // socket.off("typing")
        // socket.off("user joined")
        // socket.off("new message")
        // socket.off("connect")
        // socket.disconnect()
      }
     
  },[socket])

  const [isUserLoggedIn, setUserLoggedIn] = useState(false)
  const [userListMessages, setUserListMessages] = useState([])
  const [currentUser, setCurrentUser] = useState("")
  // const [userMessage, setUserMessage] = useState("")
  const [previousMessages, setPreviousMessages]= useState([])
  const [newMessage,setNewMessage] = useState("")
  const [userCount, setUsercount] = useState(0)
  const displayMessage = (message,)=>{
    // {username: 'mimi\', message: 'hi from mimi'} 
    console.log(message,"joined")

console.log(message.username, message.message, "fromdisplaymessage")
// setCurrentUser(message.username)
// setUserMessage(message.message)
setUserListMessages([...userListMessages, message])
setPreviousMessages([...previousMessages,message.message ])
  }

  const onNickNameSubmit = (nickaname)=>{
    // console.log(nickaname)
    socket.emit("add user", nickaname)
    setUserLoggedIn(true)
    setCurrentUser(nickaname)
    
  }

  const onMessageSend = (newMessage)=>{
    console.log(newMessage)
    // setNewMessage(newMessage)
    socket.emit("new message", newMessage)
  }
  return (
    <div className="App">
     {!isUserLoggedIn ?  <Nickname onNickNameSubmit={onNickNameSubmit}/> :  
      <MainChat currentUser={currentUser} userListMessages={userListMessages} isUserLoggedIn={isUserLoggedIn} newMessage={newMessage} onMessageSend={onMessageSend} userCount={userCount}/>}
     
    </div>
  );
}

export default App;
