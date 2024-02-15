import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Suspense } from "react";
import Loading from "../loading/Loading";


const Layout = () => {

    return (
        <>
            <div id="header">
                <Header/>
            </div>
            <main id="main" style={{
                minHeight: '100vh'
            }}>
                <Suspense fallback={<Loading/>}>
                    <Outlet/>
                </Suspense>
            </main>
            <Footer/>
        </>
    )
}

export default Layout