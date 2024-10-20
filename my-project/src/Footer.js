"use client";
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-yellow-400 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between py-6 md:flex-row">
                    <div className="text-white text-center md:text-left">
                        <a href="/" className="text-white text-lg font-semibold">
                            AlucinoTeca COESD
                        </a>
                        <p className="text-sm">© 2024 Todos os direitos reservados.</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <div className="flex space-x-4">
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Home
                            </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Quem somos
                            </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Contato
                            </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Acervo
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;
