import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="d-flex justify-content-between align-items-center mb-4">
      <div className="input-group" style={{ width: "300px" }}>
        <span className="input-group-text bg-white">
          <BiSearch />
        </span>
        <input 
          type="text"
          className="form-control" 
          placeholder="Search for Assignments"
          id="wd-search-assignment" 
        />
      </div>
      <div>
        <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
          <FaPlus className="me-2" /> Group
        </Button>
        <Button variant="danger" size="lg" id="wd-add-assignment">
          <FaPlus className="me-2" /> Assignment
        </Button>
      </div>
    </div>
  );
}