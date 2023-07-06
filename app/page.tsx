// ** Import Components
import FishCard from "@components/FishCard";

// ** Import Service
import { getFish } from "@services/apiFish";

const Home = async () => {
  const datas = await getFish();

  return (
    <div className="grid grid-cols-3 gap-8">
      {datas.map((data) => <FishCard key={data.id} data={data} />).reverse()}
    </div>
  );
};

export default Home;
