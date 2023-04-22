import styled from 'styled-components';

export interface ICanvas {
  readonly width?: string;
  readonly height?: string;
}

export const StyleCanvas = styled.canvas<ICanvas>`
  width: ${({ width }) => width || '60px'};
  height: ${({ height }) => height || '60px'};
`;
