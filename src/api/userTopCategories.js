// axios가 들어가는 모듈
import axios from 'axios';

// ? add랑 뭐가 다르지
const addTopCategory = async ({ newTopCategory, authUid }) => {
  console.log('얘네 안나오나?', newTopCategory, authUid);
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/${authUid}/topCategories`, newTopCategory);
};
export { addTopCategory };
