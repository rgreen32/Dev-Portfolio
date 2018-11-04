const videos = ['Assets/Esquina_Democratica.mp4', 'Assets/11972126-preview.mp4', 'Assets/Esquina_Democratica.mp4', 'Assets/11972126-preview.mp4', 'Assets/free____MVI_0197.mp4'];

document.getElementById('backgroundVideo').setAttribute('src', videos[0]);

let playVideo = function (videoNum) {
    document.getElementById('backgroundVideo').setAttribute('src',videos[videoNum]);
    document.getElementById('backgroundVideo').onloadedmetadata;
    document.getElementById('backgroundVideo').play();
};

let num = 0;

document.getElementById('backgroundVideo').addEventListener('ended', function () {
    console.log('Video Over');
    if (num === videos.length - 1) {
        num = 0;
        playVideo(num)
    } else {
        num = num + 1;
        playVideo(num)
    }
});