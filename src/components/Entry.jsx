export default function Entry(props){
  console.log(props)
    return (
        <article>
        <div className="FujiGroup">
          <img src={props.img.src} alt={props.img.alt} />
          <div>
            <div>
            <img src="/src/assets/marker.png" alt="Marker" />
            <span>{props.location}</span>
            <a href={props.map} >View on Google Maps</a>
          </div>
          <h1>{props.name}</h1>
          <h4>{props.date}</h4>
          <p className="text">{props.text}</p>
          </div>
        </div>
      </article>
    )
}
