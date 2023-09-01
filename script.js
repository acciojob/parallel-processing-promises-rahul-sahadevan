//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click",() =>{

	function download(images){
		let brr = [];
		for(let i =0;i<images.length;i++){
			let p = new Promise((resolve,reject) =>{
				resolve(images[i].url);
			})
			brr.push(p);
		}
		return brr;
		
	}
	let x = download(images);
	let all_val = Promise.all(x);
	let crr = [];
	all_val.then((data) =>{
		for(let i =0;i<data.length;i++){
			let image = document.createElement("img");
			image.src = data[i];
			output.append(image);
		}
	})
	all_val.catch((e) =>{
		console.log(`Failed to load image's URL: ${e}`);
	})
})

