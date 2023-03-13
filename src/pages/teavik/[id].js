import { supabase } from "@/supabaseClient";

const Teavik = ({ teavik }) => {
    
    return (

        <ul>
            <li key={teavik.pealkiri}>{teavik.pealkiri}</li>
            <li key={teavik.autor_nimi}>{teavik.autor_nimi}</li>
            <img src={teavik.pilt} />
            <li key={teavik.kirjeldus}>{teavik.kirjeldus}</li>
            <li key={teavik.keel}>{teavik.keel}</li>
            <li key={teavik.ilmumisaasta}>{teavik.ilmumisaasta}</li>
            <li key={teavik.kirjastus_nimi}>{teavik.kirjastus_nimi}</li>
          </ul>

    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    let { data } = await supabase.from('teavik_info').select().eq('teavik_id', id)
    return {
      props: {
       teavik: data[0]
      },
    }
  }
  

export default Teavik