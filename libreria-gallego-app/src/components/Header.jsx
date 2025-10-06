
export default function Header() { 
  return ( 
    <section id="inicio" className="scroll-mt-20 pt-28 md:pt-32 bg-white"> 
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center"> 
        {/* Texto principal */}
        <div> 
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#3C8C56]"> 
            Librería Gallego
          </h1> 
          <p className="mt-4 text-lg text-gray-600 text-[18px]"> 
            Bienvenido a La librería de ensueño donde todo lo que quieras aprender lo 
            encontraras
          </p> 
        </div> 
  
        {/* Imagen / logo */}
        <div className="relative"> 
          <div className="rounded-full p-0 grid place-items-center"> 
            <img src="../src/assets/libreria-logo.png" alt="Logo Librería Gallego" className="rounded-full w-64 h-64 object-cover shadow-[0_0_20px_4px_rgba(60,140,86,0.7)]"/> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}
