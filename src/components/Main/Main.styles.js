import styled from 'styled-components';

export const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.ld};
  position: relative;
  :before {
    content: '';
    background-color: #efe960;
    width: 70%;
    height: 20%;
    position: absolute;
    left: 0;
    bottom: 22%;
    transform: rotate(-1deg);
    z-index: -1;
  }
`;

export const Wrapper = styled.div`
  padding: 6rem 1.5rem 2.2rem 1.5rem;
`;

export const Articles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 8px;

  .box {
    display: none;
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
    grid-template-columns: repeat(5, 195px);
    grid-template-rows: repeat(5, 115px);
    grid-template-areas:
      'box-1 box-1 box-1 box-2 box-2'
      'box-1 box-1 box-1 box-2 box-2'
      'box-1 box-1 box-1 box-3 box-4'
      'box-5 box-6 box-7 box-7 box-8'
      'box-9 box-10 box-7 box-7 box-11';

    .box1 {
      grid-area: box-1;
    }

    .box2 {
      grid-area: box-2;
    }

    .box3 {
      grid-area: box-3;
    }

    .box4 {
      grid-area: box-4;
    }

    .box5 {
      grid-area: box-5;
    }

    .box6 {
      grid-area: box-6;
    }

    .box7 {
      grid-area: box-7;
    }

    .box8 {
      grid-area: box-8;
    }

    .box9 {
      grid-area: box-9;
    }

    .box10 {
      grid-area: box-10;
    }

    .box11 {
      grid-area: box-11;
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);

    .box {
      display: block;
    }

    .box11 {
      display: none;
    }

    .box1 {
      grid-column: 1/4;
      grid-row: 1/4;
    }

    .box2 {
      grid-column: 4/7;
      grid-row: 1/4;
    }

    .box7 {
      grid-column: 1/4;
      grid-row: 5/7;
    }

    .box3 {
      grid-column: 4/7;
      grid-row: 5/7;
    }

    .box5 {
      grid-column: 1/3;
      grid-row: 7/8;
    }

    .box9 {
      grid-column: 3/5;
      grid-row: 7/8;
    }

    .box8 {
      grid-column: 5/7;
      grid-row: 7/8;
    }

    .box6 {
      grid-column: 1/3;
      grid-row: 10/11;
    }

    .box10 {
      grid-column: 3/5;
      grid-row: 10/11;
    }

    .box4 {
      grid-column: 5/7;
      grid-row: 10/11;
    }
  }
`;
