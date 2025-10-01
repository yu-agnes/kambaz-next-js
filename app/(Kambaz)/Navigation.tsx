import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { BsGearFill } from "react-icons/bs";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  return (
    <ListGroup 
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" 
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      {/* Northeastern Logo */}
      <ListGroupItem 
        className="bg-black border-0 text-center" 
        as="a"
        target="_blank" 
        href="https://www.northeastern.edu/" 
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      {/* Account - White icon and text as specified */}
      <ListGroupItem className="border-0 bg-black text-center p-2">
        <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
          <FaRegCircleUser className="fs-2 text-white" />
          <div style={{ fontSize: "12px", marginTop: "2px" }}>Account</div>
        </Link>
      </ListGroupItem>

      {/* Dashboard - Active state with white background */}
      <ListGroupItem className="border-0 bg-white text-center p-2">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
          <AiOutlineDashboard className="fs-2 text-danger" />
          <div style={{ fontSize: "12px", marginTop: "2px" }}>Dashboard</div>
        </Link>
      </ListGroupItem>

      {/* Courses - Red icon, white text */}
      <ListGroupItem className="border-0 bg-black text-center p-2">
        <Link href="/Dashboard" id="wd-course-link" className="text-white text-decoration-none">
          <LiaBookSolid className="fs-2 text-danger" />
          <div style={{ fontSize: "12px", marginTop: "2px" }}>Courses</div>
        </Link>
      </ListGroupItem>

      {/* Calendar - Red icon, white text */}
      <ListGroupItem className="border-0 bg-black text-center p-2">
        <Link href="/Calendar" id="wd-calendar-link" className="text-white text-decoration-none">
          <IoCalendarOutline className="fs-2 text-danger" />
          <div style={{ fontSize: "12px", marginTop: "2px" }}>Calendar</div>
        </Link>
      </ListGroupItem>

      {/* Inbox - Red icon, white text */}
      <ListGroupItem className="border-0 bg-black text-center p-2">
        <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none">
          <FaInbox className="fs-2 text-danger" />
          <div style={{ fontSize: "12px", marginTop: "2px" }}>Inbox</div>
        </Link>
      </ListGroupItem>

      {/* Labs - Red icon (using gear icon), white text */}
      <ListGroupItem className="border-0 bg-black text-center p-2">
        <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none">
          <BsGearFill className="fs-2 text-danger" />
          <div style={{ fontSize: "12px", marginTop: "2px" }}>Labs</div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}