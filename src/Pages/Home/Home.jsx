import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <Banner />

      <div className="flex justify-end my-6">
        <button
          className="btn btn-outline"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <div className="text-center text-2xl font-bold mt-10">
        Latest Artwork
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 mt-10">
        {data.map(artwork => (
          <ArtworkCard key={artwork._id} artwork={artwork} />
        ))}
      </div>

      {/* Community Highlights */}
      <section className="my-16 bg-base-200 py-12 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Community Highlights
        </h2>
        {/* cards same as yours */}
      </section>

      {/* Top Artists */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Top Artists of the Week
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Logged-in user */}
          {user && (
            <div className="card bg-base-100 shadow-md p-6 text-center">
              <img
                src={user.photoURL || "https://i.ibb.co/3533Cp4S/IMG-20210716-170535-898.jpg"}
                className="w-24 h-24 mx-auto rounded-full"
                alt="artist"
              />
              <h3 className="text-xl font-semibold mt-4">
                {user.displayName || "Anonymous Artist"}
              </h3>
              <p className="text-gray-500">Community Artist</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Home;
