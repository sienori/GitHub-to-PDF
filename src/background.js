/* Copyright (c) 2018 Sienori All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

browser.pageAction.onClicked.addListener(handleClick);

async function handleClick(info) {
    await browser.tabs.sendMessage(info.id, {
        message: "changeStyle"
    });

    await browser.tabs.printPreview();

    await browser.tabs.sendMessage(info.id, {
        message: "undoStyle"
    });
}
