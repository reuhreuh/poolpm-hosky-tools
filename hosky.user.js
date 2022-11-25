// ==UserScript==
// @name         Hosky NFT SPO filter for pool.pm
// @namespace    https://github.com/reuhreuh/poolpm-hosky-filter
// @version      1.2
// @description  Filter Hosky NFTs by staking pool and display matching SPOs for a given CG !
// @author       reuhreuh
// @match        https://pool.pm/*
// @icon         https://pool.pm/registry/a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235/HOSKY/logo.png
// @grant        none
// @run-at document-idle
// @downloadURL  https://raw.githubusercontent.com/reuhreuh/poolpm-hosky-filter/master/hosky.user.js
// @updateURL    https://raw.githubusercontent.com/reuhreuh/poolpm-hosky-filter/master/hosky.user.js
// @supportURL   https://github.com/reuhreuh/poolpm-hosky-filter/issues
// @require https://raw.githubusercontent.com/reuhreuh/poolpm-hosky-filter/master/pools.js
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

const DEBUG = true;
const WALLET_URL = "https://pool.pm/wallet/";
const ASSET_URL = "https://pool.pm/asset/";
const HOSKY_POLICY_ID = "a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559";
let hoskies = [];

const log = (msg) => DEBUG ? console.log("Hosky filter - ", msg) : null

const getWalletAddr = () => {
    var pathArray = window.location.pathname.split('/');
    var addr = pathArray[1];
    log("wallet address : " + addr);
    return addr;
}

const getHoskies = (addr) => {
    var h= [];
    log("retrieving hoskies from wallet");
    let jqxhr = $.get(
        {
            url :  WALLET_URL + addr,
            dataType : "json",
            async:false
        }
    ).done(function(wallet) {
        log( "wallet retrieved" );
        h = wallet.tokens.filter(function (el) {
            return el.policy === HOSKY_POLICY_ID;
        });
    })
    .fail(function() {
        log( "error retrieving wallet" );
    });
    log(h.length + " hoskies found");
    return h;
}

const getHosky = (asset) => {
    var h;
    log("retrieving hosky NFT");
    let jqxhr = $.get(
        {
            url :  ASSET_URL + asset,
            dataType : "json",
            async:false
        }
    ).done(function(nft) {
        log("NFT retrieved");
        if(nft.policy != HOSKY_POLICY_ID){
            log(asset + " is not a Hosky NFT");
        } else {
            log(asset + " is a valid Hosky NFT");
            h = nft;
        }
    })
    .fail(function() {
        log( "error retrieving wallet" );
    });
    return h;
}

const buildUI = () => {
    log("Building UI ...");
    // Create search bar
    let hoskySearchBar = document.createElement("div");
    hoskySearchBar.class = "hc av at s e wc";
    hoskySearchBar.id = "hosky-search-bar";
    //hoskySearchBar.style.position = "sticky";
    //hoskySearchBar.style.top = "0";
    //hoskySearchBar.innerHTML = "SALUT";
    let hoskyInput = document.createElement("input");
    hoskyInput.id = "hosky-filter-input";
    hoskyInput.style.width = '97%';
    hoskyInput.style.height = '35px';
    hoskyInput.autocomplete = 'off';
    hoskyInput.placeholder = "Enter pool name";
    let matchCount = document.createElement("span");
    matchCount.id="hosky-filter-count";
    matchCount.innerHTML="0 NFT";
    matchCount.style.marginLeft = '4px';
    hoskySearchBar.appendChild(hoskyInput);
    hoskySearchBar.appendChild(matchCount);
    //$("#filter").parent().after(document.createElement("div"));
    $("#filter").parent().after(hoskySearchBar);
    log("Building UI ... Done!");
}

const addHoskyFilterListener = () => {
    log("Applying listeners ...");
    $("#hosky-filter-input").on('input',function(e){
        var input = $(this);
        var filter = input.val()
        log(filter);
        if(filter && POOLS_TRAITS.has(filter.toUpperCase())){
            filterMatchingHoskies(filter.toUpperCase());
        } else {
           showAllHoskies();
           updateMatchCount(0);
        }
    });
    log("Applying listeners ... Done!");
}

