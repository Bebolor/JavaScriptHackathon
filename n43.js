// 43. Check Url
const checkUrl = url => {
    let protocol = url.match(/(^\w+):\/\//)
    let subDomain = url.match(/^\w+:\/\/([a-z]+)\.\w+\./)
    let domainName = url.match(/^\w+:\/\/(?:[a-z]+\.)?(\w+\.[a-z]+)/)
    let folderTree = url.match(/^\w+:\/\/(?:[a-z]+\.)?\w+\.[a-z]+\/([\w\/\-\_]+)\//)
    let targetFile = url.match(/\/([\w\.]+)(?:\?.*)?$/)
    let argumentsFile = url.match(/(\?.+)/)

    let arguments = {}

    if (argumentsFile){
        argumentsFile = argumentsFile[1].replace("?", "").split("&");
        argumentsFile.forEach(element => arguments[element.split("=")[0]] = element.split("=")[1])
    }

    return { 
        protocol:protocol? protocol[1]:null,
        subDomain:subDomain? subDomain[1]:null,
        domainName:domainName? domainName[1]:null,
        folderTree:folderTree? folderTree[1].split("\/"):null,
        targetFile:targetFile? targetFile[1]:null,
        argumentsFile:argumentsFile? arguments:null
    }
}  

console.log(checkUrl("https://www.google.com/search/test.js?ok=1"));
/* {
    protocol: "https",
    subDomain: "www",
    domainName: "google.com",
    folderTree: [
        "search"
    ],
    targetFile: "test.js",
    argumentsFile: {
        ok: "1"
    }
} */

console.log(checkUrl("https://propulsion.academy/full-stack/challenge"));
/* {
    protocol: "https",
    subDomain: null,
    domainName: "propulsion.academy",
    folderTree: [
        "full-stack"
    ],
    targetFile: "challenge",
    argumentsFile: null
} */

console.log(checkUrl("https://test.propulsion.academy/full-stack/challenge/test.html?ok=0&test=javascript"))
/* {
    protocol: "https",
    subDomain: test,
    domainName: "propulsion.academy",
    folderTree: [
        "full-stack",
        "challenge"
    ],
    targetFile: "test.html",
    argumentsFile: {
        ok: "0",
        test: "javascript"
    }
} */

