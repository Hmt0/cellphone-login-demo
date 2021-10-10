// import React from 'react';
import { useState } from 'react';
import './App.css';
import Query from './pages/Query';

function App() {
  const [time, setTime] = useState(60);
  const [btnDisabled, setBtnDisabled] = useState(false);

  function handleClick() {
    setBtnDisabled(true)
    const timer = setInterval(() => {
      setTime((preSecond) => {
        if(preSecond > 1) {
          return preSecond - 1;
        }
        clearInterval(timer);
        return 60;
      })
    }, 1000)
  }

  return (
    <div className="App">
      <form className="container">
        <p className="title">请登录！</p>
        <div className="formRow">
          <label htmlFor="cellphone">请输入电话号码：</label>
          <input type="text" id="cellphone" required></input>
        </div>

        <div className="formRow">
          <label htmlFor="verifyCode">请输入验证码：</label>
          <input type="text" id="verifyCode" required></input>
          <button className="sendButton" disabled={btnDisabled} onClick={handleClick}>发送验证码</button>
          <p>倒计时：{time}</p>
        </div>
        <button>立即登录</button>
      </form>

      <Query />
    </div>
  );
}

export default App;
