let chars =[
{
        "name": "Select the character",
        "img" : "https://i.pinimg.com/originals/ab/b8/d1/abb8d166d497a191faeb8d31a02b8098.png"
},    
{
    "name": "Diluc",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Diluc.png"
},
{
    "name": "Amber",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Amber.png"
},
{
    "name": "Barbara",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Barbara.png"
},
{
    "name": "Beidou",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Beidou.png"
},
{
    "name": "Bennet",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Bennett.png"
},
{
    "name": "Chongyun",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Chongyun.png"
},
{
    "name": "Diona",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Diona.png"
},
{
    "name": "Fischl",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Fischl.png"
},
{
    "name": "Jean",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Jean.png"
},
{
    "name": "Kaeya",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Kaeya.png"
},
{
    "name": "Keqing",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Keqing.png"
},
{
    "name": "Klee",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Klee.png"
},
{
    "name": "Lisa",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Lisa.png"
},
{
    "name": "Mona",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Mona.png"
},
{
    "name": "Ninguangg",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Ningguang.png"
},
{
    "name": "Noelle",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Noelle.png"
},
{
    "name": "Qiqi",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Qiqi.png"
},
{
    "name": "Razor",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Razor.png"
},
{
    "name": "Sucrose",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Sucrose.png"
},
{
    "name": "Atraveler",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Traveler%20(Anemo).png"
},
{
    "name": "Gtraveler",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Traveler%20(Geo).png"
},
{
    "name": "Venti",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Venti.png"
},
{
    "name": "Xiangling",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Xiangling.png"
},
{
    "name": "Xiao",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Xiao.png"
},
{
    "name": "Xingqiu",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Xingqiu.png"
},
{
    "name": "Xinyan",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Xinyan.png"
},
{
    "name": "Zhongli",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Zhongli.png"
},
{
    "name": "Albedo",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Albedo.png"
},
{
    "name": "Ganyu",
    "img" : "https://rerollcdn.com/GENSHIN/Characters/Ganyu.png"
},
]
     
let maindps;
let supdps;
let sup1;
let sup2;

const form = document.querySelectorAll('.form-select');
const resbtn = document.querySelector('.res-btn')
const result = document.querySelector('.result-table')


// events
form.forEach(item => {item.addEventListener('click', function(e){
    if(e.target.value && item.classList.contains('s_maindps')){
        maindps = e.target.value;
        console.log(maindps);
        const temp = document.querySelector('.is1');
        const link = get_img(maindps);
        
        temp.innerHTML= `<img src="${link}" 
        class="rounded mx-auto d-block img-fluid" alt="defaultSelect"></img>`; 
    }
    if(e.target.value && item.classList.contains('s_supdps')){
        supdps = e.target.value;
        console.log(supdps);
        const temp = document.querySelector('.is2');
        const link = get_img(supdps);
        
        temp.innerHTML= `<img src="${link}" 
        class="rounded mx-auto d-block img-fluid" alt="defaultSelect"></img>`; 
    }
    if(e.target.value && item.classList.contains('s_sup1')){
        sup1 = e.target.value;
        console.log(sup1);
        const temp = document.querySelector('.is3');
        const link = get_img(sup1);
        
        temp.innerHTML= `<img src="${link}" 
        class="rounded mx-auto d-block img-fluid" alt="defaultSelect"></img>`; 
    }
    if(e.target.value && item.classList.contains('s_sup2')){
        sup2 = e.target.value;
        console.log(sup2);
        const temp = document.querySelector('.is4');
        const link = get_img(sup2);
        
        temp.innerHTML= `<img src="${link}" 
        class="rounded mx-auto d-block img-fluid" alt="defaultSelect"></img>`; 
    }
})});

resbtn.addEventListener('click', get_results);

//functions

function get_results(){
    console.log("gerando resultados");

    if(maindps && supdps && sup1 && sup2){
        result.textContent= `seu time é : ${maindps}, ${supdps}, ${sup1}, ${sup2}`;
    } else{
        result.textContent= `complete seu time primeiro`;
    }
}

function get_img(maindps){

    if(maindps){
    let char = chars.find(char => char.name === maindps);
    return char.img;
    };

}

// end of functions

