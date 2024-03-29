import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./scss/reset.scss";
import "./scss/main.scss";
import store from "./redux/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
