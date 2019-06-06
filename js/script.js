// console.log("js is loading");

var showList = [
    {
    id: 1,
    bandname: 'Nearvana',
    photo: 'nearvana.jpg',
    genre: ['rock', 'punk', 'alternative'],
    venue: 'San Fran',
    price: '$35',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 2,
    bandname: 'Proxy Music',
    photo: 'proxyMusic.jpg',
    genre: ['rock', 'glam'],
    venue: 'Pyramid Club',
    price: '$40',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 3,
    bandname: 'Lez Zeppelin',
    photo: 'lezZeppelin.jpg',
    genre: ['hard rock', 'rock'],
    venue: 'Valhalla',
    price: '$42',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 4,
    bandname: 'Oasish',
    photo: 'oasish.jpg',
    genre: ['rock'],
    venue: 'TSB Arena',
    price: '$110',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 5,
    bandname: 'Bjorn Again',
    photo: 'bjornAgain.jpg',
    genre: ['pop'],
    venue: 'Michael Fowler Centre',
    price: '$120',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 6,
    bandname: 'Motorheadache',
    photo: 'motorheadache.jpg',
    genre: ['hard rock', 'metal', 'rock'],
    venue: 'Valhalla',
    price: '$45',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 7,
    bandname: 'The Jimi Hendrix Experience Experience',
    photo: 'jimiHendrix.jpg',
    genre: ['rock', 'hard rock'],
    venue: 'Michael Fowler Centre',
    price: '$100',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 8,
    bandname: 'Faux Fighters',
    photo: 'fauxFighters.jpg',
    genre: ['rock', 'punk', 'alternative'],
    venue: 'Valhalla',
    price: '$55',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 9,
    bandname: 'Chicks with Dixies',
    photo: 'chicksDixies.jpg',
    genre: ['pop', 'alternative'],
    venue: 'San Fran',
    price: '$25',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 10,
    bandname: 'Ringo Deathstarr',
    photo: 'ringoDeathStarr.jpg',
    genre: ['rock', 'alternative'],
    venue: 'Pyramid Club',
    price: '$45',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 11,
    bandname: 'Harmonica Lewinski',
    photo: 'harmonicaLewinski.jpg',
    genre: ['pop', 'alternative'],
    venue: 'Moon',
    price: '$30',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
    id: 12,
    bandname: 'The Gaza Strippers',
    photo: 'gazaStripppers.jpg',
    genre: ['rock', 'punk', 'alternative'],
    venue: 'San Fran',
    price: '$30',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

var venueList = [];
var genreList = [];
var gigList = [];

$( ".venueClass" ).click(function() {
   for (var i = 0; i < showList.length; i++) {
     if(showList[i].venue === 'Michael Fowler Centre'){
       gigList += showList[i].bandname;
       console.log("MFC is hosting " + gigList);

     }

     // console.log(showList[i].venue);
   }

});
function modalFunction() {
  document.getElementById('mymodal').style.display = 'block';

  // ADD SELECTED CARDS HERE
  for (var i = 0; i < showList.length; i++) {

     if(showList[i].venue === 'Michael Fowler Centre'){
        $('#cardContainer').html += '<div class="card" style="width: 18rem;">';
        $('#cardContainer').html +=' <img class="card-img-top" src="images/' + showList[i].photo + '" alt="Card image cap">';
        $('#cardContainer').html += '<div class="card-body">';
        $('#cardContainer').html += '<h5 class="card-title">' + showList[i].bandname + '</h5>';
        $('#cardContainer').html += '<p class="card-text">' + showList[i].genre + '</p></div> </div>';
        }
      }

}

function closeFunction(){
  $('#mymodal').style.display="none";
}
// function showMoreShow(showNumber){
//   var singleShow;
//     for (var i = 0; i < showList.length; i++) {
//         if (showList[i].id === showNumber) {
//             singleShow = showList[i];
//             break;
//         }
//     }
//
//         $('#photoImage').src = 'images/'+singleShow.photo;
//         $('#bandName').text = singleShow.bandname;
//         $('#showVenue').text = singleShow.venue;
//         $('#bandBio').text = singleShow.bio;
//         $('#ticketPrice').text = singleShow.price;
//         $('#bandGenre').html = "";
//
//
//         var badgeClass = '';
//           for (var i = 0; i < singleShow.genre.length; i++) {
//               var genreColour = getGenreColour(singleShow.genre[i]);
//               if(singleShow.genre[i] === 'Rock'){
//                 badgeClass = 'badge-primary';
//             } else if(singleShow.genre[i] === 'Hard rock'){
//                 badgeClass = 'badge-success';
//             } else if(singleShow.genre[i] === 'Pop'){
//                 badgeClass = 'badge-danger';
//             } else if(singleShow.genre[i] === 'Alternative'){
//                 badgeClass = 'badge-secondary';
//             } else if(singleShow.genre[i] === 'Punk'){
//                 badgeClass = 'badge-warning';
//             } else if(singleShow.genre[i] === 'Metal'){
//                 badgeClass = 'badge-info';
//             } else if (singleShow.genre[i] === 'Glam'){
//                 badgeClass = 'badge-dark';
//             }
//                 $('#bandGenre').html += '<span class= "badge badge-'+genreColour+' mr-1">' + singleShow.genre[i] + '</span>';
//             };
//
//         $('#showPopUp').style.display = 'flex';
//         document.body.style.overflow = 'hidden';
// }
