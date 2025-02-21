import { MenuItem } from "@mui/material";
import Flag from "react-world-flags";
import { SelectInput } from "@components/CustomInputs/SelectInput";
import { countries } from '@constants/countries';

export const AreaCodeInput = (props) => {
  return (
    <SelectInput
      {...props}>
      {countries?.map((country) => (
        <MenuItem key={country.code} value={country.code}>
          <Flag code={country.code} width="28" style={{ marginRight: "0.4em" }} />{" "}
          {country.name}
        </MenuItem>
      ))}
    </SelectInput>
  );

}