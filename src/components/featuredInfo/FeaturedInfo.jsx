import React from 'react'
import './featuredInfo.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'

const FeaturedInfo = () => {
  return (
    <div className='featuredInfo'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,852</span>
          <span className="featuredMoneyRate negative">
            -11.4 <ArrowDownwardOutlinedIcon className='featuredIcon'/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,903</span>
          <span className="featuredMoneyRate negative">
            -1.6 <ArrowDownwardOutlinedIcon className='featuredIcon'/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,352</span>
          <span className="featuredMoneyRate">
            +2.7 <ArrowUpwardOutlinedIcon className='featuredIcon'/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo