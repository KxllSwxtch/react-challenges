// For authorization purposes
export const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
export const authEndpoint = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT
export const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
export const responseType = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE

export const authURI = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=${responseType}&show_dialog=true`
