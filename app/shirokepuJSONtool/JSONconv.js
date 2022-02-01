function runConv(date,data,desc=null){
	if(date=="" || data==""){
		return;
	} else {
console.clear();
		var max={n};
		fetch('https://mcbeeringi.github.io/shirokepu/main.json')
		.then(r=>r.json())
		.then(x=>{
		  max.n=Math.max(...x.data.map(y=>y.no))+1;
		  console.log(max.n);
		  });
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
		newWord=`{"no":${max.n}, "member":${member}, "date":${date}, "tag":[${tag}], "data":"${data}"`;
		if(desc){
			newWord+=`, "desc":"${desc}"}`
		} else {
			newWord+=`}`
		}

		console.log(newWord);

		result.value = newWord;
		copybtn.value="コピー";
	}
}

function copynew(){
	navigator.clipboard.writeText(result.value)
			.then(() => {
				copybtn.value="コピーしたよ";
	})
			.catch(err => {
				copybtn.value="なんでかコピーできないよ";
	})
}
