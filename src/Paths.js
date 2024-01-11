import NavbarCompo from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import DataStore from './Storage'
import CategoriesPage from './CategoriesPage'
import CartPage from './CartPage'

function Paths() {
    return (
        <div>
            <DataStore>
                <NavbarCompo />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/category/:name" element={<CategoriesPage />}></Route>
                    <Route path='/cart' element={<CartPage />}></Route>
                </Routes>
            </DataStore>
        </div>
    )
}

export default Paths