String.pad=function(a,b,c){
var n=null;
return a!=='' && a!=n && b>0?(a=String(a),n=a.length,Array(n?Math.max(b-n+1,0):b).join(c||'\u0020')+a):a
};
   
