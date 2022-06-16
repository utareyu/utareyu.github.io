function previewImage(obj){
	var f = new FileReader();
	f.onload = (function() {
		preview.removeAttribute("width");
		preview.src = f.result;
	});
	f.readAsDataURL(obj.files[0]);
	console.log(img.files[0].name+" : "+img.files[0].size);
	fsize.textContent=img.files[0].size+"byte";
	img.files[0].size>=614400 ? fsize.style.color="orange;" : fsize.style.color="aliceblue;";
}

function previewreset(){
	img.value =null;
	preview.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	preview.setAttribute("width",1);
	fsize.textContent="";
}