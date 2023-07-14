import React, { useState } from 'react';
import SmallModal from '../common/SmallModal';
import useInput from '../../hooks/useInput';
import { css, styled } from 'styled-components';
import shortId from 'shortid';
import { useMutation } from 'react-query';
import { addTopCategory } from '../../api/userTopCategories';

const CategoryModal = ({ authUid, addtionTopCategory, setAdditionTopCategory, additionMidCategory, setAdditionMidCategory }) => {
  // console.log(addtionTopCategory, setAdditionTopCategory, additionMidCategory, setAdditionMidCategory);
  // console.log('authUid', authUid);
  const [topCategory, onChangeTopCategoryhandler] = useInput();
  const [midCategory, onChangeMidCategoryhandler] = useInput();
  const [midCategoryDesc, onChangeMidCategoryDeschandler] = useInput();
  const topCategoryMutation = useMutation(addTopCategory, {
    onSuccess: () => {
      // 어떤 걸 invalidate 할 것인가. 여기서는 상위 카테고리를 다시 갱신해줘얗함
      console.log('성공스', '할 꺼 많음');
    },
  });
  const makeNewTopCategory = () => {
    // 어떤 형태로 넣어줄 것인가
    const newTopCategory = {
      topCategoryName: topCategory,
      id: shortId.generate(),
      midCategory: [],
    };
    const totalData = { newTopCategory, authUid };

    topCategoryMutation.mutate(totalData);
  };
  const onSubmitHandler = event => {
    event.preventDefault();
    console.log('✅');
    // makeNewTopCategory();
  };
  return (
    <SmallModal>
      {addtionTopCategory && (
        <div
          onClick={e => {
            e.stopPropagation();
          }}>
          <StForm onSubmit={onSubmitHandler}>
            <h3>새로운 상위 카테고리 만들기</h3>
            <StInput type="text" value={topCategory} onChange={onChangeTopCategoryhandler} placeholder="새로 만들 상위 카테고리명을 입력하세요" />
            <StButtons>
              <button
                type="button"
                onClick={e => {
                  setAdditionTopCategory(false);
                  console.log('닫기');
                }}>
                닫기
              </button>
              <button
                type="button"
                onClick={() => {
                  console.log('다시찍기');
                  makeNewTopCategory();
                }}>
                만들기
              </button>
            </StButtons>
          </StForm>
        </div>
      )}
      {additionMidCategory && (
        <StForm
          onSubmit={e => {
            e.preventDefault();
          }}>
          <h3>새로운 하위 카테고리 만들기</h3>
          <StInput type="text" value={midCategory} onChange={onChangeMidCategoryhandler} placeholder="새로 만들 하위 카테고리명을 입력하세요" />
          <StTextarea type="text" value={midCategoryDesc} onChange={onChangeMidCategoryDeschandler} placeholder="하위 카테고리에 대해 간단히 알려주세요"></StTextarea>
          <StButtons>
            <button
              type="button"
              onClick={e => {
                e.preventDefault();

                setAdditionMidCategory(false);
              }}>
              닫기
            </button>
            <button>만들기</button>
          </StButtons>
        </StForm>
      )}
    </SmallModal>
  );
};

export default CategoryModal;

const StForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
`;

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
