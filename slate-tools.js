/* =========================================
   SLATE TOOLS — palette de stylo + gomme + tout effacer
   Composant partagé par bank.html, ardoise_libre.html, ardoise_intelligente.html
   Un seul point de vérité pour les 10 couleurs, le comportement de la gomme
   et l'intégration au canvas — voir chaque page hôte pour l'usage (mount()).
   ========================================= */
const SlateTools = (function () {
    const COLORS = [
        { hex: "#262626", fr: "Noir", es: "Negro" },
        { hex: "#8E9AAB", fr: "Gris", es: "Gris" },
        { hex: "#5DADE2", fr: "Bleu clair", es: "Azul claro" },
        { hex: "#7CC576", fr: "Vert clair", es: "Verde claro" },
        { hex: "#E6B800", fr: "Jaune", es: "Amarillo" },
        { hex: "#F0965D", fr: "Orange", es: "Naranja" },
        { hex: "#E15252", fr: "Rouge", es: "Rojo" },
        { hex: "#EC7FA9", fr: "Rose", es: "Rosa" },
        { hex: "#A379D9", fr: "Violet", es: "Morado" },
        { hex: "#9C6B44", fr: "Marron", es: "Marrón" }
    ];

    function createController(options) {
        const opts = Object.assign({
            penWidth: 6,
            eraserWidth: 22,
            paletteId: "pen-color-palette",
            eraserBtnId: "btn-pen-eraser",
            clearBtnId: "btn-pen-clear"
        }, options || {});

        const state = { color: COLORS[0].hex, isErasing: false };
        let ctxRef = null;
        let eraserBtnEl = null;

        function paletteHTML() {
            const swatches = COLORS.map(function (c, i) {
                return '<button class="pen-color-swatch' + (i === 0 ? ' active' : '') + '" data-color="' + c.hex + '" style="background:' + c.hex + '" aria-label="' + c.fr + ' / ' + c.es + '" title="' + c.fr + ' / ' + c.es + '"></button>';
            }).join("");
            return (
                '<div class="pen-toolbar">' +
                    '<div class="pen-color-palette" id="' + opts.paletteId + '">' + swatches + '</div>' +
                    '<div class="pen-tools">' +
                        '<button class="pen-tool-btn" id="' + opts.eraserBtnId + '" type="button" aria-label="Gomme / Goma" title="Gomme / Goma"><i class="fa-solid fa-eraser"></i></button>' +
                        '<button class="pen-tool-btn" id="' + opts.clearBtnId + '" type="button" aria-label="Tout effacer / Borrar todo" title="Tout effacer / Borrar todo"><i class="fa-solid fa-trash"></i></button>' +
                    '</div>' +
                '</div>'
            );
        }

        function applyStyle(ctx) {
            const target = ctx || ctxRef;
            if (!target) return;
            target.lineCap = "round";
            target.lineJoin = "round";
            target.lineWidth = state.isErasing ? opts.eraserWidth : opts.penWidth;
            target.strokeStyle = state.color;
            target.globalCompositeOperation = state.isErasing ? "destination-out" : "source-over";
        }

        function setPenWidth(width) {
            opts.penWidth = width;
            applyStyle();
        }

        function mount(mountEl, ctx, onClear) {
            ctxRef = ctx;
            mountEl.innerHTML = paletteHTML();
            const paletteEl = document.getElementById(opts.paletteId);
            eraserBtnEl = document.getElementById(opts.eraserBtnId);
            const clearBtn = document.getElementById(opts.clearBtnId);

            paletteEl.querySelectorAll(".pen-color-swatch").forEach(function (btn) {
                btn.addEventListener("click", function () {
                    state.color = btn.dataset.color;
                    state.isErasing = false;
                    eraserBtnEl.classList.remove("active-eraser");
                    paletteEl.querySelectorAll(".pen-color-swatch").forEach(function (s) { s.classList.remove("active"); });
                    btn.classList.add("active");
                    applyStyle();
                });
            });

            eraserBtnEl.addEventListener("click", function () {
                state.isErasing = !state.isErasing;
                eraserBtnEl.classList.toggle("active-eraser", state.isErasing);
                applyStyle();
            });

            clearBtn.addEventListener("click", function () {
                if (onClear) onClear();
            });

            applyStyle();
        }

        return { mount: mount, applyStyle: applyStyle, setPenWidth: setPenWidth, state: state };
    }

    return { createController: createController, COLORS: COLORS };
})();
