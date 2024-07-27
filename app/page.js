import Image from "next/image";
import { Left, Right, Add, AksiyaLenta, NoviyLenta, TopLenta, PrimiOne, PrimiTwo, PrimiThree, PrimiFour, Navigate, Adidas, Nike, UnderArmour, Reebok, Puma } from "@/svg"
import { KatalogOne, KatalogTwo, KatalogThree, KatalogFour, KatalogFive, KatalogSix, AksiyaButsa, AksiyaGantel, AksiyaSportivka, AksiyaSumka, NoviyKrossovka, ProductOne, ProductTwo, ProductThree, Poleznoe,AksiyaLentaTwo } from "@/png"
import { Pagination, Stack } from '@mui/material';
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
          <section id="section-1">
            <div className="container">

            </div>
          </section>
      {/* SECTION-1 ENDED */}

      {/* SECTION-2 STARTED */}
      <section id="section-2">
        <div className="container pt-[19px] pb-[24px]">
          <h2 className="text-[32px] font-[500] mb-[31px]">Каталог</h2>

          <div className="flex mb-[46px] items-center gap-[24px] justify-between">
            {
              katalogs.map((item, index) => (
                <div key={index} className="pt-[25px] flex flex-col justify-between pl-[20px] pr-[25px] pb-[36px] h-[247px] w-[187px] rounded-[8px] bg-opacity-75" style={{ background: item.bg }}>
                  <h2>{item.title}</h2>

                  <Image src={item.image} alt='katalog image' />
                </div>
              ))
            }
          </div>
          <Stack spacing={2} className="flex justify-center items-center text-center">
            <Pagination count={5} />
          </Stack>
        </div>
      </section>
      {/* SECTION-2 ENDED */}

      {/* BG WRAPPER STARTED */}
      <div className="wrapper bg-[#F2F2F2]">
        {/* SECTION-3 STARTED */}
        <section id="section-3" className="pt-[70px] pb-[76px]">
          <div className="container">
            <div className="flex justify-between mb-[42px]">
              <h2 className="text-[32px] font-[500]">Акция</h2>

              <div className="flex items-center gap-[25px]">
                <Image className="cursor-pointer" src={Left} alt="left" />
                <Image className="cursor-pointer" src={Right} alt="right" />
              </div>
            </div>

            <div className="flex items-center justify-between gap-[24px]">
              {
                images.map((item, index) => (
                <div key={index} className="card bg-[#Fff] rounded-[5px] h-[416px] w-[292px] pt-[25px] flex flex-col">
                  <div className="flex items-start">
                    <Image className="relative bottom-[25px]" src={AksiyaLentaTwo} alt="aksiya lenta"/>
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
        <section id="section-4" className="pb-[86px]">
          <div className="container">
            <div className="flex justify-between mb-[36px]">
              <h2 className="text-[32px] font-[500]">Новинки</h2>

              <div className="flex items-center gap-[25px]">
                <Image className="cursor-pointer" src={Left} alt="left" />
                <Image className="cursor-pointer" src={Right} alt="right" />
              </div>
            </div>

            <div className="flex items-center justify-between gap-[24px]">
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
        <section id="section-5" className="pb-[86px]">
          <div className="container">
            <div className="flex justify-between mb-[36px]">
              <h2 className="text-[32px] font-[500]">Продукты</h2>

              <div className="flex items-center gap-[25px]">
                <Image className="cursor-pointer" src={Left} alt="left" />
                <Image className="cursor-pointer" src={Right} alt="right" />
              </div>
            </div>

            <div className="flex items-center justify-between gap-[24px]">
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
            <div className="flex justify-between mb-[36px]">
              <h2 className="text-[32px] font-[500]">ТОП продажа</h2>

              <div className="flex items-center gap-[25px]">
                <Image className="cursor-pointer" src={Left} alt="left" />
                <Image className="cursor-pointer" src={Right} alt="right" />
              </div>
            </div>

            <div className="flex items-center justify-between gap-[24px]">
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
        <section id="section-7" className="pb-[80px]">
          <div className="container">
            <h2 className="text-[32px] font-[500] mb-[31px]">Полезное</h2>

            <div className="flex items-center justify-between">
              <div className="card bg-[#Fff] rounded-[8px] w-[608px] pt-[38px] pb-[44px] pl-[35px]">
                <h3 className="w-[462px] text-[32px] font-[500] leading-normal text-[#1F1D14] mb-[9px]">Как правильно выбрать эллиптический тренажер?</h3>

                <p className="w-[454px] text-[16px] font-[400] mb-[125px] opacity-[0.7]">Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>


                <div className="flex items-center gap-[40px]">
                  <div className="flex items-center gap-[5px]">
                    <i className='bx bx-calendar text-[16px]'></i>
                    <h2>27.01.2022</h2>
                  </div>

                  <div className="flex items-center gap-[5px]">
                    <i className='bx bx-show-alt text-[16px]' ></i>
                    <h2>250</h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="card py-[18px] w-[608px] h-[385px] px-[145px] bg-[#fff] rounded-[8px]">
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
          <div className="container">
            <h2 className="text-[32px] font-[500] mb-[30px]">Примущества</h2>

            <div className="flex items-center gap-[24px] justify-between">
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
        <section id="section-9" className="pb-[81px]">
          <div className="container">
            <h2 className="text-[32px] font-[500] mb-[30px]">О нас</h2>

            <div className="card h-[400px] pt-[70px] pl-[80px] pb-[101px] bg-[#1F1D14] rounded-[8px]">
              <p className="text-[20px] text-[#fff] w-[719px] opacity-[0.8] font-[400]">Интернет магазин спортивных товаров <small className="font-[500] text-[21px]  opacity-[100] underline">7MARKETSPORT.UZ</small> предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. Ведется работа как с розничными покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок. </p>
              <Image className="cursor-pointer relative left-[1000px] top-[40px]" src={Navigate} alt="navigate" />
            </div>
          </div>
        </section>
        {/* SECTION-9 ENDED */}

        {/* SECTION-10 STARTED */}
        <section id="section-10" className="pb-[80px]">
          <div className="container">

          </div>
        </section>
        {/* SECTION-10 ENDED */}
      </div>
      {/* BG WRAPPER ENDED */}
    </>
  );
}
