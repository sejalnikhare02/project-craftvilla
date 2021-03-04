import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';

const Home = () => {
  return ( <>
  
<div style={{backgroundColor: '#FFFAFA'}}> 
  <Container fluid>
  <Row>
    <Col>
    <div className="main" style={{marginBottom:'2rem'}} >
    <div className="head">
        <h1>Anyone, anywhere, <div> can start a business</div> </h1>      </div>

    <div style={{marginTop:"2rem"}}>
      <label className="lable-email">Email Address</label>
      <input placeholder="Enter Your Email Address" className="email" type="email" name="Email"/>
      <Link to="./Login.js" >
        <Button variant="#FF8C00" className="btn" style={{padding:"0.4rem 1.2rem" }}>Start free trial</Button>
        </Link>
    </div>

    <p id="msg" style={{marginBottom:"5rem"}}> Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive 
      marketing emails from Shopify.</p>
      </div>

 </Col>

    <Col>
    <div className="container-fluid" style={{overflow:"hidden"}}>
    <img src="img1.jpg" id="img1" alt="" /> 
</div>
    </Col>
  </Row>
  </Container>
  </div>


  <div className="second" style={{backgroundColor:"#FF8C00"}}>
    <div>
          <div className="bring" style={{paddingTop:'5rem'}}>
          <h1 id="creation">Bring your business online</h1>
          </div>
          <div>
          <p id="para" >Create an ecommerce website backed by powerful tools that help you find customers,
             drive sales, and manage your day-to-day.</p>
             <Link to="/abc" className="example" style={{marginTop:"0"}}>Explore more examples</Link>
             </div>

             <Container>
               <Row>
                 <Col md={2.4}>
                 <div style={{marginBottom:"1rem"}}>
                  <img src="alfred.png" alt="" id="alfred-img" />
                  </div>
                  <Link to="/food" id="alfred-Link">Food & Drink</Link>
                  <p >Alfred</p>
                 </Col>
                 <Col md={2.4}>
                   <div style={{marginBottom:"1rem"}}>
                 <img src="jwellery.png" alt="" id="alfred-img" /> 
                 </div>
                 <Link to="/jwellery" id="alfred-Link">Jewelery</Link>
                 <p>Corey Moranis</p>
                 </Col>
                 <Col md={2.4}>
                   <div style={{marginBottom:"1rem"}}>
                 <img src="coffee.png" alt="" id="alfred-img" />
                 </div>
                 <Link to="/food" id="alfred-Link">Food & Drink</Link>
                 <p>Detour Coffee</p>
                  </Col>
                  <Col md={2.4}>
                    <div style={{marginBottom:"1rem"}}>
                  <img src="cosmetic.png" alt="" id="alfred-img" />
                  </div>
                  <Link to="/cosmetic" id="alfred-Link">Beauty & cosmetics</Link>
                  <p>Then I Meet You</p>
                  </Col>
                  <Col md={2.4}>
                    <div style={{marginBottom:"1rem"}}>
                  <img src="home.png" alt="" id="alfred-img" />
                  </div>
                  <Link to="home" id="alfred-Link">Home & garden</Link>
                  <p>Miss Boon</p>
                  </Col>

               </Row>
             </Container>
     </div>        
        <Container>
          <Row>
            <h3 style={{marginTop:"5rem", marginBottom:"2rem"}}>Take the best path forward</h3>
          </Row>
          <Row>
            <Col md={3}>
            <IconButton aria-label="show 17 new notifications" color="inherit" id="icon">
                                <  AccountBalanceWalletIcon/>
                        </IconButton>
             <div>
              <p id="shopify">Start at online business</p>
              <p id="shopify-para">Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.

</p>
            </div>
            </Col>

            <Col md={3}>
            <IconButton aria-label="show 17 new notifications" color="inherit" id="icon">
                                < AccountBalanceIcon/>
                        </IconButton>
            <div>
              <p id="shopify">Move your online business</p>
              <p id="shopify-para">Turn your retail store into an online store and keep serving customers without missing a beat.

</p>
            </div>
            </Col>

            <Col md={3}>
            <IconButton aria-label="show 17 new notifications" color="inherit" id="icon">
                                < ImportantDevicesIcon/>
                        </IconButton>
            <div>
              <p id="shopify"> Switch to Shopify</p>
              <p id="shopify-para">Bring your business to Shopify, no matter which ecommerce platform you’re currently using.</p>
              </div>
              </Col>

              <Col md={3}>
              <IconButton aria-label="show 17 new notifications" color="inherit" id="icon">
                                <PeopleIcon />
                        </IconButton>
              <div>
                <p id="shopify">
                  Hire a Shopify expert
                </p>
                <p id="shopify-para">Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.</p>
              </div>

              </Col>
          </Row>
        </Container>
  </div>


<section className="sell">
  <div className="third">
      <div>
        <h2 id="sell-head">With you wherever you’re going</h2>
        <p id="sell-para">One platform with all the ecommerce and point of sale features you need
           to start, run, and grow your business.</p>
      </div>
<div>
<Container>
  <Row>
    <Col>

    </Col>
    <Col>
        <h3 id="block-head"> Sell <br/> everywhere </h3>
        <p id="block-para">Use one platform to sell products to anyone, anywhere—in person with Point of Sale 
          and online through your website, social media, and online marketplaces.</p>
          <Link to="/abc" className="example" style={{marginLeft:"0", color:"#FF8C00"}}>Explore ways to sell </Link>
    </Col>
  </Row>
</Container>
</div>

<div>
  <Container>
    <Row>
      <Col>
      <h3 id="block-head"> Market <br/> Your business</h3>
      <p id="block-para" style={{marginRight:"0",fontSize:"15px"}}>Take the guesswork out of marketing with built-in tools that help you create, execute, and
         analyze digital marketing campaigns.</p>
         <Link to="/abc" className="example" style={{marginLeft:"0",color:"#FF8C00"}}>Explore how to market your business </Link>
      </Col>
      <Col>
      <img src="sell.png" alt="" id="sell-img"/>
      </Col>
    </Row>
  </Container>
</div>

<div>
  <Container>
    <Row>
    <Col>
      <img src="manage.png" alt="" id="sell-img" style={{width:"28rem"}}/>
      </Col>
      <Col>
      <h3 id="block-head"> Manage <br/> everything</h3>
      <p id="block-para" style={{marginRight:"0",fontSize:"15px"}}>Gain the insights you need to grow—use 
      a single dashboard to manage orders, shipping, and payments anywhere you go.</p>
         <Link to="/abc" className="example" style={{marginLeft:"0",color:"#FF8C00"}}>Explore how to manage your business </Link>
      </Col>

    </Row>
  </Container>
</div>

<div>
  <Container>
  <h2 id="owner-head">Empowering independent business <br/> owners everywhere</h2>
  <p id="owner-para" style={{fontSize:"20px"}}>Over <strong> 1,000,000 businesses</strong> in <strong> 175 countries </strong> around 
  the world <br/> have made over <strong>$200 billion USD </strong>in sales using Shopify.</p>
  <Link to="/abc" className="example" style={{marginLeft:"3.5rem",color:"#FF8C00"}}>Learn more about shopify </Link><br/>
  <img src="earth.jpg" className="earth-img" alt="" />
  </Container>
</div>

<div>
  <Container fluid>
    <Row >
      <Col fluid >
      <img src="fashion.jpg" alt="" id="fashion-img"/>
      </Col>
      <Col fluid className="fashion-col" >
      <p id="fashion-para">“We’ve been able to build something in 3 years that a lot of brands haven’t actually
         gotten to in 10 years.”</p>
         <img src="fashion-logo-figma.png" alt="" id="fashion-logo"/>

         <p id="fashion-para" style={{marginTop:"1.5rem"}}>Chioma | Cee Cee’s Closet NYC</p>

      </Col>
    </Row>
  </Container>
</div>


<div>
  <img src="l1.jpg" alt="" id="logo-emoji"/> 
  <img src="l2.jpg" alt="" id="logo-emoji"/> 
  <img src="l3.jpg" alt="" id="logo-emoji"/> 
  <img src="l4.png" alt="" id="logo-emoji"/> 
  <img src="l5.jpg" alt="" id="logo-emoji"/> 
  <img src="l6.jpg" alt="" id="logo-emoji"/>   
</div>


<div fluid>
<Container fluid className="grid-container">
  <Row>
    <Col fluid className="grid-col">
    <div>
      <h2 className="grid-head">Get the help you need, every step of the way</h2>
    </div>
    <div className="grid">
      <div style={{width:"50%", textAlign:"left"}}>
        <h6 style={{marginBottom:"none"}} >Shopify support</h6>
        <p id="grid-para">Contact support 24/7, whether you’re troubleshooting issues or 
        looking for business advice.</p>
        <Link to="/food" id="grid-Link">Contact Support</Link>

        {/* <h6>Shopify Experts Marketplace</h6>
        <p>Hire a Shopify expert to help you with everything from store setup to SEO.</p>
        <Link to="/food" id="grid-link">Explore the shopify expert marketplaces</Link> */}
      </div>
          </div>
    </Col>
    <Col fluid>
    <img src="laptop.jpg" alt="" id="img1" style={{marginTop:"4.5rem"}}/> 
    </Col>
  </Row>
</Container>
</div>

<div className="bottom">
  <h3>Start your business journey with Shopify</h3>
  <p style={{marginTop:"2rem"}}>Try Shopify for free, and explore all the tools and services you need to
     start, run, and grow <br/>your business.</p>
     <Link to="/Login.js" >
        <Button variant="#FF8C00" className="btn" style={{padding:"0.4rem 1.2rem" }}>Start free trial</Button>
        </Link>
</div>
  </div>
</section>
<footer style={{backgroundColor:"#FF8C00"}}>
  <div className="link-foot">
        <Link to="/" className="footer-link">About</Link>
        <Link to="/" className="footer-link">Careers</Link>
        <Link to="/" className="footer-link">Press and Media</Link>
        <Link to="/" className="footer-link">Shopify Plus</Link>
        <Link to="/" className="footer-link">Sitemap</Link>
        <hr/>
 </div>

 <div className="foot-section">
        <Container>
          <Row>
            <Col md={2}>
            <p id="foot-sec-para">Online Store</p>
            <Link to="/" className="foot-section-link">Sell online</Link><br/>
            <Link to="/" className="foot-section-link">Features</Link><br/>
            <Link to="/" className="foot-section-link">Examples</Link><br/>
            <Link to="/" className="foot-section-link">Website Editor</Link><br/>
            <Link to="/" className="foot-section-link">Online Retail</Link><br/>
            <Link to="/" className="foot-section-link">Ecommerce Website</Link>
 </Col>
            <Col md={2} style={{marginTop:"3rem"}}>
            <Link to="/" className="foot-section-link" >Domain names</Link><br/>
            <Link to="/" className="foot-section-link">Themes</Link><br/>
            <Link to="/" className="foot-section-link">Shopping cart</Link><br/>
            <Link to="/" className="foot-section-link">Ecommerce hosting</Link><br/>
            <Link to="/" className="foot-section-link">Mobile commerce</Link><br/>
            <Link to="/" className="foot-section-link">Ecommerce software</Link>
 </Col>
            <Col md={2} style={{marginTop:"3rem"}}>
            <Link to="/" className="foot-section-link">Online store builder</Link><br/>
            <Link to="/" className="foot-section-link">Oberlo</Link><br/>
            <Link to="/" className="foot-section-link">Dropshipping business</Link><br/>
            <Link to="/" className="foot-section-link">store themes</Link><br/>
            <Link to="/" className="foot-section-link">Cross-Border Ecommerce</Link>
  </Col>
            <Col md={2}>
            <p id="foot-sec-para">Point of Sale</p>
            <Link to="/" className="foot-section-link">Point of sale</Link><br/>
            <Link to="/" className="foot-section-link">Features</Link><br/>
            <Link to="/" className="foot-section-link">Hardware</Link>
  </Col>
            <Col md={2}>
            <p id="foot-sec-para">Support</p>
            <Link to="/" className="foot-section-link">24/7 Support</Link><br/>
            <Link to="/" className="foot-section-link">Shopify help center</Link><br/>
            <Link to="/" className="foot-section-link">Forums</Link><br/>
            <Link to="/" className="foot-section-link">API documentation</Link><br/>
            <Link to="/" className="foot-section-link">Free tools</Link><br/>
            <Link to="/" className="foot-section-link">Websites for sale</Link><br/>
            <Link to="/" className="foot-section-link">Hatchful</Link>
   </Col>
            <Col md={2}>
            <p id="foot-sec-para">SHOPIFY</p>
            <Link to="/" className="foot-section-link">Contact</Link><br/>
            <Link to="/" className="foot-section-link">Partner Program</Link><br/>
            <Link to="/" className="foot-section-link">Affiliate program</Link><br/>
            <Link to="/" className="foot-section-link">App developers</Link><br/>
            <Link to="/" className="foot-section-link">investor</Link><br/>
            <Link to="/" className="foot-section-link">Shopify events</Link>
   </Col>

          </Row>
        </Container>
 </div>
 <hr/>
<div className="footer-sec">
        <Container>
          <Row>
            <Col>

            </Col>
            <Col className="terms">
            <Link to="/" className="foot-section-link" style={{marginLeft:"9rem",marginRight:"1rem"}}>Terms of Services</Link>
            <Link to="/" className="foot-section-link">Privacy Policy</Link>

            </Col>
          </Row>
        </Container>
</div>
</footer>

  </> );
}
 
export default Home;