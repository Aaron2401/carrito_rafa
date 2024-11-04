import { useEffect, useState } from "react";


function Products() {
    const [products, setProducts] = useState<any[]>([]); 
    const [loading, setLoading] = useState<boolean>(true); 

    const showProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        const result = await response.json();
        setProducts(result);
        setLoading(false);
        console.log(result);
    };

    useEffect(() => {
        showProducts();
    }, []);

    if (loading) return (
        <>
            <h1>Cargando datos...</h1>
            <button onClick={showProducts}>Consultar API</button>
        </>
    );

    const truncateTitle = (title: string, maxLength: number) => {
        return title.length > maxLength ? title.substring(0, maxLength - 3) + "..." : title;
    };

    return (
        <div className="container">
            <header>
                <h1>Tienda de Ropa</h1>
            </header>
            <div className="row">
                {products.map((item, index) => (
                    <div className="col-6 col-md-3 mb-4" key={index}>
                        <div className="card" style={{ height: '400px' }}> {/* Ajustar la altura de la tarjeta */}
                            <img src={item.image} alt={item.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} /> {/* Imagen más grande */}
                            <div className="card-body d-flex flex-column justify-content-between"> {/* Asegurar que el contenido se muestra */}
                                <h5 className="card-title text-truncate text-center" style={{width : "100%"}}>${item.title}</h5> {/* Título */}
                                <h6 className="card-price text-center">${item.price}</h6> {/* Precio */}
                                <div className="mt-auto">
                                    <button className="btn btn-primary">Añadir al Carrito</button> {/* Botón */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <footer>
                <p>&copy; 2024 Tu Tienda de Ropa</p>
            </footer>
        </div>
    );
}

export default Products;
