import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function NavBar({ nameCmp }) {
  return (
    <AppBar className={nameCmp} position="static">
      <Toolbar>
        <Typography variant="h4" color="primary">
          React Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
