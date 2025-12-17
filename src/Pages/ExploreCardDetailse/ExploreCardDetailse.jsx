import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const ExploreCardDetailse = () => {
  const data = useLoaderData();
  const artwork = data?.result;
  const navigate = useNavigate();

  const likeCountInitial = artwork?.like || 0;
  const [likeCount, setLikeCount] = useState(likeCountInitial);

  // Artist info here
  const [artistArtCount, setArtistArtCount] = useState(0);

  // Fetch total artworks by this artist
  useEffect(() => {
    const loadArtistArtworks = async () => {
      const res = await fetch(
        `http://localhost:5000/artworks?artistName=${artwork.artistName}`
      );
      const data = await res.json();
      setArtistArtCount(data?.result?.length || 0);
    };
    loadArtistArtworks();
  }, [artwork.artistName]);

  // Handle Like
  const handleLike = async () => {
    const res = await fetch(
      `http://localhost:5000/artwork/like/${artwork._id}`,
      {
        method: "PATCH",
      }
    );
    const result = await res.json();

    if (result.success) {
     setLikeCount(likeCount + 1); // Always stay sync with DB
    }
  };

  // Handle Add to Favorites
  const handleAddToFavorites = async () => {
    const datafile = {
      artworkId: artwork._id,
      artistName: artwork.artistName,
      category: artwork.category,
      image: artwork.image,
      like: artwork.like,
      title: artwork.title,
      userEmail: artwork.userEmail, // if available
    };

    const res = await fetch("http://localhost:5000/my-favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datafile),
    });

    const data = await res.json();
    if (data.success) {
      toast.success("Artwork added to favorites!");
      navigate("/my-favorites");
    }
    else{
     toast.error(data.message || "Already added to favorites");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={artwork?.image}
          alt={artwork?.title}
          className="max-w-sm rounded-lg shadow-2xl"
        />

        <div className="ml-10">
          
         
            {/* Artist Photo */}
            {artwork.artistPhoto && (
              <img
                src={artwork.artistPhoto}
                alt="Artist"
                className="w-24 h-24 rounded-full mt-2"
              />
            )}

             {/* Artist Block */}
          <div className="py-4">
            <h2 className="text-3xl font-semibold">{artwork.artistName}</h2>


            <p className="text-md mt-2">Total Artworks: {artistArtCount}</p>
          {/* Title */}
          <h1 className="text-5xl font-semibold">{artwork?.title}</h1>

          </div>

          {/* Artwork categories, medium, price */}
          <p className="text-xl mb-2"><span className=" text-2xl">Category :</span> {artwork?.category}</p>
          <p className="text-xl mb-2"><span className=" text-2xl">Medium :</span> {artwork?.medium || "N/A"}</p>
          <p className="text-xl mb-2">
            <span className=" text-2xl">Dimensions :</span> {artwork?.dimensions || "Not provided"}
          </p>
          <p className="text-xl font-semibold">
            Price: {artwork?.price ? `$${artwork.price}` : "Not available"}
          </p>

          {/* Description */}
          <p className="py-6  text-gray-500">{artwork?.description}</p>

         

          {/* Add to Favorites */}
          <div className="flex  h-full gap-5 justify-end items-end mt-5">
            {/* Like Button */}
          <button onClick={handleLike} className="btn btn-primary">
            ❤️ Like ({likeCount})
          </button>
            <button
              onClick={handleAddToFavorites}
              className="btn btn-secondary"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCardDetailse;
