import { Types } from '@cornerstonejs/core';

function isWithinThreshold(
  index: number,
  imageVolume: Types.IImageVolume,
  strategySpecificConfiguration: any,
  thresholdKey = 'THRESHOLD_INSIDE_CIRCLE'
) {
  const voxelValue = imageVolume.getScalarData()[index];
  const { threshold } = strategySpecificConfiguration[thresholdKey];

  return threshold[0] <= voxelValue && voxelValue <= threshold[1];
}

export default isWithinThreshold;
