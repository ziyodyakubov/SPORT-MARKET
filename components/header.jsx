import Image from "next/image"
import {Logo,Katalog,Add} from "@/svg"

const Index = () => {
  return (
    <header className="flex flex-col">
       <div className="pt-[10px] pb-[13px] bg-[#1F1D14]">
        <nav className="container flex items-center justify-between">
          <div className="left flex items-center gap-[30px]">
            <div className="flex gap-[11px] cursor-pointer">
            <Image src={Logo} alt="logo"/>
            <div className="flex flex-col text-[24px] text-[#Fff] font-[600] leading-[28px]">
              <h2>Sport</h2>
              <h2>Market</h2>
            </div>
            </div>
          
          <ul className="flex items-center gap-[30px]">
            <li className="text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] cursor-pointer">Продукты</li>
            <li className="text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] cursor-pointer">Контакты</li>
            <li className="text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] cursor-pointer">Оплата и Доставка</li>
            <li className="text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] cursor-pointer">Новости</li>
            <li className="text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] cursor-pointer">О нас</li>
          </ul>
          </div>
          <ul className="right flex items-center gap-[30px]">
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

       <div className="container py-[15px] bg-[#Fff]">
          <ul className="flex items-center justify-between">
            <li className="flex items-center gap-[10px]">
              <button className="flex items-center gap-[10px] hover:bg-[#1f1d14df] transition-all duration-300 active:bg-[#1F1D14] rounded-[5px] text-[20px] text-[#Fff] bg-[#1F1D14] px-[40px] py-[15px]"><Image src={Katalog} alt="katalog" />Каталог</button>

              <div className="flex items-center gap-[80px] bg-[#F2F2F2] py-[17px] px-[20px] rounded-[5px]">
                  <input type="text" placeholder="Поиск" className="outline-none w-[360px] bg-[#F2F2F2]" />
                  <i class='bx cursor-pointer bx-search'></i>
              </div>  
            </li>

            <li className="flex items-center gap-[13px]">
              <div className="p-[13px] hover:bg-[#CCCCCC] active:bg-[#F2F2F2] transition-all duration-300 bg-[#F2F2F2] rounded-[3px] cursor-pointer">
                <i class='text-[20px] bx bx-user' ></i>
              </div>

              <div className="mr-[12px] p-[13px] hover:bg-[#CCCCCC] active:bg-[#F2F2F2] transition-all duration-300  bg-[#F2F2F2] rounded-[3px] cursor-pointer">
                <i class='bx text-[20px] bx-heart' ></i>
              </div>

              <div className="px-[30px] py-[15px] hover:bg-[#CCCCCC] active:bg-[#F2F2F2] transition-all duration-300  rounded-[5px] bg-[#F2F2F2] cursor-pointer">
                <button className="flex items-center gap-[10px]"><Image src={Add} alt="korzinka"/>Корзина</button>
              </div>
            </li>
          </ul>
       </div>
    </header>
  )
}

export default Index
