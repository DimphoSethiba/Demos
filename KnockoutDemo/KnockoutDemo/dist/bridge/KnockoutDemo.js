/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 17.0.0
 */
Bridge.assembly("KnockoutDemo", function ($asm, globals) {
    "use strict";

    Bridge.define("KnockoutDemo.App", {
        main: function Main () {

            ko.applyBindings(new KnockoutDemo.ViewModel("Planet", "Earth"));
        }
    });

    Bridge.define("KnockoutDemo.ViewModel", {
        fields: {
            firstName: null,
            lastName: null,
            fullName: null
        },
        ctors: {
            ctor: function (first, last) {
                this.$initialize();
                this.firstName = ko.observable(first);
                this.lastName = ko.observable(last);

                this.fullName = ko.pureComputed(Bridge.fn.bind(this, function () {
                    return (this.firstName() || "") + " " + (this.lastName() || "");
                }));
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJLbm9ja291dERlbW8uanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIkFwcC5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7WUFnQllBLGlCQUFrQ0EsSUFBSUE7Ozs7Ozs7Ozs7OzRCQWF6QkEsT0FBY0E7O2dCQUUzQkEsaUJBQVlBLGNBQTRDQTtnQkFDeERBLGdCQUFXQSxjQUE0Q0E7O2dCQUd2REEsZ0JBQVdBLGdCQUF5Q0EsQUFBaUVBOzJCQUFNQSxrQ0FBeUJBIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG51c2luZyBOZXd0b25zb2Z0Lkpzb247XHJcbnVzaW5nIFN5c3RlbTtcclxuLy91c2luZyBPYnNlcnZhYmxlU3RyaW5nID0gUmV0eXBlZC5rbm9ja291dC5Lbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxudXNpbmcgQ29tcHV0ZWRTdHJpbmcgPSBSZXR5cGVkLmtub2Nrb3V0Lktub2Nrb3V0Q29tcHV0ZWQ8c3RyaW5nPjtcclxuXHJcbm5hbWVzcGFjZSBLbm9ja291dERlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIFwiSGVsbG8gd29sZFwiIGRlbW8gY2FuIGJlIGZvdW5kIGhlcmU6XHJcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9rbm9ja291dGpzLmNvbS9leGFtcGxlcy9oZWxsb1dvcmxkLmh0bWxcclxuXHJcbiAgICAgICAgICAgIFJldHlwZWQua25vY2tvdXQua28uYXBwbHlCaW5kaW5ncyhuZXcgVmlld01vZGVsKFwiUGxhbmV0XCIsIFwiRWFydGhcIikpOyAvLyBUaGlzIG1ha2VzIEtub2Nrb3V0IGdldCB0byB3b3JrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlcmUncyBteSBkYXRhIG1vZGVsXHJcbiAgICBwdWJsaWMgY2xhc3MgVmlld01vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFJldHlwZWQua25vY2tvdXQuS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz4gZmlyc3ROYW1lIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFJldHlwZWQua25vY2tvdXQuS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz4gbGFzdE5hbWUgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29tcHV0ZWRTdHJpbmcgZnVsbE5hbWUgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVmlld01vZGVsKHN0cmluZyBmaXJzdCwgc3RyaW5nIGxhc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmaXJzdE5hbWUgPSBSZXR5cGVkLmtub2Nrb3V0LmtvLm9ic2VydmFibGUuU2VsZjxzdHJpbmc+KGZpcnN0KTtcclxuICAgICAgICAgICAgbGFzdE5hbWUgPSBSZXR5cGVkLmtub2Nrb3V0LmtvLm9ic2VydmFibGUuU2VsZjxzdHJpbmc+KGxhc3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gS25vY2tvdXQgdHJhY2tzIGRlcGVuZGVuY2llcyBhdXRvbWF0aWNhbGx5LiBJdCBrbm93cyB0aGF0IGZ1bGxOYW1lIGRlcGVuZHMgb24gZmlyc3ROYW1lIGFuZCBsYXN0TmFtZSwgYmVjYXVzZSB0aGVzZSBnZXQgY2FsbGVkIHdoZW4gZXZhbHVhdGluZyBmdWxsTmFtZS5cclxuICAgICAgICAgICAgZnVsbE5hbWUgPSBSZXR5cGVkLmtub2Nrb3V0LmtvLnB1cmVDb21wdXRlZDxzdHJpbmc+KChnbG9iYWw6OlJldHlwZWQua25vY2tvdXQuS25vY2tvdXRTdGF0aWMucHVyZUNvbXB1dGVkRm48c3RyaW5nPikoKCkgPT4gZmlyc3ROYW1lLlNlbGYoKSArIFwiIFwiICsgbGFzdE5hbWUuU2VsZigpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0KfQo=
