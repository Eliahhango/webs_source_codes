#!/usr/bin/env node
/**
 * HTML → Next.js converter for the GlobeTrek template.
 * Extracts header/footer/modals into shared components and converts
 * each page body into a React route component. Preserves all markup,
 * inline styles, classes and URLs (rewritten to local routes/assets).
 */
import { parseDOM } from 'htmlparser2';
import { render } from 'dom-serializer';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const SRC = path.resolve('/home/eliah/Documents/source_codes/tfglobetrek.vercel.app');
const OUT = path.resolve('/home/eliah/Documents/source_codes/tfglobetrek-next');

const PAGES = [
  'index','aboutus','asqquestion','blogdetail','bloggrid','bloglist','contactus',
  'destination1','destination2','destinationdetail','gridsidebarleft','gridsidebarright',
  'gridstyle01','gridstyle02','gridstylefullwidth','gridtourhalfmapright','homepage2',
  'homepage3','homepage4','homepage5','home-video-background','listhalfmapright',
  'listsidebarleft','liststyle','liststylefullwidth','listtopmap','listtopmap01',
  'teammember','toursingle1','toursingle2','toursingle3','wishlist',
];

// route for each page file
function routeFor(name) {
  if (name === 'index') return '/';
  return '/' + name;
}

// ---------------------------------------------------------------------------
// HTML -> JSX serializer
// ---------------------------------------------------------------------------
const VOID = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const INLINE = new Set(['a','abbr','b','bdi','bdo','button','cite','code','data','em','i','img','input','kbd','label','mark','q','s','samp','select','small','span','strong','sub','sup','textarea','time','u','var']);

const ATTR_RENAME = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  contenteditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  datetime: 'dateTime',
  enctype: 'encType',
  formaction: 'formAction',
  formnovalidate: 'formNoValidate',
  inputmode: 'inputMode',
  allowfullscreen: 'allowFullScreen',
  playsinline: 'playsInline',
  srcset: 'srcSet',
  acceptcharset: 'acceptCharset',
  frameborder: 'frameBorder',
  usemap: 'useMap',
  charset: 'charSet',
  'http-equiv': 'httpEquiv',
  itemprop: 'itemProp',
  srcdoc: 'srcDoc',
  hreflang: 'hrefLang',
  'xlink:href': 'xlinkHref',
  'xml:space': 'xmlSpace',
  'xmlns:xlink': 'xmlnsXlink',
};

const BOOLEAN = new Set(['allowfullscreen','async','autofocus','autoplay','checked','controls','default','defer','disabled','formnovalidate','hidden','ismap','itemscope','loop','multiple','muted','nomodule','novalidate','open','playsinline','readonly','required','reversed','selected','truespeed']);

const SVG_ATTRS = new Set(['viewbox','preserveaspectratio','gradientunits','gradienttransform','spreadmethod','stopcolor','stopopacity','strokewidth','strokeopacity','strokelinecap','strokelinejoin','strokemiterlimit','fillrule','fillopacity','clippath','cliprule','stroke-dasharray','stroke-dashoffset','font-family','font-size','font-weight','font-style','text-anchor','textlength','letterspacing','wordspacing','markerstart','markerend','markermid','markerwidth','markerheight','markerunits','baselineshift','floodcolor','floodopacity','lightingcolor','colorinterpolation','colorinterpolationfilters','colorspace','dominantbaseline','glyphorientationhorizontal','horizadvx','vertadvy','vertoriginx','vertoriginy','arabicform','capheight','ideographic','mathematical','overlineposition','overline-thickness','underlineposition','underline-thickness','strikethroughposition','strikethrough-thickness','glyphname','glyphref','horizoriginx','horizoriginy','xheight','clippathunits','filterunits','maskcontentunits','maskunits','patterncontentunits','patternunits','systemlanguage','specularconstant','specularexponent','surfacewidth','surfaceheight']);

