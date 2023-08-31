"use client"; // 標記為客戶端組件

import React, { useState } from 'react';

const HamburgerButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    //漢堡按鈕
    <button className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={toggleButton}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>

      {/* Menu */}
      {isMenuOpen && (
        <nav className="navigation">
          <ul className="menu>">
            <li className='flex flex-col'>
              <a href="/navbar" className='hover:underline my-1'>心電圖選單</a>
              {/* <a href="/menu" className='hover:underline my-1'>心電圖輸入</a> */}
              {/* <a href="/historydata" className='hover:underline my-1'>歷史資料</a> */}
              <a href="/checkinfo" className='hover:underline my-1'>基本資料</a>
              {/* <a href="#" className='hover:underline my-1'>訂閱項目</a> */}
              <a href="/logout" className='hover:underline my-1'>確定登出</a>
            </li>
          </ul>
        </nav>
      )}

      <style jsx>{`
        .hamburger {
          display: inline-block;
          cursor: pointer;
          background-color: transparent;
          border: none;
          padding: 0;
          width:3rem;
          height:4vh;
        }

        .hamburger:hover  {
          background-color: #555; 
          width:3rem;
          border-radius: 5px;
          height:4vh;
        }

        .bar {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px auto;
          background-color: #333;
          transition: all 0.3s ease-in-out;
          background-color: white;
        }

        .is-active .bar:nth-child(2) {
          opacity: 0;
        }

        .is-active .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .is-active .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        // 改漢堡按鈕的選單位置
        // menu
        .navigation {
          position: absolute;
          top: 5.3rem;
          right: 14rem;
          padding: 20px;
          
          border-radius: 5px;
        /* 玻璃擬態/毛玻璃 */
        background-color: rgba(255, 255, 255, 0.2);
        /* 背景模糊 一定要搭配背景半透明 */
        backdrop-filter: blur(3px);
        /* 修改input邊框的預設樣式 */
        border: 2px solid rgba(255, 255, 255, 0.1);
        /* 玻璃陰影+玻璃黑的陰影 */
        box-shadow: inset -1px -1px -1px rgba(255, 255, 255, 0.3), 2px 2px 5px 2px rgba(0, 0, 0, 0.15);
        /* background-color: rgba(0, 0, 0, 0.3); */

        
        }
      }

      `}</style>
    </button>
  );
};

export default HamburgerButton;
