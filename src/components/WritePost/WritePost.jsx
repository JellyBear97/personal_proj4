import React, { useRef, useState } from 'react';
import Modal from './Modal';
import { styled } from 'styled-components';
import { RxDotsHorizontal } from 'react-icons/rx';
import { FaTrashCan } from 'react-icons/fa6';
import '../../App.css';

function WritePost({ authUid, setDoesOpenModal }) {
  /**
   * \
   * * imgBase64 : 미리보기 구현을 위해 이미지 데이터를 받을 스테이트
   * * imgFile : 이미지 파일 그 자체를 받을 스테이트 (post 게시 때 data로 저장)
   */
  const [imgBase64, setImgBase64] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const imgRef = useRef();
  const [toggleMidCategory, setToggleMidCategory] = useState(false);
  const [toggleTopCategory, setToggleTopCategory] = useState(false);

  const handleImgFileSelect = () => {
    const file = imgRef.current.files[0];
    setImgFile(file);

    // * previewImgFile
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgBase64(reader.result);
    };
  };

  return (
    <Modal>
      <StH3>게시물 추가</StH3>
      <StForm action="">
        <StInputs>
          <figure style={{ position: 'relative' }}>
            {imgBase64 && (
              <FaTrashCan
                className="trashIcon"
                onClick={() => {
                  setImgBase64(null);
                }}
              />
            )}
            <StLabel htmlFor="file">
              <StImageStage>
                {/* 이미지 파일 */}
                {imgBase64 ? (
                  <img src={imgBase64} alt="" />
                ) : (
                  <>
                    <StImageButton type="button">+</StImageButton>
                    <p>클릭하여 이미지 업로드</p>
                  </>
                )}
              </StImageStage>
              <input ref={imgRef} type="file" name="file" id="file" onChange={handleImgFileSelect} style={{ display: 'none' }} />
            </StLabel>
          </figure>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <DropDownWrapper>
              {/* 선택된 카테고리 없으면 카테고리 선택표시, 있으면 선택한 카테고리 표시 */}
              <DropDownHeader onClick={() => setToggleTopCategory(prev => !prev)}>카테고리 선택</DropDownHeader>
              {toggleTopCategory && (
                <>
                  <TopCategoryList>
                    <TopCategoryItem onClick={() => setToggleMidCategory(prev => !prev)}>
                      많은 상위 태그들
                      {toggleMidCategory && (
                        <MidCategory
                          onClick={e => {
                            e.stopPropagation();
                          }}>
                          <MidListWrapper>
                            <div></div>
                            <MidCategoryList>
                              <MidCategoryItem>하위 태그들</MidCategoryItem>
                            </MidCategoryList>
                          </MidListWrapper>
                          <DropDownMidFooter>
                            <span>+</span>
                            <span>하위 카테고리 추가</span>
                          </DropDownMidFooter>
                        </MidCategory>
                      )}
                    </TopCategoryItem>
                  </TopCategoryList>
                  <DropDownTopFooter>
                    <span>+</span>
                    <span>상위 카테고리 추가</span>
                  </DropDownTopFooter>
                </>
              )}
            </DropDownWrapper>
            <StTextarea placeholder="게시물에 대해 나의 생각을 채워주세요!"></StTextarea>
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
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 40px 20px;
`;

const StH3 = styled.h3`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #dedede;
  text-align: center;
`;

const StInputs = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  & figure {
    box-sizing: border-box;
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & > div {
    box-sizing: border-box;
    width: 48%;
  }
`;

const StButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const StImageStage = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  border: 2px dashed olive;
  border-radius: 10px;
  & img {
    width: 100%;
  }
`;

const StImageButton = styled.button`
  background-color: #fff;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid olive;
  color: olive;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  text-align: center;
`;
const StLabel = styled.label`
  background-color: transparent;
  z-index: 1;
  & :hover {
    cursor: pointer;
  }
`;
const DropDownWrapper = styled.div`
  border: 1px solid #ccc;
  width: 250px;
`;

const DropDownHeader = styled.div``;
const DropDownTopFooter = styled.div``;
const DropDownMidFooter = styled.div``;

const TopCategoryList = styled.ul``;
const TopCategoryItem = styled.li`
  cursor: pointer;
`;

const MidCategory = styled.div``;
const MidListWrapper = styled.div``;
const MidCategoryList = styled.ul``;
const MidCategoryItem = styled.li`
  cursor: pointer;
`;

const StTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  resize: none;
  border-radius: 10px;
  outline: none;
  padding: 15px;
`;
