const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listaEmpleos: []
		},
		actions: {
			fetchEmpleos: async () => {
				const URL = "https://jooble.org/api/dec6c08a-f66d-4594-a149-7c4502acb21c";
				// const URL = "https://swapi.dev/api/people/";
				// const URL = "https://jobs.github.com/positions.json";
				const CONFIG = {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: '{ "keywords": "it", "location": "Costa Rica" }'
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log("***DATA***", json);
				setStore({ listaEmpleos: json.jobs });
			}
			// setFavorites: name => {
			// 	const store = getStore();
			// 	setStore({ favorites: [...store.favorites, name] });
			// }
		}
	};
};

export default getState;
