// ■■■■■ ■■■■■  ■■■  ■■■■■
//   ■   ■     ■       ■
//   ■   ■■■■■  ■■■    ■
//   ■   ■         ■   ■
//   ■   ■■■■■  ■■■    ■
fetch('https://mcbeeringi.github.io/shirokepu/main.json')
	.then(response => response.json())
	.then((x)=>{
		max.textContent=(Math.max(...x["data"].map((p) => p.no))+1);
	})

function run(){
	const no = max.textContent;
	let member = document.getElementsByName('member');
	let date = document.getElementById("date").value.replace(/-/g,"").slice(2);
	let tag = document.getElementsByName('tag');
	let data = document.getElementById("data").value.replace(/"/g,"\\\"");
	let desc = document.getElementById("desc").value.replace(/\n/g,"<br>").replace(/"/g,"\\\"");
	let wk="";

	console.log(`%c---- ${no} ----`,'color: yellow;font-size: 2em;');
	warn.textContent=smember.style=sdate.style=stag.style=sdata.style="";

	//member
	for (let i in Object.keys(member)){
			if (member[i].checked){
					wk = member[i].value;
			}
	}
	// console.log(wk);
	member = wk;
	wk=[];

	//tag
	for (let i in Object.keys(tag)){
			if (tag.item(i).checked){
				wk.push(tag.item(i).value);
			}
	}
	// console.log(wk);
	tag=wk.concat();

	if(member=="" || date=="" || tag=="" || data==""){
		convbtn.value="入力が必要な項目があるよ";
		console.log(`member: ${member}  date: ${date}  tag: ${tag}  data: ${data}`);
		if(member=="")smember.style="color:red;";
		if(date=="")sdate.style="color:red;";
		if(tag=="")stag.style="color:red;";
		if(data=="")sdata.style="color:red;";
		console.log("NG");
		return;
	}

	if(img.files.length!=0){
		if(desc)desc+="<br>";
		console.log(img.files[0].name);
		desc+=`<img src=\"img/photos/${img.files[0].name}\" width=200>`
	}
	
	desc!="" ? wk = {no,member,date,tag,data,desc} : wk = {no,member,date,tag,data} ;
	console.log(wk);
	console.log("OK");

	convbtn.value="変換したよ"
	result.value = `\n\t\t${JSON.stringify(wk)}`;
	copybtn.value="コピーして編集ページに移動";
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
		preview.src = fileReader.result;
		console.log(img.files[0].name);
	});
	fileReader.readAsDataURL(obj.files[0]);
}