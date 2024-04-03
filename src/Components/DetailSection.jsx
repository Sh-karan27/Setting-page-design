import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { HiArrowsUpDown } from 'react-icons/hi2';
const DatailsSection = () => {
  // Initialize state for start and end dates
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Selected date range: ${startDate}, ${endDate}`);
    setEndDate('');
    setStartDate('');
  };

  return (
    <section className='w-full h-full flex items-center justify-center py-5 px-5'>
      <div className=' max-w-screen-lg w-full  flex gap-20 md:gap-10 max-sm:flex-col '>
        <div className='w-full'>
          <ul className='flex flex-col items-start gap-5 px-2 py-5 md:w-[10rem]  max-sm:py-2 max-sm:px-2'>
            <li>Shared events types</li>
            <li>Single sign-on</li>
            <li>Workflows</li>
            <li className='font-semibold'>Data deletion</li>
          </ul>
        </div>

        <div className='   flex flex-col items-start justify-start gap-10'>
          <div className=' flex items-start flex-col justify-start gap-5 px-2 py-5 border-b '>
            <h1 className=' font-bold'>
              Delete information from your organization
            </h1>
            <p className=' leading-8'>
              When anyone in your organization schedules an event with an
              invitee, information about the event and everyone part of it is
              saved in Calendly. If you need to delete this information from
              Calendly and its vendors for compliance reasons, you can do so
              without contacting support.
            </p>
            <h1 className=' bg-red-300   font-semibold px-2 py-2 rounded-sm'>
              Once you delete information, you won't be able to recover it
            </h1>
            <p>
              Invitee data will be deleted{' '}
              <span className='font-bold'>7 days</span> from the date you make
              the request
            </p>
          </div>

          <div className=' flex items-start flex-col justify-start gap-5 px-2 py-5 border-b '>
            <h1 className=' font-bold'>
              Delete information for specific invitees
            </h1>
            <p className=' leading-8'>
              Enter an invitee's email to delete all of their personally
              identifiable information from your organization and integrations.
              During the data deletion process, Calendly removes the deleted
              invitee from their spot on group events and cancels both pending
              and upcoming events with them
            </p>
            <input
              type='text'
              className=' w-full  px-7 py-7 border border-gray-400 outline-none rounded-xl'
            />
            <button className='px-4 py-2 bg-orange-700 text-white rounded-3xl'>
              Delete
            </button>
          </div>
          <div className=' flex items-start flex-col justify-start gap-5 px-2 py-5 border-b '>
            <h1 className=' font-bold'>
              Delete information within a period of time
            </h1>
            <p className=' leading-8'>
              Choose a date range to delete all information from scheduled
              events within that period of time
            </p>
            <h2>Date Range Input for {new Date().getFullYear()}</h2>
            <form
              onSubmit={handleSubmit}
              className=' flex items-end justify-end gap-5 max-sm:flex-col max-sm:items-start'>
              <label className=' text-orange-700 font-semibold'>
                Start Date:
                <input
                  className='w-full  px-7 py-2 border text-gray-400 border-gray-400 outline-none rounded-md'
                  type='date'
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </label>
              <br />
              <label className=' text-orange-700 font-semibold'>
                End Date:
                <input
                  className='w-full  px-7 py-2 border text-gray-400  border-gray-400 outline-none rounded-md'
                  type='date'
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </label>
              <br />
              <button
                className='px-4 py-2 bg-orange-700 text-white rounded-md'
                type='submit'>
                Delete
              </button>
            </form>
          </div>
          <div className=' flex items-start flex-col justify-start gap-5 px-2 py-5 border-b '>
            <h1 className=' font-bold'>
              Delete information from your organization
            </h1>
            <div className=' w-full border px-10 py-2   flex items-center justify-center gap-20 max-sm:flex-col max-sm:px-5'>
              <span className='font-bold flex items-center justify-center gap-2 '>
                Requested Date <IoIosArrowUp className='font-bold' />
              </span>
              <span className='font-bold flex items-center justify-center gap-2 '>
                Requested by <HiArrowsUpDown className='font-bold' />
              </span>
              <span className='font-bold flex items-center justify-center gap-2'>
                Status
                <HiArrowsUpDown className='font-bold' />
              </span>
            </div>
          </div>
          <div className=' flex items-start flex-col justify-start gap-5 px-2 py-5  '>
            <h1 className=' font-bold'>Delete your account</h1>
            <p className=' leading-8'>
              You can delete your account in your{' '}
              <span className=' text-blue-500'>account settings.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatailsSection;
