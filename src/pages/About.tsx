import Footer from "../componentes/footer";
import "./../css/About.css";

function About() {
    return (
 
                <>
                       <div className="about-container">
            <h1 className="about-title">Acerca de Nosotros</h1>
            <h2 className="about-subtitle">Imagina las posibilidades de vestir bonito y barato</h2>

            <div className="divider"></div>

            <p className="about-description">
                Bienvenido a nuestra tienda, donde la moda se encuentra con la asequibilidad. Nos dedicamos a ofrecerte la mejor calidad en ropa para que puedas lucir increíble sin gastar una fortuna.
            </p>

            <h3 className="about-values-title">Nuestros Valores</h3>
            <ul className="about-values">
                <li>⭐ Calidad</li>
                <li>⭐ Satisfacción del Cliente</li>
                <li>⭐ Integridad</li>
                <li>⭐ Innovación</li>
            </ul>

            <h3 className="about-contact-title">Información de Contacto</h3>
            <div className="contact-info">
                <p><strong>Teléfono:</strong> <a href="tel:+529983501250">+52 998 350 1250</a></p>
                <p><strong>Email:</strong> <a href="mailto:aaronbalamchi@gmail.com">aaronbalamchi@gmail.com</a></p>
                <p><strong>Dirección:</strong> Aún no contamos con tienda física para atención al cliente</p>
            </div>
        </div>
<Footer/>
                </>
    );
}

export default About;
