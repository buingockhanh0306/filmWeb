import Banner from "../Component/atoms/Banner";
import FilmCard from "../Component/molecules/FilmCard";
import FilmPopular from "../Component/organisms/FilmPopular";
import Header from "../Component/organisms/Header";

const Home = () => {
  return (
    <div className="bg-gray-500">
      <Header />
      <Banner />
      <div className="container h-full mx-auto bg-gray-500">
        <FilmPopular />
      </div>
    </div>
  );
};

export default Home;
