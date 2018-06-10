﻿using System;
using Bridge;
using MissingAPI;

using static Retyped.dom;
using static Retyped.svg_js;

namespace SvgJsDemo
{
    public class App
    {
        private static HTMLDivElement _rootDiv;
        private static Element _content;

        public static void Main()
        {
            _content = (Element)document.querySelector("#content");

            var btnPongGame = (HTMLButtonElement)document.querySelector("#btnPongGame");
            var btnAnimation = (HTMLButtonElement)document.querySelector("#btnAnimation");

            btnPongGame.onclick = ev =>
            {
                RenderPongGame();
            };

            btnAnimation.onclick = ev =>
            {
                RenderAnimation();
            };

            // Render Pong Game by default
            RenderPongGame();
        }

        /// <summary>
        /// Original sources: http://jsfiddle.net/wout/ncb3w5Lv/1/?utm_source=website&utm_medium=embed&utm_campaign=ncb3w5Lv
        /// </summary>
        private static void RenderPongGame()
        {
            if (_rootDiv != null)
            {
                _content.removeChild(_rootDiv);
            }

            // Create Div for SVG elements:
            var svgDiv = new HTMLDivElement();
            new PongGame().Render(svgDiv);

            // Add Label:
            var label = new HTMLLabelElement();
            label.innerHTML = "You are Red. Hit SPACE to start. Use ARROWS to control the pad.";

            // Add root Div to the Document
            _rootDiv = new HTMLDivElement();
            _rootDiv.appendChild(svgDiv);
            _rootDiv.appendChild(label);

            _content.appendChild(_rootDiv);
        }

        /// <summary>
        /// Original sources: http://jsfiddle.net/wout/7wL1uv8n/?utm_source=website&utm_medium=embed&utm_campaign=7wL1uv8n
        /// </summary>
        private static void RenderAnimation()
        {
            if (_rootDiv != null)
            {
                _content.removeChild(_rootDiv);
            }

            // Create Input for text:
            var input = new HTMLInputElement
            {
                type = "text",
                value = "Retyped.svg.js -- - ->",
                placeholder = "Type text here..."
            };

            // Create Div for SVG elements:
            var svgDiv = new HTMLDivElement();

            var draw = svgjs2.Self(svgDiv).viewbox(0, 0, 300, 140);
            var text = draw.text(add =>
            {
                add.tspan(input.value);
            });

            text
                .path("M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")
                .animate(1000, "<>")
                .plot("M10 80 C 40 150, 65 150, 95 80 S 150 10, 180 80")
                .loop(null, true);

            input.addEventListener("keyup", () => text.tspan(input.value));

            // Add root Div to the Document
            _rootDiv = new HTMLDivElement();
            _rootDiv.appendChild(input);
            _rootDiv.appendChild(svgDiv);

            _content.appendChild(_rootDiv);
        }
    }
}

namespace MissingAPI
{
    public static class SvgJsExtensions
    {
        [Template("{0}.loop({1}, {2})")]
        public static extern svgjs.Animation loop(this svgjs.Animation el, int? times, bool reverse);

        [Template("{0}.plot({1})")]
        public static extern svgjs.Animation plot(this svgjs.Animation animation, svgjs.PointArrayAlias points);

        [Template("{0}.opacity({1})")]
        public static extern svgjs.Animation opacity(this svgjs.Animation animation, double value);

        [Template("{0}.font({1}, {2})")]
        public static extern svgjs.Text font(this svgjs.Text font, string attr, string value);

        [Template("{0}.on({1}, {2}, {3})")]
        public static extern void on(this svgjs.Library svg, EventTarget target, string action, Delegate handler);
    }
}