const SVG_RENAME = {
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  gradientunits: 'gradientUnits',
  gradienttransform: 'gradientTransform',
  spreadmethod: 'spreadMethod',
  stopcolor: 'stopColor',
  stopopacity: 'stopOpacity',
  strokewidth: 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  strokelinecap: 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  fillrule: 'fillRule',
  fillopacity: 'fillOpacity',
  clippath: 'clipPath',
  cliprule: 'clipRule',
  markerstart: 'markerStart',
  markerend: 'markerEnd',
  markermid: 'markerMid',
  markerwidth: 'markerWidth',
  markerheight: 'markerHeight',
  markerunits: 'markerUnits',
  textanchor: 'textAnchor',
  textlength: 'textLength',
  letterspacing: 'letterSpacing',
  wordspacing: 'wordSpacing',
  fontfamily: 'fontFamily',
  fontsize: 'fontSize',
  fontweight: 'fontWeight',
  fontstyle: 'fontStyle',
  baselineShift: 'baselineShift',
  startoffset: 'startOffset',
  colorinterpolation: 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  colorspace: 'colorSpace',
  dominantbaseline: 'dominantBaseline',
  xheight: 'xHeight',
  clippathunits: 'clipPathUnits',
  filterunits: 'filterUnits',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  patterncontentunits: 'patternContentUnits',
  patternunits: 'patternUnits',
  systemlanguage: 'systemLanguage',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  surfacewidth: 'surfaceWidth',
  surfaceheight: 'surfaceHeight',
};

const SVG_TAG_RENAME = {
  textpath: 'textPath',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  clippath: 'clipPath',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  feoffset: 'feOffset',
  fegaussianblur: 'feGaussianBlur',
  feblend: 'feBlend',
  fecolormatrix: 'feColorMatrix',
  fecomposite: 'feComposite',
  feflood: 'feFlood',
  fefuncr: 'feFuncR',
  fefuncg: 'feFuncG',
  fefuncb: 'feFuncB',
  fefunca: 'feFuncA',
  feimage: 'feImage',
  femorphology: 'feMorphology',
  fetile: 'feTile',
  feturbulence: 'feTurbulence',
  'fe-blend': 'feBlend',
  'fe-color-matrix': 'feColorMatrix',
  'fe-component-transfer': 'feComponentTransfer',
  'fe-composite': 'feComposite',
  'fe-convolve-matrix': 'feConvolveMatrix',
  'fe-diffuse-lighting': 'feDiffuseLighting',
  'fe-displacement-map': 'feDisplacementMap',
  'fe-distant-light': 'feDistantLight',
  'fe-drop-shadow': 'feDropShadow',
  'fe-flood': 'feFlood',
  'fe-func-a': 'feFuncA',
  'fe-func-b': 'feFuncB',
  'fe-func-g': 'feFuncG',
  'fe-func-r': 'feFuncR',
  'fe-gaussian-blur': 'feGaussianBlur',
  'fe-image': 'feImage',
  'fe-merge': 'feMerge',
  'fe-merge-node': 'feMergeNode',
  'fe-morphology': 'feMorphology',
  'fe-offset': 'feOffset',
  'fe-point-light': 'fePointLight',
  'fe-specular-lighting': 'feSpecularLighting',
  'fe-spot-light': 'feSpotLight',
  'fe-tile': 'feTile',
  'fe-turbulence': 'feTurbulence',
  'fe-func-a': 'feFuncA',
  'linear-gradient': 'linearGradient',
  'radial-gradient': 'radialGradient',
  'clip-path': 'clipPath',
};

function camelCase(attr) {
  const parts = attr.split('-');
  if (parts.length === 1) return attr;
  return parts[0] + parts.slice(1).map((p) => p[0].toUpperCase() + p.slice(1)).join('');
}

function convertStyle(styleStr) {
  const obj = {};
  for (const decl of styleStr.split(';')) {
    const idx = decl.indexOf(':');
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    if (!prop) continue;
    if (prop.startsWith('--')) {
      obj[prop] = val;
    } else {
      obj[camelCase(prop.toLowerCase())] = val;
    }
  }
  return obj;
}

