const music = [
    {songName : "Chết trong em", url: "chettrongem.mp3"},
    {songName : "Thấy chưa", url: "thaychua.mp3"},
    {songName : "Chuyện đôi ta", url: "chuyendoita.mp3"},
    {songName : "Ánh sao và bầu trời", url: "anhsao.mp3"}
  ];
 
 
function list(musics) {
    return `
    <ul>
   <li><a href="#" id="music" onclick="abc()">${musics.songName}</a>
   <audio controls >
    
    <source src="${musics.url}" type="audio/mpeg">
  
  </audio>
   </li>
    </ul>
    `

}
var newMusic = music.map(list);
const list1 = document.getElementById("ha");
list1.innerHTML = newMusic;
console.log(newMusic);




