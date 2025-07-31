import { Link } from "react-router-dom"
import "./Footer.css"
const Links = [
    {id: 1, page: "About", path: "/about" },
    {id: 2, page: "Articles", path: "/articles" },
    {id: 3, page: "Projects", path: "/projects" },
    {id: 4, page: "Speaking", path: "/speaking" },
    {id: 5, page: "Uses", path: "/uses" },
]

const Footer = () => {
    return (
        <footer className="flex">
            <ul className="flex">
                {
                    Links.map((e) => (
                        <li key={e.id}>
                            <Link className="link-footer" to={e.path}>{e.page}</Link>
                        </li>
                    ))
                }
            </ul>

            <p className="sub-title">&copy; 2023 spencer sharp. All Rights Reserved</p>
        </footer>
    )
}

export default Footer