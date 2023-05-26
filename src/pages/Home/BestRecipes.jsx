import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const BestRecipes = ({recipe}) => {
    const { recipe_id, recipe_picture, recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <div className='bg-base-200 p-5 rounded-lg shadow-xl'>
            <div>
                <img className='w-full h-56 rounded-3xl' src={recipe_picture} alt="" />
            </div>
           <div className='flex justify-between items-center'>
           <p className='text-xl font-semibold '>{recipe_name}</p>
            <div className='flex items-center gap-1 mt-3 text-xl font-semibold text-warning'>
                <AiFillStar></AiFillStar>
                <p>{rating}</p>
            </div>
           </div>
        </div>
    );
};

export default BestRecipes;