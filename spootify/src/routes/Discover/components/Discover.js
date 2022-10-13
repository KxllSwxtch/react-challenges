import { useState, useEffect } from "react"
import axios from "axios"
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock"
import "../styles/_discover.scss"

const baseUrl = process.env.REACT_APP_SPOTIFY_BASE_URL
const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET

// For authorization purposes
const authEndpoint = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT
const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
const responseType = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE

const authURI = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=${responseType}&show_dialog=true`

const Discover = () => {
	const [newReleases, setNewReleases] = useState([])
	const [playlists, setPlaylists] = useState([])
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const getNewReleases = async () => {
			const response = await axios.get(`${baseUrl}/browse/new-releases`)
			console.log(response.data)
		}
	}, [])

	return (
		<div className="discover">
			<a href={authURI}>Login to Spotify</a>
			<DiscoverBlock
				text="RELEASED THIS WEEK"
				id="released"
				data={newReleases}
			/>
			<DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
			<DiscoverBlock
				text="BROWSE"
				id="browse"
				data={categories}
				imagesKey="icons"
			/>
		</div>
	)
}

export default Discover
