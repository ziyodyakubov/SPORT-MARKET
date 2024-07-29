import HomePageNavButton from "@/components/UI/HomePageNavButton";
import { AksiyaButsa,AksiyaGantel,AksiyaSportivka,AksiyaSumka } from "@/public/assets/images/png";
import { AksiyaLenta,Add } from "@/public/assets/images/svg";
import Image from "next/image";

const page = () => {

    const info = [{
        title: "Как правильно выбрать эллиптический тренажер?",
        desc: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
        data: "27.01.2022",
        count: 250
    }, {
        title: "Как правильно выбрать эллиптический тренажер?",
        desc: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
        data: "27.01.2022",
        count: 250
    }, {
        title: "Как правильно выбрать эллиптический тренажер?",
        desc: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
        data: "27.01.2022",
        count: 250
    }, {
        title: "Как правильно выбрать эллиптический тренажер?",
        desc: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
        data: "27.01.2022",
        count: 250
    }, {
        title: "Как правильно выбрать эллиптический тренажер?",
        desc: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
        data: "27.01.2022",
        count: 250
    }, {
        title: "Как правильно выбрать эллиптический тренажер?",
        desc: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
        data: "27.01.2022",
        count: 250
    }, {
        title: "Как правильно выбрать эллиптический тренажер?",
        desc: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
        data: "27.01.2022",
        count: 250
    }, {
        title: "Как правильно выбрать эллиптический тренажер?",
        desc: "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
        data: "27.01.2022",
        count: 250
    }]

    const images = [AksiyaButsa, AksiyaGantel, AksiyaSportivka, AksiyaSumka]
    return (
        <div className="bg-[#F2F2F2] pt-[27px] pb-[80px]">
            <div className="container p-[20px]">
                <div className="flex items-center sm:gap-[5px] gap-[11px] mb-[20px]">
                    <HomePageNavButton />

                    <div className="flex items-center gap-[5px]">
                        <i className="bx text-[20px] text-[#000] sm:text-[14px] opacity-[0.6] bx-chevron-right"></i>
                        <h3 className="cursor-pointer text-[16px] sm:text-[12px]">Полезные информации</h3>
                    </div>
                </div>

                <h2 className="text-[32px] sm:text-[20px] sm:mt-[20px] sm:mb-[20px] text-[#1F1D14] font-[500] mb-[30px]">Полезные информации</h2>

                <div className="flex gap-[24px] sm:justify-center flex-wrap items-center justify-between mb-[30px]">
                    {
                        info.map((item, index) => (
                            <div key={index} className="card bg-[#Fff] sm:w-full rounded-[8px] sm:pt-[20px] sm:pl-[20px] w-[588px] pt-[38px] pb-[44px] pl-[35px]">
                                <h3 className="w-[462px] sm:w-[312px] sm:text-[20px] sm:mb-[20px] text-[32px] font-[500] leading-normal text-[#1F1D14] mb-[9px]">{item.title}</h3>

                                <p className="w-[462px] sm:w-[312px] sm:text-[14px] text-[16px] font-[400] mb-[125px] opacity-[0.7]">{item.desc}</p>


                                <div className="flex items-center gap-[40px]">
                                    <div className="flex items-center gap-[5px]">
                                        <i className='bx sm:text-[14px] bx-calendar text-[16px]'></i>
                                        <h2 className="sm:text-[14px]">{item.data}</h2>
                                    </div>

                                    <div className="flex items-center gap-[5px]">
                                        <i className='bx sm:text-[14px] bx-show-alt text-[16px]' ></i>
                                        <h2 className="sm:text-[14px]">{item.count}</h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <button className="border-[1px] sm:w-full mb-[80px] hover:bg-[#FBD029] active:bg-transparent active:text-[#000] transition-all duration-300 hover:text-[#fff] border-[#FBD029] rounded-[5px] py-[15px] px-[40px] text-[20px]">Показать ещё</button>

                <h2 className="text-[24px] font-[500] mb-[30px] text-[#1F1D14] sm:text-[30px]">Акция</h2>

                <div className="flex sm:flex-wrap sm:justify-center items-center justify-between gap-[24px]">
                    {
                        images.map((item, index) => (
                            <div key={index} className="card bg-white rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                                <div className="flex items-center justify-between">
                                    <Image src={AksiyaLenta} alt="aksiya lenta" className="relative rounded-t-[5px] bottom-[25px] z-10" />
                                    <i className='bx bx-heart text-[24px] relative bottom-[100px] right-[10px] cursor-pointer'></i>
                                </div>

                                <Image className="relative left-[20px] w-[252px] h-auto mt-[-190px]" src={item} alt="krosovka" />

                                <div className="title p-[20px] w-[252px] flex flex-col gap-[14px] pb-[14px]">
                                    <h2 className="text-[20px] font-normal">Бутса Nike Mercurial Superfly 8 FG</h2>

                                    <div className="flex flex-col">
                                        <h3 className="text-[20px] text-[#FF1313] font-[700]">500 000 uzs</h3>
                                        <small className="text-[16px] line-through text-[#1F1D14] opacity-[0.4]">750 000</small>
                                    </div>
                                </div>

                                <button className="flex items-center gap-[6px] active:bg-[#FBD029] transition-all duration-300 hover:bg-[#fbd129b5] bg-[#FBD029] text-[20px] text-[#1F1D14] rounded-b-[5px] py-[15px] justify-center">
                                    <Image src={Add} alt="add to korzinka" />Корзина
                                </button>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default page;
