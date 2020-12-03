import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  perspective: 55vw;
  backface-visibility: visible;
`;

const ItemList = styled.div`
  display: flex;
  width: calc(100% * 20);
  animation: rightSlideIn 120s ease-in-out infinite;
  @keyframes rightSlideIn {
    0% {
      margin-left: -17%;
    }
    3% {
      margin-left: -17%;
    }
    5% {
      margin-left: -83%;
    }
    8% {
      margin-left: -83%;
    }
    10% {
      margin-left: -217%;
    }
    13% {
      margin-left: -217%;
    }
    15% {
      margin-left: -283%;
    }
    18% {
      margin-left: -283%;
    }
    20% {
      margin-left: -417%;
    }
    23% {
      margin-left: -417%;
    }
    25% {
      margin-left: -483%;
    }
    28% {
      margin-left: -483%;
    }
    30% {
      margin-left: -617%;
    }
    33% {
      margin-left: -617%;
    }
    35% {
      margin-left: -683%;
    }
    38% {
      margin-left: -683%;
    }
    40% {
      margin-left: -817%;
    }
    43% {
      margin-left: -817%;
    }
    45% {
      margin-left: -883%;
    }
    48% {
      margin-left: -883%;
    }
    50% {
      margin-left: -1017%;
    }
    53% {
      margin-left: -1017%;
    }
    55% {
      margin-left: -1083%;
    }
    58% {
      margin-left: -1083%;
    }
    60% {
      margin-left: -1217%;
    }
    63% {
      margin-left: -1217%;
    }
    65% {
      margin-left: -1283%;
    }
    68% {
      margin-left: -1283%;
    }
    70% {
      margin-left: -1417%;
    }
    73% {
      margin-left: -1417%;
    }
    75% {
      margin-left: -1483%;
    }
    78% {
      margin-left: -1483%;
    }
    80% {
      margin-left: -1617%;
    }
    83% {
      margin-left: -1617%;
    }
    85% {
      margin-left: -1683%;
    }
    88% {
      margin-left: -1683%;
    }
    90% {
      margin-left: -1817%;
    }
    93% {
      margin-left: -1817%;
    }
    95% {
      margin-left: -1883%;
    }
    98% {
      margin-left: -1883%;
    }
    100% {
      margin-left: 0%;
    }
  }
  &.bottom__slider {
    animation: leftSlideIn 120s ease-in-out infinite;
    @keyframes leftSlideIn {
      0% {
        margin-left: -1883%;
      }
      3% {
        margin-left: -1883%;
      }
      5% {
        margin-left: -1817%;
      }
      8% {
        margin-left: -1817%;
      }
      10% {
        margin-left: -1683%;
      }
      13% {
        margin-left: -1683%;
      }
      15% {
        margin-left: -1617%;
      }
      18% {
        margin-left: -1617%;
      }
      20% {
        margin-left: -1483%;
      }
      23% {
        margin-left: -1483%;
      }
      25% {
        margin-left: -1417%;
      }
      28% {
        margin-left: -1417%;
      }
      30% {
        margin-left: -1283%;
      }
      33% {
        margin-left: -1283%;
      }
      35% {
        margin-left: -1217%;
      }
      38% {
        margin-left: -1217%;
      }
      40% {
        margin-left: -1083%;
      }
      43% {
        margin-left: -1083%;
      }
      45% {
        margin-left: -1017%;
      }
      48% {
        margin-left: -1017%;
      }
      50% {
        margin-left: -883%;
      }
      53% {
        margin-left: -883%;
      }
      55% {
        margin-left: -817%;
      }
      58% {
        margin-left: -817%;
      }
      60% {
        margin-left: -683%;
      }
      63% {
        margin-left: -683%;
      }
      65% {
        margin-left: -617%;
      }
      68% {
        margin-left: -617%;
      }
      70% {
        margin-left: -483%;
      }
      73% {
        margin-left: -483%;
      }
      75% {
        margin-left: -417%;
      }
      78% {
        margin-left: -417%;
      }
      80% {
        margin-left: -283%;
      }
      83% {
        margin-left: -283%;
      }
      85% {
        margin-left: -217%;
      }
      88% {
        margin-left: -217%;
      }
      90% {
        margin-left: -83%;
      }
      93% {
        margin-left: -83%;
      }
      95% {
        margin-left: -17%;
      }
      98% {
        margin-left: -17%;
      }
      100% {
        margin-left: -1883%;
      }
    }
  }
`;

const Slide = ({ children, bottom }) => (
  <Container>
    <ItemList className={bottom ? "bottom__slider" : "top__slider"}>
      {children}
    </ItemList>
  </Container>
);

Slide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Slide;
