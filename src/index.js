import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter basename="/React-Tours-App/public/index.html">
		<Routes>
			<Route path="/" Component={App} />
			
		</Routes>
		
	</BrowserRouter>
);
