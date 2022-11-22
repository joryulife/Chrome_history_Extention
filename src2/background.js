/*var history = {};
var id;

history.ID = {
    path:0
}*/

var history = {
    group001:{
        path:0,
        1765:{
            lastVisitTime: 1662412160788.0198,
            path:0,
            title: "コードブロック - Scrapbox ヘルプ",
            typedCount: 0,
            url: "https://scrapbox.io/help-jp/%E3%82%B3%E3%83%BC%E3%83%89%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF",
            visitCount: 6,
        },
        3601:{
            lastVisitTime: 1662412165019.616,
            path:1765,
            title: "BrowseLine-2D-Timeline-Visualization-of-Web-Browsing-Histories.pdf",
            typedCount: 0,
            url: "https://www.researchgate.net/profile/Orland-Hoeber/publication/221360901_BrowseLine_2D_Timeline_Visualization_of_Web_Browsing_Histories/links/00b7d53738a37b227e000000/BrowseLine-2D-Timeline-Visualization-of-Web-Browsing-Histories.pdf",
            visitCount: 2,
        },
        3571:{
            lastVisitTime: 1662412169636.122,
            path:3601,
            title: "browsing history visualization - Google Scholar",
            typedCount: 0,
            url: "https://scholar.google.com/scholar?hl=en&q=browsing+history+visualization",
            visitCount: 2,
        },
        3544:{
            lastVisitTime: 1662412173818.3179,
            path:3571,
            title: "nagano-ubi-2018.pdf",
            typedCount: 0,
            url: "http://arakawa-lab.com/wp-content/uploads/2019/04/nagano-ubi-2018.pdf",
            visitCount: 1,
        },
        3574:{
            lastVisitTime: 1662412178095.119,
            path:1765,
            title: "SIGCHI Extended Abstracts Sample File: Note Initial Caps",
            typedCount: 0,
            url: "http://library.usc.edu.ph/ACM/CHI%202017/2exab/ea2429.pdf",
            visitCount: 1,
        }
    },
    group1:{
        path:0,
        1765:{
            lastVisitTime: 1662412160788.0198,
            path:0,
            title: "コードブロック - Scrapbox ヘルプ",
            typedCount: 0,
            url: "https://scrapbox.io/help-jp/%E3%82%B3%E3%83%BC%E3%83%89%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF",
            visitCount: 6,
        },
        3601:{
            lastVisitTime: 1662412165019.616,
            path:1765,
            title: "BrowseLine-2D-Timeline-Visualization-of-Web-Browsing-Histories.pdf",
            typedCount: 0,
            url: "https://www.researchgate.net/profile/Orland-Hoeber/publication/221360901_BrowseLine_2D_Timeline_Visualization_of_Web_Browsing_Histories/links/00b7d53738a37b227e000000/BrowseLine-2D-Timeline-Visualization-of-Web-Browsing-Histories.pdf",
            visitCount: 2,
        },
        3571:{
            lastVisitTime: 1662412169636.122,
            path:3601,
            title: "browsing history visualization - Google Scholar",
            typedCount: 0,
            url: "https://scholar.google.com/scholar?hl=en&q=browsing+history+visualization",
            visitCount: 2,
        },
        3544:{
            lastVisitTime: 1662412173818.3179,
            path:3571,
            title: "nagano-ubi-2018.pdf",
            typedCount: 0,
            url: "http://arakawa-lab.com/wp-content/uploads/2019/04/nagano-ubi-2018.pdf",
            visitCount: 1,
        },
        3574:{
            lastVisitTime: 1662412178095.119,
            path:1765,
            title: "SIGCHI Extended Abstracts Sample File: Note Initial Caps",
            typedCount: 0,
            url: "http://library.usc.edu.ph/ACM/CHI%202017/2exab/ea2429.pdf",
            visitCount: 1,
        }
    },
    group2:{
        path:0,
        1765:{
            lastVisitTime: 1662412160788.0198,
            path:0,
            title: "コードブロック - Scrapbox ヘルプ",
            typedCount: 0,
            url: "https://scrapbox.io/help-jp/%E3%82%B3%E3%83%BC%E3%83%89%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF",
            visitCount: 6,
        },
        3601:{
            lastVisitTime: 1662412165019.616,
            path:1765,
            title: "BrowseLine-2D-Timeline-Visualization-of-Web-Browsing-Histories.pdf",
            typedCount: 0,
            url: "https://www.researchgate.net/profile/Orland-Hoeber/publication/221360901_BrowseLine_2D_Timeline_Visualization_of_Web_Browsing_Histories/links/00b7d53738a37b227e000000/BrowseLine-2D-Timeline-Visualization-of-Web-Browsing-Histories.pdf",
            visitCount: 2,
        },
        3571:{
            lastVisitTime: 1662412169636.122,
            path:3601,
            title: "browsing history visualization - Google Scholar",
            typedCount: 0,
            url: "https://scholar.google.com/scholar?hl=en&q=browsing+history+visualization",
            visitCount: 2,
        },
        3544:{
            lastVisitTime: 1662412173818.3179,
            path:3571,
            title: "nagano-ubi-2018.pdf",
            typedCount: 0,
            url: "http://arakawa-lab.com/wp-content/uploads/2019/04/nagano-ubi-2018.pdf",
            visitCount: 1,
        },
        3574:{
            lastVisitTime: 1662412178095.119,
            path:1765,
            title: "SIGCHI Extended Abstracts Sample File: Note Initial Caps",
            typedCount: 0,
            url: "http://library.usc.edu.ph/ACM/CHI%202017/2exab/ea2429.pdf",
            visitCount: 1,
        }
    }
}



