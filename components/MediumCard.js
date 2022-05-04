import Image from 'next/image';

function MediumCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image
              className='rounded-xl'
              layout='fill'
              src={img}
              alt='Prop'
              />
        </div>
        <h2 className='text-xl mt-3'>{title}</h2>
    </div>
  )
}

export default MediumCard