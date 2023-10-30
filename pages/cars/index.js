import CarsList from "@/src/lists/Cars.list";
import Categories from "@/src/modules/Categories";
import SearchBar from "@/src/modules/SearchBar";

import api from "@/utils/api";

const CarsPage = ({ cars }) => {
  return (
    <>
      <SearchBar />
      <Categories />
      <CarsList cars={cars} />
    </>
  );
};

export default CarsPage;

export async function getStaticProps() {
  const cars = await api();

  return {
    props: {
      cars,
    },
  };
}
