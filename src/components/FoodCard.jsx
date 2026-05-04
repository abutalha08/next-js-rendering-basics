import Image from "next/image";
import Link from "next/link";


const FoodCard = ({ food }) => {
    const { id, dish_name, image_link, category, price } = food;
    return (
        <div className="card bg-base-100 shadow-sm border-2 border-fuchsia-400 p-6">
            <figure>
                {/* <Image
                    src={image_link}
                    alt={dish_name}
                    width={200}
                    height={200}
                ></Image> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><small>Category: {category}</small></p>
                <p>Price: ${price}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end mt-4 ">
                    <button className="btn px-3 bg-purple-500 border-2 border-e-gray-400 mr-3">Add To Cart</button>
                    <Link href={`/foods/${id}`}>
                        <button className="btn btn-ghost border-2 border-gray-400 px-4">Show Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;