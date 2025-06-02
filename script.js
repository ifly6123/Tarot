// --- Tarot Card Data (Full 78 Cards) ---
const tarotDeckData = [
    // Major Arcana
    { id: "maj00", name: "The Fool", keywords: "New beginnings, innocence, spontaneity, faith, the unknown, leap of faith.", img: "images/maj00.jpg" },
    { id: "maj01", name: "The Magician", keywords: "Manifestation, willpower, skill, resourcefulness, action, power.", img: "images/maj01.jpg" },
    { id: "maj02", name: "The High Priestess", keywords: "Intuition, mystery, subconscious, secrets, wisdom, hidden knowledge.", img: "images/maj02.jpg" },
    { id: "maj03", name: "The Empress", keywords: "Nurturing, abundance, fertility, nature, beauty, creativity.", img: "images/maj03.jpg" },
    { id: "maj04", name: "The Emperor", keywords: "Authority, structure, control, stability, leadership, father figure.", img: "images/maj04.jpg" },
    { id: "maj05", name: "The Hierophant", keywords: "Tradition, convention, institutions, guidance, spirituality, mentorship.", img: "images/maj05.jpg" },
    { id: "maj06", name: "The Lovers", keywords: "Relationships, choices, harmony, alignment, love, partnership.", img: "images/maj06.jpg" },
    { id: "maj07", name: "The Chariot", keywords: "Determination, victory, control, willpower, progress, ambition.", img: "images/maj07.jpg" },
    { id: "maj08", name: "Strength", keywords: "Courage, patience, compassion, inner strength, influence, self-control.", img: "images/maj08.jpg" },
    { id: "maj09", name: "The Hermit", keywords: "Introspection, solitude, guidance, wisdom, soul-searching, withdrawal.", img: "images/maj09.jpg" },
    { id: "maj10", name: "Wheel of Fortune", keywords: "Cycles, destiny, turning points, luck, change, fate.", img: "images/maj10.jpg" },
    { id: "maj11", name: "Justice", keywords: "Fairness, truth, law, cause and effect, accountability, balance.", img: "images/maj11.jpg" },
    { id: "maj12", name: "The Hanged Man", keywords: "Surrender, new perspectives, pause, sacrifice, letting go.", img: "images/maj12.jpg" },
    { id: "maj13", name: "Death", keywords: "Endings, transformation, transition, letting go, rebirth.", img: "images/maj13.jpg" },
    { id: "maj14", name: "Temperance", keywords: "Balance, moderation, patience, harmony, purpose, integration.", img: "images/maj14.jpg" },
    { id: "maj15", name: "The Devil", keywords: "Bondage, addiction, materialism, illusion, temptation, shadow self.", img: "images/maj15.jpg" },
    { id: "maj16", name: "The Tower", keywords: "Sudden upheaval, crisis, revelation, destruction, liberation.", img: "images/maj16.jpg" },
    { id: "maj17", name: "The Star", keywords: "Hope, inspiration, healing, serenity, spirituality, guidance.", img: "images/maj17.jpg" },
    { id: "maj18", name: "The Moon", keywords: "Illusion, fear, anxiety, subconscious, intuition, dreams.", img: "images/maj18.jpg" },
    { id: "maj19", name: "The Sun", keywords: "Joy, success, vitality, optimism, clarity, warmth.", img: "images/maj19.jpg" },
    { id: "maj20", name: "Judgement", keywords: "Reckoning, awakening, renewal, absolution, calling.", img: "images/maj20.jpg" },
    { id: "maj21", name: "The World", keywords: "Completion, fulfillment, integration, travel, accomplishment.", img: "images/maj21.jpg" },
    { id: "wands01", name: "Ace of Wands", keywords: "Inspiration, new opportunities, growth, potential, creative spark.", img: "images/wands01.jpg" },
    { id: "wands02", name: "Two of Wands", keywords: "Planning, future decisions, progress, discovery, partnership.", img: "images/wands02.jpg" },
    { id: "wands03", name: "Three of Wands", keywords: "Expansion, foresight, looking ahead, enterprise, initial success.", img: "images/wands03.jpg" },
    { id: "wands04", name: "Four of Wands", keywords: "Celebration, harmony, homecoming, community, stability.", img: "images/wands04.jpg" },
    { id: "wands05", name: "Five of Wands", keywords: "Competition, conflict, rivalry, disagreement, ambition.", img: "images/wands05.jpg" },
    { id: "wands06", name: "Six of Wands", keywords: "Victory, public recognition, success, self-confidence, progress.", img: "images/wands06.jpg" },
    { id: "wands07", name: "Seven of Wands", keywords: "Challenge, perseverance, defense, standing your ground, courage.", img: "images/wands07.jpg" },
    { id: "wands08", name: "Eight of Wands", keywords: "Speed, action, movement, quick decisions, travel, news.", img: "images/wands08.jpg" },
    { id: "wands09", name: "Nine of Wands", keywords: "Resilience, persistence, last stand, courage, nearly there.", img: "images/wands09.jpg" },
    { id: "wands10", name: "Ten of Wands", keywords: "Burden, responsibility, hard work, stress, completion.", img: "images/wands10.jpg" },
    { id: "wands11", name: "Page of Wands", keywords: "Enthusiasm, exploration, discovery, free spirit, new ideas.", img: "images/wands11.jpg" },
    { id: "wands12", name: "Knight of Wands", keywords: "Energy, passion, adventure, impulsiveness, action-oriented.", img: "images/wands12.jpg" },
    { id: "wands13", name: "Queen of Wands", keywords: "Courage, confidence, independence, determination, warmth.", img: "images/wands13.jpg" },
    { id: "wands14", name: "King of Wands", keywords: "Leadership, vision, charisma, entrepreneurship, honor.", img: "images/wands14.jpg" },
    { id: "cups01", name: "Ace of Cups", keywords: "New love, emotional beginnings, compassion, creativity, intuition.", img: "images/cups01.jpg" },
    { id: "cups02", name: "Two of Cups", keywords: "Partnership, mutual attraction, connection, union, love.", img: "images/cups02.jpg" },
    { id: "cups03", name: "Three of Cups", keywords: "Celebration, friendship, community, joy, collaboration.", img: "images/cups03.jpg" },
    { id: "cups04", name: "Four of Cups", keywords: "Apathy, contemplation, missed opportunities, re-evaluation.", img: "images/cups04.jpg" },
    { id: "cups05", name: "Five of Cups", keywords: "Loss, grief, disappointment, regret, focusing on the negative.", img: "images/cups05.jpg" },
    { id: "cups06", name: "Six of Cups", keywords: "Nostalgia, childhood memories, innocence, reunion, harmony.", img: "images/cups06.jpg" },
    { id: "cups07", name: "Seven of Cups", keywords: "Choices, illusion, fantasy, wishful thinking, opportunities.", img: "images/cups07.jpg" },
    { id: "cups08", name: "Eight of Cups", keywords: "Moving on, abandonment, withdrawal, seeking something more.", img: "images/cups08.jpg" },
    { id: "cups09", name: "Nine of Cups", keywords: "Wishes fulfilled, contentment, satisfaction, gratitude, pleasure.", img: "images/cups09.jpg" },
    { id: "cups10", name: "Ten of Cups", keywords: "Harmony, marriage, family, happiness, fulfillment, joy.", img: "images/cups10.jpg" },
    { id: "cups11", name: "Page of Cups", keywords: "Creative ideas, intuition, messages, sensitivity, emotional.", img: "images/cups11.jpg" },
    { id: "cups12", name: "Knight of Cups", keywords: "Romance, charm, imagination, following the heart, artistic.", img: "images/cups12.jpg" },
    { id: "cups13", name: "Queen of Cups", keywords: "Compassion, intuition, empathy, emotional security, caring.", img: "images/cups13.jpg" },
    { id: "cups14", name: "King of Cups", keywords: "Emotional balance, compassion, diplomacy, wisdom, control.", img: "images/cups14.jpg" },
    { id: "swords01", name: "Ace of Swords", keywords: "Breakthrough, clarity, truth, mental power, new ideas.", img: "images/swords01.jpg" },
    { id: "swords02", name: "Two of Swords", keywords: "Indecision, stalemate, difficult choices, blocked emotions.", img: "images/swords02.jpg" },
    { id: "swords03", name: "Three of Swords", keywords: "Heartbreak, sorrow, grief, pain, separation.", img: "images/swords03.jpg" },
    { id: "swords04", name: "Four of Swords", keywords: "Rest, recuperation, contemplation, meditation, peace.", img: "images/swords04.jpg" },
    { id: "swords05", name: "Five of Swords", keywords: "Conflict, defeat, ambition, winning at all costs, tension.", img: "images/swords05.jpg" },
    { id: "swords06", name: "Six of Swords", keywords: "Transition, moving on, rite of passage, leaving behind.", img: "images/swords06.jpg" },
    { id: "swords07", name: "Seven of Swords", keywords: "Deception, betrayal, stealth, strategy, hidden actions.", img: "images/swords07.jpg" },
    { id: "swords08", name: "Eight of Swords", keywords: "Restriction, self-imposed limitation, feeling trapped, victim mentality.", img: "images/swords08.jpg" },
    { id: "swords09", name: "Nine of Swords", keywords: "Anxiety, worry, fear, nightmares, despair, mental anguish.", img: "images/swords09.jpg" },
    { id: "swords10", name: "Ten of Swords", keywords: "Rock bottom, painful endings, betrayal, crisis, ruin.", img: "images/swords10.jpg" },
    { id: "swords11", name: "Page of Swords", keywords: "Curiosity, new ideas, truth-seeking, restlessness, talkative.", img: "images/swords11.jpg" },
    { id: "swords12", name: "Knight of Swords", keywords: "Ambition, action, directness, haste, determination.", img: "images/swords12.jpg" },
    { id: "swords13", name: "Queen of Swords", keywords: "Independence, clarity, directness, intelligence, perception.", img: "images/swords13.jpg" },
    { id: "swords14", name: "King of Swords", keywords: "Authority, truth, intellect, logic, discipline, ethical.", img: "images/swords14.jpg" },
    { id: "pentacles01", name: "Ace of Pentacles", keywords: "New financial opportunity, manifestation, abundance, prosperity.", img: "images/pentacles01.jpg" },
    { id: "pentacles02", name: "Two of Pentacles", keywords: "Balancing, adaptability, time management, prioritization.", img: "images/pentacles02.jpg" },
    { id: "pentacles03", name: "Three of Pentacles", keywords: "Teamwork, collaboration, skill, craftsmanship, initial success.", img: "images/pentacles03.jpg" },
    { id: "pentacles04", name: "Four of Pentacles", keywords: "Control, security, possessiveness, conservation, stability.", img: "images/pentacles04.jpg" },
    { id: "pentacles05", name: "Five of Pentacles", keywords: "Hardship, poverty, isolation, insecurity, loss.", img: "images/pentacles05.jpg" },
    { id: "pentacles06", name: "Six of Pentacles", keywords: "Generosity, charity, giving and receiving, sharing wealth.", img: "images/pentacles06.jpg" },
    { id: "pentacles07", name: "Seven of Pentacles", keywords: "Patience, investment, perseverance, long-term view, harvest.", img: "images/pentacles07.jpg" },
    { id: "pentacles08", name: "Eight of Pentacles", keywords: "Skill development, craftsmanship, dedication, hard work, mastery.", img: "images/pentacles08.jpg" },
    { id: "pentacles09", name: "Nine of Pentacles", keywords: "Abundance, self-sufficiency, luxury, independence, financial security.", img: "images/pentacles09.jpg" },
    { id: "pentacles10", name: "Ten of Pentacles", keywords: "Wealth, family, legacy, inheritance, financial security, tradition.", img: "images/pentacles10.jpg" },
    { id: "pentacles11", name: "Page of Pentacles", keywords: "New opportunities, learning, practicality, manifestation, ambition.", img: "images/pentacles11.jpg" },
    { id: "pentacles12", name: "Knight of Pentacles", keywords: "Hard work, routine, responsibility, diligence, practicality.", img: "images/pentacles12.jpg" },
    { id: "pentacles13", name: "Queen of Pentacles", keywords: "Nurturing, practicality, security, resourcefulness, down-to-earth.", img: "images/pentacles13.jpg" },
    { id: "pentacles14", name: "King of Pentacles", keywords: "Abundance, security, mastery, business acumen, provider.", img: "images/pentacles14.jpg" }
];

