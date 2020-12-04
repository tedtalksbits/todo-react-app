import styled from 'styled-components';

export const Title = styled.h3`
   color: #1dbef9;
   margin-bottom: 2rem;
   text-align: center;
   text-transform: capitalize;
  `
export const Task = styled.h2`
   color: #2f3955;
   font-weight: 500;
   text-transform: capitalize;
   margin-bottom: 10px;
   @media screen and (max-width: 768px){
      font-size: 1.2rem
   }
  `
export const ButtonContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin: 2rem 0 1rem 0;
`
export const Button = styled.button`
   padding: 10px 2rem;
   border: none;
   color: white;
   font-weight: 600;
   background: ${({ primary }) =>( primary ? 'linear-gradient(180deg, #71d1fb 50%, #1dbef9 100%)' : 'linear-gradient(180deg, #fa7040 50%, #f9581d 100%)')};
   box-shadow: ${({ primary }) =>( primary ? '#1dbef9 0px 16px 31px -13px' : '#f9581d 0px 16px 31px -13px')};
   border-radius: .5rem;
   text-transform: capitalize;
   width: 50%;
   

   @media screen and (max-width: 768px){
      width: 100%;
      padding: 10px;
   }
  `
