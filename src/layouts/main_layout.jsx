import { Outlet } from "react-router"
import Navbar from "../components/UI/Navbar"

function MainLayout() {
    return <div>
        <Navbar/>
        <div className="flex-1">
            <Outlet/>
        </div>
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    </div>
}
export default MainLayout