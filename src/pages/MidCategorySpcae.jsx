import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { styled } from 'styled-components';
import PostItem from '../components/Mid_Category_Space/PostIem/PostItem';
import WritePost from '../components/WritePost/WritePost';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const MidCatagorySpcae = () => {
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
      {doesOpenModal && <WritePost setDoesOpenModal={setDoesOpenModal} />}
      <StWrapper>
        <button
          onClick={() => {
            setDoesOpenModal(true);
          }}>
          게시물추가
        </button>

        <h1>닉네임's 하위카테고리이름</h1>
        <section>카테고리 간단 설명</section>
        <StPostContainer>
          {/* 카테고리에 해당하는 게시물들 이미지로 보여주기 */}
          <PostItem />
        </StPostContainer>
      </StWrapper>
    </Layout>
  );
};

export default MidCatagorySpcae;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StPostContainer = styled.section`
  width: 1200px;
  column-count: 4;
  column-gap: 20px;

  & .PostItem {
    margin-bottom: 20px;
  }
  & .PostItem > img {
    width: 100%;
  }
`;
