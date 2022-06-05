
function chgtitle(){
	titlen.textContent=title.value;
	// console.log(title.style.width);
	title.style.width=`${title.value.length+1}em`;
}

//title.style("width",`${title.value.length+2}em