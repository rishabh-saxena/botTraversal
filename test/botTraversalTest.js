var botTraversalMovement = require('../botTraversalMovement');
var assert =require('assert');
describe('Valid Input',function()
{
it('should print current position and current direction',function()
{
  var path = '/Users/rishabsaxena/Documents/botTraversal/sampleTest.txt';
  assert.equals(botTraversalMovement(path),'3 1 W');
});
});
describe('Valid Input',function()
{
it('should print current position and current direction',function()
{
  var path = '/Users/rishabsaxena/Documents/botTraversal/sampleTest1.txt';
  assert.equals(botTraversalMovement(path),'file not in proper format');
});
});