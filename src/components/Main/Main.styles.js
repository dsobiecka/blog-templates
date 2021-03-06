import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem 3.5rem 10rem 3.5rem;

  @media (max-width: 840px) {
    padding: 0rem 2rem 6rem 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const MainTitle = styled.p`
  font-size: 60px;
  position: relative;
  color: ${(layoutColor) => layoutColor.theme.fontColor};
  :before {
    content: '';
    background-color: ${(layoutColor) => layoutColor.theme.yellow};
    width: 50%;
    height: 20%;
    position: absolute;
    left: 0;
    bottom: 22%;
    transform: rotate(-1deg);
    z-index: -1;
  }
`;

export const Articles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px 20px;
  padding: 8px;

  .box {
    display: none;
    height: 400px;
    p {
      display: none;
    }
  }

  .box1 {
    grid-column: 1 / 2;
    display: flex;
  }

  .box2 {
    grid-column: 2 / 3;
    display: flex;
  }

  .box3 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
  }

  .box7 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(6, 1fr);

    .box {
      display: block;
      p {
        display: none;
      }
    }

    .box11 {
      display: none;
    }

    .box1 {
      grid-column: 1/7;
      grid-row: 1/5;
    }

    .box2 {
      grid-column: 1/4;
      grid-row: 5/9;
    }

    .box3 {
      grid-column: 4/7;
      grid-row: 5/9;
    }

    .box4 {
      grid-column: 1/4;
      grid-row: 9/10;
    }

    .box5 {
      grid-column: 4/7;
      grid-row: 9/10;
    }

    .box6 {
      grid-column: 1/4;
      grid-row: 11/12;
    }

    .box7 {
      grid-column: 4/7;
      grid-row: 11/12;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(8, auto);
    grid-template-rows: repeat(12, auto);
    grid-template-areas:
      'box-1 box-1 box-1 box-1 box-1 box-1 box-1 box-1'
      'box-1 box-1 box-1 box-1 box-1 box-1 box-1 box-1'
      'box-1 box-1 box-1 box-1 box-1 box-1 box-1 box-1'
      'box-2 box-2 box-3 box-3 box-3 box-3 box-3 box-3'
      'box-2 box-2 box-3 box-3 box-3 box-3 box-3 box-3'
      'box-2 box-2 box-3 box-3 box-3 box-3 box-3 box-3'
      'box-4 box-4 box-4 box-4 box-4 box-4 box-5 box-5'
      'box-4 box-4 box-4 box-4 box-4 box-4 box-5 box-5'
      'box-4 box-4 box-4 box-4 box-4 box-4 box-5 box-5'
      'box-6 box-6 box-7 box-7 box-7 box-7 box-7 box-7'
      'box-6 box-6 box-7 box-7 box-7 box-7 box-7 box-7'
      'box-6 box-6 box-7 box-7 box-7 box-7 box-7 box-7';

    .box {
      p {
        display: block;
      }
    }

    .box1 {
      grid-area: box-1;
      height: 600px;
    }

    .box2 {
      grid-area: box-2;
      p {
        display: none;
      }
    }

    .box3 {
      grid-area: box-3;
    }

    .box4 {
      grid-area: box-4;
    }

    .box5 {
      grid-area: box-5;
      p {
        display: none;
      }
    }

    .box6 {
      grid-area: box-6;
      p {
        display: none;
      }
    }

    .box7 {
      grid-area: box-7;
    }

    .box8 {
      grid-area: box-8;
    }

    .box9 {
      grid-area: box-9;
      p {
        display: none;
      }
    }

    .box10 {
      grid-area: box-10;
      p {
        display: none;
      }
    }

    .box11 {
      grid-area: box-11;
      display: flex;
    }
  }
`;
