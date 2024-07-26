'use client';

import { useRouter } from 'next/navigation';

export default function HomeNavButton() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/');
    };

    return (
        <div onClick={handleNavigate} className="cursor-pointer flex items-center gap-[5px]">
            <i className='bx text-[16px] bx-home-alt' ></i>
            <h3 className="text-[16px] opacity-[0.6]">Главная</h3>
        </div>
    );
}