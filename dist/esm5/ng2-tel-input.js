import { ɵɵdirectiveInject, ElementRef, PLATFORM_ID, ɵɵdefineDirective, ɵɵlistener, ɵsetClassMetadata, Directive, Inject, Input, Output, HostListener, EventEmitter, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/** @type {?} */
var defaultUtilScript = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js';
var Ng2TelInput = /** @class */ (function () {
    function Ng2TelInput(el, platformId) {
        this.el = el;
        this.platformId = platformId;
        this.ng2TelInputOptions = {};
        this.hasError = new EventEmitter();
        this.ng2TelOutput = new EventEmitter();
        this.countryChange = new EventEmitter();
        this.intlTelInputObject = new EventEmitter();
    }
    /**
     * @public
     * @return {?}
     */
    Ng2TelInput.prototype.ngOnInit = /**
     * @public
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.ng2TelInputOptions = __assign(__assign({}, this.ng2TelInputOptions), { utilsScript: this.getUtilsScript(this.ng2TelInputOptions) });
            this.ngTelInput = window.intlTelInput(this.el.nativeElement, __assign({}, this.ng2TelInputOptions));
            this.el.nativeElement.addEventListener("countrychange", (/**
             * @return {?}
             */
            function () {
                _this.countryChange.emit(_this.ngTelInput.getSelectedCountryData());
            }));
            this.intlTelInputObject.emit(this.ngTelInput);
        }
    };
    /**
     * @public
     * @return {?}
     */
    Ng2TelInput.prototype.onBlur = /**
     * @public
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isInputValid = this.isInputValid();
        if (isInputValid) {
            /** @type {?} */
            var telOutput = this.ngTelInput.getNumber();
            this.hasError.emit(isInputValid);
            this.ng2TelOutput.emit(telOutput);
        }
        else {
            this.hasError.emit(isInputValid);
        }
    };
    /**
     * @public
     * @return {?}
     */
    Ng2TelInput.prototype.isInputValid = /**
     * @public
     * @return {?}
     */
    function () {
        return this.ngTelInput.isValidNumber();
    };
    /**
     * @public
     * @param {?} country
     * @return {?}
     */
    Ng2TelInput.prototype.setCountry = /**
     * @public
     * @param {?} country
     * @return {?}
     */
    function (country) {
        this.ngTelInput.setCountry(country);
    };
    /**
     * @public
     * @param {?} options
     * @return {?}
     */
    Ng2TelInput.prototype.getUtilsScript = /**
     * @public
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return options.utilsScript || defaultUtilScript;
    };
    /** @nocollapse */ Ng2TelInput.ɵfac = function Ng2TelInput_Factory(t) { return new (t || Ng2TelInput)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PLATFORM_ID)); };
    /** @nocollapse */ Ng2TelInput.ɵdir = /** @pureOrBreakMyCode */ ɵɵdefineDirective({ type: Ng2TelInput, selectors: [["", "ng2TelInput", ""]], hostBindings: function Ng2TelInput_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("blur", function Ng2TelInput_blur_HostBindingHandler() { return ctx.onBlur(); });
        } }, inputs: { ng2TelInputOptions: "ng2TelInputOptions" }, outputs: { hasError: "hasError", ng2TelOutput: "ng2TelOutput", countryChange: "countryChange", intlTelInputObject: "intlTelInputObject" } });
    return Ng2TelInput;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Ng2TelInput, [{
        type: Directive,
        args: [{
                selector: '[ng2TelInput]',
            }]
    }], function () { return [{ type: ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { ng2TelInputOptions: [{
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
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/ng2-tel-input.module.ts
 * @suppress {checkTypes,const,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode}
 */
var Ng2TelInputModule = /** @class */ (function () {
    function Ng2TelInputModule() {
    }
    /**
     * @public
     * @return {?}
     */
    Ng2TelInputModule.forRoot = /**
     * @public
     * @return {?}
     */
    function () {
        return {
            ngModule: Ng2TelInputModule,
            providers: []
        };
    };
    /** @nocollapse */ Ng2TelInputModule.ɵfac = function Ng2TelInputModule_Factory(t) { return new (t || Ng2TelInputModule)(); };
    /** @nocollapse */ Ng2TelInputModule.ɵmod = /** @pureOrBreakMyCode */ ɵɵdefineNgModule({ type: Ng2TelInputModule });
    /** @nocollapse */ Ng2TelInputModule.ɵinj = /** @pureOrBreakMyCode */ ɵɵdefineInjector({});
    return Ng2TelInputModule;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Ng2TelInputModule, [{
        type: NgModule,
        args: [{
                declarations: [Ng2TelInput],
                exports: [Ng2TelInput]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Ng2TelInputModule, { declarations: [Ng2TelInput], exports: [Ng2TelInput] }); })();

export { Ng2TelInput, Ng2TelInputModule };
