import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import WritePost from '../components/WritePost/WritePost';

const MySpace = () => {
  const navigate = useNavigate();
  const [doesOpenModal, setDoesOpenModal] = useState(false);
  // console.log('home에서 auth에 로그인 한 사람 정보가 들어있니?', auth);
  const [authUid, setAuthUid] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log('user from layout', user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      setAuthUid(user.uid);
    });
  }, []);

  if (authUid === null) {
    return <div>로딩중입니당........</div>;
  }

  return (
    <Layout authUid={authUid}>
      {doesOpenModal && <WritePost authUid={authUid} setDoesOpenModal={setDoesOpenModal} />}
      <StWrapper>
        <button
          onClick={() => {
            setDoesOpenModal(true);
          }}>
          게시물추가
        </button>
        <h1>닉네임's My SPACE</h1>
        <StOwnerSection>myspace owner information</StOwnerSection>
        <section style={{ padding: '10px' }}>
          <div style={{ display: 'flex', marginTop: '30px', marginBottom: '20px' }}>
            <div>카테고리 정렬</div>
            <button>카테고리 추가</button>
          </div>
          <StTopCategoryList>
            <StTopCategory>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <h2>HOUSE (상위 카테고리)</h2>
                <span>미트볼 버튼</span>
              </div>
              <StUl>
                <li
                  onClick={() => {
                    navigate('/mid-category-space');
                  }}>
                  <h3>하위카테고리</h3>
                  <StCategoryImage>
                    <img src="" alt="" />
                  </StCategoryImage>
                </li>
                <li
                  onClick={() => {
                    navigate('/mid-category-space');
                  }}>
                  <h3>하위카테고리</h3>
                  <StCategoryImage>
                    <img src="" alt="" />
                  </StCategoryImage>
                </li>
                <li
                  onClick={() => {
                    navigate('/mid-category-space');
                  }}>
                  <h3>하위카테고리</h3>
                  <StCategoryImage>
                    <img src="" alt="" />
                  </StCategoryImage>
                </li>
                <li
                  onClick={() => {
                    navigate('/mid-category-space');
                  }}>
                  <h3>하위카테고리</h3>
                  <StCategoryImage>
                    <img src="" alt="" />
                  </StCategoryImage>
                </li>
              </StUl>
            </StTopCategory>
          </StTopCategoryList>
        </section>
      </StWrapper>
    </Layout>
  );
};

export default MySpace;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StOwnerSection = styled.section`
  background-color: #ba9c76;
  box-sizing: border-box;
  width: 100%;
  height: 250px;
`;

const StCategoryImage = styled.div`
  background-color: #000;
  width: 200px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 100%;
  }
`;

const StTopCategoryList = styled.div`
  padding: 10px;
`;

const StTopCategory = styled.div`
  margin-bottom: 20px;
`;

const StUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 15px 20px;
  gap: 30px;

  border-top: 2px solid #050505;
  border-bottom: 2px solid #050505;

  & li:hover {
    cursor: pointer;
  }
`;
