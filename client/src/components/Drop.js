import React, { useState, useRef } from "react";
import { useClickOutside } from "./useClickOutside";
import "../styles/Drop.css";
import "../assets/images/genshin.jpg"
function Drop() {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
      if (isOpen) setTimeout(() => setOpen(false), 50);
    });
  
    return (

<div class="social-icon">
            <button className="menu-button" onClick={() => setOpen(!isOpen)}> 
               {/* <genshin.jpg/> */}
               ааа
            </button>

            {/* </div> */}
              <nav className={`menu ${isOpen ? "active" : ""}`} ref={menuRef}>
                  <ul className="menu__list">
                      <li className="menu__item">Профиль</li>
                      <li className="menu__item">Настройки</li>
                      <li className="menu__item">Выйти</li>
                  </ul>
              </nav>
      </div>
        );
            }
            
export default Drop;