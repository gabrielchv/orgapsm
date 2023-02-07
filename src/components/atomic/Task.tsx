import React from "react";
import { Box, Text } from "native-base";

const Task = ({ name }: { name: string }) => {
  return (
    <Box>
      <Text>{name}</Text>
    </Box>
  );
};

export default Task;
