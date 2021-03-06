import React, { useState, useEffect } from 'react';
import FrontPage from './Pages/FrontPage';
import FirstModule from './Pages/FirstModule';
import SecondModule from './Pages/SecondModule';
import ThirdPage from './Pages/ThirdPage';

function App() {

  // Data transferred from module 1 to module 2
  let [epic, setEpic] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  let ChosenCards = { epic: epic, setEpic: setEpic };

  // Also data transferred from module 1 to module 2
  // 1 - input 1; 2 - input 2; 3 - input 3; 4 - CoD; 5 - WSJF Rank
  const [ButtonsAgrumentLeft, setButtonsAgrumentLeft] = useState([{ id: 0, Style: 'FM_Richey_Button', DispaingImage: "Richey", Input: ['0', '0', '0', '0', '0'] },
  { id: 2, Style: 'FM_Blueville_Button', DispaingImage: "Blueville", Input: ['0', '0', '0', '0', '0'] },
  { id: 5, Style: 'FM_Downs_Button', DispaingImage: "Downs", Input: ['0', '0', '0', '0', '0'] },
  { id: 3, Style: 'FM_Accommodation_Button', DispaingImage: "Accommodation", Input: ['0', '0', '0', '0', '0'] }]);
  let dataButtonLeft = { ButtonsAgrument: ButtonsAgrumentLeft, setButtonsAgrument: setButtonsAgrumentLeft };

  const [ButtonsAgrumentRight, setButtonsAgrumentRight] = useState([
    { id: 6, Style: 'FM_Extreme_Button', DispaingImage: "Extreme", Input: ['0', '0', '0', '0', '0'] },
    { id: 4, Style: 'FM_ONeill_Button', DispaingImage: "ONeill", Input: ['0', '0', '0', '0', '0'] },
    { id: 1, Style: 'FM_Lean_Button', DispaingImage: "Lean", Input: ['0', '0', '0', '0', '0'] },
    { id: 7, Style: 'FM_Downtown_Button', DispaingImage: "Downtown", Input: ['0', '0', '0', '0', '0'] }]);
  let dataButtonRight = { ButtonsAgrument: ButtonsAgrumentRight, setButtonsAgrument: setButtonsAgrumentRight };

  // Variable responsible for moving to the next module
  const [Page, setPage] = useState('0');
  let PageChange = { page: Page, setPage: setPage };

  //Data transferred from module 2 to module 3
  let [PI, setPi] = useState([]);

  return (
    <div>
      {Page === '0' ? <FrontPage PageChange={PageChange} /> : null}
      {Page === '1' ? <FirstModule ChosenCards={ChosenCards} PageChange={PageChange} dataButtonLeft={dataButtonLeft} dataButtonRight={dataButtonRight} /> : null}
      {Page === '2' ? <SecondModule ep={ChosenCards.epic} Pi={setPi} PageChange={PageChange} left={dataButtonLeft.ButtonsAgrument} right={dataButtonRight.ButtonsAgrument} /> : null}
      {Page === '3' ? <ThirdPage PageChange={PageChange} features={PI} /> : null}

    </div>
  );
}

export default App;
