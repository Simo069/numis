import db from "@/lib/db";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";




export default function currency() {
  const router = useRouter();
  const {title, id} = router.query;
  const [curenccies, setCurrencies] = useState(null);
  useEffect(() => {
    if(id){
      fetchCurrenciesData();
    }
  }, [id]);
  const fetchCurrenciesData= async (currencyId)=>{
    try {
      const response= await axios.get(`http://localhost:3000/api/catalog/getCurrencies`, { id: 3 });
      setCurrencies(response.data);
    } catch (error) {
      console.error('Error fetching currency data:', error);
    }
  }
  return(
    <div>
      <h1>{decodeURIComponent(title)}</h1>
      <p>Bank Name: {currency.bankName}</p>
      <p>Currency: {currency.currency}</p>
      <p>Date of Issue: {currency.dateIssue}</p>
      <img src={currency.image} alt={currency.title} />
      <h1>id :{id}</h1>
      <h1>"title" :{title}</h1>
    </div>
  )
}
