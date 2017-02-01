// var directionObject
// {
//   directionBot:this.directionBot;
//   changeBotDirection:function (directionBot)
//   {

//   }
// }
function directionObject(directionBot)
{
  this.directionBot = directionBot;
  this.directionLeft = '';
  this.directionRight = '';
  this.directionChange = '';
  this.changeBotDirection = function(directionBot,directionChange)
  {
if(directionBot === 'N')
{
  if(directionChange === 'L')
  {
    directionBot = 'W'; 
    
  }
  else
  if(directionChange === 'R')
  {
    directionBot = 'E'; 
   
  }
}
if(directionBot === 'S')
{
  if(directionChange === 'L')
  {
    directionBot = 'E'; 
    
  }
  else
  if(directionChange === 'R')
  {
    directionBot = 'W'; 
   
  }
}
if(directionBot === 'E')
{
  if(directionChange === 'L')
  {
    directionBot = 'N'; 
  }
  else
  if(directionChange === 'R')
  {
    directionBot = 'S'; 
  }
}
if(directionBot === 'W')
{
  if(directionChange === 'L')
  {
    directionBot = 'S'; 
  }
  else
  if(directionChange === 'R')
  {
    directionBot = 'N'; 
  }
}
return directionBot;
  }
  }
module.exports = directionObject;