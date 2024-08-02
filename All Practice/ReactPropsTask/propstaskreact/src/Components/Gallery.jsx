import React from 'react'

import GalleryCommon from './GalleryCommon'

function Gallery() {
  return (
    <>
      <div>
      <h1 className='text-center text-primary bg-black bg-body-secondary p-2'>Notable Scientists</h1>
        <div className='container my-3 '>
            <div className='row g-3 '>
      <GalleryCommon imgUrl={"szV5sdG"} scName={"Maria Skłodowska-Curie"} Profession={'physicist and chemist'} AwardsNum={'4'} Awards={'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'} Discovered={'polonium (chemical element)'}></GalleryCommon>
      <GalleryCommon imgUrl={"YfeOqp2"} scName={"Katsuko Saruhashi"} Profession={'geochemist'} AwardsNum={'2'} Awards={'Miyake Prize for geochemistry, Tanaka Prize'} Discovered={'a method for measuring carbon dioxide in seawater'}></GalleryCommon>
      </div>
      </div>
    </div>
    </>
  )
}

export default Gallery

// This Gallery component contains some very similar markup for two profiles. 
// Extract a Profile component out of it to reduce the duplication. 
// You’ll need to choose what props to pass to it.