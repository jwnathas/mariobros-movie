import "./style.css"
import Logo from "../../assets/logo-cap.png"
import RedesSociais from "../RedesSociais"

export default function Header() {
    return (
        <div className="app">
            <header>
                <img src={Logo} alt="logo" />
                <ul className="navigation">
                    <li>
                        <a href="#g" className="navigation-link">Home</a>
                    </li>
                    <li>
                        <a target="blank" href="https://pt.wikipedia.org/wiki/Super_Mario_Bros._O_Filme" className="navigation-link">Story</a>
                    </li>
                    <li>
                        <a target="blank" href="https://wallpapersafari.com/the-super-mario-bros-movie-2023-wallpapers/" className="navigation-link">Wallpapers</a>
                    </li>
                    <li>
                        <a target="blank" href="https://www.youtube.com/watch?v=cDNkh5WybZo" className="navigation-link">Trailer</a>
                    </li>
                </ul>

                <RedesSociais/>
            </header>
        </div>

    )
}