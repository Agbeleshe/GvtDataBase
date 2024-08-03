import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Category = () => {
  const md = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      style={{
        height: md ? '900px' : "600px",
        backgroundColor: "green",
      }}
    >
      Category
    </Box>
  );
};
export default Category;
