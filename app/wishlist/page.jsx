'use client';

import { useRouter } from 'next/navigation';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { Board, AksiyaLenta, NoviyLenta, TopLenta, Add } from "@/public/assets/images/svg";
import { AksiyaSportivka, AksiyaGantel, ProductThree, AksiyaButsa, ProductOne, ProductTwo } from "@/public/assets/images/png";
import HomePageNavButton from '@/components/UI/HomePageNavButton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {add} from "@/service/basket.service"
import { get,like,unlike } from '@/service/wishlist.service';
import Notification from '@/utils/notification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleNavigate = (id) => {
    router.push(`/single/${id}`);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await get();
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    };

    getProducts();
  }, []);

    const toggleFavorite = async (index, id) => {
    const isFavorite = favorites[index];
    let response;

  try {
    setFavorites((prevFavorites) => {
      const newFavorites = {
        ...prevFavorites,
        [index]: !isFavorite,
      };
      const newFavoriteCount = Object.values(newFavorites).filter(Boolean).length;
      setFavoriteCount(newFavoriteCount);
      return newFavorites;
    });

    if (isFavorite) {
      response = await unlike(id);
      if (response) {
        console.log(response)
        Notification({
          title: "Added wishlist",
          type: "success",
        });
      }} else {
      response = await like(id);
      if (response.status === 200 || response.status === 201) {
        Notification({
          title: "Removed from wishlist",
          type: "success",
        });
      } else {
        throw new Error("Failed to add to wishlist");
      }
    }

  } catch (error) {
    setFavorites((prevFavorites) => {
      const newFavorites = {
        ...prevFavorites,
        [index]: isFavorite,
      };
      const newFavoriteCount = Object.values(newFavorites).filter(Boolean).length;
      setFavoriteCount(newFavoriteCount);
      return newFavorites;
    });

    Notification({
      title: error.message,
      type: "error",
    });
  }
};

  const addToBasket = async (id) => {
  try {
    const payload = { productId: id };

    const response = await add(payload);

    if (response.status === 200 || response.status === 201) {
      Notification({
        title: "Added to basket",
        type: "success",
      });
    } 
  } catch (error) {
    console.log(error);
    Notification({
      title: "Failed to add to basket",
      type: "error",
    });
  }
};


  return (
    <>
      <ToastContainer />
      <div className="bg-[#F2F2F2] pt-[20px] sm:t-[10px] sm:pb-[100px] pb-[28px]">
        <div className="container sm:p-[20px]">
          <div className="flex items-center sm:gap-[5px] gap-[11px] mb-[20px]">
            <HomePageNavButton />

            <div className="flex items-center gap-[5px]">
              <i className='bx text-[20px] sm:text-[14px] text-[#000] opacity-[0.6] bx-chevron-right'></i>
              <h3 className="cursor-pointer text-[16px] sm:text-[12px]">Мои желания</h3>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div className='right'>

              <div className="flex w-full sm:w-[350px] flex-wrap sm:justify-center items-center gap-x-[24px] gap-y-[40px] mb-[111px] sm:mb-[70px]">
                {products && products.map((item, index) => (
                  <div key={item.product_id} className="card bg-[#Fff] rounded-[5px] w-[292px] h-[416px] pt-[25px] flex flex-col">
                    <i
                      className={`bx bx-heart cursor-pointer relative text-[24px] left-[254px] bottom-[15px] ${favorites[index] ? '' : 'text-red-500'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(index, item.product_id);
                      }}
                    ></i>
                    <Image onClick={()=>handleNavigate(item.product_id)} className="relative cursor-pointer hover:scale-[1.04] transition-all duration-200 left-[20px] h-[205px] w-[240px] bottom-[10px]" width={292} height={92} src={item.image_url[0]} alt="products image" />

                    <div onClick={()=>handleNavigate(item.product_id)} className="title p-[20px] w-[230px] flex flex-col gap-[14px] pb-[14px]">
                      <h2 className="text-[20px] font-normal">{item.product_name.length > 10 ? item.product_name.substring(0,16) + "..." : item.product_name}</h2>

                      <div className="flex flex-col">
                        <h3 className="text-[20px] text-[#1F1D14] font-[600]">{item.cost} uzs</h3>
                      </div>
                    </div>

                    <button onClick={(e)=>{
                      e.stopPropagation();
                      addToBasket(item.product_id)
                    }} className="flex items-center gap-[6px] active:bg-[#FBD029] transition-all duration-300 hover:bg-[#fbd129b5] bg-[#FBD029] rounded-b-[5px] py-[15px] px-[91px]"><Image src={Add} alt="add to korzinka" />Корзина</button>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomePage;
