String.pad=function(a,b,c){a=String(a);var n=a.length;return Array(n?Math.max(b-n+1,0):b).join(c||0)+a};


console.log(String.pad(9, 6));  // "000009 "
console.log(String.pad(10, 6)); // "000010"
console.log(String.pad(15000,6,'-')); // "-15000"
console.log(String.pad(0,6));//000000
console.log(String.pad(0,6,'-'));//-----0 
console.log(String.pad(false,6,'-'));//-false
