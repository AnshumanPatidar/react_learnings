

import AppDetail from './components/AppDetail';
import AppName from './components/AppName';
import CurrTime from './components/Time';

function App() {
  return <center className='center-container'>
    <div id='main'>
      <AppName />
      <AppDetail />
      <CurrTime />
    </div>
  </center>



}

export default App;
