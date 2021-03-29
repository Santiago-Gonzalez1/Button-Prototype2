import React from "react";

import Button from "./components/Button";
import Container from "./components/Container";
import Typography from "./components/Typography";
import useCounter from "./hooks/useCounter";

const Counter = ({ initialValue }) => {
  const { count, decrement, increment, } = useCounter({
    initialValue

  });

  
  
  return (
    <Container>
      <Button variant="primary" onClick={decrement}>
        -
      </Button>
      <Typography>{count}</Typography>
      <Button variant="secondary" onClick={increment}>
        +
      </Button>
      <image>
      <img src="https://i0.wp.com/elcontadorsv.com/wp-content/uploads/2016/10/rol-del-contador-gubernamental-salvador.jpg" alt="Button Logo" width="100px"/>
      </image>    
      <Button variant="exit" onClick>
      x
      </Button>
    </Container>
  );
};

Counter.displayName = "Counter";

export default Counter;
