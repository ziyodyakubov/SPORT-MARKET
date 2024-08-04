import HomePageNavButton from "@/components/UI/HomePageNavButton2";
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { GantelSingle, GantelSingleLittle, ProductOne, ProductTwo, ProductThree } from "@/public/assets/images/png";
import { Add, Control, Person, Star } from "@/public/assets/images/svg";
import Image from "next/image";

const Page = () => {
    const array = [1, 2, 3, 4, 5];
    const recommendations = [ProductOne, ProductTwo, ProductThree, ProductOne];

    return (
        <div className="bg-[#F2F2F2] pt-[27px] pb-[80px]">
            <div className="container sm:p-[20px]">
                <div className="flex items-center justify-between mb-[25px]">
                    <div className="flex items-center sm:gap-[3px] gap-[6px]">
                        <HomePageNavButton />
                        <div className="flex items-center gap-[5px]">
                            <i className="bx text-[20px] text-[#000] opacity-[0.6] bx-chevron-right"></i>
                            <h3 className="cursor-pointer text-[16px] sm:text-[12px]">Гантель виниловая</h3>
                        </div>
                    </div>
                    <FormControl className="sm:w-[100px] sm:hidden w-[216px] bg-[#FFF]" size="small">
                        <InputLabel id="sort-select-label">Сортировать:</InputLabel>
                        <Select
                            labelId="sort-select-label"
                            id="sort-select"
                            label="Сортировать:"
                        >
                            <MenuItem value={"sport"}>Nimadir</MenuItem>
                            <MenuItem value={"classic"}>Nimadir</MenuItem>
                            <MenuItem value={"oversizw"}>Nimadir</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="flex items-center sm:flex-col justify-between gap-[24px] mb-[80px]">
                    <div className="img">
                        <div className="big-img mb-[8px] px-[152px] bg-[#FFF] rounded-[5px] py-[62px]">
                            <Image className="cursor-pointer hover:scale-[1.1] transition-all duration-200" src={GantelSingle} alt="gantel" />
                        </div>
                        <div className="flex gap-[8px] items-center">
                            {array.map((index) => (
                                <div key={index} className="py-[11px] px-[24px] bg-[#FFF] rounded-[5px]">
                                    <Image className="cursor-pointer hover:scale-[1.1] transition-all duration-200" src={GantelSingleLittle} alt="gantel single little" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="title sm:pt-[30px] sm:pl-[20px] pt-[50px] bg-[#FFF] sm:w-full rounded-[5px] sm:h-[490px] w-[503px] h-[539px] pl-[52px] pr-[80px] pb-[34px]">
                        <h2 className="text-[32px] mb-[16px] text-[#1F1D14] sm:text-[20px] sm:mb-[5px] w-[307px] font-[500] leading-[34px]">Гантель виниловая, 2 х 3 кг</h2>
                        <p className="mb-[20px] sm:text-[14px] sm:mb-[10px]">В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины.</p>
                        <div className="flex items-center gap-[10px] mb-[15px]">
                            <h2 className="text-[16px] font-[400] sm:text-[14px] text-[#1F1D14]">В комлекте:</h2>
                            <h2 className="text-[20px] sm:text-[16px] text-[#1F1D14] font-[500]">2 шт.</h2>
                        </div>
                        <div className="flex items-center gap-[10px] mb-[26px]">
                            <h2 className="text-[16px] sm:text-[14px] font-[400] text-[#1F1D14]">Страна производства:</h2>
                            <h2 className="text-[20px] sm:text-[16px] text-[#1F1D14] font-[500]">Китай</h2>
                        </div>
                        <div className="flex items-center mb-[25px]">
                            <h2 className="text-[#1F1D14] sm:text-[20px] text-[24px] font-[500]">220 000</h2>
                            <h3 className="text-[#1F1D14] opacity-[0.8] text-[20px] font-[400] sm:text-[16px] sm:bottom-[10px] relative ml-[5px] mr-[8.5px] top-[5px]">uzs</h3>
                            <h3>|</h3>
                            <h3 className="text-[#1F1D14] sm:text-[16px] text-[20px] font-[400] ml-[8.5px]">1 шт.</h3>
                        </div>
                        <div className="flex items-center gap-[21px] sm:gap-[10px] sm:mt-[50px] mb-[32px]">
                            <button className="flex items-center gap-[5px] sm:py-[10px] sm:px-[15px] py-[20px] px-[30px] border-[2px] border-[#FBD029] transition-all duration-300 hover:bg-[#FBD029] active:bg-[#FFF] rounded-[5px] bg-[#FFF]">
                                <Image src={Add} alt="add" />Корзина
                            </button>
                            <button className="flex items-center gap-[5px] sm:py-[10px] sm:px-[15px] py-[20px] px-[30px] border-[2px] border-[#FBD029] transition-all duration-300 hover:bg-[#FBD029] active:bg-[#FFF] rounded-[5px] bg-[#FFF]">
                                <Image src={Control} alt="control" />Сравнить
                            </button>
                        </div>
                        <button className="flex items-center gap-[5px]">
                            <i className='bx bx-share-alt'></i>Поделиться
                        </button>
                    </div>
                </div>

                <div className="flex sm:flex-col items-center justify-between mb-[81px]">
                    <div className="sm:w-full sm:mb-[30px]">
                        <h2 className="text-[32px] sm:text-[20px] font-[500] mb-[31px]">Описание</h2>
                        <div className="flex sm:w-full flex-col gap-[28px] sm:gap-[14px] card sm:pt-[20px] sm:pl-[25px] pt-[40px] pl-[70px] bg-[#FFF] rounded-[5px] w-[608px] h-[470px] pr-[176px] pb-[116px]">
                            <h2 className="text-[#1F1D14] text-[24px] font-[500] sm:text-[16px]">Гантель виниловая, 2 х 3 кг</h2>
                            <p className="mb-[35px] sm:w-[340px] sm:text-[14px]">В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины.</p>
                            <div className="flex items-center gap-[70px]">
                                <div className="flex flex-col gap-[5px]">
                                    <h2 className="text-[#1F1D14] text-[20px] sm:text-[16px] font-[500]">Вес гантела:</h2>
                                    <h3 className="text-[#1F1D14] text-[16px] font-[400]">5кг</h3>
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <h2 className="text-[#1F1D14] text-[20px] sm:text-[16px] font-[500]">Цвета:</h2>
                                    <h3 className="text-[#1F1D14] text-[16px] font-[400]">Синий, Красный</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-[70px]">
                                <div className="flex flex-col gap-[5px]">
                                    <h2 className="text-[#1F1D14] text-[20px] sm:text-[16px] font-[500]">Вес гантела:</h2>
                                    <h3 className="text-[#1F1D14] text-[16px] font-[400]">5кг</h3>
                                </div>
                                <div className="flex flex-col gap-[5px]">
                                    <h2 className="text-[#1F1D14] text-[20px] sm:text-[16px] font-[500]">Цвета:</h2>
                                    <h3 className="text-[#1F1D14] text-[16px] font-[400]">Синий, Красный</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-full">
                        <h2 className="text-[32px] sm:text-[20px] font-[500] mb-[31px]">Отзыви</h2>
                        <div className="card sm:w-full pt-[40px] sm:pt-[30px] sm:pl-[30px] sm:pr-[35px] sm:h-[525px] pl-[70px] bg-[#FFF] rounded-[5px] w-[608px] h-[470px] pr-[78px]">
                            <div className="flex items-start gap-[12px] mb-[40px]">
                                <Image className="cursor-pointer" src={Person} alt="person" />
                                <div className="title flex flex-col">
                                    <div className="cursor-pointer flex flex-col">
                                        <h2 className="text-[#1F1D14] text-[20px] font-[500]">Шахзод Анваров</h2>
                                        <h4 className="text-[#1F1D14] text-[16px] font-[400] opacity-[0.6] relative bottom-[5px]">клиент</h4>
                                    </div>
                                    <p className="mb-[5px] sm:mb-[15px] sm:mt-[10px]">В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины.</p>
                                    <Image src={Star} alt="star" />
                                </div>
                            </div>
                            <div className="flex items-start gap-[12px] mb-[40px]">
                                <Image className="cursor-pointer" src={Person} alt="person" />
                                <div className="title flex flex-col">
                                    <div className="flex cursor-pointer flex-col">
                                        <h2 className="text-[#1F1D14] text-[20px] font-[500]">Шахзод Анваров</h2>
                                        <h4 className="text-[#1F1D14] text-[16px] font-[400] opacity-[0.6] relative bottom-[5px]">клиент</h4>
                                    </div>
                                    <p className="mb-[5px]">В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины.</p>
                                    <Image src={Star} alt="star" />
                                </div>
                            </div>
                            <div className="flex items-center relative left-[370px] cursor-pointer bottom-[15px] gap-[3px]">
                                <h2 className="text-[#1F1D14] text-[16px] font-[400] opacity-[0.6]">Все отзывы</h2>
                                <i className='bx bx-right-arrow-alt opacity-[0.6]'></i>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-[32px] sm:text-[20px] font-[500] text-[#1F1D14] mb-[30px]">Похожие продукты</h2>
                <div className="flex flex-wrap sm:justify-center sm:gap-[15px] items-center justify-between">
                    {recommendations.map((item, index) => (
                        <div key={index} className="card bg-[#FFF] rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                            <i className='bx bx-heart cursor-pointer relative text-[24px] left-[254px] bottom-[15px]'></i>
                            <Image className="relative cursor-pointer hover:scale-[1.1] transition-all duration-200 left-[20px] bottom-[10px]" src={item} alt="recommendation product" />
                            <div className="title p-[20px] w-[230px] flex flex-col gap-[14px] pb-[14px]">
                                <h2 className="text-[20px] font-normal">Бутса Nike Mercurial Superfly 8 FG</h2>
                                <div className="flex flex-col">
                                    <h3 className="text-[20px] text-[#1F1D14] font-[600]">250 000 uzs</h3>
                                </div>
                            </div>
                            <button className="flex items-center gap-[6px] active:bg-[#FBD029] transition-all duration-300 hover:bg-[#fbd129b5] bg-[#FBD029] rounded-b-[5px] py-[15px] px-[91px]">
                                <Image src={Add} alt="add to cart" />Корзина
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
