import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="badge rounded-pill bg-light text-dark me-2">40% of Total</span>
      <FaPlus className="me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}