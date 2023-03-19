import React from 'react';
import "./scrollBottom.scss";

// importing icons
import { BiMouse as MouseIcon } from "react-icons/bi";
import { AiFillCaretDown as ArrowDownIcon } from "react-icons/ai";

const ScrollBottom = () => {
    const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  return (
    <>
        <div className="scroll_bottom" onClick={scrollToBottom}>
            <MouseIcon className='mouse_icon' />
            <ArrowDownIcon className='down_icon' />
        </div>
    </>
  )
}

export default ScrollBottom