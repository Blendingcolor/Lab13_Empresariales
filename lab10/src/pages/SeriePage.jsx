import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent"
import SerieComponent from "../components/SerieComponent"
import { getAllSerieService } from "../services/SerieService";

function SeriePage() {

    const [series, setSeries] = useState([]);

    const loadData = async () => {
        const resp = await getAllSerieService();
        setSeries(resp.data);
    }
    useEffect(() => {
        loadData();
    }, []);
    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                    <h3>Series</h3>
                    <div>
                        <Link to="/series/new" className="btn btn-primary me-2">Nuevo</Link>
                    </div>
                </div>
                <div className="row">
                    {series.map((serie) => (
                        <div key={serie.id} className="col-md-3 mb-3">
                            <SerieComponent
                                codigo={serie.id}
                                nombre={serie.name}
                                categoria={serie.category_description}
                                imagen={"serie.png"}
                                lista={series}
                                actualizarLista={setSeries}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default SeriePage