function Footer (){
    return(
        <>
         <footer style={{ 
                width: '100%', 
                backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                color: 'white', 
                textAlign: 'center', 
                padding: '15px 0',
                zIndex: 2 
            }}>
                <div className="footer-content">
                    <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
                    <ul className="social-media" style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ display: 'inline', margin: '0 10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a></li>
                        <li style={{ display: 'inline', margin: '0 10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a></li>
                        <li style={{ display: 'inline', margin: '0 10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;