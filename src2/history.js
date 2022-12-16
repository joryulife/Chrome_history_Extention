let historyDiv = document.getElementById('historyDiv');
let $ = document.getElementById.bind(document);

async function get_Element(){
    const htmldoc = document.documentElement.cloneNode(true);
    [...htmldoc.querySelectorAll('script')].forEach(e => e.remove())
    return htmldoc.outerHTML
}

function get_html(){
    get_Element().then((htmlstr)=>{
        console.log(htmlstr)
    })
}

const samplePromise = new Promise((resolve, reject) => {
    chrome.storage.local.get((items)=>{
        console.log(items);
        histfunc2(items);
    })
    resolve();
})

function histfunc2(historyItems){
    let histDiv = $('history_div');

    for(groupID in historyItems){
        let group = document.querySelector('#rootDiv');
        let rootClone = group.content.cloneNode(true);
        rootClone.querySelector('.group').textContent = groupID;

        var path = [0];
        let root = [];
        let historyTemplate = document.querySelector('#historyTemplate');
        while(path.length){
            var find = false;
            for(item in historyItems[groupID]){
                let clone = historyTemplate.content.cloneNode(true);
                clone.querySelector('.titleLink').textContent = historyItems[groupID][item].title;
                clone.querySelector('.titleLink').href = historyItems[groupID][item].url;
                clone.querySelector('.pageName').innerText = historyItems[groupID][item].title;
                clone.querySelector('.frame_center').src = historyItems[groupID][item].url;
                clone.querySelector('.frame_center').setAttribute("scrolling", "yes");
                clone.querySelector('.frame_center').scrollTop = 400;
                if (item.title === '') {
                    clone.querySelector('.pageName').innerText = historyItems[groupID][item].url;
                }
                if(historyItems[groupID][item]["path"] == path[path.length-1]){
                    delete historyItems[groupID][item];
                    path.push(item);
                    root.push(clone);
                    find = true;
                    break;
                }
            }
            
            if(!find){
                if(root.length == 0){
                    break;
                }else if(root.length == 1){
                    child = root[root.length-1];
                    rootClone.querySelector('.lowLevel').appendChild(child);
                    root.pop();
                    path.pop();
                }else{
                    child = root[root.length-1];
                    root.pop();
                    parent = root[root.length-1];
                    root.pop();
                    parent.querySelector('.lowLevel').appendChild(child);
                    root.push(parent);
                    path.pop();
                }
            }else{

            }
        }
        histDiv.appendChild(rootClone);
    }
    
}

window.addEventListener('load', () => {
    samplePromise.then(() => {
        get_html()
    }).catch((message) => { //catchの引数messageはrejectの()内に記述した内容
        console.log(message);
    })
})






