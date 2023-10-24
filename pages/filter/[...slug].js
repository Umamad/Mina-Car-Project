import Carslist from "@/components/templates/Carslist";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

const Filterdcars = () => {
    const router = useRouter();
    const [min , max] = router.query.slug || [];
    const filterdeData = carsData.filter(item => item.price > min && item.price < max);
    if (!filterdeData.length ) return <h3>Not Found</h3>
    console.log(filterdeData)

    return (
        <Carslist data={filterdeData}/>
    );
};

export default Filterdcars;