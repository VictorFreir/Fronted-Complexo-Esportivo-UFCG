import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import logo from "../../gifs/error.gif";

const ErrorPage = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"80vh"}
      gap={5}
      margin={"25px"}
    >
    <img src={logo} alt="erro"/>
      <Typography
        h1
        width={"fit-content"}
        lineHeight={1}
        fontWeight={600}
        textAlign={"center"}
        color={theme.palette.primary.on_container}
        whiteSpace={"nowrap"}
        fontSize={{ xs: "2em", sm: "4em", md: "5em" }}
      >
        Algo deu errado
      </Typography>
      <Typography
        h2
        color={theme.palette.secondary.main}
        width={{ xs: "380px", md: "680px" }}
        fontSize={{ xs: "1em", sm: "2.2em", md: "2.4em" }}
        textAlign={"center"}
        marginTop={-3}
      >
        Código informado está incorreto.
      </Typography>

      <Typography
        h2
        color={theme.palette.secondary.main}
        width={{ xs: "380px", md: "680px" }}
        fontSize={{ xs: "1em", sm: "2.2em", md: "2.4em" }}
        textAlign={"center"}
        marginTop={-3}
      >
        Tente novamente!
      </Typography>
    </Box>
  );
};

export default ErrorPage;