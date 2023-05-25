import React, { useContext } from 'react';
import { ChefsContext } from '../../providers/ChefsProvider';
import { useParams } from 'react-router-dom';
import spinner from '../../utils/spinner';
import { GiCampCookingPot, GiNotebook } from 'react-icons/gi';
import { AiFillLike } from 'react-icons/ai';

const Recipes = () => {
    const { id } = useParams();
    const url = parseInt(id.split('-').pop());
    const { chefs } = useContext(ChefsContext);

    if (!chefs) {
        return spinner();
    }

    const currentChef = chefs?.find(chef => chef.chef_id === url)
    const { chef_id, chef_name, chef_picture, description, likes, num_of_recipes, recipes, years_of_experience } = currentChef;

    console.log(chef_name)
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <img className='lg:w-3/12 h-96 rounded-br-[110px] rounded-tl-[100px] rounded-tr-box rounded-bl-3xl object-center' src={chef_picture} />
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold">{chef_name}</h1>
                        <p className=' py-6 text-lg font-semibold'>{description}</p>
                        <div className='flex items-center gap-1 mb-3'>
                            <GiCampCookingPot className='text-2xl text-warning'></GiCampCookingPot><p className='text-lg font-semibold'>{years_of_experience} Years of experience</p>
                        </div>

                        <div className='flex items-center gap-1 mb-3'>
                            <GiNotebook className='text-2xl text-warning'></GiNotebook>
                            <p className='text-lg font-semibold'>{num_of_recipes} recipes</p>
                        </div>

                        <div className='flex items-center gap-1 mb-3'>
                            <AiFillLike className='text-2xl text-warning'></AiFillLike>
                            <p className='text-lg font-semibold'>{likes} Likes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;