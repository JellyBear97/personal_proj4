import React, { useState } from 'react';
import SmallModal from '../common/SmallModal';
import useInput from '../../hooks/useInput';
import { css, styled } from 'styled-components';

const CategoryModal = ({ addtionTopCategory, setAdditionTopCategory, additionMidCategory, setAdditionMidCategory }) => {
  console.log(addtionTopCategory, setAdditionTopCategory, additionMidCategory, setAdditionMidCategory);
  const [topCategory, onChangeTopCategoryhandler] = useInput();
  const [midCategory, onChangeMidCategoryhandler] = useInput();
  const [midCategoryDesc, onChangeMidCategoryDeschandler] = useInput();
  return (
    <SmallModal>
      {addtionTopCategory && (
        <>
          <h3>새로운 상위 카테고리 만들기</h3>
          <StInput type="text" value={topCategory} onChange={onChangeTopCategoryhandler} placeholder="새로 만들 상위 카테고리명을 입력하세요" />
          <StButtons>
            <button
              onClick={() => {
                setAdditionTopCategory(false);
              }}>
              닫기
            </button>
            <button>만들기</button>
          </StButtons>
        </>
      )}
      {additionMidCategory && (
        <>
          <h3>새로운 하위 카테고리 만들기</h3>
          <StInput type="text" value={midCategory} onChange={onChangeMidCategoryhandler} placeholder="새로 만들 하위 카테고리명을 입력하세요" />
          <StTextarea type="text" value={midCategoryDesc} onChange={onChangeMidCategoryDeschandler} placeholder="하위 카테고리에 대해 간단히 알려주세요"></StTextarea>
          <StButtons>
            <button
              onClick={() => {
                setAdditionMidCategory(false);
              }}>
              닫기
            </button>
            <button>만들기</button>
          </StButtons>
        </>
      )}
    </SmallModal>
  );
};

export default CategoryModal;

const StTextarea = styled.textarea`
  box-sizing: border-box;
  width: 280px;
  height: 80px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #afafaf;
  resize: none;
`;
const StInput = styled.input`
  box-sizing: border-box;
  width: 280px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #afafaf;
`;

const StButtons = styled.div`
  display: flex;
  gap: 20px;
`;
