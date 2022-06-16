// ■ ■ ■ ■ ■  ■ ■ ■ ■ ■     ■ ■ ■    ■ ■ ■ ■ ■ 
//     ■      ■           ■              ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
//     ■      ■                   ■      ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
let dest;

function strIns(str, idx, val) {
	var res = str.slice(0, idx) + val + str.slice(idx);
	return res;
}

function run(){
	console.log(`%c-- running --`,'color: yellow;font-size: 2em;');
	document.getElementById("rst").value="";
	if((chk())==0){
		document.getElementById("runp").textContent="NG";
		console.log(`%c-- stop --`,'color: yellow;font-size: 2em;');
		console.log("NG");
		return;
	};
	document.getElementById("runp").textContent="";
	let wk;
	const title=document.getElementById("title").value;
	const date=parseInt(document.getElementById("date").value.replace(/-/g,"").slice(2));
	const postn = document.getElementsByName("post");
	let post=[];
	let act=Array(null);
	let member;
	let data;
	
	console.log({postn});
	let i=0;
	do{
		act=[];
		console.log(`%c---- ${i} ----`,'color: yellow;');

		member = parseInt(document.getElementById("s"+i).value);
		// console.log({member});
		
		data=document.querySelector(`#p${i} textarea`).value.replace(/\n/g,"<br>").replace(/"/g,"\\\"");
		// console.log({data});
		
		const actn=document.getElementsByClassName("act"+i);
		let k=0;
		for(let j of actn){
			act[k]={"emoji":j.querySelector("input").value , "cnt":parseInt(j.querySelector("span").textContent)};
			k++;
		}
		act.length==0 ? post[i]={member,data} : post[i]={member,data,act};
		i++;
	}while(i<postn.length)
	console.log(post);
	wk={title,date,"cont":post};
	console.log(`%c-- stop --`,'color: yellow;font-size: 2em;');
	console.log(wk);

	dest=document.getElementById("rst");

	wk=`\n\t\t${JSON.stringify(wk)}`;
	wk=strIns(wk,wk.indexOf(`"cont"`),"\n\t\t\t");
	wk=wk.replace(/{"member/g,`\n\t\t\t\t{"member`);
	wk=strIns(wk,wk.lastIndexOf(`\]`),"\n\t\t\t");
	wk=strIns(wk,wk.lastIndexOf(`\}`),"\n\t\t");
	wk=strIns(wk,wk.indexOf(`"date"`)," ");
	wk=strIns(wk,wk.indexOf(`"data"`)," ");
	if(wk.indexOf(`"act"`)>0)wk=strIns(wk,wk.indexOf(`"act"`)," ");
	// wk=strIns(wk,wk.indexOf(`{"member`),"\n\t\t\t\t");
	// wk=strIns(wk,wk.indexOf(`"tag"`)," ");
	// wk=strIns(wk,wk.indexOf(`"data"`)," ");
	wk+=",";
	dest.value=wk;
	dest.style=`height: ${postn.length+6*1.6}em;`;
}

function chk(){
	let inp = document.querySelectorAll("input");
	let tex = document.querySelectorAll("textarea:not(#rst)");
	let sw=1;
	console.log(tex);
	inp.forEach(e => {if(e.value=="")sw=0});
	tex.forEach(e => {if(e.value=="")sw=0});
	return sw;
}

function copyNew(e){
	let result=document.getElementById("rst");
	if(result.value!=""){
		navigator.clipboard.writeText(result.value)
				.then(() => {
					e.textContent="コピーしたよ";
					location.href='https://github.com/utareyu/shirocom/edit/main/main.json#new_blob';
		})
				.catch(() => {
					e.textContent="なんでかコピーできないよ";
		})
	}else{
		e.value="結果が空欄だよ";
	}
}

function chgTitle(){
	titlen.textContent=title.value;
}

function fitWidth(e){
	e.value.length>0 ? e.style.width=`${e.value.length+1}em` : e.style.width="6em";
}

function addPost(){
	const post = document.getElementsByName("post");

	wk=`<div id="p${post.length}" name="post" class="container post">
	<div class="container ico"><img id="i${post.length}" class="ico" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="></div>
		<div class="container content">
			<select id="s${post.length}" class="add" required="required" style="width:6em;" oninput="chgIco(this)">
			<option value="0">うた</option>
			<option value="1">えりんぎ</option>
			<option value="2">しろる</option>
			<option value="3">紅茶</option>
		</select>
		<div class="data">
			<textarea class="add" required="required" placeholder="投稿内容" oninput="fitWidth(this)" style="font-weight: 100;width:14em;"></textarea>
			</div>
			<div class="container act">
				<button id="action${post.length}" class="add btn s" name="action${post.length}" class="add btn s" onclick="addAct(this);emo(this);">${emo()}</button>
			</div>
		</div>
		<span  id="p${post.length}s" style="font-size:12px;cursor:pointer;" onclick="delElem(this)">❌</span>
	</div>`;
	
	dest=document.getElementById(`p${post.length-1}`);
	dest.insertAdjacentHTML("afterend",wk);
	console.log("add post",document.getElementById(`p${post.length-1}`));
}

function addAct(e){
	const el=(e.id).slice(e.id.length-1);
	const en=document.getElementsByName(e.name).length-1;

	wk=`<div id="a${el}_${en}" name="${e.id}" class="s act${el}" style="padding:0 3px;">
	<input type="text" class="add" required="required" maxlength="4" style="margin:4px 1px 1px;height:1em; width:1em;"> 
		<span id="c${el}_${en}" style="cursor:pointer;" onclick="addCnt(this)">0</span>
	</div>
	<span  id="a${el}_${en}s" style="font-size:12px;cursor:pointer;" onclick="delElem(this)">❌</span>`;

	dest=document.getElementById(e.id);
	dest.insertAdjacentHTML("beforebegin",wk);
	dest=document.getElementById(`c${el}_${en}`);
	dest.textContent=0;
	console.log("add action",dest.parentElement);
}

function addCnt(e){
	const el=(e.id).slice(1);
	dest=document.getElementById(`c${el}`);
	wk=parseInt(dest.textContent);
	wk++;
	dest.textContent=wk;
}

function delElem(e){
	const wk=e.id.slice(0,e.id.length-1);
	console.log("delete Element",document.getElementById(wk));
	document.getElementById(wk).remove();
	e.remove();
}

function chgIco(e){
	dest=document.getElementById("i"+e.id.slice(1));
	wk=`https://utareyu.github.io/shirocom/ico/m${e.value}.png`
	dest.src=wk;
	console.log("change ico",dest);
}

function emo(e=0){
	if(e==0){
	wk=String.fromCodePoint(Math.floor(Math.random()*0x44)+0x1f600)+" +";
	wk=wk.replace("😠","🤔").replace("😡","🥺");
	return wk;
	}
	e.textContent=String.fromCodePoint(Math.floor(Math.random()*0x44)+0x1f600)+" +";
	e.textContent=e.textContent.replace("😠","🤔").replace("😡","🥺");
}

function createImg(){
	let dest=document.getElementById("imga");
	if(img.files.length!=0){
		console.log(img.files[0].name);
		dest.value=`<img src=\"img/photos/${img.files[0].name}\" width=200>`;
	}
}

function previewReset_(){
	const img=document.getElementById("img");
	const imga=document.getElementById("imga");
	const preview=document.getElementById("preview");
	img.value =null;
	preview.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	preview.setAttribute("width",1);
	fsize.textContent=imga.value="";
}

function copyImg(e){
	const imga=document.getElementById("imga");
	if(imga.value!=""){
		navigator.clipboard.writeText(imga.value)
				.then(() => {
					e.textContent="コピーしたよ";
					location.href='#body';
		})
				.catch(() => {
					e.textContent="なんでかコピーできないよ";
		})
	}else{
		e.value="結果が空欄だよ";
	}
}