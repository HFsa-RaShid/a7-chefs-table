

import { useEffect, useState } from 'react'
import './App.css'

import Header from './header'
import EachRecipe from './EachRecipe';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  const [recipes,setRecipes]=useState([]);
  const [cart,setCart] = useState([]);
  const [count, setCount] = useState(1);
  const [cooking, setCooking] = useState([]);
  const [Currentlycount, setCurrentlyCount] = useState(0);



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
      const updatedRecipe = { ...r, count };
      setCart([...cart, updatedRecipe]);
  
      setCount(count + 1);
    }
    else{
      toast.error("Recipe already in cart");
    }
  };

  const handlePrepare = (recipe) => {
    // Remove the recipe from the cart
    const updatedCart = cart.filter(item => item.recipe_id !== recipe.recipe_id);
    setCart(updatedCart);
    
    // Add to cooking
    const updatedCooking = [...cooking, recipe];
    setCooking(updatedCooking);

    setCurrentlyCount(Currentlycount + 1);

    setCount(count - 1);
  };


  return (
    <body>
          <Header></Header>
              <div className='w-[350px] lg:w-[600px] mx-auto mb-12'>
              <h1 className='text-center mt-20 mb-5 text-3xl lg:text-[40px] font-semibold'>Our Recipes</h1>
              <p className='text-center text-[#878787]'>Satisfying and hearty dishes that will be the centerpiece of your dining experience, offering a burst of flavors and textures.</p>
              </div>
          <div className="mainContainer container mx-auto lg:flex">
            
              
              <div className="cardsContainer grid grid-cols-1 lg:grid-cols-2  w-full lg:w-2/3 gap-7">
                {
                    recipes.map((rcp) =>(
                      <EachRecipe key={rcp.id} useRecipe={rcp} handleCart={handleCart} count={count} />

                    ))
                }
                  
              </div>
              <div className='border p-10 rounded-2xl'>

                {/* want to cook */}
                  <h2 className=' mb-5 text-center text-2xl font-semibold'>Want to cook:  <span>{count-1}</span></h2>
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
                        <td className='w-[10%] '>{item.count}</td>
                        <td className='w-[20%] py-4 '>{item.recipe_name}</td>
                        <td className='w-[25%] '>{item.preparing_time}</td>
                        <td className='w-[20%] '>{item.calories}</td>
                        <button className='px-4 py-2 mt-5 bg-[#0BE58A] border-none rounded-3xl' onClick={() => handlePrepare(item)}>Preparing</button>
                      </tr>
                    
                      ))}

                      </table>
                      <hr></hr>
                  </div>

                  {/* Currently cooking: */}
                  <h2 className='mt-5 mb-5 text-center text-2xl font-semibold'>Currently cooking:  <span>{Currentlycount}</span></h2>
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
                  <     table>
                        {cooking.map((item, index) => (
                          <tr key={index}>
                            <td className='w-[10%]'>{index+1}</td>
                            <td className='w-[20%] py-4'>{item.recipe_name}</td>
                            <td className='w-[25%]'>{item.preparing_time}</td>
                            <td className='w-[20%]'>{item.calories}</td>
                          </tr>
                        ))}
                      </table>
                      <hr></hr>
                  </div>

              </div>

      </div>
        <ToastContainer />
    </body>
  )
}

export default App
