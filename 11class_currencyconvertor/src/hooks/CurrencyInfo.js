
// Imported the useEffect and useState as we need in future 

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}



//currency is an option here in the function useCurrencyInfo otherhooks take optional 
// we want to use the useEffect because it will automatically work when the dependecy changes we 
//don't have to write the function again and again to make that change 

export default useCurrencyInfo;