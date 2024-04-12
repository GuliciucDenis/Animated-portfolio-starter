import "./Navbar.scss"
import { Sidebar } from "./sidebar/Sidebar"

export const Navbar = () => {
  return (
    <div className="navbar" >
        {/*Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <span ></span>
            <div className="social" >
                <a href="https://www.facebook.com/iliecristian.guliciuc" ><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/denis_guliciuc/" ><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
