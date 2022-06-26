import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Component} from 'react';
import Plot from 'react-plotly.js';
import {ScatterPlot,LinePlot,_3dPlot} from './plotlyComponent';


function App() {

  let Title = "여러 데이터들중 하나";
  let [titleChange, THfunction] = useState('안녕하세요');
    // -> 웹app 처럼 만들때 매우 중요함.
    //    글 제목, 내용등이 바뀌게 하고 싶을 때, html 재랜더링을 새로 해서 동적인 움직임 제공.
  const [a,b] = [10,20];


  //아래 return 내부는 jsx 문법을 사용한다.
  return (
    <div className="App">

      <header className = "headTitle">
        <h4 style={ {color : "white",fontSize : "20px"} }>Dawin Data</h4> {/*생코드로 작성가능.하지만 변수로 두는것도 가능*/}
        {/*style 적용시, 중괄호와 안의 속성들도 중괄호(오브젝트형식)로 묶어야 한다.*/}

      </header>

      <h2>{ Title }</h2>{/*변수 넣을때는 꼭 대괄호! */}

      <h1 className = "List1">{ titleChange }/</h1>
      
      <div className = "List1">
        <h4>{ titleChange }</h4>
        <button className = 'button' >이상윤 입니다!</button>
      </div>

      <div className = "List1">
        <h4>안녕하세요</h4>
        <p>아이폰 입니다!</p>
      </div>

      <ScatterPlot></ScatterPlot>
      <LinePlot></LinePlot>
      <_3dPlot></_3dPlot>

      <div>
      </div>
    
    </div>
  );
}

export default App;
