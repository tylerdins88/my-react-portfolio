import React, { useState } from "react";
import HeaderNavs from "./HeaderNavs";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Footer from "./Footer";

export default function Main() {
    const [currentPage, setCurrentPage] = useState("Home")

    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Projects") {
            return <Projects />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <HeaderNavs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}