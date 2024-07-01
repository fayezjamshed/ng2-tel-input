import { Directive, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
const defaultUtilScript = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js';
export class Ng2TelInput {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXRlbC1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uZzItdGVsLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR3BELE1BQU0saUJBQWlCLEdBQUcsMEVBQTBFLENBQUM7QUFLckcsTUFBTSxPQUFPLFdBQVc7SUFTdEIsWUFBb0IsRUFBYyxFQUNILFVBQWtCO1FBRDdCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDSCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBVHBCLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELHVCQUFrQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXpGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHO2dCQUN4QixHQUFHLElBQUksQ0FBQyxrQkFBa0I7Z0JBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUMxRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO2dCQUMzRCxHQUFHLElBQUksQ0FBQyxrQkFBa0I7YUFDM0IsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFcUIsTUFBTTtRQUMxQixJQUFJLFlBQVksR0FBWSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFZO1FBQ3pCLE9BQU8sT0FBTyxDQUFDLFdBQVcsSUFBSSxpQkFBaUIsQ0FBQztJQUNsRCxDQUFDOzt3R0FwRFUsV0FBVyw0Q0FVWixXQUFXOzRGQVZWLFdBQVc7MkZBQVgsV0FBVztrQkFIdkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7OzBCQVdJLE1BQU07MkJBQUMsV0FBVzs0Q0FUUSxrQkFBa0I7c0JBQTlDLEtBQUs7dUJBQUMsb0JBQW9CO2dCQUNQLFFBQVE7c0JBQTNCLE1BQU07dUJBQUMsVUFBVTtnQkFDTSxZQUFZO3NCQUFuQyxNQUFNO3VCQUFDLGNBQWM7Z0JBQ0csYUFBYTtzQkFBckMsTUFBTTt1QkFBQyxlQUFlO2dCQUNPLGtCQUFrQjtzQkFBL0MsTUFBTTt1QkFBQyxvQkFBb0I7Z0JBMEJOLE1BQU07c0JBQTNCLFlBQVk7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuY29uc3QgZGVmYXVsdFV0aWxTY3JpcHQgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvaW50bC10ZWwtaW5wdXQvMTYuMC4xL2pzL3V0aWxzLmpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nMlRlbElucHV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE5nMlRlbElucHV0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCduZzJUZWxJbnB1dE9wdGlvbnMnKSBuZzJUZWxJbnB1dE9wdGlvbnM6IGFueSA9IHt9O1xuICBAT3V0cHV0KCdoYXNFcnJvcicpIGhhc0Vycm9yOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ25nMlRlbE91dHB1dCcpIG5nMlRlbE91dHB1dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2NvdW50cnlDaGFuZ2UnKSBjb3VudHJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnaW50bFRlbElucHV0T2JqZWN0JykgaW50bFRlbElucHV0T2JqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ1RlbElucHV0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMubmcyVGVsSW5wdXRPcHRpb25zID0ge1xuICAgICAgICAuLi50aGlzLm5nMlRlbElucHV0T3B0aW9ucyxcbiAgICAgICAgdXRpbHNTY3JpcHQ6IHRoaXMuZ2V0VXRpbHNTY3JpcHQodGhpcy5uZzJUZWxJbnB1dE9wdGlvbnMpXG4gICAgICB9O1xuICAgICAgdGhpcy5uZ1RlbElucHV0ID0gd2luZG93LmludGxUZWxJbnB1dCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgLi4udGhpcy5uZzJUZWxJbnB1dE9wdGlvbnNcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvdW50cnljaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLmNvdW50cnlDaGFuZ2UuZW1pdCh0aGlzLm5nVGVsSW5wdXQuZ2V0U2VsZWN0ZWRDb3VudHJ5RGF0YSgpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmludGxUZWxJbnB1dE9iamVjdC5lbWl0KHRoaXMubmdUZWxJbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uQmx1cigpIHtcbiAgICBsZXQgaXNJbnB1dFZhbGlkOiBib29sZWFuID0gdGhpcy5pc0lucHV0VmFsaWQoKTtcbiAgICBpZiAoaXNJbnB1dFZhbGlkKSB7XG4gICAgICBsZXQgdGVsT3V0cHV0ID0gdGhpcy5uZ1RlbElucHV0LmdldE51bWJlcigpO1xuICAgICAgdGhpcy5oYXNFcnJvci5lbWl0KGlzSW5wdXRWYWxpZCk7XG4gICAgICB0aGlzLm5nMlRlbE91dHB1dC5lbWl0KHRlbE91dHB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzRXJyb3IuZW1pdChpc0lucHV0VmFsaWQpO1xuICAgIH1cbiAgfVxuXG4gIGlzSW5wdXRWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZ1RlbElucHV0LmlzVmFsaWROdW1iZXIoKTtcbiAgfVxuXG4gIHNldENvdW50cnkoY291bnRyeTogYW55KSB7XG4gICAgdGhpcy5uZ1RlbElucHV0LnNldENvdW50cnkoY291bnRyeSk7XG4gIH1cblxuICBnZXRVdGlsc1NjcmlwdChvcHRpb25zOiBhbnkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy51dGlsc1NjcmlwdCB8fCBkZWZhdWx0VXRpbFNjcmlwdDtcbiAgfVxufVxuIl19