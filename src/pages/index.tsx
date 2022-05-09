import HomePage from "../Component/Template/HomePage";

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_API_KEY);
  return <HomePage />;
};

export default Home;
