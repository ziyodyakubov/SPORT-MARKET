'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Logo, Katalog, Add } from "@/public/assets/images/svg";
import Link from "next/link";
import { Button } from '@mui/material';
import CustomModal from './modal/index';

const Index = ({ favoriteCount }) => {
  const router = useRouter();
  const [navVisible, setNavVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNav = () => {
    router.push("/korzina");
  };

  const responsiveNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <>
     <CustomModal open={open} handleClose={handleClose} title="Example Modal"></CustomModal>
      <header className="flex flex-col">
        <div className="pt-[10px] sm:p-[15px] pb-[13px] bg-[#1F1D14]">
          <nav className="container flex items-center justify-between">
            <div className="left flex items-center gap-[30px] sm:gap-[190px]">
              <a href="/" className="flex gap-[11px] cursor-pointer">
                <Image className='sm:w-[50px]' src={Logo} alt="logo" />
                <div className="flex flex-col text-[24px] sm:text-[20px] text-[#fff] font-[600] leading-[28px]">
                  <h2>Sport</h2>
                  <h2>Market</h2>
                </div>
              </a>
              <i onClick={responsiveNav} className='bx bx-menu sm:text-[30px] sm:block sm:text-[#fff] cursor-pointer'></i>
              <ul className="flex sm:hidden items-center gap-[30px]">
                <li><Link href="/product" className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">Продукты</Link></li>
                <li><Link href="#footer" className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">Контакты</Link></li>
                <li><Link href="/payment" className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">Оплата и Доставка</Link></li>
                <li><Link href="#news" className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">Новости</Link></li>
                <li><Link href="/about" className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">О нас</Link></li>
              </ul>
            </div>
            <ul className="right sm:hidden flex items-center gap-[30px]">
              <li className="flex items-center gap-[5px] text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] cursor-pointer">
                <i className='bx bx-phone'></i>
                <h2><span className="text-[12px]">+998 (90) </span>565-85-85</h2>
              </li>
              <li className="flex items-center gap-[5px] text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] cursor-pointer">
                <i className='bx bx-envelope' ></i>
                <h2>info@gmail.com</h2>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container sm:p-[15px] py-[15px] bg-[#fff]">
          <ul className="flex items-center justify-between">
            <li className="flex items-center sm:gap-[10px] gap-[10px]">
              <button className="flex items-center sm:gap-[5px] gap-[10px] hover:bg-[#1f1d14df] transition-all duration-300 active:bg-[#1F1D14] rounded-[5px] sm:text-[14px] text-[20px] text-[#fff] bg-[#1F1D14] sm:px-[20px] sm:py-[10px] px-[40px] py-[15px]">
                <Image className='sm:w-[10px]' src={Katalog} alt="katalog" />Каталог
              </button>
              <div className="flex items-center gap-[80px] sm:gap-[20px] sm:hidden bg-[#F2F2F2] py-[17px] px-[20px] rounded-[5px]">
                <input type="text" placeholder="Поиск" className="outline-none w-[360px] bg-[#F2F2F2]" />
                <i className='bx cursor-pointer bx-search'></i>
              </div>
              <div className="hidden sm:inline-block sm:p-[8px] rounded-[3px] cursor-pointer">
                <i className='bx sm:flex hidden cursor-pointer bx-search'></i>
              </div>
            </li>
            <li className="flex items-center sm:gap-[7px] gap-[13px]">
              <div onClick={handleOpen} className="p-[13px] sm:p-[8px] hover:bg-[#CCCCCC] active:bg-[#F2F2F2] transition-all duration-300 bg-[#F2F2F2] rounded-[3px] cursor-pointer">
                <i className='text-[20px] sm:text-[16px] bx bx-user'></i>
              </div>
              <div className="p-[13px] sm:p-[8px] hover:bg-[#CCCCCC] active:bg-[#F2F2F2] transition-all duration-300 bg-[#F2F2F2] rounded-[3px] cursor-pointer">
                <i className='bx text-[20px] sm:text-[16px] bx-heart'></i>
              </div>
              <button onClick={handleNav} className="px-[30px] sm:py-[8px] sm:hidden sm:px-[20px] h-[45px] py-[25px] hover:bg-[#CCCCCC] active:bg-[#F2F2F2] transition-all duration-300 rounded-[5px] bg-[#F2F2F2] cursor-pointer flex items-center gap-[10px]">
                <Image src={Add} alt="korzinka" />Корзина
              </button>
              <div className="sm:py-[10px] sm:px-[20px] hidden sm:hover:bg-[#CCCCCC] sm:active:bg-[#F2F2F2] sm:transition-all sm:duration-300 sm:rounded-[5px] sm:bg-[#F2F2F2] sm:cursor-pointer sm:inline-block" onClick={handleNav}>
                <Image src={Add} alt="korzinka" />
              </div>
            </li>
          </ul>
        </div>
      </header>

      <div className={`pb-[13px] pt-[20px] rounded-[5px] z-20 w-[200px] bg-[#1F1D14] flex-col ${navVisible ? 'flex' : 'hidden'} sm:absolute top-[90px] right-[5px] items-center gap-[30px]`}>
        <div><Link href="/product" className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">Продукты</Link></div>
        <div className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">Контакты</div>
        <div><Link href="/payment" className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">Оплата и Доставка</Link></div>
        <div className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">Новости</div>
        <div><Link href="/about" className="text-[#FFFFFF] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer">О нас</Link></div>
      </div>
    </>
  );
};

export default Index;
