import React from 'react';
import Banner from '../Banner/Banner';
import ConnectForm from '../ConnectForm/ConnectForm';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Treatment from '../Services/Treament';
import Testimonial from '../Testimonial/Testimonial';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ConnectForm></ConnectForm>

        </div>
    );
};

export default Home;