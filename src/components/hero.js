import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Hero({ nameCmp }) {
  return (
    <Box className={nameCmp}>
      <Typography variant="h3" color="primary">
        ...
      </Typography>
    </Box>
  );
}

export default Hero;
