const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
    'Krokodyl nie potrafi wystawić języka.',
    'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
    'Śruba przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
    'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
    'Goryle śpią nawet czternaście godzin dziennie.',
    'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
    'Chińczycy w ciągu roku zużywają około 80 miliardów paĹeczek.',
    'Żeby wejść na Wieżę Eiffla trzeba pokonać aĹź 1710 stopni.'
]

const day = new Date()
let number = Math.floor(Math.random() * (facts.length - 1))

const fact = () => {
    currentDay.innerText = day.toLocaleString("default", {"weekday" : "long"})
    funFact.innerText = facts[number]
}

fact()
