import axios from "axios";
import { useState , useRef } from "react";

export default function addcategory() {
  const [title , setTitle]= useState("");
  const [bankName, setBankName]= useState("");
  const [currency , setCurrency]= useState("");
  const [image,setImage]= useState([]) ;
  const [dateIssue, setDateIssue]= useState("");
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("title", title)
    console.log("bankname",bankName)
    console.log("currency",currency)
    console.log("image",image)
    console.log("dateIssue",dateIssue)
    const formData = new FormData();
    formData.append("title",title)
    formData.append("bankName",bankName)
    formData.append("currency",currency)
    formData.append("dateIssue",dateIssue)
    formData.append("image",image)
    try {
      const response = await axios.post(
        `http://localhost:3000/api/addcategory`, formData ,
        {
          headers : {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if(response.status === 201){
        alert("Currrency added succfully")
        resetForm();
      }else{
        
        alert("Error adding currency entry")
        resetForm();
      }
    } catch (error) {
      alert("Error ::" + error.message)
    }
  }

  return (
  <>
  <div className="m-auto">
      <h1>Add Currency</h1>
      <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data" >
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="border-black border-2" /><br /><br />
        <label htmlFor="bank_name">Bank Name:</label>
        <input type="text" id="bank_name" value={bankName} onChange={(e) => setBankName(e.target.value)} required  className="border-black border-2"/><br /><br />
        <label htmlFor="currency">Currency:</label>
        <input type="text" id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} required className="border-black border-2"/><br /><br />
        <label htmlFor="date_issue">Date of Issue:</label>
        <input type="text" id="date_issue" value={dateIssue} onChange={(e) => setDateIssue(e.target.value)} required className="border-black border-2"/><br /><br />
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} required /><br /><br />
        <button type="submit"  className="border-black border-2 button">Submit</button>
      </form>
    </div>
  </>);
}
