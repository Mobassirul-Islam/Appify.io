import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
	const [apps, setApps] = useState([]);
	const [loading, setLoading] = useState(true);
	const [err, setErr] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios("../apps.json")
			.then((data) => setApps(data.data))
			.catch((error) => setErr(error))
			.finally(() => setLoading(false));
	}, []);

	return { apps, loading, err };
};

export default useApps;
