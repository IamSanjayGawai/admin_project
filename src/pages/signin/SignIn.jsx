import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
      <Wrapper>
        <h2>Sign in</h2>
        <div className=''>
          <Form>
            <div>
              <label htmlFor=''>Email</label>
              <input type='text' placeholder='Enter email' />
            </div>
            <div>
              <label htmlFor=''>Password</label>
              <input type='password' placeholder='Enter password' />
            </div>
            <div className='btns'>
              <button  className='signin' type='submit'>Sign In</button>
              <button className='signup' ><Link to='/signup'>Sign Up</Link></button>
            </div>
          </Form>
        </div>
      </Wrapper>
    </>
  );
}

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


  & > div {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  & > div > label {
    font-size: 20px;
    margin-bottom: 10px;
  }

  & > div > input {
    height: 30px;
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
  }

  .btns {
    /* Move .btns outside of the div selector */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

  }

  .btns > button {
    height: 40px;
    font-size: 15px;
    padding: 5px;
    background-color: #4caf50;
    width: 30%;
    border: none;
    color: white;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
  }

  .btns > button > a {
    text-decoration: none;
    color: white;
  }
  .btns > .signin { 
    background-color: #2196f3;
    }
`;
