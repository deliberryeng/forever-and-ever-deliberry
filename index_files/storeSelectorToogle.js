
function toggleStoreListSelect(dropDownStoreSelectorListId, storeListButtonId, hiddeFreeBadges) {
    var storeListButton = document.getElementById(storeListButtonId);

    var dropDownStoreSelectorList = document.getElementById(dropDownStoreSelectorListId);
    dropDownStoreSelectorList.style.width = storeListButton.offsetWidth + "px";
    dropDownStoreSelectorList.classList.toggle("show");

    var offsets = storeListButton.getBoundingClientRect();

    if (!dropDownStoreSelectorList.classList.contains('store-list-selector-header-top')) {
        dropDownStoreSelectorList.style.left = offsets.left+'px';
    }

    var freeBadges = document.getElementsByClassName('free-badge');
    if (hiddeFreeBadges && freeBadges !== undefined) {
        freeBadges[0].style.visibility = document.getElementById(dropDownStoreSelectorListId).classList.contains('show')
            ? 'hidden'
            : 'visible';
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.can-toggle-store-list-select')) {
        var dropdowns = document.getElementsByClassName("store-list-selector");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}