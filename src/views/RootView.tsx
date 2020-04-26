import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Header from '../components/Header/Header';
import InputContainer from '../components/InputContainer/InputContainer';
import CountriesContainer from '../components/CountriesContainer/CountriesContainer';

const RootView: React.FC = () => {
  return (
    <MainTemplate>
      <>
        <Header />
        <InputContainer />
        <CountriesContainer />
      </>
    </MainTemplate>
  );
};

export default RootView;
