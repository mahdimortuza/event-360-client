import { useGetEventItems } from "@/api/admin/eventItem/eventItem.hook";
import AddEventItemsModal from "@/components/addEventItemsModal/AddEventItemsModal";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { HandMetal, PencilRuler, Trash2 } from "lucide-react";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import Swal from "sweetalert2";

const EventItemsManagement = () => {
  // for opening and closing modal
  const [isOpen, setIsOpen] = useState(false);

  // for handling progress bar
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 100);
    return () => clearTimeout(timer);
  }, []);

  // loading data using tanstack query
  const { data: eventItems, isError, isLoading } = useGetEventItems();

  // query client for re-fetching data
  const queryClient = useQueryClient();

  // deleting services

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(
        `https://event-360-server-alpha.vercel.app/api/v1/event-item/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["eventItems"] });
    },
  });

  const handleDelete = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutateAsync(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleUpdate = async (id: any) => {
    console.log(id);
  };

  if (isLoading) {
    return (
      <Progress value={progress} className="w-[380px] mx-auto mt-[100px]" />
    );
  }
  if (isError) {
    return <h1>Something went wrong.</h1>;
  }

  console.log(eventItems);

  return (
    <div>
      <div className="flex justify-between p-10 item-center">
        <h1 className="text-[36px] text-dark-blue font-semibold flex gap-4 items-center justify-center">
          <span> Event Items</span>{" "}
          <HandMetal className="text-red-600 font-bold" />
        </h1>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-500 hover:bg-red-600 w-36 h-5 rounded-md"
        >
          Add service
        </Button>
        <AddEventItemsModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <div />
      </div>

      <div className="px-10">
        <Table>
          <TableCaption>List of our event items.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>SL/NO</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Event name</TableHead>
              <TableHead>Edit event</TableHead>
              <TableHead className="text">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eventItems.map(
              (event: {
                id: Key | null | undefined;
                index: number;
                img: string | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <TableRow key={event.id}>
                  <TableCell>{event.index + 1}</TableCell>
                  <TableCell>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={event.img}
                    ></img>
                  </TableCell>
                  <TableCell>
                    <h1 className="text-[18px] font-bold text-dark-blue">
                      {event.title}
                    </h1>
                  </TableCell>
                  {/* --------------------------------------------------------------------------------------------------- */}{" "}
                  <TableCell className="text-right">
                    {/* <button onClick={() => handleUpdate(event.id)}> */}
                    <PencilRuler
                      onClick={() => {
                        setIsOpen(!isOpen);
                        handleUpdate(event.id);
                      }}
                      className="text-white cursor-pointer bg-slate-400 w-8 h-8 p-2 rounded-md text-[20px]"
                    />
                    {/* </button> */}

                    {/* <UpdateeventModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                  </TableCell>
                  <TableCell className="text-right">
                    <button onClick={() => handleDelete(event.id)}>
                      <Trash2 className="text-white cursor-pointer bg-red-600 w-8 h-8 p-2 rounded-md text-[20px]" />
                    </button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EventItemsManagement;
