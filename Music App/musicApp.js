console.log('Welcome to melomix');

let songIndex=0;
let audioElement=new Audio('/Melomix-music-Straming-web/Songs/Perfect.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gifs= document.getElementsByClassName('GIF');
let songItem=Array.from(document.getElementsByClassName('songItemPlay'));


let currentSongBg=document.getElementById('currentSongBg');
let diskBg=document.getElementById('diskBg');
let  songName=document.querySelectorAll('.song-name');
let singerName=document.querySelectorAll('.author-name');
const diskElement = document.querySelector('.disk');

const currentTime=document.querySelector('.current-time');
const songDuration=document.querySelector('.song-duration');

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//    element.addEventListener('click',()=>{
//     console.log('clicked');
//    })
// })


let songs=[
    {songName:"Perfect", duration:"", singerName:"Perfect",filePath:"/Melomix-music-Straming-web/Songs/1.mp3",coverPath:"/Melomix-music-Straming-web/media/music1.jpeg"},
    {songName:"Calm Down", duration:"", singerName:"Rema",filePath:"/Melomix-music-Straming-web/Songs/2.mp3",coverPath:"/Melomix-music-Straming-web/media/music2.jpeg"},
    {songName:"Until I Found You",duration:"", singerName:"Stephen Sanchez", filePath:"/Melomix-music-Straming-web/Songs/3.mp3",coverPath:"/Melomix-music-Straming-web/media/music3.jpeg"},
    {songName:"A Thousand Years", duration:"", singerName:" Christina Perri", filePath:"/Melomix-music-Straming-web/Songs/4.mp3",coverPath:"/Melomix-music-Straming-web/media/music4.jpeg"},
    {songName:"Butterflies", duration:"", singerName:"MAX & Ali Gatie", filePath:"/Melomix-music-Straming-web/Songs/5.mp3",coverPath:"/Melomix-music-Straming-web/media/music5.jpeg"}
]



//handle play/pause click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();  
      masterPlay.classList.remove('fa-circle-play') ;
      masterPlay.classList.add('fa-circle-pause') ;
      diskElement.style.animationPlayState = 'running';
    for (let i = 0; i < gifs.length; i++) {
        gifs[i].style.opacity = i === songIndex ? 1 : 0;
        gifs[i].style.marginLeft = i === songIndex ? '25px' : '0';
    }
    }else{
        audioElement.pause();  
      masterPlay.classList.remove('fa-circle-pause') ;
      masterPlay.classList.add('fa-circle-play') ;
      diskElement.style.animationPlayState = 'paused';

    for (let i = 0; i < gifs.length; i++) {
        gifs[i].style.opacity = 0;
        gifs[i].style.marginLeft = '0';
    }
    }
})
// listen events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
})


// const setMusic=(i)=>{
//     myProgressBar.value=0;
//     let song=songs[i];
//     currentMusic=i;
//     music.src=song.filePath;

//     currentTime.innerHTML='00:00'
//     myProgressBar.max=music.duration;
//     console.log(music.duration);
// }
// setMusic(0);

// const formatTime=(time)=>{
//     let min=math.floor(time/60);
//     if(min<10){
//         min=`0${min}`;
//     }
//     let sec=math.floor(time%60);
//     if(sec<10){
//         sec=`0${sec}`;
//     }
//     return `${min} : ${sec}`;
// }

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle') 
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){

        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        
        audioElement.src = songs[songIndex].filePath; 
        audioElement.currentTime=0;
        audioElement.play();
        songName.forEach(element=>{
            element.innerHTML=songs[songIndex].songName;
        })
        singerName.forEach(element=>{
            element.innerHTML=songs[songIndex].singerName;
        })
        masterPlay.classList.remove('fa-circle-play') ;
        masterPlay.classList.add('fa-circle-pause') ;
        currentSongBg.style.background = `url('${songs[songIndex].coverPath}') center no-repeat`;
        currentSongBg.style.backgroundSize='cover';
        diskBg.style.background = `url('${songs[songIndex].coverPath}') center no-repeat`;
        diskBg.style.backgroundSize='cover';
    for (let i = 0; i < gifs.length; i++) {
        gifs[i].style.opacity = i === songIndex ? 1 : 0;
        gifs[i].style.marginLeft = i === songIndex ? '25px' : '0';
    }
    }else{
        audioElement.pause();  
        masterPlay.classList.remove('fa-circle-pause') ;
        masterPlay.classList.add('fa-circle-play') ;
    }

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0
    }else{
        songIndex+=1;
    }
    audioElement.src = songs[songIndex].filePath; 
   
    songName.forEach(element=>{
        element.innerHTML=songs[songIndex].songName;
    })
    singerName.forEach(element=>{
        element.innerHTML=songs[songIndex].singerName;
    })
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play') ;
    masterPlay.classList.add('fa-circle-pause') ;
    currentSongBg.style.background = `url('${songs[songIndex].coverPath}') center no-repeat`;
    currentSongBg.style.backgroundSize='cover';
    diskBg.style.background = `url('${songs[songIndex].coverPath}') center no-repeat`;
    diskBg.style.backgroundSize='cover';

    for (let i = 0; i < gifs.length; i++) {
        gifs[i].style.opacity = i === songIndex ? 1 : 0;
        gifs[i].style.marginLeft = i === songIndex ? '25px' : '0';
    }
  
})



document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex-=1;
    }
    audioElement.src = songs[songIndex].filePath; 
  
    songName.forEach(element=>{
        element.innerHTML=songs[songIndex].songName;
    })
    singerName.forEach(element=>{
        element.innerHTML=songs[songIndex].singerName;
    })
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play') ;
    masterPlay.classList.add('fa-circle-pause') ;

    currentSongBg.style.background = `url('${songs[songIndex].coverPath}') center no-repeat`;
    currentSongBg.style.backgroundSize='cover';
    diskBg.style.background = `url('${songs[songIndex].coverPath}') center no-repeat`;
    diskBg.style.backgroundSize='cover';

    for (let i = 0; i < gifs.length; i++) {
        gifs[i].style.opacity = i === songIndex ? 1 : 0;
        gifs[i].style.marginLeft = i === songIndex ? '25px' : '0';
    }
  
})

// window.addEventListener('load', () => {
//     // Simulate a click event on the first song's play button icon
//     const firstSongPlayButton = songItem[0];
//     firstSongPlayButton.click();
//     audioElement.currentTime=0;
//     masterPlay.classList.remove('fa-circle-pause') ;
//     masterPlay.classList.add('fa-circle-play') ;
//     myProgressBar.value = 0;
//     makeAllPlays();
   
// });
