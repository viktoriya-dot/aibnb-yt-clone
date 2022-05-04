import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { InfoCard } from '../components/infoCard';

const Search = ({searchResults}) => {
    const router = useRouter();

    console.log(searchResults);
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd.MM.yyyy')
    const formattedEndDate = format(new Date(endDate), 'dd.MM .yyyy');
    const range =  `${formattedStartDate} - ${ formattedEndDate}`;

  return (
      <div className='bg-black'>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

        <main className='w-10/12 m-auto flex'>
            <section className='flex-grow '>
                <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More filters</p>
                </div>

                <div className='flex flex-col'>
                    {searchResults.map(({img, location, title, description, star, price, total}) => (
                        <InfoCard
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}
                </div>
            </section>
        </main>

        <Footer />
      </div>

  )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch('https://links.papareact.com/isz').then (res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}