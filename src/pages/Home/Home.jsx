import React, { useContext } from 'react';
import Slider from './Slider';
import { ChefsContext } from '../../providers/ChefsProvider';
import ChefCard from './ChefCard';
import Spinner from '../../shared/Spinner';
import BestRecipes from './BestRecipes';

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
            <div className='container mx-auto px-2 mb-20'>
                <h3 className='w-6/6 lg:w-5/12 border-warning py-3 shadow-lg mx-auto text-center text-5xl my-10 text-warning font-semibold border-b-2 rounded-full uppercase'>Our Chefs</h3>

                <div className={chefs && 'grid lg:grid-cols-2 gap-10 mx-auto max-w-fit'}>
                    {
                        chefs ? chefs.map(chef => <ChefCard
                            chef={chef}
                            key={chef.chef_id}
                        ></ChefCard>) : <Spinner></Spinner>
                    }
                </div>
            </div>

            {/* best recipe section */}
            <div className='container mx-auto px-2 mb-10'>
                <h3 className='w-6/6 lg:w-5/12 border-warning py-3 shadow-lg mx-auto text-center text-3xl my-10 text-warning font-semibold border-b-2 rounded-full uppercase'>Best Recipes</h3>

                <div className={chefs && 'grid lg:grid-cols-3 gap-10 mx-auto max-w-fit'}>
                    {
                        bestRecipes.length > 0 ? bestRecipes.map((recipe, idx) => <BestRecipes
                            recipe={recipe}
                            key={idx}
                        ></BestRecipes>) : <Spinner></Spinner>
                    }
                </div>
            </div>

            {/* bottom section */}
            <div className="hero h-[60vh]  mb-4 shadow-xl container mx-auto rounded-lg" style={{ backgroundImage: `url("/banner/btn-banner.jpg")` }}>
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