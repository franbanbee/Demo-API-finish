import React from 'react';
import Link from 'next/link'
import HamburgerButton from './HamburgerButton';

const Topbar = () => {
    return <div className="h-[8vh] w-full text-slate-300 bg-slate-500 flex justify-around items-center p-3 mx-2">
        {/* logo */}
        <Link href='/'><h2>ailab | ndmc tsgh</h2></Link>

        <div className="w-4/5 bg-slate-500 flex justify-between items-center mx-2 ">
            {/* 日期時間要運作 */}
            <h5>2023/08/01 12:00:00</h5>

            <div className='flex flex-col justify-start items-start'>
                {/* 登入帳號 */}
                <div className='flex mx-2'>
                    <h4>登入帳號：</h4>
                    <h4>ndmctsgh</h4>
                </div>

                {/* 儀器序號 */}
                <div className='flex mx-2'>
                    <h4>機器序號：</h4>
                    <h4>123456789012</h4>
                </div>
            </div>

        </div>
        {/* 漢堡按鈕 */}
        <div className=''>
                <HamburgerButton />
            </div>
    </div>;

};

export default Topbar;