const blocks = document.querySelectorAll('.block');
const blockDiv = document.querySelector('.blocks')


blocks.forEach(item=>{
    item.addEventListener('click', moveUp)

});





function moveUp() {
    var tl = new TimelineMax({  yoyo: true,});

    tl.to(".block", 1, { y: 120 });
    tl.to(".block--gray", 1, { y: -480 });
    tl.set(".block--gray", { zIndex: 5 });
   
}