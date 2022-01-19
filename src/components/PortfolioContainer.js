import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
//import Portfolio from './components/Portfolio';
//import Resume from './components/Resume';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About></About>;
            case 'Contact':
                return <Contact></Contact>;
            default:
                return <About></About>;
        }
    };

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage(currentPage)}</div>
        </div>
    );
}

export default Portfolio;