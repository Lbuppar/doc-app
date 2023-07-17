import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div className="container">

            <header>

                <div className="logo">



                </div>

                <nav>
                    <NavLink to="/">Home page</NavLink>
                    <NavLink to="/login">Login page</NavLink>
                    <NavLink to="/register">Register page</NavLink>
                </nav>
            </header>


            <main>
                <Outlet />
            </main>





        </div>
    )
}
export default RootLayout