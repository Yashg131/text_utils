import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title="TextUtils - DarkMode";
    }
    else{
      setMode('light')
      document.body.style.background = 'white' 
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'>
    <Textform heading = "Enter the text below" showAlert={showAlert} mode={mode}/> 
    </div>
    </>
  );
}

export default App;
