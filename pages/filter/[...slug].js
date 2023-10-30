import BackButton from "@/src/buttons/Back.button";
import CarsList from "@/src/lists/Cars.list";

import api from "@/utils/api";

const FilteredByPricePage = ({ cars }) => {
  return (
    <>
      <BackButton />
      <CarsList cars={cars} />
    </>
  );
};

export default FilteredByPricePage;

export async function getServerSideProps({ query }) {
  const [min, max] = query.slug;
  const cars = await api();
  const filteredCars = cars.filter((car) => car.price > min && car.price < max);

  if (!min || !max) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cars: filteredCars,
    },
  };
}
