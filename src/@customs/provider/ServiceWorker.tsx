import React from "react";
import { useServiceWorker } from "@customs/hooks/useServiceWorker";

const ServiceWorker: React.FC = () => {
	const { update, updateAvailable } = useServiceWorker(300 * 1000);
	if (updateAvailable) {
		update();
	}

	return null;
}

export default ServiceWorker;