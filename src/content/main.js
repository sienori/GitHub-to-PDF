/* Copyright (c) 2018 Sienori All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Styles from 'styles.js';
import createNewStylesWithUrl from 'createNewStylesWithUrl.js';

let styles;
browser.runtime.onMessage.addListener(request => {
    switch (request.message) {
        case 'changeStyle':
            styles = createNewStylesWithUrl();
            styles.changeStyle();
            break;
        case 'undoStyle':
            styles.undoStyle();
            break;
    }
});
