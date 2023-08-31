import React, { useContext } from 'react';
import Slider from './Slider';
import { ChefsContext } from '../../providers/ChefsProvider';
import ChefCard from './ChefCard';
import Spinner from '../../shared/Spinner';
import BestRecipes from './BestRecipes';
import Tilt from 'react-parallax-tilt';
import logo from '../../assets/logo.png';



import img1 from '../../assets/brooke-lark-4J059aGa5s4-unsplash.jpg'
import img2 from '../../assets/brooke-lark-HlNcigvUi4Q-unsplash.jpg'
import img3 from '../../assets/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg'
import img4 from '../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg'
import { AiOutlineSend } from 'react-icons/ai';



const Home = () => {
    const { chefs } = useContext(ChefsContext);
    // console.log(chefs)


    // collect best recipes form mail data
    let recipes = []
    if (chefs) {
        for (const chef of chefs) {
            // console.log(chef.recipes)
            for (const recipe of chef.recipes) {
                recipes = [...recipes, recipe]
            }

        }
    }

    const bestRecipes = recipes.filter(recipe => recipe.rating > 4.6)

    // console.log(bestRecipes)

    return (
        <div>
            {/* banner slider  */}
            <Slider></Slider>

            {/* chefs section  */}
            <div className='container mx-auto px-2 mb-20 w-full'>
                <h3 className='w-6/6 lg:w-5/12 border-warning py-3 shadow-lg mx-auto text-center text-5xl my-10 text-warning font-semibold border-b-2 rounded-full uppercase'>Our Chefs</h3>

                <div className={chefs && 'grid md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto w-full'}>
                    {
                        chefs ? chefs.map(chef => <ChefCard
                            chef={chef}
                            key={chef.chef_id}
                        ></ChefCard>) : <Spinner></Spinner>
                    }
                </div>
            </div>

            {/* best recipe section */}
            <div className='container mx-auto px-2 mb-10 w-full'>
                <h3 className='w-6/6 lg:w-5/12 border-warning py-3 shadow-lg mx-auto text-center text-3xl my-10 text-warning font-semibold border-b-2 rounded-full uppercase'>Best Recipes</h3>

                <div className={chefs && 'grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-full'}>
                    {
                        bestRecipes.length > 0 ? bestRecipes.map((recipe, idx) => <BestRecipes
                            recipe={recipe}
                            key={idx}
                        ></BestRecipes>) : <Spinner></Spinner>
                    }
                </div>
            </div>

            {/* call us   */}

            <h4 className='text-center text-5xl bg-[#FBBD23] container mx-auto font-semibold text-white py-10 rounded-lg my-10'>Call Us: +102547864454
            </h4>

            {/* blogs */}
            <div className='container mx-auto px-2 mb-10 w-full'>
                <h3 className='w-6/6 lg:w-5/12 border-warning py-3 shadow-lg mx-auto text-center text-3xl my-10 text-warning font-semibold border-b-2 rounded-full uppercase'>Blogs</h3>

                <div className="section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="card w-full bg-base-100 card-area  mt-5 shadow-xl">
                        <figure><img src={img1} alt="Food" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Healthy Food</h2>
                            <p>
                                Savor the artistry of delectable dishes, each bite a journey through rich textures and harmonious tastes, celebrating food&apos;s wonders....</p>
                            <div className="card-actions justify-start mt-7">
                                <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-warning hover:bg-yellow-500 text-white border-none w-full">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 card-area mt-5 shadow-xl">
                        <figure><img src={img2} alt="Food" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Breakfast should be healthy</h2>
                            <p>
                                Greet the morning with a breakfast symphony - golden pancakes, crispy bacon, and sun-kissed eggs, a melody of flavors that awakens the day. ...</p>
                            <div className="card-actions justify-start mt-7">
                                <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-warning hover:bg-yellow-500 text-white border-none w-full">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 card-area  mt-5 shadow-xl">
                        <figure><img src={img3} alt="Food" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Fruits are natural medicine</h2>
                            <p>

                                Nature&apos;s jewels, fruits adorn our world with a rainbow palette and a burst of flavors. From the juicy sweetness of berries to the tropical tang of citrus, each bite is a celebration of vitality and taste. ...</p>
                            <div className="card-actions justify-start mt-7">
                                <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-warning hover:bg-yellow-500 text-white border-none w-full">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 card-area mt-5 shadow-xl">
                        <figure><img src={img4} alt="Food" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Steak Dinner for you</h2>
                            <p>

                                Indulge in the epitome of carnivorous delight – succulent steaks, seared to perfection, releasing a symphony of aromas and delivering a melt-in-your-mouth experience. ...</p>
                            <div className="card-actions justify-start mt-7">
                                <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-warning hover:bg-yellow-500 text-white border-none w-full">Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* newsletter */}
            <div className='container mx-auto px-2 mb-10 w-full'>
                <h3 className='w-6/6 lg:w-5/12 border-warning py-3 shadow-lg mx-auto text-center text-3xl my-10 text-warning font-semibold border-b-2 rounded-full uppercase'>NEWSLETTERs</h3>

                <div className="hero mb-20 mt-10 rounded-lg">
                    <div className="hero-content flex-col gap-10 lg:flex-row">
                        <div className="text-center lg:w-1/2 lg:text-left">
                            <h1 className="md:text-5xl text-3xl font-bold">Subscribe To Our NewsLetter</h1>
                            <p className="py-6">We will send you updates about our new chef.</p>
                            <div className="flex items-center justify-center lg:justify-normal">
                                <div className="form-control me-4 ">
                                    <input type="text" placeholder="Your Email" className="input input-bordered lg:w-[300px] focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <button className="btn flex items-center flex-col btn-md btn-outline bg-warning hover:bg-yellow-500 text-white">Subscribe <AiOutlineSend /></button>
                                </div>
                            </div>
                        </div>
                        <Tilt className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-warning p-5">

                            <img src={logo} alt="" className='w-4/5 rounded-lg lg:w-full' />

                        </Tilt>
                    </div>
                </div>

            </div>

            {/* bottom section */}
            <div className="hero lg:h-[60vh]  mb-4 shadow-xl container mx-auto rounded-lg" style={{ backgroundImage: `url("/banner/btn-banner.jpg")` }}>
                <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-slate-50 to-slate-300 w-8/12 mx-auto">Time-Saving Tip for Food Preparation</h1>
                        <p className="mb-5">When prepping vegetables for a recipe, spend some extra time chopping and slicing them all at once, even if the recipe calls for them to be added at different times. By doing this, you'll save valuable time during the cooking process. Simply store the prepped vegetables in separate airtight containers or resealable bags in the refrigerator until you're ready to use them. This way, you can easily grab the desired amount of each vegetable as needed, without having to stop and chop while you cook, making the overall cooking experience more efficient and enjoyable.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;