import { Add, LineThree } from "@/public/assets/images/svg"
import { AksiyaSportivka, AksiyaGantel, AksiyaButsa, AksiyaSumka, AksiyaLentaTwo } from "@/public/assets/images/png"
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
                        <h3 className="cursor-pointer text-[16px] sm:text-[12px]">Оплата и Доставка</h3>
                    </div>
                </div>

                <div className="flex items-start gap-[24px]">
                    <div className="card sm:hidden w-[187px] h-[256px] pt-[15px] pl-[9px] bg-[#fff] rounded-[5px]">
                        <div className="flex items-center gap-[4px]">
                            <Image src={LineThree} alt="line three" />
                            <h3 className="text-[16px] font-[400]">Оплата и Доставка</h3>
                        </div>
                    </div>

                    <div className="title sm:pt-[25px] sm:pl-[30px] sm:w-full sm:h-[920px] w-[704px] h-[776px] pt-[40px] pl-[50px] pr-[131px] bg-[#fff] rounded-[5px]">
                        <h2 className="text-[24px] sm:text-[20px] font-[500] mb-[21px]">Способы оплаты</h2>

                        <div className="flex flex-col gap-[20px] sm:w-[260px] mb-[31px]">
                            <p className="sm:text-[14px]">Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и выбрать тот товар, который Вы хотите купить.   </p>

                            <p className="sm:text-[14px]">После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ».
                                В  окне, появится «Контактная информация» и «Способы доставки», которые Вам не обходимо заполнить. </p>

                            <p className="sm:text-[14px]">Вы можете выбрать более подходящий для Вас способ оплаты:
                                -Оплата на месте;
                                -Оплата по терминалу;
                                -Оплата через платёжные системы, такие как CLICK, Payme.
                            </p>

                            <p className="sm:text-[14px]">Оплатить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму.
                            </p>
                        </div>

                        <h2 className="text-[24px] font-[500] sm:text-[20px] mb-[16px]">Доставка</h2>

                        <div className="flex flex-col gap-[25px] sm:w-[260px]">
                            <p className="sm:text-[14px]">Тарифы на доставку товаров по Ташкенту: </p>

                            <p className="sm:text-[14px]">-20.000 сум для товаров до 150.000 сум
                                -Бесплатная доставка для всех товаров от 150.000 сум</p>

                            <p className="sm:text-[14px]">Тарифы на доставку товаров по всех регионов:
                                -Платная доставка для всех товаров по согласованной цене
                                -Бесплатная установка для всех тренажеров</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-[#1F1D14] text-[24px] sm:text-[20px] font-[500] sm:mb-[20px] mb-[40px] sm:mt-[40px] mt-[120px]">Акция</h2>
                <div className="flex flex-wrap sm:justify-center sm:gap-[40px] items-center justify-between gap-[24px]">
                    {
                        images.map((item, index) => (
                            <div key={index} className="card bg-[#Fff] rounded-[5px] h-[416px] w-[292px] pt-[25px] flex flex-col">
                                <div className="flex items-start">
                                    <Image className="relative bottom-[25px] rounded-t-[5px]" src={AksiyaLentaTwo} alt="aksiya lenta" />
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
