makeSlide();

function makeSlide(){



    const centerOverflow = document.querySelector('.center-overflow')
    const slideUlcontainer = centerOverflow.children[0];
    const slideGap = 20;
    const slideWidth = centerOverflow.children[0].children[0].offsetWidth;
    const slideValue = slideGap + slideWidth;

    const pB = document.getElementById('pb');
    const bb = document.getElementById('bb');

    pB.addEventListener('click', prevSlide)
    bb.addEventListener('click', nextSlide)

    let index = 0;

    function prevSlide() {
        index--;
        if (index < 0) {
            index = 0;
        }
        console.log(index);
        slideUlcontainer.style.transform = `translateX(-${index*slideValue}px)`
    }

    function nextSlide() {
        index++;
        if (index > slideUlcontainer.childElementCount - 6) {
            index = 8;
        }
        console.log(index);
        slideUlcontainer.style.transform = `translateX(-${index*slideValue}px)`
    }
}