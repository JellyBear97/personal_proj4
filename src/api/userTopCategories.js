// axios가 들어가는 모듈
import axios from 'axios';

// const getTopCategories = async authUid => {
//   const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${authUid}`);
//   console.log(response);
//   return response.data;
// };

// ? post랑 뭐가 다르지....
const addTopCategory = async ({ newUser, authUid }) => {
  console.log('얘네 안나오나?', newUser, authUid);
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/${authUid}`, newUser);
};
export { addTopCategory };
// {
//   {topCategories: ""}
// }
