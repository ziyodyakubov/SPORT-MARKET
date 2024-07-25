'use client';

import { useRouter } from 'next/navigation';

export default function NavigateButton() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/info');
  };

  return (
    <button
      onClick={handleNavigate}
      className="py-[15px] px-[250px] bg-[#fff] hover:bg-[#ffffff70] transition-all duration-200 active:bg-[#Fff] rounded-[5px]"
    >
      Посмотрет все
    </button>
  );
}
