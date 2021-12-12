import {useState} from "react"



const MainChat = ({currentUser,onMessageSend, newMessage,userCount,messageSender, joinedUser, leftUser, appInformation}) => {


console.log(appInformation,"appInformation")
    const [messageValue, setMessageValue] =  useState('')
const handleMessageSent=(e)=>{
   
   if( e.keyCode===13){ onMessageSend(e.target.value);
   
    setMessageValue("")
}
   
}

    return (


        <div>
            <h2>Hello {currentUser}, Welcome to Praat group chat! </h2>
            <ul>
            {appInformation.map(( data)=>{
                return(
                   
                       <div key={data}>
                            <li>{data !== "" ?  data : null} </li>   
                       </div>
                )
            }
  
 )} 
            </ul>
          
            {/* <li> {`${data.joinedUser} joined the chat`}</li> */}
{/* <div>from {userListMessages.username}: {userListMessages.message}</div> */}
           {/* <div style={{marginTop:"20px"}}><span>{ newMessage ? `new message ${newMessage} from ${messageSender}` : null}</span>
           
           </div> */}
           
            
 <div style={{display:"flex", flexDirection:"row", marginTop: "300px", justifyContent: "spaceAround"}}>

 <button style={{marginRight:"5px"}}>send</button>
 
 
 <input style={{width: "500px", height: "40px"
}} type="text" placeholder="type your message" onChange={(e)=> setMessageValue(e.target.value)} onKeyUp={(e)=> handleMessageSent(e)} value={messageValue}></input>
 
 </div>
         
 </div>
    )
}

export default MainChat
