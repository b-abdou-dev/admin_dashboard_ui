import React from 'react'

import './home.css'
import Chart from '../../components/chart/Chart'
import Members from '../../components/members/Members'
import Transactions from '../../components/transactions/Transactions'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import { userData } from '../../data'


const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <div className='chartContainer'>
      <Chart title={userData.title} data={userData.data} xDataKey={userData.xDataKey} yDataKey={userData.yDataKey} grid="grid" />
      </div>
      <div className='infoList'>
        <Members/>
        <Transactions/>
      </div>
    </div>  
  )
}

export default Home