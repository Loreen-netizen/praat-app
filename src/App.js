
import React, { useEffect, useState} from 'react'
import Nickname from "./components/Nickname"
import MainChat from "./components/MainChat"
import {io} from "socket.io-client"

function App() {

  const socket= io("https://chat.peruzal.com")

  useEffect(()=>{
      socket.on("connect", ()=>{
          // TODO set visible icon for connection status, are you connected or not
          console.log(socket.id)
      })
      socket.on("connect_error", (error)=>
      console.log(error)
      )
      socket.on("disconnect",(message)=> console.log(message))
      socket.on("new message", (message)=> 
      displayMessage(message)
      )
      socket.on("user joined", (userName)=>  displayMessage(userName))
      socket.on("user left", (userLeft)=>  displayMessage(userLeft))
      socket.on("typing", (typing)=> console.log("typing",typing))
      socket.on("stop typing", (stoptyping)=> console.log("stop typing",stoptyping))

      return ()=>{
        // unscubscribe and cleanupfunction
        // socket.off("user joined")
        // socket.off("new message")
        // socket.off("connect")
        // socket.disconnect()
      }
     
  },[socket])

  const [isUserJoined, setUserJoined] = useState(false)
  const [userListMessages, setUserListMessages] = useState([])
  const [currentUser, setCurrentUser] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [previousMessages, setPreviousMessages]= useState([])
  const [newMessage,setNewMessage] = useState("")
  const displayMessage = (message,)=>{
    // {username: 'mimi\', message: 'hi from mimi'} 
console.log(message.username, message.message, "fromdisplaymessage")
setCurrentUser(message.username)
setUserMessage(message.message)
setUserListMessages([...userListMessages, message])
setPreviousMessages([...previousMessages,message.message ])
  }

  const onNickNameSubmit = (nickaname)=>{
    console.log(nickaname)
    socket.emit("add user", nickaname)
    setUserJoined(true)
  }

  const onMessageSend = (newMessage)=>{
    console.log(newMessage)
    setNewMessage(newMessage)
  }
  return (
    <div className="App">
     {!isUserJoined ?  <Nickname onNickNameSubmit={onNickNameSubmit}/> :  
      <MainChat currentUser={currentUser} userMessage={userMessage} userListMessages={userListMessages} isUserJoined={isUserJoined} newMessage={newMessage} onMessageSend={onMessageSend}/>}
     
    </div>
  );
}

export default App;
