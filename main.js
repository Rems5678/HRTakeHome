/**
 * You are given a list of boarding cards for various transportations that will take you from a point A to point B via
several stops on the way. All of the boarding cards are out of order and you don't know where your journey
starts, nor where it ends. Each boarding card contains information about origin/destination, seat assignment,
and means of transportation (such as flight number, bus number etc). Provide a library that lets you sort a list of
unordered boarding cards using the origin/destination information and present back a description of how to
complete your journey. For instance the library should be able to take an unordered list of boarding cards,
provided in a format defined by you, and produce this output:

@param boardingPasses array of objects, e.g., [{dest: A, origin: C}, {dest: C, origin: B}, {dest: D, origin: E}, {dest: B, origin: D}]
 */
const testCase =  [{dest: 'A', origin: 'C'}, {dest: 'C', origin: 'B'}, {dest: 'D', origin: 'E'}, {dest: 'B', origin: 'D'}];
 function orderPasses (boardingPasses) {
    if (!boardingPasses.length) return boardingPasses;
    //  loop through the boardingPasses
    // keep an obj that tracks the initial origin and it's destination
    const obj = {};
    const origins = {};
    const ordered = [];    
   //  do one pass through to map all the destinations and origins
    for (let i = 0; i < boardingPasses.length; i++) {
      const {dest, origin} = boardingPasses[i];
      if (!obj.hasOwnProperty(dest)) {
          obj[dest] = i;
      }
      if (!origins.hasOwnProperty(origin)) {
         origins[origin] = i;
      }
   }
   // do another pass to map the starting flight
   let start;
   for (let i = 0; i < boardingPasses.length; i++) {
         const {origin} = boardingPasses[i];
         if (!obj.hasOwnProperty(origin)) {
            start = i;
            break;
         }
   }
   let next = boardingPasses[start].dest;
   for (let i = 0; i < boardingPasses.length; i++) {
      if (i === 0) {
         ordered.push(boardingPasses[start]);
      }
      else {
          ordered.push(boardingPasses[origins[next]])
          next = boardingPasses[origins[next]].dest;
      }

   }
   return ordered;
 }

//  console.log(orderPasses(testCase));
 module.exports = orderPasses;