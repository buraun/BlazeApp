// Swiping
    document.addEventListener('swipeleft', function(event) {
        if (event.target.matches('#detect-area')) {
            console.log('Swipe left is detected.');
        }
    });

    document.addEventListener('swiperight', function(event) {
        if (event.target.matches('#detect-area')) {
            console.log('Swipe right is detected.');
        }
    });

    //choose random images for the home
    var body = document.querySelector('body');
    var path = '/';
    var nameimg =['test1.jpg','test2.png','test3.jpg','test4.jpg','test5.jpg'];

    function displayImage() {
        var num = Math.floor(Math.random() * (nameimg.length));
        console.log(nameimg[num]);
        body.style.background = "url(" + nameimg[num] + ")";
    }
    displayImage();

//change pages home to swap
document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'home') {
        page.querySelector('#push-button').onclick = function() {
            document.querySelector('#myNavigator').pushPage('container.html', {data: {title: 'container'}});
        };
    } else if (page.id === 'container') {
        //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});
