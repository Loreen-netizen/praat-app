import React from 'react'

const KEYCODE = 13
const Nickname = ({onNickNameSubmit}) => {

const handleInputChange = (e) =>{
    if(e.keyCode=== KEYCODE){
        onNickNameSubmit(e.target.value)
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
