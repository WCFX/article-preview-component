import React from 'react';

import { 
  Container,
  Card,
  ProductSidebar,
  ProductMain,
  Profile
} from './styles';

import AvatarMichelle from '../../assets/avatar-michelle.jpg';
import Drawers from '../../assets/drawers.jpg';
// import { FacebookIcon } from '../../assets/icon-facebook.svg';
// import { PinterestIcon } from '../../assets/icon-pinterest.svg';
// import { TwitterIcon } from '../../assets/icon-twitter.svg';
// import ShareIcon from '../../assets/icon-share.svg';

const Home = () => {
  return (
    <Container>
      <Card>

        <ProductSidebar>
          <img src={Drawers} alt="Table"/>
        </ProductSidebar>

        <ProductMain>
          <h1>
          Shift the overall look and feel by adding these wonderful 
          touches to furniture in your home
          </h1>
          <p>
          Ever been in a room and felt like something was missing? Perhaps 
          it felt slightly bare and uninviting. I’ve got some simple tips 
          to help you make any room feel complete.
          </p>
          <div>
            <img src={AvatarMichelle}  alt="Profile" />
            <h2>
            Michelle Appleton
            </h2>
            
            <h3>
            28 Jun 2020
            </h3>
            
          </div>
        </ProductMain>

        <Profile>

          
        </Profile>    


      </Card>
    </Container>
  )
};


export default Home;