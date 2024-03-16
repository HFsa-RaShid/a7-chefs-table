

import { useEffect, useState } from 'react'
import './App.css'

import Header from './header'
import EachRecipe from './EachRecipe';


function App() {
  const [recipes,setRecipes]=useState([]);
  useEffect(() => {
    fetch("./recipe.json")
    .then((res) => res.json())
    .then((data) => {setRecipes(data)
    });

  },[]);
  



  return (
    <div className='font'>
      <Header></Header>
      <div className="mainContainer container mx-auto">
        <h1>Our Recipes</h1>
        <p className='text-center'>Satisfying and hearty dishes that will be the centerpiece of your dining experience, offering a burst of flavors and textures.</p>
        <div className="cardsContainer grid grid-cols-2 w-2/3 gap-7">
          {
              recipes.map((rcp) =>(
                <EachRecipe key={rcp.id} useRecipe={rcp} />

              ))
          }
            
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default App
