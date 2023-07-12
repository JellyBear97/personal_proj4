/* 해야할 것
- [중복확인] 이메일, 닉네임 
- [유효성검사]
- 실시간 비밀번호 유효성 점검 & UI로 보여주기
- 비밀번호 일치하는지 실시간 보여주기
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>SignUp</h1>
      <form>
        <input type="text" placeholder="이메일 입력" />
        <input type="text" placeholder="닉네임" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호확인" />
        <button>회원가입</button>
      </form>
      <button onClick={() => navigate('/')}>로그인페이지로이동</button>
    </div>
  );
};

export default SignUp;
