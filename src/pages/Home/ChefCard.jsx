import React from 'react';
import { GiCampCookingPot, GiNotebook } from "react-icons/gi";
import { AiFillLike, AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    // console.log(chef)
    const { chef_id, chef_name, chef_picture, description, likes, num_of_recipes, recipes, years_of_experience } = chef;
    const chefUrlName = chef_name.split(" ").join("-").toLowerCase() + -+chef_id;
    console.log(chefUrlName)
    return (
        <div className="flex flex-col lg:flex-row  lg:items-center rounded-xl shadow-lg bg-base-200">
            <img className=' lg:rounded-s-xl rounded-t-xl lg:rounded-t-none h-80 lg:w-2/5 w-full object-center' src={chef_picture} alt="" />
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
                    <Link to={`/recipes/${chefUrlName}`} className="hover:bg-yellow-500 btn btn-warning flex gap-2">View Recipes<AiOutlineRight></AiOutlineRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;