let width: number;
let height: number;
let gradient: CanvasGradient | undefined;

export function getGradient(
  ctx: CanvasRenderingContext2D,
  chartArea: { top: number; bottom: number; left: number; right: number }
): CanvasGradient {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;

  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(1, "red");
  }

  return gradient;
}
