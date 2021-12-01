import "./blogs.scss";
import Topbar from "../topbar/Topbar";
import { Link , CalendarToday ,Person} from "@material-ui/icons";

function Blogs() {
  return (
    <div className="blog">
   

      <section className="blogs">
        <h1 className="heading">
          {" "}
          <span>my</span> blogs{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img loading="lazy" src="assets/images/blog1.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"><CalendarToday  className="fas fa-user"/> </i> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"><Person  className="fas fa-user"/></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link"><Link  className="fas fa-user"/> </i>{" "}
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img loading="lazy" src="assets/images/blog2.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"><CalendarToday  className="fas fa-user"/></i> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"><Person  className="fas fa-user"/></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link"><Link  className="fas fa-user"/> </i>{" "}
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img loading="lazy" src="assets/images/blog3.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"><CalendarToday  className="fas fa-user"/></i> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"><Person  className="fas fa-user"/></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link"><Link  className="fas fa-user"/> </i>{" "}
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img loading="lazy" src="assets/images/blog4.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"><CalendarToday  className="fas fa-user"/></i> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"><Person  className="fas fa-user"/></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link"><Link  className="fas fa-user"/> </i>{" "}
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img loading="lazy" src="assets/images/blog5.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"><CalendarToday  className="fas fa-user"/></i> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"><Person  className="fas fa-user"/></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link"><Link  className="fas fa-user"/> </i>{" "}
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img loading="lazy" src="assets/images/blog6.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"><CalendarToday  className="fas fa-user"/></i> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user"><Person  className="fas fa-user"/></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link"><Link  className="fas fa-user"/> </i>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
