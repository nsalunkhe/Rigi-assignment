function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === '' || menu.style.display === '') ? 'block' : '';
}

// First card container code begins

const cardsData = [
    {
        imageSrc: 'images/p4.png',
        title: 'The 1% course',
        desc: "Now,I'm on a mission to help you get to the RICHEST 1% -one educational finance content at a time"
    },
    {
        imageSrc: 'images/p4.png',
        title: 'The 1% course',
        desc: "Now,I'm on a mission to help you get to the RICHEST 1% -one educational finance content at a time"
    },
    {
        imageSrc: 'images/p4.png',
        title: 'The 1% course',
        desc:"Now,I'm on a mission to help you get to the RICHEST 1% -one educational finance content at a time"
    }
];

const cardsContainer = document.getElementById('cardsContainer');

function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = cardData.imageSrc;
    card.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = cardData.title;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = cardData.desc;
    card.appendChild(desc);

    const button=document.createElement('button');
    button.innerHTML="Buy the course @ &#8377 3,999"
    button.classList.add("btn")
    card.appendChild(button);

    return card;
}

function renderCards() {
    for (const cardData of cardsData) {
        const card = createCard(cardData);
        cardsContainer.appendChild(card);
    }
}

renderCards();

// first cardcontainer code ends

// second cardsContainer code begins


const cardsData2 = [
    {
        imageSrc: 'images/phone.png',
        title: 'SCO vs HEA Dream11 Team',
        reason:"Prediction | Dream11",
        time:"15",
        slots:"12",
        price:"99"
    },{
        imageSrc: 'images/gmeet.png',
        title: 'SCO vs HEA Dream11 Team',
        reason:"Prediction | Dream11",
        time:"15",
        slots:"12",
        price:"99"
    },{
        imageSrc: 'images/phone.png',
        title: 'SCO vs HEA Dream11 Team',
        reason:"Prediction | Dream11",
        time:"15",
        slots:"12",
        price:"99"
    },
    
];


const cardsContainer2 = document.getElementById('cardsContainer2');

function createCard2(cardData2) {
    const card2 = document.createElement('div');
    card2.classList.add('card2');

    const image2 = document.createElement('img');
    image2.src = cardData2.imageSrc;
    card2.appendChild(image2);

    const title2 = document.createElement('h3');
    title2.textContent = cardData2.title
    card2.appendChild(title2);

    const reason = document.createElement('h3');
    reason.textContent = cardData2.reason;
    card2.appendChild(reason);

    const section=document.createElement('div')
    section.classList.add('sec11')

    const slots=document.createElement('p')
    slots.classList.add('slots')
    slots.textContent=`${cardData2.slots} Slots left`;
    section.appendChild(slots)

    const time=document.createElement('p')
    time.classList.add('time')
    time.textContent=`${cardData2.time} min`;
    section.appendChild(time)

    const price=document.createElement('p')
    price.classList.add('price')
    price.textContent=`₹${cardData2.price}/slot`;
    section.appendChild(price)

    card2.appendChild(section)


    const button2=document.createElement('button');
    button2.innerHTML="View Details"
    button2.classList.add("btn2")
    card2.appendChild(button2);

    return card2;

}

function renderCards2() {
    for (const cardData2 of cardsData2) {
        const card2 = createCard2(cardData2);
        cardsContainer2.appendChild(card2);
    }
}

renderCards2();

// second cardsContainer code end


// third cardscontainer code begins

const cardsData3 = [
    {
        imageSrc: 'images/p5.png',
        name: 'Rustom Paji',
        owner:'Hotel owner',
        desc: "Now,I'm on a mission to help you get to the RICHEST 1% -one educational finance content at a time"
    },
    {
        imageSrc: 'images/p5.png',
        name: 'Rustom Paji',
        owner:'Hotel owner',
        desc: "Now,I'm on a mission to help you get to the RICHEST 1% -one educational finance content at a time"
    },
    {
        imageSrc: 'images/p5.png',
        name: 'Rustom Paji',
        owner:'Hotel owner',
        desc:"Now,I'm on a mission to help you get to the RICHEST 1% -one educational finance content at a time"
    }
];

const cardsContainer3 = document.getElementById('cardsContainer3');

function createCard3(cardData3) {
    const card3 = document.createElement('div');
    card3.classList.add('card3');

    const desc=document.createElement('p')
    desc.classList.add('desc')
    desc.textContent=cardData3.desc
    card3.appendChild(desc)

    const image3 = document.createElement('img');
    image3.src = cardData3.imageSrc;
    card3.appendChild(image3);
    
    const name = document.createElement('h3');
    name.textContent = cardData3.name
    card3.appendChild(name);

    const owner = document.createElement('p');
    owner.textContent = cardData3.owner;
    card3.appendChild(owner);

     return card3
}


function renderCards3() {
    for (const cardData3 of cardsData3) {
        const card3 = createCard3(cardData3);
        cardsContainer3.appendChild(card3);
    }
}

renderCards3();

// third cardcontainer related code ends

// video tag related code begins

const customVideo = document.getElementById('customVideo');
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');

playButton.addEventListener('click', () => {
    if (customVideo.paused) {
        customVideo.play();
        playButton.style.display = 'none';
        stopButton.style.display = 'block';
    }
});

stopButton.addEventListener('click', () => {
    if (!customVideo.paused) {
        customVideo.pause();
        customVideo.currentTime = 0;
        playButton.style.display = 'block';
        stopButton.style.display = 'none';
    }
});

customVideo.addEventListener('play', () => {
    playButton.style.display = 'none';
    stopButton.style.display = 'block';
});

customVideo.addEventListener('pause', () => {
    playButton.style.display = 'block';
    stopButton.style.display = 'none';
});

// video tag related code ends