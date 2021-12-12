import React, {useState, useEffect} from 'react'
import {io} from "socket.io-client"

const KEYCODE = 13




const Nickname = () => {
    const socket= io("https://chat.peruzal.com")

    useEffect(()=>{
        socket.on("connect", ()=>{
            // TODO set visible icon for connection status, are you connected or not
            console.log(socket.id)
        })
        socket.on("connect_error", (error)=>
        console.log(error)
        )
       
    },[socket])

    const [value, setValue] = useState("")
console.log(value)

const handleInputChange = (e) =>{
    if(e.keyCode=== KEYCODE){
        socket.emit("add user", e.target.value)
    }
}

    return (
      <>
      <label>Enter Your Nickname</label>
       <input autoFocus id="nickNameInput" type="text" placeholder="What's you nickname" onKeyUp={(e)=> handleInputChange(e)}></input>
      </>
    )
}

export default Nickname
