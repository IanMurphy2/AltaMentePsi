import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
    return (
        <body className="bg-[#faf0e6]">
            <header className="mx-96 flex justify-between py-5 border-b border-stone-400 openSans">
                <a href="/">Lic. Walter Cárcamo</a>
                <nav className="flex gap-10">
                    <a className="hover:underline" href="/">
                        Inicio
                    </a>
                    <a className="hover:underline" href="/sobremi">
                        Sobre mí
                    </a>
                    <a className="hover:underline" href="">
                        Servicios
                    </a>
                    <a className="hover:underline" href="">
                        Blog
                    </a>
                    <a className="hover:underline" href="">
                        Contacto
                    </a>
                </nav>
            </header>
            <main className="py-5 bg-[#faf0e6] mx-96">
                <Outlet />
            </main>
        </body>
    );
};

export default HeaderLayout;
