import { TParameter } from "@/pages/admin/ServicesManagement";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { XCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Modal from "../ui/modal";

export type TEventItemsData = {
  image: string;
  title: string;
};

const AddEventItemsModal = ({ isOpen, setIsOpen }: TParameter) => {
  const { register, handleSubmit, reset } = useForm<TEventItemsData>();

  // query client for re-fetching data
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation<any, unknown, TEventItemsData>({
    mutationFn: async (data) => {
      return await fetch(
        "https://event-360-server-alpha.vercel.app/api/v1/event-item/create-event-item",
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
      queryClient.invalidateQueries({ queryKey: ["eventItems"] });
    },
  });

  const onCancel = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit: SubmitHandler<TEventItemsData> = async (data) => {
    const eventItemsData = {
      image: data.image,
      title: data.title,
    };
    await mutateAsync(eventItemsData);
    reset();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Event item">
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

export default AddEventItemsModal;
