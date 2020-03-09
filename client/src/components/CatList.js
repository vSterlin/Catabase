import React, {useState} from 'react'
import styled from "styled-components";
import DelayTransition from "./DelayTransition";
const SuperHugeTempThing = styled.div`
  font-size: 400px;

  @keyframes moveUp {
    from {
      transform: translateX(100vw);    }
    to {
      transform: translateX(0);
    }
  }

  animation: moveUp 1s linear;

`;

const SomeDiv = styled.div`
overflow: hidden;
`;

const CatList = (props) => {

  // const { delayTime, redirectWithDelay } = props;
  // const [leaving, useLeaving] = useState(false);

  return (
    <>
      {/* <SuperHugeTempThing onClick={() => {
              useLeaving(true)
              redirectWithDelay(delayTime, "/")
            }}>TEMP</SuperHugeTempThing> */}
                  <SuperHugeTempThing>TEMP</SuperHugeTempThing>
    </>
  )
}

export default DelayTransition(CatList);
