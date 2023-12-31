// Get Note: Sends a GET request and returns user note data with ID.

import axios from "axios";

export default async function getNote(id) {
	// Send GET request for user note with ID:
	const { data } = await axios.get("/api/notes/" + id);

	// Return response data:
	return data;
}