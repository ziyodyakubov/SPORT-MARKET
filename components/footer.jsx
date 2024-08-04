import Image from "next/image"
import {Logo,Insta,Telegram,Facebook} from "@/public/assets/images/svg"

const Index = () => {
  return (
    <footer id="footer">
      <div className="bg-[#FBD029] w-full h-[24px]"></div>
      <div className="bg-[#1F1D14] sm:pt-[20px] pt-[72px] border-b-[1px] border-b-[#f2f2f244]">
        <div className="container sm:p-[20px]">
        <ul className="flex sm:flex-col sm:gap-[40px] justify-between sm:pb-[20px] pb-[44px]">
          <li className="sm:hidden">
            <div className="flex gap-[11px] cursor-pointer">
                <Image className="sm:w-[50px]" src={Logo} alt="logo"/>
              <div className="flex sm:text-[20px] flex-col text-[24px] text-[#Fff] font-[600] leading-[28px]">
                  <h2 className="sm:text-[20px]">Sport</h2>
                   <h2 className="sm:text-[20px]">Market</h2>
              </div>
            </div>
          </li>

          <li className="flex flex-col gap-[19px]">
            <h2 className="text-[18px] font-[700] text-[#Fff] opacity-[0.7]">Контакты</h2>

            <div className="flex items-center gap-[5px] text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] mb-[8px] cursor-pointer">
              <i className='bx bx-phone'></i>
              <h2><span className="text-[12px]">+998 (90) </span>565-85-85</h2>
            </div>

            <div className="flex items-center gap-[5px] text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] cursor-pointer">
              <i className='bx bx-envelope' ></i>
              <h2>support@figma.com</h2>
            </div>
          </li>

          <li className="flex items-center  sm:bottom-[0px] relative bottom-[60px] gap-[13px]">
            <i className='text-[#FFf] text-[24px] opacity-[0.8] bx bx-map'></i>
            <h2 className="text-[#FFFFFF] font-[400] opacity-[0.8] text-[16px] w-[235px]">Tashkent Sh. Chilonzor 9 kvartal 12 uy</h2>
          </li>

          <li className="flex flex-col sm:gap-[10px] gap-[16px]">
            <h3 className="text-[#FFf] font-[700]">Подписатся</h3>

            <input type="text" className="w-[235px] sm:w-full outline-none py-[8px] px-[16px] bg-[#fff] rounded-[5px] border-[#9A9EA5] border-[1px]" placeholder="support@figma.com"/>

            <button className="py-[10px] px-[26px] hover:bg-[#fbd129de] active:bg-[#FBD029] transition-all bg-[#FBD029] rounded-[6px] text-[16px] font-[400]">Отправить</button>

            <div className="flex items-center sm:justify-center sm:mt-[20px] gap-[20px] mt-[49px]">
              <Image className="cursor-pointer" src={Insta} alt="instagram"/>
              <Image className="cursor-pointer"  src={Facebook} alt="facebook"/>
              <Image className="cursor-pointer"  src={Telegram} alt="telegram"/>
            </div>
          </li>
        </ul>
        </div>
      </div>

      <div className="pt-[14px] sm:pt-[5px] sm:pb-[10px] pb-[23px] bg-[#1F1D14]">
        <ul className="container sm:p-[20px] flex items-center justify-between">
          <li className="text-[#FFFFFF] font-[300] opacity-[0.8] sm:text-[7px] text-[12px]">© 2022 All Rights Reserved</li>

          <li className="flex items-center sm:gap-[15px] gap-[40px] text-[#FFFFFF] font-[400] opacity-[0.8] text-[14px]">
            <h3 className="cursor-pointer sm:text-[7px]">Privacy Policy</h3>
            <h3 className="cursor-pointer sm:text-[7px]">Terms of Use</h3>
            <h3 className="cursor-pointer sm:text-[7px]">Sales and Refunds</h3>
            <h3 className="cursor-pointer sm:text-[7px]">Legal</h3>
            <h3 className="cursor-pointer sm:text-[7px]">Site Map</h3>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Index