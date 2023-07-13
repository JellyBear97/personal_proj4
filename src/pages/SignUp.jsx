/* 해야할 것
- [중복확인] 이메일, 닉네임 
- [인증] 이메일 인증
- [유효성검사]
- 비번은 6자 이상만 가능함
- 실시간 비밀번호 유효성 점검 & UI로 보여주기
- [o] 비밀번호 일치하는지 실시간 보여주기
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { styled } from 'styled-components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';

const SignUp = () => {
  // console.log('여기에는 로그인 한 사람 정보가 없어야하는데 ', auth);
  // state관리
  const [email, onChangeEmailHandler] = useInput();
  const [name, onChangeNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  const [rePassword, onChangeRePasswordHandler] = useInput();

  const navigate = useNavigate();

  const signUp = async name => {
    if (password !== rePassword) {
      alert('비번틀림 다시 입력하셈');
      return;
    } else if (password.length < 6) {
      alert('비번은 6자 이상 가능함');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('one', userCredential.user.uid);
      console.log('userCredential.user.email', userCredential.user.email);
      // json-server로 보내줄 내용
      const welcomeUser = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
        userName: name,
        image: 'https://cdn-icons-png.flaticon.com/512/552/552721.png',
        topCategory: [],
      };
      // json-server에도 일단 저장!
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, welcomeUser);

      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          signUp(name);
        }}>
        <input type="text" name={email} value={email} onChange={onChangeEmailHandler} placeholder="이메일 입력" required />
        <input type="text" name={name} value={name} onChange={onChangeNameHandler} placeholder="이름" required />
        <input type="password" name={password} value={password} onChange={onChangePasswordHandler} placeholder="비밀번호" required />
        <input type="password" name={rePassword} value={rePassword} onChange={onChangeRePasswordHandler} placeholder="비밀번호확인" required />
        {rePassword && (
          <StCheckPwStr $password={password} $rePassword={rePassword}>
            {password !== rePassword ? '비밀번호가 같지 않습니다.' : '비밀번호가 일치합니다!'}
          </StCheckPwStr>
        )}
        <button>가입</button>
      </form>
      <button onClick={() => navigate('/')}>로그인페이지로이동</button>
    </div>
  );
};

export default SignUp;

const StCheckPwStr = styled.p`
  color: ${({ $password, $rePassword }) => {
    if ($password !== $rePassword) {
      return 'red';
    } else {
      return 'green';
    }
  }};
`;
