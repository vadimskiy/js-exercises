// Example of usage:
// const locations = [
//   ['Park', [10, 5]],
//   ['Sea', [1, 3]],
//   ['Museum', [8, 4]],
// ];
// const currentPoint = [5, 5];

// getTheNearestLocation([], currentPoint) // null
// getTheNearestLocation(locations, currentPoint) // ['Museum', [8, 4]]

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const getTheNearestLocation = (locations, point) => {
    if (locations.length === 0) {    
        return null;
    }

    const [x2, y2] = point;
    let start = getDistance(locations[0][1], [x2, y2]);
    let result = locations[0];
    for (let i = 0; i < locations.length; i += 1) {
        const [x1, y1] = locations[i][1];
        const currentDistance = getDistance([x1, y1], [x2, y2]);
        if (currentDistance < start) {
            start = currentDistance;
            result = locations[i];
        }
    }
    return result;
};
