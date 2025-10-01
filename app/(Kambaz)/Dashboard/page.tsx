import Link from "next/link";
import { Row, Col, Card, Button, CardImg, CardBody, CardTitle, CardText} from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
         <Row xs={1} sm={2} lg={4} className="g-4">
          
          {/* Course 1 */}
          <Col className="wd-dashboard-course" style={{ width: "300px"}}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 2 */}
          <Col className="wd-dashboard-course" style={{ width: "300px"}}>
            <Card>
              <Link href="/Courses/5610/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/nodejs.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5610 Web Development
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack Web Development
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 3 */}
          <Col className="wd-dashboard-course" style={{ width: "300px"}}>
            <Card>
              <Link href="/Courses/3200/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/database.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3200 Database Design
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Relational Database Management
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 4 */}
          <Col className="wd-dashboard-course" style={{ width: "300px"}}>
            <Card>
              <Link href="/Courses/4550/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/python.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4550 Python Programming
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Data Science and Machine Learning
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 5 */}
          <Col className="wd-dashboard-course" style={{ width: "300px"}} >
            <Card>
              <Link href="/Courses/2500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/java.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2500 Fundamentals of CS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Object-Oriented Programming
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 6 */}
          <Col className="wd-dashboard-course" style={{ width: "300px"}}>
            <Card>
              <Link href="/Courses/3500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/algorithms.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3500 Algorithms
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Data Structures and Algorithms
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 7 */}
          <Col className="wd-dashboard-course" style={{ width: "300px"}}>
            <Card>
              <Link href="/Courses/4800/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/mobile.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4800 Mobile Development
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    iOS and Android Development
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
}