import './App.css';

import Menu from './component/base/Menu.js'
import TopBar from './component/base/TopBar.js'
import HomePageSlide from './component/base/HomePageSlide.js'
import FeatureProduct from './component/base/FeatureProduct.js'
import LastestProduct from './component/base/LastestProduct.js'
import Support from './component/base/Support.js'
import Avertisement from './component/base/Advertisement.js'
import Footer from './component/base/Footer.js'
import Source from './component/base/Source.js'
import Text from './component/base/Text.js'

function App() {
  return (
    <div>
      <TopBar />
      <div id="wrapper" className="container">
        <section className="navbar main-menu">
          <Menu />
        </section>
        <section className="homepage-slider" id="home-slider">
          <HomePageSlide />
        </section>
        <Text />
        <section className="main-content">
          <div className="row">
            <div className="span12">
              <FeatureProduct />
              <br />
              <LastestProduct />
              <Support />
            </div>
          </div>
        </section>
        <Avertisement />
        <Footer />
        <Source />
      </div>
    </div>
  );
}

export default App;
