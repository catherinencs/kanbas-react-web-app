import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        
        {/* Course 1: React JS */}
        <div className="col">
          <div className="card rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '270px' }}>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
              <img src="/images/reactjs.jpg" alt="React JS" className="card-img-top" style={{ height: 160 }} />
              <div className="card-body">
                <h5 className="card-title">CS1234 12631 React JS</h5>
                <p className="card-text">CS1234.12631.202410</p>
                <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 2: Node JS */}
        <div className="col">
          <div className="card rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '270px' }}>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5678/Home">
              <img src="/images/nodejs.jpg" alt="Node JS" className="card-img-top" style={{ height: 160 }} />
              <div className="card-body">
                <h5 className="card-title">CS5678 34101 Node JS</h5>
                <p className="card-text">CS5678.34101.202410</p>
                <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 3: Python */}
        <div className="col">
          <div className="card rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '270px' }}>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/9101/Home">
              <img src="/images/python.jpg" alt="Python" className="card-img-top" style={{ height: 160 }} />
              <div className="card-body">
                <h5 className="card-title">CS9101 56789 Python</h5>
                <p className="card-text">CS9101.56789.202410</p>
                <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 4: Data Science */}
        <div className="col">
          <div className="card rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '270px' }}>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1122/Home">
              <img src="/images/data-science.jpg" alt="Data Science" className="card-img-top" style={{ height: 160 }} />
              <div className="card-body">
                <h5 className="card-title">DS1122 98765 Data Science</h5>
                <p className="card-text">DS1122.98765.202410</p>
                <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 5: Machine Learning */}
        <div className="col">
          <div className="card rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '270px' }}>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/3344/Home">
              <img src="/images/machine-learning.jpg" alt="Machine Learning" className="card-img-top" style={{ height: 160 }} />
              <div className="card-body">
                <h5 className="card-title">CS3344 10293 Machine Learning</h5>
                <p className="card-text">CS3344.10293.202410</p>
                <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 6: Databases */}
        <div className="col">
          <div className="card rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '270px' }}>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5566/Home">
              <img src="/images/database.jpg" alt="Databases" className="card-img-top" style={{ height: 160 }} />
              <div className="card-body">
                <h5 className="card-title">CS5566 78432 Databases</h5>
                <p className="card-text">CS5566.78432.202410</p>
                <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Course 7: AWS Cloud */}
        <div className="col">
          <div className="card rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '270px' }}>
            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/7788/Home">
              <img src="/images/aws.jpg" alt="AWS Cloud" className="card-img-top" style={{ height: 160 }} />
              <div className="card-body">
                <h5 className="card-title">CS7788 45321 AWS Cloud</h5>
                <p className="card-text">CS7788.45321.202410</p>
                <p className="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
