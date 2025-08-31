import React from 'react'
import { useState } from 'react'
import "../style.css"
import { FaSearch } from 'react-icons/fa'
const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setbgColor] = useState('white');

    const handleClick = (e) => {
        setbgColor("#1a1a1a");
        if(e.target.className === "container") {
            setShowInput(false);
            setbgColor('#fff');
        }
    }
  return (
    <section
    className = "container"
    style={{backgroundColor: bgColor}}
    onClick={handleClick}>
        {
            showInput ? (
                <input type="text" placeholder="Search..."/> 
            ) : (
                <FaSearch onClick={() => setShowInput(true)} />
            )
        }
    </section>
  )
}

export default HiddenSearchBar