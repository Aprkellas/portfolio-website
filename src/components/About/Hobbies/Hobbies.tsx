import { useEffect } from "react";
import { useLang } from "../../../context/LanguageContext.tsx";
import "./hobbies.css";

declare global {
	interface Window {
		instgrm?: {
			Embeds?: {
				process: () => void;
			};
		};
	}
}

const instagramPostUrl = "https://www.instagram.com/p/C-7AN8ztOJd/";

export function Hobbies() {
	const { t } = useLang();
	const hobbies = t.aboutme.hobbiesContent;

	useEffect(() => {
		const existingScript = document.querySelector(
			'script[src="https://www.instagram.com/embed.js"]'
		);

		if (!existingScript) {
			const script = document.createElement("script");
			script.async = true;
			script.src = "https://www.instagram.com/embed.js";
			script.onload = () => window.instgrm?.Embeds?.process();
			document.body.appendChild(script);
			return;
		}

		window.instgrm?.Embeds?.process();
	}, []);

	return (
		<div className="editor hobbies">
			<h2>{hobbies.title}</h2>

			<div className="hobbies__layout">
				<div className="hobbies__copy">
					<p>{hobbies.paragraphOne}</p>

					<p>{hobbies.paragraphTwo}</p>

					<ul className="hobbies__list">
						{hobbies.tags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				</div>

				<div className="hobbies__media">
					<blockquote
						aria-label="Instagram post embed"
						className="instagram-media"
						data-instgrm-allow-transparency
						data-instgrm-captioned
						data-instgrm-permalink={instagramPostUrl}
						data-instgrm-version="14"
						style={{
							background: "#fff",
							border: 0,
							borderRadius: 12,
							boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
							margin: 0,
							maxWidth: "100%",
							minWidth: 0,
							padding: 0,
							width: "100%",
						}}
					>
						<a href={instagramPostUrl} target="_blank" rel="noreferrer noopener">
							View the Instagram post
						</a>
					</blockquote>

					<p className="hobbies__fallback">
						{hobbies.embedFallback}
					</p>
				</div>
			</div>
		</div>
	);
}
