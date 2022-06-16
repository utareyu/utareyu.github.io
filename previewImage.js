const fsize=document.getElementById("fsize");
const img=document.getElementById("img");

function previewImage(obj){
	var f = new FileReader();
	f.onload = (function() {
		preview.removeAttribute("width");
		preview.src = f.result;
	});
	f.readAsDataURL(obj.files[0]);
	console.log(img.files[0].name+" : "+img.files[0].size);
	fsize.textContent=img.files[0].size+"byte";
	img.files[0].size>=614400 ? fsize.style.color="orange" : fsize.style.color="aliceblue";
}

function previewReset(){
	img.value =null;
	preview.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	preview.setAttribute("width",1);
	fsize.textContent="";
}

/*
<input id="img" type="file" accept='image/*' onchange="previewImage(this);" value="."><input type="button" value="リセット" onclick="previewReset()">
<span id="fsize" style="font-size: 14px;color: aliceblue;"></span>
<p>
	<img id="preview" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><br>
</p>
*/