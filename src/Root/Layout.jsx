import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Layout = () => {
    return (
        <div>
            <Nav/>
            hello
            <Outlet/>
            world
        </div>
    );
};

export default Layout;