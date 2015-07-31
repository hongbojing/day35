angular.module('myApp',[])
.controller('ResumeController',function($scope){
  $scope.resumeData={
    name:'Hongbo Jing',
    phoneNumber:'352-281-8254',
    email:'hongbojing@ufl.edu',
    objective:'Web Developer',
    address:'4455 SW 34th St, APT# UU249, Gainesville, Florida, 32608',
    onlineResume:'http://angularfox.com/hongbojing/index.php',
    experience:[
      {
        title:'Web Developer',
        period:'April 2015-May 2015',
        detail:'I design and develop this website to show my ability of web development, including PHP & MySQL & jQuery. You could log in and try the applications on the site.',
        department:'http://angularfox.com/'
      },
      {
        title:'OPS Web Developer',
        period:'Sep 2014-Present',
        detail:'Work 20h per week for Warrington College of Business Administration Communication Services, responsible for <1> Building faculty websites in Warrington Website System. <2> Developing Calendar-events section in Warrington sites with the function of filtering and sorting JSON data. <3> Testing JavaScript code for Warrington Touch Screen in Hough Hall, Stuzin Hall, and Heavener Hall.',
        department:'Warrington College of Business Administration '
      },
      {
        title:'Front-end Developer',
        period:'June 2014-Feb 2015',
        detail:'Responsible for designing and developing <1> Whole front-end UI section for “Email-Manager” software in ZEND-MVC framework, with which OCOOS uses for interacting with their Email-Database. <2> Responsive landing pages for specific business topics. <3> HTML e-mail for advertisement purpose.',
        department:'OCOOS company in Ocala, Florida. '
      },
      {
        title:'Front-end Developer',
        period:'June 2014-Present',
        detail:'Responsible for designing and developing the CSA official website using Word Press, Bootstrap and PHP on GoDaddy. Website: http://uflchina.org/',
        department:'CSA (Chinese Students Association) at UF '
      }
    ],
    education:[
      {
        university:'University of Florida-Hough Graduate School of Business ',
        period:'Aug 2013-May 2015',
        major:'Master of Information System and Operation Management'
      }
    ],
    skill:[
      {
        field:'Front-end',
        content:'HTML, CSS, Sass, JavaScript, Graphic Design, JSON, XML'
      },
      {
        field:'Front-end-framework-or-library',
        content:'jQuery, Angular.js, Raphael.js, Bootstrap'
      },
      {
        field:'Back-end-basic',
        content:'PHP, C#, Java, SQL'
      },
      {
        field:'Software',
        content:'Brackets, Sublime, Note Pad++, Text Wrangler, Dreamweaver, Chrome console, Net-Beans, Eclipse, Photo Shop, Office Suites including VISIO, i-Terminal, XAMP, WAMP, MAMP, File-Zilla, Trello'
      },
      {
        field:'Application Framework',
        content:'ZEND(MVC)'
      },
      {
        field:'Version Control',
        content:'GIT'
      }
    ]
  };
})
;
