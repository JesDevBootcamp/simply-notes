// Heading: Displays a title and/or subtitle.

import "../styles/heading.scss";

export default function Heading({ title, subtitle, children }) {
	return (
		<header className="heading">
			{title && (
				<h2 className="heading-title">{title}</h2>
			)}
			{subtitle && (
				<h3 className="heading-subtitle">{subtitle}</h3>
			)}
			<div className="heading-content">
				{children}
			</div>
		</header>
	);
}