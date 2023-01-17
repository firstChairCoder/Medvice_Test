import { useEffect, useState } from "react";

import { doctorApi } from "../services/api";

type UseDoctorDataResponse = [IDoctor | undefined, boolean];
export default function useDoctorData(): UseDoctorDataResponse {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IDoctor>();

  useEffect(() => {
    async function fetchDoctorData() {
      setIsLoading(true);

      try {
        const response = await doctorApi.get<IDoctor>("");

        setData(response.data);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDoctorData();
  }, []);

  return [data, isLoading];
}
