document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM.');

    var btnPrev = document.querySelector('.btn-prev');
    var btnNext = document.querySelector('.btn-next');

    var mainOffer = 3;
    var changeLeft = document.querySelector('.offer').querySelector('.container').querySelector('.offer__left');
    var changeRight = document.querySelector('.offer').querySelector('.container').querySelector('.offer__right');

    btnPrev.addEventListener('click', function () {
        console.log('work.');

        changeLeft.innerHTML = '<img src="images/black_chair.png" alt="black-chair">';
        changeRight.innerHTML = '' +
            '<h2>1 SIT <span class="color"> ON </span> OUR <span class="color"> CHAIR </span> </h2>\n' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur esse molestiae nam nobis nulla odio officiis reprehenderit voluptas voluptatum.</p>\n' +
            '<div class="btn"><a href="#">ZOBACZ WIECEJ</a></div>';

    });

    btnNext.addEventListener('click', function () {
        console.log('work too.');

        changeLeft.innerHTML = '<img src="images/black_chair.png" alt="black-chair">';
        changeRight.innerHTML = '' +
            '<h2>2 SIT <span class="color"> ON </span> OUR <span class="color"> CHAIR </span> </h2>\n' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur esse molestiae nam nobis nulla odio officiis reprehenderit voluptas voluptatum.</p>\n' +
            '<div class="btn"><a href="#">ZOBACZ WIECEJ</a></div>';

    });



});