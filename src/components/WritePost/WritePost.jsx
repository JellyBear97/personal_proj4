/* 글쓰기 조건 및 요구사항
  1. 'my space'는 일단은 누구나 접근할 수 있는 공간임. 
    => 따라서 my space (메인, 하위 카테고리, 포스트 상세보기) 에서 다음 아래 사항은 auth확인 필요
      (아래 사항들은 페이지 조회시 걸러서 보여줘야함!(선처리) + 혹여나 작성자가 아닌데도 보일 수 있으니후처리로 버튼 누르는 등의 행위시 경고창 띄어줘야함(후처리))
        - my space main : 포스트 작성, 상위 카테고리 생성, 프로필 정보수정 , 카테고리 삭제
        - 하위 카테고리 : 포스트 작성, 하위 카테고리 소개 수정, 카테고리 삭제
        - 포스트 상세보기 : 포스트 수정, 포스트 삭제, 포스트 상세게시물 user memo CUD 
        post를 작성하는 버튼은 user에게만 보여야하고,
*/

import React, { useRef, useState } from 'react';
import Modal from './Modal';
import { styled } from 'styled-components';
import { RxDotsHorizontal } from 'react-icons/rx';
import { FaTrashCan } from 'react-icons/fa6';
import '../../App.css';
import CategoryDropDown from './CategoryDropDown';
import CategoryModal from './CategoryModal';

function WritePost({ authUid, setDoesOpenModal }) {
  /**
   * \
   * * imgBase64 : 미리보기 구현을 위해 이미지 데이터를 받을 스테이트
   * * imgFile : 이미지 파일 그 자체를 받을 스테이트 (post 게시 때 data로 저장)
   */
  const [imgBase64, setImgBase64] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const imgRef = useRef();

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
      <StForm
        action=""
        onSubmit={e => {
          e.preventDefault();
          if (e.currentTarget !== e.target) {
            return;
          }
          console.log('확인✅');
        }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <CategoryDropDown authUid={authUid}></CategoryDropDown>
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

const StTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  resize: none;
  border-radius: 10px;
  outline: none;
  padding: 15px;

  z-index: 8;
`;
