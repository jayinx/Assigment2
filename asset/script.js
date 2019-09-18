var myWrapper = document.getElementById("wrapper");

for (var i = 0; i < 250; i++) {

var myModule = `
	<div class="patternUnit"
		style="background-color: rgb(${176+(i*10)},${224-i},230);
		transform: rotate(${10+i}deg);
		width:${i*40}%;"
		></div>
	`

	myWrapper.insertAdjacentHTML('beforeend' , myModule);
}