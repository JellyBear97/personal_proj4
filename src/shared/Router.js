import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import MySpace from '../pages/MySpace';
import MidCatagorySpcae from '../pages/MidCategorySpcae';
import DetailPost from '../pages/DetailPost';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/my-space" element={<MySpace />} />
        <Route path="/mid-category-space" element={<MidCatagorySpcae />} />
        <Route path="/detail-post" element={<DetailPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
