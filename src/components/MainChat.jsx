import {useState} from "react"



const MainChat = ({currentUser, userMessage, userListMessages,isUserJoined,onMessageSend, newMessage}) => {

    const [messageValue, setMessageValue] =  useState('')
const handleMessageSent=(e)=>{
   
   if( e.keyCode===13){ onMessageSend(e.target.value);
   
    setMessageValue("")
}
   console.log(e.target.value)
   
}

    return (


        <div>
            <ul>
            {userListMessages.map(( user)=>
<li>
    {(isUserJoined) ?  `${currentUser} joined the chat` :  `${currentUser} left the chat`}</li>
)}
            </ul>
           <span>{userListMessages.length} participants</span>

{/* <div>from {userListMessages.username}: {userListMessages.message}</div> */}
           <div style={{marginTop:"20px"}}><span>{ userMessage ? `new message ${userMessage} from ${currentUser}` : null}</span>
           
           </div>
           <div style={{marginTop:"20px"}}><span>{ newMessage ? `new message ${newMessage} from ${currentUser}` : null}</span>
           
           </div>
            
 <div style={{display:"flex", flexDirection:"row", marginTop: "300px", justifyContent: "spaceAround"}}>

 <button style={{marginRight:"5px"}}>send</button>
 
 
 <input style={{width: "500px", height: "40px"
}} type="text" placeholder="type your message" onChange={(e)=> setMessageValue(e.target.value)} onKeyUp={(e)=> handleMessageSent(e)} value={messageValue}></input>
 
 </div>
         
 </div>
    )
}

export default MainChat
