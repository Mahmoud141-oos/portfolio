import { Link, useLocation } from "react-router-dom"
import { BsMoonStars } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import "./Header.css"
import { useEffect, useState } from "react"
import { LuSun } from "react-icons/lu";


const Links = [
    { id: 1, page: "About", path: "/about" },
    { id: 2, page: "Articles", path: "/articles" },
    { id: 3, page: "Projects", path: "/projects" },
    { id: 4, page: "Speaking", path: "/speaking" },
    { id: 5, page: "Uses", path: "/uses" },
]

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    // I used the useLocation hook to check if the user is on the home page or not
    const [iconHome, setIconHome] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === "/") {
            setIconHome(false)
        } else {
            setIconHome(true)
        }
    }, [location.pathname])

    useEffect(() => {
        const pathname = location.pathname;

        switch (pathname) {
            case "/":
                document.title = "Mahmoud Abdelgalil - Frontend Developer";
                break;
            case "/about":
                document.title = "About - Mahmoud Abdelgalil";
                break;
            case "/articles":
                document.title = "Articles - Mahmoud Abdelgalil";
                break;
            case "/projects":
                document.title = "Projects - Mahmoud Abdelgalil";
                break;
            case "/speaking":
                document.title = "Speaking - Mahmoud Abdelgalil";
                break;
            case "/uses":
                document.title = "Uses - Mahmoud Abdelgalil";
                break;
            default:
                document.title = "Mahmoud Abdelgalil";
        }
    }, [location]);

    useEffect(() => {
        const nav = document.getElementById("nav");
        if (!nav) return;

        const applyMenuClass = () => {
            const width = window.innerWidth;
            nav.classList.remove("open", "close");

            if (width <= 700) {
                nav.classList.add(openMenu ? "open" : "close");
            } else {
                // على الشاشات الكبيرة ممكن تبقي دايمًا مفتوحة أو تتحكم فيها بشكل مختلف
                nav.classList.remove("open", "close");
            }
        };

        applyMenuClass();

        // ✅ نسمع لتغيير حجم الشاشة
        window.addEventListener("resize", applyMenuClass);

        // ✅ تنظيف بعد الخروج
        return () => {
            window.removeEventListener("resize", applyMenuClass);
        };
    }, [openMenu]);


    const [mode, setMode] = useState(localStorage.getItem("mode") ?? "dark")
    useEffect(() => {
        if (mode === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    }, [mode])

    return (
        <header className="flex" id="up">
            <button className="flex icon-open-menu " onClick={() => setOpenMenu(!openMenu)}><FaBars /></button>

            {
                iconHome ? (
                    <Link to="/" className="profile-img"><img src="/me-nav.png" alt="" /></Link>
                ) : (
                    // I gave it the same class so it would have the same size, but I removed the other properties.
                    <div className="profile-img" />
                )
            }
            <nav id="nav">
                <ul className="flex">
                    <div className="flex ">
                        <h3>Navigation</h3>
                        <button className="flex icon-close-menu" onClick={() => setOpenMenu(!openMenu)} ><IoCloseSharp /></button>
                    </div>
                    {
                        Links.map((link) => (
                            <li key={link.id}>
                                <Link to={link.path} onClick={() => setOpenMenu(!openMenu)}>{link.page}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <button onClick={() => {
                localStorage.setItem("Mode", mode === "dark" ? "light" : "dark")
                setMode(localStorage.getItem("Mode"))
            }} className="flex mode">{mode === "light" ? <BsMoonStars color={'var(#333)'} /> : <LuSun color={'darkorange'} />}</button>
        </header>
    )
}

export default Header