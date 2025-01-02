import express from "express"

const adjectives = [
    "Quick", "Bright", "Happy", "Strong", "Brave", "Calm", "Charming", "Clever", "Cool", "Creative",
    "Curious", "Daring", "Delightful", "Dynamic", "Eager", "Energetic", "Fabulous", "Fair", "Fantastic", 
    "Fierce", "Gentle", "Glamorous", "Graceful", "Grateful", "Humble", "Innovative", "Jolly", "Kind",
    "Lively", "Lucky", "Magical", "Majestic", "Mighty", "Noble", "Optimistic", "Peaceful", "Playful",
    "Polished", "Radiant", "Remarkable", "Resilient", "Sincere", "Skillful", "Smart", "Splendid", 
    "Spontaneous", "Stellar", "Stylish", "Successful", "Swift", "Thoughtful", "Tidy", "Trustworthy", 
    "Unique", "Valiant", "Vivid", "Witty", "Wise", "Zealous", "Agile", "Bold", "Chivalrous", "Compassionate", 
    "Confident", "Decisive", "Devoted", "Determined", "Diligent", "Elegant", "Enthusiastic", "Exuberant", 
    "Fanciful", "Fascinating", "Generous", "Genuine", "Glorious", "Harmonious", "Heroic", "Inventive", 
    "Jubilant", "Loyal", "Magnificent", "Mindful", "Motivated", "Passionate", "Perceptive", "Persistent", 
    "Powerful", "Reliable", "Resourceful", "Tactful", "Talented", "Vibrant", "Warm", "Witty", "Zesty"
];

const nouns = [
    "River", "Mountain", "Forest", "Ocean", "Sunrise", "Sunset", "Star", "Galaxy", "Comet", "Planet", 
    "Cloud", "Storm", "Rainbow", "Breeze", "Leaf", "Flower", "Tree", "Rock", "Wave", "Pebble", "Stream",
    "Valley", "Canyon", "Hill", "Desert", "Glacier", "Island", "Prairie", "Meadow", "Spring", "Volcano",
    "Beach", "Shore", "Waterfall", "Pond", "Lake", "Sky", "Rain", "Snow", "Thunder", "Lightning", 
    "Aurora", "Frost", "Wind", "Mist", "Echo", "Shadow", "Flame", "Spark", "Glow", "Whisper", "Voice",
    "Melody", "Harmony", "Tune", "Rhyme", "Poem", "Story", "Journey", "Quest", "Adventure", "Voyage",
    "Dream", "Vision", "Hope", "Spirit", "Heart", "Soul", "Mind", "Idea", "Thought", "Memory", "Wisdom",
    "Courage", "Valor", "Honor", "Glory", "Power", "Strength", "Freedom", "Destiny", "Legend", "Mystery",
    "Wonder", "Charm", "Magic", "Miracle", "Treasure", "Jewel", "Gem", "Crystal", "Pearl", "Diamond",
    "Gold", "Silver", "Bronze"
];


function generateRandomName() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}




const app = express()
const port = 3000

app.use(express.static("public"))


app.get('/', (req,res) => {
    res.render("index.ejs", {
        name: "Please click on the generate button to generate your band name."
    })
})


app.get('/band',(req,res) => {
    const randomName = generateRandomName()
    res.render("index.ejs", {
        name: randomName
    })
})


app.listen(port, () => {
    console.log(`The server is listening at port ${port}.`)
})