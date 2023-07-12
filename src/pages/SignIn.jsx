/*  
  - 이메일 유효성 검사 
  - 이메일 존재 여부 (회원 여부 확인 후 알림창 띄우기)
  - 로그인 실패할 경우 (실패이유 alert) -> (시스템 알림창 말고 직접 만들기!)
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useInput from '../hooks/useInput';

const SignIn = () => {
  const [email, onChangeEmailHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  const navigate = useNavigate();

  const logIn = async e => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={logIn}>
        <input type="text" value={email} onChange={onChangeEmailHandler} placeholder="이메일 입력" />
        <input type="password" value={password} onChange={onChangePasswordHandler} placeholder="pw 입력" />
        <button type="submit">로그인</button>
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
