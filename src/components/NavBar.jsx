import React, { Children } from 'react';
import logoWebSite from '../images/logo.png';
import '../stylesheets/NavBar.css';
import { FaSearch } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

function NavBar({ handleClickSearch }) {
    const op_location = document.querySelector('.options-location');
    const op_guest = document.querySelector('.options-guests');
    const c_form = document.querySelector('.container-form');
    const _form = document.querySelector('.form');
    const _inputs = document.querySelectorAll('.input');
    const _btn = document.querySelector('.btnsearch');
    const _pSearch = document.querySelector('.title-search');

    const handleClickForm = () => {
        c_form.classList.add('form2');
        _form.classList.add('form3');
        for (let i = 0; i < _inputs.length; i++) {
            _inputs[i].classList.add('input2');
        }
        _btn.classList.add('btn-fasearch');
        _pSearch.classList.remove('p-search');
    }
    const handleSelectionLocation = () => {
        op_guest.classList.add('options');
        op_location.classList.remove('options');
    }
    const handleSelectionGuest = () => {
        op_location.classList.add('options');
        op_guest.classList.remove('options');
    }
    const inp_text = document.querySelector('.input-text');
    const showInInput = (text) => {
        inp_text.value = text;
    }

    // ----------Handle Click btn-search----------
    // const handleSearch = () => {
    //     inp_text.value;
    // }

    return (
        <div className='container-nav'>
            <nav>
                <div className='img-logo'><img src={logoWebSite} /></div>

                <div onClick={() => handleClickForm()} className='container-form'>
                    <form className='form'>
                        <div className='input input-location'>
                            <label>LOCATION</label>
                            <input type='text' onClick={() => handleSelectionLocation()} className='input-text' readOnly value='Helsinki, Finland' />
                            <div className='ops options options-location'>
                                <div className='option'>
                                    <MdLocationOn style={{ fontSize: '20px' }} />
                                    <p onMouseOver={() => showInInput('Helsinki, Finland')}>Helsinki, Finland</p>
                                </div>
                                <div className='option'>
                                    <MdLocationOn style={{ fontSize: '20px' }} />
                                    <p onMouseOver={() => showInInput('Turku, Finland')}>Turku, Finland</p>
                                </div>
                                <div className='option'>
                                    <MdLocationOn style={{ fontSize: '20px' }} />
                                    <p onMouseOver={() => showInInput('Oulu, Finland')}>Oulu, Finland</p>
                                </div>
                                <div className='option'>
                                    <MdLocationOn style={{ fontSize: '20px' }} />
                                    <p onMouseOver={() => showInInput('Vaasa, Finland')}>Vaasa, Finland</p>
                                </div>
                            </div>
                        </div>
                        <div className='input input-guests'>
                            <label>GUESTS</label>
                            <input onClick={() => handleSelectionGuest()} placeholder='Add guests' />
                            <div className='ops options options-guests'>
                                <div className='option'>
                                    <span>Adults</span>
                                    <p>Ages 13 or above</p>
                                    <div className='option-btn'>
                                        <div className='btn less-btn'>-</div>
                                        <div><b>0</b></div>
                                        <div className='btn plus-btn'>+</div>
                                    </div>
                                </div>
                                <div className='option'>
                                    <span>Children</span>
                                    <p>Ages 2-12</p>
                                    <div className='option-btn'>
                                        <div className='btn less-btn'>-</div>
                                        <div><b>0</b></div>
                                        <div className='btn plus-btn'>+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='search-btn'>
                            <div onClick={() => handleClickSearch(inp_text.value)} className='btnsearch'>
                                <FaSearch style={{ color: '#EB5757', fontSize: '22px' }} />
                                <p className='title-search p-search'>Search</p>
                            </div>

                        </div>
                    </form>
                </div>
            </nav>
        </div >
    );
};

export default NavBar;