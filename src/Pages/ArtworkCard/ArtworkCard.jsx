import React from 'react';
import { Link } from 'react-router';

const ArtworkCard = ({ artwork }) => {
    const { image, title, artistName,price, category, _id } = artwork;

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">

            <figure className="h-[220px] overflow-hidden rounded-t-xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold text-center justify-center">
                    {title}
                </h2>

                <div className='flex justify-between text-sm text-gray-600 mt-2'>
                    <p>{artistName}</p>
                    <p className="font-medium">Category: {category}</p>
                   
                </div>

                <div className="flex  justify-between items-center ">
                  <p>Like:0 </p>
                   <p className="font-medium">Price: {price} $</p>
                  
                </div>
                <div>
                      <Link to={`/explore-details/${_id}`} 
                      className="btn btn-sm text-xl text-black font-semibold btn-accent py-5 w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ArtworkCard;
