import React, { useState, useEffect } from 'react'
import  LoadingSpinner  from './LoadingSpinner.js'
const url = 'https://restcountries.eu/rest/v2/region/Asia'

const Countries = ({refresh}) => {
  const [countries, setCountries] = useState([])
  const [isLoading,setIsLoading]=useState(true);
  useEffect(() => {
    setIsLoading(true);
    const fetchCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries);
      console.log(countries);
      setIsLoading(false);
    }
    fetchCountries().catch(err=>{console.log(err)});
  }, [refresh])



  return (
    <>
    {isLoading&&<LoadingSpinner/>}
    {!isLoading&&
      <section className="countries">
        {countries.map((country) => {
          const {
            numericCode,
            name,
            flag,
            population,
            region,
            capital,
            subregion,
            borders,
            languages
          } = country

          return (
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="details">
                <div >
                <h4 className="country-name">
                  Name: <span>{name}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Sub-Region: <span>{subregion}</span>
                </h4>
                <h4>
                  Population: <span>{population.toLocaleString('en-IN')}</span>
                </h4>
                <h4>
                Borders:&nbsp;
                <span>
                {borders.map((e,i)=>{if(i<=4)return `${e} `})}
                {borders.length===0&&"No neighbouring countries"}
                </span>
                </h4>
                <h4>
                  Languages:&nbsp;
                  <span>
                {languages.map((e,i,arr)=>{if(i<=4)return `${e.name}${i<arr.length-1?', ':" "}`})}
                </span>
                </h4>
              </div>
              </div>
            </article>
          )
        })}
      </section>
    }
    </>
  )
}

export default Countries
