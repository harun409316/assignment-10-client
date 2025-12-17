
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import { use } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  const {user} = use(AuthContext);
  if(!user)return null;
  
  return (
 <div>
  <Banner/>

<div className="text-center text-2xl font-bold mt-10">Latest artwork</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 mt-10">
{
  data.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork}  />)
}

</div>
<section className="my-16 bg-base-200 py-12 rounded-xl">
  <h2 className="text-3xl font-bold text-center mb-10">
    Community Highlights
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    
    <div className="card bg-base-100 shadow-md overflow-hidden">
      <figure className="h-56 w-full">
        <img
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
          alt="artwork"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">Most Liked Artwork</h3>
        <p>Shadows of Silence</p>
      </div>
    </div>

    <div className="card bg-base-100 shadow-md overflow-hidden">
      <figure className="h-56 w-full">
        <img
          src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg"
          alt="artwork"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">Trending This Week</h3>
        <p>The School of Athens</p>
      </div>
    </div>

    <div className="card bg-base-100 shadow-md overflow-hidden">
      <figure className="h-56 w-full">
        <img
          src="https://images.pexels.com/photos/415585/pexels-photo-415585.jpeg"
          alt="artwork"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">New Community Pick</h3>
        <p>Golden Horizon</p>
      </div>
    </div>

  </div>
</section>
<section className="my-16">
  <h2 className="text-3xl font-bold text-center mb-10">
    Top Artists of the Week
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="card bg-base-100 shadow-md p-6 text-center">
      <img
        src="https://i.ibb.co.com/3533Cp4S/IMG-20210716-170535-898.jpg"
        className="w-24 h-24 mx-auto rounded-full"
        alt="artist"
      />
      <h3 className="text-xl font-semibold mt-4">Rahim Mazumder</h3>
      <p className="text-gray-500">Abstract Artist</p>
      <p className="mt-2 text-sm">Total Artworks: 12</p>
    </div>

    <div className="card bg-base-100 shadow-md p-6 text-center">
      <img
        src="https://i.ibb.co.com/tMK88cDb/Chat-GPT-Image-Oct-22-2025-07-12-35-PM.png"
        className="w-24 h-24 mx-auto rounded-full"
        alt="artist"
      />
      <h3 className="text-xl font-semibold mt-4">Nusrat Jahan</h3>
      <p className="text-gray-500">Modern Artist</p>
      <p className="mt-2 text-sm">Total Artworks: 9</p>
    </div>

    <div className="card bg-base-100 shadow-md p-6 text-center">
      <img
        src={user.photoURL || "https://i.ibb.co.com/3533Cp4S/IMG-20210716-170535-898.jpg"}
        className="w-24 h-24 mx-auto rounded-full"
        alt="artist"
      />
    <h3 className="text-xl font-semibold mt-4">
            {user.displayName || "Anonymous Artist"} </h3>
      <p className="text-gray-500">Digital Artist</p>
      <p className="mt-2 text-sm">Total Artworks: 15</p>
    </div>
  </div>
</section>


 </div>
  );
};

export default Home;
