import styled from 'styled-components';

export interface IContainer {
  readonly color?: string;
  readonly height?: string;
  readonly width?: string;
}

export const Container = styled.ul<IContainer>`
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    position: relative;
    list-style: none;
    width: ${({ width }) => width || '60px'};
    height: ${({ height }) => height || '60px'};
    margin: 0 30px;
    transform: rotate(-30deg) skew(25deg);
  }

  li {
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ color }) => color || 'palevioletred'};
      transition: 0.5s;
      display: flex !important;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 30px !important;
    }

    :hover {
      span:nth-child(5) {
        transform: translate(40px, -40px);
        opacity: 1;
      }

      span:nth-child(4) {
        transform: translate(30px, -30px);
        opacity: 0.8;
      }

      span:nth-child(3) {
        transform: translate(20px, -20px);
        opacity: 0.6;
      }

      span:nth-child(2) {
        transform: translate(10px, -10px);
        opacity: 0.4;
      }

      span:nth-child(1) {
        transform: translate(0, 0);
        opacity: 0.2;
      }
    }
  }
`;
