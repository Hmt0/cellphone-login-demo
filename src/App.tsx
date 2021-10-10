// import React from 'react';
import './App.css';
import Query from './pages/Query';

function App() {
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
          <button className="sendButton" disabled>发送验证码</button>
        </div>
        <button>立即登录</button>
      </form>

      <Query />
    </div>
  );
}

export default App;
