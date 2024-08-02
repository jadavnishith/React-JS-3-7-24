import Props from "./Component/Props"
import Heading from "./Component/Heading"
function App() {

  return (

    <>
    {/* heading component */}
    <Heading></Heading>

    {/* props card component */}
    <div className=" my-4 container">
        <div className="row gap-2">

      <Props imgSrc='Mirzapur_Season_3.avif'
       title='Mirzapur Season 3'
       description='Trending on Prime'
       seriesLink='https://www.primevideo.com/region/eu/detail/0HV20AIVKWRM0Q9N6NCXO7DKD5/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0D632135M&qid=1721764013481'
      >

       </Props>

      <Props imgSrc='familyman.jpg'
       title='The Family Man'
       description='Trending on Prime'
       seriesLink='https://www.primevideo.com/region/eu/detail/0S3QYI59BAEI5KVLHCKSR91YGD/ref=atv_sr_fle_c_Tn74RA_4_1_4?sr=1-4&pageTypeIdSource=ASIN&pageTypeId=B07XJGD7JQ&qid=1721764623434'
      >

       </Props>

      <Props 
      imgSrc='cak.jpg'
      title='Crime Aaj Kal'
      description='Trending on Prime'
      seriesLink='https://www.primevideo.com/region/eu/detail/0OCQV5G1SSCABM5QWYVQH3U6MN/ref=atv_sr_fle_c_Tn74RA_2_1_2?sr=1-2&pageTypeIdSource=ASIN&pageTypeId=B0CZWYP79J&qid=1721765322956'
      >
      
      </Props>  

      <Props 
      imgSrc='ptl.jpg'
      title='Paatal Lok'
      description='Trending on Prime'
      seriesLink='https://www.primevideo.com/region/eu/detail/0G9IEOHCN8KMY6COD9ILGH7IY5/ref=atv_sr_fle_c_Tn74RA_5_1_5?sr=1-5&pageTypeIdSource=ASIN&pageTypeId=B087FX866T&qid=1721765620442'
      >
      </Props > 

      <Props 
      imgSrc='brt.jpg'
      title='Breathe'
      description='Trending on Prime'
      seriesLink='https://www.primevideo.com/region/eu/detail/0LPIP7N3YF6AF0641BL3I71ULB/ref=atv_sr_fle_c_Tn74RA_8_1_8?sr=1-8&pageTypeIdSource=ASIN&pageTypeId=B079HCTXDD&qid=1721765620442'
      >
        
      </Props>

      <Props 
      imgSrc='jcjr.jpg'
      title="Tom Clancy's Jack Ryan"
      description='Trending on Prime'
      seriesLink='https://www.primevideo.com/region/eu/detail/0GDOSMXQWN8COANTIN8SX9I5C2/ref=atv_sr_fle_c_Tn74RA_14_1_14?sr=1-14&pageTypeIdSource=ASIN&pageTypeId=B07DL9TSNY&qid=1721766181533'
      >
        
      </Props>

      <Props 
      imgSrc='hna.jpg'
      title='Hanna'
      description='Trending on Prime'
      seriesLink='https://www.primevideo.com/region/eu/detail/0GDQD61DFTIOW70O03Z2KDUY84/ref=atv_sr_fle_c_Tn74RA_15_1_15?sr=1-15&pageTypeIdSource=ASIN&pageTypeId=B07NFD5SB6&qid=1721766181533'
      >
        
      </Props>

      <Props 
      imgSrc='lut.jpg'
      title='Luther'
      description='Trending on Prime'
      seriesLink='https://www.primevideo.com/region/eu/detail/0RJIQZIESGPFZV10VWL2Y8VYUF/ref=atv_sr_fle_c_Tn74RA_22_1_22?sr=1-22&pageTypeIdSource=ASIN&pageTypeId=B0B8RQWHGT&qid=1721766181533'
      >
        
      </Props>

      {/* Task 24-7-24 */}
      
        </div>
      </div>
           
      
    </>
  )
}

export default App
