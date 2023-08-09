import React from 'react';
import vidio from '../img/vidio.mp4'
function b_anim() {
    for (let i = 1; i <= 37; i++) {
        if(document.querySelector('.bubbles')){
            let bubbles = document.querySelector('.bubbles')
            let box = document.createElement('span')
            box.style = `--i:${Math.floor(Math.random() * 30) + 4};`
            bubbles.appendChild(box)
        }
    }
}

setTimeout(() => {
    b_anim()
}, 1);
const Vidio = () => {
    return (
        <div>
            <div className="bubbles">

            </div>
            <div class="vidio_b">
                <section>
                    <video src={vidio} autoPlay loop muted></video>
                    <h2>Kelajak shu yerdan<br /><span>boshlanadi.</span></h2>
                    <div className="royxat">
                        <p>Abdumalikovich academiyasi bilan. O'zingizga qulay vaqtda, joyda va uslubda zamonaviy kasblarni o'rganing.</p>
                        <button>Ro'yhatdan otish</button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Vidio;
