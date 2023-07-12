import React from 'react';
import Modal from './Modal';
import { styled } from 'styled-components';

function WritePost({ setDoesOpenModal }) {
  return (
    <Modal>
      <StH3>게시물 추가</StH3>
      <StForm action="">
        <StInputs>
          <figure>
            <input type="file" />
            <button type="button">이미지 삭제</button>
          </figure>
          <div>
            <div>카테고리 선택</div>
            <textarea placeholder="게시물에 대해 나의 생각을 채워주세요!"></textarea>
          </div>
        </StInputs>
        <StButtons>
          <button
            type="button"
            onClick={() => {
              setDoesOpenModal(false);
            }}>
            닫기
          </button>
          <button type="submit">저장</button>
        </StButtons>
      </StForm>
    </Modal>
  );
}

export default WritePost;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const StH3 = styled.h3`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #dedede;
  text-align: center;
`;

const StInputs = styled.div`
  display: flex;
  flex-direction: row;

  & figure {
    display: flex;
    flex-direction: column;
  }
`;

const StButtons = styled.div``;
