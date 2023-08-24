import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as MainViews from "@modules/main/views";
import * as DashboardViews from "@modules/dashboard/views";
import * as AuthViews from "@modules/auths/views";


import React from "react";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<MainViews.HomeView />} />
				<Route path="my-dashboard" element={<DashboardViews.MyDashboardView />}/>
				<Route path="login" element={<AuthViews.LoginView />} />
				<Route path="register" element={<AuthViews.RegisterView />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;
