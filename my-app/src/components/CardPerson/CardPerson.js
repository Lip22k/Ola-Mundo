import "./CardPerson.css"

function Person({name, urlImg, description}) {
    return (
        <div className="Card">
            <h3 className="Card__name">{name}</h3>
            <img className="Card__img" src={urlImg}/>
            <p className="Card__description">{description}</p>
        </div>
    )
}

export default Person;