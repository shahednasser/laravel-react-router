function Person ({person: {name, age, image, bio}}) {
  return (
    <div className="d-flex flex-column">
      <img src={image} alt={name} className="image-fluid rounded-circle mx-auto" width="200" height="200" />
      <h2 className="text-center">{name}, {age}</h2>
      <p className="lead text-center">
        {bio}
      </p>
    </div>
  )
}

export default Person