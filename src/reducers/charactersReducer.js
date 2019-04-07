import {SORT_BY_ASCENDING, SORT_BY_DESCENDING, SORT_BY_ATTACK, SORT_BY_SP, POWER_ATRIBUTE, TECHNIQUE_ATRIBUTE, MIND_ATRIBUTE, HEART_ATRIBUTE, SPEED_ATRIBUTE, SEARCH_CHARACTER} from "../action/action";

const initialState = [
    {
        id: 0,
        name: 'Ichigo Kurosaki (Final Getsugatensho version)',
        attack: '732',
        stamina: '1058',
        defense: '364',
        focus: "354",
        sp: '662',
        charImg: '/assets/characters/Ichigo Kurosaki (Final Getsugatensho version).jpg',
        atribute: 'speed',
        leadText: "I'll show you my final Getsugatensho.",
        affiliation: 'Soul Reaper',
        soulTrait: {
            name: 'Increased Normal Attack Damage',
            value: 'Normal attack damage +20%'
        },
        info: "After being stabbed by Zangetsu's blade, Ichigo attains a power far superior to " +
                "any other, but it comes at a terrible cost."
    }, {
        id: 1,
        name: 'Yasutora "Chad" Sado',
        attack: '658',
        stamina: '1058',
        defense: '364',
        focus: "354",
        sp: '612',
        charImg: '/assets/characters/Yasutora Chad Sado.jpg',
        atribute: 'power',
        leadText: 'This is Brazo Izquierdo Del Diablo.',
        affiliation: 'Human',
        soulTrait: {
            name: 'Reduced Strong Attack Cooldown',
            value: 'Strong attack recharge time -12%'
        },
        info: "Chad and Ichigo have fought many tough battles together. Chad trained under Kisu" +
                "ke Urahara so he could continue fighting alongside Ichigo."
    }, {
        id: 2,
        name: 'Retsu Unohana',
        attack: '685',
        stamina: '1058',
        defense: '364',
        focus: "354",
        sp: '642',
        charImg: '/assets/characters/Retsu Unohana.jpg',
        atribute: 'mind',
        leadText: "To maintain the fighting strength of the 13 Court Guard Squads, that is the role" +
                " of Squad 4.",
        affiliation: 'Soul Reaper',
        soulTrait: {
            name: 'Reduced Strong Attack Cooldown',
            value: 'Strong attack recharge time -12%'
        },
        info: 'The second longest serving captain after Head Captain Yamamoto. As well as her g' +
                'reat skill in healing, she is also able to deal with wayward squad members with ' +
                'a smile and a kind word.'
    }, {
        id: 3,
        name: 'Gin Ichimaru',
        attack: '615',
        stamina: '1058',
        defense: '364',
        focus: "354",
        sp: '722',
        charImg: '/assets/characters/Gin Ichimaru.jpg',
        atribute: 'heart',
        leadText: "Kamishininoyari isn't the longest Zanpakuto, but it is the fastest Zanpakuto.",
        affiliation: 'human',
        soulTrait: {
            name: 'Increased Strong Attack Damage',
            value: 'Strong attack damage +20%'
        },
        info: 'Gin was a genius who graduated from the Soul Reaper Academy in just one year. He' +
                ' joined Squad 5 and quickly rose through the ranks, eventually becoming captain ' +
                'of Squad 3.'
    }, {
        id: 4,
        name: 'Shukuro Tsukishima (Fullbring version)',
        attack: '623',
        stamina: '1058',
        defense: '364',
        focus: "354",
        sp: '696',
        charImg: '/assets/characters/Shukuro Tsukishima (Fullbring version).jpg',
        atribute: 'heart',
        leadText: "Soon that isolated feeling inside you will have never existed in the first place" +
                ".",
        affiliation: 'human',
        soulTrait: {
            name: 'Full Stamina Damage Boost',
            value: 'Damage inflicted at full STA +20%'
        },
        info: 'A Fullbringer and an ex-member of Xcution. His Fullbring, Book of the End, gives' +
                ' him the power to enter the past of anything he cuts.'
    }, {
        id: 5,
        name: 'Yoruichi Shihoin',
        attack: '629',
        stamina: '1058',
        defense: '364',
        focus: "354",
        sp: '686',
        charImg: '/assets/characters/Yoruichi Shihoin.jpg',
        atribute: 'power',
        leadText: "They call me the 'Flash Master' for a reason; You girls couldn't catch me in a h" +
                "undred years.",
        affiliation: 'Soul Reaper',
        soulTrait: {
            name: 'Increased Strong Attack Damage',
            value: 'Strong attack damage +25%'
        },
        info: 'Yoruichi used her innate fighting ability and this special anti-Hierro armor dev' +
                'eloped by Kisuke to fight Aizen in his Hogyoku-fused state.'
    }, {
        id: 6,
        name: 'Uryu Ishida (The Lost Agent version)',
        attack: '715',
        stamina: '1058',
        defense: '364',
        focus: "354",
        sp: '612',
        charImg: '/assets/characters/Uryu Ishida (The Lost Agent version).jpg',
        atribute: 'power',
        leadText: "Relax. I'm on your side.",
        affiliation: 'human',
        soulTrait: {
            name: 'Increased Normal Attack Damage',
            value: 'Normal attack damage +25%'
        },
        info: 'Uryu is very perceptive, and is able to analyze the nature of his foes and devis' +
                'e tactics to fight them as soon as a battle begins.'
    }, {
        id: 7,
        name: 'Kenpachi Zaraki',
        attack: '749',
        stamina: '1007',
        defense: '324',
        focus: "308",
        sp: '626',
        charImg: '/assets/characters/Kenpachi Zaraki.jpg',
        atribute: 'technique',
        leadText: "It's been a while since I've tried this, but it's time for some kendo.",
        affiliation: 'Soul Reaper',
        soulTrait: {
            name: 'Increased Attack',
            value: 'Attack +40'
        },
        info: 'Captain of Squad 11. By wielding his sword with both hands, he is capable of unleashing strikes of incomparable destructive force.'
    }
]

const characterReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case SORT_BY_ASCENDING:
            return [...state.sort((a, b) => {
                    let nameA = a.name.toLowerCase(),
                        nameB = b.name.toLowerCase()
                    if (nameA > nameB) 
                        return -1
                    if (nameA < nameB) 
                        return 1
                    return 0
                })
            ]

        case SORT_BY_DESCENDING:
            return [...state.sort((a, b) => {
                    let nameA = a.name.toLowerCase(),
                        nameB = b.name.toLowerCase()
                    if (nameA < nameB) 
                        return -1
                    if (nameA > nameB) 
                        return 1
                    return 0
                })]

        case SORT_BY_ATTACK:
            return [...state.sort((a, b) => {
                    let attackA = a.attack
                    let attackB = b.attack
                    return attackB - attackA
                })]

        case SORT_BY_SP:
            return [...state.sort((a, b) => {
                    let spA = a.sp
                    let spB = b.sp
                    return spB - spA
                })]

        case POWER_ATRIBUTE:
             return [...state.filter(item => item.atribute === 'power')]
            
       case TECHNIQUE_ATRIBUTE:
            return [...state.filter(item => item.atribute === 'technique')]     

        case MIND_ATRIBUTE:
            return [...state.filter(item => item.atribute === 'mind') ]

        case HEART_ATRIBUTE:
            return [...state.filter(item => item.atribute === 'heart')  ]

        case SPEED_ATRIBUTE:
            return [...state.filter(item => item.atribute === 'speed') ]

        

        default:
            return state;
    }
}
export default characterReducer