const filterMatchingHoskies = (pool) => {
    log("Filtering hoskies matching : " + pool + " ...");
    var pool_traits = POOLS_TRAITS.get(pool);
    hideAllHoskies();
    var filteredHoskies = hoskies.filter(function (el) {
        return isHoskyMatchesPool(el, pool_traits);
    });
    updateMatchCount(filteredHoskies.length);
    filteredHoskies.forEach(function(h){
        showHosky(h.fingerprint);
    });
    log("Filtering hoskies matching : " + pool + " ... Done!");
}

const isHoskyMatchesPool = (hosky, pool_traits) => {
    var match = false;
    var hoskyTraits = hosky.metadata['-----Traits-----'];
    hoskyTraits.forEach(function(trait){
        pool_traits.forEach(function(pTrait){
            if(JSON.stringify(trait) == JSON.stringify(pTrait)){
                match = true;
            }
        });
    });
    return match;
}

const showHosky = (asset) => {
    selectHoskyByAsset(asset).show();
}

const hideHosky = (asset) => {
    seletHoskyByAsset(asset).hide();
}

const selectHoskyByAsset = (asset) => {
    return $("a[href='/"+asset+"'] div img").parent().parent().parent().parent();
}

const hideAllHoskies = () => {
    $("a[rel='noopener noreferrer'][target='_blank'] > div > img").each(function(index){
        $(this).parent().parent().parent().parent().hide();
    });
}

const showAllHoskies = () => {
    $("a[rel='noopener noreferrer'][target='_blank'] > div > img").each(function(index){
        $(this).parent().parent().parent().parent().show();
    });
}

const updateMatchCount = (count) => {
     $("#hosky-filter-count").html(count + " NFT");
}

const startPoolsFilter = () => {
    log("Loading Hosky filter module");
    buildUI();
    log("Hosky filter loaded");
}


const buildPoolBadge = (pool) => {
    // Create badge
    var badge = document.createElement("span");
    badge.style.backgroundColor = "red";
    badge.style.color = "white";
    badge.style.padding = "2px 5px";
    badge.style.margin = "2px 2px 2px 2px";
    badge.style.textAlign = "center";
    badge.style.borderRadius = "5px";
    badge.innerHTML = pool;
    return badge;
}

const startCGPoolsMatching = (asset) => {
    log("Loading Hosky CG Matching Pools module");
    var h = getHosky(asset);
    if(h){
        var asset_title_div = $("div.s.t.wc.hc").first();
        asset_title_div.append("<br/>");
        POOLS_TRAITS.forEach(function(value, key, map){
            if(isHoskyMatchesPool(h, value)){
                log(asset + " matches " + key);
                asset_title_div.append((buildPoolBadge(key)));
            }
        });

    }
    log("Hosky CG Matching Pools module loaded");
}

(async function() {
    if (window.top !== window.self) {
        return;
    }
    var pathArray = window.location.pathname.split('/');
    var lastPathElt = pathArray[pathArray.length - 1];
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(function(mutations, observer) {
        if(lastPathElt == "%40a5bb0e5b"){
            if($("#filter").length == 1){
                log("Dom ready");
                observer.disconnect();
                startPoolsFilter();
                addHoskyFilterListener();
            }
        } else if (pathArray.length == 2){
            if($("#nft-file-0").length == 1){
                log("Dom ready");
                observer.disconnect();
                startCGPoolsMatching(lastPathElt);
            }
        }
   });
   // define what element should be observed by the observer
   // and what types of mutations trigger the callback
   observer.observe(document.querySelector('body'), {
       subtree: true,
       attributes: true,
       childList: true
   });
   window.addEventListener("load", () => {
       if(lastPathElt == "%40a5bb0e5b"){
           let addr = getWalletAddr();
           hoskies = getHoskies(addr);
       }
   });
})();
