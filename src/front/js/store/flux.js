const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listaEmpleos: [],
			favorites: [],
			perfilRegistrado: [],
			token: null
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
			},
			// setFavorites: title => {
			// 	// FUNCION PARA OBTENER EL STORE getStore()
			// 	const store = getStore();
			// 	// FUNCION PARA GUARDAR EL STORE setStore
			// 	//Operador spread para generar un arreglo nuevo con el title agregado
			// 	setStore({ favorites: [...store.favorites, title] });
			// 	console.log(store.favorites);
			// },

			syncTokenFromSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				console.log("Aplication just loaded, sy...");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},

			logout: () => {
				const token = sessionStorage.removeItem("token");
				console.log("Login out");
				setStore({ token: null });
			},

			login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				try {
					const resp = await fetch("https://3001-cyan-limpet-9tz3kb8y.ws-us04.gitpod.io/api/token", opts);
					if (resp.status !== 200) {
						alert("Por favor, complete los campos solicitados para continuar");
						return false;
					}
					const data = await resp.json();
					console.log("This came from the backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token });
					return true;
				} catch (error) {
					console.error("Error en Iniciar Sesión!");
				}
			},

			fetchPerfilRegistrado: async () => {
				const URL = "https://3001-cyan-limpet-9tz3kb8y.ws-us04.gitpod.io/api/registro";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					},
					body: {}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log("***DATA***", json);
				setStore({ perfilRegistrado: json.email });
			},

			getMessage: () => {
				const store = getStore();
				const opts = {
					headers: {
						Authorization: "Bearer " + store.token
					}
				};
				fetch(process.env.BACKEND_URL + "/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Cargando un error desde el Backend", error));
			}
		}
	};
};

export default getState;
