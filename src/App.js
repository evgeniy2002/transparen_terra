import React from 'react'
import './App.css';
import main_img from '../src/assets/images/bg.png'
import Header from './Components/Header/Header';
import Selection from './Components/Selection/Selection';
import Share from './Components/Share/Share';



function App() {

  React.useEffect(() => {
    
    ibg();
  
  }, [])
  
  function ibg() {
  
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }

  return (
    <div className="wrapper">
      <div className="page">
        <div className="container">
          <Header />
          <Selection />
          <Share />
        </div>
        {/* <Header />

          <div className="content">
            <Switch>
              <Route path='/category/:brand?/:type?/device/:id' component={DevicePage} />
              <Route path={ADMIN_ROUTE} component={Admin} />
              <Route path={SHOP_ROUTE} component={Shop} />
              <Route path={MAIN_ROUTE} component={MainPage} />

              <Redirect to={MAIN_ROUTE} />
            </Switch>
          </div> */}
        <div className='main_bg ibg'>
          <img src={main_img} alt="" />
        </div>

      </div>
    </div>
  );
}

export default App;
