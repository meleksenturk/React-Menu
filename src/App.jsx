import { useEffect, useState } from 'react';
import data from './data';
import MenuItem from './components/MenuItem';
import './css/appStyle.css'

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [currentCategory, setCurrentCategory] = useState("all");
  
  // console.log(menuItems);
  // console.log(currentCategory);



  useEffect(() => {

    newItemList();
    // console.log("current category", currentCategory);
  }, [currentCategory])

 

  const newItemList = () => { 
    if (currentCategory === "all") {
      return menuItems;
    }
    else {
      const filterMenu = menuItems.filter((item) => item.category === currentCategory);
      setMenuItems(filterMenu);
      // console.log("menu items", menuItems);
    }
  }


  const setCategory = (category) => {
    setCurrentCategory(category);
    setMenuItems(data);
  }


  return (
    <div>
      <div className='mainTitle'>
        <h3>OUR MENU</h3>
        <hr />
        <h2>{currentCategory}</h2>
      </div>
      <div className='categories'>
        <div className='category-items'>
          <button onClick={() => setCategory("all")}>All</button>
          <button onClick={() => setCategory("breakfast")}>Breakfast</button>
          <button onClick={() => setCategory("lunch")}>Lunch</button>
          <button onClick={() => setCategory("shakes")}>Shakes</button>
        </div>

      </div>
      <div className='item-list'>
        {menuItems.map((item) => {
          return (<MenuItem key={item.id} {...item} />)
        })}
      </div>

    </div>
  );
};
export default App;
