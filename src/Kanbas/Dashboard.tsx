import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">


        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/nodejs.jpg" width={200} alt="Node JS" />
            <div>
              <h5>CS5678 Node JS</h5>
              <p className="wd-dashboard-course-title">Backend Development with Node.js</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9101/Home">
            <img src="/images/python.jpg" width={200} alt="Python" />
            <div>
              <h5>CS9101 Python</h5>
              <p className="wd-dashboard-course-title">Introduction to Python Programming</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1122/Home">
            <img src="/images/data-science.jpg" width={200} alt="Data Science" />
            <div>
              <h5>DS1122 Data Science</h5>
              <p className="wd-dashboard-course-title">Data Science Fundamentals</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3344/Home">
            <img src="/images/machine-learning.jpg" width={200} alt="Machine Learning" />
            <div>
              <h5>CS3344 Machine Learning</h5>
              <p className="wd-dashboard-course-title">Foundations of Machine Learning</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5566/Home">
            <img src="/images/database.jpg" width={200} alt="Databases" />
            <div>
              <h5>CS5566 Databases</h5>
              <p className="wd-dashboard-course-title">Introduction to Databases</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7788/Home">
            <img src="/images/aws.jpg" width={200} alt="AWS Cloud" />
            <div>
              <h5>CS7788 AWS Cloud</h5>
              <p className="wd-dashboard-course-title">Cloud Computing with AWS</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9900/Home">
            <img src="/images/mobile-app.jpg" width={200} alt="Mobile App Development" />
            <div>
              <h5>CS9900 Mobile App Development</h5>
              <p className="wd-dashboard-course-title">Building Cross-Platform Mobile Apps</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
