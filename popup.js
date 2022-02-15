let removePopupButton = document.getElementById("removePopup");

removePopupButton.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });


    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removeTwitterPopUp
    });
});

function removeTwitterPopUp() {
    let classes_to_remove = [
        "css-1dbjc4n r-1ffj0ar r-1p0dtai r-1d2f490 r-1xcajam r-zchlnj r-ipm5af",
        "css-1dbjc4n r-14lw9ot r-1867qdf r-1jgb5lz r-pm9dpa r-1ye8kvj r-1rnoaur r-13qz1uu",
        "css-1dbjc4n r-1awozwy r-1kihuf0 r-18u37iz r-1pi2tsx r-1777fci r-1pjcn9w r-xr3zp9 r-1xcajam r-ipm5af r-g6jmlv",
        "css-1dbjc4n r-1ffj0ar r-1p0dtai r-1d2f490 r-1xcajam r-zchlnj r-ipm5af"  
    ];
    
    classes_to_remove.forEach(_class => {
        let elements = document.getElementsByClassName(_class);
        let testDivs = Array.prototype.filter.call(elements, element => {
			element.remove();
		});
    });
    
    
    let html = document.documentElement;
    
    html.style.overflow = "scroll";
    html.style.overscrollBehaviorY = "scroll";   
    
}



