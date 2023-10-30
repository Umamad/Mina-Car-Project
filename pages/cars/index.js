import CarsList from "@/src/lists/Cars.list";
import CategoriesList from "@/src/lists/Categories.list";
import SearchBarContainer from "@/src/containers/SearchBar.container";

import api from "@/utils/api";

const CarsPage = ({ cars }) => {
  return (
    <>
      <SearchBarContainer />
      <CategoriesList />
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
