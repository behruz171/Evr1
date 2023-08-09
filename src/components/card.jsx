import React from 'react';
import img1 from '../img/img1.png'
// import Title from 'react-vanilla-tilt'

const Card = () => {
  return (
      <div className="card">
        <div className="kurs">
          <h2>Kurslarimiz</h2>
        </div>
        <div className="cardlar">
          <div className="box">
            <img src={img1} alt="" />
            <div className="card_tittle">
              <h2>Front-end</h2>
              <p>850 000 sum</p>
            </div>
            <p className="lorem">Biz – Abdumalikovich akademiyasimiz! Akademiyamizda tajribali IT sohasida yuqori marralarni qo'lga kiriting!</p>
            <div className="malumot">
              <p>7-oy</p>
              <p>40-ta dars</p>
            </div>
          </div>
          <div className="box">
            <img src={img1} alt="" />
            <div className="card_tittle">
              <h2>Front-end</h2>
              <p>850 000 sum</p>
            </div>
            <p className="lorem">Biz – Abdumalikovich akademiyasimiz! Akademiyamizda tajribali IT sohasida yuqori marralarni qo'lga kiriting!</p>
            <div className="malumot">
              <p>7-oy</p>
              <p>40-ta dars</p>
            </div>
          </div>
          <div className="box">
            <img src={img1} alt="" />
            <div className="card_tittle">
              <h2>Front-end</h2>
              <p>850 000 sum</p>
            </div>
            <p className="lorem">Biz – Abdumalikovich akademiyasimiz! Akademiyamizda tajribali IT sohasida yuqori marralarni qo'lga kiriting!</p>
            <div className="malumot">
              <p>7-oy</p>
              <p>40-ta dars</p>
            </div>
          </div>
        </div>
        <div className="cardlar1">
          <div className="box">
            <img src={img1} alt="" />
            <div className="card_tittle">
              <h2>Front-end</h2>
              <p>850 000 sum</p>
            </div>
            <p className="lorem">Biz – Abdumalikovich akademiyasimiz! Akademiyamizda tajribali IT sohasida yuqori marralarni qo'lga kiriting!</p>
            <div className="malumot">
              <p>7-oy</p>
              <p>40-ta dars</p>
            </div>
          </div>
          <div className="box">
            <img src={img1} alt="" />
            <div className="card_tittle">
              <h2>Front-end</h2>
              <p>850 000 sum</p>
            </div>
            <p className="lorem">Biz – Abdumalikovich akademiyasimiz! Akademiyamizda tajribali IT sohasida yuqori marralarni qo'lga kiriting!</p>
            <div className="malumot">
              <p>7-oy</p>
              <p>40-ta dars</p>
            </div>
          </div>
          <div className="box">
            <img src={img1} alt="" />
            <div className="card_tittle">
              <h2>Front-end</h2>
              <p>850 000 sum</p>
            </div>
            <p className="lorem">Biz – Abdumalikovich akademiyasimiz! Akademiyamizda tajribali IT sohasida yuqori marralarni qo'lga kiriting!</p>
            <div className="malumot">
              <p>7-oy</p>
              <p>40-ta dars</p>
            </div>
          </div>
        </div>
        <button className="card_btn">Ko'proq ko'rish</button>
      </div>
  );
}

export default Card;
