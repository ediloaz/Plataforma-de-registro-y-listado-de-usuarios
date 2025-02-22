import { useTheme } from "@mui/material";
import { useGetAllUsers } from "@services/users.service";

export const useListUsers = () => {
  const temp = useGetAllUsers();
  console.log('temp', temp)
  const theme = useTheme();

  return {
    theme,
    users: temp?.data || [],
  }
}