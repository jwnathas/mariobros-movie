import video from "../../assets/background-video.mp4"
import "./style.css"

export default function Background(){
    return (
        <div id="background">
            <video loop autoPlay muted>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}