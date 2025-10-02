import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from 'next/link';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <br /><br /><br />

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          {/* Header */}
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>

          {/* Assignment Items */}
          <ListGroup className="rounded-0">
            {/* A1 */}
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1"
              style={{ borderLeft: '5px solid #198754' }}>
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div className="flex-grow-1">
                  <Link
                    href="/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-dark text-decoration-none fw-bold"
                  >
                    A1
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am
                  </div>
                  <div className="text-muted small">
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentItemControlButtons />
              </div>
            </ListGroupItem>

            {/* A2 */}
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1"
              style={{ borderLeft: '5px solid #198754' }}>
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div className="flex-grow-1">
                  <Link
                    href="/Courses/1234/Assignments/124"
                    className="wd-assignment-link text-dark text-decoration-none fw-bold"
                  >
                    A2
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am
                  </div>
                  <div className="text-muted small">
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentItemControlButtons />
              </div>
            </ListGroupItem>

            {/* A3 */}
            <ListGroupItem className="wd-assignment-list-item p-3 ps-1"
              style={{ borderLeft: '5px solid #198754' }}>
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3 text-success" />
                <div className="flex-grow-1">
                  <Link
                    href="/Courses/1234/Assignments/125"
                    className="wd-assignment-link text-dark text-decoration-none fw-bold"
                  >
                    A3
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am
                  </div>
                  <div className="text-muted small">
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentItemControlButtons />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}