/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

S.initOptionsPage().then(function(){
    
    let obj={test: "added by options.js"};
    S.save(obj);
    S.clear("test");
    
    document.addEventListener('click', function (e) {
        switch (e.target.id) {
            case "save":
                S.saveOptionsPage();
                break;
            case "initSettings":
                S.clearAll().then(function(){
                    browser.runtime.openOptionsPage();
                });                
                break;
                           }
    });
    
});