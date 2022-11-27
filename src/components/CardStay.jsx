import React from 'react';
import '../stylesheets/CardStay.css';
import { AiFillStar } from 'react-icons/ai';

function CardStay({ beds, type, rating, title, superHost, photo }) {
    return (
        <div className='card-stay'>
            <div className='img-stay'>
                <img src={photo}></img>
            </div>


            <div className='type-rating'>
                <div className='button-type'>
                    <button className={superHost ? 'btn-superhost' : 'no-visible'}>SUPER HOST</button>
                    <p className='type'>{type}.{beds} beds</p>
                </div>
                <span className='rating'><AiFillStar style={{ color: '#EB5757', fontSize: '16px' }} />{rating}</span>
            </div>

            <h4 className='title'>{title}</h4>
        </div>
    );
};

export default CardStay;