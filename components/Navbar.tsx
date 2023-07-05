"use client"

import { useState, useEffect } from 'react';


import SmNav from './SmNav';
import LgNav from './lgNav';



export default function Navbar() {
    const [width, setwidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setwidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    // const [navbar, setNavbar] = useState(false)
    return (
        <div>
            {width > 1000 ?
                <LgNav /> :
                <SmNav />
            }
        </div>
    );
}
