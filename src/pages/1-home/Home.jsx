import "./Home.css"
import Hero from "../../components/2-hero/Hero"
import Main from "../../components/3-main/Main"
import Contact from "../../components/4-Contact/Contact"

const Home = () => {
    return (
        <div className="container-components">
            <Hero />
            <div className="divider"/>
            <Main />
            <div className="divider"/>
            <Contact />
        </div>
    )
}

export default Home