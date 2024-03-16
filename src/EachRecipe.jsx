import { MdOutlineAccessTime } from "react-icons/md";
import { LiaBurnSolid } from "react-icons/lia";


const EachRecipe = ({useRecipe, handleCart}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
              <figure className="px-10 pt-10">
                <img src={useRecipe.recipe_image} alt="" className="rounded-xl w-[330px] h-[200px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">{useRecipe.recipe_name}</h2>
                <p className="text-[#878787]">{useRecipe.short_description}</p>
                <hr className="my-2"></hr>
                <p className="text-[#282828] text-[18px] font-medium">Ingredients:  <span>{useRecipe.ingredients.length}</span></p>
                <ul className="list-disc text-left px-4 text-[#878787]">
                    {useRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <hr className="my-2"></hr>
                <div className="flex justify-between text-[#878787]">
                    <div className="flex items-center gap-1">
                      <MdOutlineAccessTime />
                      <p>{useRecipe.preparing_time}</p>

                    </div>
                    <div className="flex items-center gap-1">
                      <LiaBurnSolid />
                      <p>{useRecipe.calories}</p>

                    </div>

                </div>
                <div className="card-actions mt-3">
                  <button onClick={(e) =>handleCart(useRecipe)} className="bg-[#0BE58A] text-black rounded-3xl px-4 py-2 font-medium">Want to Cook</button>
                </div>
              </div>
            </div>
            
            
        </div>
    );
};

export default EachRecipe;