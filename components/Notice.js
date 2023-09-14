import React from 'react'
import Image from 'next/image';
import Img1 from '../images/Rectangle1.png'
import Img2 from '../images/Rectangle2.png'
import Img3 from '../images/Rectangle3.png'
import Img4 from '../images/Rectangle4.png'
import Img5 from '../images/Rectangle5.png'

const notices = [
    {
        id: 1,
        src: Img1,
        title: 'Ellie joined team developers',
        data: '04 April, 2021 | 04:00 PM'
    },
    {
        id: 2,
        src: Img2,
        title: 'Jenny joined team HR',
        data: '04 April, 2021 | 04:00 PM'
    },
    {
        id: 3,
        src: Img3,
        title: 'Adam got employee of the month',
        data: '04 April, 2021 | 04:00 PM'
    },
    {
        id: 4,
        src: Img4,
        title: 'Robert joined team design',
        data: '04 April, 2021 | 04:00 PM'
    },
    {
        id: 5,
        src: Img5,
        title: 'Jack joined team design',
        data: '04 April, 2021 | 04:00 PM'
    },
]
export default function Notice() {
  return (
    <div style={{width:'300px', height:'400px', marginTop: '70px',}}>
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <h2>Notifications</h2>
            <p>View All</p>
        </div>
        <div>
            {notices.map((item) => (
                <div style={{display:'flex', alignItems: 'center'}}>   
                    <Image src={item.src} alt='rasm bor' width={60} height={60} />
                    <div className="text" style={{gap: 0, marginInlineStart: '10px'}}>
                        <h4>{item.title}</h4>
                        <p style={{color: 'gray'}}>{item.data}</p>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}
