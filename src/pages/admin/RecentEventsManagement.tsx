import { useGetRecentEvents } from "@/api/admin/recentEvent/recentEvent.hook";
import AddRecentEventModal from "@/components/addRecentEventModal/AddRecentEventModal";
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

const RecentEventsManagement = () => {
  // for opening and closing modal
  const [isOpen, setIsOpen] = useState(false);

  // for handling progress bar
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 100);
    return () => clearTimeout(timer);
  }, []);

  // loading data using tanstack query
  const { data: recentEvents, isError, isLoading } = useGetRecentEvents();

  // query client for re-fetching data
  const queryClient = useQueryClient();

  // deleting services

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(
        `https://event-360-server-alpha.vercel.app/api/v1/recent-event/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recentEvents"] });
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

  return (
    <div>
      <div className="flex justify-between p-10 item-center">
        <h1 className="text-[36px] text-dark-blue font-semibold flex gap-4 items-center justify-center">
          <span> Recent Events</span>{" "}
          <HandMetal className="text-red-600 font-bold" />
        </h1>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-500 hover:bg-red-600 w-36 h-5 rounded-md"
        >
          Add service
        </Button>
        <AddRecentEventModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <div />
      </div>

      <div className="px-10">
        <Table>
          <TableCaption>List of our recent events.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>SL/NO</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Event name</TableHead>
              <TableHead>Edit recent event</TableHead>
              <TableHead className="text">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentEvents.map(
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

export default RecentEventsManagement;
