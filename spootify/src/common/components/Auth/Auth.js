import { useEffect } from "react"
import { authURI } from "../../../api/auth"

const Auth = ({ spotifyToken, setSpotifyToken }) => {
	const logoutSpotify = () => {
		setSpotifyToken("")
		localStorage.removeItem("access_token")
	}

	useEffect(() => {
		const location = window.location.hash
		const access_token = location.split("&")[0].split("=")[1]

		localStorage.setItem("access_token", access_token)
		setSpotifyToken(access_token)
	}, [setSpotifyToken])

	return (
		<>
			{!spotifyToken ? (
				<a href={authURI}>Login to Spotify</a>
			) : (
				<button onClick={logoutSpotify}>Logout from spotify</button>
			)}
		</>
	)
}

export default Auth
