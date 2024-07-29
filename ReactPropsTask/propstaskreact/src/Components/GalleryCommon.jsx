import React from 'react'
import GetImageUrl from './GetImageUrl'

function GalleryCommon({imgUrl,scName,Profession,AwardsNum,Awards,Discovered}) {
  return (
    <>
      {/* <div>
      <section className="profile">
        <h2>{scName}</h2>
        <img
          className="avatar"
          src={GetImageUrl(imgUrl)}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {Profession}
          </li>
          <li>
            <b>Awards: {AwardsNum} </b> 
            ({Awards})
          </li>
          <li>
            <b>Discovered: </b>
            {Discovered}
          </li>
        </ul>
      </section>
      </div> */}

<div class="card pb-2 mx-auto card1" style={{width: '20rem'}}>
  <img src={GetImageUrl(imgUrl)} class="card-img-top rounded mt-2" alt="Chicago Skyscrapers"/>
  <div class="card-body">
    <h5 class="card-title">{scName}</h5>
    <p class="card-text">Profession : {Profession}</p>
  </div>
  <ul class="list-group list-group-light list-group-small">
    <li class="list-group-item px-4">Awards : {AwardsNum}</li>
    <li class="list-group-item px-4">Awards : {Awards}</li>
    <li class="list-group-item px-4">Discovered : {Discovered}</li>
  </ul>
  {/* <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div> */}
</div>
    </>
  )
}

export default GalleryCommon
