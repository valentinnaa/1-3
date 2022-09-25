const express = require('express')
const app = express()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); }
app.get('/', function(req,res){
    var html = '<html><head><style> tr,td {border:1px solid black; width: 50px; height: 50px;} .brown{background-color: brown;} .blue{background-color: blue;} .gray{background-color: gray;} </style>}</head><body><table>'
for (i = 0; i<=15; i++){
 html+= '<tr>'
 for (j = 0; j <=15; j++){
    var a = getRandomIntInclusive(-1,3)
    if (a == -1){
        html+='<td class="brown"></td>'
    }
    if ( a== 0){
        html+='<td class="blue"></td>'
    }
    if (a == 1 || a==2 || a==3) {
        html+='<td class="gray"></td>'
    }
 }
html+='</tr>'
}
html+='</table></body></html>'
res.send(html)
})
app.listen(3000, function(req, res){
    console.log('runing')
})


