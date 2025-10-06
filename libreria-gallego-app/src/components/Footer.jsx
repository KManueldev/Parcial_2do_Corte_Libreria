function Footer() {
    return (
        <footer className="bg-[#3C8C56] text-white text-center p-4">
            <div className="mx-auto max-w-6xl px-4 md:px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Libreria Gallego. Todos los derechos reservados.
                    <a href="inicio" className="hover: text-slate-900"> Volver al inicio</a>
                </p>

            </div>
            
        </footer>
    );
}

export default Footer