
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router";
import ArtworkCard from "../ArtworkCard/ArtworkCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
 <div>
  <Banner/>

<div className="text-center text-2xl font-bold mt-10">Latest artwork</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 mt-10">
{
  data.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork}  />)
}

</div>


 </div>
  );
};

export default Home;
