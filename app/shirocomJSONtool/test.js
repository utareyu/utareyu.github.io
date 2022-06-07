// ■ ■ ■ ■ ■  ■ ■ ■ ■ ■     ■ ■ ■    ■ ■ ■ ■ ■ 
//     ■      ■           ■              ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
//     ■      ■                   ■      ■
//     ■      ■ ■ ■ ■ ■     ■ ■ ■        ■
let post = document.getElementsByName("post");
let dest;
let act =[[],[]];
let wk;
// const post=;

function chgtitle(){
	titlen.textContent=title.value;
	// console.log(title.style.width);
}

function fitwidth(e){
	e.value.length>0 ? e.style.width=`${e.value.length+1}em` : e.style.width="6em";
}

function addPost(e){
	post = document.getElementsByName("post");
	console.log(`---add post p${post.length}---`);

	wk=`<div id="p${post.length}" name="post" class="container post">
	<div class="container ico"><img class="ico" src="https://utareyu.github.io/shirocom/ico/m2.png"></div>
		<div class="container content">
			<div><input class="add" type="text" required="required" placeholder="発言者" oninput="fitwidth(this)" style="width:5em;"></div>
			<div class="data">
				<input class="add" type="text" required="required" placeholder="投稿内容" oninput="fitwidth(this)" style="font-weight: 100;width:14em;">
			</div>
			<div class="container act">
				<button id="action${post.length}" class="add btn s" name="action${post.length}" class="add btn s" onclick="addAct(this)">😀 +</button>
			</div>
		</div>
	</div>`;
	
	dest=document.getElementById(`p${post.length-1}`);
	dest.insertAdjacentHTML("afterend",wk);
	console.log(dest);
}

function addAct(e){
	console.log(e);
	const el=(e.id).slice(e.id.length-1);
	const en=document.getElementsByName(e.name).length-1;
	console.log(`---add action a${el}_${document.getElementsByName(`action${el}`).length-1}---`);

	wk=`<div id="a${el}_${en}" name="${e.id}" class="s" onclick="addcnt(this)"><input type="text" class="add" required="requiard" style="height:1em; width:1em;"> 
	<span id="c${el}_${en}"></span>x</div><span>X</span>`;
	dest=document.getElementById(e.id);
	dest.insertAdjacentHTML("beforebegin",wk);
	dest=document.getElementById(`c${el}_${en}`);
	dest.textContent=0;
	console.log(dest);


}

function addcnt(e){
	const el=(e.id).slice(1);
	dest=document.getElementById(`c${el}`);
	wk=parseInt(dest.textContent);
	wk++;
	dest.textContent=wk;
}