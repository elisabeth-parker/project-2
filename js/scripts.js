$(document).ready(function() {
  $('#subtitle').hide();
  $('#pagepiling').pagepiling({
	      menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['', 'The Essentials', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        sectionsColor: ['white', '#ffaf62', '#ff9966', '#e17960', '#cd545f', '#ab175e'],

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
  $('#subtitle').fadeIn(2500);
  $('.hide').hide();
  $('.tooltip').tooltipster({
    interactive: 'true',
    side: 'left'
  });

});

// creates title to content transition when user moves to new page
function sectionSetup(x) {
  var title = x.getElementsByClassName("section-title");
  $(title).html("");
  $('.hide').fadeIn(1000);
}

// functionality for essentials content
var current = 0;
var leftButton = $("#lr a").get(0);
var rightButton = $("#lr a").get(1);

leftButton.onclick = function() {previousText()};
rightButton.onclick = function() {nextText()};

function previousText() {
  if(current==0) {
  }
  else {
    current-=1;
    displayText(current);
  }
}

function nextText() {
  console.log('nextText is running');
  console.log(current);
  if(current==2) {
  }
  else {
    current+=1;
    displayText(current);
  }
}

function displayText(x) {
  console.log('displayText is running')
  var text, image;
  switch (x) {
    case 0:
      text = "Ultimate frisbee is a bit like a hybrid between soccer and football. It's played with seven people per team on a grass, turf or sand field. Players throw the disc to one another and score by catching it in the endzone."
      image = "images/intro1.png";
      document.getElementById("left").style.opacity = "0";
      document.getElementById("right").style.opacity = "1";
      break;
    case 1:
      text = "Players typically specialize into roles called handlers and cutters. Handlers are like quarterbacks in football, and cutters are receivers."
      image = "images/intro2.png";
      document.getElementById("left").style.opacity = "1";
      document.getElementById("right").style.opacity = "1";
      break;
    case 2:
      text = "Ultimate is self-officiated, meaning players have to make their own calls. These include fouls (ultimate is non-contact), picks, and travels. Generally, the opposing player can contest the call being made."
      image = "images/intro3.png";
      document.getElementById("right").style.opacity = "0";
      document.getElementById("left").style.opacity = "1";
  }
  // console.log(text);
  $('#intro').text(text);
  $('#intro-image').attr("src",image);
}
