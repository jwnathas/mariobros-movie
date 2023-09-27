import "./style.css"
import Movie from "../../assets/logo-movie.png"
import marioLuigi from "../../assets/mario-and-luigi.png"

export default function Main() {
    return (
        <main>
            <div className="main-info">
                <img 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                src={Movie} 
                width="250px" 
                alt="Movie" />

                <p>
                    Um dia, Mario e Luigi vão para no reino dos cogumelos, governado pela Princesa Peach,
                    mas ameaçado pelo rei dos Koopas, Bowser, que vai fazer de tudo para conseguir
                    reinar todos os lugares. É então quando Luigi é raptado por Bowser e o usa para
                    procurar Mario, o único capaz de deter o Koopa e reestabelexcer a paz.
                </p>

                <div>
                    <a href="https://www.youtube.com/watch?v=cDNkh5WybZo">Assistir Trailer</a>
                    <button>Comprar ingresso</button>
                </div>
            </div>

            <img src={marioLuigi} width="580px" alt=""></img>
        </main>
    )
}