var app = angular.module('santi', []);

app.controller('DropdownCtrl', function ($scope) {

  console.log('controller is here');



  $scope.setProfession = function(profession) {
    console.log('de functie set prof');
    console.log('profession = ', profession)
  };

  $scope.generateRandomWoman = function(party) {
    console.log('Generating random woman from the ', party);

    if(party == 'SGP') {
      $scope.randomWoman = ' ...helaas, er is geen vrouw!';
    }




  };



  $scope.professionalProjects = [
    {
      "img": "https://stemopeenvrouw.com/wp-content/uploads/2017/01/emailsignature-1.png",
      "name": "Stem op een Vrouw",
      "time": "2017",
      "title": "Co-founder",
      "titleBack": "Stem op een Vrouw",
      "description": "With the upcoming Dutch Elections a group of people decided to try and change something for the better; representation in the parliament. In a very short amount of time we set up a national campaign which got quickly picked up by national media. Also I build the website.",
      "website": "https://www.stemopeenvrouw.com",
      "className": "sov"
    },{
      "img": "https://s29.postimg.org/3t8q29g07/image.png",
      "name": "OneWorld",
      "time": "2016 - 2017",
      "title": "Online Coordinator",
      "titleItalic": "(Freelance)",
      "titleBack": "OneWorld",
      "description": "At OneWorld my responsibilities involve SEO and Adwords strategies, customer journeys and the automation thereof and the development process of a complete new platform.",
      "website": "https://www.oneworld.nl",
      "className": "one-world"
    },
    {
      "img": "https://s28.postimg.org/h9y0e0wvx/bleeve_logo_1_copy.png",
      "name": "Bleeve",
      "time": "2016",
      "title": "Front-ender & Scrum Master",
      "titleBack": "Bleeve",
      "description": "At Bleeve I was part of the development team. As a front-end developer I worked on the main product (mostly AngularJS, but also ES6, Typescript, SASS and Jade). Later on I fulfilled the role of scrummaster, which ment planning sprints, monitoring progress and spending a lot of time in the issues management system Jira.",
      "website": "https://www.bleeve.nl",
      "className": "bleeve"
    },
    {
      "img": "https://s24.postimg.org/pyhhgwhrp/logo_share.png",
      "name": "Oneplanetcrowd",
      "time": "2015 - 2016",
      "title": "Platform supervisor",
      "titleBack": "Oneplanetcrowd",
      "description": "As platform supervisor, I was in charge of the development of the product and functioned as first point of contact for customers and users. This entailed functional design, the roadmap, budget, planning and management of the developers. I was also involved in a large-scale integration project of multiple SAAS fintech solutions.",
      "website": "https://www.oneplanetcrowd.com",
      "className": "oneplanetcrowd"
    },
    {
      "img": "https://s24.postimg.org/lkf5klib9/Ww_P4fg3_X_copy.png",
      "name": "TTC Mobile",
      "time": "2012 - 2014",
      "title": "Functional Analyst",
      "titleBack": "TTC Mobile",
      "description": "Although I started as  the communications intern (why not?) TTC quickly discovered my technical capabilities and soon I was helping out with the development of the platform, troubleshooting new issues and translating requests from program managers in the field (Africa, South America and Asia) to technical requirements for the development team in Uganda. I also assisted in writing various grants and proposals.",
      "website": "http://www.ttcmobile.com",
      "className": "ttc"
    }
      ]

  $scope.personalProjects = [
    {
      "img": "https://s30.postimg.org/ic1krqe75/abc.png",
      "name": "ABC Amsterdam",
      "time": "2016 - 2017",
      "title": "Voluntary teaching",
      "titleBack": "ABC Amsterdam",
      "description": "ABC is a foundation that helps isolated women on their way to self-reliance through individual language classes. I am involved as one of their voluntary teachers and teach English to a Ghanaian mother (25) of two.",
      "website": "https://www.abcamsterdam.org/",
      "className": "abc"
    },{
      "img": "https://s27.postimg.org/iip3xjgoj/oma.jpg",
      "name": "Elisabeth van der Lek",
      "time": "2016 - 2017",
      "title": "Website",
      "titleBack": "Elisabeth van der Lek",
      "description": "I developed a simple Wordpress website for my 92 year old Grandmother. She is a painter and wanted to showcase her work online. She has never seen a website herself though and finds it hard to grasp what it is and how it works. When asked for her favourite colour, for the design, she was surprised that websites were in colour.",
      "website": "https://www.elisabethvanderlek.nl",
      "className": "eli"
    }
  ]


});





//jquery for materialize
$(document).ready(function() {
  $('select').material_select();
});
