// ** Import Elements
import Form from "@components/Form";

// ** Import Service
import { getFishById } from "@services/apiFish";

const EditData = async ({ params }: { params: { fishId: string } }) => {
  const data = await getFishById(params.fishId);

  return (
    <div className="container-form">
      <Form edit={data} />
    </div>
  );
};

export default EditData;
