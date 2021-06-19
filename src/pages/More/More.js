import React, { useContext, useEffect } from 'react'

import Header from '../../components/Header/Header'
import TextTitle from '../../components/Text/title'


import './More.css'

import { ThemeContext } from '../../context/ThemeContext'

import ThemeButton from '../../components/ThemeButton/ThemeButton'

const THEME = {
    light: 'Light',
    dim: 'Dim',
    dark: 'Dark'
}

function More() {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = (theme) => {
        setTheme(theme)
        localStorage.setItem('THEME', theme)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header border>
                <TextTitle xbold>Theme</TextTitle>

            </Header>
            <div className="more-page">

                <div>
                    {['light', 'dim', 'dark'].map((th) => (

                        <ThemeButton
                            key={th}
                            primary={th === theme}
                            checked={th === theme}
                            name="theme"
                            onClick={(e) => changeTheme(th)}
                        >
                            {THEME[th]}
                        </ThemeButton>

                    ))}
                </div>
            </div>
        </>
    )
}

export default More
