'use client';
import { useRouter } from 'next/navigation';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { Board, AksiyaLenta, NoviyLenta, TopLenta, Add } from "@/svg"
import { AksiyaSportivka, AksiyaGantel, ProductThree, AksiyaButsa, ProductOne, ProductTwo } from "@/png"
import HomePageNavButton from '@/components/UI/HomePageNavButton';
import Image from 'next/image';

const index = () => {
  const router = useRouter()

  const info = [
    { image: AksiyaSportivka },
    { image: AksiyaSportivka, lenta: AksiyaLenta },
    { image: AksiyaSportivka },
    { image: AksiyaGantel, lenta: AksiyaLenta },
    { image: AksiyaSportivka },
    { image: AksiyaGantel, lenta: NoviyLenta },
    { image: AksiyaSportivka },
    { image: ProductThree, lenta: TopLenta },
    { image: AksiyaSportivka },
    { image: AksiyaGantel, lenta: AksiyaLenta },
    { image: AksiyaButsa, lenta: TopLenta },
    { image: AksiyaSportivka, lenta: AksiyaLenta },
    { image: ProductOne, lenta: TopLenta },
    { image: AksiyaSportivka },
    { image: AksiyaGantel, lenta: NoviyLenta }
  ]

  const handleNavigate = () =>{
    router.push('/single');
  }

  const recomendations = [ProductOne, ProductTwo, ProductThree, ProductOne]

  return (
    <div className="bg-[#F2F2F2] pt-[20px] sm:t-[10px] sm:pb-[100px] pb-[208px]">
      <div className="container sm:p-[20px]">
        <div className="flex items-center sm:gap-[5px] gap-[11px] mb-[20px]">
          <HomePageNavButton/>

          <div className="flex items-center gap-[5px]">
            <i className='bx text-[20px] sm:text-[14px] text-[#000] opacity-[0.6] bx-chevron-right'></i>
            <h3 className="cursor-pointer text-[16px] sm:text-[12px]">Продукты</h3>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div className="left relative sm:hidden bottom-[7px]">
            <div className="flex relative top-[7px] z-30 flex-col gap-[16px] price-regular pt-[19px] pb-[38px] px-[18px] w-[292px] h-[522px] bg-[#fff] rounded-[8px]">
            <h3 className='text-[16px] font-[400] mb-[4px]'>Филтрь</h3>

            <small className='text-[12px] mb-[-6px] inline-block font-[400]'>Цена</small>

            <div className='h-[82px] w-[256px] bg-[#F2F2F2] rounded-[8px]'>

            </div>
          

            <small className='text-[12px] mb-[-6px] inline-block font-[400]'>Артикул:</small>
             <input type="text" placeholder='аф566' className='py-[8px] px-[18px] rounded-[5px] bg-[#F2F2F2] outline-none border-[1px] border-[#a09e9e] w-[256px]' />
        

            <small className='text-[12px] mb-[-6px] inline-block font-[400]'>Выберите категорию:</small>

            <FormControl sx={{ minWidth: 150, background: "#F2F2F2" }} size="small">
              <InputLabel id="demo-select-small-label">Все</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Все"
              >
                <MenuItem value={"sport"}>Nimadir</MenuItem>
                <MenuItem value={"classic"}>Nimadir</MenuItem>
                <MenuItem value={"oversizw"}>Nimadir</MenuItem>
              </Select>
            </FormControl>

            <small className='text-[12px] mb-[-6px] inline-block font-[400]'>Новинка:</small>
            <FormControl sx={{ minWidth: 150, background: "#F2F2F2" }} size="small">
              <InputLabel id="demo-select-small-label">Все</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Все"
              >
                <MenuItem value={"sport"}>Nimadir</MenuItem>
                <MenuItem value={"classic"}>Nimadir</MenuItem>
                <MenuItem value={"oversizw"}>Nimadir</MenuItem>
              </Select>
            </FormControl>


             <small className='text-[12px] mb-[-6px] inline-block font-[400]'>Акция:</small>
            <FormControl sx={{ minWidth: 150, background: "#F2F2F2" }} size="small">
              <InputLabel id="demo-select-small-label">Все</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Все"
              >
                <MenuItem value={"sport"}>Nimadir</MenuItem>
                <MenuItem value={"classic"}>Nimadir</MenuItem>
                <MenuItem value={"oversizw"}>Nimadir</MenuItem>
              </Select>
            </FormControl>
            
          
          </div>

          <button className='px-[74px] hover:bg-[#e4e4e4c7] transition-all duration-200 active:bg-[#E4E4E4] py-[21px] bg-[#E4E4E4] rounded-[8px]'>Показать результат</button>
          </div>

          <div className='right'>
            <div className="flex items-center gap-[404px] justify-between sm:mb-[40px] mb-[10px]">
              <div className="flex items-center gap-[25px] sm:gap-[10px]">
                <FormControl sx={{ minWidth: 150, background: "#ffff" }} size="small">
                  <InputLabel id="demo-select-small-label">Сортировать</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Сортировать"
                  >
                    <MenuItem value={"sport"}>Sport</MenuItem>
                    <MenuItem value={"classic"}>Classic</MenuItem>
                    <MenuItem value={"oversizw"}>Oversize</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 155, background: "#ffff" }} size="small">
                  <InputLabel id="demo-select-small-label">Все продукты</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Все продукты"
                  >
                    <MenuItem value={"sport"}>Nimadir</MenuItem>
                    <MenuItem value={"classic"}>Nimadir</MenuItem>
                    <MenuItem value={"oversizw"}>Nimadir</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="flex items-center gap-[8px] sm:hidden">
                <div className="flex items-center gap-[10px] cursor-pointer py-[7px] px-[15px] bg-[#fff] rounded-[5px]">
                  <h3 className='text-[16px] font-[400]'>Кард</h3>
                  <Image src={Board} alt="card image" />
                </div>

                <div className="flex items-center gap-[12px] cursor-pointer py-[7px] px-[15px] bg-[#fff] rounded-[5px]">
                  <h3 className='text-[16px] font-[400]'>Лист</h3>
                  <i className='bx bx-list-ul' ></i>
                </div>
              </div>
            </div>

            <div className="flex w-[924px] sm:w-[350px] flex-wrap sm:justify-center items-center justify-between gap-x-[24px] gap-y-[40px] mb-[111px] sm:mb-[70px]">
              {
                info.map((item, index) => (
                  <div key={index} onClick={handleNavigate} className="card bg-[#Fff] rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                    <i className='bx bx-heart cursor-pointer relative text-[24px] left-[254px] bottom-[15px]'></i>
                    <Image className="relative cursor-pointer hover:scale-[1.1] transition-all duration-200 left-[20px] bottom-[10px]" src={item.image} alt="products image" />

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

              <button className='py-[15px] sm:w-[300px] sm:text-[16px] w-[924px] bg-[#fff] rounded-[5px] transition-all duration-200 active:bg-[#fff] hover:bg-[#ffffffa6] text-[20px]'>Показать ещё</button>
            </div>
          </div>
        </div>

        <h2 className='text-[32px] font-[500] text-[#1F1D14)] sm:text-[20px] sm:ml-[25px] sm:mb-[30px] mb-[60px]'>Реконмендуемые продукты</h2>

        <div className="flex items-center flex-wrap sm:gap-[20px] sm:justify-center justify-between">
          {
            recomendations.map((item, index) => (
              <div key={index} className="card bg-[#Fff] rounded-[5px] w-[292px] pt-[25px] flex flex-col">
                <i className='bx bx-heart cursor-pointer relative text-[24px] left-[254px] bottom-[15px]'></i>
                <Image className="relative cursor-pointer hover:scale-[1.1] transition-all duration-200 left-[20px] bottom-[10px]" src={item} alt="recomendation product" />

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
    </div>
  )
}

export default index
