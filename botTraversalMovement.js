var directionObj = require('./directionObject');
var bot = require('./botObject');
var fs = require('fs');
var path ='/Users/rishabsaxena/Documents/botTraversal/sampleTest.txt';
var fileArray = fs.readFileSync(path).toString().split('\n');
var gridSizeArray = fileArray[0].split(' ');
var initialPositionArray = fileArray[1].split(' ');
var currentX = Number(initialPositionArray[0]);
var currentY = Number(initialPositionArray[1]);
var currentDirection = initialPositionArray[2];
var maximumX = Number(gridSizeArray[0]);
var maximumY = Number(gridSizeArray[1]);
var traversalString = fileArray[2];
var temporaryX;
var temporaryY;
var numOfSteps = traversalString.length;
botTraversalMovement();
function botTraversalMovement()
{
for(i=0; i<numOfSteps; i++)
{
  if(traversalString[i] === 'M' && currentDirection === 'N' )
  {
     temporaryX = currentX;
     temporaryY = currentY - 1;
    checkBoundArea(temporaryX,temporaryY,currentDirection);
  }
  if(traversalString[i] === 'M' && currentDirection === 'S')
  {
    temporaryX = currentX;
     temporaryY = currentY + 1;
    checkBoundArea(temporaryX,temporaryY,currentDirection);
  }
  if(traversalString[i] === 'M' && currentDirection === 'E')
  {
      temporaryX = currentX + 1;
     temporaryY = currentY ;
    checkBoundArea(temporaryX,temporaryY,currentDirection);
  }
  if(traversalString[i] === 'M' && currentDirection === 'W')
  {
    temporaryX = currentX -1;
     temporaryY = currentY;
     checkBoundArea(temporaryX,temporaryY,currentDirection);
  } 
  if(traversalString[i] === 'L' || currentDirection === 'N')
  {
      currentDirection = 'W';
  }
  if(traversalString[i] === 'R' || currentDirection === 'N')
  {
      currentDirection = 'E';
  }
  if(traversalString[i] === 'L' || currentDirection === 'S')
  {
      currentDirection = 'E';
  }
  if(traversalString[i] === 'R' || currentDirection === 'S')
  {
      currentDirection = 'W';
  }
   if(traversalString[i] === 'L' || currentDirection === 'E')
  {
      currentDirection = 'N';
  }
  if(traversalString[i] === 'R' || currentDirection === 'E')
  {
      currentDirection = 'S';
  }
   if(traversalString[i] === 'L' || currentDirection === 'W')
  {
      currentDirection = 'S';
  }
  if(traversalString[i] === 'R' || currentDirection === 'W')
  {
      currentDirection = 'N';
  }
}
console.log(currentX,currentY,currentDirection);
}
function checkBoundArea(valueX,valueY,valueDirection)
{
  if(((valueX>=0) && (valueX< maximumX)))
{
        currentX = valueX;
}
  if(((valueY>=0) && (valueY< maximumY)))
{
        currentY = valueY;
}
}