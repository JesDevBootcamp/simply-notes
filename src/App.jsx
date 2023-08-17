// App: Component containing the entire application.

import { Route, Routes } from "react-router-dom";

import EditorPage from "./pages/EditorPage";

import "./styles/app.scss";

export default function App() {
	return (
		<Routes>
			<Route path="*" element={<EditorPage />} />
		</Routes>
	);
}