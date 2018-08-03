document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM.');

    //------------------ /next-prev mainOffer/ ------------------//
    var btnPrev = document.querySelector('.btn-prev');
    var btnNext = document.querySelector('.btn-next');

    var amountOffer = 3;
    // amount all offerts from MainOffer slider
    var currentOffer = 1;
    
    var changeLeft = document.querySelector('.offer').querySelector('.container').querySelector('.offer__left');
    var changeRight = document.querySelector('.offer').querySelector('.container').querySelector('.offer__right');

    btnPrev.addEventListener('click', function () {
        console.log('work.');
        currentOffer--;

        if (currentOffer === 0) {
            currentOffer = amountOffer;
        }

        changeLeft.innerHTML = '<img src="images/black_chair.png" alt="black-chair">';
        changeRight.innerHTML = '' +
            '<h2>'+ currentOffer +' SIT <span class="color"> ON </span> OUR <span class="color"> CHAIR </span> </h2>\n' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur esse molestiae nam nobis nulla odio officiis reprehenderit voluptas voluptatum.</p>\n' +
            '<div class="btn"><a href="#">ZOBACZ WIECEJ</a></div>';

    });

    btnNext.addEventListener('click', function () {
        console.log('work too.');
        currentOffer++;

        if (currentOffer === amountOffer +1) {
            currentOffer = 1;
        }

        changeLeft.innerHTML = '<img src="images/black_chair.png" alt="black-chair">';
        changeRight.innerHTML = '' +
            '<h2>'+ currentOffer +' SIT <span class="color"> ON </span> OUR <span class="color"> CHAIR </span> </h2>\n' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur esse molestiae nam nobis nulla odio officiis reprehenderit voluptas voluptatum.</p>\n' +
            '<div class="btn"><a href="#">ZOBACZ WIECEJ</a></div>';

    });


    //------------------ /interactive sliders/ ------------------//
    var slide = document.querySelectorAll('.slides__present--img');

    for (var i=0; i<slide.length; i++) {

        slide[i].addEventListener('mouseover', function () {
            console.log('najechalem');

            this.children[0].firstElementChild.classList.add('hide-text');
        })

        slide[i].addEventListener('mouseout', function () {
            console.log('zjechalem');

            this.children[0].firstElementChild.classList.remove('hide-text');
        })
    }

});