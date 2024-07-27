import { Add, LineThree } from "@/svg"
import { AksiyaSportivka, AksiyaGantel, AksiyaButsa, AksiyaSumka, AksiyaLentaTwo } from "@/png"
import HomePageNavButton2 from '@/components/UI/HomePageNavButton2';
import Image from "next/image";

const page = () => {
    const images = [AksiyaButsa, AksiyaGantel, AksiyaSportivka, AksiyaSumka]
    return (
        <div className="bg-[#F2F2F2] pt-[27px] pb-[120px]">
            <div className="container">
                <div className="flex items-center gap-[6px] mb-[35px]">
                    <HomePageNavButton2 />

                    <div className="flex items-center gap-[5px]">
                        <i className="bx text-[20px] text-[#000] opacity-[0.6] bx-chevron-right"></i>
                        <h3 className="cursor-pointer text-[16px]">Оплата и Доставка</h3>
                    </div>
                </div>

                <div className="flex items-start gap-[24px]">
                    <div className="card w-[187px] h-[256px] pt-[15px] pl-[9px] bg-[#fff] rounded-[5px]">
                        <div className="flex items-center gap-[4px]">
                            <Image src={LineThree} alt="line three" />
                            <h3 className="text-[16px] font-[400]">Оплата и Доставка</h3>
                        </div>
                    </div>

                    <div className="title w-[704px] h-[776px] pt-[40px] pl-[50px] pr-[131px] bg-[#fff] rounded-[5px]">
                        <h2 className="text-[24px] font-[500] mb-[21px]">Способы оплаты</h2>

                        <div className="flex flex-col gap-[20px] mb-[31px]">
                            <p>Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и выбрать тот товар, который Вы хотите купить.   </p>

                            <p>После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ».
                                В  окне, появится «Контактная информация» и «Способы доставки», которые Вам не обходимо заполнить. </p>

                            <p>Вы можете выбрать более подходящий для Вас способ оплаты:
                                -Оплата на месте;
                                -Оплата по терминалу;
                                -Оплата через платёжные системы, такие как CLICK, Payme.
                            </p>

                            <p>Оплатить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму.
                            </p>
                        </div>

                        <h2 className="text-[24px] font-[500] mb-[16px]">Доставка</h2>

                        <div className="flex flex-col gap-[25px]">
                            <p>Тарифы на доставку товаров по Ташкенту: </p>

                            <p>-20.000 сум для товаров до 150.000 сум
                                -Бесплатная доставка для всех товаров от 150.000 сум</p>

                            <p>Тарифы на доставку товаров по всех регионов:
                                -Платная доставка для всех товаров по согласованной цене
                                -Бесплатная установка для всех тренажеров</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-[#1F1D14] text-[24px] font-[500] mb-[40px] mt-[120px]">Акция</h2>
                <div className="flex items-center justify-between gap-[24px]">
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
