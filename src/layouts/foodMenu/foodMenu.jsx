import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import deleImg from '../../assets/food-1.svg';
import trailsImg from '../../assets/food-2.svg';
import { useCart } from '../../Context/CartContext';

const FoodMenu = () => {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart();
  };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = ['All', 'Swallow', 'BreakFast', 'Cereals', 'Brunch', 'Noodles', 'Beans', 'Frenchie', 'Chinese'];
  const menuItems = [
    {
      id: 1,
      image: deleImg,
      price: '3,500',
      rating: '4.3',
      name: 'DELE CANTEEN',
      description: 'Jollof Rice , Peppered Beef & Ponmo',
      tag: 'Lekki'
    },
    {
      id: 2,
      image: trailsImg,
      price: '33,500',
      rating: '4.9',
      name: 'TRAILS & MEALS',
      description: 'Jollof Rice , Peppered Beef & Ponmo',
      tag: 'Lekki'
    },
    {
      id: 3,
      image: deleImg,
      price: '500',
      rating: '4.3',
      name: 'DELE CANTEEN',
      description: 'Jollof Rice , Peppered Beef & Ponmo',
      tag: 'Lekki'
    },
  ];

  const scrollCarousel = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="mb-6">
        <button className="bg-[#635F5F] text-white px-4 py-2 rounded-full flex items-center">
          FOOD NEAR BY <ChevronDown className="ml-2" />
        </button>
      </div>
     
      <div className="flex flex-wrap text-base justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 ${
              category === 'All' ? 'rounded-sm' : 'rounded-full'
            } ${
              selectedCategory === category
                ? 'bg-[#F08F00] text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`w-full rounded-3xl ${index === currentIndex ? 'block' : 'hidden md:block'}`}
            >
              <div className="relative flex justify-center items-center">
                <img src={item.image} alt={item.name} className="h-60 object-cover rounded-3xl" />
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-[#F08F00] mr-1" />
                  <span className="text-xs whitespace-nowrap">{item.rating} (26+ Reviews)</span>
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-full">
                  <span className="font-bold">₦ {item.price}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col items-center">
                <div className="flex items-center mb-2 space-x-2">
                  <h3 className="font-medium text-xs">{item.name}</h3>
                  <span className="bg-[#D9BD8B] text-white text-xs px-2 py-1 rounded-full">{item.tag}</span>
                </div>
                <p className="text-gray-600 text-xs mb-4 text-center">{item.description}</p>
                <button onClick={handleAddToCart} className="bg-[#F08F00] text-white py-2 px-4 rounded-full hover:bg-[#E07F00] text-sm">
                  <span className="text-lg mr-1">+</span> Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => scrollCarousel('left')} 
          className="absolute left-0 top-1/3 transform -translate-y-1/2 bg-[#635F5F] rounded-full p-2 shadow-lg md:left-[-1rem]"
        >
          <ChevronLeft className="w-6 h-6 text-[#FFFFFF]" />
        </button>
        <button 
          onClick={() => scrollCarousel('right')} 
          className="absolute right-0 top-1/3 transform -translate-y-1/2 bg-[#635F5F] rounded-full p-2 shadow-lg md:right-[-1rem]"
        >
          <ChevronRight className="w-6 h-6 text-[#FFFFFF]" />
        </button>
      </div>
    </div>
  );
};

export default FoodMenu;