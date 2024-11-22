import { useLoaderData } from "react-router-dom";
import Donate from "../components/Donate";

const Campaigns = () => {
  const data = useLoaderData();

  return (
    <>
      <Donate data={data} />
    </>
  );
};

export default Campaigns;
