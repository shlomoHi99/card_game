import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import ThreeDots from "./Dots";


export default function SpecificCountry() {
    const {countryName} = useParams();
    const [countriesList, updateCountriesList] = useState([]);

    useEffect(function(){
        let API = 'https://restcountries.com/v2/all'
        fetch(API)
        .then(function(response){
            return response.json();
        }).then(function(data){
            updateCountriesList(data);
        })
    },[])

    let curCountry = countriesList.find(function(item){
        return item.name === countryName;
    })

    if(!curCountry)
    return(
        <div className="d-flex justify-content-center align-items-center">
        <ThreeDots/>
        </div>
    )


    let languages = curCountry.languages.map(function(item, i){
            return <span key={i}>{item.name}, </span>
        })
    let currencies = curCountry.currencies.map(function(item, i){
        return <span key={i}>{item.name} - {item.symbol}, </span>
    })  
    
  return (
    <div className="d-flex flex-column align-items-center bg-info bg-gradient p-5">
        <img src={curCountry.flag} alt="" className="col-6 img-thumbnail" />
        <h1><span className="fw-bold m-3">Country:</span> {curCountry.name}</h1>
        <div className="d-flex justify-content-evenly">
            <div className="d-flex flex-column justify-content-evenly align-items-top p-3">
                <h2><span className="fw-bold">Capital:</span> {curCountry.capital}</h2>
                <h2><span className="fw-bold">Region:</span> {curCountry.region}</h2>
                <h2><span className="fw-bold">Population:</span> {curCountry.population.toLocaleString()}</h2>
            </div>
            <div className="d-flex flex-column justify-content-evenly align-items-bottom p-3">
                <h2><span className="fw-bold">Language:</span> {languages}</h2>
                <h2><span className="fw-bold">Currency:</span> {currencies}</h2>
            </div>
        </div>
    </div>
  )
}
