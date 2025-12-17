import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';

const MyGallery = () => {
    const { user } = useContext(AuthContext);
    const [myArtworks, setMyArtworks] = useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedArtwork, setSelectedArtwork] = useState(null);


    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/my-gallery?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyArtworks(data));
        }
    }, [user]);

   const handleDelete = (id) => {
    const confirmDelete = window.confirm(
        "Are you sure you want to delete this artwork?"
    );

    if (!confirmDelete) return;

    fetch(`http://localhost:5000/artwork/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                setMyArtworks(myArtworks.filter(item => item._id !== id));
                toast.success("Artwork deleted successfully");
            }
        });
};

const handleUpdate = (item) => {
    setSelectedArtwork(item);
    setShowModal(true);
};

const handleUpdateSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  const updatedData = {
    title: form.title.value,
    image: form.image.value,
    category: form.category.value,
    visibility: form.visibility.value,
    description: form.description.value,
  };

  const res = await fetch(
    `http://localhost:5000/artwork/${selectedArtwork._id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    }
  );

  const data = await res.json();

  if (data.success) {
    toast.success("Artwork updated successfully!");

    const updatedList = myArtworks.map((item) =>
        item._id === selectedArtwork._id
            ? { ...item, ...updatedData }
            : item
    );
    setMyArtworks(updatedList);
    setShowModal(false);
  }
};


    return (
        <div className="p-10 ">
            <h1 className="flex text-3xl font-bold items-center justify-center mb-5">My Gallery</h1>

            {myArtworks.length === 0 && (
                <p className="text-gray-500 flex items-center justify-center">You have not added any artworks yet.</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {myArtworks.map((item) => (
                    <div key={item._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={item.image} alt="artwork" className="h-48 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="text-sm">{item.category}</p>
                            <p className="text-sm">{item.visibility}</p>
                       
                         <div className="flex gap-3 mt-3">
        <button
            className="btn btn-sm btn-warning"
            onClick={() => handleUpdate(item)}
        >
            Update
        </button>

        <button
            className="btn btn-sm btn-error"
            onClick={() => handleDelete(item._id)}
        >
            Delete
        </button>
    </div>                       
                        </div>
                    </div>
                ))}
            </div>

                {/* modal is here */}
            {showModal && selectedArtwork && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="card bg-base-100 w-full max-w-sm shadow-xl">
      <form onSubmit={handleUpdateSubmit} className="card-body">

        <h1 className="text-2xl text-center font-bold">
          Update Artwork
        </h1>

        {/* User Name */}
        <label className="label">User Name</label>
        <input
          type="text"
          className="input"
          defaultValue={selectedArtwork.artistName}
          readOnly
        />

        {/* Email */}
        <label className="label">User Email</label>
        <input
          type="email"
          className="input"
          defaultValue={selectedArtwork.email}
          readOnly
        />

        {/* Title */}
        <label className="label">Title</label>
        <input
          name="title"
          type="text"
          className="input"
          defaultValue={selectedArtwork.title}
        />

        {/* Image */}
        <label className="label">Image URL</label>
        <input
          name="image"
          type="text"
          className="input"
          defaultValue={selectedArtwork.image}
        />

        {/* Visibility */}
        <label className="label">Visibility</label>
        <select
          name="visibility"
          className="select w-full"
          defaultValue={selectedArtwork.visibility}
        >
          <option>Public</option>
          <option>Private</option>
        </select>

        {/* Category */}
        <label className="label">Category</label>
        <select
          name="category"
          className="select w-full"
          defaultValue={selectedArtwork.category}
        >
          <option>3D</option>
          <option>Illustration</option>
          <option>Photography</option>
          <option>Sculpture</option>
          <option>Digital</option>
        </select>

        {/* Description */}
        <label className="label">Description</label>
        <input
          name="description"
          type="text"
          className="input"
          defaultValue={selectedArtwork.description}
        />

        <div className="flex flex-col gap-3 mt-4">
          <button
            type="submit"
            className="btn btn-success w-full"
          >
            Update Artwork
          </button>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="btn w-full"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  </div>
)}

        </div>
    );
};

export default MyGallery;