// --- DOM Elements ---
const spreadSelectionSectionEl = document.getElementById('spread-selection');
const readingAreaSectionEl = document.getElementById('reading-area');
const spreadOptionCardEls = document.querySelectorAll('.spread-option-card');
const currentSpreadTitleDisplayEl = document.getElementById('current-spread-title-display');
const drawCardsBtnEl = document.getElementById('draw-cards-btn');
const cardGridEl = document.getElementById('card-grid');
const interpretationDisplayEl = document.getElementById('card-interpretation-display');
const resetReadingBtnEl = document.getElementById('reset-reading-btn');
const cardHoverTooltipEl = document.getElementById('card-hover-tooltip'); // Tooltip element

document.getElementById('current-year').textContent = new Date().getFullYear();

// --- Application State ---
let currentSpreadType = null;
let numCardsToDraw = 0;
let currentSpreadTitle = "";
let drawnCardObjects = []; // Stores the actual card data objects for the current spread
let revealedCardDataList = []; // Stores data of REVEALED cards for the list

// Meanings for card positions in different spreads
const spreadPositionMeaningsMap = {
    'one-card': ["Guidance for this moment:"],
    'two-card': ["Option 1 / You", "Option 2 / Them / The Situation"],
    'three-card': ["Past / The Situation", "Present / The Action", "Future / The Outcome"],
    'diamond': [ "1. The Core Issue/Question", "2. What is Hidden/Unseen Influence", "3. What is Known/Obvious Influence", "4. The Answer/Resolution"],
    'five-card': ["1. The Central Issue", "2. Past Influences", "3. Future Potential", "4. Reason for the Situation", "5. Overall Energy/Outcome"],
    'seven-card': ["1. Past Influences", "2. Present Situation", "3. Immediate Future", "4. Your Attitude/Approach", "5. External Influences", "6. Hopes and Fears", "7. Final Outcome"],
    'nine-card': ["1. How You See Yourself", "2. What You Want", "3. Your Strengths", "4. How You See Partner", "5. Partner Wants (Perceived)", "6. Partner Strengths (Perceived)", "7. Current Relationship State", "8. Challenges", "9. Potential Future"],
    'celtic-cross': ["1. You / Heart of Matter", "2. Challenge / Crosses You", "3. Foundation / Distant Past", "4. Recent Past / Passing", "5. Crown / Possible Outcome", "6. Near Future / Approaching", "7. Your Attitude / Self", "8. External Influences", "9. Hopes and Fears", "10. Final Outcome"],
    'eleven-card': ["1. Current Situation", "2. What is Blocking You", "3. Your Goal/Destination", "4. Resources Available", "5. Hidden Influences", "6. First Step to Take", "7. Potential Obstacles", "8. Helpful Energies", "9. What to Learn", "10. Mid-Point Check", "11. Likely Outcome"],
    'twelve-card-year': ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6", "Month 7", "Month 8", "Month 9", "Month 10", "Month 11", "Month 12"],
    'twelve-house': ["1st: Self", "2nd: Finances", "3rd: Communication", "4th: Home", "5th: Creativity", "6th: Work/Health", "7th: Partnerships", "8th: Transformation", "9th: Philosophy", "10th: Career", "11th: Friendships", "12th: Subconscious"]
};

