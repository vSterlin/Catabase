import React, {useState} from 'react'
import styled from "styled-components";
import DelayTransition from "./DelayTransition";

const SuperHugeTempThing = styled.div`
  font-size: 400px;

  

`;

const DivWrapper = styled.div`

@keyframes moveLeft {
    from {
      transform: translateX(100vw);    }
    to {
      transform: translateX(0);
    }
  }

  animation: moveLeft 1s linear;
`;

const CatList = (props) => {

  // const { delayTime, redirectWithDelay } = props;
  // const [leaving, useLeaving] = useState(false);

  return (
    <DivWrapper>
      {/* <SuperHugeTempThing onClick={() => {
              useLeaving(true)
              redirectWithDelay(delayTime, "/")
            }}>TEMP</SuperHugeTempThing> */}
                  <SuperHugeTempThing>TEMP</SuperHugeTempThing>
    </DivWrapper>
  )
}

export default DelayTransition(CatList);
