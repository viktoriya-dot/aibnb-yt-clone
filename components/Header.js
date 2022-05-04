import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, UserCircleIcon, SearchIcon, UsersIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests ] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push ({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className='w-11/12 m-auto sticky top-0 z-50 grid grid-cols-3 bg-black  p-5 md:px-10'>

    {/* Logotype */}
        <div
          onClick={() => router.push('/')}
          className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image className='fill-white'
                src='/airbnb.svg'
                alt="Logotype"
                width={100}
                height={50}
                objectFit='contain'
                objectPosition='left'
            />
        </div>

        {/* SearchBar */}
        <div className=" flex items-center bg-white  md:border-2 rounded-full py-2">
            <input
              value= {searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className='flex-grow pl-5 bg-transparent outline-none  text-sm text-gray-600 placeholder-gray-400 overflow-hidden'
              type="text"
              placeholder={ placeholder || 'Start your search' }
               />
            <SearchIcon
                className="hidden md:inline-flex h-8 bg-[#FF3860] text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>

        {/* Right menu */}
        <div>
          <ul className='flex gap-4 items-center justify-end'>

            <li className='flex'>
              <button>
                <GlobeAltIcon className="h-6"/>
              </button>
            </li>

            <li>
              <div className='flex items-center space-x-2 border-2-black p-2 rounded-full bg-white text-[#717171]'>

                  <MenuIcon className="h-5" />
                  <UserCircleIcon className="h-8" />

              </div>
            </li>
          </ul>
        </div>


        {searchInput && (
         <div className='text-black flex flex-col col-span-3 mx-auto mt-2'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FF3860']}
            onChange={handleSelect}
          />
          <div className= 'bg-white flex items-center border-b px-3 pb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>

            <UsersIcon className='h-5' />
            <input
              value={noOfGuests}
              onChange={e => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className='w-12 pl-2 text-lg outline-none text-red-400' />
           </div>

           <div className='flex bg-white'>
              <button className='p-2 flex-grow text-gray-500' onClick={resetInput}>Cancel</button>
              <button className='p-2 flex-grow text-red-400' onClick={search}>Search</button>
           </div>
         </div>
        )}

    </header>
  )
}

export default Header
