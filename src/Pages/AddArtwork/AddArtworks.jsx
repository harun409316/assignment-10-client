import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const AddArtworks = () => {
    const {user} = use(AuthContext);
      const navigate = useNavigate();
console.log("Photo URL:", user?.photoURL);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const formdata = {
            artistName: user?.displayName,
           artistPhoto: user?.photoURL,
            email: user?.email,
            title: e.target.title.value,
            image: e.target.image.value, 
            category: e.target.category.value,
            visibility: e.target.visibility.value,
            description: e.target.description.value,
           
        }
       
 try {
    //Add to main artwork collection
    const res = await fetch("http://localhost:5000/artwork", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    });

     const data = await res.json();

      if (data?.insertedId || data?.success) {
        toast.success("Artwork added successfully!");
        navigate("/explore-artworks");
      } else {
        toast.error("Failed to add artwork.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error: Could not add artwork.");
    }
  };
        
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
         <h1 className="text-3xl text-center font-bold">Add New Artwork</h1>
      
        {user?.photoURL && (
  <div className="flex justify-center mb-4">
    <img
      src={user.photoURL}
      alt="User"
      className="w-24 h-24 rounded-full border"
    />
  </div>
)}




        <fieldset className="fieldset">
          <label className="label">User Name</label>
          <input
  type="text"
  name="artistName"
  className="input"
  value={user?.displayName || ""}
  readOnly
/>
      
          <label className="label">User Email</label>
        <input
  type="email"
  name="email"
  className="input"
  value={user?.email || ""}
  readOnly
/>


          <label className="label">Title</label>
          <input type="text" name='title' className="input" placeholder="Title" />
         
          <label className="label">Image URL</label>
          <input type="text" name='image' className="input" placeholder="Image Url" />       
     
     <div>
            
          <label className="label">Visibility</label>
          <select  defaultValue={""}
    name='visibility'
     
     className='select w-full' required id="visibility">
  <option>Public</option>
  <option>Private</option>
  </select>
         
     </div>
         <div>
            <label className='label font-medium'>Category *</label>

    <select defaultValue={""}
    name='category'
     id="category" 
     className='select w-full' required>

      <option value="disabled">Select category</option>
      <option>3D</option>
      <option>Illustration</option>
      <option>Photography</option>
      <option>Sculpture</option>
      <option>Digital</option>
      </select>
         </div>
         <label className="label">Price</label>
          <input type="number" name='price' className="input" placeholder="Price" />
          
          <label className="label">Description</label>
          <input type="text" name='description' className="input" placeholder="Description" />
          
          <button className="btn btn-neutral mt-4">Add to Artwork</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default AddArtworks;