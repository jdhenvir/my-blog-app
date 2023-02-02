import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout(){
    return (
        <>
            <Navbar />
            <div style={{
                minHeight: "calc(100vh - 209px)",
                // backgroundColor: "black"
            }}>
                <Outlet />
            </div>
            <Footer />

        </>
    )
}

export default MainLayout;