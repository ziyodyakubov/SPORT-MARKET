import HomePageNavButton from '@/components/UI/HomePageNavButton';
import Image from 'next/image';
import { GantelKorzina, SumkaKorzina, SportivkaKorzina, QolKorzina } from '@/png';

const page = () => {
  const info = [
    {image: GantelKorzina,name: "Гантель виниловая, 2 х 3 кг Гантель",price:"300 000"},
    {image: SumkaKorzina,name: "Гантель виниловая, 2 х 3 кг Гантель",price:"220 000"},
    {image: SportivkaKorzina,name: "Гантель виниловая, 2 х 3 кг Гантель",price:"1500 000"},
    {image: QolKorzina,name: "Гантель виниловая, 2 х 3 кг Гантель",price:"30 000"},
  ]
  return (
    <div className="bg-[#F2F2F2] pt-[15px] pb-[208px]">
      <div className="container">
        <div className="flex items-center gap-[11px] mb-[15px]">
          <HomePageNavButton />

          <div className="flex items-center gap-[5px]">
            <i className='bx text-[20px] text-[#000] opacity-[0.6] bx-chevron-right'></i>
            <h3 className="cursor-pointer text-[16px]">Корзина</h3>
          </div>
        </div>

        <div className="flex items-start gap-[24px]">
          <div className="card pt-[20px] pl-[32px] w-[713px] h-[893px] bg-[#fff] rounded-[5px] pr-[26px] pb-[65px]">
            <div className="flex items-center justify-between mb-[15px]">
              <h3 className='text-[24px] font-[500]'>Ваша корзина</h3>

              <p className='cursor-pointer text-[12px] text-[#FF1313] font-[400]'>Очистить все</p>
            </div>

            <div className="flex flex-col gap-[10px] mb-[63px]">
            {
              info.map((item,index)=>(
                  <div className="flex items-start justify-between p-[10px] bg-[#F2F2F2] w-[655px] h-[140px] rounded-[5px]">
                    <div key={index} className='flex items-start gap-[22px]'>
                      <Image src={item.image} alt="gantel single" loading='lazy' />

                      <div className="flex flex-col w-[282px] gap-[25px]">
                        <h2 className='text-[#1F1D14)] text-[20px] font-[400] leading-normal'>{item.name}</h2>

                        <div className="flex items-center gap-[40px]">
                          <div className="flex items-center gap-[9px]">
                            <button className='rounded-[50%] bg-[#fff] text-[16px] px-[12px] py-[4px]'>-</button>
                            <h2 className='text-[17px] font-[400]'>1</h2>
                            <button className='rounded-[50%] bg-[#fff] text-[16px] px-[12px] py-[4px]'>+</button>
                          </div>

                          <div className="flex items-center gap-[5px]">
                            <h2 className='text-[22px] font-[700]'>{item.price}</h2>
                            <p className='text-[16px] text-[#1F1D14] fnot-[400]'>uzs</p>
                          </div>
                        </div>
                      </div>
                      <i className='bx bx-trash rounded-[50%] cursor-pointer relative left-[130px] bg-[#fff] text-[#FF5555] px-[8px] py-[6px]'></i>
                    </div>
              </div>
              ))
            }
            </div>

            <h2 className='text-[#06F] cursor-pointer mb-[18px] inline-block text-[20px] font-[400] border-b-[1px] border-b-[#06F]'>Все информация о доставке</h2>

            <h3 className='w-[385px] text-[20px] font-[400] leading-normal'>Если у вас имеется вопросы позаоните по номеру: <small className='inline-block text-[#06F] text-[20px] font-[400]'><small className='text-[16px] inline-block'>+998</small> (99) <bold className="inline-block font-[500]">995 55 65</bold> </small></h3>
          </div>

          <div className="card py-[40px] pl-[40px] pr-[32px] bg-[#fff] rounded-[5px] w-[504px] h-[933px]">
              <h2 className='text-[#1F1D14] text-[20px] font-[500] mb-[15px]'>Итого</h2>

              <div className="flex items-center justify-between mb-[40px]">
                <div className="flex text-[#1F1D14] flex-col gap-[5px]">
                  <h2 className='text-[20px] font-[400]'>Кол-во товаров:</h2>
                  <h2 className='text-[24px] font-[500]'>4</h2>
                </div>

                <div className="flex text-[#1F1D14] flex-col gap-[5px]">
                  <h2 className='text-[20px] font-[400]'>Сумма:</h2>
                  <div className="flex items-center gap-[5px]">
                  <h2 className='text-[24px] font-[500]'>250 000</h2>
                  <h2 className='text-[16px] font-[400] relative top-[3px]'>uzs</h2>
                  </div>
                </div>
              </div>

              <h2 className='text-[#1F1D14] text-[20px] font-[500] mb-[24px]'>Ваши данные</h2>

              
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
