import { useState , useEffect } from 'react';
import axios from 'axios';


export default  function AddCurrency() {
  const [ref, setRef] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [nomDesSignataire, setNomDesSignataire] = useState('');
  const [value, setValue] = useState('');
  const [issuedBy, setIssuedBy] = useState('');
  const [comments, setComments] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [imageFront, setImageFront] = useState(null);
  const [imageBack, setImageBack] = useState(null);
  const [imageSignature, setImageSignature] = useState(null);
  const [variations, setVariations] = useState([
    { ref: '', description: '', nomDesSignataire: '', issuedBy: '', comments: '' ,date:'', imageFront: null, imageBack: null, imageSignature: null }
  ]);

  const [currencyId,setCurrencyId] = useState("")
  const [currencyItem,setCurrencyItem] = useState([])
  useEffect (()=> {
    async function fetchCurrencyItem(){
      const response = await axios.get("http://localhost:3000/api/catalog/getItemcatalog");
      setCurrencyItem(response.data)
    }
    fetchCurrencyItem();
  },[]);
  console.log()
  const handleVariationChange = (index, key, value) => {
    const updatedVariations = [...variations];
    updatedVariations[index][key] = value;
    setVariations(updatedVariations);
  };
  const handleImageChange = (index, key, file) => {
    const updatedVariations = [...variations];
    updatedVariations[index][key] = file;
    setVariations(updatedVariations);
  };
  const handleImageFrontChange = (file) => {
    setImageFront(file);
  };
  const handleImageBackChange = (file) => {
    setImageBack(file);
  };
  const handleImageSignatureChange = (file) => {
    setImageSignature(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('ref', ref);
    console.log('title', title);
    console.log('description', description);
    console.log('nom_des_signataire', nomDesSignataire);
    console.log('value', value);
    console.log('issued_by', issuedBy);
    console.log('comments', comments);
    console.log('imagefront', imageFront);
    console.log('imageback', imageBack);
    console.log('imagesignature', imageSignature);
    console.log('variations', variations);
    const formData = new FormData();
    formData.append('ref', ref);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('nom_des_signataire', nomDesSignataire);
    formData.append('value', value);
    formData.append('issued_by', issuedBy);
    formData.append('comments', comments);
    formData.append('imagefront', imageFront);
    formData.append('imageback', imageBack);
    formData.append('imagesignature', imageSignature);
    formData.append('idCurrencyitem', currencyId);
    formData.append('date', date);
    formData.append('type', type);
    // formData.append('variations', JSON.stringify(variations));
    variations.forEach((variation, index) => {
      formData.append(`variations[${index}][ref]`, variation.ref);
      formData.append(`variations[${index}][description]`, variation.description);
      formData.append(`variations[${index}][nomDesSignataire]`, variation.nomDesSignataire);
      formData.append(`variations[${index}][issuedBy]`, variation.issuedBy);
      formData.append(`variations[${index}][comments]`, variation.comments);
      formData.append(`variations[${index}][imageFront]`, variation.imageFront);
      formData.append(`variations[${index}][imageBack]`, variation.imageBack);
      formData.append(`variations[${index}][imageSignature]`, variation.imageSignature);
      formData.append(`variations[${index}][date]`, variation.date);
      formData.append(`variations[${index}][type]`, variation.type);
    });
    try {
      const res = await axios.post(`http://localhost:3000/api/currency`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log('Currency added:', res.data);
      // Reset form fields or redirect to another page on success
    } catch (error) {
      console.error('Error adding currency:', error);
      // Handle error state
    }
  };
  const handleAddVariation = () => {
    setVariations([...variations, { ref: '', description: '', nomDesSignataire: '', issuedBy: '', comments: '', imageFront: null, imageBack: null, imageSignature: null }]);
  };
  const handleRemoveVariation = (index) => {
    const updatedVariations = [...variations];
    updatedVariations.splice(index, 1);
    setVariations(updatedVariations);
  };
  return (
    <div className='mx-auto mt-8 flex flex-col gap-y-3'>
      <h1>Add Currency</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label>Reference:</label>
          <input type="text" value={ref} onChange={(e) => setRef(e.target.value)} className="border-2 border-black" required />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="border-2 border-black" />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className="border-2 border-black"/>
        </div>
        <div>
          <label>Nom des Signataire:</label>
          <input type="text" value={nomDesSignataire} onChange={(e) => setNomDesSignataire(e.target.value)} required className="border-2 border-black"/>
        </div>
        <div>
          <label>Date</label>
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} required className="border-2 border-black"/>
        </div>
        <div>
          <label>Type</label>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} required className="border-2 border-black"/>
        </div>
        <div>
          <label>Value:</label>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required className="border-2 border-black" />
        </div>
        <div>
          <label>Issued by:</label>
          <input type="text" value={issuedBy} onChange={(e) => setIssuedBy(e.target.value)} required  className="border-2 border-black"/>
        </div>
        <div>
          <label>Comments:</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} className="border-2 border-black" />
        </div>
        <div>
          <label>Currency:</label>
          <select value={currencyId} onChange={(e) => setCurrencyId(e.target.value)} required >
            <option >
                select one
              </option>
            {currencyItem.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Image Front:</label>
          <input type="file" onChange={(e) => handleImageFrontChange(e.target.files[0])} required  className="border-2 border-black"/>
        </div>
        <div>
          <label>Image Back:</label>
          <input type="file" onChange={(e) => handleImageBackChange(e.target.files[0])} required className="border-2 border-black" />
        </div>
        <div>
          <label>Image Signature:</label>
          <input type="file" onChange={(e) => handleImageSignatureChange(e.target.files[0])}  className="border-2 border-black"/>
        </div>
        <div>
          <h2>Variations</h2>
          {variations.map((variation, index) => (
            <div key={index} className="flex flex-col gap-y-3">
              <label>Ref:</label>
              <input type="text" className="border-2 border-black" value={variation.ref} onChange={(e) => handleVariationChange(index, 'ref', e.target.value)} required />
              <label>Description:</label>
              <textarea value={variation.description} className="border-2 border-black" onChange={(e) => handleVariationChange(index, 'description', e.target.value)} required />
              <label>Nom des Signataire:</label>
              <input type="text" value={variation.nomDesSignataire} className="border-2 border-black" onChange={(e) => handleVariationChange(index, 'nomDesSignataire', e.target.value)} required />
              <label>Date</label>
              <input type="text" value={variation.date} className="border-2 border-black" onChange={(e) => handleVariationChange(index, 'date', e.target.value)} required />
              <label>type</label>
              <input type="text" value={variation.type} className="border-2 border-black" onChange={(e) => handleVariationChange(index, 'type', e.target.value)} required />
              
              <label>Issued by:</label>
              <input type="text" value={variation.issuedBy} className="border-2 border-black" onChange={(e) => handleVariationChange(index, 'issuedBy', e.target.value)} required />
              <label>Comments:</label>
              <textarea value={variation.comments} className="border-2 border-black" onChange={(e) => handleVariationChange(index, 'comments', e.target.value)} />
              <div>
                <label>Image Front:</label>
                <input type="file" className="border-2 border-black" onChange={(e) => handleImageChange(index, 'imageFront', e.target.files[0])} required />
              </div>
              <div>
                <label>Image Back:</label>
                <input type="file" className="border-2 border-black" onChange={(e) => handleImageChange(index, 'imageBack', e.target.files[0])} required />
              </div>
              <div>
                <label>Image Signature:</label>
                <input type="file" className="border-2 border-black" onChange={(e) => handleImageChange(index, 'imageSignature', e.target.files[0])} />
              </div>
              <button type="button" className="border-2 border-black" onClick={() => handleRemoveVariation(index)}>Remove Variation</button>
            </div>
          ))}
          <button type="button" className="border-2 border-black" onClick={handleAddVariation}>Add Variation</button>
        </div>
        <button type="submit" className="border-2 border-black">Submit</button>
      </form>
    </div>
  );
}
