import React from 'react'
import './exploreSection.css'
import ExlporeCard from './exploreCard'

const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='max-width explore-section' >
        <div className='collection-title'>
            {collectionName}
        </div>
        <div className='explore-grid'>
            {list.map((restaurant) => {
                return <ExlporeCard restaurant={restaurant}/>
            })}
        </div>
    </div>
  )
}

export default ExploreSection