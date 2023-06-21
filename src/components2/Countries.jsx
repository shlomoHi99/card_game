import {useState, useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useParams, Link } from 'react-router-dom';
import CatalogMagic from './CatalogMagic';

export default function Countries() {
    const [countriesList, updateCountriesList] = useState([]);
    const {searchValue} = useParams()

    useEffect(function(){
        let API = 'https://restcountries.com/v2/all'
        fetch(API)
        .then(function(response){
            return response.json();
        }).then(function(data){
            updateCountriesList(data);
        })
    },[])

    
    
    let renderCountries = countriesList.map(function(item,i){
        return(
            <Link to={`../../country/${item.name}`} className="card col-2 m-2" key={i} id={item.name}>
                <img src={item.flag} alt="" />
                <p className=''>{item.name}</p>
            </Link>
        )
    })
    if(typeof(searchValue) === 'string'){
        
        renderCountries = renderCountries.filter(function(item){
            return item.props.id.toLowerCase().includes(searchValue.toLowerCase());
        })
    }


    if(countriesList.length === 0)
    return(
        <div className="d-flex justify-content-center align-items-center">
        <CatalogMagic/>
        </div>
    ) 
    return (
        <div className=' bg-info bg-gradient'>
            <div className="d-flex flex-wrap container">{renderCountries}</div>
        </div>
  )
}

