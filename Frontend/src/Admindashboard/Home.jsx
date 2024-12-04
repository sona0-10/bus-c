import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
<link rel="stylesheet" href="style.css"></link>

function Home() {
  return (
    // <main className='main-container'>
    // <div className='main-title'>
    //   <h3>DASHBOARD</h3>
    //   </div>
    //   <div className='main-card'>
    //   <div className='card'>
    //     <div className='card-inner'>
    //       <h3>STUDENTS</h3>
    //       <BsFilnArchieveFill className='card_iicon'/>
    //     </div>
    //     <h1>300</h1>
    //   </div>
    //   <div className='card'>
    //     <div className='card-inner'>
    //       <h3>DRIVERS</h3>
    //       <BsFillGrid3X3GapFill className='card_iicon'/>
    //     </div>
    //     <h1>25</h1>
    //   </div>
    //   <div className='card'>
    //     <div className='card-inner'>
    //       <h3>STOP</h3>
    //       <BsFilnArchieveFill className='card_iicon'/>
    //     </div>
    //     <h1>110</h1>
    //   </div>
     <div> 
      <Header />
      <Sidebar />
      
    </div>
    // </main>
  )
}

export default Home

