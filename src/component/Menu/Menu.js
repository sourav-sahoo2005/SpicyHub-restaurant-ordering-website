import React, { useRef, useState } from 'react'
import './Menu.css';
import Menuitems from '../Menuitem/Menuitems';
import items from '../Menulist';
import Footer from '../Footer/Footer';

export default function Menu({ onAddToCart, handlePopup, popupmsg }) {
  const [category, setCategory] = useState('All');

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 400;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 400;
  };


  return (
    <div className='menu'>
      <div className='menu_intro'>
        <h1>Welcome to Our Restaurant</h1>
        <p>Explore our delicious menu and find your favorite dishes.</p>
      </div>
      <div className='categoryHead'>
        <h1 id='menu_heading'>Category</h1>
        <div className='scroll_btn'>
          <button id="scroll_left" onClick={scrollLeft}></button>
          <button id="scroll_right" onClick={scrollRight}></button>
        </div>
      </div>
      <div className='category_item' ref={containerRef}>

        <div onClick={() => setCategory('All')} className='category_list'>
          <div id='all'></div>
          <span className='category_name'>All</span>
        </div>
        <div onClick={() => setCategory('Veg')} className='category_list'>
          <div id='veg'></div>
          <span className='category_name'>Veg</span>
        </div>
        <div onClick={() => setCategory('Nonveg')} className='category_list'>
          <div id="nonveg"></div>
          <span className='category_name'>Non Veg</span>
        </div>
        <div onClick={() => setCategory('Biryani')} className='category_list'>
          <div id="biryani"></div>
          <span className='category_name'>Biryani</span>
        </div>
        <div onClick={() => setCategory('Starter')} className='category_list'>
          <div id="starter"></div>
          <span className='category_name'>Starter</span>
        </div>
        <div onClick={() => setCategory('Mutton')} className='category_list'>
          <div id="mutton"></div>
          <span className='category_name'>Mutton</span>
        </div>
        <div onClick={() => setCategory('Chicken')} className='category_list'>
          <div id="chicken"></div>
          <span className='category_name'>Chicken</span>
        </div>
        <div onClick={() => setCategory('Paneer')} className='category_list'>
          <div id="paneer"></div>
          <span className='category_name'>Paneer</span>
        </div>
        <div onClick={() => setCategory('Curry')} className='category_list'>
          <div id="curry"></div>
          <span className='category_name'>Curry</span>
        </div>
        <div onClick={() => setCategory('Chinese')} className='category_list'>
          <div id="chinese"></div>
          <span className='category_name'>Chinese</span>
        </div>
        <div onClick={() => setCategory('Egg')} className='category_list'>
          <div id="egg"></div>
          <span className='category_name'>Egg</span>
        </div>
      </div>


      <h1 id='menu_heading'>{category + " items"}</h1>

      <div className='menu_items'>

        {items.filter(item => category === 'all' || item.category.includes(category)).map((item, index) => (
          <Menuitems
            popupmsg={popupmsg}
            handlePopup={handlePopup}
            onAddToCart={onAddToCart}
            key={index}
            item={item}
          />
        ))}
      </div>

      <Footer />
    </div>
  )
}
