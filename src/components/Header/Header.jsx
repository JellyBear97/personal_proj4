import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { getUser, getUsers } from '../../api/users';
import { useQuery } from 'react-query';

// 사용자 인증정보가 authUid에 담겨있음... (로그인 중인 사용자 Uid)
const Header = ({ authUid }) => {
  console.log('header에서의 authUid', authUid);
  const navigate = useNavigate();
  const [toggleUserNav, setToggleUserNav] = useState(false);
  const { isLoading, isError, data: workingUser } = useQuery('user', () => getUser(authUid));

  if (isLoading) {
    return <div>일단막아 로딩중임</div>;
  }
  console.log('📌확인해줘  ㅠㅠㅠㅠ 잘들어오지?', workingUser);

  const logOut = async e => {
    e.preventDefault();
    await signOut(auth);
    alert('로그아웃 되셨습니다.');
    navigate('/');
  };

  // const logOut
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
        <img src={workingUser.image} alt="" />
      </StUserImage>
      {toggleUserNav && (
        <StUserNav>
          <StUserInfo>
            <StUserImage>
              <img src={workingUser.image} alt="" />
            </StUserImage>
            <div>
              <p>{workingUser.userName}</p>
              <p>@{workingUser.email.split('@')[0]}</p>
            </div>
          </StUserInfo>
          <Link to={`/my-space/${workingUser.id}`}>MY SPACE</Link>
          <button onClick={logOut}>로그아웃</button>
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
    border-radius: 100%;
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
