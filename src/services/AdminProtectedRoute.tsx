import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { RootState } from "../store/store";

interface AdminProtectedRouteProps {
	path?: string;
	element: React.ReactNode;
	children?: Array<{ path: string; element: React.ReactNode }>;
}

interface DecodedToken {
	role: string;
	exp: number;
}

const AdminProtectedRoute = ({ element }: AdminProtectedRouteProps) => {
	const { accessToken } = useSelector((state: RootState) => state.auth);

	if (!accessToken) {
		return <Navigate to="/admin/login" replace />;
	}

	try {
		const decodedToken: DecodedToken = jwtDecode(accessToken);

		if (decodedToken.role !== "ADMIN") {
			return <Navigate to="/unauthorized" replace />;
		}

		const currentTime = Math.floor(Date.now() / 1000);

		if (decodedToken.exp < currentTime) {
			return <Navigate to="/admin/login" replace />;
		}
	} catch (error) {
		console.error("Invalid token:", error);
		return <Navigate to="/" replace />;
	}

	return <>{element}</>;
};

export default AdminProtectedRoute;
