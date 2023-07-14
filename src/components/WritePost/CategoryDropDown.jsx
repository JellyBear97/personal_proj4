import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import CategoryModal from './CategoryModal';

const CategoryDropDown = ({ authUid }) => {
  const [toggleMidCategory, setToggleMidCategory] = useState(false);
  const [toggleTopCategory, setToggleTopCategory] = useState(false);
  const [addtionTopCategory, setAdditionTopCategory] = useState(false);
  const [additionMidCategory, setAdditionMidCategory] = useState(false);
  // 서버에서 auth user정보의 categories를 state로 저장해줘.

  // useEffect(() => {}, []);
  return (
    <>
      {addtionTopCategory && <CategoryModal authUid={authUid} addtionTopCategory={addtionTopCategory} setAdditionTopCategory={setAdditionTopCategory}></CategoryModal>}
      {additionMidCategory && <CategoryModal authUid={authUid} additionMidCategory={additionMidCategory} setAdditionMidCategory={setAdditionMidCategory}></CategoryModal>}
      <div style={{ boxSizing: 'border-box', width: '100%' }}>
        {/* 선택된 카테고리 없으면 카테고리 선택표시, 있으면 선택한 카테고리 표시 */}
        <DropDownHeader onClick={() => setToggleTopCategory(prev => !prev)} toggleMidCategory={toggleMidCategory}>
          카테고리 선택
        </DropDownHeader>
        <DropDownWrapper>
          {toggleTopCategory && (
            <>
              <TopCategoryWrapper>
                <TopCategoryList>
                  <TopCategoryItem onClick={() => setToggleMidCategory(prev => !prev)}>많은 상위 태그들</TopCategoryItem>
                  {/* [ ] */}
                  <TopCategoryItem>많은 상위 태그들</TopCategoryItem>
                  <TopCategoryItem>많은 상위 태그들</TopCategoryItem>
                  <TopCategoryItem>많은 상위 태그들</TopCategoryItem>
                  <TopCategoryItem>많은 상위 태그들</TopCategoryItem>
                  {/* [ ] */}
                </TopCategoryList>
                {/* {!toggleMidCategory && ( */}
                <DropDownTopFooter
                  onClick={() => {
                    setAdditionTopCategory(true);
                  }}>
                  <span>+</span>
                  <span>상위 카테고리 추가</span>
                </DropDownTopFooter>
                {/* )} */}
              </TopCategoryWrapper>

              {toggleMidCategory && (
                <MidCategoryWrapper>
                  <MidCategory>
                    <MidCategoryList>
                      <MidCategoryItem>하위 태그들</MidCategoryItem>
                      {/* [ ] */}
                      <MidCategoryItem>하위 태그들</MidCategoryItem>
                      <MidCategoryItem>하위 태그들</MidCategoryItem>
                      {/* [ ] */}
                    </MidCategoryList>
                    <DropDownMidFooter
                      onClick={() => {
                        setAdditionMidCategory(true);
                      }}>
                      <span>+</span>
                      <span>하위 카테고리 추가</span>
                    </DropDownMidFooter>
                  </MidCategory>
                </MidCategoryWrapper>
              )}
            </>
          )}
        </DropDownWrapper>
      </div>
    </>
  );
};

export default CategoryDropDown;

const DropDownHeader = styled.div`
  background-color: #eee;
  font-weight: 600;
  box-sizing: border-box;
  width: ${({ toggleMidCategory }) => {
    if (toggleMidCategory) {
      return '100%';
    }
    if (!toggleMidCategory) {
      return '50%';
    }
  }};
  padding: 10px;
`;
const DropDownWrapper = styled.div`
  display: flex;
`;

const TopCategoryWrapper = styled.div`
  box-sizing: border-box;
  width: 50%;
  border: 2px solid #eee;
`;
const MidCategoryWrapper = styled.div`
  box-sizing: border-box;
  width: 50%;
  border: 2px solid #eee;
`;

const TopCategoryList = styled.ul`
  height: 135px;
  overflow: auto;
`;
const TopCategoryItem = styled.li`
  padding: 10px;
`;
const DropDownTopFooter = styled.div`
  font-weight: 600;
  padding: 10px;
  border-top: 2px solid #eee;
`;

// Top&Mid CategoryList 기준으로 스크롤 구현

const MidCategory = styled.div``;
const MidCategoryList = styled.ul`
  height: 135px;
  overflow: auto;
`;
const MidCategoryItem = styled.li`
  padding: 10px;
`;
const DropDownMidFooter = styled.div`
  font-weight: 600;
  padding: 10px;
  border-top: 2px solid #eee;
`;
