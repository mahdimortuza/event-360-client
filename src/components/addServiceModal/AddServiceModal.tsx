import { TParameter } from "@/pages/admin/ServicesManagement";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { XCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Modal from "../ui/modal";

export type TServiceData = {
  image: string;
  title: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
};

const AddServiceModal = ({ isOpen, setIsOpen }: TParameter) => {
  const { register, handleSubmit, reset } = useForm<TServiceData>();

  // query client for re-fetching data
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation<any, unknown, TServiceData>({
    mutationFn: async (data) => {
      return await fetch(
        "https://event-360-server-alpha.vercel.app/api/v1/services/create-service",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  const onCancel = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit: SubmitHandler<TServiceData> = async (data) => {
    const serviceData = {
      image: data.image,
      title: data.title,
      feature1: data.feature1,
      feature2: data.feature2,
      feature3: data.feature3,
      feature4: data.feature4,
      feature5: data.feature5,
    };
    await mutateAsync(serviceData);
    console.log(data);
    reset();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Service">
      <XCircle
        onClick={onCancel}
        className="cursor-pointer w-8 h-8  text-red-600 rounded-md absolute top-2 right-2"
        type="submit"
      />

      <form
        className="grid grid-cols-2 gap-2 p-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="rounded-md border-light-blue"
          type="text"
          placeholder="Image link"
          {...register("image")}
        />
        <input
          className="rounded-md border-light-blue"
          type="text"
          placeholder="Service title"
          {...register("title")}
        />
        <input
          className="rounded-md border-light-blue"
          type="text"
          placeholder="Feature-1"
          {...register("feature1")}
        />
        <input
          className="rounded-md border-light-blue"
          type="text"
          placeholder="Feature-2"
          {...register("feature2")}
        />
        <input
          className="rounded-md border-light-blue"
          placeholder="Feature-3"
          type="text"
          {...register("feature3")}
        />
        <input
          className="rounded-md border-light-blue"
          placeholder="Feature-4"
          type="text"
          {...register("feature4")}
        />
        <input
          className="rounded-md border-light-blue"
          placeholder="Feature-5"
          type="text"
          {...register("feature5")}
        />

        <Button
          onClick={onCancel}
          className=" w-10 rounded-md absolute bottom-6 right-6"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default AddServiceModal;
