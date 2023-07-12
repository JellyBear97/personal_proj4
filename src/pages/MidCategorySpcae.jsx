import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { styled } from 'styled-components';
import PostItem from '../components/Mid_Category_Space/PostIem/PostItem';
import WritePost from '../components/WritePost/WritePost';

const MidCatagorySpcae = () => {
  const [doesOpenModal, setDoesOpenModal] = useState(false);
  return (
    <Layout>
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
