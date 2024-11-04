import { useEffect, useRef } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useNavigate } from "react-router-dom"; 

function Maps() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const myMap = useRef<Map | null>(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYWFyb25iYWxhbSIsImEiOiJjbTJpNjR5MWcwajBhMm5weHR0MG9zcnQxIn0.6juQ4ScK2x6HJTHzzAa8Pg";
        if (mapContainer.current) {
            myMap.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [-86.85920188260499, 21.13876824758264],
                zoom: 11.5
            });

            new mapboxgl.Marker({ color: 'red' })
                .setLngLat([-86.85920188260499, 21.13876824758264])
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h3>Sucursal 1</h3>
                    <p>Dirección: Av. Cancún #123</p>
                    <img src="https://lh5.googleusercontent.com/p/AF1QipN6NKi6zKLw6LAmCsGlg1GU8_NRYcDX7tziysuG=w408-h306-k-no" alt="Sucursal 1" width="100" />
                `))
                .addTo(myMap.current);

            new mapboxgl.Marker({ color: 'blue' })
                .setLngLat([-86.82295093795713, 21.158377108024425])
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h3>Sucursal 2</h3>
                    <p>Dirección: Av. Kukulcán #456</p>
                    <img src="https://lh5.googleusercontent.com/p/AF1QipN6NKi6zKLw6LAmCsGlg1GU8_NRYcDX7tziysuG=w408-h306-k-no" alt="Sucursal 2" width="100" />
                `))
                .addTo(myMap.current);

            new mapboxgl.Marker({ color: 'green' })
                .setLngLat([-86.84469992461567, 21.061827843687674])
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <h3>Sucursal 3</h3>
                    <p>Dirección: Av. Tulum #789</p>
                    <img src="https://lh5.googleusercontent.com/p/AF1QipN6NKi6zKLw6LAmCsGlg1GU8_NRYcDX7tziysuG=w408-h306-k-no" alt="Sucursal 3" width="100" />
                `))
                .addTo(myMap.current);
        }
        return () => {
            if (myMap.current) {
                myMap.current.remove();
            }
        };
    }, []);

    const handleBackToHome = () => {
        navigate('/'); 
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <div className="about-container" style={{ textAlign: "center", position: "absolute", top: "-118px", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
                <h1 className="about-title">Sucursales</h1>
                <h2 className="about-subtitle">¡Conoce nuestras sucursales!</h2>
            </div>
            <div ref={mapContainer} style={{width: "1000px", height: "500px", margin : "auto", marginTop : "120px", marginBottom : "-700px" }}></div>
        </div>
    );
}

export default Maps;
