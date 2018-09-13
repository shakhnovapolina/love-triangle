/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	
	numb = 0;
	k1 = 0;
	k2 = 0;
	k3 = 0;
	
	for (index = 0, len = preferences.length; index < len; ++index) {
	//	console.log('index ' + index);	
		k1 = preferences[index];
		k2 = preferences[k1-1];
		k3 = preferences[k2-1];
			
	//	console.log('k1 ' + k1)	;
	//console.log('k2 ' + k2)	;
	//	console.log('k3 ' + k3)	;
	//	console.log('(k3-1) == index  ' + (k3-1) + ' == ' + index);				
			
    if ( (k3-1) == index  && (k3) && preferences.indexOf(k1) == (k3-1) && (k1!=k2!=k3))

		{
	++numb;	 
	preferences[index] = NaN;
	preferences[preferences.indexOf(k1)] == NaN
		};
	};
  return numb;
};
