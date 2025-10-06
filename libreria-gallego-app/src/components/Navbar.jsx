import React, {useEffect, useState } from 'react';
import {Menu, X} from 'lucide-react';
import {sections} from '../App';
import icon_navbar from "../assets/libreria_icon_navbar.png";

export default function Navbar() {
    
    const [open, setOpen] = useState(false);
    const [elevated, setElevated] = useState(false);
    
    useEffect (()=> {
        const onScroll = () => setElevated (window.scrollY > 4);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return(
        <header className={`fixed top-0 inset-x-0 z-50 bg-[#3C8C56] backdrop-blur  border-b transition ${elevated ? "shadow-sm" : ""}`}> 
            <nav className="mx-auto max-w-6xl px-4 md:px-6 py-3 flex items-center justify-between"> 
                <a href="#inicio" className="flex items-center gap-2 font-semibold text-white hover:text-gray-100"> 
                    <img src={icon_navbar} alt=""  className="h-15 w-15 rounded-full p-0 object-contain "/>
                </a>
                

            {/* Boton movil */}
            <button 
                className="md:hidden p-2 rounded-lg hover:bg-white" 
                onClick={() => setOpen(v => !v)} 
                aria-label={open ? "Cerrar menú" : "Abrir menú"} 
                aria-expanded={open}>
            {open ? <X className="size-6 text-[#3C8C56]" /> : <Menu className="size-6 text-[#3C8C56]" />}
            </button>

            {/* Links desktop */}
            <ul className='hidden md:flex items-center gap-6'>
                {sections.map(s => (
                    <li key={s.id}>
                        <a href={`#${s.id}`} className="text-white hover:text-gray-100 px-1">
                            {s.label}
                        </a>
                    </li>
                ))}
            </ul>
            </nav>    
            {/* Links en movil */}
            {
             open && (

                <div className='md:hidden border-t bg-[#3C8C56]'>
                    <div className='mx-auto max-w-6xl px-4 py-4'>
                    <ul className='flex flex-col gap-3'>
                        {sections.map(s => (
                            <li key={s.id}>
                                <a href={`#${s.id}`} onClick={() => setOpen(false)} className='block py-1'>
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>                
             )
            }
        </header>
    );
}
