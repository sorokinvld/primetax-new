import React from 'react';

const Card = ({index, img, title, content, label, setId, delay }) => {
  
    return (
      <div className="p-4 w-64 " data-aos="fade-up" data-aos-delay={delay}>
        <div className="h-full justify-center  flex flex-col items-center text-center bg-[#FEFFFF] drop-shadow-md rounded-lg overflow-hidden hover:scale-[1.1] hover:shadow-lg transition ease-in-out duration-700 transform-gpu group"> 
          <img className="lg:h-32 my-3 w-full object-contain object-center group-hover:hidden  transition ease-in-out duration-300" src={img} alt="blog" /> 
          <div className="p-6 justify-center  flex flex-col items-center text-center group-hover:scale-[1.1] transition ease-in-out duration-500"> 
            <h1 className="title-font text-lg font-medium text-primary-900 mb-3">{title}</h1>
            <div className='h-40 mb-1'>
              <p className="leading-relaxed mb-2 text-slate-600 text-sm">{content}</p>
            </div>
            <button onClick={()=>setId(index)} className='bg-primary-900 text-white px-6 py-2 text-sm rounded-full hover:bg-primary-700 transition ease-in-out duration-500 '>{label}</button>
          </div>
        </div>
      </div>
    )
  }
  

export default Card