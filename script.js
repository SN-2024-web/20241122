console.log("hello")

//TOPボタン実装-----------------------------------------------------------

const goTopButton = document.querySelector('.gotop');

goTopButton.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('#header').scrollIntoView({
        behavior: 'smooth'
    });
});

// スクロールイベント監視
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { 
        goTopButton.style.opacity = '1'; // 表示
        goTopButton.style.pointerEvents = 'auto'; // クリック可能
    } else {
        goTopButton.style.opacity = '0'; // 非表示
        goTopButton.style.pointerEvents = 'none'; // クリック不可
    }
});

//READ MOREボタン実装---------------------------------------------------------

const READMORE = document.querySelector(".readmore")
const HIDDEN = document.querySelector(".active")

READMORE.addEventListener("click", (e)=>{
    HIDDEN.classList.toggle("reactive");
})

console.log(HIDDEN)

//「undefined」ポップアップ実装---------------------------------------------------------

const UNDEFINED = document.querySelectorAll(".undefined")

UNDEFINED.forEach(element => {
    element.addEventListener("click", ()=> {
        alert("こちらは現在未実装になります。")
    })
})

//ハンバーガーメニュー--------------------------------------

$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
  });
  