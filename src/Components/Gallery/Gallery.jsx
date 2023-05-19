import React from 'react';
import './Gallery.css'

const Gallery = () => {
  const photos = [
    "https://img.freepik.com/free-photo/doll-wearing-yellow-ribbon_23-2149416248.jpg?w=740&t=st=1684483231~exp=1684483831~hmac=4ebf6468b421c1730fc63a325a255ad887f14e927028b4b3e3e8605d2ae0f4c9",
    "https://as1.ftcdn.net/v2/jpg/00/60/45/72/1000_F_60457208_O6OJ6L3IIAjiMXIUc4z7QtN2rA8eLkfZ.jpg",
    "https://as2.ftcdn.net/v2/jpg/00/28/70/15/1000_F_28701537_mDNLuDPlUGffb93doN977WYMSSTKh1tK.jpg",
    "https://img.freepik.com/free-photo/doll-wearing-yellow-ribbon_23-2149416248.jpg?w=740&t=st=1684483231~exp=1684483831~hmac=4ebf6468b421c1730fc63a325a255ad887f14e927028b4b3e3e8605d2ae0f4c9",
    "https://t4.ftcdn.net/jpg/00/39/55/03/240_F_39550398_FU9DAoWeLgSHcPyT5SWAyFwqDAlNBAgG.jpg",
    "https://t3.ftcdn.net/jpg/02/39/37/66/240_F_239376644_MXizzhWbkpPU5AzJgUSUA0XnggOZIv9V.jpg",
    "https://t4.ftcdn.net/jpg/03/32/18/43/240_F_332184341_8sEJGYqKkC5strmw2eP66I7bc2DPFHkE.jpg",
    "https://t4.ftcdn.net/jpg/03/93/30/27/240_F_393302734_fDwyuEC9umr6ttfZFtAFurNgMW7PZsy4.jpg",
    "https://t4.ftcdn.net/jpg/06/00/96/51/240_F_600965108_uuS1EpAKkVCNT9e1fE7gbLE6nZA4VgIL.jpg",
    "https://t4.ftcdn.net/jpg/04/52/53/03/240_F_452530391_upbiFwZzaRG3aVsUPvjH8ee39wpMbRRI.jpg",
  ];
  return (
    <div className='mb-16 bg-pink-200 '>
  
       <h2 className=' text-center text-5xl tracking-wide font-bold text-secondary mb-24 pt-24'>Doll Gallery</h2>

      <div className="gallery-container myContainer pb-32">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
    
  );
};

export default Gallery;