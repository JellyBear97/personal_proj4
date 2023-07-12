import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>SignIn</h1>
      <form>
        <input type="text" placeholder="이메일 입력" />
        <input type="password" placeholder="pw 입력" />
        <button>로그인</button>
      </form>
      <button
        onClick={() => {
          navigate('/sign-up');
        }}>
        회원가입 하러가기
      </button>
    </div>
  );
};

export default SignIn;
