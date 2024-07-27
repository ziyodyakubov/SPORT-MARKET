'use client';

import { useRouter } from 'next/navigation';

export default function HomeNavButton() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/');
    };

    const handleNavigate2 = () => {
        router.push('/product')
    }

    return (
     <div className="flex items-center gap-[11px]">
         <div onClick={handleNavigate} className="cursor-pointer flex items-center gap-[5px]">
            <i className='bx text-[16px] bx-home-alt' ></i>
            <h3 className="text-[16px] opacity-[0.6]">Главная</h3>
        </div>

        <div onClick={handleNavigate2} className='cursor-pointer flex items-center gap-[5px]'>
            <i className="bx text-[20px] text-[#000] opacity-[0.6] bx-chevron-right"></i>
            <h3 className="text-[16px] opacity-[0.6]">Продукты</h3>
        </div>
     </div>
    );
}