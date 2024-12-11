import React from 'react';

const Categorysection = () => {
  const Categorysections = [
    {
      category: "Male",  // Ensure the category is a string
      Image: "https://www.shutterstock.com/image-photo/full-length-photo-positive-man-260nw-2226403447.jpg"
    },
    {
      category: "Female",  // Ensure the category is a string
      Image: "https://www.shutterstock.com/image-photo/milan-love-you-full-length-260nw-1558580417.jpg"
    },
    {
      category: "Kids",  // Ensure the category is a string
      Image: "https://www.shutterstock.com/image-photo/adorable-girl-white-dress-holding-260nw-2467257789.jpg"
    },
  ];

  return (
    <div className='bg-white pb-8 pt-12 mt-2'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Categorysections.map((categoryy, index) => (
          <div key={index} className="category-item relative">
            <img src={categoryy.Image} alt={categoryy.category} />
            <div className="absolute top-20 left-12 w-full h-full flex flex-col justify-center items-center  text-black font-bold">
              <p>{categoryy.category}</p>  
              <br/>
              <p className='underline'>View all</p>
                </div>
          </div>
        ))}  
      </div>
    </div>
  );
}

export default Categorysection;
