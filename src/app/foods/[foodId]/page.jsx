import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();

    const { id, dish_name, image_link, main_ingredients } = data.data;


    // console.log('food in food detail page', food);

    return (
        <div>
            <h2 className='text-center mt-8'>Show details of food: {foodId}</h2>
            <h3 className='text-3xl mt-8'>{dish_name}</h3>
            <Image
                src={image_link}
                alt={dish_name}
                width={300}
                height={300}
                className='mx-auto'
            ></Image>

            <h2 className="text-2xl">Ingredients: </h2>
            <ul className='list-disc'>
                {
                    main_ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }
            </ul>

            <div className='flex justify-center items-center mt-6'>

                <Link href={`/foods`}>
            <button className='btn btn-primary px-12'>
                Back
                </button></Link>

            </div>
            
        </div>
    );
};

export default FoodDetailPage;