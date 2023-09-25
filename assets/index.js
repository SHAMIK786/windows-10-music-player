var body = document.querySelector('body');
var show_title = document.querySelectorAll('.music_title .title');
var show_album = document.querySelectorAll('.album');
var show_artist = document.querySelectorAll('.artist');
var show_coverPic = document.querySelectorAll('.cover_pic img')
var control_btns = document.querySelectorAll('.btn_ctrl');
var btn_pause = document.querySelectorAll('.btn_pause');

function assignDetails(title, album, artist, coverPicSrc) {
    show_title.forEach((element) => { element.innerHTML = title; })
    show_album.forEach((element) => { element.innerHTML = album; })
    show_artist.forEach((element) => { element.innerHTML = artist })
    show_coverPic.forEach((element) => { element.src = coverPicSrc })
}
var shuffled = 0;
function shuffle(array) {
    var btnShuffle = document.querySelectorAll('.btn_random');
    if(shuffled == 1){
            array = music_list.reverse(); 
            btnShuffle.forEach((elem)=>{elem.classList.remove('active');})
            shuffled = 0;
    }else{
        array = music_list.reverse(); 
        btnShuffle.forEach((elem)=>{elem.classList.add('active');})
        shuffled = 1;
    }

    return array;
}

var music_list = [
    {
        "src": "assets/Musics/Crazy.mp3",
        "title": "Beauz and JVNA - Crazy",
        "cover_pic": "assets/Musics/cover_pic/5.jpg",
        "artist": "JVNA",
        "album": "JVNA - fun"
    },
    {
        "src": "assets/Musics/BTS FAKE LOVE.mp3",
        "title": "BTS FAKE LOVE",
        "cover_pic": "assets/Musics/cover_pic/8.jpg",
        "artist": "BTS",
        "album": "BTS- fun"
    },
    {
        "src": "assets/Musics/BTS My Universe.mp3",
        "title": "BTS My Universe",
        "cover_pic": "assets/Musics/cover_pic/6.jpg",
        "artist": "BTS",
        "album": "BTS - fun"
    },
    {
        "src": "assets/Musics/Marshmello_-_Alone.mp3",
        "title": "Marshmello Alone",
        "cover_pic": "assets/Musics/cover_pic/4.jpg",
        "artist": "Marshmello",
        "album": "fun"
    },
    {
        "src": "assets/Musics/On%20my%20Way.mp3",
        "title": "On My Way",
        "cover_pic": "assets/Musics/cover_pic/3.jpg",
        "artist": "Alan Walker",
        "album": "fun"
    },
    {
        "src": "assets/Musics/Cradles.mp3",
        "title": "Cradles",
        "cover_pic": "assets/Musics/cover_pic/2.jpg",
        "artist": "Charlie Puth",
        "album": "fun"
    },
    {
        "src": "assets/Musics/Bazanji%20-%20Fed%20Up.mp3",
        "title": "Bajanji Fed-up",
        "cover_pic": "assets/Musics/cover_pic/1.jpg",
        "artist": "Bajanji",
        "album": "fun"
    },
    {
        "src": "assets/Musics/Bad Boys.mp3",
        "title": "Bad Boys",
        "cover_pic": "assets/Musics/cover_pic/7.jpg",
        "artist": "Unknown",
        "album": "fun"
    },
    {
        "src": "assets/Musics/NEFFEX  Grateful.mp3",
        "title": "NEFFEX - Grateful",
        "cover_pic": "assets/Musics/cover_pic/10.jpg",
        "artist": "NEFFEX",
        "album": "fun"
    },
    {
        "src": "assets/Musics/NEFFEX  Best of Me.mp3",
        "title": "NEFFEX  Best of Me",
        "cover_pic": "assets/Musics/cover_pic/9.jpg",
        "artist": "NEFFEX",
        "album": "fun"
    }
]

show_title.innerHTML = music_list[0].title;
show_coverPic.src = music_list[0].cover_pic;
show_album.innerHTML = music_list[0].album;
show_artist.innerHTML = music_list[0].artist;

var list_child = "";
music_list.forEach(function (element, index) {
    list_child = `<div class="list_child">
    <div class="child_details">
        <div class="detail music_title">${element.title}</div>
        <div class="detail child_icon" style="visibility: hidden;opacity: 0;" onclick="play('${element.src}', ${index})"><i class="fa fa-play-circle"></i></div>
        <div class="detail music_artist">${element.artist}</div>
        <div class="detail music_album">${element.album}</div>
        <div class="detail music_duration">${element.src.duration}</div>
    </div>
    </div>`;
    document.querySelector('.list_itms').innerHTML += list_child;
})

//list play
var currentPlaying = "";
var play_index = 0;
var isPlaying = 0;
var audioDuration;

