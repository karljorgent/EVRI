import { useState } from 'react';
import { supabase } from '../supabaseClient';

function Upload() {

    const [selectedFile, setSelectedFile] = useState(null)
    const [pealkiri, setPealkiri] = useState('')
    const [autor, setAutor] = useState('')
    const [keel, setKeel] = useState('')
    const [ilmumisaasta, setIlmumisaasta] = useState('')
    const [kirjeldus, setKirjeldus] = useState('')
    const [kirjastus, setKirjastus] = useState('')


    function handleFileInput (e) {
        const file = e.target.files[0]
        if(file){
            setSelectedFile(file)
        }
    }

    async function insertBook(e) {
        e.preventDefault()

        try{
            const { autorError } = await supabase.from('autor').insert({ nimi: autor })
            console.log({ autorData, autorError })

            //const { kirjastusData, kirjastusError} = await supabase.from('kirjastus').insert({ nimi: kirjastus}).select()
            //console.log({ autorData, autorError })


//            const { imageData, imageError } = await supabase.storage
  //              .from('images')
    //            .upload('/barry.jpg', selectedFile, {
      //              contentType: "image/jpeg",
        //        }) 
        }catch(err){
            alert(error)
        }
        
    }

  return (
    <form onSubmit={(event) => {insertBook(event)}}>
        <label for pealkiri> Pealkiri </label>
        <input type='text' name='pealkiri' onChange={e => (setPealkiri(e.target.value))} />
        <label for autor> Autor </label>
        <input type='text' name='autor' onChange={e => (setAutor(e.target.value)) } />
        <label for keel> Keel </label>
        <input type='text' name='Keel' onChange={e => (setKeel(e.target.value)) } />
        <label for ilmumisaasta> Ilmumisaasta </label>
        <input type='text' name='ilmumisaasta' onChange={e => (setIlmumisaasta(e.target.value)) }/>
        <label for kirjeldus> Kirjeldus </label>
        <input type='textarea' name='kirjeldus' onChange={e => (setKirjeldus(e.target.value))} />
        <label for kirjastus> Kirjastus </label>
        <input type='text' name='kirjastus' onChange={e => (setKirjastus(e.target.value))} />
        <input type='file' name='file' onChange={handleFileInput} />
        <button type="submit">SUBMIT</button>
    </form>
  );
}



export default Upload