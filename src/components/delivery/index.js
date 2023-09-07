import React from 'react'
import Filters from '../common/filters'
import DeliveryCollections from './deliveryCollections'
import TopBrands from './topBrands'
import ExploreSection from '../common/exploreSection'
import { restaurants } from '../../data/restaurants'

const deliveryFilters = [
  {
      id: 1,
      icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
      title: 'Filters',
  },
  {
      id: 2,
      title: 'Rating: 4.0+',
  },
  {
      id: 3,
      icon: <i class="fi fi-rr-angle-small-down absolute-center"></i>,
      title: 'Cuisines',
  }
]

const restaurantList = restaurants

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList = {deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection list={restaurantList} collectionName='Delivery Restaurants in Greater Noida' />
    </div>
  )
}

export default Delivery