import React, {useState} from 'react'

const KEYCODE = 13

const Nickname = () => {
    const [value, setValue] = useState("")
console.log(value)

const handleInputChange = (e) =>{
    if(e.keyCode=== KEYCODE){
        setValue(e.target.value)
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
