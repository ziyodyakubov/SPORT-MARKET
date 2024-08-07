"use client";

import Image from "next/image";
import {Boots,Bag,Gantels} from "@/public/assets/images/png"
import { Carousel, ConfigProvider, theme } from "antd";
import { Left, Right, Add, AksiyaLenta, NoviyLenta, TopLenta, PrimiOne, PrimiTwo, PrimiThree, PrimiFour, Navigate, Adidas, Nike, UnderArmour, Reebok, Puma } from "@/public/assets/images/svg"
import { KatalogOne, KatalogTwo, KatalogThree, KatalogFour, KatalogFive, KatalogSix, AksiyaButsa, AksiyaGantel, AksiyaSportivka, AksiyaSumka, NoviyKrossovka, ProductOne, ProductTwo, ProductThree, Poleznoe,AksiyaLentaTwo } from "@/public/assets/images/png"
import NavigateButton from '@/components/UI/NavigateButton';



export default function Home() {

  const katalogs = [
    { image: KatalogOne, title: "Тренажеры", color: "[#D3E5F2]", bg: "#D3E5F2" },
    { image: KatalogTwo, title: "Мячи", bg: "#E2C6BE" },
    { image: KatalogThree, title: "Спротивные обуви", bg: "#DADBE0" },
    { image: KatalogFour, title: "Спортивные одежды", bg: "#E2EEC0" },
    { image: KatalogFive, title: "Водный спорт", bg: "#C2BCE8" },
    { image: KatalogSix, title: "Горный спорт", bg: "#ABA520" },
  ]

  const primi = [
    { image: PrimiOne, title: "Доставка по всему Узбекистану" },
    { image: PrimiTwo, title: "Доставка по всему Узбекистану" },
    { image: PrimiThree, title: "Скидки и акции" },
    { image: PrimiFour, title: "Широкий ассортимент товаров" },
  ]

  const companies = [Puma, UnderArmour, Nike, Adidas, Reebok, Puma, UnderArmour]

  const images = [AksiyaButsa, AksiyaGantel, AksiyaSportivka, AksiyaSumka]
  const novies = [AksiyaSportivka, NoviyKrossovka, AksiyaSumka, AksiyaGantel]
  const products = [ProductOne, ProductTwo, ProductThree, ProductOne]
  const top = [AksiyaSportivka, ProductOne, ProductThree, NoviyKrossovka]


  return (
    <>
    
      {/* SECTION-1 STARTED */}
        <section className="bg-[#F2F2F2] sm:hidden pt-5 pb-[83px]">
        <div className="container flex justify-between">
          <Carousel
            autoplay
            className="w-[819px]"
            arrows
            infinite={true}
            autoplaySpeed={1500}
          >
            <div className="w-[819px] sm:flex-col sm:w-[340px] h-[488px] bg-[#fff] flex relative overflow-hidden rounded-lg">
              <div className="pt-[82px] sm:pt-[10px] sm:pl-[30px] pl-[90px]">
                <h2 className="font-extrabold text-[32px] mb-[27px] w-[343px]">
                  Бутсы Nike Phantom GT2 Elite FG
                </h2>
                <button className="border-[#FBD029] rounded-[10px] border-2 py-[10px] px-5">
                  Подробности
                </button>
              </div>
              <div>
                <Image
                  className="z-10 absolute top-[20px] right-[20px]"
                  src={Boots}
                  alt="boots"
                />
              </div>
              <div className="absolute w-[380px] h-[380px] bg-[#FF563D] top-[61px] right-[30px] rounded-full" />
              <div className="w-[445px] h-[821px] bg-[#BDD400] absolute rotate-[25deg] right-[-150px] top-[-50px]" />
            </div>
            <div className="w-[819px] sm:flex-col sm:w-[340px] h-[488px] bg-[#fff] flex relative overflow-hidden rounded-lg">
              <div className="pt-[82px] sm:pt-[10px] sm:pl-[30px] pl-[90px]">
                <h2 className="font-extrabold text-[32px] mb-[27px] w-[343px]">
                  Бутсы Nike Phantom GT2 Elite FG
                </h2>
                <button className="border-[#FBD029] rounded-[10px] border-2 py-[10px] px-5">
                  Подробности
                </button>
              </div>
              <div>
                <Image
                  className="z-10 absolute top-[20px] right-[20px]"
                  src={Boots}
                  alt="boots"
                />
              </div>
              <div className="absolute w-[380px] h-[380px] bg-[#FF563D] top-[61px] right-[30px] rounded-full" />
              <div className="w-[445px] h-[821px] bg-[#BDD400] absolute rotate-[25deg] right-[-150px] top-[-50px]" />
            </div>
            <div className="w-[819px] sm:flex-col sm:w-[340px] h-[488px] bg-[#fff] flex relative overflow-hidden rounded-lg">
              <div className="pt-[82px] sm:pt-[10px] sm:pl-[30px] pl-[90px]">
                <h2 className="font-extrabold text-[32px] mb-[27px] w-[343px]">
                  Бутсы Nike Phantom GT2 Elite FG
                </h2>
                <button className="border-[#FBD029] rounded-[10px] border-2 py-[10px] px-5">
                  Подробности
                </button>
              </div>
              <div>
                <Image
                  className="z-10 absolute top-[20px] right-[20px]"
                  src={Boots}
                  alt="boots"
                />
              </div>
              <div className="absolute w-[380px] h-[380px] bg-[#FF563D] top-[61px] right-[30px] rounded-full" />
              <div className="w-[445px] h-[821px] bg-[#BDD400] absolute rotate-[25deg] right-[-150px] top-[-50px]" />
            </div>
          </Carousel>

          <div className="sm:hidden">
            <div className="w-[397px] h-[237px] relative pt-[35px] pl-[34px] bg-[#fff] rounded-lg overflow-hidden mb-[15px]">
              <h3 className="font-medium w-[197px] mb-3">
                Adidas champions league 2021 Final
              </h3>
              <p className="text-[#1f1d1485] font-medium">220 000</p>
              <div className="flex gap-1 items-end mt-[-8px]">
                <p className="text-[#FF1313] font-bold text-[24px]">160 000</p>
                <p className="font-extrabold text-[12px] text-[#FF1313]">UZS</p>
              </div>
              <Image
                className="absolute top-[18px] right-[30px] z-10"
                src={Gantels}
                alt="dumbbell"
              />
              <div className="absolute w-[165px] h-[165px] bg-[#FBD029] top-[28px] right-[15px] rounded-full" />
              <div className="absolute w-[434px] h-[58px] flex items-center justify-center bg-[#FF1313] text-[20px] font-bold text-[#fff] rotate-[-35deg] right-[-165px] bottom-[10px] z-20">
                Акция
              </div>
            </div>
            <div className="w-[397px] h-[237px] relative pt-[35px] pl-[34px] bg-[#fff] rounded-lg overflow-hidden">
              <h3 className="font-medium w-[197px] mb-5">
                Adidas champions league 2021 Final
              </h3>
              <div className="flex gap-1 items-end mt-[-8px]">
                <p className="font-bold text-[24px]">485 000</p>
                <p className="font-extrabold text-[12px]">UZS</p>
              </div>
              <Image
                className="absolute top-[18px] right-[30px] z-10"
                src={Bag}
                alt="dumbbell"
              />
              <div className="absolute w-[165px] h-[165px] bg-[#FBD029] top-[28px] right-[15px] rounded-full" />
              <div className="absolute w-[434px] h-[58px] flex items-center justify-center text-[20px] font-bold text-[#fff] rotate-[-35deg] right-[-165px] bottom-[10px] z-20 bg-[#917BFF]">
                Новый
              </div>
            </div>
          </div>
        </div>
       </section>
      {/* SECTION-1 ENDED */}

      {/* SECTION-2 STARTED */}
      <section id="section-2">
        <div className="container pt-[19px] sm:p-[15px] pb-[24px]">
          <h2 className="text-[32px] sm:ml-[20px] sm:text-[25px] sm:mb-[15px] font-[500] mb-[31px]">Каталог</h2>

          <div className="flex sm:justify-center sm:gap-[10px] flex-wrap mb-[46px] items-center gap-[24px]">
            {
              katalogs.map((item, index) => (
                <div key={index} className="pt-[25px] flex flex-col justify-between pl-[20px] pr-[25px] pb-[36px] h-[247px] sm:w-[153px] sm:h-[220px] w-[186px] rounded-[8px] bg-opacity-75" style={{ background: item.bg }}>
                  <h2>{item.title}</h2>

                  <Image src={item.image} alt='katalog image' />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* SECTION-2 ENDED */}

      {/* BG WRAPPER STARTED */}
      <div className="wrapper bg-[#F2F2F2]">
        {/* SECTION-3 STARTED */}
        <section id="section-3" className="pt-[70px] pb-[76px] sm:pt-[30px] sm:pb-[70px]">
          <div className="container">
            <div className="flex sm:p-[20px] justify-between sm:mb-[15px] mb-[42px]">
              <h2 className="text-[32px] sm:ml-[20px] sm:text-[25px] font-[500]">Акция</h2>

              <div className="flex items-center gap-[25px] sm:gap-[15px] sm:mr-[20px]">
                <Image className="cursor-pointer sm:w-[40px]" src={Left} alt="left" />
                <Image className="cursor-pointer sm:w-[40px]" src={Right} alt="right" />
              </div>
            </div>

            <div className="flex flex-wrap sm:justify-center sm:gap-[40px] items-center justify-between gap-[24px]">
              {
                images.map((item, index) => (
                <div key={index} className="card bg-[#Fff] rounded-[5px] h-[416px] w-[292px] pt-[25px] flex flex-col">
                  <div className="flex items-start">
                    <Image className="relative bottom-[25px] rounded-t-[5px]" src={AksiyaLentaTwo} alt="aksiya lenta"/>
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
        </section>
        {/* SECTION-3 ENDED */}

        {/* SECTION-4 STARTED */}
        <section id="news" className="pb-[86px] sm:pb-[70px]">
          <div className="container">
            <div className="flex sm:p-[20px] justify-between sm:mb-[15px] mb-[36px]">
              <h2 className="text-[32px] sm:ml-[20px] sm:text-[25px] font-[500]">Новинки</h2>

              <div className="flex items-center gap-[25px] sm:gap-[15px] sm:mr-[20px]">
                <Image className="cursor-pointer sm:w-[40px]" src={Left} alt="left" />
                <Image className="cursor-pointer sm:w-[40px]" src={Right} alt="right" />
              </div>
            </div>

            <div className="flex flex-wrap sm:justify-center items-center justify-between gap-[24px]">
              {
                novies.map((item, index) => (
                  <div key={index} className="card bg-white rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                    <div className="flex items-center justify-between">
                      <Image src={NoviyLenta} alt="aksiya lenta" className="relative bottom-[25px] z-10" />
                      <i className='bx bx-heart text-[24px] relative bottom-[100px] right-[10px] cursor-pointer'></i>
                    </div>

                    <Image className="relative left-[20px] w-[252px] h-auto mt-[-190px]" src={item} alt="krosovka" />

                    <div className="title p-[20px] w-[252px] flex flex-col gap-[24px] pb-[27px]">
                      <h2 className="text-[20px] font-normal">Бутса Nike Mercurial Superfly 8 FG</h2>

                      <div className="flex flex-col">
                        <h3 className="text-[20px] text-[#1F1D14] font-[600]">500 000 uzs</h3>
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
        </section>
        {/* SECTION-4 ENDED */}

        {/* SECTION-5 STARTED */}
        <section id="section-5" className="pb-[86px] sm:pb-[70px]">
          <div className="container">
            <div className="flex justify-between sm:p-[20px] sm:mb-[15px] mb-[36px]">
              <h2 className="text-[32px] sm:text-[25px] sm:ml-[20px] font-[500]">Продукты</h2>

              <div className="flex items-center gap-[25px] sm:gap-[15px] sm:mr-[20px]">
                <Image className="cursor-pointer sm:w-[40px]" src={Left} alt="left" />
                <Image className="cursor-pointer sm:w-[40px]" src={Right} alt="right" />
              </div>
            </div>

            <div className="flex flex-wrap sm:justify-center items-center justify-between gap-[24px]">
              {
                products.map((item, index) => (
                  <div key={index} className="card bg-[#Fff] rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                    <i className='bx bx-heart cursor-pointer relative text-[24px] left-[254px] bottom-[15px]'></i>
                    <Image className="relative left-[20px]  cursor-pointer hover:scale-[1.1] transition-all duration-200 bottom-[10px]" src={item} alt="krosovka" />

                    <div className="title p-[20px] w-[230px] flex flex-col gap-[14px] pb-[14px]">
                      <h2 className="text-[20px] font-normal">Бутса Nike Mercurial Superfly 8 FG</h2>

                      <div className="flex flex-col">
                        <h3 className="text-[20px] text-[#1F1D14] font-[600]">250 000 uzs</h3>
                      </div>
                    </div>

                    <button className="flex items-center gap-[6px] active:bg-[#FBD029] transition-all duration-300 hover:bg-[#fbd129b5] bg-[#FBD029] rounded-b-[5px] py-[15px] px-[91px]"><Image src={Add} alt="add to korzinka" />Корзина</button>
                  </div>
                ))
              }

            </div>
          </div>
        </section>
        {/* SECTION-5 ENDED */}

        {/* SECTION-6 STARTED */}
        <section id="section-6" className="pb-[70px]">
          <div className="container">
            <div className="flex sm:p-[20px] justify-between mb-[36px]">
              <h2 className="text-[32px] sm:text-[25px] sm:ml-[20px] font-[500]">ТОП продажа</h2>

              <div className="flex items-center gap-[25px] sm:gap-[15px] sm:mr-[20px]">
                <Image className="cursor-pointer sm:w-[40px]" src={Left} alt="left" />
                <Image className="cursor-pointer sm:w-[40px]" src={Right} alt="right" />
              </div>
            </div>

            <div className="flex sm:justify-center flex-wrap items-center justify-between gap-[24px]">
              {
                top.map((item, index) => (
                  <div key={index} className="card bg-white rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                    <div className="flex items-center justify-between">
                      <Image src={TopLenta} alt="aksiya lenta" className="relative bottom-[25px] z-10" />
                      <i className='bx bx-heart text-[24px] relative bottom-[100px] right-[10px] cursor-pointer'></i>
                    </div>

                    <Image className="relative left-[20px] w-[252px] h-auto mt-[-190px]" src={item} alt="krosovka" />

                    <div className="title p-[20px] w-[252px] flex flex-col gap-[24px] pb-[27px]">
                      <h2 className="text-[20px] font-normal">Бутса Nike Mercurial Superfly 8 FG</h2>

                      <div className="flex flex-col">
                        <h3 className="text-[20px] text-[#1F1D14] font-[600]">500 000 uzs</h3>
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
        </section>
        {/* SECTION-6 ENDED */}

        {/* SECTION-7 STARTED */}
        <section id="section-7" className="pb-[80px] sm:pb-[50px]">
          <div className="container sm:p-[20px]">
            <h2 className="text-[32px] font-[500] mb-[31px] sm:text-[25px] sm:mb-[15px] sm:ml-[10px]">Полезное</h2>

            <div className="flex items-center sm:flex-col sm:gap-[10px] justify-between">
              <div className="card bg-[#Fff] rounded-[8px] sm:w-[340px] w-[608px] sm:pt-[18px] sm:pb-[24px] sm:pl-[20px] pt-[38px] pb-[44px] pl-[35px]">
                <h3 className="w-[462px] text-[32px] font-[500] sm:mb-[15px] sm:text-[17px] sm:w-[220px] leading-normal text-[#1F1D14] mb-[9px]">Как правильно выбрать эллиптический тренажер?</h3>

                <p className="w-[454px] sm:text-[12px] sm:w-[320px] text-[16px] font-[400] mb-[125px] opacity-[0.7]">Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>


                <div className="flex items-center gap-[40px]">
                  <div className="flex items-center gap-[5px]">
                    <i className='bx bx-calendar sm:text-[12px] text-[16px]'></i>
                    <h2 className="sm:text-[12px]">27.01.2022</h2>
                  </div>

                  <div className="flex items-center gap-[5px]">
                    <i className='bx bx-show-alt text-[16px] sm:text-[12px]' ></i>
                    <h2 className="sm:text-[12px]">250</h2>
                  </div>
                </div>
              </div>

              <div className="flex sm:items-center flex-col gap-[15px]">
                <div className="card sm:hidden py-[18px] w-[608px] sm:py-[18px] sm:px-[145px] h-[385px] px-[145px] bg-[#fff] rounded-[8px]">
                  <Image src={Poleznoe} alt="poleznoe" />
                </div>

                <NavigateButton />
              </div>
            </div>

          </div>
        </section>
        {/* SECTION-7 ENDED */}

        {/* SECTION-8 STARTED */}
        <section id="section-8" className="pb-[80px]">
          <div className="container sm:p-[20px]">
            <h2 className="text-[32px] font-[500] sm:text-[25px] sm:ml-[10px] mb-[30px]">Примущества</h2>

            <div className="flex flex-wrap sm:justify-center sm:gap-[15px] items-center gap-[24px] justify-between">
              {
                primi.map((item, index) => (
                  <div key={index} className="flex flex-col gap-[24px] pt-[60px] pl-[40px] pr-[30px] bg-[#fff] rounded-[8px] h-[289px] w-[292px]">
                    <Image src={item.image} alt={item.title} />

                    <h3 className="text-[20px] font-[400]">{item.title}</h3>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* SECTION-8 ENDED */}

        {/* SECTION-9 STARTED */}
        <section id="section-9" className="pb-[81px] sm:pb-[]">
          <div className="container sm:p-[20px]">
            <h2 className="text-[32px] font-[500] sm:text-[25px] sm:ml-[10px] mb-[30px]">О нас</h2>

            <div className="card h-[400px] sm:pt-[40px] sm:pl-[40px] sm:pb-[30px] sm:h-[740px] pt-[70px] pl-[80px] pb-[101px] bg-[#1F1D14] rounded-[8px]">
              <p className="text-[20px] text-[#fff] sm:w-[300px] w-[719px] opacity-[0.8] font-[400]">Интернет магазин спортивных товаров <small className="font-[500] text-[21px]  opacity-[100] underline">7MARKETSPORT.UZ</small> предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. Ведется работа как с розничными покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок. </p>
              <Image className="cursor-pointer sm:left-[220px] sm:top-[60px] sm:w-[50px] relative left-[1000px] top-[40px]" src={Navigate} alt="navigate" />
            </div>
          </div>
        </section>
        {/* SECTION-9 ENDED */}
      </div>
      {/* BG WRAPPER ENDED */}
    </>
  );
}
