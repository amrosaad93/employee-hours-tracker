import { Container } from "@material-ui/core";
import InputArea from "./InputArea";
import Records from "./Records";

import React from "react";

const Body = () => {
  return (
    <Container>
      <InputArea />
      <Records />
    </Container>
  );
};

export default Body;
