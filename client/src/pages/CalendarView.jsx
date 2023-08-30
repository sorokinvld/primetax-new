import React from 'react';
import Calendar from '../hooks/Calendar';

const CalendarView = () => {
    return (
        <div className='w-full items-center justify-center p-10 flex' data-aos='zoom-in'>
            <div className='w-2/3 shadow bg-white p-10 flex flex-col items-center justify-center text-start text-gray-900'>
                <Calendar />
            </div>
        </div>
    )
}

export default CalendarView