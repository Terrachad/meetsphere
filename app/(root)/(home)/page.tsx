'use client'

import MeetingTypeList from '@/components/MeetingTypeList'
import { useGetCalls } from '@/hooks/use-getCalls'
import React from 'react'

const Home = () => {
  const newDate = new Date()
  const {endedCalls, upcomingCalls, callRecodings, isLoading} = useGetCalls();

  const closestMeetingTime = upcomingCalls.length > 0 && upcomingCalls[0].state.startsAt
    ? new Date(upcomingCalls[0].state.startsAt)
    : newDate


  console.log({closestMeetingTime})

  const time = closestMeetingTime.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'})
  console.log(time)
  const date = (new Intl.DateTimeFormat('it-IT', {
    dateStyle: 'full'
  })).format(closestMeetingTime)

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
        <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 md:p-8 lg:p-11'>
            <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
            {upcomingCalls.length > 0 ? `Upcoming meeting at ${time}` : 'No upcoming meetings'}</h2>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-extrabold lg:text-7xl'>
                      {new Date(Date.now()).toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'})}
                    </h1>
                    <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
                      {date}
                    </p>
                </div>
          </div>
        </div>
        <MeetingTypeList/>
    </section>
  )
}

export default Home