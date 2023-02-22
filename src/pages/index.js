import { supabase } from '../supabaseClient';

function Page({ teavikud_info }) {
  return (
    <ul>
      {teavikud_info.map((teavik) => (
          <ul>
            <li key={teavik.teavik_id}>{teavik.pealkiri}</li>
            <li key={teavik.teavik_id}>{teavik.autor_nimi}</li>
            <img src={teavik.pilt} />
            <li key={teavik.teavik_id}>{teavik.kirjeldus}</li>
            <li key={teavik.teavik_id}>{teavik.keel}</li>
            <li key={teavik.teavik_id}>{teavik.ilmumisaasta}</li>
            <li key={teavik.teavik_id}>{teavik.kirjastus_nimi}</li>
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