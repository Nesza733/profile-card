import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
   <>
     <div className='card'>
       <Avatar />
       <div className='data'>
         <Intro />
         <SkillList />

        </div> 
     </div>
    </>
  );

}

function SkillList(){
  return(
    <div className='skill-list'>
    <Skill skill='Mobdel 3D       ' emoji='🤌' color='red' />
      <Skill skill='burgur' emoji='👌' color='blue' />
      <Skill skill='python' emoji='👉👈' color='pink' />
      <Skill skill='javascript' emoji='🦾' color='green' /> 
    </div>
  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro(){
  return(
    <div>
      <h1>นายสกุลวรรษ นาวัน</h1>
      <p>
      นักศึกษาที่จะเป็นโปรแกรมแันดับ 1 ของโลก จากสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชอบดูหนัง หาความสุข
      </p>
    </div>
  );
}


function Avatar(){
  return <img className='avatar' src='acc2.jpg' alt='My Avatar'></img>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

