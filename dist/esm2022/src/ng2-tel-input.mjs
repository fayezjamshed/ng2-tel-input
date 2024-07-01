import { Directive, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
const defaultUtilScript = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js';
export class Ng2TelInput {
    el;
    platformId;
    ng2TelInputOptions = {};
    hasError = new EventEmitter();
    ng2TelOutput = new EventEmitter();
    countryChange = new EventEmitter();
    intlTelInputObject = new EventEmitter();
    ngTelInput;
    constructor(el, platformId) {
        this.el = el;
        this.platformId = platformId;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: Ng2TelInput, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.5", type: Ng2TelInput, selector: "[ng2TelInput]", inputs: { ng2TelInputOptions: "ng2TelInputOptions" }, outputs: { hasError: "hasError", ng2TelOutput: "ng2TelOutput", countryChange: "countryChange", intlTelInputObject: "intlTelInputObject" }, host: { listeners: { "blur": "onBlur()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: Ng2TelInput, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ng2TelInput]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }], propDecorators: { ng2TelInputOptions: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXRlbC1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uZzItdGVsLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR3BELE1BQU0saUJBQWlCLEdBQUcsMEVBQTBFLENBQUM7QUFLckcsTUFBTSxPQUFPLFdBQVc7SUFTRjtJQUNXO0lBVEYsa0JBQWtCLEdBQTJCLEVBQUUsQ0FBQztJQUN6RCxRQUFRLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDakQsWUFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3BELGFBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNqRCxrQkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6RixVQUFVLENBQU07SUFFaEIsWUFBb0IsRUFBYyxFQUNILFVBQWtCO1FBRDdCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDSCxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQ2pELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3hCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjtnQkFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQzFELENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7Z0JBQzNELEdBQUcsSUFBSSxDQUFDLGtCQUFrQjthQUMzQixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO2dCQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztZQUNwRSxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDSCxDQUFDO0lBRXFCLE1BQU07UUFDMUIsSUFBSSxZQUFZLEdBQVksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hELElBQUksWUFBWSxFQUFFLENBQUM7WUFDakIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFZO1FBQ3pCLE9BQU8sT0FBTyxDQUFDLFdBQVcsSUFBSSxpQkFBaUIsQ0FBQztJQUNsRCxDQUFDO3VHQXBEVSxXQUFXLDRDQVVaLFdBQVc7MkZBVlYsV0FBVzs7MkZBQVgsV0FBVztrQkFIdkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7OzBCQVdJLE1BQU07MkJBQUMsV0FBVzt5Q0FUUSxrQkFBa0I7c0JBQTlDLEtBQUs7dUJBQUMsb0JBQW9CO2dCQUNQLFFBQVE7c0JBQTNCLE1BQU07dUJBQUMsVUFBVTtnQkFDTSxZQUFZO3NCQUFuQyxNQUFNO3VCQUFDLGNBQWM7Z0JBQ0csYUFBYTtzQkFBckMsTUFBTTt1QkFBQyxlQUFlO2dCQUNPLGtCQUFrQjtzQkFBL0MsTUFBTTt1QkFBQyxvQkFBb0I7Z0JBMEJOLE1BQU07c0JBQTNCLFlBQVk7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuY29uc3QgZGVmYXVsdFV0aWxTY3JpcHQgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvaW50bC10ZWwtaW5wdXQvMTYuMC4xL2pzL3V0aWxzLmpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nMlRlbElucHV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE5nMlRlbElucHV0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCduZzJUZWxJbnB1dE9wdGlvbnMnKSBuZzJUZWxJbnB1dE9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgQE91dHB1dCgnaGFzRXJyb3InKSBoYXNFcnJvcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCduZzJUZWxPdXRwdXQnKSBuZzJUZWxPdXRwdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdjb3VudHJ5Q2hhbmdlJykgY291bnRyeUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2ludGxUZWxJbnB1dE9iamVjdCcpIGludGxUZWxJbnB1dE9iamVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdUZWxJbnB1dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLm5nMlRlbElucHV0T3B0aW9ucyA9IHtcbiAgICAgICAgLi4udGhpcy5uZzJUZWxJbnB1dE9wdGlvbnMsXG4gICAgICAgIHV0aWxzU2NyaXB0OiB0aGlzLmdldFV0aWxzU2NyaXB0KHRoaXMubmcyVGVsSW5wdXRPcHRpb25zKVxuICAgICAgfTtcbiAgICAgIHRoaXMubmdUZWxJbnB1dCA9IHdpbmRvdy5pbnRsVGVsSW5wdXQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICAgIC4uLnRoaXMubmcyVGVsSW5wdXRPcHRpb25zXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb3VudHJ5Y2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5jb3VudHJ5Q2hhbmdlLmVtaXQodGhpcy5uZ1RlbElucHV0LmdldFNlbGVjdGVkQ291bnRyeURhdGEoKSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbnRsVGVsSW5wdXRPYmplY3QuZW1pdCh0aGlzLm5nVGVsSW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBvbkJsdXIoKSB7XG4gICAgbGV0IGlzSW5wdXRWYWxpZDogYm9vbGVhbiA9IHRoaXMuaXNJbnB1dFZhbGlkKCk7XG4gICAgaWYgKGlzSW5wdXRWYWxpZCkge1xuICAgICAgbGV0IHRlbE91dHB1dCA9IHRoaXMubmdUZWxJbnB1dC5nZXROdW1iZXIoKTtcbiAgICAgIHRoaXMuaGFzRXJyb3IuZW1pdChpc0lucHV0VmFsaWQpO1xuICAgICAgdGhpcy5uZzJUZWxPdXRwdXQuZW1pdCh0ZWxPdXRwdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0Vycm9yLmVtaXQoaXNJbnB1dFZhbGlkKTtcbiAgICB9XG4gIH1cblxuICBpc0lucHV0VmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmdUZWxJbnB1dC5pc1ZhbGlkTnVtYmVyKCk7XG4gIH1cblxuICBzZXRDb3VudHJ5KGNvdW50cnk6IGFueSkge1xuICAgIHRoaXMubmdUZWxJbnB1dC5zZXRDb3VudHJ5KGNvdW50cnkpO1xuICB9XG5cbiAgZ2V0VXRpbHNTY3JpcHQob3B0aW9uczogYW55KSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudXRpbHNTY3JpcHQgfHwgZGVmYXVsdFV0aWxTY3JpcHQ7XG4gIH1cbn1cbiJdfQ==