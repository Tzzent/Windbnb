import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import CardStay from './components/CardStay';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [stays, setStays] = useState([]);
  const [updateStays, setUpdateStays] = useState([]);

  useEffect(() => {
    fetch('api/stays.json')
      .then((res) => res.json())
      .then((data) => { setStays(data); setUpdateStays(data); })
  }, []);


  const handleBtnSearch = (input_text) => {
    const city = input_text.split(',')[0];
    let array = [];
    let num = 0;

    for (let i = 0; i < stays.length; i++) {
      if (stays[i].city == city) {
        array[num] = stays[i];
        num++;
      }
    }
    setUpdateStays(array);
  }



  const normal = () => {
    const op_location = document.querySelector('.options-location');
    const op_guest = document.querySelector('.options-guests');
    const c_form = document.querySelector('.container-form');
    const _form = document.querySelector('.form');
    const _inputs = document.querySelectorAll('.input');
    const _btn = document.querySelector('.btnsearch');
    const _pSearch = document.querySelector('.title-search');

    c_form.classList.remove('form2');
    _form.classList.remove('form3');
    _btn.classList.remove('btn-fasearch');
    _pSearch.classList.add('p-search');

    op_location.classList.add('options');
    op_guest.classList.add('options');
    for (let i = 0; i < _inputs.length; i++) {
      _inputs[i].classList.remove('input2');
    }

  }

  return (
    <div className="App">
      <div className='main'>
        <div className='container'>
          <NavBar handleClickSearch={handleBtnSearch} />
          <div className='container-stays'>
            <div className='title-cant'>
              <h2 className='title'>Stays in Finland</h2>
              <p className='cant-stays'>+{updateStays.length} stays</p>
            </div>
            <div onClick={() => normal()} className='container-grid-stays'>
              {
                updateStays.map(stay => (
                  <CardStay
                    key={uuidv4()}
                    photo={stay.photo}
                    superHost={stay.superHost}
                    type={stay.type}
                    beds={stay.beds}
                    rating={stay.rating}
                    title={stay.title} />
                ))
              }
            </div>
            <div className='credit'>created by Tzzent - devChallenges.io</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
