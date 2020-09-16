import styled from 'styled-components';

export const Container = styled.div`
  min-height : 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;

`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 750px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;

`;
export const ProductSidebar = styled.div`

  width: 900px;

  > img {
    max-width: 300px;
    width: 100%;
    height: 100%;
  }
`;
export const ProductMain = styled.div`
  margin: 20px 35px 30px 20px;

`;
export const InformationCard = styled.div`

  margin: 20px 0;  

  > h1 {
    letter-spacing: 0.020rem;
    font-weight: 700;
    color: var(--font-color);
    font-size: 1.2rem;
    flex-wrap: wrap;
  }
  > p {
    letter-spacing: 0.010rem;
    margin-top: 15px;
    font-size: 0.8rem;
    color: var(--font-color);
  }
`;
export const Profile = styled.div`

  margin-top: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  > img {
    height: 50px;
    width: 50px;
    border-radius: 50px;

    margin-right: 15px;
  }
  > ul h3 {
    font-weight: 400;
  }
`;