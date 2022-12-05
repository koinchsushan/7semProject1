import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Components/AccountLogin/SignIn';
import FirstPage from './Components/Syptom Checker/FirstPage/FirstPage';
import SecondPage from './Components/Syptom Checker/SecondPage/SecondPage';
import data from '../src/Components/Data/symptoms.json';
import AdminPage from './Components/Admin-page/AdminPage';
import Main from './Components/Main';
import SignUp from './Components/SignUp/SignUp';
import ReportPdf from './Components/PdfReport/ReportPdf';

function App() {
  return (
          <div>
            <Routes>
              <Route path="/home" element={<Main />} />
              <Route path="/" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="firstPage" element={<FirstPage />} />
              <Route path="secondPage" element={<SecondPage bdata={data} />} />
              <Route path="report" element={<ReportPdf />} />
            </Routes>
          </div>
  );
}

export default App;
