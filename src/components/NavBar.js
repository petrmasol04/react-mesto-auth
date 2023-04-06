import { Routes, Route, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='menu'>
            <Routes>
                <Route path='/sign-up' element={
                    <NavLink className='menu__link' to='/sign-in'>Войти</NavLink>
                }> </Route>
                <Route path='/sign-in' element={
                    <NavLink className='menu__link' to='/sign-up' >Регестрация</NavLink>
                }> </Route>
                <Route path='/' element={
                    <>
                        <p className="menu__email">email</p>
                        <button className='menu__button'>Выйти</button>
                    </>
                }> </Route>
            </Routes>
        </nav>

    )
}

export default NavBar;
