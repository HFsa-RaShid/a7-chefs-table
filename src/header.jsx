import { CgProfile } from "react-icons/cg";
import coverImage from './image/cover.jpg';

const Header = () => {
    return (
        
       <div className="container mx-auto ">
            <div className="navbar bg-base-100 mt-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[16px]">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                        <a className="btn btn-ghost text-3xl lg:text-4xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[16px]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                        
                        <input className="bg-[#150B2B0D] rounded-l-2xl px-4 py-2 border-none hidden lg:flex" type="text" name="" id="" placeholder="Search Here...."/>
                        <button className="mr-3 px-3 py-2 bg-[#0BE58A] rounded-r-2xl border-none text-white hidden lg:flex">Search</button>

                        <div className="w-8 h-8 me-3">
                        <CgProfile size="lg" />
                        </div>
                        
                </div>
                
            </div>
            <div className="flex w-full lg:hidden ">
                        
                        <input className="bg-[#150B2B0D] rounded-l-2xl w-[70%] px-4 py-2 border-none " type="text" name="" id="" placeholder="Search Here...."/>
                        <button className="  px-3 py-2 bg-[#0BE58A] w-[30%] rounded-r-2xl  border-none text-white ">Search</button>   
            </div>

            <div className="h-[500px] mt-3 relative rounded-2xl w-full">
                <img className="bg-cover bg-no-repeat h-full w-full rounded-2xl" src={coverImage} alt="" />
                <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

                <div className="absolute top-[75px] left-[50px] lg:left-[200px] right-[50px]  lg:right-[200px]  text-white text-center">
                    <h1 className="text-white text-[27px] lg:text-[52px]">Discover an exceptional cooking class tailored for you!</h1>
                    <p className=" text-[12px] lg:text-[18px] mt-6">Embark on a culinary journey like no other with our exceptional cooking classes. From mastering classic recipes to exploring exotic flavors, our expert chefs will guide you through every step, ensuring a delightful and enriching experience. Join us and uncover the secrets of gourmet cooking today!</p>
                    <div className="mt-10">
                        <button className="bg-[#0BE58A] border-none px-4 py-3 rounded-3xl mr-3 text-black font-semibold hover:bg-green-300 hover:text-white">Explore Now</button>
                        <button className="border border-white px-4 py-3 rounded-3xl ml-3 font-semibold hover:bg-green-300 hover:text-black">Our Feedback</button>
                    </div>
                </div>
                
            </div>
       </div>
    );
};

export default Header;