//Gregory Ortiz
const chinaQuizQuestions = [
    {
        //1
        question: "What is the famous structure that was built to guard Emperor Qin in the afterlife called?",
        answers: [
            {text: "Qin Mausoleum", correct: false}, 
            {text: "Terracotta Army", correct: true},
            {text: "Stonehenge", correct: false},
            {text: "Great Wall of China", correct: false},
        ],
        difficulty: 1,
    },
    {
        //2
        question: "What religion is not widely practiced in China?",
        answers: [
            {text: "Hinduism", correct: true}, 
            {text: "Buddhism", correct: false},
            {text: "Catholicism", correct: false},
            {text: "Islam", correct: false},
        ],
        difficulty: 1,
    },
    {
        //3
        question: "Who wrote The Art of War?",
        answers: [
            {text: "Shao Kahn", correct: false}, 
            {text: "Sun Tzu", correct: true},
            {text: "Confucius", correct: false},
            {text: "Takeda Shingen", correct: false},
            "Shao Kahn", "Sun Tzu", "Confucius", "Takeda Shingen"
        ],
        difficulty: 1,
    },
    {
        //4
        question: "What drug did Great Britain flood China with in the 1860s?",
        answers: [
            {text: "Cocaine", correct: false}, 
            {text: "Heroin", correct: false},
            {text: "Fentanyl", correct: false},
            {text: "Opium", correct: true},
        ],
        difficulty: 1,
    },
    {
        //5
        question: "Which dynasty put a ban on Opium?",
        answers: [
            {text: "Qing", correct: true}, 
            {text: "Shang", correct: false},
            {text: "Tang", correct: false},
            {text: "Qian", correct: false},
    ],
        difficulty: 1,
    },
    {
        //6
        question: "Which region was given to Great Britain?",
        answers: [
            {text: "Macau", correct: false}, 
            {text: "Hong Kong", correct: true},
            {text: "Tibet", correct: false},
            {text: "Tianjin", correct: false},
        ],
        difficulty: 1,
    },
    {
        //7
        question: "Who became China's new leader after the civil war?",
        answers: [
            {text: "Mao Yichang", correct: false}, 
            {text: "Mao Zedong", correct: true},
            {text: "Li Xi", correct: false},
            {text: "Zhao Leji", correct: false},
        ],
        difficulty: 1,
    },
    {
        //8
        question: "Which US president was the first to visit China while in office?",
        answers: [
            {text: "Herbert Hoover", correct: false}, 
            {text: "John F. Kennedy", correct: false},
            {text: "Bill Clinton", correct: false},
            {text: "Richard Nixon", correct: true},
        ],
        difficulty: 1,
    },
    {
        //9
        question: "When did Mao Zedong die?",
        answers: [
            {text: "1976", correct: true}, 
            {text: "1967", correct: false},
            {text: "1978", correct: false},
            {text: "1980", correct: false},
        ],
        difficulty: 1,
    },
    {
        //10
        question: "When did Hong Kong return to China?",
        answers: [
            {text: "1945", correct: false}, 
            {text: "1997", correct: true},
            {text: "1983", correct: false},
            {text: "1968", correct: false},
        ],
        difficulty: 1,
    },
    {
        //11
        question: "When was the Great Wall of China built?",
        answers: [
            {text: "220 B.C.", correct: true}, 
            {text: "80 A.D.", correct: false},
            {text: "220 A.D.", correct: false},
            {text: "80 B.C.", correct: false},
        ],
        difficulty: 2,
    },
    {
        //12
        question: "When was 'The Art of War' written?",
        answers: [
            {text: "5th Century B.C.", correct: true}, 
            {text: "5th Century A.D.", correct: false},
            {text: "4th Century B.C.", correct: false},
            {text: "6th Century A.D.", correct: false},
        ],
        difficulty: 2,
    },
    {
        //13
        question: "What famous explorer did Kublai Khan meet?",
        answers: [
            {text: "Meriwether Lewis", correct: false}, 
            {text: "Marco Polo", correct: true},
            {text: "William Clark", correct: false},
            {text: "John Cabot", correct: false},
        ],
        difficulty: 2,
    },
    {
        //14
        question: "What religion did Kublai Khan introduce to China?",
        answers: [
            {text: "Satanism", correct: false}, 
            {text: "Christianity", correct: false},
            {text: "Islam", correct: true},
            {text: "Buddhism", correct: false},
        ],
        difficulty: 2,
    },
    {
        //15
        question: "What city was taken during the Taiping Rebellion?",
        answers: [
            {text: "Shanghai", correct: false}, 
            {text: "Beijing", correct: false},
            {text: "Chengdu", correct: false},
            {text: "Nanjing", correct: true},
        ],
        difficulty: 2,
    },
    {
        //16
        question: "What country did Qing clash with Japan over?",
        answers: [
            {text: "Korea", correct: true}, 
            {text: "Taiwan", correct: false},
            {text: "Mongolia", correct: false},
            {text: "China", correct: false},
        ],
        difficulty: 2,
    },
    {
        //17
        question: "When was the Republic of China formed?",
        answers: [
            {text: "1920", correct: false}, 
            {text: "1919", correct: false},
            {text: "1912", correct: true},
            {text: "1812", correct: false},
        ],
        difficulty: 2,
    },
    {
        //18
        question: "When did China's civil war begin?",
        answers: [
            {text: "1930", correct: false}, 
            {text: "1933", correct: false},
            {text: "1932", correct: false},
            {text: "1931", correct: true},
        ],
        difficulty: 2,
    },
    {
        //19
        question: "When did China's civil war end?",
        answers: [
            {text: "1949", correct: true}, 
            {text: "1945", correct: false},
            {text: "1951", correct: false},
            {text: "1942", correct: false},
        ],
        difficulty: 2,
    },
    {
        //20
        question: "What campaign did Chairman Mao launch in 1966?",
        answers: [
            {text: "Reeducation", correct: false}, 
            {text: "Patriotic Education", correct: false},
            {text: "Cultural Revolution", correct: true},
            {text: "Anti-Bolshevik League", correct: false},
        ],
        difficulty: 2,
    },
    {
        //21
        question: "How many Emperors did China have?",
        answers: [
            {text: "100", correct: false}, 
            {text: "250", correct: false},
            {text: "397", correct: true},
            {text: "500", correct: false},
        ],
        difficulty: 3,
    },
    {
        //22
        question: "When was Confucius born?",
        answers: [
            {text: "551 B.C.", correct: true}, 
            {text: "569 B.C.", correct: false},
            {text: "401 B.C.", correct: false},
            {text: "479 B.C.", correct: false},
        ],
        difficulty: 3,
    },
    {
        //23
        question: "Which dynasty created the first Asian superhighway?",
        answers: [
            {text: "Xia", correct: false}, 
            {text: "Qin", correct: true},
            {text: "Shang", correct: false},
            {text: "Zhou", correct: false},
        ],
        difficulty: 3,
    },
    {
        //24
        question: "When was paper developed?",
        answers: [
            {text: "105 A.D.", correct: true}, 
            {text: "105 B.C.", correct: false},
            {text: "150 A.D.", correct: false},
            {text: "194 B.C.", correct: false},
        ],
        difficulty: 3,
    },
    {
        //25
        question: "Which dynasty was the first to utilize explosive gunpowder?",
        answers: [
            {text: "Tang", correct: true}, 
            {text: "Qin", correct: false},
            {text: "Shang", correct: false},
            {text: "Qing", correct: false},
        ],
        difficulty: 3,
    },
    {
        //26
        question: "What dynasty did Kublai Khan conquer?",
        answers: [
            {text: "Qing", correct: false}, 
            {text: "Qin", correct: false},
            {text: "Song", correct: true},
            {text: "Tang", correct: false},
        ],
        difficulty: 3,
    },
    {
        //27
        question: "What currency did Kublai Khan introduce?",
        answers: [
            {text: "Paper Money", correct: true}, 
            {text: "Gold Coin", correct: false},
            {text: "Silver Coin", correct: false},
            {text: "Gold Bars", correct: false},
        ],
        difficulty: 3,
    },
    {
        //28
        question: "When did the Taiping Rebellion end?",
        answers: [
            {text: "1864", correct: true}, 
            {text: "1865", correct: false},
            {text: "1880", correct: false},
            {text: "1860", correct: false},
        ],
        difficulty: 3,
    },
    {
        //29
        question: "When was opium legalized in China?",
        answers: [
            {text: "1859", correct: false}, 
            {text: "1856", correct: false},
            {text: "1858", correct: true},
            {text: "1860", correct: false},
        ],
        difficulty: 3,
    },
    {
        //30
        question: "Who was Empress during the Boxer Rebellion?",
        answers: [
            {text: "Dowager Ci'an", correct: false}, 
            {text: "Dowager Cixi", correct: true},
            {text: "Dowager Bo", correct: false},
            {text: "Dowager Longyu", correct: false},
        ],
        difficulty: 3,
    },
    {
        //31
        question: "How long has Chinese history been recorded?",
        answers: [
            {text: "2000 years", correct: false}, 
            {text: "2500 years", correct: false},
            {text: "3000 years", correct: false},
            {text: "3500 years", correct: true},
        ],
        difficulty: 4,
    },
    {
        //32
        question: "Which is the earliest ruling dynasty?",
        answers: [
            {text: "Shang", correct: false}, 
            {text: "Zhou", correct: false},
            {text: "Qin", correct: false},
            {text: "Xia", correct: true},
        ],
        difficulty: 4,
    },
    {
        //33
        question: "When was the Silk Road mapped out?",
        answers: [
            {text: "122 B.C.", correct: false}, 
            {text: "125 A.D.", correct: false},
            {text: "125 B.C.", correct: true},
            {text: "144 B.C.", correct: false},
        ],
        difficulty: 4,
    },
    {
        //34
        question: "Who returned to Emperor Wu with the map of the Silk Road?",
        answers: [
            {text: "Zhang Qian", correct: true}, 
            {text: "Zhang Qui", correct: false},
            {text: "Ying Zheng", correct: false},
            {text: "Kublai Khan", correct: false},
        ],
        difficulty: 4,
    },
    {
        //35
        question: "When was gunpowder invented?",
        answers: [
            {text: "749 A.D.", correct: false}, 
            {text: "640 B.C.", correct: false},
            {text: "900 A.D.", correct: false},
            {text: "850 A.D.", correct: true},
        ],
        difficulty: 4,
    },
    {
        //36
        question: "What country did Kublai Khan attempt to conquer next?",
        answers: [
            {text: "Korea", correct: false}, 
            {text: "Taiwan", correct: false},
            {text: "Indonesia", correct: false},
            {text: "Japan", correct: true},
        ],
        difficulty: 4,
    },
    {
        //37
        question: "Who controlled Taiwan prior to 1662?",
        answers: [
            {text: "The Dutch", correct: true}, 
            {text: "The English", correct: false},
            {text: "The French", correct: false},
            {text: "The German", correct: false},
        ],
        difficulty: 4,
    },
    {
        //38
        question: "Which dynasty seized Taiwan in 1662?",
        answers: [
            {text: "Qing", correct: false}, 
            {text: "Ming", correct: true},
            {text: "Shang", correct: false},
            {text: "Qian", correct: false},
        ],
        difficulty: 4,
    },
    {
        //39
        question: "Which dynasty annexed Taiwan in 1683?",
        answers: [
            {text: "Shang", correct: false}, 
            {text: "Qian", correct: false},
            {text: "Qing", correct: true},
            {text: "Tang", correct: false},
        ],
        difficulty: 4,
    },
    {
        //40
        question: "Who forced China to legalize opium?",
        answers: [
            {text: "Great Britain and Germany", correct: false}, 
            {text: "Germany and France", correct: false},
            {text: "Great Britain and Italy", correct: false},
            {text: "Great Britain and France", correct: true},
        ],
        difficulty: 4,
    },
    {
        //41
        question: "Who was China's first emperor?",
        answers: [
            {text: "Taizong", correct: false}, 
            {text: "Mao Tse-Tung", correct: false},
            {text: "Qin She Huang", correct: true},
            {text: "Pu Yi", correct: false},
        ],
        difficulty: 5,
    },
    {
        //42
        question: "Which of the following is the oldest Chinese city?",
        answers: [
            {text: "Shangqiu", correct: false}, 
            {text: "Shanghai", correct: false},
            {text: "Xi'an", correct: true},
            {text: "Beijing", correct: false},
        ],
        difficulty: 5,
    },
    {
        //43
        question: "Who sanctioned Confucius' ideas?",
        answers: [
            {text: "Wu of Han", correct: true}, 
            {text: "Kong He", correct: false},
            {text: "Laozi", correct: false},
            {text: "Taizong", correct: false},
        ],
        difficulty: 5,
    },
    {
        //44
        question: "Who developed paper?",
        answers: [
            {text: "Xu Shen", correct: false}, 
            {text: "Sima Qian", correct: false},
            {text: "Cai Lun", correct: true},
            {text: "Shin Tang", correct: false},
        ],
        difficulty: 5,
    },
    {
        //45
        question: "Who wrote the first Chinese dictionary?",
        answers: [
            {text: "Taiping Chang", correct: false}, 
            {text: "Xu Shen", correct: true},
            {text: "Rong Sande", correct: false},
            {text: "Cai Gao", correct: false},
        ],
        difficulty: 5,
    },
    {
        //46
        question: "Who wrote the first Chinese history book?",
        answers: [
            {text: "Jung Chang", correct: false}, 
            {text: "Sun Tzu", correct: false},
            {text: "Sima Qian", correct: true},
            {text: "Qin Shi Huang", correct: false},
        ],
        difficulty: 5,
    },
    {
        //47
        question: "What is the earliest known printed book titled?",
        answers: [
            {text: "The Art of War", correct: false}, 
            {text: "The Diamond Sutra", correct: true},
            {text: "Journey to the West", correct: false},
            {text: "Mencius", correct: false},
        ],
        difficulty: 5,
    },
    {
        //48
        question: "What dynasty did Kublai Khan establish following his conquest?",
        answers: [
            {text: "Qian", correct: false}, 
            {text: "Khan", correct: false},
            {text: "Shang", correct: false},
            {text: "Yuan", correct: true},
        ],
        difficulty: 5,
    },
    {
        //49
        question: "Who revolted against the Qing Dynasty?",
        answers: [
            {text: "Zhang Lexing", correct: false}, 
            {text: "Sengge Rinchen", correct: false},
            {text: "Hong Xiuquan", correct: true},
            {text: "Kublai Khan", correct: false},
        ],
        difficulty: 5,
    },
    {
        //50
        question: "How many casualties were there after the conclusion of the Taiping Rebellion?",
        answers: [
            {text: "5 million", correct: false}, 
            {text: "20 million", correct: true},
            {text: "10 million", correct: false},
            {text: "1 million", correct: false},
        ],
        difficulty: 5,
    },
];
module.exports = chinaQuizQuestions;
