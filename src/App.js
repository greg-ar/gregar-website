import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gregory Arapis</h1>
        <h2>FullStack Developer</h2>
        <div style={{
          display:'flex',
          justifyContent:'space-between',
          }}>
          <img 
            src='/media/portrait.jpeg' 
            height='600px'
          />
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>php</li>
            <li>CSS</li>
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>Apache Tomcat</li>
            <li>Linux Sysadmin</li>

          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
