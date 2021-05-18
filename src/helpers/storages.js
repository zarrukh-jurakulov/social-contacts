

export const setToken = t => localStorage.setItem('t', t)
export const getToken = () => localStorage.getItem('t')
export const removeToken = () => localStorage.removeItem('t')

export const setFavorites = f => localStorage.setItem("f",f)
export const getFavorites = () => localStorage.getItem("f")
export const removeFavorites = () => localStorage.removeItem("f")