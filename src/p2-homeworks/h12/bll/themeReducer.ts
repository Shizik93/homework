const initState:initialStateType = {
    theme:'Default'

};
type initialStateType={
    theme:ThemeType
}
type ActionsType=changeThemeType
export const themeReducer = (state:initialStateType=initState,action:ActionsType): initialStateType => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return {...state,theme:action.theme}
        }
        default: return state;
    }
};

export type ThemeType='Aqua'|'Red'|'Dark'|'Default'
export const changeTheme = (theme:ThemeType)=> {
    return{
        type:'SET-THEME',
        theme
    } as const
}
type changeThemeType=ReturnType<typeof changeTheme>