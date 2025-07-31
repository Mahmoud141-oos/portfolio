import { Link } from "react-router-dom"
import { FiLink } from "react-icons/fi";
import { TfiArrowRight } from "react-icons/tfi";
import "./Main.css"
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";



const Main = () => {
    const [currentActive, setCurrentActive] = useState("all")
    const [projects, setProjects] = useState([])
    const [allProjects, setAllProjects] = useState([])
    const handleClick = (buttonGategory) => {
        setCurrentActive(buttonGategory)
        const newArr = allProjects.filter((e) => (
            e.category === buttonGategory
        ))
        setProjects(newArr)
    }
    useEffect(() => {
        axios.get("/projectsApi/Projects.json")
            .then((res) => {
                setProjects(res.data.projects);
                setAllProjects(res.data.projects);
            })
            .catch((error) => console.log(error));


    }, [])

    return (
        <main className="flex">
            <div className="btns flex">
                <button onClick={() => { setCurrentActive("all"); setProjects(allProjects); }} className={currentActive === "all" ? "active" : ""}>All Projects</button>

                <button onClick={() => { handleClick("css") }} className={currentActive === "css" ? "active" : ""} >HTML & CSS</button>

                <button onClick={() => { handleClick("js") }} className={currentActive === "js" ? "active" : ""} >JavaScript</button>

                <button onClick={() => { handleClick("react") }} className={currentActive === "react" ? "active" : ""} >React & MUI</button>

                <button onClick={() => { handleClick("node") }} className={currentActive === "node" ? "active" : ""} >Node & Express</button>
            </div>


            <div className="cards flex">
                <AnimatePresence>
                    {
                        Array.isArray(projects) && projects.map((project) => (
                            <motion.div
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                                key={project.id} className="card">
                                <img src={project.imgPath} alt="" />
                                <div className="card-details">
                                    <h1 className="title">{project.projectTitle}</h1>
                                    <p className="sub-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi laudantium commodi voluptatum quae quaerat architecto </p>
                                    <div className="card-links flex">
                                        <div className="icon-links flex">
                                            <a href="" className="icon-link" ><FiLink /></a>
                                            <a href="" className="icon-link" ><FaGithub /></a>
                                        </div>
                                        <Link to={"#"} className="more-link flex">more <span className="flex"><TfiArrowRight /></span></Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </main>
    )
}

export default Main