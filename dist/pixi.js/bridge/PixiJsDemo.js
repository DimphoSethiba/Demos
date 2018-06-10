/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 17.1.0
 */
Bridge.assembly("PixiJsDemo", function ($asm, globals) {
    "use strict";

    Bridge.define("PixiJsDemo.App", {
        main: function Main () {

            var demo = new PixiJsDemo.Demo();
            demo.Start();
        }
    });

    Bridge.define("PixiJsDemo.Demo", {
        fields: {
            app: null,
            texture: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();

                var appOptions = { };
                appOptions.backgroundColor = 1087931;

                var rootEl = document.querySelector("#root");
                this.app = new PIXI.Application(800, 600, appOptions);
                rootEl.appendChild(this.app.view);

                this.texture = PIXI.Texture.fromImage("https://raw.githubusercontent.com/pixijs/examples/gh-pages/required/assets/bunny.png");
                this.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            }
        },
        methods: {
            Start: function () {
                var renderer = this.app.renderer;

                for (var i = 0; i < 10; i = (i + 1) | 0) {
                    this.createBunny(Math.floor(Math.random() * renderer.width), Math.floor(Math.random() * renderer.height));
                }
            },
            createBunny: function (x, y) {
                var bunny = new PIXI.Sprite(this.texture);

                bunny.interactive = true;

                bunny.buttonMode = true;

                bunny.anchor.set(0.5);

                bunny.scale.set(3);


                bunny.on("pointerdown", Bridge.fn.cacheBind(this, this.onDragStart));
                bunny.on("pointerup", Bridge.fn.cacheBind(this, this.onDragEnd));
                bunny.on("pointerupoutside", Bridge.fn.cacheBind(this, this.onDragEnd));
                bunny.on("pointermove", Bridge.fn.cacheBind(this, this.onDragMove));

                bunny.x = x;
                bunny.y = y;

                this.app.stage.addChild(bunny);
            },
            onDragStart: function (ev) {

                var target = ev.currentTarget;

                target.dragging = true;
                target.data = ev.data;
                target.alpha = 0.5;
            },
            onDragEnd: function (ev) {
                var target = ev.currentTarget;

                target.alpha = 1;
                target.dragging = false;

                target.data = null;
            },
            onDragMove: function (ev) {
                var target = ev.currentTarget;

                if (target.dragging) {
                    var newPosition = target.data.getLocalPosition(target.parent);

                    target.x = newPosition.x;
                    target.y = newPosition.y;
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJQaXhpSnNEZW1vLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJBcHAuY3MiLCJEZW1vLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztZQVNZQSxXQUFXQSxJQUFJQTtZQUNmQTs7Ozs7Ozs7Ozs7OztnQkNLQUEsaUJBQWlCQTtnQkFDakJBOztnQkFFQUEsYUFBYUEsQUFBb0JBO2dCQUNqQ0EsV0FBTUEsSUFBSUEsMkJBQTJDQTtnQkFDckRBLG1CQUEwREE7O2dCQUcxREEsZUFBVUE7Z0JBQ1ZBLHFDQUFnQ0E7Ozs7O2dCQUtoQ0EsZUFBZUEsQUFBcUNBOztnQkFFcERBLEtBQUtBLFdBQVdBLFFBQVFBO29CQUVwQkEsaUJBQ0lBLFdBQWVBLGdCQUFvQkEsaUJBQ25DQSxXQUFlQSxnQkFBb0JBOzs7bUNBSXRCQSxHQUFVQTtnQkFHL0JBLFlBQVlBLElBQUlBLFlBQTRCQTs7Z0JBRzVDQTs7Z0JBR0FBOztnQkFHQUE7O2dCQUdBQSxBQUFDQSxBQUE0QkE7OztnQkFLN0JBLHdCQUF3QkEsQUFBMkRBO2dCQUNuRkEsc0JBQXNCQSxBQUEyREE7Z0JBQ2pGQSw2QkFBNkJBLEFBQTJEQTtnQkFDeEZBLHdCQUF3QkEsQUFBMkRBOztnQkFHbkZBLFVBQVVBO2dCQUNWQSxVQUFVQTs7Z0JBR1ZBLHdCQUF3REE7O21DQUduQ0E7O2dCQU1yQkEsYUFBYUEsQUFBV0E7O2dCQUV4QkE7Z0JBQ0FBLGNBQWNBO2dCQUNkQTs7aUNBR21CQTtnQkFFbkJBLGFBQWFBLEFBQVdBOztnQkFFeEJBO2dCQUNBQTs7Z0JBR0FBLGNBQWNBOztrQ0FHTUE7Z0JBRXBCQSxhQUFhQSxBQUFXQTs7Z0JBRXhCQSxJQUFJQTtvQkFFQUEsa0JBQWtCQSw2QkFBNkJBOztvQkFFL0NBLFdBQVdBO29CQUNYQSxXQUFXQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJuYW1lc3BhY2UgUGl4aUpzRGVtb1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQXBwXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgZGVtbzpcclxuICAgICAgICAgICAgLy8gaHR0cDovL3BpeGlqcy5naXRodWIuaW8vZXhhbXBsZXMvIy9kZW1vcy9kcmFnZ2luZy5qc1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlbW8gPSBuZXcgRGVtbygpO1xyXG4gICAgICAgICAgICBkZW1vLlN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBSZXR5cGVkO1xyXG5cclxubmFtZXNwYWNlIFBpeGlKc0RlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIERlbW9cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IFJldHlwZWQucGl4aV9qcy5QSVhJLkFwcGxpY2F0aW9uIGFwcDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IFJldHlwZWQucGl4aV9qcy5QSVhJLlRleHR1cmUgdGV4dHVyZTtcclxuXHJcbiAgICAgICAgcHVibGljIERlbW8oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgZGVtbzpcclxuICAgICAgICAgICAgLy8gaHR0cDovL3BpeGlqcy5naXRodWIuaW8vZXhhbXBsZXMvIy9kZW1vcy9kcmFnZ2luZy5qc1xyXG5cclxuICAgICAgICAgICAgdmFyIGFwcE9wdGlvbnMgPSBuZXcgUmV0eXBlZC5waXhpX2pzLlBJWEkuQXBwbGljYXRpb25PcHRpb25zKCk7XHJcbiAgICAgICAgICAgIGFwcE9wdGlvbnMuYmFja2dyb3VuZENvbG9yID0gMTA4NzkzMTtcclxuXHJcbiAgICAgICAgICAgIHZhciByb290RWwgPSAoZG9tLkhUTUxEaXZFbGVtZW50KWRvbS5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPHN0cmluZz4oXCIjcm9vdFwiKTtcclxuICAgICAgICAgICAgYXBwID0gbmV3IFJldHlwZWQucGl4aV9qcy5QSVhJLkFwcGxpY2F0aW9uKDgwMCwgNjAwLCBhcHBPcHRpb25zKTtcclxuICAgICAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTENhbnZhc0VsZW1lbnQ+KGFwcC52aWV3KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBTcHJpdGUgZnJvbSBhbiBpbWFnZSBwYXRoXHJcbiAgICAgICAgICAgIHRleHR1cmUgPSBSZXR5cGVkLnBpeGlfanMuUElYSS5UZXh0dXJlLmZyb21JbWFnZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9waXhpanMvZXhhbXBsZXMvZ2gtcGFnZXMvcmVxdWlyZWQvYXNzZXRzL2J1bm55LnBuZ1wiKTtcclxuICAgICAgICAgICAgdGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBSZXR5cGVkLnBpeGlfanMuUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU3RhcnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gKFJldHlwZWQucGl4aV9qcy5QSVhJLkNhbnZhc1JlbmRlcmVyKWFwcC5yZW5kZXJlcjtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlQnVubnkoXHJcbiAgICAgICAgICAgICAgICAgICAgZXM1Lk1hdGguZmxvb3IoZXM1Lk1hdGgucmFuZG9tKCkgKiByZW5kZXJlci53aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgZXM1Lk1hdGguZmxvb3IoZXM1Lk1hdGgucmFuZG9tKCkgKiByZW5kZXJlci5oZWlnaHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGNyZWF0ZUJ1bm55KGRvdWJsZSB4LCBkb3VibGUgeSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBvdXIgbGl0dGxlIGJ1bm55IGZyaWVuZC4uXHJcbiAgICAgICAgICAgIHZhciBidW5ueSA9IG5ldyBSZXR5cGVkLnBpeGlfanMuUElYSS5TcHJpdGUodGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBlbmFibGUgdGhlIGJ1bm55IHRvIGJlIGludGVyYWN0aXZlLi4uIHRoaXMgd2lsbCBhbGxvdyBpdCB0byByZXNwb25kIHRvIG1vdXNlIGFuZCB0b3VjaCBldmVudHNcclxuICAgICAgICAgICAgYnVubnkuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcyBidXR0b24gbW9kZSB3aWxsIG1lYW4gdGhlIGhhbmQgY3Vyc29yIGFwcGVhcnMgd2hlbiB5b3Ugcm9sbCBvdmVyIHRoZSBidW5ueSB3aXRoIHlvdXIgbW91c2VcclxuICAgICAgICAgICAgYnVubnkuYnV0dG9uTW9kZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjZW50ZXIgdGhlIGJ1bm55J3MgYW5jaG9yIHBvaW50XHJcbiAgICAgICAgICAgIGJ1bm55LmFuY2hvci5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1ha2UgaXQgYSBiaXQgYmlnZ2VyLCBzbyBpdCdzIGVhc2llciB0byBncmFiXHJcbiAgICAgICAgICAgICgoUmV0eXBlZC5waXhpX2pzLlBJWEkuUG9pbnQpYnVubnkuc2NhbGUpLnNldCgzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldHVwIGV2ZW50cyBmb3IgbW91c2UgKyB0b3VjaCB1c2luZ1xyXG4gICAgICAgICAgICAvLyB0aGUgcG9pbnRlciBldmVudHNcclxuXHJcbiAgICAgICAgICAgIGJ1bm55Lm9uKFwicG9pbnRlcmRvd25cIiwgKEFjdGlvbjxSZXR5cGVkLnBpeGlfanMuUElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50PilvbkRyYWdTdGFydCk7XHJcbiAgICAgICAgICAgIGJ1bm55Lm9uKFwicG9pbnRlcnVwXCIsIChBY3Rpb248UmV0eXBlZC5waXhpX2pzLlBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudD4pb25EcmFnRW5kKTtcclxuICAgICAgICAgICAgYnVubnkub24oXCJwb2ludGVydXBvdXRzaWRlXCIsIChBY3Rpb248UmV0eXBlZC5waXhpX2pzLlBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudD4pb25EcmFnRW5kKTtcclxuICAgICAgICAgICAgYnVubnkub24oXCJwb2ludGVybW92ZVwiLCAoQWN0aW9uPFJldHlwZWQucGl4aV9qcy5QSVhJLmludGVyYWN0aW9uLkludGVyYWN0aW9uRXZlbnQ+KW9uRHJhZ01vdmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgc3ByaXRlIHRvIGl0cyBkZXNpZ25hdGVkIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGJ1bm55LnggPSB4O1xyXG4gICAgICAgICAgICBidW5ueS55ID0geTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBpdCB0byB0aGUgc3RhZ2VcclxuICAgICAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5waXhpX2pzLlBJWEkuU3ByaXRlPihidW5ueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgb25EcmFnU3RhcnQoUmV0eXBlZC5waXhpX2pzLlBJWEkuaW50ZXJhY3Rpb24uSW50ZXJhY3Rpb25FdmVudCBldilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBkYXRhXHJcbiAgICAgICAgICAgIC8vIHRoZSByZWFzb24gZm9yIHRoaXMgaXMgYmVjYXVzZSBvZiBtdWx0aXRvdWNoXHJcbiAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gdHJhY2sgdGhlIG1vdmVtZW50IG9mIHRoaXMgcGFydGljdWxhciB0b3VjaFxyXG5cclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IChUYXJnZXRFeCkgZXYuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldC5kcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRhcmdldC5kYXRhID0gZXYuZGF0YTtcclxuICAgICAgICAgICAgdGFyZ2V0LmFscGhhID0gMC41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIG9uRHJhZ0VuZChSZXR5cGVkLnBpeGlfanMuUElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50IGV2KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IChUYXJnZXRFeCkgZXYuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldC5hbHBoYSA9IDE7XHJcbiAgICAgICAgICAgIHRhcmdldC5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHNldCB0aGUgaW50ZXJhY3Rpb24gZGF0YSB0byBudWxsXHJcbiAgICAgICAgICAgIHRhcmdldC5kYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBvbkRyYWdNb3ZlKFJldHlwZWQucGl4aV9qcy5QSVhJLmludGVyYWN0aW9uLkludGVyYWN0aW9uRXZlbnQgZXYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKFRhcmdldEV4KSBldi5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5kcmFnZ2luZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gdGFyZ2V0LmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0YXJnZXQucGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQueCA9IG5ld1Bvc2l0aW9uLng7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQueSA9IG5ld1Bvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXQp9Cg==
