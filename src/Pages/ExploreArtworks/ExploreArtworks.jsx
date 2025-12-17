import React, {  useEffect, useState } from 'react';

import ArtworkCard from '../ArtworkCard/ArtworkCard';

const ExploreArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [search, setsearch] = useState('');
  // const data = useLoaderData();
  
useEffect(() =>{
  fetch(`http://localhost:5000/artworks?search=${search}`)
  .then(res => res.json())
  .then(data => setArtworks(data));
}, [search]);
console.log(search);
    return (

   <div className='max-w-7xl mx-auto p-5'>
 {/* Search */}
      <input
        type="text"
        placeholder="Search by title or artist"
        className="input input-bordered w-full mb-6"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      
       <div className='text-2xl text-center font-bold'>Explore Artworks
      <p className='text-center mb-10'>Explore 3d Artwork.</p>
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-3'>

        {
          artworks.map(artwork =>   <ArtworkCard key={artwork._id} artwork={artwork}></ArtworkCard>

          )   
        }

      </div>
      </div>
   </div>
  
    );
};

export default ExploreArtworks;