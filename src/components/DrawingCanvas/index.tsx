import { useOnDraw } from '../../hooks/DrawingCanvas.hooks';
import { StyleCanvas } from './DrawingCanvas.styles';

interface IDrawingCanvas {
  width: string;
  height: string;
  backgroundColor?: string;
  backgroundImageSrc?: string;
  lineColor?: string;
  lineWidth?: number;
  lineDash?: number[];
}

export default function DrawingCanvas({
  width,
  height,
  backgroundColor,
  backgroundImageSrc,
  lineColor = '#000000',
  lineWidth = 5,
  lineDash = [],
}: IDrawingCanvas) {
  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

  function onDraw(ctx: any, point: any, prevPoint: any) {
    drawLine(prevPoint, point, ctx, lineColor, lineWidth, lineDash);
  }

  function drawLine(
    start: { x: any; y: any },
    end: { x: any; y: any },
    ctx: any,
    lineColor: string,
    lineWidth: number,
    lineDash: number[]
  ) {
    start = start ?? end;
    ctx.setLineDash(lineDash);
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();

    if (backgroundImageSrc) {
      const background = new Image();
      background.src = backgroundImageSrc;

      background.onload = function () {
        ctx.drawImage(background, 0, 0);
      };
    }
  }

  return (
    <StyleCanvas
      id='canvas'
      width={width}
      height={height}
      ref={setCanvasRef}
      onMouseDown={onCanvasMouseDown}
      style={
        !backgroundImageSrc
          ? { backgroundColor: backgroundColor || 'gray' }
          : {}
      }
    />
  );
}
