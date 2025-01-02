const welcomeContainer = document.getElementById("welcome-container");
const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const currentQuestionElement = document.getElementById("current-question");
const scoreElement = document.getElementById("score");
const recommendationElement = document.getElementById("recommendation");
const nextButton = document.getElementById("next-btn");
const totalQuestionsElement = document.getElementById("total-questions");

let questions = [
    { question: "What is the meaning of ABM?", answers: ["Accounting and Business Mechanics", "Access and Business Management", "Accounting and Business Management", "Accounting and Buyer Mechanics"], correct: 2, major: "ABM" },
    { question: "This is obtaining a financial advantage or benefit, especially from an investment.", answers: ["Profit", "Entrepreneurship", "Capital", "Buyer"], correct: 0, major: "ABM" },
    { question: "It is a broad term for anything that gives its owner value or advantage.", answers: ["Buyer", "Loan", "Profit", "Capital"], correct: 3, major: "ABM" },
    { question: "What are the entrepreneurial skills, except:", answers: ["Impulsive skills", "Cognitive skills", "Technical skills", "Interpersonal skills"], correct: 0, major: "ABM" },
    { question: "Accounting is often referred to as a fundamental to communication of financial information.", answers: ["Language of Business", "Language of Financing", "Language of Literacy", "Language of Business and Finance"], correct: 0, major: "ABM" },
    { question: "Account is the basic storage of information in accounting.", answers: ["True", "False"], correct: 0, major: "ABM" },
    { question: "Which of the following is not an appropriate description of accounting?", answers: ["Accounting is an information system.", "Accounting is an exact science rather than an art.", "Accounting is the language of business.", "Accounting is a service activity."], correct: 1, major: "ABM" },
    { question: "This is a process of identifying, recording and communicating economic information that is useful in making economic decisions.", answers: ["Accounting", "Bookkeeping", "Auditing", "Marketing"], correct: 0, major: "ABM" },
    { question: "He is considered as the father of modern accounting.", answers: ["Devin Pascoli", "Amatino Manucci", "Fra Luca Pacioli", "Jacques Savary"], correct: 2, major: "ABM" },
    { question: "Which of the following accounting processes comes first ahead of the others?", answers: ["Interpreting", "Recording", "Communicating", "Identifying"], correct: 3, major: "ABM" },
    { question: "What is the meaning of STEM?", answers: ["Strand technology engineering mathematics", "Social technical engineering methods", "Science technology engineering mathematics", "Engineering mechanical"], correct: 2, major: "STEM" },
    { question: "It is a systematic study of the structure and behavior of the physical and natural through the testing of theories against the evidence obtained.", answers: ["Science", "Technology", "Engineering", "Mathematics"], correct: 0, major: "STEM" },
    { question: "What element has a chemical symbol of Fe?", answers: ["Zinc", "Boron", "Iron", "Magnesium"], correct: 2, major: "STEM" },
    { question: "It is a study of living organisms, divided into many specialized fields that cover their behavior, and distribution.", answers: ["Microbiology", "Geology", "Chemistry", "Biology"], correct: 3, major: "STEM" },
    { question: "How do you approach new concepts or challenges:", answers: ["Ask questions and seek to understand the underlying mechanisms.", "Combine existing knowledge with creative thinking to generate novel solutions."], correct: 1, major: "STEM" },
    { question: "What are the nitrogenous bases in DNA?", answers: ["Adenine, Cytosine, Uracil only", "Adenine, Cytosine, Thymine only", "Adenine, Cytosine, Guanine, Thymine", "Adenine, Cytosine, Guanine, Uracil"], correct: 2, major: "STEM" },
    { question: "What will happen if you hold a polarized sunglass in front of you and rotate them. While looking at the blue sky, you will see the sky get:", answers: ["Brighter", "Dimmer", "Invisible", "Brighter and Dimmer"], correct: 3, major: "STEM" },
    { question: "It occurs when the discontinuity has a hole in the graph of the function.", answers: ["Indeterminate", "Infinite", "Jump", "Removable"], correct: 3, major: "STEM" },
    { question: "Electromagnetic waves are produced by:", answers: ["Any disturbance", "Currents", "Vibrating charge", "Voltage source"], correct: 2, major: "STEM" },
    { question: "Suppose the car moved 20 meters to the right, then turned 10 meters back to the left. What is its distance traveled and its displacement?", answers: ["The distance will be 30 meters and the displacement will be 0.", "The distance will be 20 meters and the displacement will be 10 m, right.", "The distance will be 30 meters and the displacement will be 10 m, right.", "The distance will be 10 meters and the displacement will be 10 m, right."], correct: 2, major: "STEM" },
    { question: "The following are disciplines of humanities except:", answers: ["Geology", "Literature", "Political Science", "Philosophy"], correct: 0, major: "HUMSS" },
    { question: "The Natural Sciences are divided into two groups:", answers: ["Life and Death Science", "Physical and Life Science", "Rocket and Physical Science", "Life and Meteorological Science"], correct: 1, major: "HUMSS" },
    { question: 'The Greek word "Politika" means:', answers: ["Management", "Governance", "Rule of law", "Affairs of the cities"], correct: 3, major: "HUMSS" },
    { question: "Known as 'The Sublime Paralytic' and 'The Brains of the Revolution'. A brilliant thinker who used his pen in the service of the Filipino people's struggle for freedom in his political writings 'El Verdadero Decalogo' and 'Ordenanzas de la Revolución'.", answers: ["Apolinario Mabini", "Renato Constantino", "Jacinto", "Emilio", "Manuel L. Quezon"], correct: 0, major: "HUMSS" },
    { question: "Which of these disciplines is part of the humanities?", answers: ["Biology", "Economics", "Philosophy", "Psychology"], correct: 2, major: "HUMSS" },
    { question: "Politics is generally defined as the activity that influences an individual or a group of people.", answers: ["True", "False"], correct: 0, major: "HUMSS" },
    { question: "The state is part of the government.", answers: ["True", "False"], correct: 0, major: "HUMSS" },
    { question: "The church is part of the government.", answers: ["True", "False"], correct: 1, major: "HUMSS" },
    { question: "The study of human societies and cultures and their development.", answers: ["Sociology", "Geology", "Anthropology", "Demography"], correct: 2, major: "HUMSS" },
    { question: "Who among the following Filipino thinkers was an activist and probably the first systematic social thinker in South-East Asia who wrote two novels that were a reflection of exploitative conditions under Spanish colonial rule and the possibilities and consequences of a revolution that enraged the Spanish friars?", answers: ["Dr. Jose P. Rizal", "Virgilio Enriquez", "Zeus Salazar", "Isabelo de los Reyes"], correct: 0, major: "HUMSS" },
    { question: "It refers to the art and science of growing vegetables, fruits, ornamental plants for landscape gardening, and other plantation crops.", answers: ["Agriculture", "Farming", "Horticulture", "Olericulture"], correct: 2, major: "AGRI" },
    { question: "The following are the importance of agriculture EXCEPT:", answers: ["Key to economic advancement" , "Key to unhealthy biosphere" , "Production for raw  materials for industries" , "Source of foreign exchange"], correct: 1, major: "AGRI" },
    { question: "The following are importance of plants EXCEPT:", answers: ["Source of food, shelter, and medicine" , "Slow the wind speed" , "Some plants become weeds and invasive" , "Source or raw materials for the industry"], correct: 2, major: "AGRI" },
    { question: "Which does NOT belong to the principles of waste storage?", answers: ["Water storage" , "Chemical storage" , "Physical storage" , "Biological storage"], correct: 0, major: "AGRI" },
    { question: "You plan to do some construction work on the farm. What will you wear to prevent head injuries while working?", answers: ["helmet" , "Cap" , "Hard hat" , "Hair net"], correct: 2, major: "AGRI" },
    { question: "Chemical reactions take place before it produces electrical change to what source of electricity?", answers: ["Geothermal power" , "Solar power" , "Battery" , "Rotary electromagnet machine"], correct: 2, major: "ELECTRICITY" },
    { question: "It is stated in ohm's law that current is directly proportional to the electromotive force (E.M.F) or voltage and inversely proportional to the?", answers: ["Resistance" , "Power" , "Source" , "Electricity"], correct: 0, major: "ELECTRICITY" },
    { question: "The negative and positive charge symbols are assigned to the:", answers: ["Proton and Electron", "Electron and Neutron", "Atom and Nucleus", "Electron and Elements"], correct: 0, major: "ELECTRICITY" },
    { question: "In general, any object that contains an equal amount of positive and negative charge is said to be electrically:", answers: ["Positive", "Neutral", "Negative"], correct: 1, major: "ELECTRICITY" },
    { question: "The PE of the object at the highest point compared to its KE at the lowest point is:", answers: ["Lesser", "Equal", "Greater", "Not related"], correct: 2, major: "ELECTRICITY" },
    { question: "Visible portion of the nail that is attached to the nail bed.", answers: ["Nail plate", "Nail walls", "Nail grooves", "Nail root"], correct: 0, major: "BEAUTY CARE" },
    { question: "The portion of the skin under the free edge of the nail.", answers: ["Nail walls", "Eponychium", "Hyponychium", "Nail grooves"], correct: 2, major: "BEAUTY CARE" },
    { question: "It is a hand care treatment to pamper our tired hands and to keep the nails look healthy and strong.", answers: ["Foot spa", "Nail spa", "Body spa", "Hand spa"], correct: 3, major: "BEAUTY CARE" },
    { question: "The study and application of beauty treatment.", answers: ["Cosmetology", "Dermatology", "Histology", "Neurology"], correct: 0, major: "BEAUTY CARE" },
    { question: "A person who is knowledgeable about the nature and appreciation of beauty, especially in art.", answers: ["Aesthetician", "Beautician", "Artist", "Manicurist"], correct: 2, major: "BEAUTY CARE" },
    { question: "The most commonly used material in making kitchen tools, because it is lightweight, attractive and less expensive.", answers: ["Stainless steel", "Aluminum", "Glass", "Cast iron"], correct: 1, major: "COOKERY" },
    { question: "The special coating applied inside aluminum or steel pots and pans that prevents food from sticking on the pan.", answers: ["Aluminum", "Double boiler", "Teflon", "Cast iron"], correct: 2, major: "COOKERY" },
    { question: "This is used when the temperature in cooking must be kept below boiling and kept warm.", answers: ["Aluminum", "Double boiler", "Teflon", "Cast iron"], correct: 1, major: "COOKERY" },
    { question: "This material is durable but must be kept oiled to avoid rusting.", answers: ["Cast iron", "Double boiler", "Teflon", "Aluminum"], correct: 0, major: "COOKERY" },
    { question: "This material is very expensive but much easier to clean and shine and will not wear easily.", answers: ["Stainless steel", "Aluminum", "Glass", "Cast iron"], correct: 0, major: "COOKERY" },
    { question: "Used for gripping something, round like a rod that is also used for twisting and cutting wires?", answers: ["Screwdrivers", "Pliers", "Wrenches", "Hammer"], correct: 1, major: "AUTOMOTIVE" },
    { question: "Can be used to straighten parts, bend parts, and dislodge stuck components?", answers: ["Wrench", "Screwdriver", "Pliers", "Hammer"], correct: 0, major: "AUTOMOTIVE" },
    { question: "In a typical car, what does the alternator primarily do?", answers: ["Regulates engine temperature", "Generates electrical power", "Cleaning tools", "Tightening and loosening tools"], correct: 1, major: "AUTOMOTIVE" },
    { question: "When the task calls for the removal of parts, use, ____.", answers: ["Cleaning tools", "Marking tools", "Loosening and tightening tools", "Measuring tools"], correct: 2, major: "AUTOMOTIVE" },
    { question: "Measuring is a task that needs______.", answers: ["Cleaning tools", "Measuring tools", "Cutting tools", "Tightening and loosening tools"], correct: 1, major: "AUTOMOTIVE" },
    { question: "What does the term \"URL\" stand for in the context of web addresses?", answers: ["Universal Resource Locator", "Uniform Resource Link", "Unique Resource Locator", "Uniform Resource Locator"], correct: 3, major: "ICT" },
    { question: "What does ICT stand for?", answers: ["Integrated Computer Technology", "Information and Communication Technology", "Integrated Computing Techniques", "Internet and Communication Technology"], correct: 1, major: "ICT" },
    { question: "Which of the following is an example of an internet browser?", answers: ["Microsoft Word", "Windows Media Player", "Google Chrome", "Adobe Photoshop"], correct: 2, major: "ICT" },
    { question: "Which of the following team members is related to a team's ICT project?", answers: ["Content Writer and Editor", "Project Manager", "Data Analyst", "Web Developer"], correct: 3, major: "ICT" },
    { question: "What does OHS stand for?", answers: ["Occupational Health and Safetiness", "Occupation Health and Safety", "Occupation and Health Safety", "Occupational Health and Safety"], correct: 3, major: "ICT" },
];

