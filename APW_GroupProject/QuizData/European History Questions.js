const questions = [
    {
        question: "In which year did World War I begin?",
        answers: [
            { text: "1923", correct: false},
            { text: "1938", correct: false},
            { text: "1917", correct: false},
            { text: "1914", correct: true},
        ]
    },
    {
        question: "In which country was the Battle of Hastings in 1066 fought?",
        answers: [
            { text: "France", correct: false},
            { text: "Russia", correct: false},
            { text: "England", correct: true},
            { text: "Norway", correct: false},
        ]
    },
    {
        question: "By the king of which country was the Manga Carta published?",
        answers: [
            { text: "France", correct: false},
            { text: "Austria", correct: false},
            { text: "Italy", correct: false},
            { text: "England", correct: true},
        ]
    },
    {
        question: "The first successful movable-type printing press was developed by this man.",
        answers: [
            { text: "Johannes Gutenberg", correct: true},
            { text: "Benjamin Franklin", correct: false},
            { text: "Sir Issac Newton", correct: false},
            { text: "Martin Luther", correct: false},
        ]
    },
    {
        question: "The disease that ravaged and killed a third of Europe's population in the 14th century is known as: ?",
        answers: [
            { text: "The White Death", correct: false},
            { text: "Plague (Black Death)", correct: true},
            { text: "Smallpox", correct: false},
            { text: "Malaria", correct: false},
        ]
    },
    {
        question: "Between which countries was the Hundred Years War fought?",
        answers: [
            { text: "Italy and Carthage", correct: false},
            { text: "England and Germany", correct: false},
            { text: "France and England", correct: true},
            { text: "Spain and France", correct: false},
        ]
    },
    {
        question: "By the king of which country was the Manga Carta published?",
        answers: [
            { text: "France", correct: false},
            { text: "Austria", correct: false},
            { text: "Italy", correct: false},
            { text: "England", correct: true},
        ]
    },
    {
        question: "Which Roman Emperor built a massive wall across Northen Britain in 122 A.D.?",
        answers: [
            { text: "Marcus Aurelius", correct: false},
            { text: "Hadrian", correct: true},
            { text: "Nero", correct: false},
            { text: "Augustus", correct: false},
        ]
    },
    {
        question: "In which year did Albert Einstein get the Nobel Prize?",
        answers: [
            { text: "1914", correct: false},
            { text: "1922", correct: true},
            { text: "1929", correct: false},
            { text: "1935", correct: false},
        ]
    },
    {
        question: "This man wrote a document known as the 95 Theses?",
        answers: [
            { text: "Martin Luther", correct: true},
            { text: "Saint Augustus", correct: false},
            { text: "Henry David Thoreau", correct: false},
            { text: "Voltaire", correct: false},
        ]
    },
    {
        question: "In 1594, William Shakespeare joined this company of this London thearte.",
        answers: [
            { text: "Broadway", correct: false},
            { text: "Oxford University Theatre", correct: false},
            { text: "The Globe", correct: true},
            { text: "The London Palladium", correct: false},
        ]
    },
    {
        question: "What famous 5th century A.D. conqueror was known as 'The Scourge of God'?",
        answers: [
            { text: "Hannibal", correct: false},
            { text: "Julius Caesar", correct: false},
            { text: "William the Conqueror", correct: false},
            { text: "Attila the Hun", correct: true},
        ]
    },
    {
        question: "Which counrty signed a nonaggression pact with the Soviet Union in 1939?",
        answers: [
            { text: "The United States", correct: false},
            { text: "Great Britain", correct: false},
            { text: "Spain", correct: false},
            { text: "Germany", correct: true},
        ]
    },
    {
        question: "Marx and Engels predicted that the workers would: ",
        answers: [
            { text: "Become middle class", correct: false},
            { text: "End up happy", correct: false},
            { text: "Overthrow the owners", correct: true},
            { text: "Join foreigners in a battle royal", correct: false},
        ]
    },
    {
        question: "What event in Sarajevo ignited the Great War?",
        answers: [
            { text: "Russia's mobilization of troops along the Austrian border", correct: false},
            { text: "Austria's rejection of Serbia's offer and declartion of war on Serbia", correct: false},
            { text: "An ultimatum presented to Serbia in repsonse to royal assassinations", correct: false},
            { text: "The assassination of Archduke Franz Ferdinand and his wife Sophie", correct: true},
        ]
    },
    {
        question: "The German blitzkrieg was a military strategy the depended on what advantage?",
        answers: [
            { text: "Surpise and overwhelming force using fast tanks, jeeps, and planes", correct: true},
            { text: "A system of fortifications", correct: false},
            { text: "Ability to make a long, steady advance", correct: false},
            { text: "'out-waiting' the opponent", correct: false},
        ]
    }, 
    {
        question: "What is a totaltitarian state?",
        answers: [
            { text: "A state in which the people have a direct say in their government", correct: false},
            { text: "A state in which the people elect representatives to the legislature", correct: false},
            { text: "A state in which the government controls every aspect of public and private life", correct: true},
            { text: "A state in which the working class is glorified and has the greatest voice in government", correct: false},
        ]
    },
    {
        question: "Why did some people call for reform during the Industrial Revolution?",
        answers: [
            { text: "Reformers seemed popular", correct: false},
            { text: "It was part of the religious movement", correct: false},
            { text: "People in industrial cities had bad working conditions and bad living conditions", correct: true},
            { text: "Reform went along with the expansion of empires", correct: false},
        ]
    },
    {
        question: "Which nation was unified by Otto von Bismarck and later ruled by Kaiser Wilhelm II?",
        answers: [
            { text: "Germany", correct: true},
            { text: "Austria-Hungary", correct: false},
            { text: "Russia", correct: false},
            { text: "Serbia", correct: false},
        ]
    },
    {
        question: "What was the Industrial Revolution?",
        answers: [
            { text: "Increased populations of urban areas during the 1800s", correct: false},
            { text: "Increased purchases of land by wealthy landowners to cultivate larger fields", correct: false},
            { text: "Increased output of machine-made goods that began in England during the 18th-century", correct: true},
            { text: "A widespread use of teenagers as factory laborers who worked 14 hour days, 6 days a week", correct: false},
        ]
    },
    {
        question: "Who were the Bolsheviks?",
        answers: [
            { text: "Radical Russian Marxist revolutionaries", correct: false},
            { text: "Followers of Rasputin", correct: true},
            { text: "Soliders in the White Army", correct: false},
            { text: "Members of the Duma, Russia 's parliment", correct: false},
        ]
    },
    {
        question: "He was the leader of the Bolsheviks.",
        answers: [
            { text: "Mao", correct: false},
            { text: "Sun Yat-Sen", correct: false},
            { text: "Czar Nicholas II", correct: false},
            { text: "Lenin", correct: true},
        ]
    },
    {
        question: "What was the policy of appeasement?",
        answers: [
            { text: "The British and French decision to give into agrresion to keep the peace", correct: true},
            { text: "The treaty between Germany and the Soviet Union agreeing not to fight each other", correct: false},
            { text: "The move that Mussolini made to form an alliance with Germany", correct: false},
            { text: "The U.S. desire to stay out of foriegn affairs", correct: false},
        ]
    },
    {
        question: "The Glorious Revolution of 1688 installed William of Orange on the throne of England.  Where did William of Orange come from?",
        answers: [
            { text: "Germany", correct: false},
            { text: "Netherlands", correct: true},
            { text: "Russia", correct: false},
            { text: "Spain", correct: false},
        ]
    },
    {
        question: "Who were expelled from England in 1290, not being allowed to return until 1657?",
        answers: [
            { text: "Buddhists", correct: false},
            { text: "Catholics", correct: false},
            { text: "Jews", correct: true},
            { text: "Muslims", correct: false},
        ]
    },
    {
        question: "What country was invaded by Nazi Germany that officially started World War II?",
        answers: [
            { text: "Belgium", correct: false},
            { text: "France", correct: false},
            { text: "Poland", correct: true},
            { text: "Russia", correct: false},
        ]
    },
    {
        question: "What year was the Berlin Wall destroyed?",
        answers: [
            { text: "1961", correct: false},
            { text: "1991", correct: false},
            { text: "1977", correct: false},
            { text: "1989", correct: true},
        ]
    },
    {
        question: "What city of Italy is credited with the orinination of the Renaissance Period?",
        answers: [
            { text: "Naples", correct: false},
            { text: "Florence", correct: true},
            { text: "Pisa", correct: false},
            { text: "Milan", correct: false},
        ]
    },
    {
        question: "In what year did the 100 Years' War begin?",
        answers: [
            { text: "1453", correct: false},
            { text: "1324", correct: false},
            { text: "1337", correct: true},
            { text: "1283", correct: false},
        ]
    },
    {
        question: "The Battle of Waterloo, considered to be Napolean's downfall, happened here",
        answers: [
            { text: "Belguim", correct: true},
            { text: "Switzerland", correct: false},
            { text: "Germany", correct: false},
            { text: "France", correct: false},
        ]
    },
    {
        question: "Which European Nation did the Black Plague reach first?",
        answers: [
            { text: "Poland", correct: false},
            { text: "Italy", correct: true},
            { text: "Sweden", correct: false},
            { text: "Portugal", correct: false},
        ]
    },
    {
        question: "Isabella I of Castille was the queen of: ",
        answers: [
            { text: "Russia", correct: false},
            { text: "Sweden", correct: false},
            { text: "Italy", correct: false},
            { text: "Spain", correct: true},
        ]
    },
    {
        question: "Which of these countries did not sign the Warsaw Pact?",
        answers: [
            { text: "Yugoslavia", correct: true},
            { text: "Albania", correct: false},
            { text: "Hungary", correct: false},
            { text: "Romania", correct: false},
        ]
    },
    {
        question: "Which of these countries has a national anthem with no lyrics?",
        answers: [
            { text: "France", correct: false},
            { text: "Greece", correct: false},
            { text: "Spain", correct: true},
            { text: "Norway", correct: false},
        ]
    },
    {
        question: "When did Alexander the Great die?",
        answers: [
            { text: "323 B.C.", correct: true},
            { text: "356 B.C.", correct: false},
            { text: "44 B.C.", correct: false},
            { text: "342 B.C.", correct: false},
        ]
    },
    {
        question: "The spinning jenny was one of the earliest innovations in the Industiral Revoultion.  What was a spinning jenny?",
        answers: [
            { text: "A device for making cloth", correct: true},
            { text: "A device for storing energy", correct: false},
            { text: "A steam engine", correct: false},
            { text: "A water pump", correct: false},
        ]
    },
    {
        question: "How many wives did King Henry have?", 
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "6", correct: true},
        ]
    },
    {
        question: "What was the Byzantine Empire?",
        answers: [
            { text: "An alliance ruled by the Pope", correct: false},
            { text: "A confederation of European tribes", correct: false},
            { text: "A continuation of the Roman Empire", correct: true},
            { text: "The empire founded by Alexander the Great", correct: false},
        ]
    },
    {
        question: "When was the last time Moscow was ever captured by a foriegn power?",
        answers: [
            { text: "By Ogedei Khan in 1238", correct: false},
            { text: "By Napoleon in 1812", correct: true},
            { text: "By Hitler in 1942", correct: false},
            { text: "Never", correct: false},
        ]
    },
    {
        question: "Who theorized that, as food levels rise, population levels grow to meet them - thereby ensuring most people will always be poor?",
        answers: [
            { text: "G.W.F. Hegel", correct: false},
            { text: "David Livingstone", correct: false},
            { text: "Thomas Robert Malthus", correct: true},
            { text: "Adam Smith", correct: false},
        ]
    },
    {
        question: "Where did Karl Max spend most of his adult life?",
        answers: [
            { text: "Berlin", correct: false},
            { text: "Buenos Aires", correct: false},
            { text: "London", correct: true},
            { text: "Moscow", correct: false},
        ]
    },
    {
        question: "Where was the Metric System developed?",
        answers: [
            { text: "Ancient Greece", correct: false},
            { text: "France", correct: true},
            { text: "Italy", correct: false},
            { text: "England", correct: false},
        ]
    },
    {
        question: "Who was Anton Chekov?",
        answers: [
            { text: "Chess player", correct: false},
            { text: "Designer of aircraft", correct: false},
            { text: "Explorer", correct: false},
            { text: "Playwright", correct: true},
        ]
    },
    {
        question: "What style of architecture is exemplified by the Norte Dame cathedral in Paris?",
        answers: [
            { text: "Art Deco", correct: false},
            { text: "Brutalist", correct: false},
            { text: "Gothic", correct: true},
            { text: "Neo-classical", correct: false},
        ]
    },
    {
        question: "How long did Hitler envision his 'Third Reich' lasting?",
        answers: [
            { text: "10 years", correct: false},
            { text: "100 years", correct: false},
            { text: "1,000 years", correct: true},
            { text: "1 million years", correct: false},
        ]
    },
    {
        question: "What year did World War II end?",
        answers: [
            { text: "1923", correct: false},
            { text: "1931", correct: false},
            { text: "1937", correct: false},
            { text: "1945", correct: true},
        ]
    },
    {
        question: "What was the original worth of a British pound?",
        answers: [
            { text: "Pound of copper", correct: false},
            { text: "Pound of gold", correct: false},
            { text: "Pound of sheep's wool", correct: false},
            { text: "Pound of sliver", correct: true},
        ]
    },
    {
        question: "What royal house did Queen Elizabeth I come from?",
        answers: [
            { text: "Plantagenets", correct: false},
            { text: "Stuarts", correct: false},
            { text: "Tudors", correct: true},
            { text: "Windsors", correct: false},
        ]
    }, 
    {
        question: "How did Napoleon die?",
        answers: [
            { text: "Gulliotine, Paris, 1815", correct: false},
            { text: "Old age, London, 1848", correct: false},
            { text: "Stomach cancer (or maybe poisoning), St. Helena, 1821", correct: true},
            { text: "Struck by gunshot, Waterloo, 1815", correct: false},
        ]
    },
    {
        question: "What did the Battle of Trafalgar take place?",
        answers: [
            { text: "France", correct: false},
            { text: "Ireland", correct: false},
            { text: "Belgium", correct: false},
            { text: "Spain", correct: true},
        ]
    }, 
];