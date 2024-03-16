

import { useEffect, useState } from 'react'
import './App.css'

import Header from './header'
import EachRecipe from './EachRecipe';

// import { toast } from 'react-toastify'; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  const [recipes,setRecipes]=useState([]);
  const [cart,setCart] = useState([]);
  const [count, setCount] = useState(1);

  // const notify = () => toast("Wow so easy!");


  useEffect(() => {
    fetch("./recipe.json")
    .then((res) => res.json())
    .then((data) => {setRecipes(data)
    });

  },[]);
  
  const handleCart = (r) => {
    const isExist= cart.find(rcp => rcp.recipe_id == r.recipe_id);
    if(!isExist)
    {
      // setCart([...cart,r]);
      const updatedRecipe = { ...r, count }; // Add count to the recipe object
      setCart([...cart, updatedRecipe]);
  
      setCount(count + 1);
    }
    else{
      toast.error("Recipe already in cart");
    }
  };


  return (
    <div className='font'>
          <Header></Header>
              <h1>Our Recipes</h1>
              <p className='text-center'>Satisfying and hearty dishes that will be the centerpiece of your dining experience, offering a burst of flavors and textures.</p>
          <div className="mainContainer container mx-auto flex">
            
              
              <div className="cardsContainer grid grid-cols-2 w-2/3 gap-7">
                {
                    recipes.map((rcp) =>(
                      <EachRecipe key={rcp.id} useRecipe={rcp} handleCart={handleCart} count={count} />

                    ))
                }
                  
              </div>
              <div>
              <h2>Cart Info</h2>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr className='text-xl'>
                        <th className='w-[5%]'></th>
                        
                        <th className='w-[20%] '>Name</th>
                        <th className='w-[20%]'>Time</th>
                        <th className='w-[50%]'>Calories</th>
                      </tr>
                    </thead>
                  </table>
                  
                </div>  
                <div>
                  <table>
                  
                  
                  {cart.map((item, index) => (
                    
                <tr key={index}>
                  <td className='w-[10%]'>{item.count}</td>
                  <td className='w-[20%] py-4'>{item.recipe_name}</td>
                  <td className='w-[25%]'>{item.preparing_time}</td>
                  <td className='w-[20%]'>{item.calories}</td>
                  <button className='px-4 py-2 mt-5 bg-[#0BE58A] rounded-3xl'>Preparing</button>
                </tr>
                
              ))}

                  </table>
                  <hr></hr>
                

                </div>

              </div>

            
            
           
              
            
            
      </div>
        <ToastContainer />
    </div>
  )
}

export default App
