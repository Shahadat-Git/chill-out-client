import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { TbDiscountCheck } from "react-icons/tb";

const RecipeCard = ({ recipe }) => {
    const { recipe_id, recipe_picture, recipe_name, ingredients, cooking_method, rating } = recipe;
    // console.log(recipe)

    const handleFavorites = (event) => {
        toast.success('Successfully Added!')
        event.target.disabled = true;
    }
    return (
        <div className='container mx-auto mb-10'>
            <Toaster
                position="top-right"
                reverseOrder={false}
            ></Toaster>
            <div className='lg:flex items-center gap-5 py-5 rounded-3xl shadow-lg mx-2'>
                <div className='w-full lg:w-6/12'>
                    <img className='w-9/12 mx-auto h-96 object-cover border-8 border-warning rounded-tr-[100px] rounded-bl-[100px] rounded-tl-lg rounded-br-lg' src={recipe_picture} alt="" />
                </div>
                <div className=' w-full lg:w-6/12 px-5 mt-5 lg:px-0 lg:mt-0'>
                    <h3 className='text-2xl font-semibold'>Recipe Name : {recipe_name}</h3>
                    <p className='text-lg font-semibold mt-3'>Cooking Method : {cooking_method}</p>
                    <p className='text-lg font-semibold mt-3'>Ingredients :</p>
                    <ul>
                        {
                            ingredients.map((ingredient, idx) =>
                                <div className='flex items-center gap-2 ml-5 my-2'
                                    key={idx}
                                >
                                    <TbDiscountCheck
                                        className='text-2xl text-warning'
                                    ></TbDiscountCheck><li className='text-lg font-semibold'>
                                        {ingredient}
                                    </li>
                                </div>)
                        }
                    </ul>
                    <p className='text-lg font-semibold mt-3'>Rating : {rating}</p>
                    <button onClick={handleFavorites} className='btn btn-warning btn-sm my-2'>Add To Favorites</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;