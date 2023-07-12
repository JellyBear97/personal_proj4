import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const PostItem = () => {
  const navigate = useNavigate();
  return (
    <Item onClick={() => navigate('/detail-post')}>
      <StFigure>
        <StImg src="https://i.pinimg.com/564x/4d/2a/89/4d2a899145bd293eb7f37e9df0a2b958.jpg" alt="" />
      </StFigure>
    </Item>
  );
};

export default PostItem;

const Item = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  cursor: pointer;
`;

const StFigure = styled.div`
  display: inline-block;
`;

const StImg = styled.img`
  width: 100%;
`;
