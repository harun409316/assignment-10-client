import React from 'react';
import { useLoaderData } from 'react-router';
import ArtworkCard from '../ArtworkCard/ArtworkCard';

const ExploreArtworks = () => {
  const data = useLoaderData();
  // console.log(data);
    return (

   <div>

       <div className='text-2xl text-center font-bold'>Explore Artworks
      <p className='text-center mb-10'>Explore 3d Artwork.</p>
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-3'>
        {
          data.map(artwork =>   <ArtworkCard key={artwork._id} artwork={artwork}></ArtworkCard>

          )   
        }

      </div>
      </div>
   </div>
  
    );
};

export default ExploreArtworks;