/*
 * @Descripttion: your project
 * @Author: shujia
 * @Date: 2021-09-26 17:54:24
 * @LastEditTime: 2021-09-28 14:59:29
 */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Yahoo <a href="https://www.baidu.com">百度</a></p>
        <p>
          Edit <code>src/App.js</code> and save to reload 2.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
