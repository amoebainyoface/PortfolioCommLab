//const videoCardContainer = document.querySelector('.video-container');

//let api_key = "your api key";
//let video_http = "https://www.googleapis.com/youtube/v3/videos?";
//let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

//fetch(video_http + new URLSearchParams({
//    key: api_key,
//    part: 'snippet',
//    chart: 'mostPopular',
//    maxResults: 50,
//    regionCode: 'IN'
//}))
//.then(res => res.json())
//.then(data => {
//    data.items.forEach(item => {
//        getChannelIcon(item);
//    })
//})
//.catch(err => console.log(err));

//const getChannelIcon = (video_data) => {
//    fetch(channel_http + new URLSearchParams({
//        key: api_key,
//        part: 'snippet',
//        id: video_data.snippet.channelId
//    }))
//    .then(res => res.json())
//    .then(data => {
//        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
//        makeVideoCard(video_data);
//    })
//}

//const makeVideoCard = (data) => {
//    videoCardContainer.innerHTML += `
//    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
//        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
//        <div class="content">
//            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
//            <div class="info">
//                <h4 class="title">${data.snippet.title}</h4>
//                <p class="channel-name">${data.snippet.channelTitle}</p>
//            </div>
//        </div>
//    </div>
//    `;
//}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

console.log("hello");

let imageKettle = document.getElementById("play");

imageKettle.addEventListener('mouseenter', () => {
    imageKettle.style.opacity = 1;
})
imageKettle.addEventListener('mouseleave', () => {
    imageKettle.style.opacity = 0;
})

let imageTea = document.getElementById("play1");

imageTea.addEventListener('mouseenter', () => {
    imageTea.style.opacity = 1;
})
imageTea.addEventListener('mouseleave', () => {
    imageTea.style.opacity = 0;
})

let imageHoney = document.getElementById("play2");

imageHoney.addEventListener('mouseenter', () => {
    imageHoney.style.opacity = 1;
})
imageHoney.addEventListener('mouseleave', () => {
    imageHoney.style.opacity = 0;
})

let imageBeverage = document.getElementById("play3");

imageBeverage.addEventListener('mouseenter', () => {
    imageBeverage.style.opacity = 1;
})
imageBeverage.addEventListener('mouseleave', () => {
    imageBeverage.style.opacity = 0;
})