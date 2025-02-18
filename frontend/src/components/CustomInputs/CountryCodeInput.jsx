import { MenuItem } from "@mui/material";
import Flag from "react-world-flags";
import { SelectInput } from "@components/CustomInputs/SelectIput";
import { useStaticStore } from '@stores/useStaticStore';

export const CountryCodeInput = (props) => {
  const areaCodes = useStaticStore((state) => state.areaCodes);

  return (
    <SelectInput
      {...props} loading={areaCodes.length == 0}>
      {areaCodes?.map((country) => (
        <MenuItem key={country.alfa3} value={country.alfa3}>
          <Flag  code={country.alfa2} width="28" style={{ marginRight: "0.4em" }} />{" "}
          {country.pais}
        </MenuItem>
      ))}
    </SelectInput>
  );

}