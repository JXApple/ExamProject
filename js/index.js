const tabs = document.getElementsByClassName('tab-wrap')[0].getElementsByClassName('tabpane')
const contents = document.getElementById('content').getElementsByClassName('example')
// 选中tab 切换样式
function changeTab(tab){
for (let i =0,len = tabs.length;i<len;i++){
    if(tabs[i]===tab){
        tabs[i].className+=' active' 
        contents[i].className += ' show'
    }else {
        tabs[i].className=tabs[i].className.replace(' active','')
        contents[i].className=contents[i].className.replace(' show','')
        // contents[i].className = ' hid'
    }
}
}