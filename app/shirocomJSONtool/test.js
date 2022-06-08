// ■ ■ ■ ■ ■  ■ ■ ■ ■ ■     ■ ■ ■    ■ ■ ■ ■ ■ 
//     ■      ■           ■              ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
//     ■      ■                   ■      ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
let post = document.getElementsByName("post");
let dest;
let act =[];

function run(){
	let wk;
	const title=document.getElementById("title").value
	const date=document.getElementById("date").value
	let member;
	let data;
	let act;
	
	// let post= document.getElementsByName("post").length;
	// member= document.getElementById(`s${0}`).value;
	// data= document.getElementById("p0").getElementsByClassName("data")[0].children[0].value;
	const postn = document.getElementsByName("post");
	let i=0;
	for(i in post){
		//postの件数分回す　最初から順に見る感じ
		console.log(&s i,style="color:red; font-size:12px;");
		member = document.getElementById("s"+i);
		data = post[i].children[1].children[1].children[0].value;
		console.log(i,member,data);
		// return;
		data=document.getElementById("p"+i).getElementsByClassName("data")[0].children[0].value;
		const actn=document.getElementsByName("action"+i);
		for(let j in actn.length){
			//actの件数分回す　存在しない場合を考える
			act[["emoji"]] = actn[j].input.value;
			act[["cnt"]] = parseInt(actn[j].span.textContent);
			wk["act"]+=act;
			console.log("!");
		}
	}
	act =wk;
	post=[member,data];
	act!=null ? wk={title,date,post} : wk={title,date,member,data} ;
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
	post = document.getElementsByName("post");

	wk=`<div id="p${post.length}" name="post" class="container post">
	<div class="container ico"><img class="ico" src="https://utareyu.github.io/shirocom/ico/m2.png"></div>
		<div class="container content">
			<div><input class="add" type="text" required="required" placeholder="発言者" oninput="fitwidth(this)" style="width:5em;"></div>
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
	<input type="text" class="add" required="required" maxlength="1" style="margin:4px 1px 1px;height:1em; width:1em;"> 
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