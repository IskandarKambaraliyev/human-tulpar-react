import { useContext } from 'react';
import { HiOutlineArrowSmUp as TopIcon } from "react-icons/hi";
import "./toTop.scss";

import { LanguageContext } from '../../../containers/Language';

const ToTop = () => {
  const { dictionary } = useContext(LanguageContext);

    const top = () => {
        window.scrollTo(0, 0);
    }
  return (
    <button  className='top_button' onClick={top}>
        <div className="icon_div">
            <TopIcon className='icon' />
        </div>
        <span>{dictionary.footer.top.toTop}</span>
    </button>
  )
}

export default ToTop