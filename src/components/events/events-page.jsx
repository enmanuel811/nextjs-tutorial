import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllEvents = ({data}) => {
  return (
    <div className="events_page">
      { data.map(ev =>(
        <Link className='card' key={ev.id} href={'/events/'+ev.id}>
          <Image alt={ev.title} width={380}
          height={350}//'100%'
           src={ev.image} />
          <h2>{ev.title}</h2>
        </Link> 
      ))

      }
    </div>
  )
}

export default AllEvents