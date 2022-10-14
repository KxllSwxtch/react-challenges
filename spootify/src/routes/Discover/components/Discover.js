import { useState, useEffect } from "react"
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock"
import Auth from "../../../common/components/Auth/Auth"
import {
	getNewReleases,
	getFeaturedPlaylists,
	getCategories,
} from "../../../api/discover-api"
import "../styles/_discover.scss"

const Discover = () => {
	const [spotifyToken, setSpotifyToken] = useState(
		localStorage.getItem("access_token")
	)
	const [newReleases, setNewReleases] = useState([])
	const [playlists, setPlaylists] = useState([])
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const getData = async () => {
			const newReleases = await getNewReleases(spotifyToken)
			setNewReleases(newReleases)

			const featuredPlaylists = await getFeaturedPlaylists(spotifyToken)
			setPlaylists(featuredPlaylists)

			const browseCategories = await getCategories(spotifyToken)
			setCategories(browseCategories)
		}

		getData()
	}, [spotifyToken])

	return (
		<div className="discover">
			<Auth spotifyToken={spotifyToken} setSpotifyToken={setSpotifyToken} />
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
