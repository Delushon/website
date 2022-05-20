'use strict';

const registrationDiv = document.getElementById("registrationDiv");
const registrationButton = document.getElementById("registrationButton");
const authDiv = document.getElementById("authDiv");
const goToSiteButton = document.getElementById("goToSiteButton");
const authButton = document.getElementById("authButton");
const registrationCompleteDiv = document.getElementById("registrationCompleteDiv");
const mainDiv = document.getElementById("mainDiv");
const collectionView = document.getElementById("collectionView");
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const darkDiv = document.getElementById("darkDiv");

registrationButton.addEventListener('click', function() {
    registrationDiv.style.display = 'none';
    registrationCompleteDiv.style.display = 'block';
});

goToSiteButton.addEventListener('click', function() {
    registrationCompleteDiv.style.display = 'none';
    authDiv.style.display = 'block';
});

authButton.addEventListener('click', function() {
    authDiv.style.display = 'none';
    mainDiv.style.display = 'block';
});

menuButton.addEventListener('click', function() {
    console.log(menu.style.display);
    menu.style.display == "none" ? menu.style.display = "block" : menu.style.display = "none"
});

var jsonData = null

//беру JSON из файлов
fetch('./res/data.json')
    .then(response => response.json())
    .then(data => {
        jsonData = data;
        console.log(jsonData);
        jsonData.persons.forEach(person => {
            addPersonToCollection(person)
        });
    })
    .catch(error => console.log(error));

function addPersonToCollection(person) {
    console.log(person);
    var personDiv = document.createElement("div");
    personDiv.className = "personDiv"
    var avatarNameP = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.src = person.avatar
    avatar.className = "personAvatar"
    avatarNameP.appendChild(avatar)
    var name = document.createElement("label")
    name.innerHTML = person.name
    name.className = "personName"
    avatarNameP.appendChild(name)
    personDiv.appendChild(avatarNameP)
    var phrase = document.createElement("label");
    phrase.innerHTML = person.phrase
    phrase.className = "personPhrase"
    personDiv.appendChild(phrase)
    var timeP = document.createElement("p");
    var time = document.createElement("label");
    time.className = "personTime"
    time.innerHTML = "Опубликовано " + person.timeString
    timeP.appendChild(time)
    personDiv.appendChild(timeP)

    var bottomP = document.createElement("p");

    var like = document.createElement("div");
    like.className = "personLike"
    var likeImg = document.createElement("img");
    likeImg.src = "/res/like.png"
    like.appendChild(likeImg)
    var likeText = document.createElement("label");
    likeText.innerHTML = "Нравится"
    like.appendChild(likeText)


    var comment = document.createElement("div");
    comment.className = "personComment"
    var commentImg = document.createElement("img");
    commentImg.src = "/res/comment.png"
    comment.appendChild(commentImg)
    var commentText = document.createElement("label");
    commentText.innerHTML = "Комментарий"
    comment.appendChild(commentText)



    bottomP.appendChild(like)
    bottomP.appendChild(comment)

    personDiv.appendChild(bottomP)

    collectionView.appendChild(personDiv)
}