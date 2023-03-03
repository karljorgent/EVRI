import { useState } from 'react';
import { supabase } from '../supabaseClient';

function Upload() {

    const [selectedFile, setSelectedFile] = useState(null)
    const [pealkiri, setPealkiri] = useState('')
    const [autor, setAutor] = useState('')
    const [keel, setKeel] = useState('')
    const [ilmumisaasta, setIlmumisaasta] = useState('')
    const [kirjeldus, setKirjeldus] = useState('')
    const [kirjastaja, setKirjastaja] = useState('')


    function handleFileInput (e) {
        const file = e.target.files[0]
        if(file){
            setSelectedFile(file)
        }
    }

    async function insertBook(e) {
        e.preventDefault()

        try{

            let { data: autorData, autorError } = await supabase.from('autor').select('*').eq('nimi', autor)
            let { data: kirjastajaData, kirjastajaError} = await supabase.from('kirjastaja').select('*').eq('nimi', kirjastaja)


            if(autorData.length < 1){
              const { error: autorWriteError } = await supabase.from('autor').insert({ nimi: autor}).select('*')
              if(autorWriteError){
                alert(autorWriteError)
              }
            }


            if(kirjastajaData.length < 1){
              const { error: kirjastajaWriteError } = await supabase.from('kirjastaja').insert({ nimi: kirjastaja}).select('*')
              if(kirjastajaWriteError){
                alert(kirjastajaWriteError)
              }
            } 



            let imageId = pealkiri + '_' + ilmumisaasta + '_' + Math.random() * 10000000000000000000

            let { imageData, imageError } = await supabase.storage
              .from('images')
              .upload(`/${imageId}.jpg`, selectedFile, {
                  contentType: "image/jpeg",
           })
            if(imageError){
              alert(imageError)
            } 

            let imageURL = supabase.storage.from('images').getPublicUrl(`${imageId}`).data.publicUrl

            const { data: teavikData, teavikWriteError } = await supabase.from('teavik').insert({pealkiri: pealkiri, pilt: imageURL + ".jpg", kirjeldus: kirjeldus, keel: keel, ilmumisaasta: ilmumisaasta, kirjastaja: kirjastajaData[0].kirjastaja_id}).select('*')

            const { data: teaviku_autor } = await supabase.from('teaviku_autor').insert({autor_id: autorData[0].autor_id, teavik_id: teavikData[0].teavik_id}).select('*')
            console.log(teaviku_autor)


        }catch(err){
            console.log(err)
        }
        
    }

  return (
    <form onSubmit={(event) => {insertBook(event)}}>
        <label htmlFor="pealkiri"> Pealkiri </label>
        <input type='text' name='pealkiri' onChange={e => (setPealkiri(e.target.value))} />
        <label htmlFor="autor"> Autor </label>
        <input type='text' name='autor' onChange={e => (setAutor(e.target.value)) } />
        <label htmlFor="keel"> Keel </label>
        <input type='text' name='Keel' onChange={e => (setKeel(e.target.value)) } />
        <label htmlFor="ilmumisaasta"> Ilmumisaasta </label>
        <input type='text' name='ilmumisaasta' onChange={e => (setIlmumisaasta(e.target.value)) }/>
        <label htmlFor="kirjeldus"> Kirjeldus </label>
        <input type='textarea' name='kirjeldus' onChange={e => (setKirjeldus(e.target.value))} />
        <label htmlFor="kirjastaja"> Kirjastaja </label>
        <input type='text' name='kirjastaja' onChange={e => (setKirjastaja(e.target.value))} />
        <input type='file' name='file' onChange={handleFileInput} />
        <button type="submit">SUBMIT</button>
    </form>
  );
}



export default Upload