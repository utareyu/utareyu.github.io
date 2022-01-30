function runConv(date,data,desc=null){
	if(date=="" || data==""){
		return;
	} else {
		// const shiro= fetch('https://raw.githubusercontent.com/McbeEringi/shirokepu/main/main.json'); 
		// console.log(shiro);

		// no = Math.max.apply(null,shiro.map(function(o){return o.speed;}))-1

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
		//{"no":nnn, "member":[0~3], "date":yymmdd, "tag":[0~3], "data":"XXX", "desc":"XXX"}   , "desc":${desc}}
		// newWord=`{"no":${no}, "member":${member}, "date":${date}, "tag":[${tag}], "data":"${data}"`;
		newWord=`{"no":nnn, "member":${member}, "date":${date}, "tag":[${tag}], "data":"${data}"`;
		if(desc){
			newWord+=`, "desc":"${desc}"}`
		} else {
			newWord+=`}`
		}

		// console.log(no,",", member,",", date,",", tag,",", data,",", desc);
		console.log(member,",", date,",", tag,",", data,",", desc);
		console.log(newWord);

			document.getElementById("new").value = newWord;
			document.getElementById('copybtn').value="コピー";
	}
}

function copynew(){
	navigator.clipboard.writeText(document.getElementById('new').value)
			.then(() => {
			document.getElementById('copybtn').value="コピーしたよ";
	})
			.catch(err => {
				document.getElementById('copybtn').value="なんでかコピーできないよ";
	})
}