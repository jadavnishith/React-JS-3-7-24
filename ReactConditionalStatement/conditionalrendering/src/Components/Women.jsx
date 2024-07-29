import React from 'react'

function Women({imgSrc,title,price,ofrPrice,discount,buyLink}) {
    const imgUrl = "src/assets/img/" + imgSrc
  return (
    <>
      <div className="card" style={{width: '20rem',margin:'0 auto', backgroundImage: " linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",}}>
  <img src={imgUrl} style={{objectFit:'cover',height:'100%'}} className="card-img-top mt-2 border-1 rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h4 className="card-title">{price}</h4>
    <p className="card-title"><del>{ofrPrice}</del> <small className='text-success'>{discount}</small> </p>
    <a href={buyLink} target='_blank' className="btn btn-danger ">Buy Now</a>
  </div>
</div>
    </>
  )
}

export default Women
