let historyDiv = document.getElementById('historyDiv');
let $ = document.getElementById.bind(document);

window.addEventListener('scroll', function() {
	scroll_position = window.pageYOffset;
	console.log( scroll_position );
    //document.getElementById('.frame_center').scrollTop = 438;
});

//1189 821
function histfunc(historyItems) {
    let template = $('historyTemplate');
    for (let item of historyItems) {

        let titleLink = template.content.querySelector('.titleLink, a');
        let pageName = template.content.querySelector('.pageName, p');
        //let favicon = document.createElement('img');
        let host = new URL(item.url).host;
        var uri = new URL(item.url);
        //favicon.src = "https://external-content.duckduckgo.com/ip3/" + encodeURI(uri.hostname) + ".ico";
        //favicon.src = 'chrome://favicon2/?page_url=' + item.url;
        titleLink.href = item.url;
        titleLink.textContent = host;
        //titleLink.appendChild(favicon);
        pageName.innerText = item.title;
        if (item.title === '') {
            pageName.innerText = host;
        }
        var clone = document.importNode(template.content, true);
        historyDiv.appendChild(clone);
    }
}

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
    chrome.storage.local.get((items)=>{
        console.log(items);
        histfunc2(items);
    });
})

