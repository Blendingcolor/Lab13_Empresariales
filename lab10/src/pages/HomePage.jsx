import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext"
import { useContext } from "react"

function HomePage() {

    const { usuario } = useContext(AppContext);

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Bienvenido {usuario}</h3>
                    <p className="text-muted">
                        Explora nuestras funcionalidades y accede a tus series y categorías favoritas.
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Series</h5>
                                <p className="card-text">
                                    Explora y gestiona las series disponibles en nuestra colección.
                                </p>
                                <Link to="/series" className="btn btn-primary">
                                    Ver Series
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Categorías</h5>
                                <p className="card-text">
                                    Administra las categorías de tus series favoritas.
                                </p>
                                <Link to="/categories" className="btn btn-primary">
                                    Ver Categorías
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h4>¿Qué puedes hacer aquí?</h4>
                    <ul>
                        <li>Agregar nuevas series o categorías.</li>
                        <li>Editar información existente.</li>
                        <li>Eliminar series o categorías que ya no necesites.</li>
                    </ul>
                </div>

                <div className="mt-4 border-top pt-3">
                    <h5>¿Necesitas ayuda?</h5>
                    <p>
                        Si tienes algún problema o consulta, no dudes en contactarnos a través de nuestro{" "}
                        <a href="mailto:soporte@ejemplo.com">correo electrónico</a>.
                    </p>
                </div>
            </div>
        </>
    );
}

export default HomePage;
