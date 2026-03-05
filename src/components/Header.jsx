import { useState } from 'react'

function Header() {

    const [clicked, setClicked] = useState(false)
    const [active, setActive] = useState('')

    function handleClick() {
        clicked ? setClicked(false) : setClicked(true)
    }

    return (
        <>
            <header className='header'>

                <nav className={`nav-item navbar ${clicked ? 'active' : ''}`}>
                    <a className='item px-4' href="/"> About </a>
                    <a className='item px-4' href="/"> Contact </a>
                    <a className='item px-4' href="/"> Projects </a>
                </nav>
                <div className="nav-item menu">
                    {
                        clicked ?
                            <i className="fa-solid fa-x" type='button' onClick={handleClick}></i> :
                            <i className="fa-solid fa-bars" type='button' onClick={handleClick}></i>
                    }
                </div>
            </header>
        </>
    )
}

export default Header