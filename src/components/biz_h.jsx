import React from 'react';
function pixel() {

    let w = 45;
    let h = 30;
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            let span = document.createElement('span')
            let random = Math.random() * 2
            let randomFixed = random.toFixed(2) 
            if(document.getElementById('pixel')){
                document.getElementById('pixel').appendChild(span)
            }
            span.style.left = j * 10 + 'px'
            span.style.top = i * 10 + 'px'
            span.style.backgroundPosition = -j * 10 + 'px ' + -i * 10 + 'px, center'
            span.style.animationDelay = randomFixed + 's';
        }
    }
}
setTimeout(() => {
    pixel()
}, 1);

const BizH = () => {
    return (
        <div>
            <div className="biz_h">
                <div className="biz_h1">
                    <h2>Biz haqimizda</h2>
                    <p>Abdumalikovich academy — bu zamonaviy kasblar o'qitiladigan onlayn akademiya. Qayerda bo'lishingizdan qat'i nazar: uydami yo mehmonda yo safarda — o'zingizga qulay tarzda va vaqtda bilim olishingiz mumkin, internet va noutbuk bo'lsa bas.</p>
                </div>
                <div className="biz_h2">
                    <div id="pixel"></div>
                </div>
            </div>
        </div>
    );
}

export default BizH;
