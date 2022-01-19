import React from 'react';

function NavTabs(props) {
    const tabs = ['About', 'Contact'];
    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid="link" href="/">
                    <span id="name">Jeffrey Brittingham</span>
                </a>
            </h2>
            <nav>
                <ul className='nav nav-tabs'>
                    {tabs.map(tab => (
                        <li className='nav-item' key={tab}>
                            <a href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                }>
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default NavTabs;