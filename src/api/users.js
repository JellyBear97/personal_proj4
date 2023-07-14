// axios가 들어가는 모듈
import axios from 'axios';

// 모든 users를 가져오는 api;
const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
  console.log(response);
  return response.data;
};

const getUser = async authUid => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/`);
  const usersData = response.data;
  let workingUserdata;
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === authUid) {
      workingUserdata = usersData[i];
    }
  }
  return workingUserdata;
};
export { getUsers, getUser };
