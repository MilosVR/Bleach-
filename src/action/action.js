export const SORT_BY_ASCENDING = "SORT_BY_ASCENDING";
export const SORT_BY_DESCENDING = "SORT_BY_DESCENDING"
export const SORT_BY_ATTACK = "SORT_BY_ATTACK"
export const SORT_BY_SP = "SORT_BY_SP"
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'
export const POWER_ATRIBUTE = "POWER_ATRIBUTE"
export const TECHNIQUE_ATRIBUTE = "TECHNIQUE_ATRIBUTE"
export const MIND_ATRIBUTE = 'MIND_ATRIBUTE'
export const HEART_ATRIBUTE = 'HEART_ATRIBUTE'
export const SPEED_ATRIBUTE = 'SPEED_ATRIBUTE'
export const SEARCH_CHARACTER = 'SEARCH_CHARACTER'



export const sortByAscending = item => {
    return {
        type:SORT_BY_ASCENDING,
        payload:item
    }
}
export const sortByDescending = item => {
    return {
        type:SORT_BY_DESCENDING,
        payload:item
    }
}
export const sortByAttack = item => {
    return {
        type:SORT_BY_ATTACK,
        payload:item
    }
}
export const sortBySp = item => {
    return {
        type:SORT_BY_SP,
        payload:item
    }
}
export const addToFavorite = (item) => {
    return {
        type:ADD_TO_FAVORITE,
        payload:item 
    }
}
export const removeFromFavorite = (item) => {
    return {
        type:REMOVE_FROM_FAVORITE,
        payload:item 
    }
}
export const powerAtribute = (item) => {
    return {
        type:POWER_ATRIBUTE,
        payload:item 
    }
}
export const techniqueAtribute = (item) => {
    return {
        type:TECHNIQUE_ATRIBUTE,
        payload:item 
    }
}
export const mindAtribute = (item) => {
    return {
        type:MIND_ATRIBUTE,
        payload:item 
    }
}
export const heartAtribute = (item) => {
    return {
        type:HEART_ATRIBUTE,
        payload:item 
    }
}
export const speedAtribute = (item) => {
    return {
        type:SPEED_ATRIBUTE,
        payload:item 
    }
}
export const searchCharacter = query => {
    return {
        type:SEARCH_CHARACTER,
        payload:query
    }
}