function escapeText(t) {
  return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(v) {
  return v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

const SELF_HOST = 'https://tfglobetrek.vercel.app';

function rewriteUrl(value, attr) {
  if (value === undefined || value === null) return value;
  let v = value.trim();
  if (!v) return v;
  // self-referential absolute links
  if (v.startsWith(SELF_HOST)) {
    const rest = v.slice(SELF_HOST.length);
    return rest ? routeify(rest) : '/';
  }
  if (/^(https?:|mailto:|tel:|data:|javascript:|blob:|#|\/\/)/.test(v)) return v;
  // route links: *.html
  if (/^[a-zA-Z0-9._-]+\.html/.test(v)) return routeify(v);
  // asset paths
  return '/' + v.replace(/^\.\//, '').replace(/^\.\.\//, '');
}

function routeify(v) {
  const hashIdx = v.indexOf('#');
  const hash = hashIdx === -1 ? '' : v.slice(hashIdx);
  const file = hashIdx === -1 ? v : v.slice(0, hashIdx);
  const name = file.replace(/\.html$/, '');
  if (name === 'index') return '/' + hash;
  return '/' + name + hash;
}

function rewriteSrcset(value) {
  return value
    .split(',')
    .map((part) => {
      const trimmed = part.trim();
      const [url, rest] = trimmed.split(/\s+/, 2);
      const newUrl = rewriteUrl(url, 'srcset');
      return newUrl + (rest ? ' ' + rest : '');
    })
    .join(', ');
}

function convertAttrs(tagName, attribs) {
  const out = [];
  for (const [rawKey, rawVal] of Object.entries(attribs || {})) {
    let key = rawKey.toLowerCase();
    let val = rawVal;

    // event handlers
    if (key === 'onclick') {
      const fn = (val || '').trim().replace(/;$/, '');
      if (/^[a-zA-Z_$][\w$]*\s*\(.*\)$/.test(fn)) {
        const name = fn.slice(0, fn.indexOf('('));
        out.push(`onClick={() => window.${name}?.()}`);
      } else {
        out.push(`onClick={() => { window.eval(${JSON.stringify(fn)}) }}`);
      }
      continue;
    }
    if (key.startsWith('on') && /^on[a-z]/.test(key) && key !== 'once') {
      // keep other inline handlers as eval-based (rare in template)
      out.push(`${key[0].toUpperCase() + key.slice(1)}={() => { window.eval(${JSON.stringify(val)}) }}`);
      continue;
    }

    const isSvg = /^(svg|path|circle|rect|line|polyline|polygon|ellipse|g|defs|linearGradient|radialGradient|stop|use|text|textPath|tspan|mask|clipPath|pattern|marker|symbol|image|filter)$/i.test(tagName);

    if (isSvg && (SVG_ATTRS.has(key) || SVG_RENAME[key] || key.includes('-'))) {
      key = SVG_RENAME[key] || camelCase(key);
    }

const NUMERIC = new Set(['rows','cols','size','maxlength','minlength','tabindex','span','rowspan','colspan','cellpadding','cellspacing','max','min','step','width','height','frameborder']);

    let prop = ATTR_RENAME[key] || key;

    // numeric HTML attributes -> numeric React props
    if (NUMERIC.has(key) && /^-?\d+(\.\d+)?$/.test(String(val))) {
      out.push(`${prop}={${Number(val)}}`);
      continue;
    }

    if (BOOLEAN.has(key)) {
      if (val === 'false' || val === false) {
        out.push(`${prop}={false}`);
      } else if (val === true || val === 'true' || val === '' || val === undefined || val === null) {
        out.push(prop);
      } else {
        out.push(`${prop}={${val}}`);
      }
      continue;
    }

    // URL rewriting for known url attrs
    if (['href', 'src', 'action', 'poster', 'data-src', 'data-bg', 'data-bgimage'].includes(prop)) {
      val = rewriteUrl(val);
    }
    if (['srcset', 'data-srcset'].includes(prop)) {
      val = rewriteSrcset(val);
    }
    if (val === undefined || val === null || val === true) {
      out.push(prop);
      continue;
    }
    if (prop === 'style') {
      const obj = convertStyle(String(val));
      if (Object.keys(obj).length) {
        out.push(`style={{ ${Object.entries(obj).map(([k, v]) => JSON.stringify(k) + ': ' + JSON.stringify(String(v))).join(', ')} }}`);
      }
      continue;
    }
    if (prop === 'className' && val === '') {
      continue;
    }
    // simple vs complex value
    if (/^[^\s"'<>]+$/.test(val)) {
      out.push(`${prop}="${escapeAttr(val)}"`);
    } else {
      out.push(`${prop}={${JSON.stringify(val)}}`);
    }
  }
  return out;
}

function isTextOnlyInline(nodes) {
  return nodes.length > 0 && nodes.every((n) => n.type === 'text');
}

function renderNodes(nodes, indent) {
  const lines = [];
  for (const node of nodes) {
    renderNode(node, indent, lines, nodes, nodes.indexOf(node));
  }
  return lines;
}

function renderNode(node, indent, lines, siblings, idx) {
  if (node.type === 'text') {
    const text = node.data || '';
    if (!text.trim()) {
      // whitespace-only: keep as {' '} only between inline-level nodes
      const prev = siblings[idx - 1];
      const next = siblings[idx + 1];
      const inlinePrev = prev && (prev.type === 'text' || (prev.type === 'tag' && INLINE.has(prev.name)));
      const inlineNext = next && (next.type === 'text' || (next.type === 'tag' && INLINE.has(next.name)));
      if (inlinePrev && inlineNext) lines.push(' '.repeat(indent) + "{' '}");
      return;
    }
    lines.push(' '.repeat(indent) + escapeText(text));
    return;
  }
  if (node.type !== 'tag') return; // comments, scripts, styles, directives -> skip

  const tagName = node.name.toLowerCase();
  const jsxTag = SVG_TAG_RENAME[tagName] || tagName;
  const attrs = convertAttrs(jsxTag, node.attribs);
  const attrStr = attrs.length ? ' ' + attrs.join(' ') : '';
  const children = (node.children || []).filter((c) => c.type !== 'comment' && c.type !== 'script' && c.type !== 'style' && c.type !== 'directive' && c.type !== 'cdata');

  const open = `<${jsxTag}${attrStr}`;
  if (VOID.has(tagName) || children.length === 0) {
    lines.push(' '.repeat(indent) + open + ' />');
    return;
  }
  lines.push(' '.repeat(indent) + open + '>');
  const childLines = renderNodes(children, indent + 2);
  lines.push(...childLines);
  lines.push(' '.repeat(indent) + `</${jsxTag}>`);
}

function htmlToJsx(html, indent = 0) {
  const dom = parseDOM(html, { decodeEntities: true, lowerCaseTags: true, lowerCaseAttributeNames: true });
  const lines = renderNodes(dom.filter((c) => c.type !== 'script' && c.type !== 'style' && c.type !== 'comment' && c.type !== 'directive' && c.type !== 'cdata'), indent);
  return lines.join('\n');
}

function serializeNode(node) {
  return renderNodes([node], 0).join('\n');
}

// ---------------------------------------------------------------------------
// Extraction helpers
// ---------------------------------------------------------------------------
function read(name) {
  return fs.readFileSync(path.join(SRC, name + '.html'), 'utf8');
}

function extractHeader(html) {
  const m = html.match(/<!-- Header -->\s*(<header[\s\S]*?<\/header>)/);
  if (!m) throw new Error('header not found');
  return m[1];
}

function extractBody(html) {
  const start = html.indexOf('</header>');
  const end = html.indexOf('<!-- Footer -->');
  if (start === -1 || end === -1) throw new Error('body boundaries not found');
  return html.slice(start + '</header>'.length, end);
}

function extractFooter(html) {
  const m = html.match(/(<footer[\s\S]*?<\/footer>)/);
  if (!m) throw new Error('footer not found');
  return m[1];
}

function extractAfterFooter(html) {
  const start = html.indexOf('</footer>');
  const end = html.indexOf('<!-- Javascript -->');
  if (start === -1 || end === -1) throw new Error('after-footer boundaries not found');
  return html.slice(start + '</footer>'.length, end);
}

function extractModals(afterFooter) {
  // collect top-level <div class="modal ..."> blocks as siblings
  const dom = parseDOM(afterFooter, { decodeEntities: true, lowerCaseTags: true, lowerCaseAttributeNames: true });
  const blocks = [];
  for (const node of dom) {
    if (node.type === 'tag' && node.name.toLowerCase() === 'div') {
      const cls = String(node.attribs.class || '').split(/\s+/);
      if (cls.includes('modal') && cls.includes('fade')) {
        blocks.push(node);
      } else if (cls.includes('modal') && /modal[A-Za-z]|auto-popup/.test(String(node.attribs.class || ''))) {
        blocks.push(node);
      }
    }
  }
  return blocks.map((b) => render(b)).join('\n');
}

// ---------------------------------------------------------------------------
// Generation
// ---------------------------------------------------------------------------
function write(file, content) {
  const full = path.join(OUT, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}

function format(file) {
  try {
    execSync(`npx prettier --write ${path.join(OUT, file)}`, { cwd: OUT, stdio: 'pipe' });
  } catch (e) {
    console.warn('prettier failed for', file, e.message.split('\n')[0]);
  }
}

const SHARED_MODAL_IDS = new Set(['modalWelcome','modalSearch','modalLogin','modalForgot','modalOTP','modalRegister','modalResetPassword']);

function modalIds(afterFooter) {
  return new Set([...afterFooter.matchAll(/id="(modal[A-Za-z]+)"/g)].map((m) => m[1]));
}

function extractSpecificModal(afterFooter, id) {
  const dom = parseDOM(afterFooter, { decodeEntities: true, lowerCaseTags: true, lowerCaseAttributeNames: true });
  for (const node of dom) {
    if (node.type === 'tag' && node.name.toLowerCase() === 'div') {
      const cls = String(node.attribs.class || '').split(/\s+/);
      if (cls.includes('modal') && String(node.attribs.id || '') === id) {
        return render(node);
      }
    }
  }
  return '';
}

// main
console.log('Reading template from', SRC);

const indexHtml = read('index');
const bloglistHtml = read('bloglist');

const headerHtml = extractHeader(indexHtml);
const footerHtml = extractFooter(indexHtml);
const indexAfterFooter = extractAfterFooter(indexHtml);
const bloglistAfterFooter = extractAfterFooter(bloglistHtml);

// shared modals from index (has the most shared modals incl. welcome)
const sharedModals = extractModals(indexAfterFooter);

// build header component
const headerJsx = htmlToJsx(headerHtml);
write('components/Header.tsx', `"use client";\n\nimport { usePathname } from "next/navigation";\n\ntype Variant = "style-1 static" | "style-1 fixed" | "style-2 fixed";\n\nconst VARIANTS: Record<string, Variant> = {\n${PAGES.map((p) => {
  let v;
  if (["homepage3","homepage4","homepage5"].includes(p)) v = "style-2 fixed";
  else if (["index","gridsidebarleft","gridsidebarright","gridstyle01","gridstyle02","gridstylefullwidth","home-video-background","listsidebarleft","liststylefullwidth","liststyle"].includes(p)) v = "style-1 fixed";
  else v = "style-1 static";
  return `  ${JSON.stringify(routeFor(p))}: ${JSON.stringify(v)},`;
}).join('\n')}\n};\n\nconst HEADER_CLASS: Record<Variant, string> = {\n  "style-1 static": "header style-1 color-1",\n  "style-1 fixed": "header style-1 position-fixed color-1",\n  "style-2 fixed": "header style-2 position-fixed color-2",\n};\n\nexport default function Header() {\n  const pathname = usePathname();\n  const variant: Variant = VARIANTS[pathname] ?? "style-1 static";\n  const headerClass = HEADER_CLASS[variant];\n  return (\n    <header id="header" className={headerClass}>\n${headerJsx.split('\n').map((l) => '      ' + l).join('\n')}\n    </header>\n  );\n}\n`);

// build footer component
const footerJsx = htmlToJsx(footerHtml);
write('components/Footer.tsx', `export default function Footer() {\n  return (\n    <>\n${footerJsx.split('\n').map((l) => '      ' + l).join('\n')}\n    </>\n  );\n}\n`);

// build modals component
const sharedModalJsx = htmlToJsx(sharedModals);
write('components/Modals.tsx', `export default function Modals() {\n  return (\n    <>\n${sharedModalJsx.split('\n').map((l) => '      ' + l).join('\n')}\n    </>\n  );\n}\n`);

// build back-to-top
const btRe = indexAfterFooter.match(/(<button class="backtotop"[\s\S]*?<\/button>)/);
write('components/BackToTop.tsx', `export default function BackToTop() {\n  return (\n    <>\n${htmlToJsx(btRe ? btRe[1] : '').split('\n').map((l) => '      ' + l).join('\n')}\n    </>\n  );\n}\n`);

// generate route pages
for (const page of PAGES) {
  const html = read(page);
  const body = extractBody(html);
  const afterFooter = extractAfterFooter(html);
  const extraIds = [...modalIds(afterFooter)].filter((id) => !SHARED_MODAL_IDS.has(id));
  let extraJsx = '';
  if (extraIds.length) {
    const parts = [];
    for (const id of extraIds) {
      const blk = extractSpecificModal(afterFooter, id);
      if (blk) parts.push(blk);
    }
    extraJsx = '\n' + htmlToJsx(parts.join('\n'));
  }
  const bodyJsx = htmlToJsx(body);
  const route = routeFor(page);
  const filePath = route === '/' ? 'app/page.tsx' : path.join('app', route, 'page.tsx');
  const isClient = bodyJsx.includes('onClick=') || bodyJsx.includes('onChange=') || extraJsx.includes('onClick=');
  write(filePath, `${isClient ? '"use client";\n\n' : ''}export default function ${page.replace(/-/g, '_')}Page() {\n  return (\n    <>\n${bodyJsx.split('\n').map((l) => '      ' + l).join('\n')}\n    </>\n  );\n}\n`);
  // extra modals appended inside the same component above? Append as sibling in fragment:
  if (extraJsx.trim()) {
    const content = fs.readFileSync(path.join(OUT, filePath), 'utf8');
    const updated = content.replace('    </>\n  );\n}', extraJsx.split('\n').map((l) => '      ' + l).join('\n') + '\n    </>\n  );\n}');
    fs.writeFileSync(path.join(OUT, filePath), updated);
  }
  format(filePath);
}

console.log('Done. Generated', PAGES.length, 'pages.');
