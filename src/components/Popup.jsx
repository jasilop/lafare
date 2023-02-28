import React, { useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
const Popup = () => {
  // const[popup, setPopup]=useState(false);

  const hidePopup = () => {
    document.getElementById("popupmain").style.display = "none"
  }
  return (
    <div className="popupmain" id="popupmain">
      <div className="popup">
        <div className=" close"> <MdOutlineClose onClick={() => hidePopup()} style={{ cursor: 'pointer' }} /></div>
        <div className="phoneicon"><h4 className="phone1 india" >INDIA</h4> <span></span></div>
        <div className="phoneicon"><MdPhoneInTalk className="phone1" /> <span></span></div>
        <div className="phoneno"> +91 96568 88796<span></span> +91 97460 50774</div>
        <div className="gmailicon"><HiMail /></div>
        <div className="gmail">info@lafareinternational.com</div>
        <div className="locationicon"><TiLocation /></div>
        <div className="address"> 68/1520, 2nd Floor, CM Mathew Brothers Arcade,
          Near Westway hotel, <br />Chakkorathukulam
          Calicut – 673006
        </div>
        <div className="phoneicon"><h4 className="phone1 india united" >UNITED KINGDOM</h4> <span></span></div>
        <div className="phoneicon"><MdPhoneInTalk className="phone1" /> <span></span></div>
        <div className="phoneno"> +44 (0)7405 412543<span></span> +44 (0)7466 479963</div>
        <div className="gmailicon"><HiMail /></div>
        <div className="gmail">info@lafareinternational.com</div>
        <div className="locationicon"><TiLocation /></div>
        <div className="address"> 97 , West street
          Harrow
          HA13EL<br />
          London
          United Kingdom

        </div>

      </div>

    </div>
  );
};

export default Popup;
