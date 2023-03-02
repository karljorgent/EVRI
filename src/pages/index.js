import { supabase } from '../supabaseClient';

function Page({ teavikud_info }) {
  return (
    <ul>
      {teavikud_info.map((teavik) => (
          <ul>
            <li key={teavik.pealkiri}>{teavik.pealkiri}</li>
            <li key={teavik.autor_nimi}>{teavik.autor_nimi}</li>
            <img src={teavik.pilt} />
            <li key={teavik.kirjeldus}>{teavik.kirjeldus}</li>
            <li key={teavik.keel}>{teavik.keel}</li>
            <li key={teavik.ilmumisaasta}>{teavik.ilmumisaasta}</li>
            <li key={teavik.kirjastus_nimi}>{teavik.kirjastus_nimi}</li>
          </ul>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('teavik_info').select()
  return {
    props: {
     teavikud_info: data
    },
  }
}

export default Page;