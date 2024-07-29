import { Add,LineThree,Printer } from "@/public/assets/images/svg"
import { AksiyaSportivka, AksiyaGantel, AksiyaButsa,AksiyaSumka, AksiyaLentaTwo } from "@/public/assets/images/png"
import HomePageNavButton2 from '@/components/UI/HomePageNavButton2';
import Image from "next/image";

const page = () => {
    const images = [AksiyaButsa, AksiyaGantel, AksiyaSportivka, AksiyaSumka]
    
    return (
        <div className="bg-[#F2F2F2] pt-[27px] pb-[120px]">
            <div className="container sm:p-[20px]">
                <div className="flex items-center sm:gap-[3px] gap-[6px] mb-[35px]">
                    <HomePageNavButton2 />

                    <div className="flex items-center gap-[5px]">
                        <i className="bx text-[20px] text-[#000] opacity-[0.6] bx-chevron-right"></i>
                        <h3 className="cursor-pointer sm:text-[12px] text-[16px]">О нас</h3>
                    </div>
                </div>

                <div className="flex items-start gap-[24px]">
                    <div className="card sm:hidden w-[187px] pt-[15px] pl-[9px] h-[256px] bg-[#fff] rounded-[5px]">
                        <div className="flex items-center gap-[4px] mb-[12px]">
                            <Image src={LineThree} alt="logo"/>
                            
                            <h3 className="text-[16px] font-[400]">О нас</h3>
                        </div>

                        <h3 className="text-[16px] relative left-[27px] font-[400]">Вканация</h3>
                    </div>

                    <div className="title w-[704px] sm:pt-[20px] sm:pl-[25px] sm:w-full sm:h-[800px] h-[677px] pt-[40px] pl-[50px] pr-[66px] bg-[#fff] rounded-[5px]">
                        <h2 className="text-[24px] font-[500] sm:text-[20px] sm:mb-[10px] mb-[17px]">7 SPORT MARKET</h2>

                        <div className="flex flex-col sm:gap-[15px] gap-[29px] mb-[42px]">
                            <p className="sm:text-[14px]">В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.</p>

                            <p className="sm:text-[14px]">Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.</p>

                            <p className="mt-[6px] sm:text-[14px]">В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.</p>

                            <p className="sm:text-[14px]">Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.</p>
                        </div>
                        

                        <div className="flex justify-end gap-[32px] items-center">
                            <div className="flex items-center gap-[10px]">
                                <h2 className="text-[12px] text-[#1F1D14] font-[400]">Поделиться:</h2>
                                <i className='bx bx-share-alt text-[14px]'></i>
                            </div>

                            <div className="flex items-center gap-[5px]">
                                <h2 className="text-[12px] text-[#1F1D14] font-[400]">Распечатать:</h2>
                                <Image src={Printer} alt="printer"/>
                            </div>
                        </div>

                    </div>
                </div>

                <h2 className="text-[#1F1D14] text-[24px] sm:text-[20px] font-[500] mb-[40px] mt-[120px] sm:mt-[60px]">Акция</h2>
                <div className="flex flex-wrap sm:justify-center sm:gap-[40px] items-center justify-between gap-[24px]">
                    {
                        images.map((item, index) => (
                            <div key={index} className="card bg-[#Fff] rounded-[5px] h-[416px] w-[292px] pt-[25px] flex flex-col">
                                <div className="flex items-start">
                                    <Image className="relative bottom-[25px]" src={AksiyaLentaTwo} alt="aksiya lenta" />
                                    <i className='bx bx-heart cursor-pointer relative text-[24px] left-[130px] bottom-[10px]'></i>
                                </div>
                                <Image className="relative left-[20px] bottom-[90px] cursor-pointer hover:scale-[1.1] transition-all duration-200" src={item} alt="krosovka" />

                                <div className="relative bottom-[80px]">
                                    <div className="title p-[20px] w-[230px] flex flex-col gap-[14px] pb-[14px]">
                                        <h2 className="text-[20px] font-normal">Бутса Nike Mercurial Superfly 8 FG</h2>

                                        <div className="flex flex-col">
                                            <h3 className="text-[20px] text-[#1F1D14] font-[600]">250 000 uzs</h3>
                                        </div>
                                    </div>

                                    <button className="flex items-center w-full gap-[6px] active:bg-[#FBD029] transition-all duration-300 hover:bg-[#fbd129b5] bg-[#FBD029] rounded-b-[5px] py-[15px] px-[91px]"><Image src={Add} alt="add to korzinka" />Корзина</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default page