var audio = new Audio();
function play(audioSrc, index) {
    if (isPlaying === 0) {
        audio.src = audioSrc;
        currentPlaying = audio.src;
        isPlaying = 1;
        play_index = index;
        assignDetails(music_list[index].title, music_list[index].album, music_list[index].artist, music_list[index].cover_pic);
        body.style.backgroundImage = 'linear-gradient(rgba(29, 154, 226, 0.2), rgba(3, 122, 122, 0.4)),url('+ music_list[index].cover_pic+')';
        fullScreen_player.style.backgroundImage =  'url('+ music_list[index].cover_pic+')';
        btn_pause.forEach((elem) => { elem.innerHTML = '<i class="fa fa-pause"></i>'; })
        autoToggleFs();
        return audio.play();
    }
    else {
        pause(audioSrc, index);
        btn_pause.forEach((elem) => { elem.innerHTML = '<i class="fa fa-pause"></i>'; })
    }
}
function pause(audioSrc, index) {
    if (play) {
        audio.src = currentPlaying;
        audio.pause();
        audio.src = audioSrc;
        currentPlaying = audio.src;
        isPlaying = 1;
        play_index = index;
        assignDetails(music_list[index].title, music_list[index].album, music_list[index].artist, music_list[index].cover_pic)
        body.style.backgroundImage = 'linear-gradient(rgba(29, 154, 226, 0.2), rgba(3, 122, 122, 0.4)),url('+ music_list[index].cover_pic+')' ;
        fullScreen_player.style.backgroundImage =  'url('+ music_list[index].cover_pic+')';
        btn_pause.forEach((elem) => { elem.innerHTML = '<i class="fa fa-pause"></i>'; })
        autoToggleFs();
        return audio.play();
    }
}
//music-controllers
control_btns.forEach(function (element) {
    element.onclick = () => {
        //btn_pause
        if (element.classList.contains('btn_pause')) {
            if (isPlaying == 1) {
                audio.pause();
                isPlaying = 0;
                element.innerHTML = '<i class="fa fa-play"></i>';
            }
            else if (currentPlaying == "" && isPlaying == 0) {
                play(music_list[0].src, 0);
                isPlaying = 1;
                element.innerHTML = '<i class="fa fa-pause"></i>';
            }
            else if (currentPlaying !== "" && isPlaying == 0) {
                audio.play();
                isPlaying = 1;
                element.innerHTML = '<i class="fa fa-pause"></i>';
            }
        }
        //btn_prev
        if (element.classList.contains('btn_prev')) {
            if (play_index < music_list.length && play_index > 0) {
                play(music_list[play_index - 1].src, play_index - 1);
                isPlaying = 1;
            }
            else {
                play(music_list[0].src, 0);
                isPlaying = 1;
            }
        }
        //btn_next
        if (element.classList.contains('btn_next')) {
            if (play_index < music_list.length - 1) {
                play(music_list[play_index + 1].src, play_index + 1);
                isPlaying = 1;
            }
            else if (play_index == music_list.length - 1) {
                play(music_list[0].src, 0);
                isPlaying = 1;
                play_index++;
            }
        }
        //btn repeat
        if (element.classList.contains('btn_repeat')) { audio.currentTime = 0; }
        //btn random
        if (element.classList.contains('btn_random')) {shuffle(music_list);}
    }
})

//audio duration setup
var show_duration = document.querySelectorAll('.music_duration .duration');
var show_currentTime = document.querySelectorAll('.music_duration .time_left');

function durationControl() {
    dec_mins = audioDuration / 60;
    int_mins = ~~(dec_mins / 1);
    dec_secs = dec_mins - int_mins;
    int_secs = Math.floor(dec_secs * 60);

    if (int_mins.toString().length == 1) { int_mins = '0' + int_mins; }
    if (int_secs.toString().length == 1) { int_secs = '0' + int_secs; }

    duration = int_mins + ':' + int_secs;
    return duration;
}

var currentTimeInterval = setInterval(() => {
    current_audioTime = audio.currentTime;
    dec_mins = current_audioTime / 60;
    int_mins = ~~(dec_mins / 1);
    dec_secs = dec_mins - int_mins;
    int_secs = Math.floor(dec_secs * 60);

    if (int_mins.toString().length == 1) { int_mins = '0' + int_mins }
    if (int_secs.toString().length == 1) { int_secs = '0' + int_secs }

    time = int_mins + ':' + int_secs;
    show_currentTime.forEach((elem) => { elem.innerHTML = time; })

    if (isPlaying == 1) {
        audioDuration = audio.duration;
        show_duration.forEach((elem) => { elem.innerHTML = durationControl(); })
    }

    time_slideController.forEach((elem) => {

        if (audioDuration == undefined) {
            elem.value = 0;
        } else {
            elem.value = current_audioTime / audioDuration * 100;
        }
    })

    if (audio.currentTime == audioDuration) {
        if (play_index < music_list.length - 1) {
            play(music_list[play_index + 1].src, play_index + 1)
        }
        else {
            play(music_list[0].src, 0)
        }
    }
    return time;
}, 100)

var time_slideController = document.querySelectorAll('.timeSlider');
time_slideController.forEach((elem) => {
    elem.oninput = () => {
        value = elem.value;
        if (isPlaying == 1) {
            audio.currentTime = value / 100 * audioDuration;
        }
        else if (currentPlaying == "" && isPlaying == 0) {
            console.log(0)
        }
        else if (currentPlaying !== "" && isPlaying == 0) {
            audio.currentTime = value / 100 * audioDuration;
        }
    }
})


