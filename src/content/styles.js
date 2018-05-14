/* Copyright (c) 2018 Sienori All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export default class Styles {
    constructor(printElementClassNames, rules) {
        this.stylesheet = document.styleSheets.item(0);
        this.isPrintClassName = 'GitHub-to-PDF-isPrint';
        this.printElementClassNames = printElementClassNames;
        this.rules = rules;
    }

    addClassToParentElements(element) {
        element.classList.add(this.isPrintClassName);

        const parent = element.parentElement;
        if (parent != undefined) this.addClassToParentElements(parent);
    }

    addClassTochildElements(element) {
        element.classList.add(this.isPrintClassName);

        const children = element.children;
        for (const child of children) {
            this.addClassTochildElements(child);
        }
    }

    insertRules() {
        for (const rule of this.rules) {
            this.stylesheet.insertRule(rule, 0);
        }
    }

    deleteRules() {
        for (const i in this.rules) {
            this.stylesheet.deleteRule(0);
        }
    }

    changeStyle() {
        //プリントする要素を列挙
        for (const printElementClassName of this.printElementClassNames) {
            const printElements = document.getElementsByClassName(printElementClassName);

            //プリントする要素の先祖と子孫にisPrintを追加
            for (const element of printElements) {
                this.addClassToParentElements(element);
                this.addClassTochildElements(element);
            }
        }

        this.insertRules();
    }

    undoStyle() {
        //全てのisPrintを削除
        const isPrintElements = document.getElementsByClassName(this.isPrintClassName);
        for (const element of isPrintElements) {
            element.classList.remove(this.isPrintClassName);
        }

        this.deleteRules();
    }
}