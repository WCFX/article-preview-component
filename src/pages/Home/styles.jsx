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
  /* padding: 2em; */

  > img {
    max-width: 300px;
    width: 100%;
    height: 100%;
  }
`;
export const ProductMain = styled.div`
  

  > h1 {
    font-weight: 700;
    color: var(--font-color);
    font-size: 1.3rem;
    margin: 30px 35px;
    flex-wrap: wrap;

  }
  > p {
    font-size: 1rem;
    color: var(--font-color);
    margin: -15px 35px 30px 35px;
  }
  > div {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0 35px 20px 35px;

    > img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    > h2 {
      color: var(--font-color);
      font-weight: 700;
    }
  }
`;
export const Profile = styled.div`
  display: flex;

`;