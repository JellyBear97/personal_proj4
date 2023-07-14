import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getUsers } from '../api/users';
import { useQuery } from 'react-query';

const Home = () => {
  const navigate = useNavigate();
  // console.log('home에서 auth에 로그인 한 사람 정보가 들어있니?', auth);
  const [authUid, setAuthUid] = useState(null);
  const [user, setUser] = useState();
  // const users = useQuery('users', getUsers);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log('user from layout', user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
      setAuthUid(user.uid);
    });
  }, []);

  if (authUid === null) {
    return <div>로딩중입니당........</div>;
  }

  return (
    <Layout authUid={authUid}>
      <h1>Home</h1>
      <button onClick={() => navigate(`/my-space/${authUid}`)}>→ MY THING PAGE로 이동</button>
    </Layout>
  );
};

export default Home;
