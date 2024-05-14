import React from 'react';
import { Food, Learn, Pho, Vietnam, flagvi } from '../assets/img/Image';
import SwiperCarousel from './Carousel';

interface AsianProps {
  country: string;
}

const Asian: React.FC<AsianProps> = ({ country }) => {
  let countryInfo: JSX.Element | null = null;

  switch (country) {
    case 'Vietnam':
      countryInfo = (
        <div>
          <div className='mt-10 justify-center gap-x-5 flex items-center'>
          <h2 className='text-6xl'>Welcome to Vietnam</h2>
          <img className='w-16' src={flagvi}></img>
        </div>
        <div className='mt-5 flex items-center'>
          <p>
          <span className='text-3xl font-neon font-semibold text-red-500 uppercase'>Vietnam</span> officially the <i className='text-xl font-medium underline'>Socialist Republic of Vietnam</i>, 
          is a country at the eastern edge of mainland <b className='text-yellow-700 text-lg'>Southeast Asia</b>, with an area of about 331,000 
          square kilometres (128,000 sq mi) and a <span className='text-cyan-900 font-medium text-lg'>population of over 100 million</span>, making it the world's fifteenth-most populous country. 
          Vietnam shares land borders with China to the north, and Laos and Cambodia to the west. It shares maritime borders with Thailand through the Gulf of 
          Thailand, and the Philippines, Indonesia, and Malaysia through the South China Sea. Its capital is Hanoi and its largest city is
          <b className='text-orange-800 text-lg'> Ho Chi Minh City </b> 
          (commonly referred to by its former name, <b className='text-orange-800 text-lg'>Saigon</b>).
          </p>
          <img src={Vietnam}></img>
        </div>
        <div className='mt-8'>
            <div className='items-center justify-center uppercase font-semibold text-lg flex'>
                <p>
                Before going to a certain country, we must learn about that country's culture
                </p>
                <img className='w-1/12' src={Learn}></img>
            </div>
            <div>
                <h2 className='text-3xl mt-3 font-bold text-cyan-600'>
                    Traditional Cultures
                </h2>
                <p className='my-2'>
                    Vietnam is a country with a diverse traditional culture in the world. Vietnam has 54 ethnic groups but most of them share the same culture. 
                    They always have a strong patriotic spirit. And always remember that "Gratitude is the sign of noble souls."
                </p>
                <p>
                    And now we will go deeper into their traditional cultures:
                </p>
                <div className='mt-6'>
                    <div className='flex items-center'>
                        <h2 className='text-2xl'>Traditional food</h2>
                        <img className=' w-16' src={Food}></img>
                    </div>
                    <div className='mt-8'>
                        <SwiperCarousel>
                            <div className='gap-x-5'>
                                <img className='' src={Pho}></img>
                                <h2 className='font-semibold text-5xl uppercase text-purple-600'>Pho</h2>
                                <p>
                                Pho is a delicious dish that receives praise from many diners both domestically and internationally. 
                                It is very popular throughout the territory of Vietnam, so it's easy to come across. Prices vary depending on the region but are 
                                still affordable for enjoyment. Be sure to try it at least once!
                                </p>
                            </div>
                            <div className='gap-x-5'>
                                <img className='' src={Pho}></img>
                                <h2 className='font-semibold text-5xl uppercase text-purple-600'>Pho</h2>
                                <p>
                                Pho is a delicious dish that receives praise from many diners both domestically and internationally. 
                                It is very popular throughout the territory of Vietnam, so it's easy to come across. Prices vary depending on the region but are 
                                still affordable for enjoyment. Be sure to try it at least once!
                                </p>
                            </div>
                            <div className='gap-x-5'>
                                <img className='' src={Pho}></img>
                                <h2 className='font-semibold text-5xl uppercase text-purple-600'>Pho</h2>
                                <p>
                                Pho is a delicious dish that receives praise from many diners both domestically and internationally. 
                                It is very popular throughout the territory of Vietnam, so it's easy to come across. Prices vary depending on the region but are 
                                still affordable for enjoyment. Be sure to try it at least once!
                                </p>
                            </div>
                        </SwiperCarousel>
                    </div>
                </div>
            </div>
        </div>
        </div>
      );
      break;
    case 'Laos':
      countryInfo = (
        <div>
          <h2>Laos</h2>
        </div>
      );
      break;
    case 'Thailand':
      countryInfo = (
        <div>
          <h2>Thailand</h2>
        </div>
      );
      break;
    default:
      break;
  }

  return <div>{countryInfo}</div>;
};

export default Asian;
