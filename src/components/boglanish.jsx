import React from 'react';

const Boglanish = () => {
    return (
        <div className="boglanish">
            <h2>Biz bilan bog'lanish</h2>
            <div className="b_tittle">
                <div className="b_tittle2">
                    <h2>Biz bilan yuqori marralarga erishing!</h2>
                    <p>Batafsil ma'lumot olish uchun ismingiz va raqamingizni qoldiring!</p>
                </div>
                <div className="b_input">
                    <input type="text" placeholder="Ism" />
                    <input type="number" placeholder="+998 (99)___ __ __" />
                    <button>Yuborish</button>
                </div>
            </div>
        </div>
    );
}

export default Boglanish;
