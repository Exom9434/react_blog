import './App.css';
import React, { useState } from 'react';

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] = useState([0,0,0])
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [name, setName] = useState('개발 blog');

  return (
    <div className="App">
      <div className="black-nav">
        <div>{name}</div>
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
          <h4 onClick={ ()=>{ setModal(true); setTitle(i) } }>  { 글제목[i] }
          <span onClick={(e)=>{e.stopPropagation(); 
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)  
            }}>👍</span> {따봉[i]} 
          <button onClick={ (e)=>{
            let copy = [...글제목];
            copy[i] = '';
            글제목변경(copy)
            e.stopPropagation();
          }}>
            제목 삭제
          </button>
             </h4>
          
          <p>2월 18일 발행</p>
        </div> )
  }) 
}

<input onChange={(e)=>{입력값변경(e.target.value);
  console.log(입력값)
   }}
   >
 </input> <button onClick={()=>{setName(입력값)}}>제목변경</button>

{
  modal == true ? <Modal title = {title} 글제목 = {글제목} 글제목변경 ={글제목변경} color = {'skyblue'}></Modal> : null
}

            </div>
    </div>
  )
}
// 모든 변수는 함수 탈출 불가
function 함수(){
  let a = 10; 
}

function Modal(props){
  return (
    <div className="modal" style = {{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ ()=>{ 
      let copy = [...props.글제목];
      copy[0] = '여자코트 추천';
      props.글제목변경(copy)
    } }> 수정버튼 </button>
    </div>
  )
}
/*
class Modal2 extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name : "kim",
      age : 20
    }
  }
  render() {
    return (
      <div>
        하이 {this.state.name}
        <button onClick={() => {
          this.setState({age: 21});
        }}>

        </button>
      </div>
    );
  }  
}
*/

export default App;

// 1. html css로 미리 디자인해놓고 
// 2. 현재 UI의 상태를 state로 만들어두고
// 3. state에 따라서 UI가 어떻게 보일지 작성