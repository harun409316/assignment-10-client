import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const MyFavorites = () => {
  const data = useLoaderData();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setFavorites(data);
    } else if (data?.result) {
      setFavorites(data?.result);
    } else {
      setFavorites([]);
    }
  }, [data]);

 
const handleUnfavorite = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/my-favorites/delete/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();

    if (data.success) {
      setFavorites((prev) => prev.filter((fav) => fav._id.toString() !== id));
      toast.success('Removed from favorites!');
    } else {
      toast.error('Failed to remove item');
    }
  } catch (err) {
    console.error(err);
    toast.error('Something went wrong');
  }
};
  return (
    <div className="min-h-screen bg-base-200 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Favorites</h1>

      {favorites.length === 0 && (
        <p className="text-center text-lg mt-10">No favorites yet.</p>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {favorites.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={item?.image}
                alt={item?.title}
                className="h-60 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item?.title}</h2>
              <p>Artist: {item?.artistName}</p>
              <p>Category: {item?.category}</p>
              <p className="line-clamp-3">{item?.description}</p>
            </div>
            <button
              className="btn btn-error mt-2"
              onClick={() => handleUnfavorite(item._id)}
            >
              Unfavoriting
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
