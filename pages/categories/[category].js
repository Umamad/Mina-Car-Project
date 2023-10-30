import CarsList from "@/src/lists/Cars.list";
import BackButton from "@/src/buttons/Back.button";

import api from "@/utils/api";
import groupBy from "@/utils/groupBy";

function CategoryPage({ cars }) {
  return (
    <>
      <BackButton />
      <CarsList cars={cars} />
    </>
  );
}

export default CategoryPage;

export async function getServerSideProps({ query }) {
  const { category } = query;
  const cars = await api();
  const groupedCars = groupBy(cars, "category");
  const categories = Object.keys(groupedCars);

  if (!categories.includes(category)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cars: groupedCars[category],
    },
  };
}
