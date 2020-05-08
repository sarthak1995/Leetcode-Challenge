/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let m = (coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0]);
    
    for(let i = 3;i<coordinates.length;i++){
        if(((coordinates[i][1]-coordinates[i-1][1])/(coordinates[i][0]-coordinates[i-1][0]))!=m)
            return false;
    }
    return true;
};