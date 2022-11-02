banner();

function banner(){
    const bannerBox = document.getElementsByClassName('banner-box');
    let index = 0;

    setInterval(nextBanner(), 5000);

    function nextBanner() {
        for(let i = 0 ; i < bannerBox.length ; i ++){
            bannerBox[i].classList.remove('show');
        }
        
        index++;
        if(index===3){
            index = 0 ;
        }
        bannerBox[index].classList.add('show');
    }

}