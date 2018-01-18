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
        document.querySelector('#push-button').onclick = function() {
            document.querySelector('#myNavigator').pushPage('container.html', {data: {title: 'container'}});
        };
    } else if (page.id === 'container') {
        //page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});

document.addEventListener('init', function(event) {
    var page = event.target;
    if (page.id === 'Tab2') {
        ons.createDialog('dialog.html').then(function(dialog) {
            dialog.show();
          });

        page.querySelector('#push-button2').onclick = function() {
            document.querySelector('#myNavigator').pushPage('container.html');
        };
    } else if (page.id === 'Tab1') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});


//part to display the content

var card = {
    "rafting":{
        "imgPath":"img/rafting.jpg",
        "topic":"lerafting",
        "tel":"01 02 03 04 05"
    },
    "parachute":{
        "imgPath":"img/parachute.jpg",
        "topic":"leparachute",
        "tel":"01 02 03 04 05"
    },
    "parkour":{
        "imgPath":"img/parkour.jpg",
        "topic":"leparkour",
        "tel":""
    }
};


/*var element = document.querySelector('.page__content');
for (x in card) {
    element.innerHTML += '<div class="box"><h2 class="title-activity">'+ x +'</h2><img src="'+ card[x].imgPath +'"><div class="contains-btn"></div></div>';
}*/

/*var button_true = document.querySelector('.btn-2');
button_true.addEventListener("click", function () {

});*/

function valider (){
    $('.box').prependTo('.container-selected');
    console.log('true');
}

function delecard (){
    $('.box').first().remove();
    console.log('false');
}


var button_false = document.querySelector('.btn-1');
button_false.addEventListener("click", function () {
    var all_content = document.querySelectorAll("#content");
    element.removeChild(all_content[0]);
});