import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import logo from "../../gifs/check.gif";
import { useNavigate } from "react-router-dom";

const RedefinePasswordCheck = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

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
      <img src={logo} alt="erro" width={"180px"} />
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
        Tudo certo!
      </Typography>
      <Typography
        h2
        color={theme.palette.secondary.main}
        width={{ xs: "380px", md: "680px" }}
        fontSize={{ xs: "1em", sm: "2em", md: "2.2em" }}
        textAlign={"center"}
        marginTop={-3}
      >
        Redefinição de senha feita com sucesso.
      </Typography>

      <Typography
        h2
        color={theme.palette.secondary.main}
        width={{ xs: "380px", md: "680px" }}
        fontSize={{ xs: "1em", sm: "2.2em", md: "2.4em" }}
        textAlign={"center"}
        marginTop={-3}
      >
        Se divirta!
      </Typography>
    </Box>
  );
};

export default RedefinePasswordCheck;