let currentQuestionIndex = 0;
let score = 0;
let answers = [];

function startGame() {
const name = document.getElementById("name").value;
const gender = document.querySelector('input[name="gender"]:checked').value;
welcomeContainer.style.display = "none";
quizContainer.style.display = "block";
currentQuestionIndex = 0;
score = 0;
loadQuestion();
totalQuestionsElement.textContent = questions.length; 
}

function loadQuestion() {
const question = questions[currentQuestionIndex];
questionElement.textContent = question.question;
choicesElement.innerHTML = "";
question.answers.forEach((answer, index) => {
const button = document.createElement("button");
button.textContent = answer;
button.onclick = () => selectAnswer(index);
choicesElement.appendChild(button);
});
currentQuestionElement.textContent = currentQuestionIndex + 1;
}

function selectAnswer(index) {
const question = questions[currentQuestionIndex];
if (index === question.correct) {
score++; 
}
answers[currentQuestionIndex] = index === question.correct;
Array.from(choicesElement.children).forEach((button, i) => {
button.classList.remove("selected");
if (i === index) {
button.classList.add("selected");
}
});
nextButton.disabled = false; 
}

function nextQuestion() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
loadQuestion();
nextButton.disabled = true;
} else {
showResults();
}
}

function showResults() {
quizContainer.style.display = "none";
resultsContainer.style.display = "block";

let majorScores = {};
for (let i = 0; i < questions.length; i++) {
if (answers[i]) { 
    majorScores[questions[i].major] = (majorScores[questions[i].major] || 0) + 1;
}
}

let recommendedMajor = "";
let highestScore = 0;
for (const major in majorScores) {
if (majorScores[major] > highestScore) {
    highestScore = majorScores[major];
    recommendedMajor = major;
}
}

scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
recommendationElement.textContent = `Based on your answers, you are inclined to a ${recommendedMajor} major.`;

if (score >= questions.length * 0.8) {
recommendationElement.textContent += " Excellent performance! You're well-prepared.";
} else if (score >= questions.length * 0.6) {
recommendationElement.textContent += " Good job! You showed a solid understanding.";
} else {
recommendationElement.textContent += " Keep learning and practicing!";
}
}

function restartQuiz() {
currentQuestionIndex = 0;
score = 0;
answers = []; 
resultsContainer.style.display = "none";
welcomeContainer.style.display = "block";
document.getElementById("name").value = "";
document.querySelector('input[name="gender"]:checked').checked = false;
Array.from(choicesElement.children).forEach((button) => {
button.classList.remove("selected");
});
nextButton.disabled = true;
}


//datbases
const mysql = require('mysql'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost', // Your MySQL server host
    user: 'udtohan.samuel_angelo@hnu.edu.ph', // Your MySQL username
    password: 'JaiLoy@777jailoy', // Your MySQL password
    database: 'trace_it_db' // Your database name
});

// Connect to your MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL connected!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.post('/submit-results', (req, res) => {
    const { name, gender, score, recommended_major } = req.body;
    const userQuery = 'INSERT INTO Users (name, gender) VALUES (?, ?)';
    db.query(userQuery, [name, gender], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const userId = result.insertId; 
        const resultQuery = 'INSERT INTO Results (user_id, score, recommended_major) VALUES (?, ?, ?)';
        db.query(resultQuery, [userId, score, recommended_major], (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ message: 'Results saved successfully!' });
        });
    });
});