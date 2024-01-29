const Tour = ({ id, image, info, price, name }) => {
  return (
    <article className='tour'>
      <div className='tour-img-container'>
        <img src={image} alt={name} />
        <span className='close-btn'>
          <i className={id}></i>
        </span>
      </div>
      <div className='tour-info'>
        <h3>{name}</h3>
        <h4 className='tour-price'>{price}</h4>
        <p>{info}</p>
        <button className='btn'>not interested</button>
      </div>
    </article>
  )};

export default Tour;