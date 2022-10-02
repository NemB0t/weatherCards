import './style.css';

const cardContainer = document.querySelector('.content');
const cardTemplate = document.querySelector('#weatherCardTemplate');
const addCardBtn = document.querySelector('.addCardBtn');
const search = document.querySelector('.search');

//keys for local storage
const LOCAL_STORAGE_LIST_KEY = "card.list"

let cardList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

function createWeatherObject(loc){
    return {
    loc: loc,
    tempType: "°C"}
}

// function createWeatherObject(icon,loc,main,tempc,tempf){
//     return {icon: icon,
//     loc: loc,
//     main: main,
//     tempc: tempc,
//     tempf: tempf,
//     tempType: "°C"}
// }

search.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const wdata = getWeather(search.value)
        wdata.then((response)=>{
            // const wobj = createWeatherObject(response.icon,response.loc,response.main,response.tempc,response.tempf);
            const wobj = createWeatherObject(response.loc)
            cardList.push(wobj);
            saveAndRender(cardList);
            // render(cardList);
            console.log(search.value);
            search.value="";
            closeTheForm();
        })
    }
});

function save(cardList){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(cardList));
}

function saveAndRender(cardList){
    save(cardList);
    render(cardList);
}

function render(cardList){
    console.log(cardList)
    let count = 0;
    clearElements(cardContainer);
    cardList.forEach(card => {
        const wdata = getWeather(card.loc);
        wdata.then((res)=>{
            const template = document.importNode(cardTemplate.content,true)
            const icon =template.querySelector('.weatherIcon');
            const locationName = template.querySelector('.locationName');
            const climate = template.querySelector('.climate');
            const temp = template.querySelector('.temp');
            const deleteBtn = template.querySelector('.deleteBtn');
            // const search = template.querySelector('.search');
            const tempBtn = document.createElement('input');
            
            tempBtn.type="button";
            tempBtn.value="°F";
            tempBtn.classList.add('temptype');

            icon.src = res.icon;
            locationName.textContent = res.loc;
            climate.textContent = res.main;
            tempAssign(card,res,temp,tempBtn);

            // locationName.style.opacity="1";
            cardContainer.prepend(template)
            count+=1;
            // console.log(cardList.length+1,count);
            if(cardList.length == count && count<4){//its here so that the plus appears after the async stuff is done
                // console.log(count);
                const addCardBtn = document.createElement('button');
                addCardBtn.classList.add('addCardBtn');
                addCardBtn.textContent = "+";
                addCardBtn.addEventListener('click',()=>{
                    // console.log('here')
                    openTheForm();
                })
                cardContainer.append(addCardBtn);
            }
            deleteBtn.addEventListener('click',()=>{
                cardList= cardList.filter(cardT => cardT.loc!==card.loc);
                saveAndRender(cardList);
                // saveAndRender(cardList);
            })
        })
    });
    // console.log(count);
    if(cardList.length==0){
        // console.log(count);
        const addCardBtn = document.createElement('button');
        addCardBtn.classList.add('addCardBtn');
        addCardBtn.textContent = "+";
        addCardBtn.addEventListener('click',()=>{
            // console.log('here')
            openTheForm();
        })
        cardContainer.append(addCardBtn);
    }
    // console.log(cardList.length)
}

render(cardList);

function tempAssign(card,res,temp,tempBtn){
    if(card.tempType=="°F"){
        temp.textContent=res.tempf+" °F";
        tempBtn.value= "°C"
    }
    else{
        temp.textContent = res.tempc+" °C";
        tempBtn.value= "°F"
    }
    temp.append(tempBtn);
}

function clearElements(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

async function getWeather(location){
    try{
        const wpromise = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=71385b680d4404874d2a19193f0f5800',{mode: 'cors'});
        if (wpromise.status===400){
            console.log('connection error');
        }
        else{
            const wdata = await wpromise.json();
            const weatherName = wdata.weather[0].main;
            const iconName = 'https://openweathermap.org/img/wn/'+wdata.weather[0].icon+'@2x.png';
            const tempk = wdata.main.temp;
            const tempc = Math.round(tempk-273.15);
            const tempf = Math.round((tempc*(9/5))+32);
            const loc = wdata.name;
            // console.log(wdata.name);
            return {loc : loc,main: weatherName,icon : iconName,tempc:tempc,tempf:tempf}
        }
    }
    catch(error){
        // console.log(error);
    }
    
}


function openTheForm() {
    document.querySelector('.locationMenu').style.display = "flex";
    blurBg();
}
  
function closeTheForm() {
    document.querySelector('.locationMenu').style.display = "none";
    unBlurBg();
}

function blurBg(){
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');
    const footer = document.querySelector('.footer');
    header.classList.add('blur');
    content.classList.add('blur');
    footer.classList.add('blur');
}
function unBlurBg(){
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');
    const footer = document.querySelector('.footer');
    header.classList.remove('blur');
    content.classList.remove('blur');
    footer.classList.remove('blur');
}

//References
//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=71385b680d4404874d2a19193f0f5800 - weather data
//https://openweathermap.org/img/wn/03d@2x.png - icon
// https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
// https://openweathermap.org/weather-conditions
