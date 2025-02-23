import { useTheme } from "@mui/material";
import { useGetAllUsers } from "@services/users.service";

export const useListUsers = () => {
  const theme = useTheme();
  
  const { data: users, isLoading } = useGetAllUsers();

  return {
    theme,
    users: users || [],
  }
}