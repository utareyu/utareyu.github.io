function runConv(date,data,desc=null){
	if(date=="" || data==""){
		convbtn.value="入力が必要な項目があるよ"
		return;
	} else {
		convbtn.value="変換したよ"
		let memberE = document.getElementsByName('member');
		let tagE = document.getElementsByName('tag');
		let member = 0;
		let tag = 0;
		let newWord ="";

		for (let i = 0; i < 4; i++){
				if (memberE.item(i).checked){
						member = memberE.item(i).value;
				}
		}

		for (let i = 0; i < 4; i++){
				if (tagE.item(i).checked){
						tag = tagE.item(i).value;
				}
		}

		date=date.replace(/-/g,"");
		date=date.slice(2);
		desc=desc.replace(/\n/g," ");
		newWord=`,\n\t\t{"no":nnn, "member":${member}, "date":${date}, "tag":[${tag}], "data":"${data}"`;
		if(desc){
			newWord+=`, "desc":"${desc}"}`
		} else {
			newWord+=`}`
		}

		console.log(newWord);

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