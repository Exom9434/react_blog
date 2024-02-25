import './App.css';
import { useState } from 'react';

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] = useState([0,0,0])
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={ ()=>{ 
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      글제목변경(copy)
    } }> 수정버튼 </button>

      <button onClick={ ()=>{ 
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy)
          } }> 정렬버튼 </button>

      <div className="list">
      { 
   글제목.map(function(a, i){
      return (
        <div className="list">
          <h4> 
            { 글제목[i] } 
            <span onClick={()=>{ 
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)  
            }}>👍</span> {따봉[i]} 
          </h4> 
          <p>2월 18일 발행</p>
        </div> )
  }) 
}
            </div>
    </div>
  )
}




function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
