// ■ ■ ■ ■ ■  ■ ■ ■ ■ ■     ■ ■ ■    ■ ■ ■ ■ ■ 
//     ■      ■           ■              ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
//     ■      ■                   ■      ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
function strIns(str, idx, val) {
	var res = str.slice(0, idx) + val + str.slice(idx);
	return res;
}

fetch('https://mcbeeringi.github.io/shirokepu/main.json')
	.then(response => response.json())
	.then((x)=>{
		max.textContent=(Math.max(...x["data"].map((p) => p.no))+1);
})

function run(){
	const no = parseInt(max.textContent);
	let member = document.getElementsByName('member');
	let date = document.getElementById("date").value.replace(/-/g,"").slice(2);
	let tag = document.getElementsByName('tag');
	const data = document.getElementById("data").value.replace(/"/g,"\\\"");
	let desc = document.getElementById("desc").value.replace(/\n/g,"<br>").replace(/"/g,"\\\"");
	let wk="";

	console.log(`%c---- ${no} ----`,'color: yellow;font-size: 2em;');
	warn.textContent=smember.style=sdate.style=stag.style=sdata.style=result.value="";

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
				wk.push(parseInt(tag.item(i).value));
			}
	}
	// console.log(wk);
	tag=wk.concat();

	if(member=="" || date=="" || tag=="" || data==""){
		console.log(`member: ${member}  date: ${date}  tag: ${tag}  data: ${data}`);
		convbtn.value="入力が必要な項目があるよ";
		if(member=="")smember.style="color:red;";
		if(date=="")sdate.style="color:red;";
		if(tag=="")stag.style="color:red;";
		if(data=="")sdata.style="color:red;";
		console.log("NG");
		return;
	}

	member=parseInt(member);
	date=parseInt(date);

	if(img.files.length!=0){
		if(desc)desc+="<br>";
		console.log(img.files[0].name);
		desc+=`<img src=\"img/photos/${img.files[0].name}\" width=200>`
	}
	
	desc!="" ? wk = {no,member,date,tag,data,desc} : wk = {no,member,date,tag,data} ;
	console.log(wk);

	wk=`\n\t\t${JSON.stringify(wk)}`;
	wk=strIns(wk,wk.indexOf(`"member"`)," ");
	wk=strIns(wk,wk.indexOf(`"date"`)," ");
	wk=strIns(wk,wk.indexOf(`"tag"`)," ");
	wk=strIns(wk,wk.indexOf(`"data"`)," ");
	if(wk.indexOf(`"desc"`)>0)wk=strIns(wk,wk.indexOf(`"desc"`)," ");
	console.log(wk);
	console.log("OK");

	convbtn.value="変換したよ"
	result.value = wk;
	copybtn.value="コピーして編集ページに移動";
}

function copynew(){
	if(result.value!=""){
		navigator.clipboard.writeText(result.value)
			.then(() => {
				copybtn.value="コピーしたよ";
				location.href='https://github.com/McbeEringi/shirokepu/edit/main/main.json#new_blob';
		})
			.catch(() => {
				copybtn.value="なんでかコピーできないよ";
		})
	}else{
		copybtn.value="結果が空欄だよ";
	}
}

function reset(){
	let inp = document.querySelectorAll("input");
	let tex = document.querySelectorAll("textarea");
	let mem = document.getElementsByName('member');
	let tag = document.getElementsByName('tag');
	inp.forEach(e => {e.value=""});
	tex.forEach(e => {e.value=""});
	mem.forEach(e => {e.checked=false});
	tag.forEach(e => {e.checked=false});
	console.log("reset");
	location.href='test.html';
}