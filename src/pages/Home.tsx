import { useEffect, useState } from "react";
import Footer from "../componentes/footer";

function Products() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const showProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        const result = await response.json();
        setProducts(result);
        setLoading(false);
    };

    useEffect(() => {
        showProducts();
    }, []);

    return (
        <>
            <div className="about-container">
                <h1 className="about-title">Inicio</h1>
                <h2 className="about-subtitle">¡Conoce nuestros productos!</h2>
                <div className="divider"></div>

            </div>

            <div className="container">
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {products.map((item, index) => (
                            <div className="col-6 col-md-3 mb-4" key={index}>
                                <div className="card" style={{ height: '500px' }}> 
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="card-img-top"
                                        style={{ height: '300px', objectFit: 'cover' }}  
                                    />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title text-center" style={{ fontSize: '18px' }}> 
                                            {item.title}
                                        </h5>
                                        <h6 className="card-price text-center" style={{ fontSize: '16px', marginTop: '10px' }}> 
                                            ${item.price}
                                        </h6>
                                        <div className="d-flex justify-content-center mt-auto">
                                            <button className="btn btn-primary">Añadir al Carrito</button> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer/>
        </>
    );
}

export default Products;
