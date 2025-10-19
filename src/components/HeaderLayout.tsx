import { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";

const HeaderLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { path: '/', label: 'Inicio' },
        { path: '/sobremi', label: 'Sobre mí' },
        { path: '/servicios', label: 'Servicios' },
        { path: '/contacto', label: 'Contacto' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        {/* Logo/Brand */}
                        <Link 
                            to="/" 
                            className="merriweather text-lg sm:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                        >
                            Lic. Walter Cárcamo
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                                        openSans px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300
                                        ${isActive(item.path) 
                                            ? 'bg-blue-100 text-blue-700 shadow-sm' 
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg 
                                className={`w-6 h-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`
                    md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200
                    ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                    <nav className="px-4 py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`
                                    openSans block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                                    ${isActive(item.path) 
                                        ? 'bg-blue-100 text-blue-700 shadow-sm' 
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                    }
                                `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center space-y-4">
                        <div className="flex justify-center items-center space-x-6 text-gray-600">
                            <a 
                                href="mailto:walter.carcamo.f@gmail.com" 
                                className="hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
                            >
                                <span>📧</span>
                                <span className="openSans text-sm">walter.carcamo.f@gmail.com</span>
                            </a>
                            <a 
                                href="https://wa.me/5492966215003" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
                            >
                                <span>📱</span>
                                <span className="openSans text-sm">+54 9 2966 215003</span>
                            </a>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                            <p className="openSans text-sm text-gray-500">
                                © 2024 Alta Mente Psi - Lic. Walter Cárcamo
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HeaderLayout;
