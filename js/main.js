var user = {
  name: "Totoro",
  image: "img/profile1.png",
  progress: 66
}

var courseArr = [
  {
    title: "Reading in World Literature",
    subject: "Social Studies"
  },
  {
    title: "Theory of Numbers",
    subject: "Mathematics"
  },
  {
    title: "Japanese 201",
    subejct: "Languages"
  }
];

var activityArr = [
  {
    title: "Compeleted Module 7",
    subject: "Submitted for review 06/11/2018 at 10:39PM"
  },
  {
    title: "Commented in Math104 Tueseday Discussion Group",
    subject: "Submitted final text 07/26/2018 at 11.00AM"
  },
  {
    title: "Enrolled in JPN201",
    subejct: "Cohort begins 09/15/2018"
  }
];

var accountArr = [
  {
    title: "Enrolled since: ",
    subject: "01/15/2018"
  },
  {
    title: "Enrolled Starus: ",
    subject: "Active Student"
  },
  {
    title: "Deparment",
    subject: "Computer Science"
  }
];

//insert name from Array
var userName = document.getElementById('user-name')
userName.textContent = user.name


// insert image from array
var image = document.getElementById('pic')
image.src = user.image;

//progressbar
//style progress bar by user's percentage
$('.progress-bar').css('width', user.progress + '%')
//add % text inside progress bar
$('#progress-pct').text(user.progress + '%')

//create onclik function for course/activity/account
var course = document.getElementById('course')

course.onclick = (function() {
  $('.myH2').text('My Activity');
  $('ul li').text(function() {
    couseArr.title
  })
})







//create random user ID ( 4 digits)
var userNum = Math.floor(Math.random() * 10000)
var userId = document.getElementById('userId')
userId.textContent =  "#" + userNum;




//current time
function currentTime() {
  var now = new Date();

  var d = now.getDay()
  var month = now.getMonth()
  var date = now.getDate()
  var year = now.getFullYear()
  var hr = now.getHours()
  var min = now.getMinutes()
  var sec = now.getSeconds()

  month = addOne(month)
  hr = addZero(hr)
  min = addZero(min)
  sec = addZero(sec)
  //change day number to word
  function changeDay() {
      var weekday = new Array(7);
          weekday[0] = "Sun";
          weekday[1] = "Mon";
          weekday[2] = "Tue";
          weekday[3] = "Wed";
          weekday[4] = "Thu";
          weekday[5] = "Fri";
          weekday[6] = "Sat";
        return weekday[d]
    }
  var day = changeDay(d);

  var txt = document.getElementById('clock');
  txt.innerHTML = month + "/" + date + "(" + day + ")," + year + " | " + hr + ":" + min + ":" + sec;

  var t = setTimeout(currentTime, 500)

} currentTime()

//add one
function addOne(j) {
    if(j < 12) {
     j = j + 1;
    return j;
  }
}
//add zero
function addZero(i) {
  if (i < 10) {
    i = "0" + i
  } return i;
}
