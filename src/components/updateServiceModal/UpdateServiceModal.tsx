export type TData = {
  image: string;
  title: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
};

// const updateService = async (id, data) => {
//   try {
//     const response = await axios.patch(
//       `https://event-360-server-alpha.vercel.app/api/v1/services/${id}`,
//       data,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const UpdateServiceModal = () => {
  //   const { register } = useForm();

  // query client for re-fetching data
  // const queryClient = useQueryClient();

  //   updating service data
  // const { mutateAsync } = useMutation({
  //   mutationFn: async (data) => updateService(id, data),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["services"] });
  //   },
  // });

  // const onCancel = () => {
  //   setIsOpen(!isOpen);
  // };

  // const onSubmit = async (data) => {
  //   try {
  //     const serviceData = {
  //       image: data.image,
  //       title: data.title,
  //       feature1: data.feature1,
  //       feature2: data.feature2,
  //       feature3: data.feature3,
  //       feature4: data.feature4,
  //       feature5: data.feature5,
  //     };
  //     await mutateAsync(serviceData);
  //     console.log(data);
  //     reset();
  //   } catch (error) {

  //     console.log(error);
  //   }
  // };

  return <div>Hello</div>;
};

export default UpdateServiceModal;

//<Modal
// // isOpen={isOpen} setIsOpen={setIsOpen}
// title="Service">
//   <XCircle
//     // onClick={onCancel}
//     className=" cursor-pointer w-8 h-8  text-red-600 rounded-md absolute top-2 right-2"
//     type="submit"
//   />

//   <form
//     className="grid grid-cols-2 gap-2 p-1"
//     // onSubmit={handleSubmit(onSubmit)}
//   >
//     <input
//       className="rounded-md border-light-blue"
//       type="text"
//       placeholder="Image link"
//       {...register("image")}
//     />
//     <input
//       className="rounded-md border-light-blue"
//       type="text"
//       placeholder="Service title"
//       {...register("title")}
//     />
//     <input
//       className="rounded-md border-light-blue"
//       type="text"
//       placeholder="Feature-1"
//       {...register("feature1")}
//     />
//     <input
//       className="rounded-md border-light-blue"
//       type="text"
//       placeholder="Feature-2"
//       {...register("feature2")}
//     />
//     <input
//       className="rounded-md border-light-blue"
//       placeholder="Feature-3"
//       type="text"
//       {...register("feature3")}
//     />
//     <input
//       className="rounded-md border-light-blue"
//       placeholder="Feature-4"
//       type="text"
//       {...register("feature4")}
//     />
//     <input
//       className="rounded-md border-light-blue"
//       placeholder="Feature-5"
//       type="text"
//       {...register("feature5")}
//     />

//     <Button
//       // onClick={onCancel}
//       className=" w-10 rounded-md absolute bottom-6 right-6"
//       type="submit"
//     >
//       Submit
//     </Button>
//   </form>
// </Modal>
