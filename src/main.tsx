import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./assets/css/index.css";

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ReactQueryDevtools
				position={"top-left"}
				closeButtonProps={{ style: { top: 0, bottom: "unset" } }}
				initialIsOpen={false}
			/>
		</QueryClientProvider>
	</React.StrictMode>
);
