import React from 'react'


function Props({imgSrc,title,description,seriesLink}) {
  // aek varibal ma main path set kri didho ane imgSrc ne parameter ma pass kri didhu
    const imgUrl = 'src/assets/img/' + imgSrc
  return (
    <>
  {/* Card */}
<div className="card" style={{width: '18rem',margin:'0 auto',backgroundImage: " linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",boxShadow: " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
  <img src={imgUrl} style={{objectFit:'cover',height:'100%'}} className="card-img-top mt-2 border-1 rounded" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={seriesLink} target='_blank' className="btn btn-success">Watch Now</a>
  </div>
</div>
    
    </>
  )
}

export default Props
