const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

export const HomePage =({data}) =>{

    return(
    //className={styles.main}
    <div className="home_body" >
    {data.map(ev =>(
      <Link className="card" key={ev.id} href={'/events/'+ev.id}>
       <div className="image">
        <Image alt={ev.title}
        width={370} height={300}
         src={ev.image}/>
        </div>
       <div className="content">
        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
       </div>
      </Link>)
      )}
    
  </div>
  )
}