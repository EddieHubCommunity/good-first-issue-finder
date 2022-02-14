export function calculateFontColor(hexColor: string, threshold?: number): string {
  const pThreshold = threshold || 0.5;
  const sanitized = hexColor.replace('#', '');
  const red = parseInt(sanitized.substring(0, 2), 16);
  const green = parseInt(sanitized.substring(2, 4), 16);
  const blue = parseInt(sanitized.substring(4, 6), 16);

  const pRed = 0.299;
  const pGreen = 0.587;
  const pBlue = 0.114;

  const contrast = Math.sqrt(
    pRed * (red / 255) ** 2 + pGreen * (green / 255) ** 2 + pBlue * (blue / 255) ** 2,
  );

  return contrast > pThreshold ? '#000000' : '#ffffff';
}