// --- Helper Function to Convert Number to Roman Numeral ---
function toRoman(num) {
    if (isNaN(num) || num < 1) return "";
    const roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let str = '';
    for (let i of Object.keys(roman)) {
        let q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}

// --- Event Listeners ---
spreadOptionCardEls.forEach(card => {
    card.addEventListener('click', () => {
        currentSpreadType = card.dataset.spreadType;
        numCardsToDraw = parseInt(card.dataset.cards);
        currentSpreadTitle = card.dataset.title;
        initializeReadingArea();
        readingAreaSectionEl.scrollIntoView({ behavior: 'smooth' });
    });
});

drawCardsBtnEl.addEventListener('click', performCardDraw);
resetReadingBtnEl.addEventListener('click', returnToSpreadSelection);

// --- Core Functions ---
function initializeReadingArea() {
    spreadSelectionSectionEl.style.display = 'none';
    readingAreaSectionEl.style.display = 'block';
    currentSpreadTitleDisplayEl.textContent = currentSpreadTitle;
    drawCardsBtnEl.style.display = 'inline-block';
    drawCardsBtnEl.disabled = false;
    resetReadingBtnEl.style.display = 'none';
    
    // Clear previous interpretations list and add title
    interpretationDisplayEl.innerHTML = '<h3>Card Interpretations</h3>'; 
    interpretationDisplayEl.style.display = 'none'; // Hide until cards are drawn
    
    revealedCardDataList = []; // Reset list of revealed cards
    createCardPlaceholders();
}

function createCardPlaceholders() {
    cardGridEl.innerHTML = '';
    cardGridEl.className = 'card-grid-layout'; 

    if (currentSpreadType === 'one-card') cardGridEl.classList.add('one-card-spread-layout');
    else if (currentSpreadType === 'two-card') cardGridEl.classList.add('two-card-spread-layout');
    else if (currentSpreadType === 'three-card') cardGridEl.classList.add('three-card-spread-layout');
    else if (currentSpreadType === 'diamond') cardGridEl.classList.add('diamond-spread-layout');
    else if (currentSpreadType === 'five-card') cardGridEl.classList.add('five-card-spread-layout');
    else if (currentSpreadType === 'seven-card') cardGridEl.classList.add('seven-card-spread-layout');
    else if (currentSpreadType === 'nine-card') cardGridEl.classList.add('nine-card-spread-layout');
    else if (currentSpreadType === 'celtic-cross') cardGridEl.classList.add('celtic-cross-spread-layout');
    else if (currentSpreadType === 'eleven-card') cardGridEl.classList.add('eleven-card-spread-layout');
    else if (currentSpreadType === 'twelve-card-year' || currentSpreadType === 'twelve-house') {
        cardGridEl.classList.add('twelve-card-spread-layout');
    }

    for (let i = 0; i < numCardsToDraw; i++) {
        const cardSlotContainer = document.createElement('div');
        cardSlotContainer.classList.add('card-slot-container');

        const romanNumeralEl = document.createElement('div');
        romanNumeralEl.classList.add('roman-numeral');
        romanNumeralEl.textContent = toRoman(i + 1);
        cardSlotContainer.appendChild(romanNumeralEl);

        const cardElement = document.createElement('div');
        cardElement.classList.add('tarot-card-display');
        
        // Specific grid area assignment for layouts that use it
        if (currentSpreadType === 'diamond') {
            const areas = ['p1', 'p2', 'p3', 'p4'];
            if (i < areas.length) cardSlotContainer.dataset.gridArea = areas[i]; // Assign to container
        } else if (currentSpreadType === 'five-card') {
            const areas = ['p1', 'p2', 'p3', 'p4', 'p5'];
            if (i < areas.length) cardSlotContainer.dataset.gridArea = areas[i];
        } else if (currentSpreadType === 'celtic-cross') {
            const celticCrossGridAreas = ["pos1", "pos2", "pos3", "posCross", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9", "pos10"];
             if (i < celticCrossGridAreas.length) {
                 cardSlotContainer.dataset.gridArea = celticCrossGridAreas[i];
                 if (celticCrossGridAreas[i] === 'posCross') {
                    // JS will handle rotation if CSS doesn't do it based on context
                    // For now, CSS handles rotation of the .tarot-card-display within this slot
                 }
            }
        }


        const cardFrontDiv = document.createElement('div');
        cardFrontDiv.classList.add('tarot-card-face', 'card-front-design');
        cardFrontDiv.innerHTML = `<span>?</span>`;

        const cardBackDiv = document.createElement('div');
        cardBackDiv.classList.add('tarot-card-face', 'card-back-content');
        const imgElement = document.createElement('img');
        imgElement.alt = "Tarot Card Image";
        imgElement.onerror = () => { 
            imgElement.src = 'https://placehold.co/230x394/FFCOCB/000000?text=Image+Error'; 
            imgElement.alt = 'Error loading image';
        };
        cardBackDiv.appendChild(imgElement);

        cardElement.appendChild(cardFrontDiv);
        cardElement.appendChild(cardBackDiv);
        cardElement.dataset.cardPosition = i; // Store 0-indexed position

        cardElement.addEventListener('click', () => handleCardClick(cardElement));
        
        cardSlotContainer.appendChild(cardElement);
        cardGridEl.appendChild(cardSlotContainer);
    }
}

function performCardDraw() {
    drawCardsBtnEl.disabled = true;
    drawCardsBtnEl.style.display = 'none';
    resetReadingBtnEl.style.display = 'inline-block';
    interpretationDisplayEl.style.display = 'block'; // Show interpretation area now

    let tempDeck = [...tarotDeckData];
    for (let i = tempDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempDeck[i], tempDeck[j]] = [tempDeck[j], tempDeck[i]];
    }
    drawnCardObjects = tempDeck.slice(0, numCardsToDraw);

    const cardElementsOnScreen = cardGridEl.querySelectorAll('.tarot-card-display');
    cardElementsOnScreen.forEach((cardEl, index) => {
        if (drawnCardObjects[index]) {
            cardEl.dataset.cardId = drawnCardObjects[index].id;
            const imgTag = cardEl.querySelector('.card-back-content img');
            imgTag.src = drawnCardObjects[index].img;
            imgTag.alt = drawnCardObjects[index].name;

            // Add hover listeners AFTER card data is assigned
            cardEl.addEventListener('mouseenter', (event) => showCardTooltip(event, drawnCardObjects[index]));
            cardEl.addEventListener('mouseleave', hideCardTooltip);
            cardEl.addEventListener('mousemove', moveCardTooltip);
        }
    });
}

function handleCardClick(clickedCardElement) {
    if (clickedCardElement.classList.contains('is-flipped') || !clickedCardElement.dataset.cardId) {
        return;
    }
    clickedCardElement.classList.add('is-flipped');
    
    const cardId = clickedCardElement.dataset.cardId;
    const cardData = drawnCardObjects.find(card => card.id === cardId);
    const positionInSpread = parseInt(clickedCardElement.dataset.cardPosition);

    if (cardData) {
        // Add to our list of revealed cards if not already there (important for correct ordering)
        const alreadyRevealed = revealedCardDataList.find(item => item.position === positionInSpread);
        if (!alreadyRevealed) {
            revealedCardDataList.push({
                position: positionInSpread,
                roman: toRoman(positionInSpread + 1),
                name: cardData.name,
                keywords: cardData.keywords,
                positionMeaning: (spreadPositionMeaningsMap[currentSpreadType] && spreadPositionMeaningsMap[currentSpreadType][positionInSpread]) ? spreadPositionMeaningsMap[currentSpreadType][positionInSpread] : ''
            });
            // Sort by position to ensure list is always in order of card placement
            revealedCardDataList.sort((a, b) => a.position - b.position);
        }
        updateInterpretationList();
    }
}

function updateInterpretationList() {
    // Clear existing list items but keep the title
    interpretationDisplayEl.innerHTML = '<h3>Card Interpretations</h3>'; 

    revealedCardDataList.forEach(cardInfo => {
        const listItem = document.createElement('div');
        listItem.classList.add('interpretation-list-item');
        
        let positionMeaningHTML = cardInfo.positionMeaning ? `<p class="position-meaning">${cardInfo.positionMeaning}</p>` : '';

        listItem.innerHTML = `
            <div class="card-title"><span class="roman-numeral-list">${cardInfo.roman}.</span> ${cardInfo.name}</div>
            ${positionMeaningHTML}
            <p class="keywords">${cardInfo.keywords}</p>
        `;
        interpretationDisplayEl.appendChild(listItem);
    });
    // Scroll to the bottom of the list to show the latest addition
    interpretationDisplayEl.scrollTop = interpretationDisplayEl.scrollHeight;
}


function showCardTooltip(event, cardData) {
    if (!cardData) return; // Should not happen if called correctly

    const tooltipTitle = cardHoverTooltipEl.querySelector('h5');
    const tooltipText = cardHoverTooltipEl.querySelector('p');

    tooltipTitle.textContent = cardData.name;
    tooltipText.textContent = cardData.keywords;
    
    moveCardTooltip(event); // Initial position
    cardHoverTooltipEl.style.display = 'block';
}

function hideCardTooltip() {
    cardHoverTooltipEl.style.display = 'none';
}

function moveCardTooltip(event) {
    // Position tooltip near mouse, with offset to avoid covering cursor
    // And ensure it stays within viewport
    let x = event.clientX + 15;
    let y = event.clientY + 15;

    // Adjust if tooltip goes off-screen
    if (x + cardHoverTooltipEl.offsetWidth > window.innerWidth) {
        x = event.clientX - cardHoverTooltipEl.offsetWidth - 15;
    }
    if (y + cardHoverTooltipEl.offsetHeight > window.innerHeight) {
        y = event.clientY - cardHoverTooltipEl.offsetHeight - 15;
    }
    if (x < 0) x = 5; // Prevent going off left edge
    if (y < 0) y = 5; // Prevent going off top edge


    cardHoverTooltipEl.style.left = `${x}px`;
    cardHoverTooltipEl.style.top = `${y}px`;
}


function returnToSpreadSelection() {
    readingAreaSectionEl.style.display = 'none';
    spreadSelectionSectionEl.style.display = 'block';
    spreadSelectionSectionEl.scrollIntoView({ behavior: 'smooth' });
    cardGridEl.innerHTML = '';
    drawnCardObjects = [];
    revealedCardDataList = []; // Clear the list for the next reading
    interpretationDisplayEl.innerHTML = '<h3>Card Interpretations</h3>'; // Reset interpretation area
}
