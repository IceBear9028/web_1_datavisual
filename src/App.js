import logo from './logo.svg';
import './App.css';



function App() {

  let Title = "여러 데이터들중 하나"

  return (
    <div className="App">
      <div className = "headTitle">
        <h4>Dawin Data</h4> {/*생코드로 작성가능.하지만 변수로 두는것도 가능*/}
      </div>
      <h2>{ Title }</h2>{/*변수 넣을때는 꼭 대괄호! */}
    </div>
  );
}

export default App;
