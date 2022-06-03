// ■■■■■ ■■■■■  ■■■  ■■■■■
//   ■   ■     ■       ■
//   ■   ■■■■■  ■■■    ■
//   ■   ■         ■   ■
//   ■   ■■■■■  ■■■    ■
fetch('https://mcbeeringi.github.io/shirokepu/main.json')
	.then(response => response.json())
	.then(function(x){
		document.getElementById("max").textContent=(Math.max(...x["data"].map((p) => p.no))+1);
	})

function runConv(date,data,desc=null,img=null){
	let memberE = document.getElementsByName('member');
	let tagE = document.getElementsByName('tag');
	let member = 0;
	let tag="";
	let newWord ="";
	let no = document.getElementById("max").textContent

	for (let i = 0; i < 4; i++){
			if (memberE.item(i).checked){
					member = memberE.item(i).value;
			}
	}

	for (let i = 0; i < 4; i++){
			if (tagE.item(i).checked){
				if(tag)tag+=",";
					tag += tagE.item(i).value;
			}
	}
	if(date=="" || data=="" || tag==""){
		convbtn.value="入力が必要な項目があるよ"
		return;
	} else {
		date=date.replace(/-/g,"").slice(2);
		desc=desc.replace(/\n/g,"<br>");
		newWord=`\n\t\t{"no":nnn, "member":${member}, "date":${date}, "tag":[${tag}], "data":"${data}"`;
		if(desc){
			newWord+=`, "desc":"${desc}"`
		}
		if(img){
			console.log(img);
		}
		newWord+=`},`
		/*
		有効なデータが入っているときに
			imgのファイル名取得
			
		*/
		//<img src=\"img/photos/imgname\" width=200>
		
		console.log(newWord);

		convbtn.value="変換したよ"
		result.value = newWord;
		copybtn.value="コピーして編集ページに移動";
	}
}

function copynew(){
	if(result.value!=""){
		navigator.clipboard.writeText(result.value)
				.then(() => {
					copybtn.value="コピーしたよ";
					location.href='https://github.com/McbeEringi/shirokepu/edit/main/main.json#new_blob';
		})
				.catch(err => {
					copybtn.value="なんでかコピーできないよ";
		})
	}else{
		copybtn.value="結果が空欄だよ";
	}
}

function previewImage(obj){
	var fileReader = new FileReader();
	fileReader.onload = (function() {
		document.getElementById('preview').src = fileReader.result;
		console.log(fileReader.result);
	});
	fileReader.readAsDataURL(obj.files[0]);
}