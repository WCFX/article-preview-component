import React from 'react';

import { 
  Container,
  Card,
  ProductSidebar,
  ProductMain,
  Profile,
  InformationCard
} from './styles';

import AvatarMichelle from '../../assets/avatar-michelle.jpg';
import Drawers from '../../assets/drawers.jpg';


const Home = () => {
  return (
    <Container>
      <Card>

        <ProductSidebar>
          <img src={Drawers} alt="Table"/>
        </ProductSidebar>

        <ProductMain>
          <InformationCard>
            <h1>
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
            </h1>
            <p>
            Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
            </p>
          </InformationCard>
          <Profile>
            <img src={AvatarMichelle}  alt="Profile" />
            <ul>
              <h2>Michelle Appleton</h2>
              <h3>28 Jun 2020</h3>
            </ul>
          </Profile>    
      
        </ProductMain>


      </Card>
    </Container>
  )
};


export default Home;