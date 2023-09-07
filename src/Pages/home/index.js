import React, { useState } from 'react'
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import TabOption from '../../components/common/tabOption';
import NightLife from '../../components/nightLife';
import DiningOut from '../../components/diningOut';
import Delivery from '../../components/delivery';



const Home = () => {

  const [activeTab, setActiveTab] = useState()

  return (
    <div>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />
    case "Dining Out":
      return <DiningOut />
    case "Nightlife":
      return <NightLife/>
    default:
      return <Delivery />

  }
}

export default Home