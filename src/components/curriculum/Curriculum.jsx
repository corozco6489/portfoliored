import "./curriculum.css";
import {
  Home,
  Person,
  BusinessCenter,
  Book,
  Contacts,
  LocalPhone,
  Email,
  Language,
  Facebook,
  Instagram,
  LocationOn,
  Mail,
} from "@material-ui/icons";
export default function Curriculum() {
  return (
    <main className="main-content">
      <section className="left-section">
        <div className="left-content">
          <div className="profile">
            <div className="image">
              <img src="assets/images/carlos.jpeg" alt="" />
            </div>
            <h2 className="name">Carlos Orozco</h2>
            <p className="career">Ingeniero Electronico</p>
          </div>
          <div className="contact-info">
            <h3 className="main-title">Contacto</h3>
            <ul>
              <li>
                <i className="fa fa-phone">
                  <LocalPhone />
                </i>
                +593 983592690
              </li>
              <li>
                <i className="fa fa-fax">
                  <Email />
                </i>
                corozco6489@gmail.com
              </li>
              <li>
                <i className="fa fa-globe">
                  <Language />
                </i>
                carlosorozco.tk
              </li>
              <li>
                <i className="fa fa-facebook">
                  <Facebook />
                </i>
                www.facebook.com/carlosorozco
              </li>
              <li>
                <i className="fa fa-instagram">
                  <Instagram />
                </i>
                @carlosorozco
              </li>
              <li>
                <i className="fa fa-map-marker">
                  <LocationOn />
                </i>
                Ambato, Ecuador
              </li>
            </ul>
          </div>
          <div className="skills-section">
            <h3 className="main-title">Software</h3>
            <ul>
              <li>
                <p className="skill-title">Excel</p>
                {/* <div className="progress-bar">
                  <div className="progress js-progress"></div>
                </div> */}
              </li>
              <li>
                <p className="skill-title">Word</p>
              </li>
              <li>
                <p className="skill-title">PowerPoint</p>
              </li>
              <li>
                <p className="skill-title">GNS3</p>
              </li>
              <li>
                <p className="skill-title">Proteus</p>
              </li>
              <li>
                <p className="skill-title">MATLAB</p>
              </li>
              <li>
                <p className="skill-title">Packet Tracer</p>
              </li>
              <li>
                <p className="skill-title"> EVE-NG</p>
              </li>
              <li>
                <p className="skill-title">Tia Portal </p>
              </li>
              <li>
                <p className="skill-title">Arduino IDE</p>
              </li>
              <li>
                <p className="skill-title">Factory IO</p>
              </li>
            </ul>
          </div>
          <div className="references-section">
            <h3 className="main-title">Habilidades tecnicas </h3>
            <div className="referee">
              <h6 className="sub-title"></h6>
              <p className="sub-para"></p>
              <ul>
                <li>
                  <i className="fa fa-phone"></i>
                  Mantenimiento y Armado de computadoras (software y hardware)
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  Instalación de cualquier Sistema Operativo{" "}
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  Conocimiento de Windows y Linux{" "}
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  Manejo y conexión de bases de datos: MySQL, PostgreSQL.{" "}
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  Diseño Web: HTML, CSS, y JavaScript (Conocimiento Básicos){" "}
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  Conocimiento de programación en Python.{" "}
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  Conocimientos básicos de Microsoft Office{" "}
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  Instalaciones Eléctricas Residenciales.{" "}
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  Manejo de equipos y herramientas electrónicas.{" "}
                </li>
              </ul>
            </div>
            {/* <div className="referee">
              <h6 className="sub-title">Michael Bowen</h6>
              <p className="sub-para">Product Manager</p>
              <ul>
                <li>
                  <i className="fa fa-phone">
                    <LocalPhone />
                  </i>
                  07661892982
                </li>
                <li>
                  <i className="fa fa-fax">
                    <Mail />
                  </i>
                  loremipsum@gmail.com
                </li>
              </ul>
            </div>
            <div className="referee">
              <h6 className="sub-title">Michael Bowen</h6>
              <p className="sub-para">Product Manager</p>
              <ul>
                <li>
                  <i className="fa fa-phone">
                    <LocalPhone />
                  </i>
                  07661892982
                </li>
                <li>
                  <i className="fa fa-fax">
                    <Mail />
                  </i>
                  loremipsum@gmail.com
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      <section className="right-section">
        <div className="right-main-content">
          <section className="about sect">
            <h2 className="right-title">Sobre mi</h2>
            <p className="para">
              Soy un egresado de ingeniería en Electrónica y Comunicaciones, con
              ganas y motivación de aprender cosas nuevas en el campo laboral.
              Me considero una persona humilde con una alta capacidad de
              aprendizaje rápido en cualquier tarea de manera autodidactica. A
              continuación veras mi experiencia y habilidades. <br />
              <br />
            </p>
          </section>

          <section className="experince sect">
            <h2 className="right-title">
              EXPERIENCIA <br /> PROFESIONAL{" "}
            </h2>
            <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title">Instalaciones Eléctricas del Salto</h5>
                <p className="para">2015 – Actualidad</p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2">Tareas Realizadas : </h5>
                  <p className="para">
                    • Instalación de medidores de luz eléctrica. <br />•
                    Instalaciones eléctricas residenciales y empresariales.{" "}
                    <br />• Instalación y manejo de aparatos y equipos
                    eléctricos. <br />
                    • Instalaciones de acometidas eléctricas. <br />
                    • Colocación cables y conectarlos a disyuntores, toma
                    corrientes, transformadores y otros componentes. <br />
                    • Solucionar problemas eléctricos y reparar equipos en
                    negocios y hogares. <br />
                    • Reparación y actualización y cambio cableado defectuoso u
                    obsoleto. <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title">
                  Prácticas Preprofesionales en Icono Sistemas
                </h5>
                <p className="para">Nov. 2020 – Jul. 2021 </p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2">Tareas Realizadas :</h5>
                  <p className="para">
                    • Mantenimiento y Armado de computadoras (software y
                    hardware) <br />
                    • Instalación de sistemas operativos (Windows, Linux) <br />
                    • Cambio y Mantenimiento de Cableado estructurado <br />
                    • Instalación de Cámaras de seguridad. <br />
                    • Configuración de Routers (Tplink ). <br />
                    • Manejo de equipos y herramientas electrónicas. <br />
                    • Resolución de problemas de software y hardware. <br />
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title">Google Inc</h5>
                <p className="para">2019 - 2020</p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2">Lead Web developer</h5>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias cupiditate vitae voluptatem deleniti, laboriosam
                    odio nobis quae fugit facilis quo.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title">Apple</h5>
                <p className="para">2020 - Present</p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2">Senior Developer</h5>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias cupiditate vitae voluptatem deleniti, laboriosam
                    odio nobis quae fugit facilis quo.
                  </p>
                </div>
              </div>
            </div> */}
          </section>
          <section className="education sect">
            <h2 className="right-title">EDUCACIÓN</h2>
            <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title">Ambato, Ecuador</h5>
                <p className="para">20001 - 2007</p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2">Escuela José Joaquín de Olmedo</h5>
                  <p className="para"></p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title">Ambato, Ecuador</h5>
                <p className="para">2008 - 2014</p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2">
                    Instituto Superior Tecnológico Docente "Guayaquil"
                  </h5>
                  <p className="para">
                    TÍTULO DE BACHILLER TÉCNICO EN ELECTRÓNICA DE CONSUMO
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title">Ambato, Ecuador</h5>
                <p className="para">20016 - 2021 </p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2">Universidad Técnica de Ambato</h5>
                  <p className="para">
                    EGRESADO DE INGENIERÍA EN ELECTRÓNICA Y COMUNICACIONES
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="awards sect">
            <h2 className="right-title">
              CURSOS Y <br /> CAPACITACIONES
            </h2>
            <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title"></h5>
                <p className="para">2021</p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2"></h5>
                  <p className="para">
                    ✓ Talleres de Redes y Ciberseguridad (2021) organizados por
                    las ramas estudiantiles IEEE de las universidades.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline">
              <div className="left-tl-content">
                <h5 className="tl-title"></h5>
                <p className="para">2021</p>
              </div>
              <div className="right-tl-content">
                <div className="tl-content">
                  <h5 className="tl-title-2"></h5>
                  <p className="para">
                    ✓ Practical Cisco Networking Labs in Cisco Packet Tracer
                    (2021) <br />✓ Universidad de Programación 2021 Python,
                    Java, JavaScript y de Bases de datos (2021)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
