function Card({item , description}){
    return  <div className="heading">
        <h3>{item}</h3>
        {Array.isArray(description) ? <ul className="list">{description}</ul> : <p>{description}</p>}
    </div>
}

export default Card;