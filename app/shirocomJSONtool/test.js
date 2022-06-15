// ■ ■ ■ ■ ■  ■ ■ ■ ■ ■     ■ ■ ■    ■ ■ ■ ■ ■ 
//     ■      ■           ■              ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
//     ■      ■                   ■      ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
let dest;
let act;

function run(){
	console.log(`%c-- running --`,'color: yellow;font-size: 1.2em;');
	let wk;
	const title=document.getElementById("title").value;
	const date=document.getElementById("date").value.replace(/-/g,"").slice(2);
	const postn = document.getElementsByName("post");
	let post=[[]];
	let member;
	let data;
	
	console.log({postn});
	let i=0;
	do{
		console.log(`%c---- ${i} ----`,'color: yellow;font-size: 2em;');

		member = document.getElementById("s"+i).value;
		console.log({member});
		
		data=document.querySelector(`#p${i} textarea`).value;
		console.log({data});
		
		const actn=document.getElementsByName("action"+i);
		let j=0;
		while(j<actn.length-1){
			//actの件数分回す　存在しない場合を考える
			console.log(`#a${i}_${j}`);
			wk={"emoji":"", "cnt":0};
			er=document.getElementById("a"+i+"_"+j).querySelector("input").value;
			cr=parseInt(document.getElementById("a"+i+"_"+j).querySelector("span").textContent);
			actarr=Array();
			wk["emoji"] = er;
			wk["cnt"] = cr;
			actarr[j]=wk;
			j++;
		};
		console.log({actarr});
		act!=null ? post[i]=[member,data] : post[i]=[member,data,act] ;
		i++;
	}while(i<postn.length)
	wk={title,date,post};
	console.log(`%c-- stop --`,'color: yellow;font-size: 1.2em;');
	console.log(wk);
}

function chgtitle(){
	titlen.textContent=title.value;
	// console.log(title.style.width);
}

function fitwidth(e){
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
			<textarea class="add" required="required" placeholder="投稿内容" oninput="fitwidth(this)" style="font-weight: 100;width:14em;"></textarea>
			</div>
			<div class="container act">
				<button id="action${post.length}" class="add btn s" name="action${post.length}" class="add btn s" onclick="addAct(this)">😀 +</button>
			</div>
		</div>
		<span  id="p${post.length}s" style="font-size:12px;" onclick="delElem(this)">❌</span>
	</div>`;
	
	dest=document.getElementById(`p${post.length-1}`);
	dest.insertAdjacentHTML("afterend",wk);
	console.log("add post",document.getElementById(`p${post.length-1}`));
}

function addAct(e){
	// console.log(e);
	const el=(e.id).slice(e.id.length-1);
	const en=document.getElementsByName(e.name).length-1;

	wk=`<div id="a${el}_${en}" name="${e.id}" class="s" style="padding:0 3px;">
	<input type="text" class="add" required="required" maxlength="4" style="margin:4px 1px 1px;height:1em; width:1em;"> 
		<span id="c${el}_${en}" onclick="addCnt(this)">0</span>
	</div>
	<span  id="a${el}_${en}s"style="font-size:12px;" onclick="delElem(this)">❌</span>`;

	dest=document.getElementById(e.id);
	dest.insertAdjacentHTML("beforebegin",wk);
	dest=document.getElementById(`c${el}_${en}`);
	dest.textContent=0;
	console.log("add action",dest);
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