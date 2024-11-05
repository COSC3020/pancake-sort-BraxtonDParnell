//flips array from the start to n
function flip(array, n) {
	if (n > array.length){
		n = array.length - 1;
	}
	let temp = 0;
	let start = 0;
	while (start < n){
		temp = array[start];
		array[start] = array[n];
		array[n] = temp;
		start++;
		n--;
	}
	return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
	for (let n = 1; n < array.length; n++){
		if (isSorted(array, n) == false ){
			if (n == 1){
				array = flip(array,1);
			}
			else {
				array = flip(array, n-1);
				array = flip(array, n);
				if (isSorted(array, n) == false) {
					array = flip(array, n-1);
					array = flip(array, n-2);
				}
			}
		}
	}
	return array;
}
//returns false if the array is not sorted
function isSorted(array, n){
	for (let i = 0; i < n; i++) {
		if (array[i] > array[i+1]) {
			return false;
		}
	}
	return true;
}
