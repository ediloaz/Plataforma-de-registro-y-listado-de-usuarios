import { Resources } from "@theme/Resources";

export const useBasicForm = () => {
  const { logo } = Resources();

  return {
    logo,
  };
}