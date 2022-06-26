import React from 'react';
import Plot from 'react-plotly.js';
//react plot.js이용하여 plotly component 만들기
//여기다가 여러 그래프 함수 만들어서 export 한다.


//data 예시
const linspaceFn = (startValue, stopValue, cardinality) => {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
      arr.push(parseFloat((startValue + (step * i)).toFixed(3)));
    }
    return arr;
  }

const t = linspaceFn(0, 20, 100);
const x = t.map(i => (Math.cos(i)));
const y = t.map(i => Math.sin(i));
const z = t;

function ScatterPlot(props){
    return(
        <div>
            <Plot/>
        </div>
    );
}

function LinePlot(props){
    return (
        <div>
            <Plot/>
        </div>
    );
}

function _3dPlot(props){
    return (
        <div>
            <Plot
                data = {[
                    {
                        x:x,
                        y:y,
                        z:z,
                        mode:'markers',
                        type:'scatter3d',
                        markers:{
                            size: 12,
                            color : z,
                            colorscale:'Viridis',
                            opacity:0.8
                        }
                    }
                ]}           
            />
        </div>
    );
}

export {ScatterPlot,LinePlot,_3dPlot};


