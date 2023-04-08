import CatEvent from "@/src/components/events/catEvent";


const EventsCatPage = ({data,pageName}) =>{
    return (
     <CatEvent data={data} pageName={pageName} />
        )
}

export default EventsCatPage;

export async function getStaticPaths() {

  const {events_categories} = await import('/data/data.json');

  const allPaths = events_categories.map(ev =>{
    return {params:{
      cat:ev.id.toString(),
    }
  }});
//console.log(allPaths);
  return {
    paths:allPaths,
    fallback:false //let us render only the pages specified in paths
  }
}

export async function getStaticProps(context){
  //console.log(context);
  const id = context?.params.cat;
  const {allEvents} = await import('/data/data.json');
  //console.log(id);

  const data = allEvents.filter(ev => ev.city === id);

  //console.log(data);
  return {
    props:{data:data,
    pageName:id
    }
  }


}