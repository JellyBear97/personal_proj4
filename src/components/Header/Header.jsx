import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const [toggleUserNav, setToggleUserNav] = useState(false);
  return (
    <StNav>
      <span
        onClick={() => {
          navigate('/home');
        }}>
        HOME ICON
      </span>
      <StNavH1
        onClick={() => {
          navigate('/home');
        }}>
        MT THING
      </StNavH1>
      <StUserImage
        onClick={() => {
          setToggleUserNav(prev => !prev);
        }}>
        <img src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="" />
      </StUserImage>
      {toggleUserNav && (
        <StUserNav>
          <StUserInfo>
            <StUserImage>
              <img src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="" />
            </StUserImage>
            <div>
              <p>닉네임</p>
              <p>@email_Id</p>
            </div>
          </StUserInfo>
          <Link to={`/my-space`}>MY SPACE</Link>
          <button
            onClick={() => {
              navigate('/');
            }}>
            로그아웃
          </button>
        </StUserNav>
      )}
    </StNav>
  );
};

export default Header;

const StNav = styled.nav`
  box-sizing: border-box;
  background-color: #c9dcf5;
  width: 100%;

  // NOTE height 변경시 Layout 컴포넌트 div의 margin도 바꿔주어야함, 이 컴포넌트의 StUserNav top도 바꿔줘야함
  height: 40px;

  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  & span:hover,
  h1:hover,
  div:hover {
    cursor: pointer;
  }
`;

const StNavH1 = styled.h1``;

const StUserImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const StUserNav = styled.div`
  background-color: beige;
  width: 130px;
  height: 150px;
  position: fixed;
  top: 35px;
  right: 10px;

  box-sizing: border-box;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
`;

const StUserInfo = styled.div`
  display: flex;
`;
