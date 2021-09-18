var title_text = ["人生苦短 必须重开","人生重开（划掉）模拟器","不想在这垃圾人生呆了QAQ","人生苦短 我选重开"]

function randomTitle(){
    x = null
    while (x == null || x > title_text.length){
        x = Math.floor(Math.random()*title_text.length)
    }
    console.log(x)
    document.getElementById("menu_title").innerHTML=title_text[x]
}