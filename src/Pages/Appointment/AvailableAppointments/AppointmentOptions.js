import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    return (
        <div className="card shadow-xl border border-[#19D3AE]">
            <div className="card-body text-center ">
                <h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn block w-full border-none rounded  px-12 py-3 text-sm font-medium text-white shadow-md bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] sm:w-auto"
                        onClick={() => setTreatment(appointmentOption)}
                    >BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;