async function clear_storage(){
    chrome.storage.local.get((items)=>{
        var keys = Object.keys(items);
        keys.forEach((key)=>{
            chrome.storage.local.remove(key,()=>{
            })
        });
    });
    return true;
}

async function set_storage(){
    chrome.storage.local.set(history,()=>{});
}

async function run_init(){
    console.log("init start")
    await clear_storage();
    await set_storage();
    chrome.storage.local.get((items)=>{
        console.log("init done");
        console.log(items);
    });
}

run_init();



/*chrome.storage.local.set(history,()=>{
    chrome.storage.local.get((items)=>{
        console.log(items);
    });
});*/




/*chrome.storage.local.get((items)=>{
    console.log(items);
});

chrome.history.onVisited.addListener((historyItems)=>{
    //console.log(historyItems);

    chrome.storage.local.get((items)=>{
        //console.log(items);

        var oldId = items.ID;
        id = historyItems.id;
        history = {};
        history[id] = {
            lastVisitTime: historyItems.lastVisitTime,
            title: historyItems.title,
            typedCount: historyItems.typedCount,
            url: historyItems.url,
            visitCount: historyItems.visitCount,
            path: oldId,
        }

        history.ID = {
            path:id
        }
        
        chrome.storage.local.set(history, function() {
            console.log('stored');
        });
        chrome.storage.local.get((items)=>{
            console.log(items);
        });
    });

    
});
*/




/*chrome.tabs.onMoved.addListener(()=>{
        console.log("move");
    }
);

chrome.tabs.onActivated.addListener((info)=>{
    console.log(info);
    chrome.tabs.get(info.tabId,(info2)=>{
        console.log("info2");
        console.log(info2);
    });
});
chrome.tabGroups.onCreated.addListener((groupInfo)=>{
    console.log("created");
    console.log(groupInfo);
    history[groupInfo.id] = {
        ID:-1
    }
    chrome.storage.local.set(history, function() {
        console.log('group stored');
    });
    chrome.storage.local.get((items)=>{
        console.log(items);
    });
});

chrome.tabGroups.onUpdated.addListener((groupInfo)=>{
    console.log("group Change");
});*/