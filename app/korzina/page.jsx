import HomePageNavButton from '@/components/UI/HomePageNavButton';
import Image from 'next/image';
import { GantelKorzina, SumkaKorzina, SportivkaKorzina, QolKorzina } from '@/png';
import { Click,Payme } from '@/svg';

const page = () => {
  const info = [
    {image: GantelKorzina,name: "Гантель виниловая, 2 х 3 кг Гантель",price:"300 000"},
    {image: SumkaKorzina,name: "Гантель виниловая, 2 х 3 кг Гантель",price:"220 000"},
    {image: SportivkaKorzina,name: "Гантель виниловая, 2 х 3 кг Гантель",price:"1500 000"},
    {image: QolKorzina,name: "Гантель виниловая, 2 х 3 кг Гантель",price:"30 000"},
  ]
  return (
    <div className="bg-[#F2F2F2] pt-[15px] pb-[208px] sm:pb-[100px]">
      <div className="container sm:p-[20px]">
        <div className="flex items-center sm:gap-[5px] gap-[11px] mb-[15px]">
          <HomePageNavButton />

          <div className="flex items-center gap-[5px]">
            <i className='bx text-[20px] sm:text-[14px] text-[#000] opacity-[0.6] bx-chevron-right'></i>
            <h3 className="cursor-pointer sm:text-[12px] text-[16px]">Корзина</h3>
          </div>
        </div>

        <div className="flex sm:flex-col items-start gap-[24px]">
          <div className="card pt-[20px] pl-[32px] sm:pt-[10px] sm:pl-[20px] sm:w-full sm:h-[640px] w-[713px] h-[893px] bg-[#fff] rounded-[5px] pr-[26px] pb-[65px]">
            <div className="flex items-center sm:justify-normal gap-[100px] justify-between mb-[15px]">
              <h3 className='text-[24px] sm:text-[16px] font-[500]'>Ваша корзина</h3>

              <p className='cursor-pointer text-[10px] text-[#FF1313] font-[400]'>Очистить все</p>
            </div>

            <div className="flex sm:justify-center flex-col gap-[10px] sm:mb-[23px] mb-[63px]">
            {
              info.map((item,index)=>(
                  <div key={index} className="flex items-start justify-between sm:pt-[10px] p-[10px] bg-[#F2F2F2] w-[655px] sm:w-full sm:h-[100px] h-[140px] rounded-[5px]">
                    <div className='flex items-start gap-[22px]'>
                      <Image className='hover:scale-[1.1] mt-[10px] flex justify-center transition-all w-[100px] duration-200 cursor-pointer' src={item.image} alt="image" loading='lazy' />

                      <div className="flex flex-col w-[282px] sm:w-full sm:gap-[10px] gap-[25px]">
                        <h2 className='text-[#1F1D14)] text-[20px] sm:text-[11px] font-[400] leading-normal'>{item.name}</h2>

                        <div className="flex items-center sm:gap-[10px] gap-[40px]">
                          <div className="flex items-center sm:gap-[5px] gap-[9px]">
                            <button className='rounded-[50%] bg-[#fff] sm:text-[12px] text-[16px] sm:px-[10px] sm:py-[2px] px-[12px] py-[4px]'>-</button>
                            <h2 className='text-[17px] sm:text-[12px] font-[400]'>1</h2>
                            <button className='rounded-[50%] bg-[#fff] sm:text-[12px] text-[16px] sm:px-[10px] sm:py-[2px] px-[12px] py-[4px]'>+</button>
                          </div>

                          <div className="flex items-center sm:gap-[0px] gap-[5px]">
                            <h2 className='text-[22px] sm:text-[12px] sm:font-[500] font-[700]'>{item.price}</h2>
                            <p className='text-[16px] text-[#1F1D14] sm:text-[10px] font-[400]'>uzs</p>
                          </div>
                        </div>
                      </div>
                      <i className='bx bx-trash rounded-[50%] text-[12px] cursor-pointer sm:left-[3px] sm:bottom-[3px] relative left-[180px] bg-[#fff] text-[#FF5555] sm:px-[4px] sm:py-[3px] px-[8px] py-[6px]'></i>
                    </div>
              </div>
              ))
            }
            </div>

            <h2 className='text-[#06F] cursor-pointer mb-[18px] inline-block text-[20px] sm:text-[16px] font-[400] border-b-[1px] border-b-[#06F]'>Все информация о доставке</h2>

            <h3 className='w-[385px] text-[20px] font-[400] sm:w-[280px] leading-normal sm:text-[14px]'>Если у вас имеется вопросы позаоните по номеру: <small className='inline-block text-[#06F] sm:text-[16px] text-[20px] font-[400]'><small className='text-[16px] sm:text-[12px] inline-block'>+998</small> (99) <bold className="inline-block font-[500]">995 55 65</bold> </small></h3>
          </div>

          <div className="card sm:w-full sm:py-[20px] sm:pr-[15px] sm:pl-[20px] py-[40px] pl-[40px] pr-[32px] bg-[#fff] rounded-[5px] sm:h-[860px] w-[504px] h-[933px]">
              <h2 className='text-[#1F1D14] sm:text-[16px] text-[20px] font-[500] mb-[15px]'>Итого</h2>

              <div className="flex items-center justify-between mb-[20px]">
                <div className="flex text-[#1F1D14] flex-col gap-[5px]">
                  <h2 className='text-[20px] sm:text-[16px] font-[400]'>Кол-во товаров:</h2>
                  <h2 className='text-[24px] sm:text-[20px] font-[500]'>4</h2>
                </div>

                <div className="flex text-[#1F1D14] flex-col gap-[5px]">
                  <h2 className='text-[20px] font-[400] sm:text-[16px]'>Сумма:</h2>
                  <div className="flex items-center gap-[5px]">
                  <h2 className='text-[24px] sm:text-[20px] font-[500]'>250 000</h2>
                  <h2 className='text-[16px] font-[400] relative top-[3px]'>uzs</h2>
                  </div>
                </div>
              </div>

              <h2 className='text-[#1F1D14] sm:text-[16px] text-[20px] font-[500] mb-[24px]'>Ваши данные</h2>

              <div className='h-[316px] sm:w-full bg-[#cccccc84] rounded-[5px] w-[414px]'>

              </div>

              <h2 className='text-[#1F1D14] sm:text-[16px] text-[20px] font-[500] mb-[21px] mt-[40px]'>Тип оплаты</h2>

              <div className="flex items-center flex-wrap gap-[12px] sm:mb-[30px] mb-[40px]">
                <div className='py-[17px] px-[25px] w-[130px] h-[72px] bg-[#F2F2F2] rounded-[8px]'>
                  <Image src={Click} alt="click"/>
                </div>

                <div className='py-[17px] px-[25px] w-[130px] h-[72px] bg-[#F2F2F2] rounded-[8px]'>
                  <Image src={Payme} alt="payme"/>
                </div>

                <div className='px-[17px] py-[25px] w-[130px] h-[72px] bg-[#F2F2F2] rounded-[8px]'>
                  <h2 className='text-[#1F1D14] sm:text-[14px] text-[16px] font-[500]'>Через карту</h2>
                </div>

                <div className='px-[16px] py-[18px] w-[130px] h-[72px] bg-[#F2F2F2] rounded-[8px]'>
                  <h2 className='text-[#1F1D14] sm:text-[14px] text-[16px] font-[500] text-center'>Банковский счёт</h2>
                </div>
              </div>  


              <button className='py-[15px] sm:py-[10px] sm:h-[60px] sm:text-[18px] px-[30px] sm:w-full w-[424px] h-[74px] bg-[#FBD029] rounded-[5px] text-[#1F1D14] text-[24px] font-[500] transition-all duration-300 active:bg-[#FBD029] hover:bg-[#fbd129c2]'>Купить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
