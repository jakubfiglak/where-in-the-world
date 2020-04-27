import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import InputContainer from '../components/InputContainer/InputContainer';
import CountriesContainer from '../components/CountriesContainer/CountriesContainer';

const RootView: React.FC = () => {
  return (
    <MainTemplate>
      <>
        <InputContainer />
        <CountriesContainer />
      </>
    </MainTemplate>
  );
};

export default RootView;
