import {useCallback, useEffect, useRef, useState} from "react";
import { register } from "register-service-worker";


export const useServiceWorker = (timeout: number) => {
  const [updateAvailable, setUpdateAvailable] = useState<boolean>(false);
  const registerRef = useRef<ServiceWorkerRegistration>();

  useEffect(() => {
    const interval = setInterval(() => {
			if (registerRef.current) {
				registerRef.current.update();
			}
    }, timeout) as unknown as number;

		return () => clearInterval(interval);
  }, [timeout]);

	const onRegistered = (registration: ServiceWorkerRegistration) => {
		registerRef.current = registration;
	};

	const onUpdate = (registration: ServiceWorkerRegistration) => {
		setUpdateAvailable(!!registration?.waiting);
	}

	const update = useCallback(() => {
		if (updateAvailable && registerRef.current?.waiting) {
			registerRef.current.waiting.postMessage("update");
		}
	}, [updateAvailable]);

	useEffect(() => {
		// console.log("lewat sini");
		register("/sw.js", {
			registered: onRegistered,
			updated: onUpdate,
			error: (error: any) => {
				console.log("error", error);
			}
		});
	}, []);

	return { update, updateAvailable };
};
