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
      margin-left: -90%;
    }
    8% {
      margin-left: -90%;
    }
    10% {
      margin-left: -217%;
    }
    13% {
      margin-left: -217%;
    }
    15% {
      margin-left: -290%;
    }
    18% {
      margin-left: -290%;
    }
    20% {
      margin-left: -417%;
    }
    23% {
      margin-left: -417%;
    }
    25% {
      margin-left: -490%;
    }
    28% {
      margin-left: -490%;
    }
    30% {
      margin-left: -617%;
    }
    33% {
      margin-left: -617%;
    }
    35% {
      margin-left: -690%;
    }
    38% {
      margin-left: -690%;
    }
    40% {
      margin-left: -817%;
    }
    43% {
      margin-left: -817%;
    }
    45% {
      margin-left: -890%;
    }
    48% {
      margin-left: -890%;
    }
    50% {
      margin-left: -1017%;
    }
    53% {
      margin-left: -1017%;
    }
    55% {
      margin-left: -1090%;
    }
    58% {
      margin-left: -1090%;
    }
    60% {
      margin-left: -1217%;
    }
    63% {
      margin-left: -1217%;
    }
    65% {
      margin-left: -1290%;
    }
    68% {
      margin-left: -1290%;
    }
    70% {
      margin-left: -1417%;
    }
    73% {
      margin-left: -1417%;
    }
    75% {
      margin-left: -1490%;
    }
    78% {
      margin-left: -1490%;
    }
    80% {
      margin-left: -1617%;
    }
    83% {
      margin-left: -1617%;
    }
    85% {
      margin-left: -1690%;
    }
    88% {
      margin-left: -1690%;
    }
    90% {
      margin-left: -1817%;
    }
    93% {
      margin-left: -1817%;
    }
    95% {
      margin-left: -1890%;
    }
    98% {
      margin-left: -1890%;
    }
    100% {
      margin-left: 0%;
    }
  }
  &.bottom__slider {
    animation: leftSlideIn 120s ease-in-out infinite;
    @keyframes leftSlideIn {
      0% {
        margin-left: -1890%;
      }
      3% {
        margin-left: -1890%;
      }
      5% {
        margin-left: -1817%;
      }
      8% {
        margin-left: -1817%;
      }
      10% {
        margin-left: -1690%;
      }
      13% {
        margin-left: -1690%;
      }
      15% {
        margin-left: -1617%;
      }
      18% {
        margin-left: -1617%;
      }
      20% {
        margin-left: -1490%;
      }
      23% {
        margin-left: -1490%;
      }
      25% {
        margin-left: -1417%;
      }
      28% {
        margin-left: -1417%;
      }
      30% {
        margin-left: -1290%;
      }
      33% {
        margin-left: -1290%;
      }
      35% {
        margin-left: -1217%;
      }
      38% {
        margin-left: -1217%;
      }
      40% {
        margin-left: -1090%;
      }
      43% {
        margin-left: -1090%;
      }
      45% {
        margin-left: -1017%;
      }
      48% {
        margin-left: -1017%;
      }
      50% {
        margin-left: -890%;
      }
      53% {
        margin-left: -890%;
      }
      55% {
        margin-left: -817%;
      }
      58% {
        margin-left: -817%;
      }
      60% {
        margin-left: -690%;
      }
      63% {
        margin-left: -690%;
      }
      65% {
        margin-left: -617%;
      }
      68% {
        margin-left: -617%;
      }
      70% {
        margin-left: -490%;
      }
      73% {
        margin-left: -490%;
      }
      75% {
        margin-left: -417%;
      }
      78% {
        margin-left: -417%;
      }
      80% {
        margin-left: -290%;
      }
      83% {
        margin-left: -290%;
      }
      85% {
        margin-left: -217%;
      }
      88% {
        margin-left: -217%;
      }
      90% {
        margin-left: -90%;
      }
      93% {
        margin-left: -90%;
      }
      95% {
        margin-left: -17%;
      }
      98% {
        margin-left: -17%;
      }
      100% {
        margin-left: -1890%;
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
