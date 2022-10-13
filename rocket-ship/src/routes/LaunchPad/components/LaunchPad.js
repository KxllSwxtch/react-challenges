import { useState } from "react"
import { FunctionalRocket } from "./Rocket"
import "../styles/_launchpad.scss"

export default function LaunchPad() {
	const [initialLaunchTime] = useState(Date.now())

	return (
		<div className="launchpad">
			<FunctionalRocket initialLaunchTime={initialLaunchTime} />
		</div>
	)
}