//volume control
var volumeController = document.querySelectorAll('.volumeController input');

function changeVol(val) {
    value = val;
    volumeLevel = value / 100;
    audio.volume = volumeLevel;
    volumeController[0].value = val;
    volumeController[1].value = val;
    if (value == 0) { document.querySelector('.vol_icon').innerHTML = '<i class="fa fa-volume-off"></i>'; }
    else if (value > 0 && value < 50) { document.querySelector('.vol_icon').innerHTML = '<i class="fa fa-volume-down"></i>'; }
    else { document.querySelector('.vol_icon').innerHTML = '<i class="fa fa-volume-up"></i>'; }
}
volumeController.forEach((elem) => { elem.oninput = () => { changeVol(elem.value); } })

var isToggled = 0;
function toggleOptions() {
    if (isToggled == 0) {
        document.querySelector('.col_volumeControl .options').style.top = '-120px';
        document.querySelector('.col_volumeControl .options').style.visibility = 'visible';
        document.querySelector('.col_volumeControl .options').style.opacity = '1';
        isToggled = 1;
    }
    else {
        document.querySelector('.col_volumeControl .options').style.top = '0'
        document.querySelector('.col_volumeControl .options').style.visibility = 'hidden';
        document.querySelector('.col_volumeControl .options').style.opacity = '0';
        isToggled = 0;
    }
}

var options = document.querySelectorAll('.option_itm');
options.forEach((elem) => {
    elem.onclick = () => {
        console.log(elem.dataset.filter)
        if (elem.dataset.filter == 'fullScreen') { toggelFSMode(); }
        if (elem.dataset.filter == 'mute') {
            if (audio.muted == false) {
                audio.muted = true;
                document.querySelector('.vol_icon').innerHTML = '<i class="fa fa-volume-off"></i>';
            }
            else { audio.muted = false;  }
        }
        if (elem.dataset.filter == 'replay') { audio.currentTime = 0; }
    }
})
var fs_volIcon = document.querySelector('.fs_vol_icon');
voT = 0;
fs_volIcon.onclick = () => {
    if (voT == 0) {
        document.querySelector('.fs_vol_range').style.visibility = 'visible';
        document.querySelector('.fs_vol_range').style.left = '20%';
        document.querySelector('.fs_vol_range').style.bottom = '15%';
        voT = 1;
    }
    else {
        document.querySelector('.fs_vol_range').style.visibility = 'hidden';
        document.querySelector('.fs_vol_range').style.left = '20%';
        document.querySelector('.fs_vol_range').style.bottom = '-20%';
        voT = 0;
    }
}
var fsToggled = 0;
var fullScreen_player = document.querySelector('.fullScreen_player');
function autoToggleFs(){
    if (fsToggled == 0) {
        fullScreen_player.style.width = '100%';
        fullScreen_player.style.visibility = 'visible';
        fullScreen_player.style.opacity = '1'
        fsToggled = 1;
    }
    else {
        fullScreen_player.style.width = '100%';
        fullScreen_player.style.visibility = 'visible';
        fullScreen_player.style.opacity = '1'
        fsToggled = 1;
    }
}
function toggelFSMode() {
    if (fsToggled == 0) {
        fullScreen_player.style.width = '100%';
        fullScreen_player.style.visibility = 'visible';
        fullScreen_player.style.opacity = '1'
        fsToggled = 1;
    }
    else {
        fullScreen_player.style.width = '0';
        fullScreen_player.style.visibility = 'hidden';
        fullScreen_player.style.opacity = '0'
        fsToggled = 0;
    }
}

var tab_btns = document.querySelectorAll('.btn_tab')
var tab_defaultList = document.querySelector('.tab_default_list');
var tab_artists = document.querySelector('.tab_artists');
var tab_albums = document.querySelector('.tab_albums');
tab_btns.forEach((element) => {
    element.onclick = () => {
        if (element.dataset.filter == "*") {
            tab_defaultList.style.width = '100%'
            tab_albums.style.width = '0'
            tab_artists.style.width = '0'
            console.log(element.dataset.filter)
        }
        else if (element.dataset.filter == "Artists") {
            tab_defaultList.style.width = '0'
            tab_albums.style.width = '0'
            tab_artists.style.width = '100%'
            console.log(element.dataset.filter)
        }
        else if (element.dataset.filter == "Albums") {
            tab_defaultList.style.width = '0'
            tab_albums.style.width = '100%'
            tab_artists.style.width = '0'
            console.log(element.dataset.filter)
        }
    }
})

//Notification 
var notification = document.querySelector('.notificationBox');
noti_shown = 1;
setInterval(()=>{
    if(noti_shown === 1){
        notification.style.top = '-100px';
        notification.style.visibility = 'hidden';
        notification.style.opacity = '0'
        noti_shown = 0;
    }else{
        notification.style.top = '10px';
        notification.style.visibility = 'visible';
        notification.style.opacity = '1'
        noti_shown = 1;
    }
}, 5000)