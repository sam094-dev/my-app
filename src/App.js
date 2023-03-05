
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {

    if (mode === 'dark') {
      // alert('light');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");

    }
    else {
      // alert('dark');
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Been Enabled", "success");

    }
  }
  return (
    <>

      {/* <Navbar title="TextUtils2" abouttext="About" /> */}
      {/* default props */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading=" Enter the text to analyze" mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert} />
        {/* <About /> */}
      </div>


    </>
  );
}

export default App;
