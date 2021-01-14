import React, {useState, useEffect} from 'react';
import Card from './card.js';
import Pagination from './pagination.js';
import Input from './input.js';
import GenderInput from './genderInput.js';
import PaymentMethodInput from './paymentMethodInput.js';
import {FontAwesome} from 'react-icons/fa';
import {FaMobile} from "react-icons/fa";
import {FaCreditCard} from "react-icons/fa";



const DataBlock = (props) => {
    //useState hook
    const [users, setusers] = useState({});
    const [profile, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);

    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);

    const [inputs, setInputs] = useState('');
    const [inputsLoaded, setInputsLoaded] = useState(false);

    const [inputGender, setInputGender] = useState('');
    const [inputsGenderLoaded, setInputsGenderLoaded] = useState(false)

    const [inputPayment, setInputPayment] = useState('');
    const [inputsPaymentLoaded, setInputsPaymentLoaded] = useState(false)


    //get current profiles using pagination
    const indexOfLastProfile = currentPage * postPerPage;
    const indexOfFirstProfile = indexOfLastProfile - postPerPage;
    const currentProfiles = profile.slice(indexOfFirstProfile, indexOfLastProfile)
    
    //function to change pages
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //when the component loads
    useEffect(function(){
        getData()
    }, [])

    //async function to get data
    const getData = async()=>{
        var res =  await fetch('https://api.enye.tech/v1/challenge/records')
        //var res =  await fetch('http://jsonplaceholder.typicode.com/users/1')
        var users =  await res.json()
        setusers(users)
        console.log(users.records.profiles)
        setProfiles(users.records.profiles)
        setLoading(true)
    }

    // search by filtering usernames
    const handleSubmit = (val) =>{
        setInputs(val)
        setInputsLoaded(true)
            
    }

    // search by filtering gender
    const handleGenderSubmit = (val) =>{
        setInputGender(val)        
    }

    // search by filtering payment method
    const handlePaymentSubmit = (val) =>{
        setInputPayment(val)        
    }

    //jsx for the profiles if it has loaded

    if (inputPayment === 'cc' || inputPayment === 'money order' || inputPayment === 'paypal') {
        return(
            <div>
                <h3>Filtered by Payment = {inputPayment}</h3>
                <div className='cardContainer'>
                    {
                        currentProfiles.filter(prof => prof.PaymentMethod === inputPayment).map(prof =>(
                            <Card key={prof.id}>
                                <h1>{prof.FirstName} {prof.LastName}({prof.UserName})</h1>
                                <div className='emailandPhonenumber'>
                                    <p>{prof.Email}</p>
                                    <p><FaMobile />: {prof.PhoneNumber}</p>
                                </div>
                                <div className='otherData'>
                                    <div className='otherDataLeft'>
                                        <p>Gender: {prof.Gender}</p>
                                        <p><FaCreditCard /> {prof.CreditCard}</p>
                                        <p>creditcardtype: {prof.CreditCardType}</p>
                                        <p>Domain name: {prof.DomainName}</p>
                                        <p>URL: {prof.URL}</p>
                                    </div>
                                    <div className='otherDataRight'>
                                        <p>LastLogin: {prof.LastLogin}</p>
                                        <p>Latittude:{prof.Latitude}</p>
                                        <p>Longitude:{prof.Longitude}</p>
                                        <p>Payment method: {prof.PaymentMethod}</p>
                                        <p>MacAddress: {prof.MacAddress}</p>    
                                    </div>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        )
    }

    if (inputGender === 'Male' || inputGender === 'Female' || inputGender === 'Prefer to skip') {
        return(
            <div>
                <h3>Filtered by Gender = {inputGender}</h3>
                <div className='cardContainer'>
                    {
                        currentProfiles.filter(prof => prof.Gender === inputGender).map(prof =>(
                            <Card key={prof.id}>
                                <h1>{prof.FirstName} {prof.LastName}({prof.UserName})</h1>
                                <div className='emailandPhonenumber'>
                                    <p>{prof.Email}</p>
                                    <p><FaMobile />: {prof.PhoneNumber}</p>
                                </div>
                                <div className='otherData'>
                                    <div className='otherDataLeft'>
                                        <p>Gender: {prof.Gender}</p>
                                        <p><FaCreditCard /> {prof.CreditCard}</p>
                                        <p>creditcardtype: {prof.CreditCardType}</p>
                                        <p>Domain name: {prof.DomainName}</p>
                                        <p>URL: {prof.URL}</p>
                                    </div>
                                    <div className='otherDataRight'>
                                        <p>LastLogin: {prof.LastLogin}</p>
                                        <p>Latittude:{prof.Latitude}</p>
                                        <p>Longitude:{prof.Longitude}</p>
                                        <p>Payment method: {prof.PaymentMethod}</p>
                                        <p>MacAddress: {prof.MacAddress}</p>    
                                    </div>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        )
    }
    if (inputsLoaded) {
        return(
            <div>
                <div className='cardContainer'>
                    {
                        currentProfiles.filter(prof => prof.UserName === inputs).map(prof =>(
                            <Card key={prof.id}>
                                <h1>{prof.FirstName} {prof.LastName}({prof.UserName})</h1>
                                <div className='emailandPhonenumber'>
                                    <p>{prof.Email}</p>
                                    <p><FaMobile />: {prof.PhoneNumber}</p>
                                </div>
                                <div className='otherData'>
                                    <div className='otherDataLeft'>
                                        <p>Gender: {prof.Gender}</p>
                                        <p><FaCreditCard /> {prof.CreditCard}</p>
                                        <p>creditcardtype: {prof.CreditCardType}</p>
                                        <p>Domain name: {prof.DomainName}</p>
                                        <p>URL: {prof.URL}</p>
                                    </div>
                                    <div className='otherDataRight'>
                                        <p>LastLogin: {prof.LastLogin}</p>
                                        <p>Latittude:{prof.Latitude}</p>
                                        <p>Longitude:{prof.Longitude}</p>
                                        <p>Payment method: {prof.PaymentMethod}</p>
                                        <p>MacAddress: {prof.MacAddress}</p>    
                                    </div>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        )
    }
    if (loading){
    return (
        <div>
            <Input handleSubmit={handleSubmit}/>
            <GenderInput handleGenderSubmit={handleGenderSubmit}/>
            <PaymentMethodInput handlePaymentSubmit={handlePaymentSubmit}/>
            <div className='cardContainer'>
                {
                    currentProfiles.map(prof =>(
                        <Card key={prof.id}>
                            <h1>{prof.FirstName} {prof.LastName}({prof.UserName})</h1>
                            <div className='emailandPhonenumber'>
                                <p>{prof.Email}</p>
                                <p><FaMobile />: {prof.PhoneNumber}</p>
                            </div>
                            <div className='otherData'>
                                <div className='otherDataLeft'>
                                    <p>Gender: {prof.Gender}</p>
                                    <p><FaCreditCard /> {prof.CreditCard}</p>
                                    <p>creditcardtype: {prof.CreditCardType}</p>
                                    <p>Domain name: {prof.DomainName}</p>
                                    <p>URL: {prof.URL}</p>
                                </div>
                                <div className='otherDataRight'>
                                    <p>LastLogin: {prof.LastLogin}</p>
                                    <p>Latittude:{prof.Latitude}</p>
                                    <p>Longitude:{prof.Longitude}</p>
                                    <p>Payment method: {prof.PaymentMethod}</p>
                                    <p>MacAddress: {prof.MacAddress}</p>    
                                </div>
                            </div>
                        </Card>
                        ))
                }
            </div>
            <div>
                <Pagination profilePerPage={postPerPage} totalPages={profile.length} paginate={paginate}/>
            </div>
        </div>
    )
    }else{
        return (
            <div>
                loading....
            </div>
        )
    }
}

export default DataBlock;

