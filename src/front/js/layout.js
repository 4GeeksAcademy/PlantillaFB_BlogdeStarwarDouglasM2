import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { ContextProvider } from "./store/appContext"; // Ajusta la ruta según sea necesario
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharacterDetail } from "./component/CharacterDetail.jsx";
import { PlanetDetail } from "./component/PlanetDetail.jsx";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <ContextProvider> {/* Asegúrate de que ContextProvider envuelva toda la aplicación */}
            <div className="backgHome">
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/character/:id" element={<CharacterDetail />} />
                            <Route path="/planet/:uid" element={<PlanetDetail />} />
                            <Route path="/demo" element={<Demo />} />
                            <Route path="/single" element={<Single />} />
                            <Route path="*" element={<h1>Not found!</h1>} />
                        </Routes>
                        <Footer />
                    </ScrollToTop>
                </BrowserRouter>
            </div>
        </ContextProvider>
    );
};

export default Layout;
