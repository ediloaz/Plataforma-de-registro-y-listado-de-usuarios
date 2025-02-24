import { useState, useEffect } from "react";
import locations from "@data/locations.json";
import { Resources } from "@theme/Resources";

export const useLocationForm = ({ document, register, setValue, setDocument }) => {
  const [provinces, setProvinces] = useState([]);
  const [cantons, setCantons] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCanton, setSelectedCanton] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [documentError, setDocumentError] = useState(false);

  const { logo } = Resources();

  useEffect(() => {
    if (document == false) {
      setDocumentError(true);
    } else {
      setDocumentError(false);
    }
  }, [document]);

  useEffect(() => {
    if (locations && locations?.provincias) {
      const provincesList = Object.entries(locations.provincias).map(([id, province]) => ({
        id,
        name: province.nombre,
      }));
      setProvinces(provincesList);
    }
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      setValue("province", selectedProvince);
      setValue("canton", '');
      setValue("district", '');
      const provinceData = locations.provincias[selectedProvince];
      if (provinceData && provinceData.cantones) {
        const cantonsList = Object.entries(provinceData.cantones).map(([id, canton]) => ({
          id,
          name: canton.nombre,
        }));
        setCantons(cantonsList);
        setDistricts([]);
        setSelectedCanton(null);
      }
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedProvince && selectedCanton) {
      setValue("canton", selectedCanton);
      setValue("district", '');
      const cantonData = locations.provincias[selectedProvince]?.cantones[selectedCanton];
      if (cantonData && cantonData.distritos) {
        const districtsList = Object.entries(cantonData.distritos).map(([id, district]) => ({
          id,
          name: district,
        }));
        setDistricts(districtsList);
      }
    }
  }, [selectedProvince, selectedCanton]);

  useEffect(() => {
    if (selectedProvince && selectedCanton && selectedDistrict) {
      setValue("district", selectedDistrict);
    }
  }, [selectedProvince, selectedCanton, selectedDistrict]);

  const handleOnChangeAddressLevel1 = (event) => {
    const selectedLevel1 = event.target.value; // value = id
    setSelectedProvince(selectedLevel1);
    setSelectedCanton(null);
    setSelectedDistrict(null);
    setDistricts([]);
  }

  const handleOnChangeAddressLevel2 = (event) => {
    const selectedLevel2 = event.target.value;
    setSelectedCanton(selectedLevel2);
  }

  const handleOnChangeAddressLevel3 = (event) => {
    const selectedLevel3 = event.target.value;
    setSelectedDistrict(selectedLevel3);
  }


  return {
    logo,
    provinces,
    cantons,
    districts,
    register,
    setValue,
    setDocument,
    documentError,
    handleOnChangeAddressLevel1,
    handleOnChangeAddressLevel2,
    handleOnChangeAddressLevel3,
  };
}