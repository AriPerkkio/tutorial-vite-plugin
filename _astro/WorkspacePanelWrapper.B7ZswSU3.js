import { j as n, u as Y } from "./index.DR7-KvQw.js";
import {
  c as w,
  P as G,
  a as E,
  b as H,
  C as O,
  d as ee,
  T as te,
} from "./index.BzYUR_Os.js";
import { r as o } from "./index.C_2Labmr.js";
import { n as U, w as se, t as re } from "./webcontainer.DyeNY-hR.js";
import { r as N } from "./_slug_.ceccda57.Bi8bmdDj.js";
import { t as ne } from "./theme-store.BIhrttrH.js";
import "./index.DgoachrA.js";
const le = 12,
  ae = [/\/node_modules\//];
function oe({
  files: s,
  onFileClick: e,
  selectedFile: r,
  hideRoot: t,
  scope: l,
  hiddenFiles: i,
  className: x,
}) {
  const d = o.useMemo(() => [...ae, ...(i ?? [])], [i]),
    p = o.useMemo(() => fe(s, t, l, d), [s, t, l, d]),
    [b, h] = o.useState(() => new Set());
  o.useEffect(() => {
    h(new Set());
  }, [s]);
  const u = o.useMemo(() => {
    const a = [];
    let k = Number.MAX_SAFE_INTEGER;
    for (const C of p) {
      const S = C.depth;
      k === S && (k = Number.MAX_SAFE_INTEGER),
        b.has(C.id) && (k = Math.min(k, S)),
        !(k < S) && a.push(C);
    }
    return a;
  }, [p, b]);
  function g(a) {
    h((k) => {
      const C = new Set(k);
      return C.has(a) ? C.delete(a) : C.add(a), C;
    });
  }
  return n.jsx("div", {
    className: w(x, "bg-tk-elements-fileTree-backgroundColor"),
    children: u.map((a) => {
      switch (a.kind) {
        case "file":
          return n.jsx(
            ce,
            {
              selected: r === a.fullPath,
              file: a,
              onClick: () => e(a.fullPath),
            },
            a.id
          );
        case "folder":
          return n.jsx(
            ie,
            { folder: a, collapsed: b.has(a.id), onClick: () => g(a.id) },
            a.id
          );
      }
    }),
  });
}
function ie({ folder: { depth: s, name: e }, collapsed: r, onClick: t }) {
  return n.jsx(W, {
    className:
      "group bg-tk-elements-fileTree-folder-backgroundColor hover:bg-tk-elements-fileTree-folder-backgroundColorHover text-tk-elements-fileTree-folder-textColor hover:text-tk-elements-fileTree-folder-textColor",
    depth: s,
    iconClasses: w(
      "text-tk-elements-fileTree-folder-iconColor group-hover:text-tk-elements-fileTree-folder-iconColorHover",
      { "i-ph-folder-simple-duotone": r, "i-ph-folder-open-duotone": !r }
    ),
    onClick: t,
    children: e,
  });
}
function ce({ file: { depth: s, name: e }, onClick: r, selected: t }) {
  return n.jsx(W, {
    className: w("group", {
      "bg-tk-elements-fileTree-file-backgroundColor hover:bg-tk-elements-fileTree-file-backgroundColorHover text-tk-elements-fileTree-file-textColor hover:text-tk-elements-fileTree-file-textColorHover":
        !t,
      "bg-tk-elements-fileTree-file-backgroundColorSelected text-tk-elements-fileTree-file-textColorSelected":
        t,
    }),
    depth: s,
    iconClasses: w("i-ph-file-duotone", {
      "text-tk-elements-fileTree-file-iconColor group-hover:text-tk-elements-fileTree-file-iconColorHover":
        !t,
      "text-tk-elements-fileTree-file-iconColorSelected": t,
    }),
    onClick: r,
    children: e,
  });
}
function W({
  depth: s,
  iconClasses: e,
  onClick: r,
  className: t,
  children: l,
}) {
  return n.jsxs("button", {
    className: `flex items-center gap-2 w-full pr-2 border-2 border-transparent text-faded ${t ?? ""}`,
    style: { paddingLeft: `${12 + s * le}px` },
    onClick: () => r?.(),
    children: [
      n.jsx("div", { className: w("scale-120 shrink-0", e) }),
      n.jsx("span", { children: l }),
    ],
  });
}
function fe(s, e, r, t) {
  const l = new Set(),
    i = [],
    x = e ? 0 : 1;
  e || i.push({ kind: "folder", name: "/", depth: 0, id: 0 });
  for (const d of s) {
    if (r && !d.startsWith(r)) continue;
    const p = d.split("/").filter((u) => u),
      b = p.at(-1);
    if (!b || de(d, b, t)) continue;
    let h = "";
    for (let u = 0; u < p.length; ++u) {
      const g = p[u],
        a = (h += `/${g}`);
      u === p.length - 1
        ? i.push({
            kind: "file",
            id: i.length,
            name: g,
            fullPath: a,
            depth: u + x,
          })
        : l.has(a) ||
          (l.add(a),
          i.push({ kind: "folder", id: i.length, name: g, depth: u + x }));
    }
  }
  return i;
}
function de(s, e, r) {
  return r.some((t) => (typeof t == "string" ? e === t : t.test(s)));
}
const ue = 25;
function me({
  theme: s,
  lesson: e,
  showFileTree: r = !0,
  helpAction: t,
  editorDocument: l,
  onEditorChange: i,
  onEditorScroll: x,
  onHelpClick: d,
  onFileClick: p,
}) {
  const b = o.useRef(null),
    [h, u] = o.useState(e.data.focus),
    g = o.useCallback(
      (a) => {
        u(a), p?.(a);
      },
      [p]
    );
  return (
    o.useEffect(() => {
      u(e.data.focus);
    }, [e]),
    o.useEffect(() => {
      const { current: a } = b;
      a && (r ? a.isCollapsed() && a.resize(ue) : r || a.collapse());
    }, [e]),
    n.jsxs(G, {
      className: "bg-tk-elements-app-backgroundColor",
      direction: "horizontal",
      children: [
        n.jsxs(E, {
          className: "flex flex-col",
          collapsible: !0,
          defaultSize: 0,
          minSize: 10,
          ref: b,
          children: [
            n.jsx("div", {
              className:
                "panel-header border-r border-b border-tk-elements-app-borderColor",
              children: n.jsxs("div", {
                className: "panel-title",
                children: [
                  n.jsx("div", {
                    className:
                      "panel-icon i-ph-tree-structure-duotone shrink-0",
                  }),
                  n.jsx("span", { className: "text-sm", children: "Files" }),
                ],
              }),
            }),
            n.jsx(oe, {
              className:
                "flex-grow py-2 border-r border-tk-elements-app-borderColor text-sm",
              selectedFile: h,
              hideRoot: e.data.hideRoot ?? !0,
              files: e.files[1],
              scope: e.data.scope,
              onFileClick: g,
            }),
          ],
        }),
        n.jsx(H, {
          disabled: !r,
          className: N.PanelResizeHandle,
          hitAreaMargins: { fine: 8, coarse: 8 },
        }),
        n.jsxs(E, {
          className: "flex flex-col",
          defaultSize: 100,
          minSize: 10,
          children: [
            n.jsx(pe, { editorDocument: l, onHelpClick: d, helpAction: t }),
            n.jsx("div", {
              className: "h-full flex-1 overflow-hidden",
              children: n.jsx(O, {
                theme: s,
                reset: e,
                doc: l,
                autoFocusOnDocumentChange: !0,
                onScroll: x,
                onChange: i,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function pe({ editorDocument: s, helpAction: e, onHelpClick: r }) {
  const l = s?.filePath?.split("/").at(-1) ?? "",
    i = l ? he(l) : "";
  return n.jsxs("div", {
    className:
      "panel-header border-b border-tk-elements-app-borderColor flex justify-between",
    children: [
      n.jsxs("div", {
        className: "panel-title",
        children: [
          n.jsx("div", { className: `panel-icon scale-125 ${i}` }),
          n.jsx("span", { className: "text-sm", children: l }),
        ],
      }),
      !!e &&
        n.jsxs("button", {
          onClick: r,
          className: "panel-button px-2 py-0.5 -mr-1 -my-1",
          children: [
            e === "solve" &&
              n.jsx("div", { className: "i-ph-lightbulb-duotone text-lg" }),
            e === "solve" && "Solve",
            e === "reset" &&
              n.jsx("div", {
                className: "i-ph-clock-counter-clockwise-duotone",
              }),
            e === "reset" && "Reset",
          ],
        }),
    ],
  });
}
function he(s) {
  const e = s.split(".").at(-1);
  if (!e) return console.error("Cannot infer file type"), null;
  switch (e) {
    case "ts":
      return "i-languages-ts?mask";
    case "cjs":
    case "mjs":
    case "js":
      return "i-languages-js?mask";
    case "html":
      return "i-languages-html?mask";
    case "css":
      return "i-languages-css?mask";
    case "scss":
    case "sass":
      return "i-languages-sass?mask";
    case "md":
      return "i-languages-markdown?mask";
    case "json":
      return "i-languages-json?mask";
    case "gif":
    case "jpg":
    case "jpeg":
    case "png":
      return "i-ph-image";
    default:
      return null;
  }
}
class ge {
  _map = new Map();
  _templateLoadTask;
  _templateLoaded;
  async getLessonTemplate(e) {
    const r = `template-${e.data.template}`;
    if (this._map.has(r)) return this._map.get(r);
    if (this._templateLoadTask && this._templateLoaded === r)
      return this._templateLoadTask.promise;
    this._templateLoadTask?.cancel();
    const t = U(async (l) => {
      const i = await fetch(`/tutorial-vite-plugin/${r}.json`, { signal: l });
      if (!i.ok) throw new Error(`Failed to fetch: status ${i.status}`);
      const x = D(await i.json());
      return this._map.set(r, x), l.throwIfAborted(), x;
    });
    return (this._templateLoadTask = t), (this._templateLoaded = r), t.promise;
  }
  getLessonFiles(e) {
    return this._getContentForFilesRef(e.files);
  }
  getLessonSolution(e) {
    return this._getContentForFilesRef(e.solution);
  }
  async _getContentForFilesRef(e) {
    if (e[1].length === 0) return {};
    const r = this._getPathToFetch(e[0]);
    return this._map.has(r) ? this._map.get(r) : this._fetchFiles(r);
  }
  async _fetchFiles(e) {
    let r = 2;
    for (;;) {
      try {
        const t = await fetch(`/tutorial-vite-plugin/${e}`);
        if (!t.ok)
          throw new Error(`Failed to fetch ${e}: ${t.status} ${t.statusText}`);
        const l = D(await t.json());
        return this._map.set(e, l), l;
      } catch (t) {
        if (r <= 0)
          return (
            console.error(`Failed to fetch ${e} after 3 attempts.`),
            console.error(t),
            {}
          );
      }
      (r -= 1), await se();
    }
  }
  _getPathToFetch(e) {
    return (
      encodeURIComponent(e.replaceAll("/", "-").replaceAll("_", "")) + ".json"
    );
  }
}
const R = new ge();
function D(s) {
  const e = {};
  if (typeof s != "object") return e;
  for (const r in s) {
    const t = s[r];
    let l;
    typeof t == "object"
      ? (l = Uint8Array.from(atob(t.base64), (i) => i.charCodeAt(0)))
      : (l = t),
      (e[r] = l);
  }
  return e;
}
const M = 25;
function ke({ lesson: s, tutorialRunner: e, theme: r }) {
  const { editor: t, previews: l, terminal: i } = s.data,
    x = t === void 0 || t === !0 || (t !== !1 && t?.fileTree !== !1),
    d =
      i === !1 ||
      (typeof i == "object" &&
        Array.isArray(i.panels) &&
        i.panels.length === 0),
    p = o.useRef(null),
    b = o.useRef(null),
    h = o.useRef(null),
    u = o.useRef(null),
    g = o.useRef(!1),
    [a, k] = o.useState({}),
    [C, S] = o.useState("reset"),
    [F, P] = o.useState({}),
    [_, L] = o.useState(),
    v = o.useMemo(() => {
      if (_) return F[_];
    }, [F, _]),
    X = o.useCallback(
      (m) => {
        if (!v) return;
        const { filePath: c } = v,
          f = F[c];
        if (!f) return;
        const j = f.value,
          T = m.content,
          y = j !== T;
        (f.value = T), y && e.updateFile(c, f.value);
      },
      [v, F]
    ),
    Z = o.useCallback(
      (m) => {
        if (!v) return;
        const { filePath: c } = v,
          f = F[c];
        f && (f.scroll = m);
      },
      [v, F]
    ),
    B = o.useCallback(() => {
      const m = (c) => {
        P((f) => {
          const j = { ...f };
          for (const T in c) j[T] = { ...j[T], value: c[T] };
          return j;
        }),
          e.updateFiles(c);
      };
      $(s)
        ? S((c) =>
            c === "reset"
              ? (k((f) => (m(f.files ?? {}), f)), "solve")
              : (k((f) => (m(f.solution ?? {}), f)), "reset")
          )
        : k((c) => (m(c.files ?? {}), c));
    }, [s]);
  o.useEffect(() => {
    P(
      Object.fromEntries(
        s.files[1].map((c) => [c, { value: "", loading: !0, filePath: c }])
      )
    ),
      e.setPreviews(s.data.previews),
      e.setTerminalConfiguration(s.data.terminal);
    const m = U(
      async (c) => {
        const f = R.getLessonTemplate(s),
          j = R.getLessonFiles(s),
          T = e.prepareFiles({ template: f, files: j, signal: c });
        e.runCommands(s.data);
        const [y, J, A] = await Promise.all([f, R.getLessonSolution(s), j]);
        c.throwIfAborted(),
          k({ template: y, solution: J, files: A }),
          P((K) =>
            Object.fromEntries(
              Object.entries(A).map(([z, Q]) => [
                z,
                { value: Q, loading: !1, filePath: z, scroll: K[z]?.scroll },
              ])
            )
          ),
          s.data.focus === void 0
            ? L(void 0)
            : A[s.data.focus] !== void 0 && L(s.data.focus),
          await T,
          c.throwIfAborted(),
          s.data.autoReload;
      },
      { ignoreCancel: !0 }
    );
    return $(s) ? S("solve") : S("reset"), () => m.cancel();
  }, [s]),
    o.useEffect(() => {
      d && (I(), (g.current = !1));
    }, [d]);
  const V = o.useCallback(() => {
      const { current: m } = h;
      m && (g.current ? m.expand() : ((g.current = !0), m.resize(M)));
    }, []),
    I = o.useCallback(() => {
      h.current?.collapse();
    }, []),
    q = o.useCallback(() => {
      const { current: m } = h;
      m && (h.current?.isCollapsed() ? V() : I());
    }, []);
  return n.jsxs(G, {
    className: N.PanelGroup,
    direction: "vertical",
    children: [
      n.jsx(E, {
        id: t === !1 ? "editor-closed" : "editor-opened",
        defaultSize: t === !1 ? 0 : 50,
        minSize: 10,
        maxSize: t === !1 ? 0 : 100,
        collapsible: t === !1,
        ref: p,
        children: n.jsx(me, {
          theme: r,
          showFileTree: x,
          editorDocument: v,
          lesson: s,
          helpAction: C,
          onHelpClick: B,
          onFileClick: L,
          onEditorScroll: Z,
          onEditorChange: X,
        }),
      }),
      n.jsx(H, {
        className: N.PanelResizeHandle,
        hitAreaMargins: { fine: 5, coarse: 5 },
        disabled: t === !1,
      }),
      n.jsx(E, {
        id: l === !1 ? "previews-closed" : "previews-opened",
        defaultSize: l === !1 ? 0 : 50,
        minSize: 10,
        maxSize: l === !1 ? 0 : 100,
        collapsible: l === !1,
        ref: b,
        className: w({
          "border-t border-tk-elements-app-borderColor": t !== !1,
        }),
        children: n.jsx(ee, {
          tutorialRunner: e,
          ref: u,
          showToggleTerminal: !d,
          toggleTerminal: q,
        }),
      }),
      n.jsx(H, {
        className: N.PanelResizeHandle,
        hitAreaMargins: { fine: 5, coarse: 5 },
        disabled: d || l === !1,
      }),
      n.jsx(E, {
        id: d
          ? "terminal-none"
          : l === !1 && t === !1
            ? "terminal-full"
            : l === !1
              ? "terminal-opened"
              : "terminal-closed",
        defaultSize: d ? 0 : l === !1 && t === !1 ? 100 : l === !1 ? M : 0,
        minSize: d ? 0 : 10,
        collapsible: l !== !1,
        ref: h,
        onExpand: () => {
          g.current = !0;
        },
        className: w({
          "border-t border-tk-elements-app-borderColor": l !== !1,
        }),
        children: n.jsx(te, { tutorialRunner: e, theme: r }),
      }),
    ],
  });
}
function $(s) {
  return Object.keys(s.solution).length >= 1;
}
function we({ lesson: s }) {
  const e = Y(ne);
  return n.jsx(ke, { lesson: s, tutorialRunner: re, theme: e });
}
export { we as WorkspacePanelWrapper };
