$(document).ready(function() {
  $('#subtitle').hide();
  $('#pagepiling').pagepiling({
	      menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['home', 'basics', 'history', 'divs','icons','hype','quiz'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': 'white',
            'bulletsColor': 'white',
            'position': 'right',
            'tooltips': ['Home', 'The Basics', 'The History', 'The Divisions', 'The Icons', 'The Hype', 'The Quiz']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        sectionsColor: ['white', '#ffaf62', '#ff9966', '#e17960', '#cd545f', '#ab175e','#801147'],

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
  $('#subtitle').fadeIn(2500);
  $('.hide').hide();
  $('.vid').tooltipster({
    interactive: 'true',
    side: 'left',
    theme: 'tooltipster-shadow',
    trigger: 'custom',
    triggerOpen: {
      click: 'true'
    },
    triggerClose: {
      click: 'true',
      scroll: 'true',
      mouseleave: 'true'
    },
    selfDestruction: 'true'
  });
  $('.tooltip').tooltipster({
    side: ['bottom','left'],
    interactive: 'true',
    theme: 'tooltipster-shadow',
    trigger: 'click',
    selfDestruction: 'true'
  });
  $('.your-class').slick({
  });
});

// creates title to content transition when user moves to new page
function sectionSetup(x) {
  var title = x.getElementsByClassName("section-title");
  $(title).fadeOut(1000); //hide title and title background
  var content = x.getElementsByClassName("hide");
  $(content).fadeIn(3000); //show primary content
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
      document.getElementById("left").style.cssText="opacity: 0; cursor: default";
      document.getElementById("right").style.opacity = "1";
      break;
    case 1:
      text = "Players typically specialize into roles called handlers and cutters. Handlers are like quarterbacks in football, and cutters are receivers."
      image = "images/intro2.png";
      document.getElementById("left").style.cssText="opacity: 1; cursor: pointer";
      document.getElementById("right").style.cssText="opacity: 1; cursor: pointer";
      break;
    case 2:
      text = "Ultimate is self-officiated, meaning players have to make their own calls. These include fouls (ultimate is non-contact), picks, and travels. Generally, the opposing player can contest the call being made."
      image = "images/intro3.png";
      document.getElementById("right").style.cssText="opacity: 0; cursor: default";
      document.getElementById("left").style.cssText="opacity: 1; cursor: pointer";
  }
  // console.log(text);
  $('#intro').text(text);
  $('#intro-image').attr("src",image);
}

// functionality for divisions content
var divCurrent = 0;
var divLeftButton = $("#div-lr a").get(0);
var divRightButton = $("#div-lr a").get(1);

divLeftButton.onclick = function() {divPreviousText()};
divRightButton.onclick = function() {divNextText()};

function divPreviousText() {
  if(divCurrent==0) {
  }
  else {
    divCurrent-=1;
    divDisplayText(divCurrent);
  }
}

function divNextText() {
  console.log('divNextText is running');
  console.log(divCurrent);
  if(divCurrent==2) {
  }
  else {
    divCurrent+=1;
    divDisplayText(divCurrent);
  }
}

function divDisplayText(x) {
  console.log('divDisplayText is running')
  var text;
  switch (x) {
    case 0:
      text = "There are four primary divisions in ultimate in the US: youth, college, club and professional. At most levels, there are three gender divisions: women's, mixed and men's."
      document.getElementById("audl-active").id = "audl";
      $('#audl').attr("class","");
      document.getElementById("div-left").style.cssText="opacity: 0; cursor: default";
      document.getElementById("div-right").style.cssText="opacity: 1; cursor: pointer";
      break;
    case 1:
      text = "The professional division, currently dominated by the American Ultimate Disc League (AUDL), is the only division in which men and women are not afforded the same playing opportunities. Some small progress has been made; the Nashville NightWatch rostered Jesse Shofner in 2017, making her the first woman to play professional ultimate."
      document.getElementById("audl").id = "audl-active";
      $('#audl-active').attr("class","animated infinite flash");
      document.getElementById("div-left").style.cssText="opacity: 1; cursor: pointer";
      document.getElementById("div-right").style.cssText="opacity: 0; cursor: default";
  }
  // console.log(text);
  $('#divisions').text(text);
}

// functionality for teams content
var teamCurrent = 0;
var teamLeftButton = $("#team-lr a").get(0);
var teamRightButton = $("#team-lr a").get(1);

teamLeftButton.onclick = function() {teamPreviousText()};
teamRightButton.onclick = function() {teamNextText()};

function teamPreviousText() {
  if(teamCurrent==0) {
  }
  else {
    teamCurrent-=1;
    teamDisplayText(teamCurrent);
  }
}

function teamNextText() {
  console.log('teamNextText is running');
  console.log(teamCurrent);
  if(teamCurrent==2) {
  }
  else {
    teamCurrent+=1;
    teamDisplayText(teamCurrent);
  }
}

function teamDisplayText(x) {
  console.log('teamDisplayText is running')
  var text, image;
  switch (x) {
    case 0:
      text = "Although success is transient for many ultimate teams, there are some teams that dominate year after year."
      image = "images/crowns.gif";
      document.getElementById("fury").style.opacity="0";
      document.getElementById("riot").style.opacity="0";
      document.getElementById("mb").style.opacity="0";
      document.getElementById("team-left").style.cssText="opacity: 0; cursor: default";
      document.getElementById("team-right").style.cssText="opacity: 1; cursor: pointer";
      break;
    case 1:
      text = "This is especially true at the club level, where teams are stable enough to build a legacy and attract high-level players. Click on the icons to learn more about some of the elite women's club teams."
      image = "images/crowns.png";
      document.getElementById("fury").style.opacity="1";
      document.getElementById("riot").style.opacity="1";
      document.getElementById("mb").style.opacity="1";
      document.getElementById("team-left").style.cssText="opacity: 1; cursor: pointer";
      document.getElementById("team-right").style.cssText="opacity: 0; cursor: default";
  }
  // console.log(text);
  $('#teams').text(text);
  $('#teams-image').attr("src",image);
}
