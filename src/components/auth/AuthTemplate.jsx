import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const AuthTemplateBlock = styled.div`
    width: 350px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 200px;
    border: 1px solid #E6E6E6;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    aligh-items: center;
`;


const WhiteBox = styled.div`
.logo-area{
display: block;
padding-bottom: 2rem;
text-align: center;
font-weight: bold;
letter-spacing: 2px;
}
box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
padding: 2rem;
width: 534px;
background: white;
border-radius: 2px;
`;


const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/"></Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;



/*
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  width: 350px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 200px;
  border: 1px solid #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  aligh-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 534px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/"></Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;*/

/*
* width: 350px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 200px;
    border: 1px solid #E6E6E6;
* */

/*
const WhiteBox = styled.div`
position: absolute;
width: 62px;
height: 27px;
left: 929px;
top: 285px;

.logo-area{
display: block;
padding-bottom: 2rem;
text-align: center;
font-weight: bold;
letter-spacing: 2px;
}
box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
padding: 2rem;
width: 534px;
background: white;
border-radius: 2px;
`;*/

/*
const AuthTemplateBlock = styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
background: ${palette.gray[10]};

display: flex;
flex-direction: column;
justify-content: center;
aligh-items: center;
`;*/


