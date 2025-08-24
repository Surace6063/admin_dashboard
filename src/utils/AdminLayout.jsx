import { Outlet } from "react-router-dom"
import AdminSideBar from "../components/AdminSideBar"

const AdminLayout = () => {
  return (
    <div className="flex gap-10">
       <div className="sticky top-0">
         <AdminSideBar />
       </div>
        <div className="flex-1 my-10 mr-20">
            <Outlet />
        </div>
    </div>
  )
}
export default AdminLayout