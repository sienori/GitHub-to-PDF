/* Copyright (c) 2018 Sienori All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Styles from './styles';

export default function createNewStylesWithUrl() {
    const url = location.href;

    //TODO:ダミー
    const showTimeline = true;
    const showHeader = false;
    const breakPage = false;

    const gist = {
        pattern: /^https:\/\/gist.github.com\/*/,
        printElementClassNames: ['file', `${showTimeline ? 'discussion-timeline' : ''}`],
        rules: [`
            @media print {
                body :not(.GitHub-to-PDF-isPrint) {
                    display:none !important;
                }
            }`, `
            @media print{
                .file-header {
                    ${showHeader ? '' : 'display:none !important;'}
                }
            }`, `
            @media print{
                .file {
                    ${breakPage ? 'page-break-after: always !important;' : ''}
                    ${showHeader ? '' : 'border: none !important;'}
                }
            }`, `
            @media print{
                table {
                    word-break: break-all !important;
                }
            }`, `
            @media print{
                .file td span,
                pre {
                    overflow-wrap: break-word !important;
                    white-space: pre-wrap !important;
                }
            }`
        ]
    };

    if (gist.pattern.test(url)) return new Styles(gist.printElementClassNames, gist.rules);
}