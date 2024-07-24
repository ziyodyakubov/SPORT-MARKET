import Image from "next/image";
import { Left, Right, Add, AksiyaLenta,NoviyLenta,TopLenta } from "@/svg"
import { KatalogOne, KatalogTwo, KatalogThree, KatalogFour, KatalogFive, KatalogSix, AksiyaButsa,AksiyaGantel,AksiyaSportivka,AksiyaSumka, NoviyKrossovka, ProductOne,ProductTwo,ProductThree} from "@/png"
import { Pagination, Stack } from '@mui/material';

export default function Home() {

  const katalogs = [
    { image: KatalogOne, title: "Тренажеры", color: "[#D3E5F2]", bg: "#D3E5F2" },
    { image: KatalogTwo, title: "Мячи", bg: "#E2C6BE" },
    { image: KatalogThree, title: "Спротивные обуви", bg: "#DADBE0" },
    { image: KatalogFour, title: "Спортивные одежды", bg: "#E2EEC0" },
    { image: KatalogFive, title: "Водный спорт", bg: "#C2BCE8" },
    { image: KatalogSix, title: "Горный спорт", bg: "#ABA520" },
  ]

  const images = [AksiyaButsa,AksiyaGantel,AksiyaSportivka,AksiyaSumka]
  const novies = [AksiyaSportivka,NoviyKrossovka,AksiyaSumka,AksiyaGantel]
  const products = [ProductOne,ProductTwo,ProductThree,ProductOne]
  const top = [AksiyaSportivka,ProductOne,ProductThree,NoviyKrossovka]
  return (
    <>
    {/* SECTION 2 STARTED */}
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
    {/* SECTION 2 ENDED */}
      
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
              images.map((item,index)=>(
                <div key={index} className="card bg-white rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                <div className="flex items-center justify-between">
                  <Image src={AksiyaLenta} alt="aksiya lenta" className="relative bottom-[25px] z-10" />
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
              novies.map((item,index)=>(
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
              products.map((item,index)=>(
              <div key={index} className="card bg-[#Fff] rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                  <i className='bx bx-heart cursor-pointer relative text-[24px] left-[254px] bottom-[15px]'></i>
                  <Image className="relative left-[20px] bottom-[10px]" src={item} alt="krosovka"/>

                <div className="title p-[20px] w-[230px] flex flex-col gap-[14px] pb-[14px]">
                  <h2 className="text-[20px] font-normal">Бутса Nike Mercurial Superfly 8 FG</h2>

                  <div className="flex flex-col">
                    <h3 className="text-[20px] text-[#1F1D14] font-[600]">250 000 uzs</h3>
                  </div>
                </div>

                <button className="flex items-center gap-[6px] active:bg-[#FBD029] transition-all duration-300 hover:bg-[#fbd129b5] bg-[#FBD029] rounded-b-[5px] py-[15px] px-[91px]"><Image src={Add} alt="add to korzinka"/>Корзина</button>
              </div>
              ))
             }

            </div>
            </div>
        </section>
        {/* SECTION-5 ENDED */}

        {/* SECTION-6 STARTED */}
        <section id="section-6" className="pb-[86px]">
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
              top.map((item,index)=>(
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
      </div>
      {/* BG WRAPPER ENDED */}
    </>
  );
}
