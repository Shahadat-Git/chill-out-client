import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import LazyLoad from 'react-lazy-load';

const BestRecipes = ({ recipe }) => {
    const { recipe_id, recipe_picture, recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <div className='bg-base-200 px-5 pt-5 pb-2 rounded-lg shadow-xl'>
            <div>
                <LazyLoad
                    offset={300}
                    threshold={0.95}
                >
                    <img className='w-full h-56 rounded-lg' src={recipe_picture} alt="" />
                </LazyLoad>
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