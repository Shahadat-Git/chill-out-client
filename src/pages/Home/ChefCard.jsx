import React from 'react';
import { GiCampCookingPot, GiNotebook } from "react-icons/gi";
import { AiFillLike, AiOutlineRight } from "react-icons/ai";

const ChefCard = ({ chef }) => {
    console.log(chef)
    const { chef_id, chef_name, chef_picture, description, likes, num_of_recipes, recipes, years_of_experience } = chef;
    return (
        <div className="flex flex-col lg:flex-row  lg:items-center rounded-xl shadow-lg">
            <img className=' lg:rounded-l-xl rounded-t-xl lg:rounded-t-none h-80 lg:w-2/5 w-full object-center' src={chef_picture} alt="" />
            <div className="p-4">
                <h5 className='mb-3 text-xl font-semibold'>{chef_name}</h5>
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

                <div className="card-actions">
                    <button className="hover:bg-yellow-500 btn btn-warning flex gap-2">View Recipes<AiOutlineRight></AiOutlineRight></button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;