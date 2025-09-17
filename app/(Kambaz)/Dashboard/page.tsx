import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/5610" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpg" width={200} height={150} alt="Node JS" />
            <div>
              <h5>CS5610 Web Development</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Web Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/3200" className="wd-dashboard-course-link">
            <Image src="/images/database.jpg" width={200} height={150} alt="Database" />
            <div>
              <h5>CS3200 Database Design</h5>
              <p className="wd-dashboard-course-title">
                Relational Database Management
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/4550" className="wd-dashboard-course-link">
            <Image src="/images/python.jpg" width={200} height={150} alt="Python" />
            <div>
              <h5>CS4550 Python Programming</h5>
              <p className="wd-dashboard-course-title">
                Data Science and Machine Learning
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/2500" className="wd-dashboard-course-link">
            <Image src="/images/java.jpg" width={200} height={150} alt="Java" />
            <div>
              <h5>CS2500 Fundamentals of CS</h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Programming
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/3500" className="wd-dashboard-course-link">
            <Image src="/images/algorithms.jpg" width={200} height={150} alt="Algorithms" />
            <div>
              <h5>CS3500 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Data Structures and Algorithms
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/4800" className="wd-dashboard-course-link">
            <Image src="/images/mobile.jpg" width={200} height={150} alt="Mobile Dev" />
            <div>
              <h5>CS4800 Mobile Development</h5>
              <p className="wd-dashboard-course-title">
                iOS and Android Development
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}