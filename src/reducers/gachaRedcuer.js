const initialState = [
    {
        gachaTitle: 'The Past Summons: Spring and Autumn Friends',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/springAndAutumnFriends.png',
        gachaSummonsImg: '/assets/springAndAutumnFriendsGacha.png',
        id:'0'
    }, {
        gachaTitle: 'Movie Summons: Dark Sinner',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/darkSinner.png',
        gachaSummonsImg: '/assets/darkSinnerGacha.png',
        id:'1'
    }, {
        gachaTitle: 'Brave Selection',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/braveSelection.png',
        gachaSummonsImg: '/assets/braveSelectionGacha.png',
        id:'2'
    }, {
        gachaTitle: 'Movie Summons: Skull-Clad',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/skullClad.png',
        gachaSummonsImg: '/assets/skullCladGacha1.png',
        id:'3'
    }, {
        gachaTitle: 'Celebratory Feast Summons',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/celebratoryFeast.png',
        gachaSummonsImg: '/assets/celebratoryFeastGacha.png',
        id:'4'
    }, {
        gachaTitle: 'Movie Summons: Crimson Sinner',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/crimsonSinner.png',
        gachaSummonsImg: '/assets/crimsonSinnerGacha.png',
        id:'5'
    },
    {
        gachaTitle: 'Raging Battle Summons',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/ragingBattle.png',
        gachaSummonsImg: '/assets/ragingBattleGacha.png',
        id:'6'
    },
    {
        gachaTitle: 'Hell Verse Summons',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/hellVerse.png',
        gachaSummonsImg: '/assets/hellVerseGacha.png',
        id:'7'
    },
    {
        gachaTitle: 'Brave Selection',
        date: '2019-03-30 08:00 – 2019-04-02 08:59',
        gachaImg: '/assets/braveSelection.png',
        gachaSummonsImg: '/assets/braveSelection1.png',
        id:'8'
    }
]

const gachaReducer = (state=initialState, action) => {

    switch (action.type) {

        default:
            return state;
    }

}
export default gachaReducer