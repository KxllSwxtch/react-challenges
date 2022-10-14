import axios from "axios"

const baseUrl = process.env.REACT_APP_SPOTIFY_BASE_URL

export const getNewReleases = async (spotifyToken) => {
	const response = await axios.get(`${baseUrl}/browse/new-releases`, {
		headers: { Authorization: `Bearer ${spotifyToken}` },
	})
	const newReleases = response.data.albums.items
	return newReleases
}

export const getFeaturedPlaylists = async (spotifyToken) => {
	const response = await axios.get(`${baseUrl}/browse/featured-playlists`, {
		headers: { Authorization: `Bearer ${spotifyToken}` },
	})
	const featuredPlaylists = response.data.playlists.items
	return featuredPlaylists
}

export const getCategories = async (spotifyToken) => {
	const response = await axios.get(`${baseUrl}/browse/categories`, {
		headers: { Authorization: `Bearer ${spotifyToken}` },
	})
	const categories = response.data.categories.items
	return categories
}
