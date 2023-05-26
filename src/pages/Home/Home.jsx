import React, { useContext } from 'react';
import Slider from './Slider';
import { ChefsContext } from '../../providers/ChefsProvider';
import ChefCard from './ChefCard';
import Spinner from '../../shared/Spinner';

const Home = () => {
    const { chefs } = useContext(ChefsContext);
    // console.log(chefs)
    return (
        <div>
            <Slider></Slider>

            <div className='container mx-auto px-2 mb-20'>
                <h3 className='w-5/6 lg:w-2/12 border-warning py-3 shadow-lg mx-auto text-center text-5xl my-10 text-warning font-semibold border-b-2 rounded-full uppercase'>Chefs</h3>

                <div className='grid lg:grid-cols-2 gap-10 mx-auto max-w-fit'>
                    {
                        chefs ? chefs.map(chef => <ChefCard
                            chef={chef}
                            key={chef.chef_id}
                        ></ChefCard>) : <Spinner></Spinner>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;