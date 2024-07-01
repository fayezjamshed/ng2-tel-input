import * as i0 from '@angular/core';
import { EventEmitter, PLATFORM_ID, Directive, Inject, Input, Output, HostListener, NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const defaultUtilScript = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js';
class Ng2TelInput {
    constructor(el, platformId) {
        this.el = el;
        this.platformId = platformId;
        this.ng2TelInputOptions = {};
        this.hasError = new EventEmitter();
        this.ng2TelOutput = new EventEmitter();
        this.countryChange = new EventEmitter();
        this.intlTelInputObject = new EventEmitter();
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.ng2TelInputOptions = {
                ...this.ng2TelInputOptions,
                utilsScript: this.getUtilsScript(this.ng2TelInputOptions)
            };
            this.ngTelInput = window.intlTelInput(this.el.nativeElement, {
                ...this.ng2TelInputOptions
            });
            this.el.nativeElement.addEventListener("countrychange", () => {
                this.countryChange.emit(this.ngTelInput.getSelectedCountryData());
            });
            this.intlTelInputObject.emit(this.ngTelInput);
        }
    }
    onBlur() {
        let isInputValid = this.isInputValid();
        if (isInputValid) {
            let telOutput = this.ngTelInput.getNumber();
            this.hasError.emit(isInputValid);
            this.ng2TelOutput.emit(telOutput);
        }
        else {
            this.hasError.emit(isInputValid);
        }
    }
    isInputValid() {
        return this.ngTelInput.isValidNumber();
    }
    setCountry(country) {
        this.ngTelInput.setCountry(country);
    }
    getUtilsScript(options) {
        return options.utilsScript || defaultUtilScript;
    }
}
Ng2TelInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Ng2TelInput, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
Ng2TelInput.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: Ng2TelInput, selector: "[ng2TelInput]", inputs: { ng2TelInputOptions: "ng2TelInputOptions" }, outputs: { hasError: "hasError", ng2TelOutput: "ng2TelOutput", countryChange: "countryChange", intlTelInputObject: "intlTelInputObject" }, host: { listeners: { "blur": "onBlur()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Ng2TelInput, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ng2TelInput]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { ng2TelInputOptions: [{
                type: Input,
                args: ['ng2TelInputOptions']
            }], hasError: [{
                type: Output,
                args: ['hasError']
            }], ng2TelOutput: [{
                type: Output,
                args: ['ng2TelOutput']
            }], countryChange: [{
                type: Output,
                args: ['countryChange']
            }], intlTelInputObject: [{
                type: Output,
                args: ['intlTelInputObject']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });

class Ng2TelInputModule {
    static forRoot() {
        return {
            ngModule: Ng2TelInputModule,
            providers: []
        };
    }
}
Ng2TelInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Ng2TelInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Ng2TelInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: Ng2TelInputModule, declarations: [Ng2TelInput], exports: [Ng2TelInput] });
Ng2TelInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Ng2TelInputModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Ng2TelInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [Ng2TelInput],
                    exports: [Ng2TelInput]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Ng2TelInput, Ng2TelInputModule };
//# sourceMappingURL=fayezjamshed-ng2-tel-input.mjs.map
