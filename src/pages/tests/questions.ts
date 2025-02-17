import { QuestionType, QuestionTypeWithAnswer } from "@/types";

export const pretest: QuestionTypeWithAnswer[] = [
    {
        question: "What type of compound is formed when two or more non-metals are combined?",
        options: [
            { value: "a", label: "Ionic compounds" },
            { value: "b", label: "Covalent compounds" },
            { value: "c", label: "Inorganic compounds" },
            { value: "d", label: "Organic compounds" }
        ],
        answer: "b"
    },
    {
        question: "Which of the following is an example of an ionic compound?",
        options: [
            { value: "a", label: "NaCl" },
            { value: "b", label: "H₂O" },
            { value: "c", label: "CO₂" },
            { value: "d", label: "SO₂" }
        ],
        answer: "a"
    },
    {
        question: "Which of the following is true about ionic compounds?",
        options: [
            { value: "a", label: "Ionic compounds are formed when electrons are shared between atoms." },
            { value: "b", label: "Ionic compounds conduct electricity in solid form." },
            { value: "c", label: "Ionic compounds have low melting and boiling points." },
            { value: "d", label: "Ionic compounds are hard and brittle." }
        ],
        answer: "d"
    },
    {
        question: "Which of the following elements would form a covalent bond with hydrogen?",
        options: [
            { value: "a", label: "Calcium (Ca)" },
            { value: "b", label: "Oxygen (O)" },
            { value: "c", label: "Potassium (K)" },
            { value: "d", label: "Sodium (Na)" }
        ],
        answer: "b"
    },
    {
        question: "Which of the following pairs of elements is most likely to form an ionic bond?",
        options: [
            { value: "a", label: "Aluminum and Chlorine" },
            { value: "b", label: "Magnesium and sulfur" },
            { value: "c", label: "Nitrogen and Oxygen" },
            { value: "d", label: "Hydrogen and Chlorine" }
        ],
        answer: "b"
    },
    {
        question: "Which of the following compounds is likely to form a covalent bond?",
        options: [
            { value: "a", label: "Carbon and Oxygen" },
            { value: "b", label: "Calcium and Fluorine" },
            { value: "c", label: "Copper and Sulfur" },
            { value: "d", label: "Potassium and Iodine" }
        ],
        answer: "a"
    },
    {
        question: "How are ionic compounds formed?",
        options: [
            { value: "a", label: "Sharing of electrons between atoms" },
            { value: "b", label: "Through the interaction between two metal elements" },
            { value: "c", label: "Through the interaction of two non-metals" },
            { value: "d", label: "Transfer of electrons from one atom to another" }
        ],
        answer: "d"
    },
    {
        question: "How are covalent compounds formed?",
        options: [
            { value: "a", label: "Sharing of electrons between atoms" },
            { value: "b", label: "Through the interaction between two metal elements" },
            { value: "c", label: "Through the interaction of two non-metals" },
            { value: "d", label: "Transfer of electrons from one atom to another" }
        ],
        answer: "a"
    },
    {
        question: "What is the importance of using the correct prefix system in naming covalent compounds?",
        options: [
            { value: "a", label: "It tells the number of atoms of each element in the compound." },
            { value: "b", label: "It shows whether the compound is an ionic or covalent compound." },
            { value: "c", label: "It indicates whether the compound is solid or liquid" },
            { value: "d", label: "It tells how many bonds are there in the compound" }
        ],
        answer: "a"
    },
    {
        question: "How can ionic compounds be applied in real life?",
        options: [
            { value: "a", label: "Water (H₂O) is commonly used in cooling systems." },
            { value: "b", label: "Ethanol (CH3CH2OH) is used as a biofuel in vehicles" },
            { value: "c", label: "Sugar (C12H22O11) is used as a sweetener for food." },
            { value: "d", label: "Table Salt (NaCl) is used in seasoning foods when cooking." }
        ],
        answer: "d"
    }
];

export const survey: QuestionType[] = [
    {
        "question": "I feel more confident in my understanding of ionic and covalent bonding after taking the quiz.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "I can answer the questions despite its difficulty level.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "The questions on the test were clear and easy to understand.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "The examples in the quizzes helped me understand the basic concepts of chemical compounds.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "I understand the differences between ionic and covalent bonds after studying this unit.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "The quiz effectively tested my understanding of chemical bonding.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "The difficulty level of the questions in the quiz was appropriate for my current understanding.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "I can describe the characteristics of covalent compounds and how they differ from ionic compounds.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "I can identify examples of both ionic and covalent compounds in real-life scenarios.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    },
    {
        "question": "I felt that the questions on ionic and covalent bonding were relevant to what I had previously learned in class.",
        "options": [
            { "value": "strongly_agree", "label": "Strongly Agree" },
            { "value": "agree", "label": "Agree" },
            { "value": "disagree", "label": "Disagree" },
            { "value": "strongly_disagree", "label": "Strongly Disagree" }
        ]
    }
]