import { useContext, useState, useEffect } from "react"
import io from "socket.io-client"
import useSound from "use-sound"
import config from "../../../config"
import LatestMessagesContext from "../../../contexts/LatestMessages/LatestMessages"
import TypingMessage from "./TypingMessage"
import Header from "./Header"
import Footer from "./Footer"
import Message from "./Message"
import "../styles/_messages.scss"

const socket = io(config.BOT_SERVER_ENDPOINT, {
	transports: ["websocket", "polling", "flashsocket"],
})

socket.on("connect", () => {
	socket.emit("bot-message", { botMessage: "Hello world" })

	socket.on("user-message", (userMessage) => {
		console.log(userMessage)
	})
})

function Messages() {
	const [playSend] = useSound(config.SEND_AUDIO_URL)
	const [playReceive] = useSound(config.RECEIVE_AUDIO_URL)
	const { setLatestMessage } = useContext(LatestMessagesContext)
	const [message, setMessage] = useState("")

	useEffect(() => {
		socket.on("bot-message", (botMessage) => {
			console.log(botMessage)
		})
	}, [socket])

	const sendMessage = () => {
		playSend()
		socket.emit("user-message", { userMessage: message })
	}

	const onChangeMessage = (event) => setMessage(event.target.value)

	return (
		<div className="messages">
			<Header />
			<div className="messages__list" id="message-list">
				<Message message={message} />
			</div>
			<Footer
				message={message}
				sendMessage={sendMessage}
				onChangeMessage={onChangeMessage}
			/>
		</div>
	)
}

export default Messages
