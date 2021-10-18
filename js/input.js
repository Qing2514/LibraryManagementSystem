function check(){
    alert("添加图书成功！");
    return true;
}

function showImg(obj) {
    var files = obj.files
    getImgsByFileReader(document.getElementById("imgContainer"), files)
}
function getImgsByFileReader(el, files) {
    for (var i = 0; i < files.length; i++) {
        let img = document.createElement('img')
        img.setAttribute('style', 'width: 300px; height: 300px; vertical-align: middle; margin-left: 100px;margin-top: -440px;border-radius: 200px;')
        el.appendChild(img)
        var reader = new FileReader()
        reader.onload = function(e) {
            img.src = e.target.result
        }
        reader.readAsDataURL(files[i])
    }
}

