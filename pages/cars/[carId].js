import CarDetailView from "@/src/views/CarDetail.view";
import BackButton from "@/src/buttons/Back.button";

import api from "@/utils/api";

const CarDetailsPage = ({ car }) => {
  return (
    <>
      <BackButton />
      <CarDetailView car={car} />
    </>
  );
};

export default CarDetailsPage;

export async function getServerSideProps({ query }) {
  const { carId } = query;
  const cars = await api();
  const selectedCar = cars.find((car) => car.id === +carId);

  if (!selectedCar) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      car: selectedCar,
    },
  };
}
