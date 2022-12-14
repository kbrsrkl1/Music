
const music = new Audio('vande.mp3');

const songs = [
    {
        id:'1',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/1.jpg",
    },

    {
        id:'2',
        songName:`Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/2.jpg",
    }

    {
        id:'3',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/3.jpg",
    },

    {
        id:'4',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/4.jpg",
    },

    {
        id:'5',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/5.jpg",
    },

    {
        id:'6',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/6.jpg",
    },

    {
        id:'7',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/7.jpg",
    },

    {
        id:'8',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/8.jpg",
    },

    {
        id:'9',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/9.jpg",
    },

    {
        id:'10',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/10.jpg",
    },

    {
        id:'11',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/11.jpg",
    },

    {
        id:'12',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/12.jpg",
    },

    {
        id:'13',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/13.jpg",
    },

    {
        id:'14',
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div> `,
        poster:"img/14.jpg",
    },

    {
        id:'15',
        songName:`Lut Gaye <br><div class="subtitle">Jubin Nautiyal`,
        poster:"img/15.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;  
})

