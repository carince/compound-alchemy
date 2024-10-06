import { createRequire as VPV_createRequire } from "node:module";
import { fileURLToPath as VPV_fileURLToPath } from "node:url";
import { dirname as VPV_dirname } from "node:path";
const require = VPV_createRequire(import.meta.url);
const __filename = VPV_fileURLToPath(import.meta.url);
const __dirname = VPV_dirname(__filename);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isBrowser.js
function isBrowser() {
  return typeof window !== "undefined" && typeof window.scrollY === "number";
}
var init_isBrowser = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isBrowser.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/unique.js
function unique(arr) {
  return Array.from(new Set(arr));
}
var init_unique = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/unique.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/PROJECT_VERSION.js
var PROJECT_VERSION;
var init_PROJECT_VERSION = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/PROJECT_VERSION.js"() {
    PROJECT_VERSION = "0.4.198";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/projectInfo.js
var projectInfo;
var init_projectInfo = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/projectInfo.js"() {
    init_PROJECT_VERSION();
    projectInfo = {
      projectName: "Vike",
      projectVersion: PROJECT_VERSION
    };
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getGlobalObject.js
function getGlobalObject(key, defaultValue2) {
  const globalObjects = getGlobalObjects();
  const globalObject12 = globalObjects[key] = globalObjects[key] || defaultValue2;
  return globalObject12;
}
function getGlobalObjects() {
  const globalObjects = globalThis[projectKey] = globalThis[projectKey] || {};
  return globalObjects;
}
var projectKey;
var init_getGlobalObject = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getGlobalObject.js"() {
    init_assert();
    init_projectInfo();
    projectKey = `_${projectInfo.projectName.toLowerCase()}`;
  }
});

// node_modules/.pnpm/@brillout+picocolors@1.0.15/node_modules/@brillout/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/.pnpm/@brillout+picocolors@1.0.15/node_modules/@brillout/picocolors/picocolors.js"(exports, module) {
    if (isBrowser2()) throw new Error("This file should never be included in the browser.");
    var isColorSupported = (() => {
      if (typeof process === "undefined") {
        return false;
      }
      const argv = process.argv || [];
      if ("NO_COLOR" in process.env || argv.includes("--no-color")) {
        return false;
      }
      if ("FORCE_COLOR" in process.env || argv.includes("--color") || "CI" in process.env) {
        return true;
      }
      if (process.platform === "win32") {
        return true;
      } else {
        let tty;
        try {
          const req = __require;
          tty = req("tty");
        } catch {
          return false;
        }
        return tty.isatty(1) && process.env.TERM !== "dumb";
      }
    })();
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    var createColors = (enabled = isColorSupported) => {
      const cyan = formatter("\x1B[36m", "\x1B[39m");
      return {
        isColorSupported: enabled,
        code: enabled ? cyan : (s) => `\`${s}\``,
        string: enabled ? cyan : (s) => `'${s}'`,
        reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
        bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
        dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
        italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
        underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
        inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
        hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
        strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
        black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
        red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
        green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
        yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
        blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
        magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
        cyan: enabled ? cyan : String,
        white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
        gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
        bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
        bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
        bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
        bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
        bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
        bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
        bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
        bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
      };
    };
    module.exports = createColors();
    module.exports.createColors = createColors;
    module.exports.rm = stripAnsi2;
    function isBrowser2() {
      return Object.getOwnPropertyDescriptor(globalThis, "window")?.get?.toString().includes("[native code]") ?? false;
    }
    function stripAnsi2(string) {
      return string.replace(ansiRegex2, "");
    }
    var ansiRegex2 = getAnsiRegex2();
    function getAnsiRegex2() {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
      ].join("|");
      return new RegExp(pattern, "g");
    }
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertSingleInstance.js
function assertSingleInstance() {
  {
    const versions = unique(globalObject.instances);
    assertUsage(
      versions.length <= 1,
      // DO *NOT* patch vike to remove this error: because of multiple conflicting versions, you *will* eventually encounter insidious issues that hard to debug and potentially a security hazard, see for example https://github.com/vikejs/vike/issues/1108
      `vike@${import_picocolors.default.bold(versions[0])} and vike@${import_picocolors.default.bold(versions[1])} loaded but only one version should be loaded`
    );
  }
  if (globalObject.checkSingleInstance && globalObject.instances.length > 1) {
    assertWarning(false, clientNotSingleInstance, { onlyOnce: true, showStackTrace: true });
  }
}
function assertSingleInstance_onAssertModuleLoad() {
  globalObject.instances.push(projectInfo.projectVersion);
  assertSingleInstance();
}
function assertUsage(condition, errorMessage) {
  if (condition) {
    return;
  }
  const errMsg = `[vike][Wrong Usage] ${errorMessage}`;
  throw new Error(errMsg);
}
function assertWarning(condition, errorMessage, { onlyOnce, showStackTrace }) {
  if (condition) {
    return;
  }
  const msg = `[vike][Warning] ${errorMessage}`;
  if (onlyOnce) {
    const { alreadyLogged } = globalObject;
    const key = onlyOnce === true ? msg : onlyOnce;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  if (showStackTrace) {
    console.warn(new Error(msg));
  } else {
    console.warn(msg);
  }
}
var import_picocolors, globalObject, clientNotSingleInstance;
var init_assertSingleInstance = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertSingleInstance.js"() {
    init_unique();
    init_getGlobalObject();
    init_projectInfo();
    import_picocolors = __toESM(require_picocolors(), 1);
    globalObject = getGlobalObject("assertSingleInstance.ts", {
      instances: [],
      alreadyLogged: /* @__PURE__ */ new Set()
    });
    clientNotSingleInstance = "Client runtime loaded twice https://vike.dev/client-runtime-duplicated";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isNodeJS.js
function isNodeJS() {
  if (typeof process === "undefined")
    return false;
  if (!process.cwd)
    return false;
  if (!process.versions || typeof process.versions.node === "undefined")
    return false;
  if (!process.release || process.release.name !== "node")
    return false;
  return true;
}
var init_isNodeJS = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isNodeJS.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/createErrorWithCleanStackTrace.js
function createErrorWithCleanStackTrace(errorMessage, numberOfStackTraceLinesToRemove2) {
  const err = new Error(errorMessage);
  if (isNodeJS()) {
    err.stack = clean(err.stack, numberOfStackTraceLinesToRemove2);
  }
  return err;
}
function clean(errStack, numberOfStackTraceLinesToRemove2) {
  if (!errStack) {
    return errStack;
  }
  const stackLines = splitByLine(errStack);
  let linesRemoved = 0;
  const stackLine__cleaned = stackLines.filter((line) => {
    if (line.includes(" (internal/") || line.includes(" (node:internal")) {
      return false;
    }
    if (linesRemoved < numberOfStackTraceLinesToRemove2 && isStackTraceLine(line)) {
      linesRemoved++;
      return false;
    }
    return true;
  }).join("\n");
  return stackLine__cleaned;
}
function isStackTraceLine(line) {
  return line.startsWith("    at ");
}
function splitByLine(str) {
  return str.split(/\r?\n/);
}
var init_createErrorWithCleanStackTrace = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/createErrorWithCleanStackTrace.js"() {
    init_isNodeJS();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isObject.js
function isObject(value) {
  return typeof value === "object" && value !== null;
}
var init_isObject = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isObject.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assert.js
function assert(condition, debugInfo) {
  if (condition)
    return;
  const debugStr = (() => {
    if (!debugInfo) {
      return null;
    }
    const debugInfoSerialized = typeof debugInfo === "string" ? debugInfo : JSON.stringify(debugInfo);
    return import_picocolors2.default.dim(`Debug info (for Vike maintainers; you can ignore this): ${debugInfoSerialized}`);
  })();
  const link = import_picocolors2.default.blue("https://github.com/vikejs/vike/issues/new");
  let errMsg = [
    `You stumbled upon a Vike bug. Go to ${link} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,
    debugStr
  ].filter(Boolean).join(" ");
  errMsg = addWhitespace(errMsg);
  errMsg = addPrefixAssertType(errMsg, "Bug");
  errMsg = addPrefixProjctName(errMsg, true);
  const internalError = createErrorWithCleanStackTrace(errMsg, numberOfStackTraceLinesToRemove);
  globalObject2.onBeforeLog?.();
  throw internalError;
}
function assertUsage2(condition, errMsg, { showStackTrace } = {}) {
  if (condition)
    return;
  showStackTrace = showStackTrace || globalObject2.alwaysShowStackTrace;
  errMsg = addWhitespace(errMsg);
  errMsg = addPrefixAssertType(errMsg, "Wrong Usage");
  errMsg = addPrefixProjctName(errMsg);
  const usageError = createErrorWithCleanStackTrace(errMsg, numberOfStackTraceLinesToRemove);
  if (showStackTrace) {
    globalObject2.showStackTraceList.add(usageError);
  }
  globalObject2.onBeforeLog?.();
  throw usageError;
}
function getProjectError(errMsg) {
  errMsg = addWhitespace(errMsg);
  errMsg = addPrefixAssertType(errMsg, "Error");
  errMsg = addPrefixProjctName(errMsg);
  const projectError = createErrorWithCleanStackTrace(errMsg, numberOfStackTraceLinesToRemove);
  return projectError;
}
function assertWarning2(condition, msg, { onlyOnce, showStackTrace }) {
  if (condition)
    return;
  showStackTrace = showStackTrace || globalObject2.alwaysShowStackTrace;
  msg = addWhitespace(msg);
  msg = addPrefixAssertType(msg, "Warning");
  msg = addPrefixProjctName(msg);
  if (onlyOnce) {
    const { alreadyLogged } = globalObject2;
    const key = onlyOnce === true ? msg : onlyOnce;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  globalObject2.onBeforeLog?.();
  if (showStackTrace) {
    const err = createErrorWithCleanStackTrace(msg, numberOfStackTraceLinesToRemove);
    globalObject2.showStackTraceList.add(err);
    globalObject2.logger(err, "warn");
  } else {
    globalObject2.logger(msg, "warn");
  }
}
function assertInfo(condition, msg, { onlyOnce }) {
  if (condition) {
    return;
  }
  msg = addWhitespace(msg);
  msg = addPrefixProjctName(msg);
  if (onlyOnce) {
    const { alreadyLogged } = globalObject2;
    const key = msg;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  globalObject2.onBeforeLog?.();
  globalObject2.logger(msg, "info");
}
function addPrefixAssertType(msg, tag2) {
  let prefix = `[${tag2}]`;
  const color = tag2 === "Warning" ? "yellow" : "red";
  prefix = import_picocolors2.default.bold(import_picocolors2.default[color](prefix));
  return `${prefix}${msg}`;
}
function addWhitespace(msg) {
  if (msg.startsWith("[")) {
    return msg;
  } else {
    return ` ${msg}`;
  }
}
function addPrefixProjctName(msg, showProjectVersion = false) {
  const prefix = showProjectVersion ? projectTagWithVersion : projectTag;
  return `${prefix}${msg}`;
}
function isBug(err) {
  return !String(err).includes("[Bug]");
}
function setAlwaysShowStackTrace() {
  globalObject2.alwaysShowStackTrace = true;
}
var import_picocolors2, globalObject2, projectTag, projectTagWithVersion, numberOfStackTraceLinesToRemove;
var init_assert = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assert.js"() {
    init_assertSingleInstance();
    init_createErrorWithCleanStackTrace();
    init_getGlobalObject();
    init_isObject();
    init_projectInfo();
    import_picocolors2 = __toESM(require_picocolors(), 1);
    globalObject2 = getGlobalObject("utils/assert.ts", {
      alreadyLogged: /* @__PURE__ */ new Set(),
      // Production logger. Overwritten by loggerNotProd.ts in non-production environments.
      logger(msg, logType) {
        if (logType === "info") {
          console.log(msg);
        } else {
          console.warn(msg);
        }
      },
      showStackTraceList: /* @__PURE__ */ new WeakSet()
    });
    assertSingleInstance_onAssertModuleLoad();
    projectTag = `[vike]`;
    projectTagWithVersion = `[vike@${projectInfo.projectVersion}]`;
    numberOfStackTraceLinesToRemove = 2;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/slice.js
function slice(thing, from, to) {
  if (typeof thing === "string") {
    return sliceArray(thing.split(""), from, to).join("");
  } else {
    return sliceArray(thing, from, to);
  }
}
function sliceArray(list, from, to) {
  const listSlice = [];
  let start = from >= 0 ? from : list.length + from;
  assert(start >= 0 && start <= list.length);
  let end = to >= 0 ? to : list.length + to;
  assert(end >= 0 && end <= list.length);
  while (true) {
    if (start === end) {
      break;
    }
    if (start === list.length) {
      start = 0;
    }
    if (start === end) {
      break;
    }
    const el = list[start];
    assert(el !== void 0);
    listSlice.push(el);
    start++;
  }
  return listSlice;
}
var init_slice = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/slice.js"() {
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/parseUrl.js
function parseUrl(url, baseServer2) {
  assert(isUrl(url), url);
  assert(baseServer2.startsWith("/"));
  const [urlWithoutHash, ...hashList] = url.split("#");
  assert(urlWithoutHash !== void 0);
  const hashOriginal = ["", ...hashList].join("#") || null;
  assert(hashOriginal === null || hashOriginal.startsWith("#"));
  const hash = hashOriginal === null ? "" : decodeSafe(hashOriginal.slice(1));
  const [urlWithoutHashNorSearch, ...searchList] = urlWithoutHash.split("?");
  assert(urlWithoutHashNorSearch !== void 0);
  const searchOriginal = ["", ...searchList].join("?") || null;
  assert(searchOriginal === null || searchOriginal.startsWith("?"));
  const search = {};
  const searchAll = {};
  Array.from(new URLSearchParams(searchOriginal || "")).forEach(([key, val]) => {
    search[key] = val;
    searchAll[key] = [...searchAll.hasOwnProperty(key) ? searchAll[key] : [], val];
  });
  let { protocol, origin, pathnameAbsoluteWithBase } = getPathnameAbsoluteWithBase(urlWithoutHashNorSearch, baseServer2);
  const pathnameOriginal = urlWithoutHashNorSearch.slice((origin || "").length);
  assertUrlComponents(url, origin, pathnameOriginal, searchOriginal, hashOriginal);
  let { pathname, hasBaseServer } = removeBaseServer(pathnameAbsoluteWithBase, baseServer2);
  const href = createUrlFromComponents(origin, pathname, searchOriginal, hashOriginal);
  const host = !origin ? null : origin.slice(protocol.length);
  const { hostname, port } = parseHost(host, url);
  pathname = decodePathname(pathname);
  assert(pathname.startsWith("/"));
  return {
    href,
    protocol,
    hostname,
    port,
    origin,
    pathname,
    pathnameOriginal,
    hasBaseServer,
    search,
    searchAll,
    searchOriginal,
    hash,
    hashOriginal
  };
}
function decodeSafe(urlComponent) {
  try {
    return decodeURIComponent(urlComponent);
  } catch {
  }
  try {
    return decodeURI(urlComponent);
  } catch {
  }
  return urlComponent;
}
function decodePathname(urlPathname) {
  urlPathname = urlPathname.replace(/\s+$/, "");
  urlPathname = urlPathname.split("/").map((dir) => decodeSafe(dir).split("/").join("%2F")).join("/");
  return urlPathname;
}
function getPathnameAbsoluteWithBase(url, baseServer2) {
  assert(!url.includes("?") && !url.includes("#"));
  {
    const { protocol, origin, pathname } = parseOrigin(url);
    if (origin) {
      return { protocol, origin, pathnameAbsoluteWithBase: pathname };
    }
    assert(pathname === url);
  }
  if (url.startsWith("/")) {
    return { protocol: null, origin: null, pathnameAbsoluteWithBase: url };
  } else {
    const baseURI = typeof window !== "undefined" ? window?.document?.baseURI : void 0;
    let base;
    if (baseURI) {
      const baseURIPathaname = parseOrigin(baseURI.split("?")[0]).pathname;
      base = baseURIPathaname;
    } else {
      base = baseServer2;
    }
    const pathnameAbsoluteWithBase = resolveUrlPathnameRelative(url, base);
    return { protocol: null, origin: null, pathnameAbsoluteWithBase };
  }
}
function parseOrigin(url) {
  if (!isUrlWithProtocol(url)) {
    return { pathname: url, origin: null, protocol: null };
  } else {
    const { protocol, uriWithoutProtocol } = parseProtocol(url);
    assert(protocol);
    const [host, ...rest] = uriWithoutProtocol.split("/");
    const origin = protocol + host;
    const pathname = "/" + rest.join("/");
    return { pathname, origin, protocol };
  }
}
function parseHost(host, url) {
  const ret = { hostname: null, port: null };
  if (!host)
    return ret;
  const parts = host.split(":");
  if (parts.length > 1) {
    const port = parseInt(parts.pop(), 10);
    assert(port || port === 0, url);
    ret.port = port;
  }
  ret.hostname = parts.join(":");
  return ret;
}
function parseProtocol(uri) {
  const SEP = ":";
  const [before, ...after] = uri.split(SEP);
  if (after.length === 0 || // https://github.com/vikejs/vike/commit/886a99ff21e86a8ca699a25cee7edc184aa058e4#r143308934
  // https://en.wikipedia.org/wiki/List_of_URI_schemes
  // https://www.rfc-editor.org/rfc/rfc7595
  !/^[a-z][a-z0-9\+\-]*$/i.test(before)) {
    return { protocol: null, uriWithoutProtocol: uri };
  }
  let protocol = before + SEP;
  let uriWithoutProtocol = after.join(SEP);
  const SEP2 = "//";
  if (uriWithoutProtocol.startsWith(SEP2)) {
    protocol = protocol + SEP2;
    uriWithoutProtocol = uriWithoutProtocol.slice(SEP2.length);
  }
  return { protocol, uriWithoutProtocol };
}
function isUrlProtocol(protocol) {
  const blacklist = [
    // https://docs.ipfs.tech/how-to/address-ipfs-on-web
    "ipfs://",
    "ipns://"
  ];
  if (blacklist.includes(protocol))
    return false;
  return protocol.endsWith("://");
}
function resolveUrlPathnameRelative(pathnameRelative, base) {
  const stack = base.split("/");
  const parts = pathnameRelative.split("/");
  let baseRestoreTrailingSlash = base.endsWith("/");
  if (pathnameRelative.startsWith(".")) {
    stack.pop();
  }
  for (const i in parts) {
    const p = parts[i];
    if (p == "" && i === "0")
      continue;
    if (p == ".")
      continue;
    if (p == "..")
      stack.pop();
    else {
      baseRestoreTrailingSlash = false;
      stack.push(p);
    }
  }
  let pathnameAbsolute = stack.join("/");
  if (baseRestoreTrailingSlash && !pathnameAbsolute.endsWith("/"))
    pathnameAbsolute += "/";
  if (!pathnameAbsolute.startsWith("/"))
    pathnameAbsolute = "/" + pathnameAbsolute;
  return pathnameAbsolute;
}
function removeBaseServer(pathnameAbsoluteWithBase, baseServer2) {
  assert(pathnameAbsoluteWithBase.startsWith("/"));
  assert(isBaseServer(baseServer2));
  let urlPathname = pathnameAbsoluteWithBase;
  assert(urlPathname.startsWith("/"));
  assert(baseServer2.startsWith("/"));
  if (baseServer2 === "/") {
    const pathname = pathnameAbsoluteWithBase;
    return { pathname, hasBaseServer: true };
  }
  let baseServerNormalized = baseServer2;
  if (baseServer2.endsWith("/") && urlPathname === slice(baseServer2, 0, -1)) {
    baseServerNormalized = slice(baseServer2, 0, -1);
    assert(urlPathname === baseServerNormalized);
  }
  if (!urlPathname.startsWith(baseServerNormalized)) {
    const pathname = pathnameAbsoluteWithBase;
    return { pathname, hasBaseServer: false };
  }
  assert(urlPathname.startsWith("/") || urlPathname.startsWith("http"));
  assert(urlPathname.startsWith(baseServerNormalized));
  urlPathname = urlPathname.slice(baseServerNormalized.length);
  if (!urlPathname.startsWith("/"))
    urlPathname = "/" + urlPathname;
  assert(urlPathname.startsWith("/"));
  return { pathname: urlPathname, hasBaseServer: true };
}
function isBaseServer(baseServer2) {
  return baseServer2.startsWith("/");
}
function assertUrlComponents(url, origin, pathnameOriginal, searchOriginal, hashOriginal) {
  const urlRecreated = createUrlFromComponents(origin, pathnameOriginal, searchOriginal, hashOriginal);
  assert(url === urlRecreated);
}
function createUrlFromComponents(origin, pathname, search, hash) {
  const urlRecreated = `${origin || ""}${pathname}${search || ""}${hash || ""}`;
  return urlRecreated;
}
function isUrl(url) {
  return isUrlWithProtocol(url) || url.startsWith("/") || isUrlPathnameRelative(url);
}
function isUrlRedirectTarget(url) {
  return url.startsWith("/") || isUri(url) || isUrlWithProtocol(url);
}
function isUrlPathnameRelative(url) {
  return [".", "?", "#"].some((c) => url.startsWith(c)) || url === "";
}
function isUrlWithProtocol(url) {
  const { protocol } = parseProtocol(url);
  return !!protocol && isUrlProtocol(protocol);
}
function isUri(uri) {
  const { protocol } = parseProtocol(uri);
  return !!protocol && !isUrlProtocol(uri);
}
function assertUsageUrlPathnameAbsolute(url, errPrefix) {
  assertUsageUrl(url, errPrefix);
}
function assertUsageUrlRedirectTarget(url, errPrefix, isUnresolved) {
  assertUsageUrl(url, errPrefix, { isRedirectTarget: isUnresolved ? "unresolved" : true });
}
function assertUsageUrl(url, errPrefix, { isRedirectTarget } = {}) {
  if (url.startsWith("/"))
    return;
  let errMsg = `${errPrefix} is ${import_picocolors3.default.string(url)} but it should start with ${import_picocolors3.default.string("/")}`;
  if (isRedirectTarget) {
    if (isUrlRedirectTarget(url))
      return;
    errMsg += ` or a protocol (${import_picocolors3.default.string("http://")}, ${import_picocolors3.default.string("mailto:")}, ...)`;
    if (isRedirectTarget === "unresolved") {
      if (url === "*")
        return;
      errMsg += `, or be ${import_picocolors3.default.string("*")}`;
    }
  }
  assertUsage2(false, errMsg);
}
var import_picocolors3;
var init_parseUrl = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/parseUrl.js"() {
    init_slice();
    init_assert();
    import_picocolors3 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectAssign.js
function objectAssign(obj, objAddendum) {
  if (objAddendum) {
    assert(!("_isPageContextObject" in objAddendum));
    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(objAddendum));
  }
}
var init_objectAssign = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectAssign.js"() {
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isCallable.js
function isCallable(thing) {
  return thing instanceof Function || typeof thing === "function";
}
var init_isCallable = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isCallable.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/sorter.js
function higherFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    if (val1 === val2) {
      return 0;
    }
    return val1 > val2 ? -1 : 1;
  };
}
function lowerFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    if (val1 === val2) {
      return 0;
    }
    return val1 < val2 ? -1 : 1;
  };
}
function makeFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    assert([true, false, null].includes(val1));
    assert([true, false, null].includes(val2));
    if (val1 === val2) {
      return 0;
    }
    if (val1 === true || val2 === false) {
      return -1;
    }
    if (val2 === true || val1 === false) {
      return 1;
    }
    assert(false);
  };
}
function makeLast(getValue) {
  return makeFirst((element) => {
    const val = getValue(element);
    if (val === null) {
      return null;
    } else {
      return !val;
    }
  });
}
var init_sorter = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/sorter.js"() {
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isArray.js
function isArray(value) {
  return Array.isArray(value);
}
var init_isArray = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isArray.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isArrayOfStrings.js
function isArrayOfStrings(val) {
  return isArray(val) && val.every((v) => typeof v === "string");
}
var init_isArrayOfStrings = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isArrayOfStrings.js"() {
    init_isArray();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isObjectOfStrings.js
function isObjectOfStrings(val) {
  return isObject(val) && Object.values(val).every((v) => typeof v === "string");
}
var init_isObjectOfStrings = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isObjectOfStrings.js"() {
    init_isObject();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/hasProp.js
function hasProp(obj, prop, type) {
  if (!isObject(obj))
    return false;
  if (!(prop in obj)) {
    return type === "undefined";
  }
  if (type === void 0) {
    return true;
  }
  const propValue = obj[prop];
  if (type === "undefined") {
    return propValue === void 0;
  }
  if (type === "array") {
    return isArray(propValue);
  }
  if (type === "object") {
    return isObject(propValue);
  }
  if (type === "string[]") {
    return isArrayOfStrings(propValue);
  }
  if (type === "string{}") {
    return isObjectOfStrings(propValue);
  }
  if (type === "function") {
    return isCallable(propValue);
  }
  if (isArray(type)) {
    return typeof propValue === "string" && type.includes(propValue);
  }
  if (type === "null") {
    return propValue === null;
  }
  if (type === "true") {
    return propValue === true;
  }
  if (type === "false") {
    return propValue === false;
  }
  return typeof propValue === type;
}
var init_hasProp = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/hasProp.js"() {
    init_isCallable();
    init_isObject();
    init_isArrayOfStrings();
    init_isObjectOfStrings();
    init_isArray();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isPlainObject.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  return (
    /* Doesn't work in Cloudflare Pages workers
    value.constructor === Object
    */
    value.constructor.name === "Object"
  );
}
var init_isPlainObject = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isPlainObject.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/compareString.js
function compareString(str1, str2) {
  if (str1.toLowerCase() < str2.toLowerCase())
    return -1;
  if (str1.toLowerCase() > str2.toLowerCase())
    return 1;
  return 0;
}
var init_compareString = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/compareString.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isNotNullish.js
var isNotNullish;
var init_isNotNullish = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isNotNullish.js"() {
    isNotNullish = (p) => p !== null && p !== void 0;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/stringifyStringArray.js
function stringifyStringArray(stringList) {
  return "[" + stringList.map((str) => "'" + str + "'").join(", ") + "]";
}
var init_stringifyStringArray = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/stringifyStringArray.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/filesystemPathHandling.js
function toPosixPath(path) {
  const pathPosix = path.split("\\").join("/");
  assertPosixPath(pathPosix);
  return pathPosix;
}
function assertPosixPath(path) {
  const errMsg = (msg) => `Not a posix path: ${msg}`;
  assert(path !== null, errMsg("null"));
  assert(typeof path === "string", errMsg(`typeof path === ${JSON.stringify(typeof path)}`));
  assert(path !== "", errMsg("(empty string)"));
  assert(path);
  assert(!path.includes("\\"), errMsg(path));
}
var init_filesystemPathHandling = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/filesystemPathHandling.js"() {
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/cast.js
function cast(_thing) {
}
var init_cast = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/cast.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isPropertyGetter.js
function isPropertyGetter(obj, prop) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  return !!descriptor && !("value" in descriptor) && !!descriptor.get;
}
var init_isPropertyGetter = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isPropertyGetter.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isPromise.js
function isPromise(val) {
  return typeof val === "object" && val !== null && "then" in val && isCallable(val.then);
}
var init_isPromise = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isPromise.js"() {
    init_isCallable();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/checkType.js
function checkType(_) {
}
function castType(_) {
}
var init_checkType = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/checkType.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getValuePrintable.js
function getValuePrintable(value) {
  if ([null, void 0].includes(value))
    return String(value);
  if (["boolean", "number", "string"].includes(typeof value))
    return JSON.stringify(value);
  return null;
}
var init_getValuePrintable = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getValuePrintable.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/escapeRegex.js
function escapeRegex(str) {
  return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}
var init_escapeRegex = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/escapeRegex.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/changeEnumerable.js
function changeEnumerable(obj, prop, enumerable) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  Object.defineProperty(obj, prop, { ...descriptor, enumerable });
}
var init_changeEnumerable = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/changeEnumerable.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectDefineProperty.js
function objectDefineProperty(obj, prop, { get, ...args }) {
  Object.defineProperty(obj, prop, { ...args, get });
}
var init_objectDefineProperty = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectDefineProperty.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/utils.js
var init_utils = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/utils.js"() {
    init_assert();
    init_parseUrl();
    init_objectAssign();
    init_isCallable();
    init_isObject();
    init_unique();
    init_slice();
    init_sorter();
    init_isBrowser();
    init_hasProp();
    init_isPlainObject();
    init_compareString();
    init_isNotNullish();
    init_stringifyStringArray();
    init_filesystemPathHandling();
    init_cast();
    init_isPropertyGetter();
    init_isPromise();
    init_checkType();
    init_getValuePrintable();
    init_escapeRegex();
    init_isArray();
    init_changeEnumerable();
    init_objectDefineProperty();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/error-page.js
function getErrorPageId(pageFilesAll, pageConfigs) {
  if (pageConfigs.length > 0) {
    const errorPageConfigs = pageConfigs.filter((p) => p.isErrorPage);
    if (errorPageConfigs.length === 0)
      return null;
    assertUsage2(errorPageConfigs.length === 1, "Only one error page can be defined");
    return errorPageConfigs[0].pageId;
  }
  const errorPageIds = unique(pageFilesAll.map(({ pageId }) => pageId).filter((pageId) => isErrorPageId(pageId, false)));
  assertUsage2(errorPageIds.length <= 1, `Only one _error.page.js is allowed, but found several: ${errorPageIds.join(" ")}`);
  if (errorPageIds.length > 0) {
    const errorPageId = errorPageIds[0];
    assert(errorPageId);
    return errorPageId;
  }
  return null;
}
function isErrorPageId(pageId, _isV1Design) {
  assert(!pageId.includes("\\"));
  return pageId.includes("/_error");
}
function isErrorPage(pageId, pageConfigs) {
  if (pageConfigs.length > 0) {
    const pageConfig = pageConfigs.find((p) => p.pageId === pageId);
    assert(pageConfig);
    return !!pageConfig.isErrorPage;
  } else {
    return isErrorPageId(pageId, false);
  }
}
var init_error_page = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/error-page.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getTerminWidth.js
function getTerminalWidth() {
  return typeof process !== "undefined" && typeof process.stdout !== "undefined" && process.stdout.columns || void 0;
}
var init_getTerminWidth = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getTerminWidth.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/debug.js
function createDebugger(flag, optionsGlobal) {
  checkType(flag);
  assert(flags.includes(flag));
  const debugWithOptions = (optionsLocal) => {
    return (...msgs) => {
      const options = { ...optionsGlobal, ...optionsLocal };
      debug_(flag, options, ...msgs);
    };
  };
  const debug5 = (...msgs) => debugWithOptions({})(...msgs);
  objectAssign(debug5, { options: debugWithOptions, isActivated: isDebugActivated(flag) });
  return debug5;
}
function debug_(flag, options, ...msgs) {
  if (!isDebugActivated(flag))
    return;
  let [msgFirst, ...msgsRest] = msgs;
  const padding = " ".repeat(flag.length + 1);
  msgFirst = formatMsg(msgFirst, options, padding, "FIRST");
  msgsRest = msgsRest.map((msg, i) => {
    const position = i === msgsRest.length - 1 ? "LAST" : "MIDDLE";
    return formatMsg(msg, options, padding, position);
  });
  let logFirst;
  let logsRest;
  const noNewLine = msgsRest.length <= 1 && [msgFirst, ...msgsRest].every((m) => typeof m === "string" && !m.includes("\n"));
  if (noNewLine) {
    logFirst = [msgFirst, ...msgsRest].map((m) => String(m).trim());
    logsRest = [];
  } else {
    logFirst = [msgFirst];
    logsRest = msgsRest;
  }
  console.log("\x1B[1m%s\x1B[0m", flag, ...logFirst);
  logsRest.forEach((msg) => {
    console.log(msg);
  });
}
function isDebugActivated(flag) {
  checkType(flag);
  assert(flags.includes(flag));
  const DEBUG = getDEBUG();
  const isActivated = DEBUG?.includes(flag) ?? false;
  return isActivated;
}
function formatMsg(info, options, padding, position) {
  if (info === void 0) {
    return void 0;
  }
  let str = position === "FIRST" ? "" : padding;
  if (typeof info === "string") {
    str += info;
  } else if (isArray(info)) {
    if (info.length === 0) {
      str += options.serialization?.emptyArray ?? "[]";
    } else {
      str += info.map(strUnknown).join("\n");
    }
  } else {
    str += strUnknown(info);
  }
  str = pad(str, padding);
  if (position !== "LAST" && position !== "FIRST") {
    str += "\n";
  }
  return str;
}
function pad(str, padding) {
  const terminalWidth = getTerminalWidth();
  const lines = [];
  str.split("\n").forEach((line) => {
    if (!terminalWidth) {
      lines.push(line);
    } else {
      chunk(line, terminalWidth - padding.length).forEach((chunk2) => {
        lines.push(chunk2);
      });
    }
  });
  return lines.join("\n" + padding);
}
function chunk(str, size) {
  if (str.length <= size) {
    return [str];
  }
  const chunks = str.match(new RegExp(".{1," + size + "}", "g"));
  assert(chunks);
  return chunks;
}
function strUnknown(thing) {
  return typeof thing === "string" ? thing : strObj(thing);
}
function strObj(obj, newLines = true) {
  return JSON.stringify(obj, replaceFunctionSerializer, newLines ? 2 : void 0);
}
function replaceFunctionSerializer(_key, value) {
  if (isCallable(value)) {
    return value.toString().split(/\s+/).join(" ");
  }
  return value;
}
function assertDEBUG() {
  const DEBUG = getDEBUG() ?? "";
  const flagsActivated = DEBUG.match(flagRegex) ?? [];
  flagsActivated.forEach((flag) => {
    assertUsage2(flags.includes(flag), `Unknown DEBUG flag ${import_picocolors4.default.cyan(flag)}. Valid flags:
${flags.map((f) => `  ${import_picocolors4.default.cyan(f)}`).join("\n")}`);
  });
}
function getDEBUG() {
  let DEBUG;
  try {
    DEBUG = process.env.DEBUG;
  } catch {
  }
  return DEBUG;
}
var import_picocolors4, flags, flagRegex;
var init_debug = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/debug.js"() {
    init_isBrowser();
    init_isCallable();
    init_objectAssign();
    init_assert();
    init_checkType();
    init_getTerminWidth();
    import_picocolors4 = __toESM(require_picocolors(), 1);
    init_isArray();
    assert(!isBrowser());
    globalThis.__brillout_debug_createDebugger = createDebugger;
    flags = [
      "vike:error",
      "vike:extractAssets",
      "vike:extractExportNames",
      "vike:glob",
      "vike:log",
      "vike:optimizeDeps",
      "vike:outDir",
      "vike:pageFiles",
      "vike:pointer-imports",
      "vike:routing",
      "vike:setup",
      "vike:stream",
      "vike:virtual-files"
    ];
    flagRegex = /\bvike:[a-zA-Z-]+/g;
    assertDEBUG();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertIsNotBrowser.js
function assertIsNotBrowser() {
  assert(!isBrowser());
}
var init_assertIsNotBrowser = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertIsNotBrowser.js"() {
    init_isBrowser();
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/trackLogs.js
function trackLogs() {
  const logOriginal = process.stdout.write;
  const log = (msg) => logOriginal.call(process.stdout, msg + "\n");
  ["stdout", "stderr"].forEach((stdName) => {
    var methodOriginal = process[stdName].write;
    process[stdName].write = function(...args) {
      log(import_picocolors5.default.bold(import_picocolors5.default.blue("*** LOG ***")));
      methodOriginal.apply(process[stdName], args);
      log(new Error().stack.replace(/^Error(\:|)/, import_picocolors5.default.magenta("*** LOG ORIGIN ***")));
    };
  });
  Error.stackTraceLimit = Infinity;
}
var import_picocolors5;
var init_trackLogs = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/trackLogs.js"() {
    init_debug();
    import_picocolors5 = __toESM(require_picocolors(), 1);
    init_assertIsNotBrowser();
    assertIsNotBrowser();
    if (isDebugActivated("vike:log")) {
      trackLogs();
    }
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertVersion.js
function assertVersion(dependencyName, versionActual, versionExpected) {
  assertUsage2(isVersionOrAbove(versionActual, versionExpected), `${dependencyName} ${versionActual} isn't supported, use ${dependencyName} >= ${versionExpected} instead.`);
}
function isVersionOrAbove(versionActual, versionExpected) {
  const p1 = parseVersion(versionActual);
  const p2 = parseVersion(versionExpected);
  if (p1[0] !== p2[0])
    return p1[0] > p2[0];
  if (p1[1] !== p2[1])
    return p1[1] > p2[1];
  if (p1[2] !== p2[2])
    return p1[2] > p2[2];
  return true;
}
function parseVersion(version) {
  version = version.split("-")[0];
  let partsStr = version.split(".");
  partsStr = partsStr.slice(0, 3);
  assert(partsStr.length === 3);
  assert(partsStr.every((s) => s.length > 0));
  const parts = partsStr.map((s) => parseInt(s, 10));
  return parts;
}
var init_assertVersion = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertVersion.js"() {
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertNodeVersion.js
function assertNodeVersion() {
  if (!isNodeJS())
    return;
  const version = process.versions.node;
  assertVersion("Node.js", version, "18.0.0");
}
var init_assertNodeVersion = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertNodeVersion.js"() {
    init_isNodeJS();
    init_assertVersion();
  }
});

// node_modules/.pnpm/@brillout+require-shim@0.1.2/node_modules/@brillout/require-shim/dist/utils.cjs
var require_utils = __commonJS({
  "node_modules/.pnpm/@brillout+require-shim@0.1.2/node_modules/@brillout/require-shim/dist/utils.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobalObject = exports.isVitest = exports.pathJoin = exports.assertIsNotBrowser = exports.assert = exports.assertPosixPath = exports.toPosixPath = void 0;
    function toPosixPath2(path) {
      const pathPosix = path.split("\\").join("/");
      assertPosixPath2(pathPosix);
      return pathPosix;
    }
    exports.toPosixPath = toPosixPath2;
    function assertPosixPath2(path) {
      const errMsg = (msg) => `Not a posix path: ${msg}`;
      assert2(path !== null, errMsg("null"));
      assert2(typeof path === "string", errMsg(`typeof path === '${typeof path}'`));
      assert2(path !== "", errMsg("(empty string)"));
      assert2(path);
      assert2(!path.includes("\\"), errMsg(path));
    }
    exports.assertPosixPath = assertPosixPath2;
    function assert2(condition, debugInfo) {
      if (condition)
        return;
      const githubRepository = "https://github.com/brillout/require-shim";
      let errMsg = [
        "[@brillout/require-shim]",
        "You stumbled upon a bug.",
        `Go to ${githubRepository}/issues/new and copy-paste this error.`,
        "A maintainer will fix the bug.",
        debugInfo
      ].filter(Boolean).join(" ");
      throw new Error(errMsg);
    }
    exports.assert = assert2;
    function assertIsNotBrowser2() {
      assert2(!isBrowser2());
    }
    exports.assertIsNotBrowser = assertIsNotBrowser2;
    function isBrowser2() {
      return typeof window !== "undefined" && typeof window.scrollY === "number";
    }
    function pathJoin2(path1, path2) {
      assert2(!path1.includes("\\"));
      assert2(!path2.includes("\\"));
      let joined = [...path1.split("/"), ...path2.split("/")].filter(Boolean).join("/");
      if (path1.startsWith("/"))
        joined = "/" + joined;
      return joined;
    }
    exports.pathJoin = pathJoin2;
    function isVitest2() {
      return typeof process !== "undefined" && typeof process.env !== "undefined" && "VITEST" in process.env;
    }
    exports.isVitest = isVitest2;
    function getGlobalObject3(key, defaultValue2) {
      const allGlobalObjects = globalThis.__brillout_require_shim = globalThis.__brillout_require_shim || {};
      const globalObject12 = allGlobalObjects[key] = allGlobalObjects[key] || defaultValue2;
      return globalObject12;
    }
    exports.getGlobalObject = getGlobalObject3;
  }
});

// node_modules/.pnpm/@brillout+require-shim@0.1.2/node_modules/@brillout/require-shim/dist/runtime-test.cjs
var require_runtime_test = __commonJS({
  "node_modules/.pnpm/@brillout+require-shim@0.1.2/node_modules/@brillout/require-shim/dist/runtime-test.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_cjs_1 = require_utils();
    testRequireShim();
    function testRequireShim() {
      let req;
      try {
        req = __require;
      } catch (_a) {
      }
      if (!req)
        return;
      (0, utils_cjs_1.assert)(!("_is_brillout_require_shim" in __require));
    }
  }
});

// node_modules/.pnpm/@brillout+require-shim@0.1.2/node_modules/@brillout/require-shim/dist/index.cjs
var require_dist = __commonJS({
  "node_modules/.pnpm/@brillout+require-shim@0.1.2/node_modules/@brillout/require-shim/dist/index.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.installRequireShim_setUserRootDir = exports.installRequireShim = void 0;
    var utils_cjs_1 = require_utils();
    var globalObject12 = (0, utils_cjs_1.getGlobalObject)("utils/require-shim.ts", {});
    (0, utils_cjs_1.assertIsNotBrowser)();
    function installRequireShim2() {
      if (globalObject12.alreadyCalled)
        return;
      globalObject12.alreadyCalled = true;
      let requireLocal;
      try {
        requireLocal = __require;
      } catch (_a) {
      }
      if (!requireLocal)
        return;
      let module2;
      try {
        module2 = requireLocal("module");
      } catch (_b) {
        return;
      }
      if (globalThis.require === void 0) {
        install();
      }
      testShim();
      return;
      function install() {
        Object.defineProperty(globalThis, "require", {
          get() {
            let callsites;
            {
              const prepareStackTraceOrg = Error.prepareStackTrace;
              Error.prepareStackTrace = (_, stack) => stack;
              const err = new Error();
              callsites = err.stack;
              Error.prepareStackTrace = prepareStackTraceOrg;
            }
            const callerFile = getCallerFile(callsites);
            const callerFileFallback = __filename;
            const requireContextFile = callerFile || callerFileFallback;
            (0, utils_cjs_1.assert)(requireContextFile);
            const requireUserLand = module2.createRequire(requireContextFile);
            requireUserLand._is_brillout_require_shim = true;
            return requireUserLand;
          }
        });
      }
      function getCallerFile(callsites) {
        const caller = callsites[1];
        (0, utils_cjs_1.assert)(caller);
        if (!caller.getFileName)
          return null;
        {
          const filePath = caller.getFileName();
          (0, utils_cjs_1.assert)(typeof filePath === "string" && filePath || filePath === void 0);
          if (filePath)
            return filePath;
        }
        {
          const filePath = deriveFilePath(caller);
          if (filePath) {
            return filePath;
          }
        }
        return null;
      }
      function deriveFilePath(caller) {
        let filePath = caller.getEvalOrigin();
        if (!filePath)
          return null;
        if (doesPathExist(filePath)) {
          return filePath;
        }
        const { userRootDir } = globalObject12;
        if (!userRootDir)
          return null;
        let filePathAbsolute = (0, utils_cjs_1.toPosixPath)(filePath);
        (0, utils_cjs_1.assertPosixPath)(userRootDir);
        filePathAbsolute = (0, utils_cjs_1.pathJoin)(userRootDir, filePathAbsolute);
        if (doesPathExist(filePathAbsolute)) {
          return filePathAbsolute;
        }
        return null;
      }
      function doesPathExist(filePath) {
        (0, utils_cjs_1.assert)(requireLocal);
        try {
          requireLocal.resolve(filePath);
          return true;
        } catch (_a) {
          return false;
        }
      }
    }
    exports.installRequireShim = installRequireShim2;
    function testShim() {
      if ((0, utils_cjs_1.isVitest)())
        return;
      (0, utils_cjs_1.assert)(__require !== globalThis.require);
      (0, utils_cjs_1.assert)(!("_is_brillout_require_shim" in __require));
      Promise.resolve().then(() => __toESM(require_runtime_test()));
    }
    function installRequireShim_setUserRootDir(userRootDir) {
      globalObject12.userRootDir = userRootDir;
    }
    exports.installRequireShim_setUserRootDir = installRequireShim_setUserRootDir;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getFileExtension.js
function getFileExtension(id) {
  id = id.split("?")[0];
  const fileName = slice(id.split("/"), -1, 0)[0];
  if (!fileName) {
    return null;
  }
  const fileExtension = slice(fileName.split("."), -1, 0)[0];
  if (!fileExtension) {
    return null;
  }
  return fileExtension;
}
var init_getFileExtension = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getFileExtension.js"() {
    init_slice();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/parseUrl-extras.js
function prependBase(url, baseServer2) {
  if (baseServer2.startsWith("http")) {
    const baseAssets = baseServer2;
    const baseAssetsNormalized = normalizeBaseAssets(baseAssets);
    assert(!baseAssetsNormalized.endsWith("/"));
    assert(url.startsWith("/"));
    return `${baseAssetsNormalized}${url}`;
  }
  assert(isBaseServer(baseServer2));
  const baseServerNormalized = normalizeBaseServer(baseServer2);
  if (baseServerNormalized === "/")
    return url;
  assert(!baseServerNormalized.endsWith("/"));
  assert(url.startsWith("/"));
  return `${baseServerNormalized}${url}`;
}
function removeBaseServer2(url, baseServer2) {
  const { hasBaseServer, origin, pathname, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url, baseServer2);
  assert(hasBaseServer);
  assertUrlComponents(url, origin, pathnameOriginal, searchOriginal, hashOriginal);
  const urlWithoutBase = createUrlFromComponents(origin, pathname, searchOriginal, hashOriginal);
  return urlWithoutBase;
}
function normalizeBaseAssets(baseAssets) {
  let baseAssetsNormalized = baseAssets;
  if (baseAssetsNormalized.endsWith("/")) {
    baseAssetsNormalized = slice(baseAssetsNormalized, 0, -1);
  }
  assert(!baseAssetsNormalized.endsWith("/"));
  return baseAssetsNormalized;
}
function normalizeBaseServer(baseServer2) {
  let baseServerNormalized = baseServer2;
  if (baseServerNormalized.endsWith("/") && baseServerNormalized !== "/") {
    baseServerNormalized = slice(baseServerNormalized, 0, -1);
  }
  assert(!baseServerNormalized.endsWith("/") || baseServerNormalized === "/");
  return baseServerNormalized;
}
function isBaseAssets(base) {
  return base.startsWith("/") || base.startsWith("http://") || base.startsWith("https://");
}
function normalizeUrlPathname(urlOriginal, trailingSlash, baseServer2) {
  const urlNormalized = modifyUrlPathname(urlOriginal, (urlPathname) => {
    assert(urlPathname.startsWith("/"));
    let urlPathnameNormalized = normalize(urlPathname);
    if (urlPathnameNormalized === "/") {
      return urlPathnameNormalized;
    }
    if (baseServer2.endsWith("/") && baseServer2 !== "/" && normalize(baseServer2) === urlPathnameNormalized) {
      trailingSlash = true;
    }
    assert(!urlPathnameNormalized.endsWith("/"));
    if (trailingSlash) {
      urlPathnameNormalized = urlPathnameNormalized + "/";
    }
    return urlPathnameNormalized;
  });
  if (urlNormalized === urlOriginal)
    return null;
  return urlNormalized;
}
function normalize(urlPathname) {
  assert(urlPathname.startsWith("/"));
  return "/" + urlPathname.split("/").filter(Boolean).join("/");
}
function modifyUrlPathname(url, modifier) {
  const { origin, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url, "/");
  const pathnameModified = modifier(pathnameOriginal);
  if (pathnameModified === null)
    return url;
  assertUrlComponents(url, origin, pathnameOriginal, searchOriginal, hashOriginal);
  const urlModified = createUrlFromComponents(origin, pathnameModified, searchOriginal, hashOriginal);
  assert(pathnameOriginal === pathnameModified === (url === urlModified));
  return urlModified;
}
function removeUrlOrigin(url) {
  const { origin, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url, "/");
  const urlModified = createUrlFromComponents(null, pathnameOriginal, searchOriginal, hashOriginal);
  return { urlModified, origin };
}
function addUrlOrigin(url, origin) {
  const { origin: originCurrent, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url, "/");
  assert(originCurrent === null);
  assert(origin === null || origin.startsWith("http"));
  const urlModified = createUrlFromComponents(origin, pathnameOriginal, searchOriginal, hashOriginal);
  return urlModified;
}
function getUrlPretty(url) {
  const { urlModified } = removeUrlOrigin(url);
  return urlModified;
}
var init_parseUrl_extras = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/parseUrl-extras.js"() {
    init_parseUrl();
    init_assert();
    init_slice();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/virtual-files.js
function getVirtualFileId(id) {
  if (id.startsWith(tag)) {
    id = id.slice(tag.length);
  }
  assert(!id.startsWith(tag));
  return id;
}
var tag;
var init_virtual_files = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/virtual-files.js"() {
    init_assert();
    tag = "\0";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/utils.js
var init_utils2 = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/utils.js"() {
    init_assertIsNotBrowser();
    init_assert();
    init_getFileExtension();
    init_isPlainObject();
    init_projectInfo();
    init_checkType();
    init_hasProp();
    init_objectAssign();
    init_checkType();
    init_hasProp();
    init_parseUrl();
    init_parseUrl_extras();
    init_isObject();
    init_virtual_files();
    init_assertIsNotBrowser();
    init_isNotNullish();
    init_unique();
    init_debug();
    assertIsNotBrowser();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/isErrorDebug.js
function isErrorDebug() {
  return isDebugActivated("vike:error");
}
var init_isErrorDebug = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/isErrorDebug.js"() {
    init_utils2();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/onLoad.js
function onLoad() {
  assertIsNotBrowser();
  assertNodeVersion();
  (0, import_require_shim.installRequireShim)();
  if (isErrorDebug())
    setAlwaysShowStackTrace();
}
var import_require_shim;
var init_onLoad = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/onLoad.js"() {
    init_assertIsNotBrowser();
    init_assertNodeVersion();
    import_require_shim = __toESM(require_dist(), 1);
    init_utils3();
    init_isErrorDebug();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/PromiseType.js
var init_PromiseType = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/PromiseType.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isObjectWithKeys.js
function isObjectWithKeys(obj, keys) {
  if (!isPlainObject(obj)) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      return false;
    }
  }
  return true;
}
var init_isObjectWithKeys = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isObjectWithKeys.js"() {
    init_isPlainObject();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/viteIsSSR.js
var init_viteIsSSR = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/viteIsSSR.js"() {
    init_assert();
    init_isObject();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/path-shim.js
var init_path_shim = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/path-shim.js"() {
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getOutDirs.js
var import_picocolors6, debug;
var init_getOutDirs = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getOutDirs.js"() {
    init_viteIsSSR();
    init_assert();
    init_path_shim();
    init_filesystemPathHandling();
    import_picocolors6 = __toESM(require_picocolors(), 1);
    init_debug();
    debug = createDebugger("vike:outDir");
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/capitalizeFirstLetter.js
function capitalizeFirstLetter(word) {
  if (!word[0]) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1);
}
var init_capitalizeFirstLetter = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/capitalizeFirstLetter.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/debugGlob.js
var debugGlob;
var init_debugGlob = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/debugGlob.js"() {
    init_debug();
    debugGlob = createDebugger("vike:glob");
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isSameErrorMessage.js
function isSameErrorMessage(err1, err2) {
  if (!isObject(err1) || !isObject(err2))
    return false;
  return err1.message === err2.message;
}
var init_isSameErrorMessage = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isSameErrorMessage.js"() {
    init_isObject();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/styleFileRE.js
var styleFileRE;
var init_styleFileRE = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/styleFileRE.js"() {
    styleFileRE = /\.(css|less|sass|scss|styl|stylus|pcss|postcss)($|\?)/;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/urlToFile.js
var baseServer;
var init_urlToFile = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/urlToFile.js"() {
    init_assert();
    init_parseUrl();
    init_slice();
    baseServer = "/";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/freezePartial.js
function freezePartial(obj, allowList) {
  Object.entries(obj).forEach(([key, val]) => {
    Object.defineProperty(obj, key, {
      get() {
        return val;
      },
      set(newVal) {
        if (key in allowList) {
          const isAllowed = allowList[key](newVal);
          if (isAllowed) {
            val = newVal;
            return;
          } else {
            throw new Error(`Setting wrong value ${import_picocolors7.default.cyan(JSON.stringify(newVal))} for property ${import_picocolors7.default.cyan(key)}`);
          }
        }
        throw new Error(`You aren't allowed to mutate property ${import_picocolors7.default.cyan(key)}`);
      },
      configurable: false,
      enumerable: true
    });
  });
  Object.preventExtensions(obj);
}
var import_picocolors7;
var init_freezePartial = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/freezePartial.js"() {
    import_picocolors7 = __toESM(require_picocolors(), 1);
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isNpmPackage.js
function isNpmPackageImport(str, { cannotBePathAlias }) {
  assert(cannotBePathAlias);
  return isNpmPackageImport_unreliable(str);
}
function isNpmPackageImport_unreliable(str) {
  const res = parse(str);
  return res !== null;
}
function assertIsNpmPackageImport(str) {
  assert(isNpmPackageImport(str, {
    // If `str` is a path alias that looks like an npm package => assertIsNpmPackageImport() is erroneous but that's okay because the assertion will eventually fail for some other user using a disambiguated path alias.
    cannotBePathAlias: true
  }), str);
}
function parse(str) {
  if (!str)
    return null;
  let scope = null;
  if (str.startsWith("@")) {
    if (!str.includes("/"))
      return null;
    const [scope_, ...rest] = str.split("/");
    scope = scope_;
    str = rest.join("/");
    if (!str)
      return null;
    if (scope === "@" || invalid(scope.slice(1)))
      return null;
  }
  const [name, ...importPathParts] = str.split("/");
  if (!name || invalid(name))
    return null;
  const importPath = importPathParts.length === 0 ? null : importPathParts.join("/");
  return {
    pkgName: scope ? `${scope}/${name}` : name,
    importPath
  };
}
function invalid(s) {
  const firstLetter = s[0];
  if (!firstLetter || !/[a-z0-9]/.test(firstLetter))
    return true;
  if (/[^a-z0-9_\-\.]/.test(s))
    return true;
  return false;
}
var init_isNpmPackage = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isNpmPackage.js"() {
    init_assert();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isScriptFile.js
function isScriptFile(filePath) {
  const yes = scriptFileExtensionList.some((ext) => filePath.endsWith("." + ext));
  if (isPlainJavaScriptFile(filePath))
    assert(yes);
  return yes;
}
function isPlainJavaScriptFile(filePath) {
  const yes1 = /\.(c|m)?(j|t)s$/.test(filePath);
  const yes2 = extJavaScript.some((ext) => filePath.endsWith("." + ext));
  assert(yes1 === yes2);
  return yes1;
}
function isTemplateFile(filePath) {
  return extTemplates.some((ext) => filePath.endsWith("." + ext));
}
var extJavaScript, extJsx, extTemplates, scriptFileExtensionList, scriptFileExtensions;
var init_isScriptFile = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isScriptFile.js"() {
    init_assert();
    extJavaScript = [
      "js",
      "ts",
      "cjs",
      "cts",
      "mjs",
      "mts"
    ];
    extJsx = [
      "jsx",
      "tsx",
      "cjsx",
      "ctsx",
      "mjsx",
      "mtsx"
    ];
    extTemplates = [
      "vue",
      "svelte",
      "marko",
      "md",
      "mdx"
    ];
    scriptFileExtensionList = [...extJavaScript, ...extJsx, ...extTemplates];
    scriptFileExtensions = "(" + scriptFileExtensionList.join("|") + ")";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/removeFileExtention.js
var init_removeFileExtention = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/removeFileExtention.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectKeys.js
var init_objectKeys = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectKeys.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectEntries.js
var init_objectEntries = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectEntries.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectFromEntries.js
var init_objectFromEntries = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/objectFromEntries.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isVitest.js
function isVitest() {
  return typeof process !== "undefined" && typeof process.env !== "undefined" && "VITEST" in process.env;
}
var init_isVitest = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isVitest.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertIsNotProductionRuntime.js
function assertEnv() {
  if (debug2.isActivated)
    debug2("assertEnv()", new Error().stack);
  if (isVitest())
    return;
  const isProduction = !env.isViteDev && !env.isVitePreview;
  if (isProduction) {
    assertUsage2(!env.isVikePluginLoaded, vikeVitePluginLoadedInProductionError);
    assert(!env.shouldNotBeProduction);
  } else {
    assert(env.shouldNotBeProduction);
    assert(env.isVikePluginLoaded);
  }
}
var debug2, vikeVitePluginLoadedInProductionError, env;
var init_assertIsNotProductionRuntime = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertIsNotProductionRuntime.js"() {
    init_assert();
    init_assertIsNotBrowser();
    init_debug();
    init_getGlobalObject();
    init_isVitest();
    assertIsNotBrowser();
    debug2 = createDebugger("vike:setup");
    vikeVitePluginLoadedInProductionError = `Loading Vike's Vite plugin (the vike/plugin module) is prohibited in production.`;
    env = getGlobalObject("utils/assertIsNotProductionRuntime.ts", {});
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertNodeEnv.js
function assertNodeEnv_runtime(isViteDev) {
  const nodeEnv = getNodeEnv();
  if (nodeEnv === null || nodeEnv === "test")
    return;
  const isNodeDev = isNodeEnvDev();
  if (isViteDev === isNodeDev)
    return;
  const nodeEnvDesc = getNodeEnvDesc();
  const errMsg = `Running ${isViteDev ? import_picocolors8.default.cyan("$ vite dev") : "app in production"} while the ${nodeEnvDesc} which is contradictory, see https://vike.dev/NODE_ENV`;
  assertWarning2(false, errMsg, { onlyOnce: true });
}
function getNodeEnv() {
  if (typeof process === "undefined")
    return null;
  return "production";
}
function isNodeEnvDev() {
  const nodeEnv = getNodeEnv();
  if (!nodeEnv)
    return true;
  if (["development", "dev"].includes(nodeEnv))
    return true;
  return false;
}
function getNodeEnvDesc() {
  const nodeEnv = getNodeEnv();
  const isDev = isNodeEnvDev();
  const nodeEnvDesc = `environment is set to be a ${isDev ? "development" : "production"} environment by ${import_picocolors8.default.cyan(`process.env.NODE_ENV === ${JSON.stringify(nodeEnv)}`)}`;
  return nodeEnvDesc;
}
var import_picocolors8;
var init_assertNodeEnv = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertNodeEnv.js"() {
    import_picocolors8 = __toESM(require_picocolors(), 1);
    init_assertIsNotBrowser();
    init_assert();
    init_assertIsNotProductionRuntime();
    assertIsNotBrowser();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isHtml.js
function isHtml(str) {
  const re = /(<\/[^<]+>)|(<[^<]+\/>)/;
  return re.test(str);
}
var init_isHtml = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isHtml.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/warnIfErrorIsNotObject.js
function warnIfErrorIsNotObject(err) {
  if (!isObject(err)) {
    console.warn("[vike] The thrown value is:");
    console.warn(err);
    assertWarning2(false, `One of your hooks threw an error ${import_picocolors9.default.cyan("throw someValue")} but ${import_picocolors9.default.cyan("someValue")} isn't an object (it's ${import_picocolors9.default.cyan(`typeof someValue === ${typeof err}`)} instead). Make sure thrown values are always wrapped with ${import_picocolors9.default.cyan("new Error()")}, in other words: ${import_picocolors9.default.cyan("throw someValue")} should be replaced with ${import_picocolors9.default.cyan("throw new Error(someValue)")}. The thrown value is printed above.`, { onlyOnce: false });
  }
}
var import_picocolors9;
var init_warnIfErrorIsNotObject = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/warnIfErrorIsNotObject.js"() {
    init_assert();
    init_assertIsNotBrowser();
    init_isObject();
    import_picocolors9 = __toESM(require_picocolors(), 1);
    assertIsNotBrowser();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/stripAnsi.js
function stripAnsi(string) {
  return string.replace(ansiRegex, "");
}
function getAnsiRegex() {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, "g");
}
var ansiRegex;
var init_stripAnsi = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/stripAnsi.js"() {
    init_assertIsNotBrowser();
    assertIsNotBrowser();
    ansiRegex = getAnsiRegex();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/truncateString.js
function truncateString(str, lenMax) {
  const lenMaxReal = lenMax - 3;
  assert(lenMaxReal >= 1);
  if (str.length < lenMax) {
    return str;
  } else {
    str = str.substring(0, lenMaxReal);
    const ellipsis = import_picocolors10.default.dim("...");
    str = str + ellipsis;
    return str;
  }
}
var import_picocolors10;
var init_truncateString = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/truncateString.js"() {
    import_picocolors10 = __toESM(require_picocolors(), 1);
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/formatHintLog.js
function formatHintLog(msg) {
  assert(msg.length > 0);
  const msgLength = stripAnsi(msg).length;
  const sep = "\u2500".repeat(msgLength);
  return [
    // prettier-ignore
    // biome-ignore format:
    `\u250C\u2500${sep}\u2500\u2510`,
    `\u2502 ${msg} \u2502`,
    `\u2514\u2500${sep}\u2500\u2518`
  ].join("\n");
}
var init_formatHintLog = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/formatHintLog.js"() {
    init_assert();
    init_stripAnsi();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/joinEnglish.js
function joinEnglish(arr, conjunction, colorizer = (s) => s) {
  assert(arr.length > 0);
  if (arr.length === 1)
    return colorizer(arr[0]);
  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];
  return firsts.map(colorizer).join(", ") + `, ${conjunction} ` + colorizer(last);
}
var init_joinEnglish = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/joinEnglish.js"() {
    init_assert();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/escapeHtml.js
function escapeHtml(unsafeString) {
  const safe = unsafeString.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  return safe;
}
var init_escapeHtml = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/escapeHtml.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/normalizeHeaders.js
function normalizeHeaders(headersOriginal) {
  let headersCleaned = headersOriginal;
  if (isObject(headersCleaned) && headersCleaned[":method"])
    headersCleaned = Object.fromEntries(Object.entries(headersCleaned).filter(([key]) => !key.startsWith(":")));
  const headersStandard = new Headers(headersCleaned);
  const headers = Object.fromEntries(headersStandard.entries());
  return headers;
}
var init_normalizeHeaders = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/normalizeHeaders.js"() {
    init_isObject();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isVikeReactApp.js
function isVikeReactApp() {
  const g = globalThis;
  return !!g._isVikeReactApp;
}
var init_isVikeReactApp = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/isVikeReactApp.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getPropAccessNotation.js
function getPropAccessNotation(key) {
  return typeof key === "string" && isKeyDotNotationCompatible(key) ? `.${key}` : `[${JSON.stringify(key)}]`;
}
function isKeyDotNotationCompatible(key) {
  return /^[a-z0-9\$_]+$/i.test(key);
}
var init_getPropAccessNotation = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/getPropAccessNotation.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/genPromise.js
function genPromise() {
  let resolve;
  const promise = new Promise((r) => resolve = r);
  return { promise, resolve };
}
var init_genPromise = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/genPromise.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/utils.js
var init_utils3 = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/utils.js"() {
    init_trackLogs();
    init_onLoad();
    init_assert();
    init_cast();
    init_checkType();
    init_isCallable();
    init_isBrowser();
    init_isPlainObject();
    init_isPromise();
    init_hasProp();
    init_parseUrl();
    init_parseUrl_extras();
    init_slice();
    init_sorter();
    init_projectInfo();
    init_isArray();
    init_isObject();
    init_objectAssign();
    init_PromiseType();
    init_compareString();
    init_isObjectWithKeys();
    init_stringifyStringArray();
    init_unique();
    init_filesystemPathHandling();
    init_getOutDirs();
    init_capitalizeFirstLetter();
    init_debugGlob();
    init_isSameErrorMessage();
    init_styleFileRE();
    init_isPropertyGetter();
    init_debug();
    init_urlToFile();
    init_getGlobalObject();
    init_freezePartial();
    init_isNpmPackage();
    init_isNotNullish();
    init_isScriptFile();
    init_removeFileExtention();
    init_objectKeys();
    init_objectEntries();
    init_objectFromEntries();
    init_getFileExtension();
    init_assertIsNotProductionRuntime();
    init_virtual_files();
    init_path_shim();
    init_assertNodeEnv();
    init_isHtml();
    init_warnIfErrorIsNotObject();
    init_stripAnsi();
    init_getTerminWidth();
    init_truncateString();
    init_formatHintLog();
    init_joinEnglish();
    init_isArrayOfStrings();
    init_escapeHtml();
    init_normalizeHeaders();
    init_isVikeReactApp();
    init_getPropAccessNotation();
    init_PROJECT_VERSION();
    init_genPromise();
    onLoad();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/assertPageContextProvidedByUser.js
function assertPageContextProvidedByUser(pageContextProvidedByUser, { hookName, hookFilePath }) {
  if (pageContextProvidedByUser === void 0 || pageContextProvidedByUser === null)
    return;
  assert(!hookName.endsWith(")"));
  const errPrefix = `The ${import_picocolors11.default.cyan("pageContext")} object provided by the ${hookName}() hook defined by ${hookFilePath}`;
  assertUsage2(isObject(pageContextProvidedByUser), `${errPrefix} should be an object (but it's ${import_picocolors11.default.cyan(`typeof pageContext === ${JSON.stringify(typeof pageContextProvidedByUser)}`)} instead)`);
  assertUsage2(!("_objectCreatedByVike" in pageContextProvidedByUser), `${errPrefix} shouldn't be the whole ${import_picocolors11.default.cyan("pageContext")} object, see https://vike.dev/pageContext-manipulation#do-not-return-entire-pagecontext`);
  assertWarning2(!("pageId" in pageContextProvidedByUser), `${errPrefix} sets ${import_picocolors11.default.cyan("pageContext.pageId")} which means that Vike's routing is overriden. This is an experimental feature: make sure to contact a vike maintainer before using this.`, { onlyOnce: true });
  assertUsage2(!("is404" in pageContextProvidedByUser), `${errPrefix} sets ${import_picocolors11.default.cyan("pageContext.is404")} which is forbidden, use ${import_picocolors11.default.cyan("throw render()")} instead, see https://vike.dev/render`);
}
var import_picocolors11;
var init_assertPageContextProvidedByUser = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/assertPageContextProvidedByUser.js"() {
    init_utils();
    import_picocolors11 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/injectHtmlTags.js
function injectHtmlTags(htmlString, htmlTags, position) {
  const htmlFragment = joinHtmlTags(htmlTags.filter((h) => h.position === position));
  if (htmlFragment) {
    htmlString = injectHtmlFragment(position, htmlFragment, htmlString);
  }
  return htmlString;
}
function injectHtmlTagsUsingStream(htmlTags, streamFromReactStreamingPackage) {
  const htmlFragment = joinHtmlTags(htmlTags.filter((h) => h.position === "HTML_STREAM"));
  if (htmlFragment) {
    assert(!streamFromReactStreamingPackage.hasStreamEnded());
    streamFromReactStreamingPackage.injectToStream(htmlFragment, { flush: true });
  }
}
function joinHtmlTags(htmlTags) {
  const htmlFragment = htmlTags.map((h) => resolveHtmlTag(h.htmlTag)).join("");
  return htmlFragment;
}
function injectHtmlFragment(position, htmlFragment, htmlString) {
  if (position === "HTML_BEGIN") {
    {
      const res = injectAtPaceholder(htmlFragment, htmlString, true);
      if (res)
        return res;
    }
    assert(tagOpeningExists("head", htmlString));
    htmlString = injectAtOpeningTag("head", htmlString, htmlFragment);
    return htmlString;
  }
  if (position === "HTML_END") {
    {
      const res = injectAtPaceholder(htmlFragment, htmlString, false);
      if (res)
        return res;
    }
    if (tagClosingExists("body", htmlString)) {
      return injectAtClosingTag("body", htmlString, htmlFragment);
    }
    if (tagClosingExists("html", htmlString)) {
      return injectAtClosingTag("html", htmlString, htmlFragment);
    }
    return htmlString + "\n" + htmlFragment;
  }
  assert(false);
}
function resolveHtmlTag(htmlTag) {
  return typeof htmlTag !== "string" ? htmlTag() : htmlTag;
}
function injectAtOpeningTag(tag2, htmlString, htmlFragment) {
  const openingTag = getTagOpening(tag2);
  const matches = htmlString.match(openingTag);
  assert(matches && matches.length >= 1);
  const tagInstance = matches[0];
  assert(tagInstance);
  const htmlParts = htmlString.split(tagInstance);
  assert(htmlParts.length >= 2);
  const before = slice(htmlParts, 0, 1)[0] + tagInstance;
  const after = slice(htmlParts, 1, 0).join(tagInstance);
  htmlFragment = injectBreakLines(htmlFragment, before, after);
  return before + htmlFragment + after;
}
function injectAtClosingTag(tag2, htmlString, htmlFragment) {
  const tagClosing = getTagClosing(tag2);
  const matches = htmlString.match(tagClosing);
  assert(matches && matches.length >= 1);
  const tagInstance = matches[0];
  assert(tagInstance);
  const htmlParts = htmlString.split(tagInstance);
  assert(htmlParts.length >= 2);
  const before = slice(htmlParts, 0, -1).join(tagInstance);
  const after = tagInstance + slice(htmlParts, -1, 0);
  htmlFragment = injectBreakLines(htmlFragment, before, after);
  return before + htmlFragment + after;
}
function injectBreakLines(htmlFragment, before, after) {
  assert(htmlFragment.trim() === htmlFragment);
  const currentLineBefore = before.split("\n").slice(-1)[0];
  let paddingParent = currentLineBefore.match(/\s*$/)[0];
  let isBlankLine = !!paddingParent;
  if (!paddingParent) {
    paddingParent = currentLineBefore.match(/^\s*/)[0];
  }
  if (!paddingParent)
    return htmlFragment;
  const whitespaceExtra = paddingParent ? "  " : "";
  const whitespace = `${paddingParent}${whitespaceExtra}`;
  const padding = `
${whitespace}`;
  htmlFragment = htmlFragment.replace(/<[^\/]/g, (match) => `${padding}${match}`);
  if (isBlankLine) {
    assert(htmlFragment.startsWith(padding), { htmlFragment });
    htmlFragment = whitespaceExtra + htmlFragment.slice(padding.length);
  }
  const currentLineAfter = after.split("\n")[0];
  if (currentLineAfter.trim().length > 0) {
    htmlFragment += "\n" + paddingParent;
  }
  return htmlFragment;
}
function createHtmlHeadIfMissing(htmlString) {
  const assertion = () => assert(tagOpeningExists("head", htmlString) && tagClosingExists("head", htmlString));
  if (tagOpeningExists("head", htmlString) && tagClosingExists("head", htmlString)) {
    assertion();
    return htmlString;
  }
  const htmlFragment = "<head></head>";
  if (tagOpeningExists("html", htmlString)) {
    htmlString = injectAtOpeningTag("html", htmlString, htmlFragment);
    assertion();
    return htmlString;
  }
  if (tagOpeningExists("!doctype", htmlString)) {
    htmlString = injectAtOpeningTag("!doctype", htmlString, htmlFragment);
    assertion();
    return htmlString;
  }
  htmlString = htmlFragment + "\n" + htmlString;
  assertion();
  return htmlString;
}
function tagOpeningExists(tag2, htmlString) {
  const tagOpeningRE = getTagOpening(tag2);
  return tagOpeningRE.test(htmlString);
}
function tagClosingExists(tag2, htmlString) {
  const tagClosingRE = getTagClosing(tag2);
  return tagClosingRE.test(htmlString);
}
function getTagOpening(tag2) {
  const tagOpening = new RegExp(`<${tag2}(>| [^>]*>)`, "i");
  return tagOpening;
}
function getTagClosing(tag2) {
  const tagClosing = new RegExp(`</${tag2}>`, "i");
  return tagClosing;
}
function injectAtPaceholder(htmlFragment, htmlString, isFirst) {
  const placeholder = isFirst ? "__VITE_PLUGIN_SSR__ASSETS_FIRST__" : "__VITE_PLUGIN__SSR_ASSETS_LAST__";
  const parts = htmlString.split(placeholder);
  if (parts.length === 1)
    return null;
  assertUsage2(parts.length === 2, "You're inserting assets twice into your HTML", { showStackTrace: true });
  return [parts[0], htmlFragment, parts[1]].join("");
}
var init_injectHtmlTags = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/injectHtmlTags.js"() {
    init_utils3();
  }
});

// node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.types = void 0;
    var types = [
      ts({
        is: (val) => val === void 0,
        match: (str) => str === "!undefined",
        serialize: () => "!undefined",
        deserialize: () => void 0
      }),
      ts({
        is: (val) => val === Infinity,
        match: (str) => str === "!Infinity",
        serialize: () => "!Infinity",
        deserialize: () => Infinity
      }),
      ts({
        is: (val) => val === -Infinity,
        match: (str) => str === "!-Infinity",
        serialize: () => "!-Infinity",
        deserialize: () => -Infinity
      }),
      ts({
        is: (val) => typeof val === "number" && isNaN(val),
        match: (str) => str === "!NaN",
        serialize: () => "!NaN",
        deserialize: () => NaN
      }),
      ts({
        is: (val) => val instanceof Date,
        match: (str) => str.startsWith("!Date:"),
        serialize: (val) => "!Date:" + val.toISOString(),
        deserialize: (str) => new Date(str.slice("!Date:".length))
      }),
      ts({
        is: (val) => typeof val === "bigint",
        match: (str) => str.startsWith("!BigInt:"),
        serialize: (val) => "!BigInt:" + val.toString(),
        deserialize: (str) => {
          if (typeof BigInt === "undefined") {
            throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");
          }
          return BigInt(str.slice("!BigInt:".length));
        }
      }),
      ts({
        is: (val) => val instanceof RegExp,
        match: (str) => str.startsWith("!RegExp:"),
        serialize: (val) => "!RegExp:" + val.toString(),
        deserialize: (str) => {
          str = str.slice("!RegExp:".length);
          const args = str.match(/\/(.*)\/(.*)?/);
          const pattern = args[1];
          const flags2 = args[2];
          return new RegExp(pattern, flags2);
        }
      }),
      ts({
        is: (val) => val instanceof Map,
        match: (str) => str.startsWith("!Map:"),
        serialize: (val, serializer) => "!Map:" + serializer(Array.from(val.entries())),
        deserialize: (str, deserializer) => new Map(deserializer(str.slice("!Map:".length)))
      }),
      ts({
        is: (val) => val instanceof Set,
        match: (str) => str.startsWith("!Set:"),
        serialize: (val, serializer) => "!Set:" + serializer(Array.from(val.values())),
        deserialize: (str, deserializer) => new Set(deserializer(str.slice("!Set:".length)))
      }),
      // Avoid collisions with the special strings defined above
      ts({
        is: (val) => typeof val === "string" && val.startsWith("!"),
        match: (str) => str.startsWith("!"),
        serialize: (val) => "!" + val,
        deserialize: (str) => str.slice(1)
      })
    ];
    exports.types = types;
    function ts(t) {
      return t;
    }
  }
});

// node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/utils/isReactElement.js
var require_isReactElement = __commonJS({
  "node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/utils/isReactElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isReactElement = void 0;
    function isReactElement2(value) {
      return typeof value === "object" && value !== null && String(value["$$typeof"]) === "Symbol(react.element)";
    }
    exports.isReactElement = isReactElement2;
  }
});

// node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/utils/isCallable.js
var require_isCallable = __commonJS({
  "node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/utils/isCallable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isCallable = void 0;
    function isCallable3(thing) {
      return thing instanceof Function || typeof thing === "function";
    }
    exports.isCallable = isCallable3;
  }
});

// node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/utils/isObject.js
var require_isObject = __commonJS({
  "node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/utils/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isObject = void 0;
    function isObject2(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      return true;
    }
    exports.isObject = isObject2;
  }
});

// node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/utils/replacerWithPath.js
var require_replacerWithPath = __commonJS({
  "node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/utils/replacerWithPath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.replacerWithPath = void 0;
    function replacerWithPath(replacer) {
      const pathMap = /* @__PURE__ */ new WeakMap();
      return function(key, value) {
        var _a;
        const pathPrevious = (_a = pathMap.get(this)) !== null && _a !== void 0 ? _a : [];
        const path = [...pathPrevious];
        if (key !== "") {
          const pathEntry = !Array.isArray(this) ? key : parseInt(key, 10);
          path.push(pathEntry);
        }
        if (isIterable(value))
          pathMap.set(value, path);
        return replacer.call(this, key, value, path);
      };
    }
    exports.replacerWithPath = replacerWithPath;
    function isIterable(value) {
      return value === Object(value);
    }
  }
});

// node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/stringify.js
var require_stringify = __commonJS({
  "node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isJsonSerializerError = exports.stringify = void 0;
    var types_1 = require_types();
    var isReactElement_1 = require_isReactElement();
    var isCallable_1 = require_isCallable();
    var isObject_1 = require_isObject();
    var replacerWithPath_1 = require_replacerWithPath();
    function stringify3(value, {
      forbidReactElements,
      space,
      valueName,
      sortObjectKeys,
      // Used by Vike: https://github.com/vikejs/vike/blob/b4ba6b70e6bdc2e1f460c0d2e4c3faae5d0a733c/vike/node/plugin/plugins/importUserCode/v1-design/getConfigValuesSerialized.ts#L78
      replacer: replacerUserProvided
    } = {}) {
      const serializer = (val) => JSON.stringify(val, (0, replacerWithPath_1.replacerWithPath)(replacer), space);
      return serializer(value);
      function replacer(key, value2, path) {
        {
          const ret = replacerUserProvided === null || replacerUserProvided === void 0 ? void 0 : replacerUserProvided.call(this, key, value2);
          if (ret)
            return ret.replacement;
        }
        if (forbidReactElements && (0, isReactElement_1.isReactElement)(value2)) {
          throw genErr({
            value: value2,
            valueType: "React element",
            path,
            rootValueName: valueName
          });
        }
        if ((0, isCallable_1.isCallable)(value2)) {
          const functionName = value2.name;
          throw genErr({
            value: value2,
            valueType: "function",
            path,
            rootValueName: valueName,
            problematicValueName: path.length === 0 ? functionName : void 0
          });
        }
        const valueOriginal = this[key];
        for (const { is, serialize: serialize2 } of types_1.types.slice().reverse()) {
          if (is(valueOriginal)) {
            return serialize2(valueOriginal, serializer);
          }
        }
        if (sortObjectKeys && (0, isObject_1.isObject)(value2)) {
          const copy2 = {};
          Object.keys(value2).sort().forEach((key2) => {
            copy2[key2] = value2[key2];
          });
          value2 = copy2;
        }
        return value2;
      }
    }
    exports.stringify = stringify3;
    function genErr({ value, valueType, path, rootValueName, problematicValueName }) {
      const subjectName = getSubjectName({ path, rootValueName, problematicValueName });
      const messageCore = `cannot serialize ${subjectName} because it's a ${valueType}`;
      const err = new Error(`[@brillout/json-serializer](https://github.com/brillout/json-serializer) ${messageCore}.`);
      const pathString = getPathString(path, true);
      const errAddendum = {
        [stamp3]: true,
        messageCore,
        value,
        path,
        pathString,
        subjectName
      };
      Object.assign(err, errAddendum);
      return err;
    }
    var stamp3 = "_isJsonSerializerError";
    function isJsonSerializerError2(thing) {
      return (0, isObject_1.isObject)(thing) && thing[stamp3] === true;
    }
    exports.isJsonSerializerError = isJsonSerializerError2;
    function getSubjectName({ path, rootValueName, problematicValueName }) {
      const pathString = getPathString(path, !rootValueName);
      let subjectName;
      if (!pathString) {
        subjectName = rootValueName || problematicValueName || "value";
      } else {
        if (problematicValueName) {
          subjectName = problematicValueName + " at ";
        } else {
          subjectName = "";
        }
        subjectName = subjectName + (rootValueName || "") + pathString;
      }
      return subjectName;
    }
    function getPathString(path, canBeFirstKey) {
      const pathString = path.map((key, i) => {
        if (typeof key === "number") {
          return `[${key}]`;
        }
        if (i === 0 && canBeFirstKey && isKeyDotNotationCompatible2(key)) {
          return key;
        }
        return getPropAccessNotation2(key);
      }).join("");
      return pathString;
    }
    function getPropAccessNotation2(key) {
      return typeof key === "string" && isKeyDotNotationCompatible2(key) ? `.${key}` : `[${JSON.stringify(key)}]`;
    }
    function isKeyDotNotationCompatible2(key) {
      return /^[a-z0-9\$_]+$/i.test(key);
    }
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/addIs404ToPageProps.js
function addIs404ToPageProps(pageContext) {
  assertIs404(pageContext);
  addIs404(pageContext);
}
function assertIs404(pageContext) {
  if (isErrorPage(pageContext.pageId, pageContext._pageConfigs)) {
    assert(hasProp(pageContext, "is404", "boolean"));
  }
}
function addIs404(pageContext) {
  if (pageContext.is404 === void 0 || pageContext.is404 === null)
    return;
  const pageProps = pageContext.pageProps || {};
  if (!isObject(pageProps)) {
    assertWarning2(false, "pageContext.pageProps should be an object", { showStackTrace: true, onlyOnce: true });
    return;
  }
  pageProps.is404 = pageProps.is404 || pageContext.is404;
  pageContext.pageProps = pageProps;
}
var init_addIs404ToPageProps = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/addIs404ToPageProps.js"() {
    init_utils();
    init_error_page();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/notSerializable.js
var notSerializable;
var init_notSerializable = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/notSerializable.js"() {
    notSerializable = "not-serializable";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/misc/pageContextInitIsPassedToClient.js
var pageContextInitIsPassedToClient;
var init_pageContextInitIsPassedToClient = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/misc/pageContextInitIsPassedToClient.js"() {
    pageContextInitIsPassedToClient = "_pageContextInitIsPassedToClient";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/misc/isServerSideError.js
var isServerSideError;
var init_isServerSideError = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/misc/isServerSideError.js"() {
    isServerSideError = "_isServerSideError";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/serializePageContextClientSide.js
function serializePageContextClientSide(pageContext) {
  const passToClient = getPassToClient(pageContext);
  const pageContextClient = {};
  passToClient.forEach((prop) => {
    pageContextClient[prop] = pageContext[prop];
  });
  if (Object.keys(pageContext._pageContextInit).some((p) => passToClient.includes(p))) {
    pageContextClient[pageContextInitIsPassedToClient] = true;
  }
  let pageContextSerialized;
  try {
    pageContextSerialized = serialize(pageContextClient);
  } catch (err) {
    const h = (s) => import_picocolors12.default.cyan(s);
    let hasWarned = false;
    const propsNonSerializable = [];
    passToClient.forEach((prop) => {
      const propName1 = getPropAccessNotation(prop);
      const propName2 = JSON.stringify(prop);
      const varName = `pageContext${propName1}`;
      try {
        serialize(pageContext[prop], varName);
      } catch (err2) {
        hasWarned = true;
        propsNonSerializable.push(prop);
        if (prop === "_configFromHook") {
          let pathString = "";
          if ((0, import_stringify.isJsonSerializerError)(err2)) {
            pathString = err2.pathString;
          }
          assertUsage2(false, `Cannot serialize config ${h(pathString)} set by useConfig(), see https://vike.dev/useConfig#serialization-error`);
        }
        let msg = [
          `${h(varName)} can't be serialized and, therefore, can't be passed to the client side.`,
          `Make sure ${h(varName)} is serializable, or remove ${h(propName2)} from ${h("passToClient")}.`
        ].join(" ");
        if ((0, import_stringify.isJsonSerializerError)(err2)) {
          msg = `${msg} Serialization error: ${err2.messageCore}.`;
        } else {
          console.warn("Serialization error:");
          console.warn(err2);
          msg = `${msg} The serialization failed because of the error printed above.`;
        }
        assertWarning2(false, msg, { onlyOnce: false });
      }
    });
    assert(hasWarned);
    propsNonSerializable.forEach((prop) => {
      pageContextClient[prop] = notSerializable;
    });
    try {
      pageContextSerialized = serialize(pageContextClient);
    } catch (err2) {
      assert(false);
    }
  }
  return pageContextSerialized;
}
function serialize(value, varName) {
  return (0, import_stringify.stringify)(value, { forbidReactElements: true, valueName: varName });
}
function getPassToClient(pageContext) {
  let passToClient = [...pageContext._passToClient, ...PASS_TO_CLIENT];
  if (isErrorPage(pageContext.pageId, pageContext._pageConfigs)) {
    assert(hasProp(pageContext, "is404", "boolean"));
    addIs404ToPageProps(pageContext);
    passToClient.push(...PASS_TO_CLIENT_ERROR_PAGE);
  }
  passToClient = unique(passToClient);
  return passToClient;
}
function serializePageContextAbort(pageContext) {
  assert(pageContext._urlRedirect || pageContext._urlRewrite || pageContext.abortStatusCode);
  assert(pageContext._abortCall);
  assert(pageContext._abortCaller);
  delete pageContext._abortCaller;
  const unknownProps = Object.keys(pageContext).filter((prop) => ![
    // prettier-ignore
    // biome-ignore format:
    "_abortCall",
    /* Not needed on the client-side
    '_abortCaller',
    */
    "_urlRedirect",
    "_urlRewrite",
    "abortStatusCode",
    "abortReason",
    "is404",
    "pageProps"
  ].includes(prop));
  if (!pageContext._isLegacyRenderErrorPage) {
    assert(unknownProps.length === 0);
  } else {
    assertWarning2(unknownProps.length === 0, [
      "The following pageContext values won't be available on the client-side:",
      unknownProps.map((p) => `  pageContext[${JSON.stringify(p)}]`),
      "Use `throw render()` instead of `throw RenderErrorPage()`"
    ].join("\n"), {
      onlyOnce: false
    });
  }
  return serialize(pageContext);
}
var import_stringify, import_picocolors12, PASS_TO_CLIENT, PASS_TO_CLIENT_ERROR_PAGE;
var init_serializePageContextClientSide = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/serializePageContextClientSide.js"() {
    import_stringify = __toESM(require_stringify(), 1);
    init_utils3();
    init_error_page();
    init_addIs404ToPageProps();
    import_picocolors12 = __toESM(require_picocolors(), 1);
    init_notSerializable();
    init_pageContextInitIsPassedToClient();
    init_isServerSideError();
    PASS_TO_CLIENT = [
      "abortReason",
      "_urlRewrite",
      "_urlRedirect",
      "abortStatusCode",
      "_abortCall",
      /* Not needed on the client-side
      '_abortCaller',
      */
      pageContextInitIsPassedToClient,
      "pageId",
      "routeParams",
      "data"
      // for data() hook
    ];
    PASS_TO_CLIENT_ERROR_PAGE = ["pageProps", "is404", isServerSideError];
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/sanitizeJson.js
function sanitizeJson(unsafe) {
  const safe = unsafe.replace(/</g, "\\u003c");
  return safe;
}
var init_sanitizeJson = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/sanitizeJson.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/inferHtmlTags.js
function inferPreloadTag(pageAsset) {
  const { src, assetType, mediaType } = pageAsset;
  const rel = getRel(pageAsset);
  const attributes = [
    `rel="${rel}"`,
    `href="${src}"`,
    !assetType ? null : `as="${assetType}"`,
    !mediaType ? null : `type="${mediaType}"`,
    // `crossorigin` is needed for fonts, see https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload#cors-enabled_fetches
    !isCrossOrigin(pageAsset) ? null : "crossorigin"
  ].filter(Boolean).join(" ");
  return `<link ${attributes}>`;
}
function inferAssetTag(pageAsset) {
  const { src, assetType, mediaType } = pageAsset;
  if (assetType === "script") {
    assert(mediaType === "text/javascript");
    return `<script src="${src}" ${scriptAttrs}></script>`;
  }
  if (assetType === "style") {
    return `<link rel="stylesheet" type="text/css" href="${src}">`;
  }
  assert(false, { pageAsset });
}
function inferEarlyHintLink(pageAsset) {
  const { src, assetType } = pageAsset;
  const rel = getRel(pageAsset);
  return [`<${src}>`, `rel=${rel}`, !assetType ? null : `as=${assetType}`].filter(Boolean).join("; ");
}
function getRel({ assetType }) {
  if (assetType === "script") {
    return "modulepreload";
  }
  return "preload";
}
function isCrossOrigin({ src, assetType }) {
  return assetType === "font" || src.startsWith("http://") || src.startsWith("https://");
}
var scriptAttrs;
var init_inferHtmlTags = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/inferHtmlTags.js"() {
    init_utils3();
    scriptAttrs = 'type="module" async';
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/mergeScriptTags.js
function mergeScriptTags(scriptTagsHtml) {
  let scriptTag = "";
  const scripts = parseScripts(scriptTagsHtml);
  {
    const scriptsModule = scripts.filter(({ isModule }) => isModule);
    if (scriptsModule.length === 1) {
      scriptTag += scriptsModule[0].outerHtml;
    } else {
      const contents = [];
      scriptsModule.forEach(({ src, innerHtml }) => {
        const hasInnerHtml = !!innerHtml.trim();
        if (src) {
          assert(!hasInnerHtml);
          contents.push(`import ${JSON.stringify(src)};`);
        } else if (hasInnerHtml) {
          innerHtml = innerHtml.split("\n").filter(Boolean).join("\n");
          contents.push(innerHtml);
        }
      });
      if (contents.length > 0) {
        scriptTag += `<script ${scriptAttrs}>
${contents.join("\n")}
</script>`;
      }
    }
  }
  {
    const scriptsES5 = scripts.filter(({ isModule }) => !isModule);
    scriptsES5.forEach(({ outerHtml }) => {
      scriptTag += outerHtml;
    });
  }
  return scriptTag;
}
function parseScripts(htmlString) {
  const scripts = [];
  let match;
  while (match = scriptRE.exec(htmlString)) {
    const [outerHtml, openTag, innerHtml] = match;
    assert(outerHtml && openTag && innerHtml !== void 0);
    let isModule = false;
    {
      const typeMatch = openTag.match(typeRE);
      const type = typeMatch && (typeMatch[1] || typeMatch[2] || typeMatch[3]);
      isModule = type === "module";
    }
    let src = null;
    {
      const srcMatch = openTag.match(srcRE);
      src = srcMatch && (srcMatch[1] || srcMatch[2] || srcMatch[3]) || "";
    }
    scripts.push({ isModule, src, innerHtml, outerHtml });
  }
  return scripts;
}
var scriptRE, srcRE, typeRE;
var init_mergeScriptTags = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/mergeScriptTags.js"() {
    init_utils3();
    init_inferHtmlTags();
    scriptRE = /(<script\b(?:\s[^>]*>|>))(.*?)<\/script>/gims;
    srcRE = /\bsrc\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s'">]+))/im;
    typeRE = /\btype\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s'">]+))/im;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/helpers.js
function getPageConfig(pageId, pageConfigs) {
  const pageConfig = pageConfigs.find((p) => p.pageId === pageId);
  assert(pageConfigs.length > 0);
  assert(pageConfig);
  return pageConfig;
}
function getConfigValueFilePathToShowToUser(definedAtData) {
  if (!definedAtData || isArray(definedAtData))
    return null;
  const { filePathToShowToUser } = definedAtData;
  assert(filePathToShowToUser);
  return filePathToShowToUser;
}
function getHookFilePathToShowToUser(definedAtData) {
  const filePathToShowToUser = getConfigValueFilePathToShowToUser(definedAtData);
  assert(filePathToShowToUser);
  return filePathToShowToUser;
}
var init_helpers = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/helpers.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/getExportPath.js
function getExportPath(fileExportPathToShowToUser, configName) {
  if (!fileExportPathToShowToUser)
    return null;
  let [exportName, ...exportObjectPath] = fileExportPathToShowToUser;
  if (!exportName)
    return null;
  if (exportObjectPath.length === 0 && ["*", "default", configName].includes(exportName))
    return null;
  assert(exportName !== "*");
  let prefix = "";
  let suffix = "";
  if (exportName === "default") {
    prefix = "export default";
  } else {
    prefix = "export";
    exportObjectPath = [exportName, ...exportObjectPath];
  }
  exportObjectPath.forEach((prop) => {
    prefix = `${prefix} { ${prop}`;
    suffix = ` }${suffix}`;
  });
  const exportPath = prefix + suffix;
  return exportPath;
}
var init_getExportPath = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/getExportPath.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/getConfigDefinedAt.js
function getConfigDefinedAt(sentenceBegin, configName, definedAtData) {
  return `${begin(sentenceBegin, configName)} at ${getDefinedAtString(definedAtData, configName)}`;
}
function getConfigDefinedAtOptional(sentenceBegin, configName, definedAtData) {
  if (!definedAtData) {
    return `${begin(sentenceBegin, configName)} internally`;
  } else {
    return `${begin(sentenceBegin, configName)} at ${getDefinedAtString(definedAtData, configName)}`;
  }
}
function begin(sentenceBegin, configName) {
  return `${sentenceBegin} ${import_picocolors13.default.cyan(configName)} defined`;
}
function getDefinedAtString(definedAtData, configName) {
  let files;
  if (isArray(definedAtData)) {
    files = definedAtData;
  } else {
    files = [definedAtData];
  }
  assert(files.length >= 1);
  const definedAtString = files.map((source) => {
    const { filePathToShowToUser, fileExportPathToShowToUser } = source;
    let s = filePathToShowToUser;
    const exportPath = getExportPath(fileExportPathToShowToUser, configName);
    if (exportPath) {
      s = `${s} > ${import_picocolors13.default.cyan(exportPath)}`;
    }
    return s;
  }).join(" / ");
  return definedAtString;
}
var import_picocolors13;
var init_getConfigDefinedAt = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/getConfigDefinedAt.js"() {
    init_utils();
    import_picocolors13 = __toESM(require_picocolors(), 1);
    init_getExportPath();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/getConfigValue.js
function getConfigValueTyped(configValue, configName, type) {
  const { value, definedAtData } = configValue;
  if (type)
    assertConfigValueType(value, type, configName, definedAtData);
  return configValue;
}
function getConfigValueRuntime(pageConfig, configName, type) {
  const configValue = pageConfig.configValues[configName];
  if (!configValue)
    return null;
  return getConfigValueTyped(configValue, configName, type);
}
function assertConfigValueType(value, type, configName, definedAtData) {
  assert(value !== null);
  const typeActual = typeof value;
  if (typeActual === type)
    return;
  const valuePrintable = getValuePrintable(value);
  const problem = valuePrintable !== null ? `value ${import_picocolors14.default.cyan(valuePrintable)}` : `type ${import_picocolors14.default.cyan(typeActual)}`;
  const configDefinedAt = getConfigDefinedAtOptional("Config", configName, definedAtData);
  const errMsg = `${configDefinedAt} has an invalid ${problem}: it should be a ${import_picocolors14.default.cyan(type)} instead`;
  assertUsage2(false, errMsg);
}
var import_picocolors14;
var init_getConfigValue = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/getConfigValue.js"() {
    init_utils();
    import_picocolors14 = __toESM(require_picocolors(), 1);
    init_getConfigDefinedAt();
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/createErrorWithCleanStackTrace.js
var require_createErrorWithCleanStackTrace = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/createErrorWithCleanStackTrace.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createErrorWithCleanStackTrace = createErrorWithCleanStackTrace2;
    function createErrorWithCleanStackTrace2(errorMessage, numberOfStackTraceLinesToRemove2) {
      const err = new Error(errorMessage);
      err.stack = clean2(err.stack, numberOfStackTraceLinesToRemove2);
      return err;
    }
    function clean2(errStack, numberOfStackTraceLinesToRemove2) {
      if (!errStack) {
        return errStack;
      }
      const stackLines = splitByLine2(errStack);
      let linesRemoved = 0;
      const stackLine__cleaned = stackLines.filter((line) => {
        if (line.includes(" (internal/") || line.includes(" (node:internal")) {
          return false;
        }
        if (linesRemoved < numberOfStackTraceLinesToRemove2 && isStackTraceLine2(line)) {
          linesRemoved++;
          return false;
        }
        return true;
      }).join("\n");
      return stackLine__cleaned;
    }
    function isStackTraceLine2(line) {
      return line.startsWith("    at ");
    }
    function splitByLine2(str) {
      return str.split(/\r?\n/);
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/PROJECT_VERSION.js
var require_PROJECT_VERSION = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/PROJECT_VERSION.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PROJECT_VERSION = void 0;
    exports.PROJECT_VERSION = "0.4.12";
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/projectInfo.js
var require_projectInfo = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/projectInfo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.projectInfo = void 0;
    var PROJECT_VERSION_1 = require_PROJECT_VERSION();
    exports.projectInfo = {
      projectName: "@brillout/vite-plugin-server-entry",
      npmPackageName: "@brillout/vite-plugin-server-entry",
      projectVersion: PROJECT_VERSION_1.PROJECT_VERSION,
      githubRepository: "https://github.com/brillout/vite-plugin-server-entry"
    };
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/assert.js
var require_assert = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logLabel = void 0;
    exports.assert = assert2;
    exports.assertUsage = assertUsage3;
    var createErrorWithCleanStackTrace_1 = require_createErrorWithCleanStackTrace();
    var projectInfo_1 = require_projectInfo();
    var logLabel = `[${projectInfo_1.projectInfo.npmPackageName}@${projectInfo_1.projectInfo.projectVersion}]`;
    exports.logLabel = logLabel;
    var internalErrorPrefix = `${logLabel}[Bug]`;
    var usageErrorPrefix = `${logLabel}[Wrong Usage]`;
    var numberOfStackTraceLinesToRemove2 = 2;
    function assert2(condition, debugInfo) {
      if (condition) {
        return;
      }
      const debugStr = (() => {
        if (!debugInfo) {
          return null;
        }
        const debugInfoSerialized = typeof debugInfo === "string" ? debugInfo : "`" + JSON.stringify(debugInfo) + "`";
        return `Debug info (this is for the ${projectInfo_1.projectInfo.projectName} maintainers; you can ignore this): ${debugInfoSerialized}`;
      })();
      const internalError = (0, createErrorWithCleanStackTrace_1.createErrorWithCleanStackTrace)([
        `${internalErrorPrefix} You stumbled upon a bug in the source code of ${projectInfo_1.projectInfo.projectName}.`,
        `Reach out at ${projectInfo_1.projectInfo.githubRepository}/issues/new and include this error stack (the error stack is usually enough to fix the problem).`,
        "A maintainer will fix the bug (usually under 24 hours).",
        `Don't hesitate to reach out as it makes ${projectInfo_1.projectInfo.projectName} more robust.`,
        debugStr
      ].filter(Boolean).join(" "), numberOfStackTraceLinesToRemove2);
      throw internalError;
    }
    function assertUsage3(condition, errorMessage) {
      if (condition) {
        return;
      }
      const errMsg = `${usageErrorPrefix} ${errorMessage}`;
      const usageError = (0, createErrorWithCleanStackTrace_1.createErrorWithCleanStackTrace)(errMsg, numberOfStackTraceLinesToRemove2);
      throw usageError;
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/filesystemPathHandling.js
var require_filesystemPathHandling = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/filesystemPathHandling.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toPosixPath = toPosixPath2;
    exports.assertPosixPath = assertPosixPath2;
    exports.toSystemPath = toSystemPath;
    var assert_1 = require_assert();
    var sepPosix = "/";
    var sepWin32 = "\\";
    function toPosixPath2(path) {
      if (isPosix()) {
        assertPosixPath2(path);
        return path;
      }
      if (isWin32()) {
        const pathPosix = path.split(sepWin32).join(sepPosix);
        assertPosixPath2(pathPosix);
        return pathPosix;
      }
      (0, assert_1.assert)(false);
    }
    function assertPosixPath2(path) {
      (0, assert_1.assert)(path && !path.includes(sepWin32), `Wrongly formatted path: ${path}`);
    }
    function toSystemPath(path) {
      if (isPosix()) {
        return toPosixPath2(path);
      }
      if (isWin32()) {
        return path.split(sepPosix).join(sepWin32);
      }
      (0, assert_1.assert)(false);
    }
    function isWin32() {
      return process.platform === "win32";
    }
    function isPosix() {
      return !isWin32();
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/getCwd.js
var require_getCwd = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/getCwd.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCwd = getCwd;
    var filesystemPathHandling_1 = require_filesystemPathHandling();
    function getCwd() {
      if (typeof process == "undefined" || !("cwd" in process))
        return null;
      return (0, filesystemPathHandling_1.toPosixPath)(process.cwd());
    }
  }
});

// node_modules/.pnpm/@brillout+import@0.2.3/node_modules/@brillout/import/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/@brillout+import@0.2.3/node_modules/@brillout/import/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.import_ = void 0;
    exports.default = import_2;
    function import_2(id) {
      id = fixWindowsBug(id);
      return import(
        /*webpackIgnore: true*/
        id
      );
    }
    exports.import_ = import_2;
    var prefix = "file://";
    function fixWindowsBug(id) {
      if (process.platform === "win32" && isAbsolute(id) && !id.startsWith(prefix)) {
        return prefix + id;
      } else {
        return id;
      }
    }
    function isAbsolute(path) {
      return /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/.test(path);
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/require.js
var require_require = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/require.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.requireResolve = requireResolve;
    var import_1 = require_dist2();
    async function requireResolve(id, currentFilename) {
      const req = await getRequire(currentFilename);
      return req.resolve(id);
    }
    async function getRequire(currentFilename) {
      const { createRequire } = await (0, import_1.import_)("module");
      const req = createRequire(currentFilename);
      return req;
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/isWebpackResolve.js
var require_isWebpackResolve = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/utils/isWebpackResolve.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isWebpackResolve = isWebpackResolve;
    function isWebpackResolve(moduleResolve) {
      return typeof moduleResolve === "number";
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/utils.js
var require_utils2 = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_assert(), exports);
    __exportStar(require_getCwd(), exports);
    __exportStar(require_filesystemPathHandling(), exports);
    __exportStar(require_require(), exports);
    __exportStar(require_isWebpackResolve(), exports);
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/shared/utils.js
var require_utils3 = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/shared/utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_assert(), exports);
    __exportStar(require_getCwd(), exports);
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/shared/debug.js
var require_debug = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/shared/debug.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEBUG = void 0;
    exports.logDebug = logDebug;
    var utils_1 = require_utils3();
    var DEBUG = false;
    exports.DEBUG = DEBUG;
    function logDebug(...msgs) {
      console.log(`${utils_1.logLabel}[DEBUG]`, ...msgs);
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/debugLogsRuntime.js
var require_debugLogsRuntime = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/debugLogsRuntime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.debugLogsRuntimePre = debugLogsRuntimePre;
    exports.debugLogsRuntimePost = debugLogsRuntimePost;
    var utils_1 = require_utils3();
    var debug_1 = require_debug();
    function debugLogsRuntimePre(autoImporter) {
      if (!debug_1.DEBUG)
        return;
      (0, debug_1.logDebug)("DEBUG_LOGS_RUNTIME [begin]");
      try {
        (0, debug_1.logDebug)("process.platform", JSON.stringify(process.platform));
      } catch {
        (0, debug_1.logDebug)("process.platform", "undefined");
      }
      try {
        (0, debug_1.logDebug)("process.release", JSON.stringify(process.release));
      } catch {
        (0, debug_1.logDebug)("process.release", "undefined");
      }
      try {
        (0, debug_1.logDebug)("navigator", JSON.stringify(navigator));
      } catch {
        (0, debug_1.logDebug)("navigator", "undefined");
      }
      (0, debug_1.logDebug)("cwd", (0, utils_1.getCwd)());
      (0, debug_1.logDebug)("importer.status", autoImporter.status);
      if (autoImporter.status === "SET") {
        (0, debug_1.logDebug)("importer.paths.autoImporterFilePathOriginal", autoImporter.paths.autoImporterFilePathOriginal);
        (0, debug_1.logDebug)("importer.paths.autoImporterFileDirActual", autoImporter.paths.autoImporterFileDirActual);
        (0, debug_1.logDebug)("importer.paths.serverEntryFilePathRelative", autoImporter.paths.serverEntryFilePathRelative);
        (0, debug_1.logDebug)("importer.paths.serverEntryFilePathOriginal", autoImporter.paths.serverEntryFilePathOriginal);
        try {
          (0, debug_1.logDebug)("importer.paths.serverEntryFilePathResolved()", autoImporter.paths.serverEntryFilePathResolved());
        } catch (err) {
          (0, debug_1.logDebug)("importer.paths.serverEntryFilePathResolved() error:", err);
          (0, debug_1.logDebug)("importer.paths.serverEntryFilePathResolved()", "ERRORED");
        }
      }
    }
    function debugLogsRuntimePost({ success, requireError, outDir, isOutsideOfCwd }) {
      if (!debug_1.DEBUG)
        return;
      (0, debug_1.logDebug)("requireError", requireError);
      (0, debug_1.logDebug)("outDir", outDir);
      (0, debug_1.logDebug)("isOutsideOfCwd", isOutsideOfCwd);
      (0, debug_1.logDebug)("success", success);
      (0, debug_1.logDebug)("DEBUG_LOGS_RUNTIME [end]");
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/shared/serverEntryFileNameBase.js
var require_serverEntryFileNameBase = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/shared/serverEntryFileNameBase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serverEntryFileNameBaseAlternative = exports.serverEntryFileNameBase = void 0;
    exports.serverEntryFileNameBase = "entry";
    exports.serverEntryFileNameBaseAlternative = "entryOthers";
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/crawlServerEntry.js
var require_crawlServerEntry = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/crawlServerEntry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crawlServerEntry = crawlServerEntry;
    var utils_1 = require_utils2();
    var import_1 = require_dist2();
    var serverEntryFileNameBase_1 = require_serverEntryFileNameBase();
    async function crawlServerEntry(outDir) {
      const cwd = (0, utils_1.getCwd)();
      if (!cwd)
        return false;
      let path;
      let fs;
      try {
        path = await (0, import_1.import_)("path");
        fs = await (0, import_1.import_)("fs");
      } catch {
        return false;
      }
      const isPathAbsolute = (p) => {
        if (process.platform === "win32") {
          return path.win32.isAbsolute(p);
        } else {
          return p.startsWith("/");
        }
      };
      if (outDir) {
        (0, utils_1.assertPosixPath)(outDir);
        (0, utils_1.assert)(isPathAbsolute(outDir), outDir);
      } else {
        outDir = path.posix.join(cwd, "dist");
      }
      const serverEntryFileDir = path.posix.join(outDir, "server");
      if (!fs.existsSync(serverEntryFileDir))
        return false;
      let filename;
      try {
        filename = __filename;
      } catch {
        return false;
      }
      let serverEntryFilePath = null;
      const entryFileCandidates = [
        `${serverEntryFileNameBase_1.serverEntryFileNameBase}.mjs`,
        `${serverEntryFileNameBase_1.serverEntryFileNameBase}.js`,
        `${serverEntryFileNameBase_1.serverEntryFileNameBase}.cjs`,
        `${serverEntryFileNameBase_1.serverEntryFileNameBaseAlternative}.mjs`,
        `${serverEntryFileNameBase_1.serverEntryFileNameBaseAlternative}.js`,
        `${serverEntryFileNameBase_1.serverEntryFileNameBaseAlternative}.cjs`
      ];
      for (const entryFileName of entryFileCandidates) {
        const serverEntryFilePathSpeculative = path.posix.join(serverEntryFileDir, entryFileName);
        try {
          serverEntryFilePath = await (0, utils_1.requireResolve)(serverEntryFilePathSpeculative, filename);
        } catch {
        }
      }
      (0, utils_1.assertUsage)(serverEntryFilePath, `Cannot find server entry. If you use rollupOptions.output.entryFileNames then make sure to not rename the server entry file. Make sure that one of the following exists: 
${entryFileCandidates.map((e) => `  ${e}`).join("\n")}`);
      if ((0, utils_1.isWebpackResolve)(serverEntryFilePath)) {
        return false;
      }
      await (0, import_1.import_)(serverEntryFilePath);
      return true;
    }
  }
});

// node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape2(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape2("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = X;
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/components/Loading.js
function LoadingComponent() {
  return import_react.default.createElement("div", { style: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    background: "linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)",
    borderRadius: "5px",
    backgroundSize: "200% 100%",
    animation: "1.3s vike-react-shine linear infinite",
    aspectRatio: "2.5/1"
  } });
}
var import_react, Loading_default;
var init_Loading = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/components/Loading.js"() {
    import_react = __toESM(require_react(), 1);
    Loading_default = {
      component: LoadingComponent
    };
  }
});

// node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js
var require_react_dom_server_legacy_node_production_min = __commonJS({
  "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js"(exports) {
    "use strict";
    var ea = require_react();
    var fa = __require("stream");
    var n = Object.prototype.hasOwnProperty;
    var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia = {};
    var ja = {};
    function ka(a) {
      if (n.call(ja, a)) return true;
      if (n.call(ia, a)) return false;
      if (ha.test(a)) return ja[a] = true;
      ia[a] = true;
      return false;
    }
    function q(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var r = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      r[a] = new q(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      r[b] = new q(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      r[a] = new q(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      r[a] = new q(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      r[a] = new q(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      r[a] = new q(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      r[a] = new q(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      r[a] = new q(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      r[a] = new q(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var la = /[\-:]([a-z])/g;
    function ma(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        la,
        ma
      );
      r[b] = new q(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(la, ma);
      r[b] = new q(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(la, ma);
      r[b] = new q(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      r[a] = new q(a, 1, false, a.toLowerCase(), null, false, false);
    });
    r.xlinkHref = new q("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      r[a] = new q(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var t = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var na = ["Webkit", "ms", "Moz", "O"];
    Object.keys(t).forEach(function(a) {
      na.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        t[b] = t[a];
      });
    });
    var oa = /["'&<>]/;
    function u(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = oa.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var pa = /([A-Z])/g;
    var qa = /^ms-/;
    var ra = Array.isArray;
    function v(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function sa(a, b, c) {
      switch (b) {
        case "select":
          return v(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return v(2, null);
        case "math":
          return v(3, null);
        case "foreignObject":
          return v(1, null);
        case "table":
          return v(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return v(5, null);
        case "colgroup":
          return v(7, null);
        case "tr":
          return v(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? v(1, null) : a;
    }
    var ta = /* @__PURE__ */ new Map();
    function ua(a, b, c) {
      if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b = true;
      for (var d in c) if (n.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = u(d);
            f = u(("" + f).trim());
          } else {
            e = d;
            var g = ta.get(e);
            void 0 !== g ? e = g : (g = u(e.replace(pa, "-$1").toLowerCase().replace(qa, "-ms-")), ta.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || n.call(
              t,
              d
            ) ? "" + f : f + "px" : u(("" + f).trim());
          }
          b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
        }
      }
      b || a.push('"');
    }
    function w(a, b, c, d) {
      switch (c) {
        case "style":
          ua(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = r.hasOwnProperty(c) ? r[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(" ", c, '=""');
              break;
            case 4:
              true === d ? a.push(" ", c, '=""') : false !== d && a.push(" ", c, '="', u(d), '"');
              break;
            case 5:
              isNaN(d) || a.push(" ", c, '="', u(d), '"');
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(" ", c, '="', u(d), '"');
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', u(d), '"');
          }
        } else if (ka(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(" ", c, '="', u(d), '"');
        }
      }
    }
    function x(a, b, c) {
      if (null != b) {
        if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function va(a) {
      var b = "";
      ea.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    function wa(a, b, c, d) {
      a.push(z(c));
      var f = c = null, e;
      for (e in b) if (n.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            w(a, d, e, g);
        }
      }
      a.push(">");
      x(a, f, c);
      return "string" === typeof c ? (a.push(u(c)), null) : c;
    }
    var xa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var ya = /* @__PURE__ */ new Map();
    function z(a) {
      var b = ya.get(a);
      if (void 0 === b) {
        if (!xa.test(a)) throw Error("Invalid tag: " + a);
        b = "<" + a;
        ya.set(a, b);
      }
      return b;
    }
    function za(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(z("select"));
          var e = null, g = null;
          for (l in c) if (n.call(c, l)) {
            var h = c[l];
            if (null != h) switch (l) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                w(a, d, l, h);
            }
          }
          a.push(">");
          x(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(z("option"));
          var k = h = null, m = null;
          var l = null;
          for (e in c) if (n.call(c, e)) {
            var p = c[e];
            if (null != p) switch (e) {
              case "children":
                h = p;
                break;
              case "selected":
                m = p;
                break;
              case "dangerouslySetInnerHTML":
                l = p;
                break;
              case "value":
                k = p;
              default:
                w(a, d, e, p);
            }
          }
          if (null != g) if (c = null !== k ? "" + k : va(h), ra(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(' selected=""');
              break;
            }
          }
          else "" + g === c && a.push(' selected=""');
          else m && a.push(' selected=""');
          a.push(">");
          x(a, l, h);
          return h;
        case "textarea":
          a.push(z("textarea"));
          l = g = e = null;
          for (h in c) if (n.call(c, h) && (k = c[h], null != k)) switch (h) {
            case "children":
              l = k;
              break;
            case "value":
              e = k;
              break;
            case "defaultValue":
              g = k;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              w(a, d, h, k);
          }
          null === e && null !== g && (e = g);
          a.push(">");
          if (null != l) {
            if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ra(l) && 1 < l.length) throw Error("<textarea> can only have at most one child.");
            e = "" + l;
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          null !== e && a.push(u("" + e));
          return null;
        case "input":
          a.push(z("input"));
          k = l = h = e = null;
          for (g in c) if (n.call(c, g) && (m = c[g], null != m)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              k = m;
              break;
            case "defaultValue":
              h = m;
              break;
            case "checked":
              l = m;
              break;
            case "value":
              e = m;
              break;
            default:
              w(a, d, g, m);
          }
          null !== l ? w(a, d, "checked", l) : null !== k && w(a, d, "checked", k);
          null !== e ? w(a, d, "value", e) : null !== h && w(a, d, "value", h);
          a.push("/>");
          return null;
        case "menuitem":
          a.push(z("menuitem"));
          for (var B in c) if (n.call(c, B) && (e = c[B], null != e)) switch (B) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              w(
                a,
                d,
                B,
                e
              );
          }
          a.push(">");
          return null;
        case "title":
          a.push(z("title"));
          e = null;
          for (p in c) if (n.call(c, p) && (g = c[p], null != g)) switch (p) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              w(a, d, p, g);
          }
          a.push(">");
          return e;
        case "listing":
        case "pre":
          a.push(z(b));
          g = e = null;
          for (k in c) if (n.call(c, k) && (h = c[k], null != h)) switch (k) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              w(a, d, k, h);
          }
          a.push(">");
          if (null != g) {
            if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push("\n", c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(z(b));
          for (var C in c) if (n.call(c, C) && (e = c[C], null != e)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              w(a, d, C, e);
          }
          a.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return wa(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), wa(a, c, b, d);
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return wa(a, c, b, d);
          a.push(z(b));
          g = e = null;
          for (m in c) if (n.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              ua(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ka(m) && "function" !== typeof h && "symbol" !== typeof h && a.push(" ", m, '="', u(h), '"');
          }
          a.push(">");
          x(a, g, e);
          return e;
      }
    }
    function Aa(a, b, c) {
      a.push('<!--$?--><template id="');
      if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
      a.push(c);
      return a.push('"></template>');
    }
    function Ba(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 2:
          return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 3:
          return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 4:
          return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 5:
          return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 6:
          return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 7:
          return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ca(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return a.push("</div>");
        case 2:
          return a.push("</svg>");
        case 3:
          return a.push("</math>");
        case 4:
          return a.push("</table>");
        case 5:
          return a.push("</tbody></table>");
        case 6:
          return a.push("</tr></table>");
        case 7:
          return a.push("</colgroup></table>");
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Da = /[<\u2028\u2029]/g;
    function Ea(a) {
      return JSON.stringify(a).replace(Da, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Fa(a, b) {
      b = void 0 === b ? "" : b;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
    }
    function Ga() {
      return { insertionMode: 1, selectedValue: null };
    }
    function Ha(a, b, c, d) {
      if (c.generateStaticMarkup) return a.push(u(b)), false;
      "" === b ? a = d : (d && a.push("<!-- -->"), a.push(u(b)), a = true);
      return a;
    }
    var A = Object.assign;
    var Ia = Symbol.for("react.element");
    var Ja = Symbol.for("react.portal");
    var Ka = Symbol.for("react.fragment");
    var La = Symbol.for("react.strict_mode");
    var Ma = Symbol.for("react.profiler");
    var Na = Symbol.for("react.provider");
    var Oa = Symbol.for("react.context");
    var Pa = Symbol.for("react.forward_ref");
    var Qa = Symbol.for("react.suspense");
    var Ra = Symbol.for("react.suspense_list");
    var Sa = Symbol.for("react.memo");
    var Ta = Symbol.for("react.lazy");
    var Ua = Symbol.for("react.scope");
    var Va = Symbol.for("react.debug_trace_mode");
    var Wa = Symbol.for("react.legacy_hidden");
    var Xa = Symbol.for("react.default_value");
    var Ya = Symbol.iterator;
    function Za(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Ka:
          return "Fragment";
        case Ja:
          return "Portal";
        case Ma:
          return "Profiler";
        case La:
          return "StrictMode";
        case Qa:
          return "Suspense";
        case Ra:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Oa:
          return (a.displayName || "Context") + ".Consumer";
        case Na:
          return (a._context.displayName || "Context") + ".Provider";
        case Pa:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Sa:
          return b = a.displayName || null, null !== b ? b : Za(a.type) || "Memo";
        case Ta:
          b = a._payload;
          a = a._init;
          try {
            return Za(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var $a = {};
    function ab(a, b) {
      a = a.contextTypes;
      if (!a) return $a;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var D = null;
    function E(a, b) {
      if (a !== b) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          E(a, c);
        }
        b.context._currentValue2 = b.value;
      }
    }
    function bb(a) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      null !== a && bb(a);
    }
    function cb(a) {
      var b = a.parent;
      null !== b && cb(b);
      a.context._currentValue2 = a.value;
    }
    function db(a, b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b.depth ? E(a, b) : db(a, b);
    }
    function eb(a, b) {
      var c = b.parent;
      if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c.depth ? E(a, c) : eb(a, c);
      b.context._currentValue2 = b.value;
    }
    function F(a) {
      var b = D;
      b !== a && (null === b ? cb(a) : null === a ? bb(b) : b.depth === a.depth ? E(b, a) : b.depth > a.depth ? db(b, a) : eb(b, a), D = a);
    }
    var fb = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function gb(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = fb;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : A({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && fb.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = A({}, e, h)) : A(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var hb = { id: 1, overflow: "" };
    function ib(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - G(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - G(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - G(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var G = Math.clz32 ? Math.clz32 : jb;
    var kb = Math.log;
    var lb = Math.LN2;
    function jb(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (kb(a) / lb | 0) | 0;
    }
    function mb(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var nb = "function" === typeof Object.is ? Object.is : mb;
    var H = null;
    var ob = null;
    var I = null;
    var J = null;
    var K = false;
    var L = false;
    var M = 0;
    var N = null;
    var O = 0;
    function P() {
      if (null === H) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return H;
    }
    function rb() {
      if (0 < O) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function sb() {
      null === J ? null === I ? (K = false, I = J = rb()) : (K = true, J = I) : null === J.next ? (K = false, J = J.next = rb()) : (K = true, J = J.next);
      return J;
    }
    function tb() {
      ob = H = null;
      L = false;
      I = null;
      O = 0;
      J = N = null;
    }
    function ub(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function vb(a, b, c) {
      H = P();
      J = sb();
      if (K) {
        var d = J.queue;
        b = d.dispatch;
        if (null !== N && (c = N.get(d), void 0 !== c)) {
          N.delete(d);
          d = J.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          J.memoizedState = d;
          return [d, b];
        }
        return [J.memoizedState, b];
      }
      a = a === ub ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      J.memoizedState = a;
      a = J.queue = { last: null, dispatch: null };
      a = a.dispatch = wb.bind(null, H, a);
      return [J.memoizedState, a];
    }
    function xb(a, b) {
      H = P();
      J = sb();
      b = void 0 === b ? null : b;
      if (null !== J) {
        var c = J.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!nb(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      J.memoizedState = [a, b];
      return a;
    }
    function wb(a, b, c) {
      if (25 <= O) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === H) if (L = true, a = { action: c, next: null }, null === N && (N = /* @__PURE__ */ new Map()), c = N.get(b), void 0 === c) N.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function yb() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Q() {
    }
    var zb = { readContext: function(a) {
      return a._currentValue2;
    }, useContext: function(a) {
      P();
      return a._currentValue2;
    }, useMemo: xb, useReducer: vb, useRef: function(a) {
      H = P();
      J = sb();
      var b = J.memoizedState;
      return null === b ? (a = { current: a }, J.memoizedState = a) : b;
    }, useState: function(a) {
      return vb(ub, a);
    }, useInsertionEffect: Q, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return xb(function() {
        return a;
      }, b);
    }, useImperativeHandle: Q, useEffect: Q, useDebugValue: Q, useDeferredValue: function(a) {
      P();
      return a;
    }, useTransition: function() {
      P();
      return [false, yb];
    }, useId: function() {
      var a = ob.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - G(a) - 1)).toString(32) + b;
      var c = R;
      if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b = M++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      P();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c();
    } };
    var R = null;
    var Ab = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Bb(a) {
      console.error(a);
      return null;
    }
    function S() {
    }
    function Cb(a, b, c, d, f, e, g, h, k) {
      var m = [], l = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: l, pingedTasks: m, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? Bb : f, onAllReady: void 0 === e ? S : e, onShellReady: void 0 === g ? S : g, onShellError: void 0 === h ? S : h, onFatalError: void 0 === k ? S : k };
      c = T(b, 0, null, c, false, false);
      c.parentFlushed = true;
      a = Db(b, a, null, c, l, $a, null, hb);
      m.push(a);
      return b;
    }
    function Db(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var k = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(k);
        1 === b2.length && Eb(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(k);
      return k;
    }
    function T(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function U(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function V(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Fb(a, b, c, d, f) {
      H = {};
      ob = b;
      M = 0;
      for (a = c(d, f); L; ) L = false, M = 0, O += 1, J = null, a = c(d, f);
      tb();
      return a;
    }
    function Gb(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error((Za(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
          d = A({}, g, c);
        }
        b.legacyContext = d;
        W(a, b, f);
        b.legacyContext = g;
      } else W(a, b, f);
    }
    function Hb(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Ib(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = ab(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue2 : f);
        gb(e, c, d, f);
        Gb(a, b, e, c);
      } else {
        e = ab(c, b.legacyContext);
        f = Fb(a, b, c, d, e);
        var g = 0 !== M;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) gb(f, c, d, e), Gb(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = ib(d, 1, 0);
          try {
            W(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else W(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = za(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = sa(g, c, d);
        Jb(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push("</", c, ">");
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case Wa:
          case Va:
          case La:
          case Ma:
          case Ka:
            W(a, b, d.children);
            return;
          case Ra:
            W(a, b, d.children);
            return;
          case Ua:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Qa:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k = T(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(k);
              f.lastPushedText = false;
              var m = T(a, 0, null, f.formatContext, false, false);
              m.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = m;
              try {
                if (Jb(a, b, d), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("<!-- -->"), m.status = 1, X(h, m), 0 === h.pendingTasks) break a;
              } catch (l) {
                m.status = 4, h.forceClientRender = true, h.errorDigest = U(a, l);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Db(a, e, c, k, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Pa:
            d = Fb(a, b, c.render, d, f);
            if (0 !== M) {
              c = b.treeContext;
              b.treeContext = ib(c, 1, 0);
              try {
                W(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else W(a, b, d);
            return;
          case Sa:
            c = c.type;
            d = Hb(c, d);
            Ib(a, b, c, d, f);
            return;
          case Na:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue2;
            c._currentValue2 = d;
            g = D;
            D = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            W(a, b, f);
            a = D;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue2 = d === Xa ? a.context._defaultValue : d;
            a = D = a.parent;
            b.context = a;
            return;
          case Oa:
            d = d.children;
            d = d(c._currentValue2);
            W(a, b, d);
            return;
          case Ta:
            f = c._init;
            c = f(c._payload);
            d = Hb(c, d);
            Ib(a, b, c, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
      }
    }
    function W(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Ia:
            Ib(a, b, c.type, c.props, c.ref);
            return;
          case Ja:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ta:
            var d = c._init;
            c = d(c._payload);
            W(a, b, c);
            return;
        }
        if (ra(c)) {
          Kb(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = Ya && c[Ya] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            Kb(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Ha(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Ha(
        b.blockedSegment.chunks,
        "" + c,
        a.responseState,
        d.lastPushedText
      ));
    }
    function Kb(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = ib(e, d, f);
        try {
          Jb(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Jb(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return W(a, b, c);
      } catch (k) {
        if (tb(), "object" === typeof k && null !== k && "function" === typeof k.then) {
          c = k;
          var g = b.blockedSegment, h = T(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Db(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          F(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, F(e), k;
      }
    }
    function Lb(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Mb(this, b, a);
    }
    function Nb(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return Nb(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
    }
    function X(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && X(a, c);
      } else a.completedSegments.push(b);
    }
    function Mb(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = S, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && X(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Lb, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (X(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Eb(a) {
      if (2 !== a.status) {
        var b = D, c = Ab.current;
        Ab.current = zb;
        var d = R;
        R = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, k = g.blockedSegment;
            if (0 === k.status) {
              F(g.context);
              try {
                W(h, g, g.node), h.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("<!-- -->"), g.abortSet.delete(g), k.status = 1, Mb(h, g.blockedBoundary, k);
              } catch (y) {
                if (tb(), "object" === typeof y && null !== y && "function" === typeof y.then) {
                  var m = g.ping;
                  y.then(m, m);
                } else {
                  g.abortSet.delete(g);
                  k.status = 4;
                  var l = g.blockedBoundary, p = y, B = U(h, p);
                  null === l ? V(h, p) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = true, l.errorDigest = B, l.parentFlushed && h.clientRenderedBoundaries.push(l)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var C = h.onAllReady;
                    C();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && Ob(a, a.destination);
        } catch (y) {
          U(a, y), V(a, y);
        } finally {
          R = d, Ab.current = c, c === zb && F(b);
        }
      }
    }
    function Y(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          b.push('<template id="');
          b.push(a.placeholderPrefix);
          a = d.toString(16);
          b.push(a);
          return b.push('"></template>');
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) b.push(d[e]);
            f = Z(a, b, f);
          }
          for (; e < d.length - 1; e++) b.push(d[e]);
          e < d.length && (f = b.push(d[e]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Z(a, b, c) {
      var d = c.boundary;
      if (null === d) return Y(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("<!--$!-->"), b.push("<template"), d && (b.push(' data-dgst="'), d = u(d), b.push(d), b.push('"')), b.push("></template>")), Y(a, b, c), a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->"), a;
      if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = f.boundaryPrefix + e.toString(16);
        d = d.id = f;
        Aa(b, a.responseState, d);
        Y(a, b, c);
        return b.push("<!--/$-->");
      }
      if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Aa(b, a.responseState, d.id), Y(a, b, c), b.push("<!--/$-->");
      a.responseState.generateStaticMarkup || b.push("<!--$-->");
      c = d.completedSegments;
      if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      Z(a, b, c[0]);
      a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->");
      return a;
    }
    function Pb(a, b, c) {
      Ba(b, a.responseState, c.formatContext, c.id);
      Z(a, b, c);
      return Ca(b, c.formatContext);
    }
    function Qb(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) Rb(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      b.push(a.startInlineScript);
      a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c = c.toString(16);
      b.push(d);
      b.push('","');
      b.push(a.segmentPrefix);
      b.push(c);
      return b.push('")</script>');
    }
    function Rb(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Pb(a, b, d);
      }
      Pb(a, b, d);
      a = a.responseState;
      b.push(a.startInlineScript);
      a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = true, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      b.push(a.segmentPrefix);
      f = f.toString(16);
      b.push(f);
      b.push('","');
      b.push(a.placeholderPrefix);
      b.push(f);
      return b.push('")</script>');
    }
    function Ob(a, b) {
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          Z(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) b.push(d[c]);
          c < d.length && b.push(d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, k = g.id, m = g.errorDigest, l = g.errorMessage, p = g.errorComponentStack;
          d.push(h.startInlineScript);
          h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
          if (null === k) throw Error("An ID must have been assigned before we can complete the boundary.");
          d.push(k);
          d.push('"');
          if (m || l || p) {
            d.push(",");
            var B = Ea(m || "");
            d.push(B);
          }
          if (l || p) {
            d.push(",");
            var C = Ea(l || "");
            d.push(C);
          }
          if (p) {
            d.push(",");
            var y = Ea(p);
            d.push(y);
          }
          if (!d.push(")</script>")) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var aa = a.completedBoundaries;
        for (e = 0; e < aa.length; e++) if (!Qb(a, b, aa[e])) {
          a.destination = null;
          e++;
          aa.splice(0, e);
          return;
        }
        aa.splice(0, e);
        var ba = a.partialBoundaries;
        for (e = 0; e < ba.length; e++) {
          var pb = ba[e];
          a: {
            f = a;
            g = b;
            var ca = pb.completedSegments;
            for (h = 0; h < ca.length; h++) if (!Rb(f, g, pb, ca[h])) {
              h++;
              ca.splice(0, h);
              var qb = false;
              break a;
            }
            ca.splice(0, h);
            qb = true;
          }
          if (!qb) {
            a.destination = null;
            e++;
            ba.splice(0, e);
            return;
          }
        }
        ba.splice(0, e);
        var da = a.completedBoundaries;
        for (e = 0; e < da.length; e++) if (!Qb(a, b, da[e])) {
          a.destination = null;
          e++;
          da.splice(0, e);
          return;
        }
        da.splice(0, e);
      } finally {
        0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.push(null);
      }
    }
    function Sb(a, b) {
      if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b;
        try {
          Ob(a, b);
        } catch (c) {
          U(a, c), V(a, c);
        }
      }
    }
    function Tb(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return Nb(c2, a, b);
        });
        c.clear();
        null !== a.destination && Ob(a, a.destination);
      } catch (d) {
        U(a, d), V(a, d);
      }
    }
    function Ub() {
    }
    function Vb(a, b, c, d) {
      var f = false, e = null, g = "", h = false;
      a = Cb(a, Fa(c, b ? b.identifierPrefix : void 0), Ga(), Infinity, Ub, void 0, function() {
        h = true;
      }, void 0, void 0);
      Eb(a);
      Tb(a, d);
      Sb(a, { push: function(a2) {
        null !== a2 && (g += a2);
        return true;
      }, destroy: function(a2) {
        f = true;
        e = a2;
      } });
      if (f) throw e;
      if (!h) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return g;
    }
    function Wb(a, b) {
      a.prototype = Object.create(b.prototype);
      a.prototype.constructor = a;
      a.__proto__ = b;
    }
    var Xb = function(a) {
      function b() {
        var b2 = a.call(this, {}) || this;
        b2.request = null;
        b2.startedFlowing = false;
        return b2;
      }
      Wb(b, a);
      var c = b.prototype;
      c._destroy = function(a2, b2) {
        Tb(this.request);
        b2(a2);
      };
      c._read = function() {
        this.startedFlowing && Sb(this.request, this);
      };
      return b;
    }(fa.Readable);
    function Yb() {
    }
    function Zb(a, b) {
      var c = new Xb(), d = Cb(a, Fa(false, b ? b.identifierPrefix : void 0), Ga(), Infinity, Yb, function() {
        c.startedFlowing = true;
        Sb(d, c);
      }, void 0, void 0);
      c.request = d;
      Eb(d);
      return c;
    }
    exports.renderToNodeStream = function(a, b) {
      return Zb(a, b);
    };
    exports.renderToStaticMarkup = function(a, b) {
      return Vb(a, b, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports.renderToStaticNodeStream = function(a, b) {
      return Zb(a, b);
    };
    exports.renderToString = function(a, b) {
      return Vb(a, b, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports.version = "18.3.1";
  }
});

// node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.node.production.min.js
var require_react_dom_server_node_production_min = __commonJS({
  "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.node.production.min.js"(exports) {
    "use strict";
    var aa = __require("util");
    var ba = require_react();
    var k = null;
    var l = 0;
    var q = true;
    function r(a, b) {
      if ("string" === typeof b) {
        if (0 !== b.length) if (2048 < 3 * b.length) 0 < l && (t(a, k.subarray(0, l)), k = new Uint8Array(2048), l = 0), t(a, u.encode(b));
        else {
          var c = k;
          0 < l && (c = k.subarray(l));
          c = u.encodeInto(b, c);
          var d = c.read;
          l += c.written;
          d < b.length && (t(a, k), k = new Uint8Array(2048), l = u.encodeInto(b.slice(d), k).written);
          2048 === l && (t(a, k), k = new Uint8Array(2048), l = 0);
        }
      } else 0 !== b.byteLength && (2048 < b.byteLength ? (0 < l && (t(a, k.subarray(0, l)), k = new Uint8Array(2048), l = 0), t(a, b)) : (c = k.length - l, c < b.byteLength && (0 === c ? t(
        a,
        k
      ) : (k.set(b.subarray(0, c), l), l += c, t(a, k), b = b.subarray(c)), k = new Uint8Array(2048), l = 0), k.set(b, l), l += b.byteLength, 2048 === l && (t(a, k), k = new Uint8Array(2048), l = 0)));
    }
    function t(a, b) {
      a = a.write(b);
      q = q && a;
    }
    function w(a, b) {
      r(a, b);
      return q;
    }
    function ca(a) {
      k && 0 < l && a.write(k.subarray(0, l));
      k = null;
      l = 0;
      q = true;
    }
    var u = new aa.TextEncoder();
    function x(a) {
      return u.encode(a);
    }
    var y = Object.prototype.hasOwnProperty;
    var da = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ea = {};
    var fa = {};
    function ha(a) {
      if (y.call(fa, a)) return true;
      if (y.call(ea, a)) return false;
      if (da.test(a)) return fa[a] = true;
      ea[a] = true;
      return false;
    }
    function z(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var A = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      A[a] = new z(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      A[b] = new z(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      A[a] = new z(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      A[a] = new z(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      A[a] = new z(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      A[a] = new z(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      A[a] = new z(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      A[a] = new z(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      A[a] = new z(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ia = /[\-:]([a-z])/g;
    function ja(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ia,
        ja
      );
      A[b] = new z(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ia, ja);
      A[b] = new z(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ia, ja);
      A[b] = new z(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      A[a] = new z(a, 1, false, a.toLowerCase(), null, false, false);
    });
    A.xlinkHref = new z("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      A[a] = new z(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var B = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var ka = ["Webkit", "ms", "Moz", "O"];
    Object.keys(B).forEach(function(a) {
      ka.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        B[b] = B[a];
      });
    });
    var la = /["'&<>]/;
    function F(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = la.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var ma = /([A-Z])/g;
    var pa = /^ms-/;
    var qa = Array.isArray;
    var ra = x("<script>");
    var sa = x("</script>");
    var ta = x('<script src="');
    var ua = x('<script type="module" src="');
    var va = x('" async=""></script>');
    var wa = /(<\/|<)(s)(cript)/gi;
    function xa(a, b, c, d) {
      return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
    }
    function G(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function ya(a, b, c) {
      switch (b) {
        case "select":
          return G(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return G(2, null);
        case "math":
          return G(3, null);
        case "foreignObject":
          return G(1, null);
        case "table":
          return G(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return G(5, null);
        case "colgroup":
          return G(7, null);
        case "tr":
          return G(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? G(1, null) : a;
    }
    var za = x("<!-- -->");
    function Aa(a, b, c, d) {
      if ("" === b) return d;
      d && a.push(za);
      a.push(F(b));
      return true;
    }
    var Ba = /* @__PURE__ */ new Map();
    var Ca = x(' style="');
    var Da = x(":");
    var Ea = x(";");
    function Fa(a, b, c) {
      if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b = true;
      for (var d in c) if (y.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = F(d);
            f = F(("" + f).trim());
          } else {
            e = d;
            var g = Ba.get(e);
            void 0 !== g ? e = g : (g = x(F(e.replace(ma, "-$1").toLowerCase().replace(pa, "-ms-"))), Ba.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || y.call(
              B,
              d
            ) ? "" + f : f + "px" : F(("" + f).trim());
          }
          b ? (b = false, a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
        }
      }
      b || a.push(H);
    }
    var I = x(" ");
    var J = x('="');
    var H = x('"');
    var Ga = x('=""');
    function K(a, b, c, d) {
      switch (c) {
        case "style":
          Fa(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = A.hasOwnProperty(c) ? A[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(I, c, Ga);
              break;
            case 4:
              true === d ? a.push(I, c, Ga) : false !== d && a.push(I, c, J, F(d), H);
              break;
            case 5:
              isNaN(d) || a.push(I, c, J, F(d), H);
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(I, c, J, F(d), H);
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(I, c, J, F(d), H);
          }
        } else if (ha(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(I, c, J, F(d), H);
        }
      }
    }
    var L = x(">");
    var Ha = x("/>");
    function M(a, b, c) {
      if (null != b) {
        if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function Ia(a) {
      var b = "";
      ba.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    var Ja = x(' selected=""');
    function Ka(a, b, c, d) {
      a.push(N(c));
      var f = c = null, e;
      for (e in b) if (y.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            K(a, d, e, g);
        }
      }
      a.push(L);
      M(a, f, c);
      return "string" === typeof c ? (a.push(F(c)), null) : c;
    }
    var La = x("\n");
    var Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Na = /* @__PURE__ */ new Map();
    function N(a) {
      var b = Na.get(a);
      if (void 0 === b) {
        if (!Ma.test(a)) throw Error("Invalid tag: " + a);
        b = x("<" + a);
        Na.set(a, b);
      }
      return b;
    }
    var Oa = x("<!DOCTYPE html>");
    function Pa(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(N("select"));
          var e = null, g = null;
          for (p in c) if (y.call(c, p)) {
            var h = c[p];
            if (null != h) switch (p) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                K(a, d, p, h);
            }
          }
          a.push(L);
          M(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(N("option"));
          var m = h = null, n = null;
          var p = null;
          for (e in c) if (y.call(c, e)) {
            var v = c[e];
            if (null != v) switch (e) {
              case "children":
                h = v;
                break;
              case "selected":
                n = v;
                break;
              case "dangerouslySetInnerHTML":
                p = v;
                break;
              case "value":
                m = v;
              default:
                K(a, d, e, v);
            }
          }
          if (null != g) if (c = null !== m ? "" + m : Ia(h), qa(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(Ja);
              break;
            }
          }
          else "" + g === c && a.push(Ja);
          else n && a.push(Ja);
          a.push(L);
          M(a, p, h);
          return h;
        case "textarea":
          a.push(N("textarea"));
          p = g = e = null;
          for (h in c) if (y.call(c, h) && (m = c[h], null != m)) switch (h) {
            case "children":
              p = m;
              break;
            case "value":
              e = m;
              break;
            case "defaultValue":
              g = m;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              K(a, d, h, m);
          }
          null === e && null !== g && (e = g);
          a.push(L);
          if (null != p) {
            if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (qa(p) && 1 < p.length) throw Error("<textarea> can only have at most one child.");
            e = "" + p;
          }
          "string" === typeof e && "\n" === e[0] && a.push(La);
          null !== e && a.push(F("" + e));
          return null;
        case "input":
          a.push(N("input"));
          m = p = h = e = null;
          for (g in c) if (y.call(c, g) && (n = c[g], null != n)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              m = n;
              break;
            case "defaultValue":
              h = n;
              break;
            case "checked":
              p = n;
              break;
            case "value":
              e = n;
              break;
            default:
              K(a, d, g, n);
          }
          null !== p ? K(a, d, "checked", p) : null !== m && K(a, d, "checked", m);
          null !== e ? K(a, d, "value", e) : null !== h && K(a, d, "value", h);
          a.push(Ha);
          return null;
        case "menuitem":
          a.push(N("menuitem"));
          for (var C in c) if (y.call(c, C) && (e = c[C], null != e)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              K(a, d, C, e);
          }
          a.push(L);
          return null;
        case "title":
          a.push(N("title"));
          e = null;
          for (v in c) if (y.call(c, v) && (g = c[v], null != g)) switch (v) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              K(a, d, v, g);
          }
          a.push(L);
          return e;
        case "listing":
        case "pre":
          a.push(N(b));
          g = e = null;
          for (m in c) if (y.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              K(a, d, m, h);
          }
          a.push(L);
          if (null != g) {
            if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push(La, c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push(La);
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(N(b));
          for (var D in c) if (y.call(c, D) && (e = c[D], null != e)) switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              K(a, d, D, e);
          }
          a.push(Ha);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ka(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push(Oa), Ka(
            a,
            c,
            b,
            d
          );
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return Ka(a, c, b, d);
          a.push(N(b));
          g = e = null;
          for (n in c) if (y.call(c, n) && (h = c[n], null != h)) switch (n) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              Fa(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ha(n) && "function" !== typeof h && "symbol" !== typeof h && a.push(I, n, J, F(h), H);
          }
          a.push(L);
          M(a, g, e);
          return e;
      }
    }
    var Qa = x("</");
    var Ra = x(">");
    var Sa = x('<template id="');
    var Ta = x('"></template>');
    var Ua = x("<!--$-->");
    var Va = x('<!--$?--><template id="');
    var Wa = x('"></template>');
    var Xa = x("<!--$!-->");
    var Ya = x("<!--/$-->");
    var Za = x("<template");
    var $a = x('"');
    var ab = x(' data-dgst="');
    x(' data-msg="');
    x(' data-stck="');
    var bb = x("></template>");
    function cb(a, b, c) {
      r(a, Va);
      if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
      r(a, c);
      return w(a, Wa);
    }
    var db = x('<div hidden id="');
    var eb = x('">');
    var fb = x("</div>");
    var gb = x('<svg aria-hidden="true" style="display:none" id="');
    var hb = x('">');
    var ib = x("</svg>");
    var jb = x('<math aria-hidden="true" style="display:none" id="');
    var kb = x('">');
    var lb = x("</math>");
    var mb = x('<table hidden id="');
    var nb = x('">');
    var ob = x("</table>");
    var pb = x('<table hidden><tbody id="');
    var qb = x('">');
    var rb = x("</tbody></table>");
    var sb = x('<table hidden><tr id="');
    var tb = x('">');
    var ub = x("</tr></table>");
    var vb = x('<table hidden><colgroup id="');
    var wb = x('">');
    var xb = x("</colgroup></table>");
    function yb(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return r(a, db), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, eb);
        case 2:
          return r(a, gb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, hb);
        case 3:
          return r(a, jb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, kb);
        case 4:
          return r(a, mb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, nb);
        case 5:
          return r(a, pb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, qb);
        case 6:
          return r(a, sb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, tb);
        case 7:
          return r(a, vb), r(
            a,
            b.segmentPrefix
          ), r(a, d.toString(16)), w(a, wb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function zb(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return w(a, fb);
        case 2:
          return w(a, ib);
        case 3:
          return w(a, lb);
        case 4:
          return w(a, ob);
        case 5:
          return w(a, rb);
        case 6:
          return w(a, ub);
        case 7:
          return w(a, xb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ab = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var Bb = x('$RS("');
    var Cb = x('","');
    var Db = x('")</script>');
    var Fb = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Gb = x('$RC("');
    var Hb = x('","');
    var Ib = x('")</script>');
    var Jb = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("');
    var Kb = x('$RX("');
    var Lb = x('"');
    var Mb = x(")</script>");
    var Nb = x(",");
    var Ob = /[<\u2028\u2029]/g;
    function Pb(a) {
      return JSON.stringify(a).replace(Ob, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var O = Object.assign;
    var Qb = Symbol.for("react.element");
    var Rb = Symbol.for("react.portal");
    var Sb = Symbol.for("react.fragment");
    var Tb = Symbol.for("react.strict_mode");
    var Ub = Symbol.for("react.profiler");
    var Vb = Symbol.for("react.provider");
    var Wb = Symbol.for("react.context");
    var Xb = Symbol.for("react.forward_ref");
    var Yb = Symbol.for("react.suspense");
    var Zb = Symbol.for("react.suspense_list");
    var $b = Symbol.for("react.memo");
    var ac = Symbol.for("react.lazy");
    var bc = Symbol.for("react.scope");
    var cc = Symbol.for("react.debug_trace_mode");
    var dc = Symbol.for("react.legacy_hidden");
    var ec = Symbol.for("react.default_value");
    var fc = Symbol.iterator;
    function gc(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Sb:
          return "Fragment";
        case Rb:
          return "Portal";
        case Ub:
          return "Profiler";
        case Tb:
          return "StrictMode";
        case Yb:
          return "Suspense";
        case Zb:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Wb:
          return (a.displayName || "Context") + ".Consumer";
        case Vb:
          return (a._context.displayName || "Context") + ".Provider";
        case Xb:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case $b:
          return b = a.displayName || null, null !== b ? b : gc(a.type) || "Memo";
        case ac:
          b = a._payload;
          a = a._init;
          try {
            return gc(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var hc = {};
    function ic(a, b) {
      a = a.contextTypes;
      if (!a) return hc;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var P = null;
    function Q(a, b) {
      if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          Q(a, c);
        }
        b.context._currentValue = b.value;
      }
    }
    function jc(a) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      null !== a && jc(a);
    }
    function kc(a) {
      var b = a.parent;
      null !== b && kc(b);
      a.context._currentValue = a.value;
    }
    function lc(a, b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b.depth ? Q(a, b) : lc(a, b);
    }
    function mc(a, b) {
      var c = b.parent;
      if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c.depth ? Q(a, c) : mc(a, c);
      b.context._currentValue = b.value;
    }
    function nc(a) {
      var b = P;
      b !== a && (null === b ? kc(a) : null === a ? jc(b) : b.depth === a.depth ? Q(b, a) : b.depth > a.depth ? lc(b, a) : mc(b, a), P = a);
    }
    var oc = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function pc42(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = oc;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : O({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && oc.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = O({}, e, h)) : O(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var qc = { id: 1, overflow: "" };
    function rc(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - sc(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - sc(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - sc(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var sc = Math.clz32 ? Math.clz32 : tc;
    var uc = Math.log;
    var vc = Math.LN2;
    function tc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
    }
    function wc(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var xc = "function" === typeof Object.is ? Object.is : wc;
    var R = null;
    var yc = null;
    var zc = null;
    var S = null;
    var T = false;
    var Ac = false;
    var U = 0;
    var V = null;
    var Bc = 0;
    function W() {
      if (null === R) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return R;
    }
    function Cc() {
      if (0 < Bc) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function Dc() {
      null === S ? null === zc ? (T = false, zc = S = Cc()) : (T = true, S = zc) : null === S.next ? (T = false, S = S.next = Cc()) : (T = true, S = S.next);
      return S;
    }
    function Ec() {
      yc = R = null;
      Ac = false;
      zc = null;
      Bc = 0;
      S = V = null;
    }
    function Fc(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Gc(a, b, c) {
      R = W();
      S = Dc();
      if (T) {
        var d = S.queue;
        b = d.dispatch;
        if (null !== V && (c = V.get(d), void 0 !== c)) {
          V.delete(d);
          d = S.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          S.memoizedState = d;
          return [d, b];
        }
        return [S.memoizedState, b];
      }
      a = a === Fc ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      S.memoizedState = a;
      a = S.queue = { last: null, dispatch: null };
      a = a.dispatch = Hc.bind(null, R, a);
      return [S.memoizedState, a];
    }
    function Ic(a, b) {
      R = W();
      S = Dc();
      b = void 0 === b ? null : b;
      if (null !== S) {
        var c = S.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!xc(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      S.memoizedState = [a, b];
      return a;
    }
    function Hc(a, b, c) {
      if (25 <= Bc) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === R) if (Ac = true, a = { action: c, next: null }, null === V && (V = /* @__PURE__ */ new Map()), c = V.get(b), void 0 === c) V.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function Jc() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Kc() {
    }
    var Mc = { readContext: function(a) {
      return a._currentValue;
    }, useContext: function(a) {
      W();
      return a._currentValue;
    }, useMemo: Ic, useReducer: Gc, useRef: function(a) {
      R = W();
      S = Dc();
      var b = S.memoizedState;
      return null === b ? (a = { current: a }, S.memoizedState = a) : b;
    }, useState: function(a) {
      return Gc(Fc, a);
    }, useInsertionEffect: Kc, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return Ic(function() {
        return a;
      }, b);
    }, useImperativeHandle: Kc, useEffect: Kc, useDebugValue: Kc, useDeferredValue: function(a) {
      W();
      return a;
    }, useTransition: function() {
      W();
      return [false, Jc];
    }, useId: function() {
      var a = yc.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - sc(a) - 1)).toString(32) + b;
      var c = Lc;
      if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b = U++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      W();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c();
    } };
    var Lc = null;
    var Nc = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Oc(a) {
      console.error(a);
      return null;
    }
    function X() {
    }
    function Pc(a, b) {
      var c = a.pingedTasks;
      c.push(b);
      1 === c.length && setImmediate(function() {
        return Qc(a);
      });
    }
    function Rc(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var m = { node: b, ping: function() {
        return Pc(a, m);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(m);
      return m;
    }
    function Sc(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function Y(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function Tc(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Uc(a, b, c, d, f) {
      R = {};
      yc = b;
      U = 0;
      for (a = c(d, f); Ac; ) Ac = false, U = 0, Bc += 1, S = null, a = c(d, f);
      Ec();
      return a;
    }
    function Vc(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error((gc(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
          d = O({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, f);
        b.legacyContext = g;
      } else Z(a, b, f);
    }
    function Wc(a, b) {
      if (a && a.defaultProps) {
        b = O({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Xc(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = ic(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue : f);
        pc42(e, c, d, f);
        Vc(a, b, e, c);
      } else {
        e = ic(c, b.legacyContext);
        f = Uc(a, b, c, d, e);
        var g = 0 !== U;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) pc42(f, c, d, e), Vc(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = rc(d, 1, 0);
          try {
            Z(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else Z(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = Pa(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = ya(g, c, d);
        Yc(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push(Qa, c, Ra);
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case dc:
          case cc:
          case Tb:
          case Ub:
          case Sb:
            Z(a, b, d.children);
            return;
          case Zb:
            Z(
              a,
              b,
              d.children
            );
            return;
          case bc:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Yb:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m = Sc(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(m);
              f.lastPushedText = false;
              var n = Sc(a, 0, null, f.formatContext, false, false);
              n.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = n;
              try {
                if (Yc(a, b, d), n.lastPushedText && n.textEmbedded && n.chunks.push(za), n.status = 1, Zc(h, n), 0 === h.pendingTasks) break a;
              } catch (p) {
                n.status = 4, h.forceClientRender = true, h.errorDigest = Y(a, p);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Rc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Xb:
            d = Uc(a, b, c.render, d, f);
            if (0 !== U) {
              c = b.treeContext;
              b.treeContext = rc(c, 1, 0);
              try {
                Z(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else Z(
              a,
              b,
              d
            );
            return;
          case $b:
            c = c.type;
            d = Wc(c, d);
            Xc(a, b, c, d, f);
            return;
          case Vb:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue;
            c._currentValue = d;
            g = P;
            P = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            Z(a, b, f);
            a = P;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue = d === ec ? a.context._defaultValue : d;
            a = P = a.parent;
            b.context = a;
            return;
          case Wb:
            d = d.children;
            d = d(c._currentValue);
            Z(a, b, d);
            return;
          case ac:
            f = c._init;
            c = f(c._payload);
            d = Wc(c, d);
            Xc(a, b, c, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
      }
    }
    function Z(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Qb:
            Xc(a, b, c.type, c.props, c.ref);
            return;
          case Rb:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ac:
            var d = c._init;
            c = d(c._payload);
            Z(a, b, c);
            return;
        }
        if (qa(c)) {
          $c(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = fc && c[fc] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            $c(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Aa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Aa(
        b.blockedSegment.chunks,
        "" + c,
        a.responseState,
        d.lastPushedText
      ));
    }
    function $c(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = rc(e, d, f);
        try {
          Yc(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Yc(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return Z(a, b, c);
      } catch (m) {
        if (Ec(), "object" === typeof m && null !== m && "function" === typeof m.then) {
          c = m;
          var g = b.blockedSegment, h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Rc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          nc(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, nc(e), m;
      }
    }
    function ad(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      bd(this, b, a);
    }
    function cd(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.end())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return cd(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
    }
    function Zc(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && Zc(a, c);
      } else a.completedSegments.push(b);
    }
    function bd(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = X, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && Zc(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(ad, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (Zc(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Qc(a) {
      if (2 !== a.status) {
        var b = P, c = Nc.current;
        Nc.current = Mc;
        var d = Lc;
        Lc = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, m = g.blockedSegment;
            if (0 === m.status) {
              nc(g.context);
              try {
                Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(za), g.abortSet.delete(g), m.status = 1, bd(h, g.blockedBoundary, m);
              } catch (E) {
                if (Ec(), "object" === typeof E && null !== E && "function" === typeof E.then) {
                  var n = g.ping;
                  E.then(n, n);
                } else {
                  g.abortSet.delete(g);
                  m.status = 4;
                  var p = g.blockedBoundary, v = E, C = Y(h, v);
                  null === p ? Tc(h, v) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = true, p.errorDigest = C, p.parentFlushed && h.clientRenderedBoundaries.push(p)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var D = h.onAllReady;
                    D();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && dd(a, a.destination);
        } catch (E) {
          Y(a, E), Tc(a, E);
        } finally {
          Lc = d, Nc.current = c, c === Mc && nc(b);
        }
      }
    }
    function ed(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          r(b, Sa);
          r(b, a.placeholderPrefix);
          a = d.toString(16);
          r(b, a);
          return w(b, Ta);
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) r(b, d[e]);
            f = fd(a, b, f);
          }
          for (; e < d.length - 1; e++) r(b, d[e]);
          e < d.length && (f = w(b, d[e]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function fd(a, b, c) {
      var d = c.boundary;
      if (null === d) return ed(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) d = d.errorDigest, w(b, Xa), r(b, Za), d && (r(b, ab), r(b, F(d)), r(b, $a)), w(b, bb), ed(a, b, c);
      else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = x(f.boundaryPrefix + e.toString(16));
        d = d.id = f;
        cb(b, a.responseState, d);
        ed(a, b, c);
      } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), cb(b, a.responseState, d.id), ed(a, b, c);
      else {
        w(b, Ua);
        c = d.completedSegments;
        if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        fd(a, b, c[0]);
      }
      return w(b, Ya);
    }
    function gd(a, b, c) {
      yb(b, a.responseState, c.formatContext, c.id);
      fd(a, b, c);
      return zb(b, c.formatContext);
    }
    function hd(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) id(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      r(b, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? r(b, Gb) : (a.sentCompleteBoundaryFunction = true, r(b, Fb));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c = c.toString(16);
      r(b, d);
      r(b, Hb);
      r(b, a.segmentPrefix);
      r(b, c);
      return w(b, Ib);
    }
    function id(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return gd(a, b, d);
      }
      gd(a, b, d);
      a = a.responseState;
      r(b, a.startInlineScript);
      a.sentCompleteSegmentFunction ? r(b, Bb) : (a.sentCompleteSegmentFunction = true, r(b, Ab));
      r(b, a.segmentPrefix);
      f = f.toString(16);
      r(b, f);
      r(b, Cb);
      r(b, a.placeholderPrefix);
      r(b, f);
      return w(b, Db);
    }
    function dd(a, b) {
      k = new Uint8Array(2048);
      l = 0;
      q = true;
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          fd(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) r(b, d[c]);
          c < d.length && w(b, d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, m = g.id, n = g.errorDigest, p = g.errorMessage, v = g.errorComponentStack;
          r(d, h.startInlineScript);
          h.sentClientRenderFunction ? r(d, Kb) : (h.sentClientRenderFunction = true, r(d, Jb));
          if (null === m) throw Error("An ID must have been assigned before we can complete the boundary.");
          r(d, m);
          r(d, Lb);
          if (n || p || v) r(d, Nb), r(d, Pb(n || ""));
          if (p || v) r(d, Nb), r(d, Pb(p || ""));
          v && (r(d, Nb), r(d, Pb(v)));
          if (!w(d, Mb)) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var C = a.completedBoundaries;
        for (e = 0; e < C.length; e++) if (!hd(a, b, C[e])) {
          a.destination = null;
          e++;
          C.splice(0, e);
          return;
        }
        C.splice(0, e);
        ca(b);
        k = new Uint8Array(2048);
        l = 0;
        q = true;
        var D = a.partialBoundaries;
        for (e = 0; e < D.length; e++) {
          var E = D[e];
          a: {
            f = a;
            g = b;
            var na = E.completedSegments;
            for (h = 0; h < na.length; h++) if (!id(f, g, E, na[h])) {
              h++;
              na.splice(0, h);
              var Eb = false;
              break a;
            }
            na.splice(0, h);
            Eb = true;
          }
          if (!Eb) {
            a.destination = null;
            e++;
            D.splice(0, e);
            return;
          }
        }
        D.splice(0, e);
        var oa = a.completedBoundaries;
        for (e = 0; e < oa.length; e++) if (!hd(a, b, oa[e])) {
          a.destination = null;
          e++;
          oa.splice(0, e);
          return;
        }
        oa.splice(0, e);
      } finally {
        ca(b), "function" === typeof b.flush && b.flush(), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.end();
      }
    }
    function jd(a) {
      setImmediate(function() {
        return Qc(a);
      });
    }
    function kd(a, b) {
      if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b;
        try {
          dd(a, b);
        } catch (c) {
          Y(a, c), Tc(a, c);
        }
      }
    }
    function ld(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return cd(c2, a, b);
        });
        c.clear();
        null !== a.destination && dd(a, a.destination);
      } catch (d) {
        Y(a, d), Tc(a, d);
      }
    }
    function md(a, b) {
      return function() {
        return kd(b, a);
      };
    }
    function nd(a, b) {
      return function() {
        return ld(a, b);
      };
    }
    function od(a, b) {
      var c = b ? b.identifierPrefix : void 0, d = b ? b.nonce : void 0, f = b ? b.bootstrapScriptContent : void 0, e = b ? b.bootstrapScripts : void 0;
      var g = b ? b.bootstrapModules : void 0;
      c = void 0 === c ? "" : c;
      d = void 0 === d ? ra : x('<script nonce="' + F(d) + '">');
      var h = [];
      void 0 !== f && h.push(d, ("" + f).replace(wa, xa), sa);
      if (void 0 !== e) for (f = 0; f < e.length; f++) h.push(ta, F(e[f]), va);
      if (void 0 !== g) for (e = 0; e < g.length; e++) h.push(ua, F(g[e]), va);
      g = {
        bootstrapChunks: h,
        startInlineScript: d,
        placeholderPrefix: x(c + "P:"),
        segmentPrefix: x(c + "S:"),
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: false,
        sentCompleteBoundaryFunction: false,
        sentClientRenderFunction: false
      };
      e = b ? b.namespaceURI : void 0;
      e = G("http://www.w3.org/2000/svg" === e ? 2 : "http://www.w3.org/1998/Math/MathML" === e ? 3 : 0, null);
      f = b ? b.progressiveChunkSize : void 0;
      d = b ? b.onError : void 0;
      h = b ? b.onAllReady : void 0;
      var m = b ? b.onShellReady : void 0, n = b ? b.onShellError : void 0;
      b = [];
      c = /* @__PURE__ */ new Set();
      g = {
        destination: null,
        responseState: g,
        progressiveChunkSize: void 0 === f ? 12800 : f,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: c,
        pingedTasks: b,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: void 0 === d ? Oc : d,
        onAllReady: void 0 === h ? X : h,
        onShellReady: void 0 === m ? X : m,
        onShellError: void 0 === n ? X : n,
        onFatalError: X
      };
      e = Sc(g, 0, null, e, false, false);
      e.parentFlushed = true;
      a = Rc(g, a, null, e, c, hc, null, qc);
      b.push(a);
      return g;
    }
    exports.renderToPipeableStream = function(a, b) {
      var c = od(a, b), d = false;
      jd(c);
      return { pipe: function(a2) {
        if (d) throw Error("React currently only supports piping to one writable stream.");
        d = true;
        kd(c, a2);
        a2.on("drain", md(a2, c));
        a2.on("error", nd(c, Error("The destination stream errored while writing data.")));
        a2.on("close", nd(c, Error("The destination stream closed early.")));
        return a2;
      }, abort: function(a2) {
        ld(c, a2);
      } };
    };
    exports.version = "18.3.1";
  }
});

// node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/server.node.js
var require_server_node = __commonJS({
  "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/server.node.js"(exports) {
    "use strict";
    var l;
    var s;
    if (true) {
      l = require_react_dom_server_legacy_node_production_min();
      s = require_react_dom_server_node_production_min();
    } else {
      l = null;
      s = null;
    }
    exports.version = l.version;
    exports.renderToString = l.renderToString;
    exports.renderToStaticMarkup = l.renderToStaticMarkup;
    exports.renderToNodeStream = l.renderToNodeStream;
    exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports.renderToPipeableStream = s.renderToPipeableStream;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/createErrorWithCleanStackTrace.js
var require_createErrorWithCleanStackTrace2 = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/createErrorWithCleanStackTrace.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createErrorWithCleanStackTrace = void 0;
    function createErrorWithCleanStackTrace2(errorMessage, numberOfStackTraceLinesToRemove2) {
      const err = new Error(errorMessage);
      err.stack = clean2(err.stack, numberOfStackTraceLinesToRemove2);
      return err;
    }
    exports.createErrorWithCleanStackTrace = createErrorWithCleanStackTrace2;
    function clean2(errStack, numberOfStackTraceLinesToRemove2) {
      if (!errStack) {
        return errStack;
      }
      const stackLines = splitByLine2(errStack);
      let linesRemoved = 0;
      const stackLine__cleaned = stackLines.filter((line) => {
        if (line.includes(" (internal/") || line.includes(" (node:internal")) {
          return false;
        }
        if (linesRemoved < numberOfStackTraceLinesToRemove2 && isStackTraceLine2(line)) {
          linesRemoved++;
          return false;
        }
        return true;
      }).join("\n");
      return stackLine__cleaned;
    }
    function isStackTraceLine2(line) {
      return line.startsWith("    at ");
    }
    function splitByLine2(str) {
      return str.split(/\r?\n/);
    }
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/getGlobalObject.js
var require_getGlobalObject = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/getGlobalObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobalObject = void 0;
    function getGlobalObject3(key, defaultValue2) {
      const globalObjectsAll = globalThis[projectKey3] = globalThis[projectKey3] || {};
      const globalObject12 = globalObjectsAll[key] = globalObjectsAll[key] || defaultValue2;
      return globalObject12;
    }
    exports.getGlobalObject = getGlobalObject3;
    var projectKey3 = "_react_streaming";
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/PROJECT_VERSION.js
var require_PROJECT_VERSION2 = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/PROJECT_VERSION.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PROJECT_VERSION = void 0;
    exports.PROJECT_VERSION = "0.3.43";
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/projectInfo.js
var require_projectInfo2 = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/projectInfo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.projectInfo = void 0;
    var getGlobalObject_1 = require_getGlobalObject();
    var PROJECT_VERSION_1 = require_PROJECT_VERSION2();
    var projectInfo2 = {
      projectName: "react-streaming",
      projectVersion: PROJECT_VERSION_1.PROJECT_VERSION,
      npmPackageName: "react-streaming",
      githubRepository: "https://github.com/brillout/react-streaming"
    };
    exports.projectInfo = projectInfo2;
    var { versions } = (0, getGlobalObject_1.getGlobalObject)("projectInfo.ts", {
      versions: /* @__PURE__ */ new Set()
    });
    versions.add(projectInfo2.projectVersion);
    if (versions.size >= 2) {
      const versionsStr = Array.from(versions).map((v) => `${projectInfo2.projectName}@${v}`).join(" and ");
      throw new Error(`${versionsStr} are loaded but using different versions is forbidden`);
    }
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/assert.js
var require_assert2 = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getProjectError = exports.assertInfo = exports.assertWarning = exports.assertUsage = exports.assert = void 0;
    var createErrorWithCleanStackTrace_1 = require_createErrorWithCleanStackTrace2();
    var projectInfo_1 = require_projectInfo2();
    var errorPrefix = `[${projectInfo_1.projectInfo.npmPackageName}@${projectInfo_1.projectInfo.projectVersion}]`;
    var internalErrorPrefix = `${errorPrefix}[Bug]`;
    var usageErrorPrefix = `${errorPrefix}[Wrong Usage]`;
    var warningPrefix = `${errorPrefix}[Warning]`;
    var infoPrefix = `${errorPrefix}[Info]`;
    var numberOfStackTraceLinesToRemove2 = 2;
    function assert2(condition, debugInfo) {
      if (condition) {
        return;
      }
      const debugStr = (() => {
        if (!debugInfo) {
          return "";
        }
        const debugInfoSerialized = typeof debugInfo === "string" ? debugInfo : "`" + JSON.stringify(debugInfo) + "`";
        return `Debug info (this is for the ${projectInfo_1.projectInfo.projectName} maintainers; you can ignore this): ${debugInfoSerialized}.`;
      })();
      const internalError = (0, createErrorWithCleanStackTrace_1.createErrorWithCleanStackTrace)([
        `${internalErrorPrefix} You stumbled upon a bug in ${projectInfo_1.projectInfo.projectName}'s source code.`,
        `Reach out at ${projectInfo_1.projectInfo.githubRepository}/issues/new and include this error stack (the error stack is usually enough to fix the problem).`,
        "A maintainer will fix the bug (usually under 24 hours).",
        `Do not hesitate to reach out as it makes ${projectInfo_1.projectInfo.projectName} more robust.`,
        debugStr
      ].join(" "), numberOfStackTraceLinesToRemove2);
      throw internalError;
    }
    exports.assert = assert2;
    function assertUsage3(condition, errorMessage) {
      if (condition) {
        return;
      }
      const whiteSpace = errorMessage.startsWith("[") ? "" : " ";
      const usageError = (0, createErrorWithCleanStackTrace_1.createErrorWithCleanStackTrace)(`${usageErrorPrefix}${whiteSpace}${errorMessage}`, numberOfStackTraceLinesToRemove2);
      throw usageError;
    }
    exports.assertUsage = assertUsage3;
    function getProjectError2(errorMessage) {
      const pluginError = (0, createErrorWithCleanStackTrace_1.createErrorWithCleanStackTrace)(`${errorPrefix} ${errorMessage}`, numberOfStackTraceLinesToRemove2);
      return pluginError;
    }
    exports.getProjectError = getProjectError2;
    var alreadyLogged = /* @__PURE__ */ new Set();
    function assertWarning3(condition, errorMessage, { onlyOnce, showStackTrace }) {
      if (condition) {
        return;
      }
      const msg = `${warningPrefix} ${errorMessage}`;
      if (onlyOnce) {
        const key = onlyOnce === true ? msg : onlyOnce;
        if (alreadyLogged.has(key)) {
          return;
        } else {
          alreadyLogged.add(key);
        }
      }
      if (showStackTrace) {
        console.warn(new Error(msg));
      } else {
        console.warn(msg);
      }
    }
    exports.assertWarning = assertWarning3;
    function assertInfo2(condition, errorMessage, { onlyOnce }) {
      if (condition) {
        return;
      }
      const msg = `${infoPrefix} ${errorMessage}`;
      if (onlyOnce) {
        const key = msg;
        if (alreadyLogged.has(key)) {
          return;
        } else {
          alreadyLogged.add(key);
        }
      }
      console.log(msg);
    }
    exports.assertInfo = assertInfo2;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/isBrowser.js
var require_isBrowser = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/isBrowser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowser = void 0;
    function isBrowser2() {
      return typeof window !== "undefined" && typeof window.scrollY === "number";
    }
    exports.isBrowser = isBrowser2;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/useAsync/useSuspenseData.js
var require_useSuspenseData = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/useAsync/useSuspenseData.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SuspenseData = exports.useSuspenseData = void 0;
    var react_1 = __importStar(require_react());
    var ctxSuspenses = (0, react_1.createContext)(void 0);
    function SuspenseData({ children }) {
      const suspenses = {};
      return react_1.default.createElement(ctxSuspenses.Provider, { value: suspenses }, children);
    }
    exports.SuspenseData = SuspenseData;
    function useSuspenseData() {
      const suspenses = (0, react_1.useContext)(ctxSuspenses);
      return suspenses;
    }
    exports.useSuspenseData = useSuspenseData;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/isCallable.js
var require_isCallable2 = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/isCallable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isCallable = void 0;
    function isCallable3(thing) {
      return thing instanceof Function || typeof thing === "function";
    }
    exports.isCallable = isCallable3;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/objectAssign.js
var require_objectAssign = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/objectAssign.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectAssign = void 0;
    function objectAssign2(obj, objAddendum) {
      Object.assign(obj, objAddendum);
    }
    exports.objectAssign = objectAssign2;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/debug.js
var require_debug2 = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/debug.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isDebugEnabled = exports.createDebugger = void 0;
    var isBrowser_1 = require_isBrowser();
    var isCallable_1 = require_isCallable2();
    var objectAssign_1 = require_objectAssign();
    var assert_1 = require_assert2();
    (0, assert_1.assert)(!(0, isBrowser_1.isBrowser)(), "utils/debug.js loaded in browser");
    globalThis.__brillout_debug_createDebugger = createDebugger2;
    function createDebugger2(namespace, optionsGlobal) {
      const debugWithOptions = (options) => {
        return (msg, info) => {
          if (!isDebugEnabled(namespace))
            return;
          if (info !== void 0) {
            msg += strInfo(info, Object.assign(Object.assign({}, optionsGlobal), options));
          }
          console.log("\x1B[1m%s\x1B[0m", namespace, msg);
        };
      };
      const debug5 = (msg, info) => debugWithOptions({})(msg, info);
      (0, objectAssign_1.objectAssign)(debug5, { options: debugWithOptions, isEnabled: isDebugEnabled(namespace) });
      return debug5;
    }
    exports.createDebugger = createDebugger2;
    function isDebugEnabled(namespace) {
      var _a;
      let DEBUG;
      try {
        DEBUG = process.env.DEBUG;
      } catch (_b) {
      }
      return (_a = DEBUG === null || DEBUG === void 0 ? void 0 : DEBUG.includes(namespace)) !== null && _a !== void 0 ? _a : false;
    }
    exports.isDebugEnabled = isDebugEnabled;
    function strInfo(info, options) {
      var _a, _b;
      if (info === void 0) {
        return void 0;
      }
      let str = "\n";
      if (typeof info === "string") {
        str += info;
      } else if (Array.isArray(info)) {
        if (info.length === 0) {
          str += (_b = (_a = options.serialization) === null || _a === void 0 ? void 0 : _a.emptyArray) !== null && _b !== void 0 ? _b : "[]";
        } else {
          str += info.map(strUnknown2).join("\n");
        }
      } else {
        str += strUnknown2(info);
      }
      str = pad2(str);
      return str;
    }
    function pad2(str) {
      const PADDING = "     ";
      const terminalWidth = getTerminalWidth2();
      const lines = [];
      str.split("\n").forEach((line) => {
        if (!terminalWidth) {
          lines.push(line);
        } else {
          chunk2(line, terminalWidth - PADDING.length).forEach((chunk3) => {
            lines.push(chunk3);
          });
        }
      });
      return lines.join("\n" + PADDING);
    }
    function chunk2(str, size) {
      if (str.length <= size) {
        return [str];
      }
      const chunks = str.match(new RegExp(".{1," + size + "}", "g"));
      (0, assert_1.assert)(chunks);
      return chunks;
    }
    function strUnknown2(thing) {
      return typeof thing === "string" ? thing : strObj2(thing);
    }
    function strObj2(obj, newLines = false) {
      return JSON.stringify(obj, replaceFunctionSerializer2, newLines ? 2 : void 0);
    }
    function replaceFunctionSerializer2(_key, value) {
      if ((0, isCallable_1.isCallable)(value)) {
        return value.toString().split(/\s+/).join(" ");
      }
      return value;
    }
    function getTerminalWidth2() {
      return typeof process !== "undefined" && typeof process.stdout !== "undefined" && process.stdout.columns || void 0;
    }
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/isPromise.js
var require_isPromise = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/isPromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPromise = void 0;
    var isCallable_1 = require_isCallable2();
    function isPromise2(val) {
      return typeof val === "object" && val !== null && "then" in val && (0, isCallable_1.isCallable)(val.then);
    }
    exports.isPromise = isPromise2;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/isVikeReactApp.js
var require_isVikeReactApp = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/utils/isVikeReactApp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isVikeReactApp = void 0;
    function isVikeReactApp2() {
      const g = globalThis;
      return !!g._isVikeReactApp;
    }
    exports.isVikeReactApp = isVikeReactApp2;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/utils.js
var require_utils4 = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_assert2(), exports);
    __exportStar(require_debug2(), exports);
    __exportStar(require_isPromise(), exports);
    __exportStar(require_isBrowser(), exports);
    __exportStar(require_getGlobalObject(), exports);
    __exportStar(require_isVikeReactApp(), exports);
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/useStream.js
var require_useStream = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/useStream.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StreamProvider = exports.useStream = void 0;
    var picocolors_1 = __importDefault(require_picocolors());
    var react_1 = __importStar(require_react());
    var utils_1 = require_utils4();
    var globalObject12 = (0, utils_1.getGlobalObject)("useStream.ts", {
      StreamContext: react_1.default.createContext(null)
    });
    var StreamProvider = globalObject12.StreamContext.Provider;
    exports.StreamProvider = StreamProvider;
    function useStream() {
      const streamUtils = (0, react_1.useContext)(globalObject12.StreamContext);
      (0, utils_1.assertUsage)(streamUtils, getErrMsg2());
      return streamUtils;
    }
    exports.useStream = useStream;
    function getErrMsg2() {
      if ((0, utils_1.isVikeReactApp)()) {
        return `HTML streaming (https://vike.dev/streaming) disabled: set the setting ${picocolors_1.default.code("stream")} (https://vike.dev/stream) to ${picocolors_1.default.code("true")}.'`;
      } else {
        return `react-streaming (https://github.com/brillout/react-streaming) isn't installed: make sure to use ${picocolors_1.default.code("renderToStream()")} to render your root React component, see https://github.com/brillout/react-streaming#get-started`;
      }
    }
  }
});

// node_modules/.pnpm/isbot-fast@1.2.0/node_modules/isbot-fast/index.js
var require_isbot_fast = __commonJS({
  "node_modules/.pnpm/isbot-fast@1.2.0/node_modules/isbot-fast/index.js"(exports, module) {
    var bots = [
      // generic
      "bot",
      // googlebot, bingbot, telegrambot, twitterbot, yandexbot, etc.
      "check",
      "cloud",
      // cloudflare, cloudinary, etc.
      "crawler",
      "download",
      "monitor",
      // monitor & monitoring
      "preview",
      // skypeuripreview, bingpreview, yahoo link preview, etc.
      "scan",
      "spider",
      // baiduspider, 360spider, screaming frog seo spider, etc.
      // search engines
      "google",
      "qwantify",
      "yahoo",
      // aggregators, messengers and social networks
      "facebookexternalhit",
      "flipboard",
      "tumblr",
      "vkshare",
      "whatsapp",
      // downloaders
      "curl",
      "perl",
      "python",
      "wget",
      // high activity scanners
      "heritrix",
      "ia_archiver"
    ];
    var createRegex = () => new RegExp(`(${bots.join("|")})`, "i");
    var isBotRegex = createRegex();
    module.exports = (userAgent) => isBotRegex.test(userAgent);
    module.exports.extend = (additionalBots) => {
      bots = [...new Set(bots.concat(additionalBots))];
      isBotRegex = createRegex();
    };
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/resolveSeoStrategy.js
var require_resolveSeoStrategy = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/resolveSeoStrategy.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveSeoStrategy = void 0;
    var isbot_fast_1 = __importDefault(require_isbot_fast());
    var picocolors_1 = __importDefault(require_picocolors());
    var utils_1 = require_utils4();
    function resolveSeoStrategy(options = {}) {
      const seoStrategy = options.seoStrategy || "conservative";
      if (!options.userAgent) {
        showWarning();
        return { disableStream: true };
      }
      if (!(0, isbot_fast_1.default)(options.userAgent)) {
        return { disableStream: false };
      }
      const isGoogleBot = options.userAgent.toLowerCase().includes("googlebot");
      if (seoStrategy === "google-speed" && isGoogleBot) {
        return { disableStream: false };
      }
      return { disableStream: true };
    }
    exports.resolveSeoStrategy = resolveSeoStrategy;
    function showWarning() {
      const isVikeReact = (0, utils_1.isVikeReactApp)();
      const link = isVikeReact ? "https://vike.dev/streaming" : "https://github.com/brillout/react-streaming";
      const help = isVikeReact ? `the HTTP request headers with ${picocolors_1.default.code("renderPage({ headersOriginal })")}` : picocolors_1.default.code("options.userAgent");
      const errMsg = [
        `HTML streaming (${link}) disabled because the User-Agent request header is unknown: make sure to provide`,
        `${help}.`,
        "The HTTP User-Agent request header is needed so that HTML streaming can automatically be disabled for bots and crawlers, see https://github.com/brillout/react-streaming#bots for more information."
      ];
      if (!isVikeReact) {
        errMsg.push(`Or set ${picocolors_1.default.code("options.disable")} to ${picocolors_1.default.code("true")} to suppress this warning.`);
      }
      (0, utils_1.assertWarning)(false, errMsg.join(" "), { onlyOnce: true });
    }
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.wrapStreamEnd = exports.assertReactImport = exports.afterReactBugCatch = exports.debugFlow = void 0;
    var utils_1 = require_utils4();
    exports.debugFlow = (0, utils_1.createDebugger)("react-streaming:flow");
    function afterReactBugCatch(fn) {
      setTimeout(() => {
        fn();
      }, 0);
    }
    exports.afterReactBugCatch = afterReactBugCatch;
    function assertReactImport(fn, fnName) {
      (0, utils_1.assert)(typeof fn === "function");
      (0, utils_1.assertUsage)(fn, `Couldn't import ${fnName}() from 'react-dom'`);
    }
    exports.assertReactImport = assertReactImport;
    function wrapStreamEnd(streamEnd, didError) {
      return streamEnd.then(() => new Promise((r) => setTimeout(r, 0))).then(() => !didError);
    }
    exports.wrapStreamEnd = wrapStreamEnd;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream.js
var require_renderToStream = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderToWebStream_set = exports.renderToNodeStream_set = exports.disable = exports.renderToStream = void 0;
    var react_1 = __importDefault(require_react());
    var server_1 = __importStar(require_server_node());
    var useSuspenseData_1 = require_useSuspenseData();
    var useStream_1 = require_useStream();
    var resolveSeoStrategy_1 = require_resolveSeoStrategy();
    var utils_1 = require_utils4();
    var common_1 = require_common();
    var globalObject12 = (0, utils_1.getGlobalObject)("renderToStream.ts", {
      renderToNodeStream: null,
      renderToWebStream: null
    });
    assertReact();
    var globalConfig = globalThis.__react_streaming = globalThis.__react_streaming || {
      disable: false
    };
    function disable() {
      globalConfig.disable = true;
    }
    exports.disable = disable;
    async function renderToStream2(element, options = {}) {
      var _a, _b;
      (0, utils_1.assertUsage)(!options.renderToPipeableStream && !options.renderToReadableStream, "using deprecated options");
      element = react_1.default.createElement(useSuspenseData_1.SuspenseData, null, element);
      const buffer = [];
      let injectToStream = async (chunk2) => {
        buffer.push(chunk2);
      };
      const doNotClosePromise = { promise: null };
      let doNotCloseTimeout = null;
      const doNotClose = () => {
        let resolve;
        doNotClosePromise.promise = new Promise((r) => resolve = r);
        if (doNotCloseTimeout)
          clearTimeout(doNotCloseTimeout);
        doNotCloseTimeout = setTimeout(() => {
          (0, utils_1.assertUsage)(false, "makeClosableAgain() not called after 10 seconds (`const makeClosableAgain = stream.doNotClose()`)");
        }, 10 * 1e3);
        const makeClosableAgain = () => {
          resolve();
          clearTimeout(doNotCloseTimeout);
        };
        return makeClosableAgain;
      };
      let abortFn;
      const setAbortFn = (fn) => abortFn = fn;
      const streamTimeout = (() => {
        var _a2;
        if (options.timeout === null)
          return null;
        return setTimeout(() => {
          var _a3;
          (0, utils_1.assert)(abortFn);
          abortFn();
          (_a3 = options.onTimeout) === null || _a3 === void 0 ? void 0 : _a3.call(options);
        }, ((_a2 = options.timeout) !== null && _a2 !== void 0 ? _a2 : 20) * 1e3);
      })();
      const clearTimeouts = () => {
        if (streamTimeout !== null)
          clearTimeout(streamTimeout);
        if (doNotCloseTimeout !== null)
          clearTimeout(doNotCloseTimeout);
      };
      let hasStreamEnded = () => false;
      element = react_1.default.createElement(useStream_1.StreamProvider, {
        value: {
          injectToStream: (chunk2, options2) => injectToStream(chunk2, options2),
          hasStreamEnded: () => hasStreamEnded(),
          doNotClose
        }
      }, element);
      const disable2 = globalConfig.disable || ((_a = options.disable) !== null && _a !== void 0 ? _a : (0, resolveSeoStrategy_1.resolveSeoStrategy)(options).disableStream);
      const webStream = (_b = options.webStream) !== null && _b !== void 0 ? _b : !globalObject12.renderToNodeStream;
      (0, common_1.debugFlow)(`disable === ${disable2} && webStream === ${webStream}`);
      let ret;
      const retCommon = { disabled: disable2, doNotClose };
      if (!webStream) {
        ret = Object.assign(Object.assign({}, retCommon), await globalObject12.renderToNodeStream(element, disable2, options, doNotClosePromise, setAbortFn, clearTimeouts));
      } else {
        (0, utils_1.assert)(globalObject12.renderToWebStream);
        ret = Object.assign(Object.assign({}, retCommon), await globalObject12.renderToWebStream(element, disable2, options, doNotClosePromise, setAbortFn, clearTimeouts));
      }
      injectToStream = ret.injectToStream;
      buffer.forEach((chunk2) => injectToStream(chunk2));
      buffer.length = 0;
      hasStreamEnded = ret.hasStreamEnded;
      (0, common_1.debugFlow)("promise `await renderToStream()` resolved");
      return ret;
    }
    exports.renderToStream = renderToStream2;
    function renderToNodeStream_set(renderToNodeStream) {
      globalObject12.renderToNodeStream = renderToNodeStream;
    }
    exports.renderToNodeStream_set = renderToNodeStream_set;
    function renderToWebStream_set(renderToWebStream) {
      globalObject12.renderToWebStream = renderToWebStream;
    }
    exports.renderToWebStream_set = renderToWebStream_set;
    function assertReact() {
      const versionMajor = parseInt(server_1.version.split(".")[0], 10);
      (0, utils_1.assertUsage)(versionMajor >= 18, `\`react-dom@${server_1.version}\` was loaded, but react-streaming only works with React version 18 or greater.`);
      (0, utils_1.assert)(typeof server_1.default.renderToPipeableStream === "function" || typeof server_1.default.renderToReadableStream === "function");
    }
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/index.js
var require_server = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.disable = exports.renderToStream = void 0;
    var assert_1 = require_assert2();
    var isBrowser_1 = require_isBrowser();
    (0, assert_1.assertUsage)(!(0, isBrowser_1.isBrowser)(), "The file node_modules/react-streaming/dist/{esm,cjs}/server/index.js is loaded in the browser but it shouldn't. Make sure to never `import { something } from 'react-streaming/server'` in code that runs on the client-side. Also make sure your bundler picks the right node_modules/react-streaming/package.json#exports entries.");
    var renderToStream_1 = require_renderToStream();
    Object.defineProperty(exports, "renderToStream", { enumerable: true, get: function() {
      return renderToStream_1.renderToStream;
    } });
    Object.defineProperty(exports, "disable", { enumerable: true, get: function() {
      return renderToStream_1.disable;
    } });
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/orchestrateChunks.js
var require_orchestrateChunks = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/orchestrateChunks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.orchestrateChunks = void 0;
    var utils_1 = require_utils4();
    var debug5 = (0, utils_1.createDebugger)("react-streaming:chunks");
    function orchestrateChunks(streamOperations, doNotClosePromise) {
      let hasEnded = false;
      let lastWritePromise = null;
      let firstReactWritePromise_resolve;
      let firstReactWritePromise = new Promise((resolve) => {
        firstReactWritePromise_resolve = () => {
          if (firstReactWritePromise === null)
            return;
          firstReactWritePromise = null;
          resolve();
        };
      });
      let isFirstReactWrite = true;
      return { injectToStream, onReactWrite, onBeforeEnd, hasStreamEnded: () => hasEnded };
      function injectToStream(chunk2, options) {
        if (debug5.isEnabled)
          debug5("injectToStream()", getChunkAsString(chunk2));
        if (hasEnded) {
          (0, utils_1.assertUsage)(false, `Cannot inject the following chunk because the stream has already ended. Consider using the doNotClose() and hasStreamEnded() utilities. The chunk:
${getChunkAsString(chunk2)}`);
        }
        writeChunkInSequence(chunk2, options === null || options === void 0 ? void 0 : options.flush);
      }
      function writeChunkInSequence(chunk2, flush) {
        const lastWritePromisePrevious = lastWritePromise;
        lastWritePromise = (async () => {
          if (firstReactWritePromise)
            await firstReactWritePromise;
          if (lastWritePromisePrevious)
            await lastWritePromisePrevious;
          if ((0, utils_1.isPromise)(chunk2))
            chunk2 = await chunk2;
          writeChunkNow(chunk2, flush);
        })();
      }
      function writeChunkNow(chunk2, flush) {
        (0, utils_1.assert)(!hasEnded);
        (0, utils_1.assert)(streamOperations.operations);
        streamOperations.operations.writeChunk(chunk2);
        if (debug5.isEnabled)
          debug5(">>> WRITE", getChunkAsString(chunk2));
        if (flush && streamOperations.operations.flush !== null) {
          streamOperations.operations.flush();
          debug5(">>> FLUSH");
        }
      }
      function onReactWrite(chunk2) {
        if (debug5.isEnabled)
          debug5("onReactWrite()", getChunkAsString(chunk2));
        (0, utils_1.assert)(!hasEnded);
        const flush = true;
        if (isFirstReactWrite) {
          debug5(">>> START");
          writeChunkNow(chunk2, flush);
          setTimeout(() => {
            isFirstReactWrite = false;
            firstReactWritePromise_resolve();
          }, 0);
        } else {
          writeChunkInSequence(chunk2, flush);
        }
      }
      async function onBeforeEnd() {
        firstReactWritePromise_resolve();
        await new Promise((r) => setTimeout(r, 0));
        await doNotClosePromise.promise;
        await lastWritePromise;
        hasEnded = true;
        debug5(">>> END");
      }
    }
    exports.orchestrateChunks = orchestrateChunks;
    function getChunkAsString(chunk2) {
      try {
        return new TextDecoder().decode(chunk2);
      } catch (err) {
        return String(chunk2);
      }
    }
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/createPipeWrapper.js
var require_createPipeWrapper = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/createPipeWrapper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createPipeWrapper = void 0;
    var utils_1 = require_utils4();
    var orchestrateChunks_1 = require_orchestrateChunks();
    var debug5 = (0, utils_1.createDebugger)("react-streaming:createPipeWrapper");
    var stream_1 = __require("stream");
    async function createPipeWrapper(pipeFromReact, onReactBug, clearTimeouts, doNotClosePromise) {
      const { pipeForUser, streamEnd } = createPipeForUser();
      const streamOperations = {
        operations: null
      };
      const { injectToStream, onReactWrite, onBeforeEnd, hasStreamEnded } = (0, orchestrateChunks_1.orchestrateChunks)(streamOperations, doNotClosePromise);
      return { pipeForUser, streamEnd, injectToStream, hasStreamEnded };
      function createPipeForUser() {
        debug5("createPipeForUser()");
        let onEnded;
        const streamEnd2 = new Promise((r) => {
          onEnded = () => r();
        });
        const pipeForUser2 = (writableFromUser) => {
          const writableForReact = new stream_1.Writable({
            write(chunk2, _encoding, callback) {
              debug5("write");
              if (!writableFromUser.destroyed) {
                onReactWrite(chunk2);
              } else {
                writableForReact.destroy();
              }
              callback();
            },
            async final(callback) {
              debug5("final");
              clearTimeouts();
              await onBeforeEnd();
              writableFromUser.end();
              onEnded();
              callback();
            },
            destroy(err) {
              debug5(`destroy (\`!!err === ${!!err}\`)`);
              clearTimeouts();
              if (err)
                onReactBug(err);
              writableFromUser.destroy(err !== null && err !== void 0 ? err : void 0);
              onEnded();
            }
          });
          const flush = () => {
            if (typeof writableFromUser.flush === "function") {
              ;
              writableFromUser.flush();
              debug5("stream flushed (Node.js Writable)");
            }
          };
          streamOperations.operations = {
            flush,
            writeChunk(chunk2) {
              writableFromUser.write(chunk2);
            }
          };
          writableForReact.flush = flush;
          pipeFromReact(writableForReact);
        };
        return { pipeForUser: pipeForUser2, streamEnd: streamEnd2 };
      }
    }
    exports.createPipeWrapper = createPipeWrapper;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/renderToNodeStream.js
var require_renderToNodeStream = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/renderToNodeStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderToNodeStream = void 0;
    var server_node_1 = require_server_node();
    var createPipeWrapper_1 = require_createPipeWrapper();
    var common_1 = require_common();
    async function renderToNodeStream(element, disable, options, doNotClosePromise, setAbortFn, clearTimeouts) {
      var _a;
      (0, common_1.debugFlow)("creating Node.js Stream Pipe");
      let onAllReady;
      const allReady = new Promise((r) => {
        onAllReady = () => r();
      });
      let onShellReady;
      const shellReady = new Promise((r) => {
        onShellReady = () => r();
      });
      let didError = false;
      let firstErr = null;
      let reactBug = null;
      const onError = (err) => {
        (0, common_1.debugFlow)("[react] onError() / onShellError()");
        didError = true;
        firstErr !== null && firstErr !== void 0 ? firstErr : firstErr = err;
        onShellReady();
        (0, common_1.afterReactBugCatch)(() => {
          var _a2;
          if (err !== reactBug) {
            (_a2 = options.onBoundaryError) === null || _a2 === void 0 ? void 0 : _a2.call(options, err);
          }
        });
      };
      const renderToPipeableStream = (_a = options.renderToPipeableStream) !== null && _a !== void 0 ? _a : server_node_1.renderToPipeableStream;
      if (!options.renderToPipeableStream) {
        (0, common_1.assertReactImport)(renderToPipeableStream, "renderToPipeableStream");
      }
      const { pipe: pipeOriginal, abort } = renderToPipeableStream(element, Object.assign(Object.assign({}, options.streamOptions), {
        onShellReady() {
          (0, common_1.debugFlow)("[react] onShellReady()");
          onShellReady();
        },
        onAllReady() {
          (0, common_1.debugFlow)("[react] onAllReady()");
          onShellReady();
          onAllReady();
        },
        onShellError: onError,
        onError
      }));
      setAbortFn(() => {
        abort();
      });
      let promiseResolved = false;
      const onReactBug = (err) => {
        (0, common_1.debugFlow)("react bug");
        didError = true;
        firstErr !== null && firstErr !== void 0 ? firstErr : firstErr = err;
        reactBug = err;
        if (reactBug !== firstErr || promiseResolved) {
          console.error(reactBug);
        }
      };
      const { pipeForUser, injectToStream, streamEnd, hasStreamEnded } = await (0, createPipeWrapper_1.createPipeWrapper)(pipeOriginal, onReactBug, clearTimeouts, doNotClosePromise);
      await shellReady;
      if (didError)
        throw firstErr;
      if (disable)
        await allReady;
      if (didError)
        throw firstErr;
      promiseResolved = true;
      return {
        pipe: pipeForUser,
        abort,
        readable: null,
        streamEnd: (0, common_1.wrapStreamEnd)(streamEnd, didError),
        injectToStream,
        hasStreamEnded
      };
    }
    exports.renderToNodeStream = renderToNodeStream;
  }
});

// node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js
var require_react_dom_server_legacy_browser_production_min = __commonJS({
  "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js"(exports) {
    "use strict";
    var aa = require_react();
    function l(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var p = Object.prototype.hasOwnProperty;
    var fa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ha = {};
    var ia = {};
    function ja(a) {
      if (p.call(ia, a)) return true;
      if (p.call(ha, a)) return false;
      if (fa.test(a)) return ia[a] = true;
      ha[a] = true;
      return false;
    }
    function r(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var t = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      t[a] = new r(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      t[b] = new r(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      t[a] = new r(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      t[a] = new r(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      t[a] = new r(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      t[a] = new r(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      t[a] = new r(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      t[a] = new r(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      t[a] = new r(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ka = /[\-:]([a-z])/g;
    function la(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ka,
        la
      );
      t[b] = new r(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ka, la);
      t[b] = new r(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ka, la);
      t[b] = new r(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      t[a] = new r(a, 1, false, a.toLowerCase(), null, false, false);
    });
    t.xlinkHref = new r("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      t[a] = new r(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var u = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var ma = ["Webkit", "ms", "Moz", "O"];
    Object.keys(u).forEach(function(a) {
      ma.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        u[b] = u[a];
      });
    });
    var na = /["'&<>]/;
    function v(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = na.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var oa = /([A-Z])/g;
    var pa = /^ms-/;
    var qa = Array.isArray;
    function w(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function ra(a, b, c) {
      switch (b) {
        case "select":
          return w(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return w(2, null);
        case "math":
          return w(3, null);
        case "foreignObject":
          return w(1, null);
        case "table":
          return w(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return w(5, null);
        case "colgroup":
          return w(7, null);
        case "tr":
          return w(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? w(1, null) : a;
    }
    var sa = /* @__PURE__ */ new Map();
    function ta(a, b, c) {
      if ("object" !== typeof c) throw Error(l(62));
      b = true;
      for (var d in c) if (p.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = v(d);
            f = v(("" + f).trim());
          } else {
            e = d;
            var g = sa.get(e);
            void 0 !== g ? e = g : (g = v(e.replace(oa, "-$1").toLowerCase().replace(pa, "-ms-")), sa.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || p.call(u, d) ? "" + f : f + "px" : v(("" + f).trim());
          }
          b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
        }
      }
      b || a.push('"');
    }
    function x(a, b, c, d) {
      switch (c) {
        case "style":
          ta(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = t.hasOwnProperty(c) ? t[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(" ", c, '=""');
              break;
            case 4:
              true === d ? a.push(" ", c, '=""') : false !== d && a.push(" ", c, '="', v(d), '"');
              break;
            case 5:
              isNaN(d) || a.push(" ", c, '="', v(d), '"');
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(" ", c, '="', v(d), '"');
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', v(d), '"');
          }
        } else if (ja(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(" ", c, '="', v(d), '"');
        }
      }
    }
    function y(a, b, c) {
      if (null != b) {
        if (null != c) throw Error(l(60));
        if ("object" !== typeof b || !("__html" in b)) throw Error(l(61));
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function ua(a) {
      var b = "";
      aa.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    function va(a, b, c, d) {
      a.push(A(c));
      var f = c = null, e;
      for (e in b) if (p.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            x(a, d, e, g);
        }
      }
      a.push(">");
      y(a, f, c);
      return "string" === typeof c ? (a.push(v(c)), null) : c;
    }
    var wa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var xa = /* @__PURE__ */ new Map();
    function A(a) {
      var b = xa.get(a);
      if (void 0 === b) {
        if (!wa.test(a)) throw Error(l(65, a));
        b = "<" + a;
        xa.set(a, b);
      }
      return b;
    }
    function ya(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(A("select"));
          var e = null, g = null;
          for (n in c) if (p.call(c, n)) {
            var h = c[n];
            if (null != h) switch (n) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                x(a, d, n, h);
            }
          }
          a.push(">");
          y(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(A("option"));
          var k = h = null, m = null;
          var n = null;
          for (e in c) if (p.call(c, e)) {
            var q = c[e];
            if (null != q) switch (e) {
              case "children":
                h = q;
                break;
              case "selected":
                m = q;
                break;
              case "dangerouslySetInnerHTML":
                n = q;
                break;
              case "value":
                k = q;
              default:
                x(a, d, e, q);
            }
          }
          if (null != g) if (c = null !== k ? "" + k : ua(h), qa(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(' selected=""');
              break;
            }
          }
          else "" + g === c && a.push(' selected=""');
          else m && a.push(' selected=""');
          a.push(">");
          y(a, n, h);
          return h;
        case "textarea":
          a.push(A("textarea"));
          n = g = e = null;
          for (h in c) if (p.call(c, h) && (k = c[h], null != k)) switch (h) {
            case "children":
              n = k;
              break;
            case "value":
              e = k;
              break;
            case "defaultValue":
              g = k;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(l(91));
            default:
              x(
                a,
                d,
                h,
                k
              );
          }
          null === e && null !== g && (e = g);
          a.push(">");
          if (null != n) {
            if (null != e) throw Error(l(92));
            if (qa(n) && 1 < n.length) throw Error(l(93));
            e = "" + n;
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          null !== e && a.push(v("" + e));
          return null;
        case "input":
          a.push(A("input"));
          k = n = h = e = null;
          for (g in c) if (p.call(c, g) && (m = c[g], null != m)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(l(399, "input"));
            case "defaultChecked":
              k = m;
              break;
            case "defaultValue":
              h = m;
              break;
            case "checked":
              n = m;
              break;
            case "value":
              e = m;
              break;
            default:
              x(a, d, g, m);
          }
          null !== n ? x(a, d, "checked", n) : null !== k && x(a, d, "checked", k);
          null !== e ? x(a, d, "value", e) : null !== h && x(a, d, "value", h);
          a.push("/>");
          return null;
        case "menuitem":
          a.push(A("menuitem"));
          for (var C in c) if (p.call(c, C) && (e = c[C], null != e)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(l(400));
            default:
              x(a, d, C, e);
          }
          a.push(">");
          return null;
        case "title":
          a.push(A("title"));
          e = null;
          for (q in c) if (p.call(c, q) && (g = c[q], null != g)) switch (q) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(l(434));
            default:
              x(a, d, q, g);
          }
          a.push(">");
          return e;
        case "listing":
        case "pre":
          a.push(A(b));
          g = e = null;
          for (k in c) if (p.call(c, k) && (h = c[k], null != h)) switch (k) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              x(a, d, k, h);
          }
          a.push(">");
          if (null != g) {
            if (null != e) throw Error(l(60));
            if ("object" !== typeof g || !("__html" in g)) throw Error(l(61));
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push("\n", c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(A(b));
          for (var D in c) if (p.call(c, D) && (e = c[D], null != e)) switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(l(399, b));
            default:
              x(a, d, D, e);
          }
          a.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return va(
            a,
            c,
            b,
            d
          );
        case "html":
          return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), va(a, c, b, d);
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return va(a, c, b, d);
          a.push(A(b));
          g = e = null;
          for (m in c) if (p.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              ta(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ja(m) && "function" !== typeof h && "symbol" !== typeof h && a.push(" ", m, '="', v(h), '"');
          }
          a.push(">");
          y(a, g, e);
          return e;
      }
    }
    function za(a, b, c) {
      a.push('<!--$?--><template id="');
      if (null === c) throw Error(l(395));
      a.push(c);
      return a.push('"></template>');
    }
    function Aa(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 2:
          return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 3:
          return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 4:
          return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 5:
          return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 6:
          return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 7:
          return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        default:
          throw Error(l(397));
      }
    }
    function Ba(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return a.push("</div>");
        case 2:
          return a.push("</svg>");
        case 3:
          return a.push("</math>");
        case 4:
          return a.push("</table>");
        case 5:
          return a.push("</tbody></table>");
        case 6:
          return a.push("</tr></table>");
        case 7:
          return a.push("</colgroup></table>");
        default:
          throw Error(l(397));
      }
    }
    var Ca = /[<\u2028\u2029]/g;
    function Da(a) {
      return JSON.stringify(a).replace(Ca, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Ea(a, b) {
      b = void 0 === b ? "" : b;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
    }
    function Fa(a, b, c, d) {
      if (c.generateStaticMarkup) return a.push(v(b)), false;
      "" === b ? a = d : (d && a.push("<!-- -->"), a.push(v(b)), a = true);
      return a;
    }
    var B = Object.assign;
    var Ga = Symbol.for("react.element");
    var Ha = Symbol.for("react.portal");
    var Ia = Symbol.for("react.fragment");
    var Ja = Symbol.for("react.strict_mode");
    var Ka = Symbol.for("react.profiler");
    var La = Symbol.for("react.provider");
    var Ma = Symbol.for("react.context");
    var Na = Symbol.for("react.forward_ref");
    var Oa = Symbol.for("react.suspense");
    var Pa = Symbol.for("react.suspense_list");
    var Qa = Symbol.for("react.memo");
    var Ra = Symbol.for("react.lazy");
    var Sa = Symbol.for("react.scope");
    var Ta = Symbol.for("react.debug_trace_mode");
    var Ua = Symbol.for("react.legacy_hidden");
    var Va = Symbol.for("react.default_value");
    var Wa = Symbol.iterator;
    function Xa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Ia:
          return "Fragment";
        case Ha:
          return "Portal";
        case Ka:
          return "Profiler";
        case Ja:
          return "StrictMode";
        case Oa:
          return "Suspense";
        case Pa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ma:
          return (a.displayName || "Context") + ".Consumer";
        case La:
          return (a._context.displayName || "Context") + ".Provider";
        case Na:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Qa:
          return b = a.displayName || null, null !== b ? b : Xa(a.type) || "Memo";
        case Ra:
          b = a._payload;
          a = a._init;
          try {
            return Xa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var Ya = {};
    function Za(a, b) {
      a = a.contextTypes;
      if (!a) return Ya;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var E = null;
    function F(a, b) {
      if (a !== b) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error(l(401));
        } else {
          if (null === c) throw Error(l(401));
          F(a, c);
        }
        b.context._currentValue2 = b.value;
      }
    }
    function $a(a) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      null !== a && $a(a);
    }
    function ab(a) {
      var b = a.parent;
      null !== b && ab(b);
      a.context._currentValue2 = a.value;
    }
    function bb(a, b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      if (null === a) throw Error(l(402));
      a.depth === b.depth ? F(a, b) : bb(a, b);
    }
    function cb(a, b) {
      var c = b.parent;
      if (null === c) throw Error(l(402));
      a.depth === c.depth ? F(a, c) : cb(a, c);
      b.context._currentValue2 = b.value;
    }
    function G(a) {
      var b = E;
      b !== a && (null === b ? ab(a) : null === a ? $a(b) : b.depth === a.depth ? F(b, a) : b.depth > a.depth ? bb(b, a) : cb(b, a), E = a);
    }
    var db = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function eb(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = db;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : B({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && db.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = B({}, e, h)) : B(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var fb = { id: 1, overflow: "" };
    function gb(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - H(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - H(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - H(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var H = Math.clz32 ? Math.clz32 : hb;
    var ib = Math.log;
    var jb = Math.LN2;
    function hb(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (ib(a) / jb | 0) | 0;
    }
    function kb(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var lb = "function" === typeof Object.is ? Object.is : kb;
    var I = null;
    var ob = null;
    var J = null;
    var K = null;
    var L = false;
    var M = false;
    var N = 0;
    var O = null;
    var P = 0;
    function Q() {
      if (null === I) throw Error(l(321));
      return I;
    }
    function pb() {
      if (0 < P) throw Error(l(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function qb() {
      null === K ? null === J ? (L = false, J = K = pb()) : (L = true, K = J) : null === K.next ? (L = false, K = K.next = pb()) : (L = true, K = K.next);
      return K;
    }
    function rb() {
      ob = I = null;
      M = false;
      J = null;
      P = 0;
      K = O = null;
    }
    function sb(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function tb(a, b, c) {
      I = Q();
      K = qb();
      if (L) {
        var d = K.queue;
        b = d.dispatch;
        if (null !== O && (c = O.get(d), void 0 !== c)) {
          O.delete(d);
          d = K.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          K.memoizedState = d;
          return [d, b];
        }
        return [K.memoizedState, b];
      }
      a = a === sb ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      K.memoizedState = a;
      a = K.queue = { last: null, dispatch: null };
      a = a.dispatch = ub.bind(null, I, a);
      return [K.memoizedState, a];
    }
    function vb(a, b) {
      I = Q();
      K = qb();
      b = void 0 === b ? null : b;
      if (null !== K) {
        var c = K.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!lb(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      K.memoizedState = [a, b];
      return a;
    }
    function ub(a, b, c) {
      if (25 <= P) throw Error(l(301));
      if (a === I) if (M = true, a = { action: c, next: null }, null === O && (O = /* @__PURE__ */ new Map()), c = O.get(b), void 0 === c) O.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function wb() {
      throw Error(l(394));
    }
    function R() {
    }
    var xb = { readContext: function(a) {
      return a._currentValue2;
    }, useContext: function(a) {
      Q();
      return a._currentValue2;
    }, useMemo: vb, useReducer: tb, useRef: function(a) {
      I = Q();
      K = qb();
      var b = K.memoizedState;
      return null === b ? (a = { current: a }, K.memoizedState = a) : b;
    }, useState: function(a) {
      return tb(sb, a);
    }, useInsertionEffect: R, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return vb(function() {
        return a;
      }, b);
    }, useImperativeHandle: R, useEffect: R, useDebugValue: R, useDeferredValue: function(a) {
      Q();
      return a;
    }, useTransition: function() {
      Q();
      return [
        false,
        wb
      ];
    }, useId: function() {
      var a = ob.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - H(a) - 1)).toString(32) + b;
      var c = S;
      if (null === c) throw Error(l(404));
      b = N++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      Q();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error(l(407));
      return c();
    } };
    var S = null;
    var yb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function zb(a) {
      console.error(a);
      return null;
    }
    function T() {
    }
    function Ab(a, b, c, d, f, e, g, h, k) {
      var m = [], n = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: n, pingedTasks: m, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? zb : f, onAllReady: void 0 === e ? T : e, onShellReady: void 0 === g ? T : g, onShellError: void 0 === h ? T : h, onFatalError: void 0 === k ? T : k };
      c = U(b, 0, null, c, false, false);
      c.parentFlushed = true;
      a = Bb(b, a, null, c, n, Ya, null, fb);
      m.push(a);
      return b;
    }
    function Bb(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var k = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(k);
        1 === b2.length && Cb(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(k);
      return k;
    }
    function U(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function V(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function W(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Db(a, b, c, d, f) {
      I = {};
      ob = b;
      N = 0;
      for (a = c(d, f); M; ) M = false, N = 0, P += 1, K = null, a = c(d, f);
      rb();
      return a;
    }
    function Eb(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error(l(108, Xa(d) || "Unknown", h));
          d = B({}, g, c);
        }
        b.legacyContext = d;
        X(a, b, f);
        b.legacyContext = g;
      } else X(a, b, f);
    }
    function Fb(a, b) {
      if (a && a.defaultProps) {
        b = B({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Gb(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = Za(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue2 : f);
        eb(e, c, d, f);
        Eb(a, b, e, c);
      } else {
        e = Za(c, b.legacyContext);
        f = Db(a, b, c, d, e);
        var g = 0 !== N;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) eb(f, c, d, e), Eb(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = gb(d, 1, 0);
          try {
            X(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else X(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = ya(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = ra(g, c, d);
        Hb(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push("</", c, ">");
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case Ua:
          case Ta:
          case Ja:
          case Ka:
          case Ia:
            X(a, b, d.children);
            return;
          case Pa:
            X(a, b, d.children);
            return;
          case Sa:
            throw Error(l(343));
          case Oa:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k = U(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(k);
              f.lastPushedText = false;
              var m = U(a, 0, null, f.formatContext, false, false);
              m.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = m;
              try {
                if (Hb(
                  a,
                  b,
                  d
                ), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("<!-- -->"), m.status = 1, Y(h, m), 0 === h.pendingTasks) break a;
              } catch (n) {
                m.status = 4, h.forceClientRender = true, h.errorDigest = V(a, n);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Bb(a, e, c, k, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Na:
            d = Db(a, b, c.render, d, f);
            if (0 !== N) {
              c = b.treeContext;
              b.treeContext = gb(c, 1, 0);
              try {
                X(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else X(a, b, d);
            return;
          case Qa:
            c = c.type;
            d = Fb(c, d);
            Gb(a, b, c, d, f);
            return;
          case La:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue2;
            c._currentValue2 = d;
            g = E;
            E = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            X(a, b, f);
            a = E;
            if (null === a) throw Error(l(403));
            d = a.parentValue;
            a.context._currentValue2 = d === Va ? a.context._defaultValue : d;
            a = E = a.parent;
            b.context = a;
            return;
          case Ma:
            d = d.children;
            d = d(c._currentValue2);
            X(a, b, d);
            return;
          case Ra:
            f = c._init;
            c = f(c._payload);
            d = Fb(c, d);
            Gb(
              a,
              b,
              c,
              d,
              void 0
            );
            return;
        }
        throw Error(l(130, null == c ? c : typeof c, ""));
      }
    }
    function X(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Ga:
            Gb(a, b, c.type, c.props, c.ref);
            return;
          case Ha:
            throw Error(l(257));
          case Ra:
            var d = c._init;
            c = d(c._payload);
            X(a, b, c);
            return;
        }
        if (qa(c)) {
          Ib(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = Wa && c[Wa] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            Ib(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error(l(31, "[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a));
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Fa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Fa(b.blockedSegment.chunks, "" + c, a.responseState, d.lastPushedText));
    }
    function Ib(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = gb(e, d, f);
        try {
          Hb(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Hb(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return X(a, b, c);
      } catch (k) {
        if (rb(), "object" === typeof k && null !== k && "function" === typeof k.then) {
          c = k;
          var g = b.blockedSegment, h = U(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Bb(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          G(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, G(e), k;
      }
    }
    function Jb(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Kb(this, b, a);
    }
    function Lb(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, a = void 0 === c ? Error(l(432)) : c, d.errorDigest = b.onError(a), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return Lb(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (d = b.onAllReady, d()));
    }
    function Y(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && Y(a, c);
      } else a.completedSegments.push(b);
    }
    function Kb(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error(l(389));
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = T, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && Y(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Jb, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (Y(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Cb(a) {
      if (2 !== a.status) {
        var b = E, c = yb.current;
        yb.current = xb;
        var d = S;
        S = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, k = g.blockedSegment;
            if (0 === k.status) {
              G(g.context);
              try {
                X(h, g, g.node), h.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("<!-- -->"), g.abortSet.delete(g), k.status = 1, Kb(h, g.blockedBoundary, k);
              } catch (z) {
                if (rb(), "object" === typeof z && null !== z && "function" === typeof z.then) {
                  var m = g.ping;
                  z.then(m, m);
                } else {
                  g.abortSet.delete(g);
                  k.status = 4;
                  var n = g.blockedBoundary, q = z, C = V(h, q);
                  null === n ? W(h, q) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = true, n.errorDigest = C, n.parentFlushed && h.clientRenderedBoundaries.push(n)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var D = h.onAllReady;
                    D();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && Mb(a, a.destination);
        } catch (z) {
          V(a, z), W(a, z);
        } finally {
          S = d, yb.current = c, c === xb && G(b);
        }
      }
    }
    function Z(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          b.push('<template id="');
          b.push(a.placeholderPrefix);
          a = d.toString(16);
          b.push(a);
          return b.push('"></template>');
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) b.push(d[e]);
            f = Nb(a, b, f);
          }
          for (; e < d.length - 1; e++) b.push(d[e]);
          e < d.length && (f = b.push(d[e]));
          return f;
        default:
          throw Error(l(390));
      }
    }
    function Nb(a, b, c) {
      var d = c.boundary;
      if (null === d) return Z(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("<!--$!-->"), b.push("<template"), d && (b.push(' data-dgst="'), d = v(d), b.push(d), b.push('"')), b.push("></template>")), Z(a, b, c), a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->"), a;
      if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = f.boundaryPrefix + e.toString(16);
        d = d.id = f;
        za(b, a.responseState, d);
        Z(a, b, c);
        return b.push("<!--/$-->");
      }
      if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), za(b, a.responseState, d.id), Z(a, b, c), b.push("<!--/$-->");
      a.responseState.generateStaticMarkup || b.push("<!--$-->");
      c = d.completedSegments;
      if (1 !== c.length) throw Error(l(391));
      Nb(a, b, c[0]);
      a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->");
      return a;
    }
    function Ob(a, b, c) {
      Aa(b, a.responseState, c.formatContext, c.id);
      Nb(a, b, c);
      return Ba(b, c.formatContext);
    }
    function Pb(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) Qb(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      b.push(a.startInlineScript);
      a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (null === d) throw Error(l(395));
      c = c.toString(16);
      b.push(d);
      b.push('","');
      b.push(a.segmentPrefix);
      b.push(c);
      return b.push('")</script>');
    }
    function Qb(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error(l(392));
        return Ob(a, b, d);
      }
      Ob(a, b, d);
      a = a.responseState;
      b.push(a.startInlineScript);
      a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = true, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      b.push(a.segmentPrefix);
      f = f.toString(16);
      b.push(f);
      b.push('","');
      b.push(a.placeholderPrefix);
      b.push(f);
      return b.push('")</script>');
    }
    function Mb(a, b) {
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          Nb(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) b.push(d[c]);
          c < d.length && b.push(d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, k = g.id, m = g.errorDigest, n = g.errorMessage, q = g.errorComponentStack;
          d.push(h.startInlineScript);
          h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
          if (null === k) throw Error(l(395));
          d.push(k);
          d.push('"');
          if (m || n || q) {
            d.push(",");
            var C = Da(m || "");
            d.push(C);
          }
          if (n || q) {
            d.push(",");
            var D = Da(n || "");
            d.push(D);
          }
          if (q) {
            d.push(",");
            var z = Da(q);
            d.push(z);
          }
          if (!d.push(")</script>")) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var ba = a.completedBoundaries;
        for (e = 0; e < ba.length; e++) if (!Pb(a, b, ba[e])) {
          a.destination = null;
          e++;
          ba.splice(0, e);
          return;
        }
        ba.splice(0, e);
        var ca = a.partialBoundaries;
        for (e = 0; e < ca.length; e++) {
          var mb = ca[e];
          a: {
            f = a;
            g = b;
            var da = mb.completedSegments;
            for (h = 0; h < da.length; h++) if (!Qb(f, g, mb, da[h])) {
              h++;
              da.splice(0, h);
              var nb = false;
              break a;
            }
            da.splice(0, h);
            nb = true;
          }
          if (!nb) {
            a.destination = null;
            e++;
            ca.splice(0, e);
            return;
          }
        }
        ca.splice(0, e);
        var ea = a.completedBoundaries;
        for (e = 0; e < ea.length; e++) if (!Pb(a, b, ea[e])) {
          a.destination = null;
          e++;
          ea.splice(0, e);
          return;
        }
        ea.splice(0, e);
      } finally {
        0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.push(null);
      }
    }
    function Rb(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return Lb(c2, a, b);
        });
        c.clear();
        null !== a.destination && Mb(a, a.destination);
      } catch (d) {
        V(a, d), W(a, d);
      }
    }
    function Sb() {
    }
    function Tb(a, b, c, d) {
      var f = false, e = null, g = "", h = { push: function(a2) {
        null !== a2 && (g += a2);
        return true;
      }, destroy: function(a2) {
        f = true;
        e = a2;
      } }, k = false;
      a = Ab(a, Ea(c, b ? b.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, Infinity, Sb, void 0, function() {
        k = true;
      }, void 0, void 0);
      Cb(a);
      Rb(a, d);
      if (1 === a.status) a.status = 2, h.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = h;
        try {
          Mb(a, h);
        } catch (m) {
          V(a, m), W(a, m);
        }
      }
      if (f) throw e;
      if (!k) throw Error(l(426));
      return g;
    }
    exports.renderToNodeStream = function() {
      throw Error(l(207));
    };
    exports.renderToStaticMarkup = function(a, b) {
      return Tb(a, b, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.renderToStaticNodeStream = function() {
      throw Error(l(208));
    };
    exports.renderToString = function(a, b) {
      return Tb(a, b, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.version = "18.3.1";
  }
});

// node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js
var require_react_dom_server_browser_production_min = __commonJS({
  "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js"(exports) {
    "use strict";
    var aa = require_react();
    function k(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var l = null;
    var n = 0;
    function p(a, b) {
      if (0 !== b.length) if (512 < b.length) 0 < n && (a.enqueue(new Uint8Array(l.buffer, 0, n)), l = new Uint8Array(512), n = 0), a.enqueue(b);
      else {
        var c = l.length - n;
        c < b.length && (0 === c ? a.enqueue(l) : (l.set(b.subarray(0, c), n), a.enqueue(l), b = b.subarray(c)), l = new Uint8Array(512), n = 0);
        l.set(b, n);
        n += b.length;
      }
    }
    function t(a, b) {
      p(a, b);
      return true;
    }
    function ba(a) {
      l && 0 < n && (a.enqueue(new Uint8Array(l.buffer, 0, n)), l = null, n = 0);
    }
    var ca = new TextEncoder();
    function u(a) {
      return ca.encode(a);
    }
    function w(a) {
      return ca.encode(a);
    }
    function da(a, b) {
      "function" === typeof a.error ? a.error(b) : a.close();
    }
    var x = Object.prototype.hasOwnProperty;
    var ea = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var fa = {};
    var ha = {};
    function ia(a) {
      if (x.call(ha, a)) return true;
      if (x.call(fa, a)) return false;
      if (ea.test(a)) return ha[a] = true;
      fa[a] = true;
      return false;
    }
    function y(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new y(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new y(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new y(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new y(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new y(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new y(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new y(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new y(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new y(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ja = /[\-:]([a-z])/g;
    function ka(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ja,
        ka
      );
      z[b] = new y(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ja, ka);
      z[b] = new y(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ja, ka);
      z[b] = new y(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new y(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new y("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new y(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var B = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var la = ["Webkit", "ms", "Moz", "O"];
    Object.keys(B).forEach(function(a) {
      la.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        B[b] = B[a];
      });
    });
    var oa = /["'&<>]/;
    function C(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = oa.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var pa = /([A-Z])/g;
    var qa = /^ms-/;
    var ra = Array.isArray;
    var sa = w("<script>");
    var ta = w("</script>");
    var ua = w('<script src="');
    var va = w('<script type="module" src="');
    var wa = w('" async=""></script>');
    var xa = /(<\/|<)(s)(cript)/gi;
    function ya(a, b, c, d) {
      return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
    }
    function za(a, b, c, d, f) {
      a = void 0 === a ? "" : a;
      b = void 0 === b ? sa : w('<script nonce="' + C(b) + '">');
      var e = [];
      void 0 !== c && e.push(b, u(("" + c).replace(xa, ya)), ta);
      if (void 0 !== d) for (c = 0; c < d.length; c++) e.push(ua, u(C(d[c])), wa);
      if (void 0 !== f) for (d = 0; d < f.length; d++) e.push(va, u(C(f[d])), wa);
      return { bootstrapChunks: e, startInlineScript: b, placeholderPrefix: w(a + "P:"), segmentPrefix: w(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false };
    }
    function D(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function Aa(a) {
      return D("http://www.w3.org/2000/svg" === a ? 2 : "http://www.w3.org/1998/Math/MathML" === a ? 3 : 0, null);
    }
    function Ba(a, b, c) {
      switch (b) {
        case "select":
          return D(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return D(2, null);
        case "math":
          return D(3, null);
        case "foreignObject":
          return D(1, null);
        case "table":
          return D(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return D(5, null);
        case "colgroup":
          return D(7, null);
        case "tr":
          return D(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? D(1, null) : a;
    }
    var Ca = w("<!-- -->");
    function Da(a, b, c, d) {
      if ("" === b) return d;
      d && a.push(Ca);
      a.push(u(C(b)));
      return true;
    }
    var Ea = /* @__PURE__ */ new Map();
    var Fa = w(' style="');
    var Ga = w(":");
    var Ha = w(";");
    function Ia(a, b, c) {
      if ("object" !== typeof c) throw Error(k(62));
      b = true;
      for (var d in c) if (x.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = u(C(d));
            f = u(C(("" + f).trim()));
          } else {
            e = d;
            var g = Ea.get(e);
            void 0 !== g ? e = g : (g = w(C(e.replace(pa, "-$1").toLowerCase().replace(qa, "-ms-"))), Ea.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || x.call(B, d) ? u("" + f) : u(f + "px") : u(C(("" + f).trim()));
          }
          b ? (b = false, a.push(Fa, e, Ga, f)) : a.push(Ha, e, Ga, f);
        }
      }
      b || a.push(E);
    }
    var H = w(" ");
    var I = w('="');
    var E = w('"');
    var Ja = w('=""');
    function J(a, b, c, d) {
      switch (c) {
        case "style":
          Ia(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = z.hasOwnProperty(c) ? z[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = u(b.attributeName);
          switch (b.type) {
            case 3:
              d && a.push(H, c, Ja);
              break;
            case 4:
              true === d ? a.push(H, c, Ja) : false !== d && a.push(H, c, I, u(C(d)), E);
              break;
            case 5:
              isNaN(d) || a.push(H, c, I, u(C(d)), E);
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(H, c, I, u(C(d)), E);
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(H, c, I, u(C(d)), E);
          }
        } else if (ia(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(H, u(c), I, u(C(d)), E);
        }
      }
    }
    var K = w(">");
    var Ka = w("/>");
    function L(a, b, c) {
      if (null != b) {
        if (null != c) throw Error(k(60));
        if ("object" !== typeof b || !("__html" in b)) throw Error(k(61));
        b = b.__html;
        null !== b && void 0 !== b && a.push(u("" + b));
      }
    }
    function La(a) {
      var b = "";
      aa.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    var Ma = w(' selected=""');
    function Na(a, b, c, d) {
      a.push(M(c));
      var f = c = null, e;
      for (e in b) if (x.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            J(a, d, e, g);
        }
      }
      a.push(K);
      L(a, f, c);
      return "string" === typeof c ? (a.push(u(C(c))), null) : c;
    }
    var Oa = w("\n");
    var Pa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Qa = /* @__PURE__ */ new Map();
    function M(a) {
      var b = Qa.get(a);
      if (void 0 === b) {
        if (!Pa.test(a)) throw Error(k(65, a));
        b = w("<" + a);
        Qa.set(a, b);
      }
      return b;
    }
    var Ra = w("<!DOCTYPE html>");
    function Sa(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(M("select"));
          var e = null, g = null;
          for (r in c) if (x.call(c, r)) {
            var h = c[r];
            if (null != h) switch (r) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                J(a, d, r, h);
            }
          }
          a.push(K);
          L(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(M("option"));
          var m = h = null, q = null;
          var r = null;
          for (e in c) if (x.call(c, e)) {
            var v = c[e];
            if (null != v) switch (e) {
              case "children":
                h = v;
                break;
              case "selected":
                q = v;
                break;
              case "dangerouslySetInnerHTML":
                r = v;
                break;
              case "value":
                m = v;
              default:
                J(a, d, e, v);
            }
          }
          if (null != g) if (c = null !== m ? "" + m : La(h), ra(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(Ma);
              break;
            }
          }
          else "" + g === c && a.push(Ma);
          else q && a.push(Ma);
          a.push(K);
          L(a, r, h);
          return h;
        case "textarea":
          a.push(M("textarea"));
          r = g = e = null;
          for (h in c) if (x.call(c, h) && (m = c[h], null != m)) switch (h) {
            case "children":
              r = m;
              break;
            case "value":
              e = m;
              break;
            case "defaultValue":
              g = m;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(k(91));
            default:
              J(a, d, h, m);
          }
          null === e && null !== g && (e = g);
          a.push(K);
          if (null != r) {
            if (null != e) throw Error(k(92));
            if (ra(r) && 1 < r.length) throw Error(k(93));
            e = "" + r;
          }
          "string" === typeof e && "\n" === e[0] && a.push(Oa);
          null !== e && a.push(u(C("" + e)));
          return null;
        case "input":
          a.push(M("input"));
          m = r = h = e = null;
          for (g in c) if (x.call(c, g) && (q = c[g], null != q)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(k(399, "input"));
            case "defaultChecked":
              m = q;
              break;
            case "defaultValue":
              h = q;
              break;
            case "checked":
              r = q;
              break;
            case "value":
              e = q;
              break;
            default:
              J(a, d, g, q);
          }
          null !== r ? J(
            a,
            d,
            "checked",
            r
          ) : null !== m && J(a, d, "checked", m);
          null !== e ? J(a, d, "value", e) : null !== h && J(a, d, "value", h);
          a.push(Ka);
          return null;
        case "menuitem":
          a.push(M("menuitem"));
          for (var A in c) if (x.call(c, A) && (e = c[A], null != e)) switch (A) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(k(400));
            default:
              J(a, d, A, e);
          }
          a.push(K);
          return null;
        case "title":
          a.push(M("title"));
          e = null;
          for (v in c) if (x.call(c, v) && (g = c[v], null != g)) switch (v) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(k(434));
            default:
              J(a, d, v, g);
          }
          a.push(K);
          return e;
        case "listing":
        case "pre":
          a.push(M(b));
          g = e = null;
          for (m in c) if (x.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              J(a, d, m, h);
          }
          a.push(K);
          if (null != g) {
            if (null != e) throw Error(k(60));
            if ("object" !== typeof g || !("__html" in g)) throw Error(k(61));
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push(Oa, u(c)) : a.push(u("" + c)));
          }
          "string" === typeof e && "\n" === e[0] && a.push(Oa);
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(M(b));
          for (var F in c) if (x.call(c, F) && (e = c[F], null != e)) switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(k(399, b));
            default:
              J(a, d, F, e);
          }
          a.push(Ka);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Na(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push(Ra), Na(a, c, b, d);
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return Na(a, c, b, d);
          a.push(M(b));
          g = e = null;
          for (q in c) if (x.call(c, q) && (h = c[q], null != h)) switch (q) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              Ia(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ia(q) && "function" !== typeof h && "symbol" !== typeof h && a.push(H, u(q), I, u(C(h)), E);
          }
          a.push(K);
          L(a, g, e);
          return e;
      }
    }
    var Ta = w("</");
    var Ua = w(">");
    var Va = w('<template id="');
    var Wa = w('"></template>');
    var Xa = w("<!--$-->");
    var Ya = w('<!--$?--><template id="');
    var Za = w('"></template>');
    var $a = w("<!--$!-->");
    var ab = w("<!--/$-->");
    var bb = w("<template");
    var cb = w('"');
    var db = w(' data-dgst="');
    w(' data-msg="');
    w(' data-stck="');
    var eb = w("></template>");
    function fb(a, b, c) {
      p(a, Ya);
      if (null === c) throw Error(k(395));
      p(a, c);
      return t(a, Za);
    }
    var gb = w('<div hidden id="');
    var hb = w('">');
    var ib = w("</div>");
    var jb = w('<svg aria-hidden="true" style="display:none" id="');
    var kb = w('">');
    var lb = w("</svg>");
    var mb = w('<math aria-hidden="true" style="display:none" id="');
    var nb = w('">');
    var ob = w("</math>");
    var pb = w('<table hidden id="');
    var qb = w('">');
    var rb = w("</table>");
    var sb = w('<table hidden><tbody id="');
    var tb = w('">');
    var ub = w("</tbody></table>");
    var vb = w('<table hidden><tr id="');
    var wb = w('">');
    var xb = w("</tr></table>");
    var yb = w('<table hidden><colgroup id="');
    var zb = w('">');
    var Ab = w("</colgroup></table>");
    function Bb(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return p(a, gb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, hb);
        case 2:
          return p(a, jb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, kb);
        case 3:
          return p(a, mb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, nb);
        case 4:
          return p(a, pb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, qb);
        case 5:
          return p(a, sb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, tb);
        case 6:
          return p(a, vb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, wb);
        case 7:
          return p(
            a,
            yb
          ), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, zb);
        default:
          throw Error(k(397));
      }
    }
    function Cb(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return t(a, ib);
        case 2:
          return t(a, lb);
        case 3:
          return t(a, ob);
        case 4:
          return t(a, rb);
        case 5:
          return t(a, ub);
        case 6:
          return t(a, xb);
        case 7:
          return t(a, Ab);
        default:
          throw Error(k(397));
      }
    }
    var Db = w('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var Eb = w('$RS("');
    var Gb = w('","');
    var Hb = w('")</script>');
    var Ib = w('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Jb = w('$RC("');
    var Kb = w('","');
    var Lb = w('")</script>');
    var Mb = w('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("');
    var Nb = w('$RX("');
    var Ob = w('"');
    var Pb = w(")</script>");
    var Qb = w(",");
    var Rb = /[<\u2028\u2029]/g;
    function Sb(a) {
      return JSON.stringify(a).replace(Rb, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var N = Object.assign;
    var Tb = Symbol.for("react.element");
    var Ub = Symbol.for("react.portal");
    var Vb = Symbol.for("react.fragment");
    var Wb = Symbol.for("react.strict_mode");
    var Xb = Symbol.for("react.profiler");
    var Yb = Symbol.for("react.provider");
    var Zb = Symbol.for("react.context");
    var $b = Symbol.for("react.forward_ref");
    var ac = Symbol.for("react.suspense");
    var bc = Symbol.for("react.suspense_list");
    var cc = Symbol.for("react.memo");
    var dc = Symbol.for("react.lazy");
    var ec = Symbol.for("react.scope");
    var fc = Symbol.for("react.debug_trace_mode");
    var gc = Symbol.for("react.legacy_hidden");
    var hc = Symbol.for("react.default_value");
    var ic = Symbol.iterator;
    function jc(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Vb:
          return "Fragment";
        case Ub:
          return "Portal";
        case Xb:
          return "Profiler";
        case Wb:
          return "StrictMode";
        case ac:
          return "Suspense";
        case bc:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Zb:
          return (a.displayName || "Context") + ".Consumer";
        case Yb:
          return (a._context.displayName || "Context") + ".Provider";
        case $b:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case cc:
          return b = a.displayName || null, null !== b ? b : jc(a.type) || "Memo";
        case dc:
          b = a._payload;
          a = a._init;
          try {
            return jc(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var kc = {};
    function lc(a, b) {
      a = a.contextTypes;
      if (!a) return kc;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var O = null;
    function P(a, b) {
      if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error(k(401));
        } else {
          if (null === c) throw Error(k(401));
          P(a, c);
        }
        b.context._currentValue = b.value;
      }
    }
    function mc(a) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      null !== a && mc(a);
    }
    function nc(a) {
      var b = a.parent;
      null !== b && nc(b);
      a.context._currentValue = a.value;
    }
    function oc(a, b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      if (null === a) throw Error(k(402));
      a.depth === b.depth ? P(a, b) : oc(a, b);
    }
    function pc42(a, b) {
      var c = b.parent;
      if (null === c) throw Error(k(402));
      a.depth === c.depth ? P(a, c) : pc42(a, c);
      b.context._currentValue = b.value;
    }
    function Q(a) {
      var b = O;
      b !== a && (null === b ? nc(a) : null === a ? mc(b) : b.depth === a.depth ? P(b, a) : b.depth > a.depth ? oc(b, a) : pc42(b, a), O = a);
    }
    var qc = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function rc(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = qc;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : N({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && qc.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = N({}, e, h)) : N(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var sc = { id: 1, overflow: "" };
    function tc(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - uc(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - uc(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - uc(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var uc = Math.clz32 ? Math.clz32 : vc;
    var wc = Math.log;
    var xc = Math.LN2;
    function vc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (wc(a) / xc | 0) | 0;
    }
    function yc(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var zc = "function" === typeof Object.is ? Object.is : yc;
    var R = null;
    var Ac = null;
    var Bc = null;
    var S = null;
    var T = false;
    var Cc = false;
    var U = 0;
    var V = null;
    var Dc = 0;
    function W() {
      if (null === R) throw Error(k(321));
      return R;
    }
    function Ec() {
      if (0 < Dc) throw Error(k(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function Fc() {
      null === S ? null === Bc ? (T = false, Bc = S = Ec()) : (T = true, S = Bc) : null === S.next ? (T = false, S = S.next = Ec()) : (T = true, S = S.next);
      return S;
    }
    function Gc() {
      Ac = R = null;
      Cc = false;
      Bc = null;
      Dc = 0;
      S = V = null;
    }
    function Hc(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Ic(a, b, c) {
      R = W();
      S = Fc();
      if (T) {
        var d = S.queue;
        b = d.dispatch;
        if (null !== V && (c = V.get(d), void 0 !== c)) {
          V.delete(d);
          d = S.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          S.memoizedState = d;
          return [d, b];
        }
        return [S.memoizedState, b];
      }
      a = a === Hc ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      S.memoizedState = a;
      a = S.queue = { last: null, dispatch: null };
      a = a.dispatch = Jc.bind(null, R, a);
      return [S.memoizedState, a];
    }
    function Kc(a, b) {
      R = W();
      S = Fc();
      b = void 0 === b ? null : b;
      if (null !== S) {
        var c = S.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!zc(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      S.memoizedState = [a, b];
      return a;
    }
    function Jc(a, b, c) {
      if (25 <= Dc) throw Error(k(301));
      if (a === R) if (Cc = true, a = { action: c, next: null }, null === V && (V = /* @__PURE__ */ new Map()), c = V.get(b), void 0 === c) V.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function Lc() {
      throw Error(k(394));
    }
    function Mc() {
    }
    var Oc = { readContext: function(a) {
      return a._currentValue;
    }, useContext: function(a) {
      W();
      return a._currentValue;
    }, useMemo: Kc, useReducer: Ic, useRef: function(a) {
      R = W();
      S = Fc();
      var b = S.memoizedState;
      return null === b ? (a = { current: a }, S.memoizedState = a) : b;
    }, useState: function(a) {
      return Ic(Hc, a);
    }, useInsertionEffect: Mc, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return Kc(function() {
        return a;
      }, b);
    }, useImperativeHandle: Mc, useEffect: Mc, useDebugValue: Mc, useDeferredValue: function(a) {
      W();
      return a;
    }, useTransition: function() {
      W();
      return [false, Lc];
    }, useId: function() {
      var a = Ac.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - uc(a) - 1)).toString(32) + b;
      var c = Nc;
      if (null === c) throw Error(k(404));
      b = U++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      W();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error(k(407));
      return c();
    } };
    var Nc = null;
    var Pc = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Qc(a) {
      console.error(a);
      return null;
    }
    function X() {
    }
    function Rc(a, b, c, d, f, e, g, h, m) {
      var q = [], r = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: r, pingedTasks: q, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? Qc : f, onAllReady: void 0 === e ? X : e, onShellReady: void 0 === g ? X : g, onShellError: void 0 === h ? X : h, onFatalError: void 0 === m ? X : m };
      c = Sc(b, 0, null, c, false, false);
      c.parentFlushed = true;
      a = Tc(b, a, null, c, r, kc, null, sc);
      q.push(a);
      return b;
    }
    function Tc(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var m = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(m);
        1 === b2.length && Uc(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(m);
      return m;
    }
    function Sc(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function Y(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function Vc(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, da(a.destination, b)) : (a.status = 1, a.fatalError = b);
    }
    function Wc(a, b, c, d, f) {
      R = {};
      Ac = b;
      U = 0;
      for (a = c(d, f); Cc; ) Cc = false, U = 0, Dc += 1, S = null, a = c(d, f);
      Gc();
      return a;
    }
    function Xc(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error(k(108, jc(d) || "Unknown", h));
          d = N({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, f);
        b.legacyContext = g;
      } else Z(a, b, f);
    }
    function Yc(a, b) {
      if (a && a.defaultProps) {
        b = N({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Zc(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = lc(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue : f);
        rc(e, c, d, f);
        Xc(a, b, e, c);
      } else {
        e = lc(c, b.legacyContext);
        f = Wc(a, b, c, d, e);
        var g = 0 !== U;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) rc(f, c, d, e), Xc(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = tc(d, 1, 0);
          try {
            Z(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else Z(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = Sa(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = Ba(g, c, d);
        $c(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push(Ta, u(c), Ua);
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case gc:
          case fc:
          case Wb:
          case Xb:
          case Vb:
            Z(a, b, d.children);
            return;
          case bc:
            Z(a, b, d.children);
            return;
          case ec:
            throw Error(k(343));
          case ac:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m = Sc(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(m);
              f.lastPushedText = false;
              var q = Sc(a, 0, null, f.formatContext, false, false);
              q.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = q;
              try {
                if ($c(
                  a,
                  b,
                  d
                ), q.lastPushedText && q.textEmbedded && q.chunks.push(Ca), q.status = 1, ad(h, q), 0 === h.pendingTasks) break a;
              } catch (r) {
                q.status = 4, h.forceClientRender = true, h.errorDigest = Y(a, r);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Tc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case $b:
            d = Wc(a, b, c.render, d, f);
            if (0 !== U) {
              c = b.treeContext;
              b.treeContext = tc(c, 1, 0);
              try {
                Z(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else Z(a, b, d);
            return;
          case cc:
            c = c.type;
            d = Yc(c, d);
            Zc(a, b, c, d, f);
            return;
          case Yb:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue;
            c._currentValue = d;
            g = O;
            O = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            Z(a, b, f);
            a = O;
            if (null === a) throw Error(k(403));
            d = a.parentValue;
            a.context._currentValue = d === hc ? a.context._defaultValue : d;
            a = O = a.parent;
            b.context = a;
            return;
          case Zb:
            d = d.children;
            d = d(c._currentValue);
            Z(a, b, d);
            return;
          case dc:
            f = c._init;
            c = f(c._payload);
            d = Yc(c, d);
            Zc(a, b, c, d, void 0);
            return;
        }
        throw Error(k(
          130,
          null == c ? c : typeof c,
          ""
        ));
      }
    }
    function Z(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Tb:
            Zc(a, b, c.type, c.props, c.ref);
            return;
          case Ub:
            throw Error(k(257));
          case dc:
            var d = c._init;
            c = d(c._payload);
            Z(a, b, c);
            return;
        }
        if (ra(c)) {
          bd(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = ic && c[ic] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            bd(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error(k(31, "[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a));
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Da(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Da(b.blockedSegment.chunks, "" + c, a.responseState, d.lastPushedText));
    }
    function bd(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = tc(e, d, f);
        try {
          $c(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function $c(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return Z(a, b, c);
      } catch (m) {
        if (Gc(), "object" === typeof m && null !== m && "function" === typeof m.then) {
          c = m;
          var g = b.blockedSegment, h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Tc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          Q(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, Q(e), m;
      }
    }
    function cd(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      dd(this, b, a);
    }
    function ed(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.close())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, a = void 0 === c ? Error(k(432)) : c, d.errorDigest = b.onError(a), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return ed(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (d = b.onAllReady, d()));
    }
    function ad(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && ad(a, c);
      } else a.completedSegments.push(b);
    }
    function dd(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error(k(389));
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = X, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && ad(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(cd, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (ad(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Uc(a) {
      if (2 !== a.status) {
        var b = O, c = Pc.current;
        Pc.current = Oc;
        var d = Nc;
        Nc = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, m = g.blockedSegment;
            if (0 === m.status) {
              Q(g.context);
              try {
                Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(Ca), g.abortSet.delete(g), m.status = 1, dd(h, g.blockedBoundary, m);
              } catch (G) {
                if (Gc(), "object" === typeof G && null !== G && "function" === typeof G.then) {
                  var q = g.ping;
                  G.then(q, q);
                } else {
                  g.abortSet.delete(g);
                  m.status = 4;
                  var r = g.blockedBoundary, v = G, A = Y(h, v);
                  null === r ? Vc(h, v) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = true, r.errorDigest = A, r.parentFlushed && h.clientRenderedBoundaries.push(r)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var F = h.onAllReady;
                    F();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && fd(a, a.destination);
        } catch (G) {
          Y(a, G), Vc(a, G);
        } finally {
          Nc = d, Pc.current = c, c === Oc && Q(b);
        }
      }
    }
    function gd(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          p(b, Va);
          p(b, a.placeholderPrefix);
          a = u(d.toString(16));
          p(b, a);
          return t(b, Wa);
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) p(b, d[e]);
            f = hd(a, b, f);
          }
          for (; e < d.length - 1; e++) p(b, d[e]);
          e < d.length && (f = t(b, d[e]));
          return f;
        default:
          throw Error(k(390));
      }
    }
    function hd(a, b, c) {
      var d = c.boundary;
      if (null === d) return gd(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) d = d.errorDigest, t(b, $a), p(b, bb), d && (p(b, db), p(b, u(C(d))), p(b, cb)), t(b, eb), gd(a, b, c);
      else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = w(f.boundaryPrefix + e.toString(16));
        d = d.id = f;
        fb(b, a.responseState, d);
        gd(a, b, c);
      } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), fb(b, a.responseState, d.id), gd(a, b, c);
      else {
        t(b, Xa);
        c = d.completedSegments;
        if (1 !== c.length) throw Error(k(391));
        hd(a, b, c[0]);
      }
      return t(b, ab);
    }
    function id(a, b, c) {
      Bb(b, a.responseState, c.formatContext, c.id);
      hd(a, b, c);
      return Cb(b, c.formatContext);
    }
    function jd(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) kd(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      p(b, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? p(b, Jb) : (a.sentCompleteBoundaryFunction = true, p(b, Ib));
      if (null === d) throw Error(k(395));
      c = u(c.toString(16));
      p(b, d);
      p(b, Kb);
      p(b, a.segmentPrefix);
      p(b, c);
      return t(b, Lb);
    }
    function kd(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error(k(392));
        return id(a, b, d);
      }
      id(a, b, d);
      a = a.responseState;
      p(b, a.startInlineScript);
      a.sentCompleteSegmentFunction ? p(b, Eb) : (a.sentCompleteSegmentFunction = true, p(b, Db));
      p(b, a.segmentPrefix);
      f = u(f.toString(16));
      p(b, f);
      p(b, Gb);
      p(b, a.placeholderPrefix);
      p(b, f);
      return t(b, Hb);
    }
    function fd(a, b) {
      l = new Uint8Array(512);
      n = 0;
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          hd(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) p(b, d[c]);
          c < d.length && t(b, d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, m = g.id, q = g.errorDigest, r = g.errorMessage, v = g.errorComponentStack;
          p(d, h.startInlineScript);
          h.sentClientRenderFunction ? p(d, Nb) : (h.sentClientRenderFunction = true, p(
            d,
            Mb
          ));
          if (null === m) throw Error(k(395));
          p(d, m);
          p(d, Ob);
          if (q || r || v) p(d, Qb), p(d, u(Sb(q || "")));
          if (r || v) p(d, Qb), p(d, u(Sb(r || "")));
          v && (p(d, Qb), p(d, u(Sb(v))));
          if (!t(d, Pb)) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var A = a.completedBoundaries;
        for (e = 0; e < A.length; e++) if (!jd(a, b, A[e])) {
          a.destination = null;
          e++;
          A.splice(0, e);
          return;
        }
        A.splice(0, e);
        ba(b);
        l = new Uint8Array(512);
        n = 0;
        var F = a.partialBoundaries;
        for (e = 0; e < F.length; e++) {
          var G = F[e];
          a: {
            f = a;
            g = b;
            var ma = G.completedSegments;
            for (h = 0; h < ma.length; h++) if (!kd(
              f,
              g,
              G,
              ma[h]
            )) {
              h++;
              ma.splice(0, h);
              var Fb = false;
              break a;
            }
            ma.splice(0, h);
            Fb = true;
          }
          if (!Fb) {
            a.destination = null;
            e++;
            F.splice(0, e);
            return;
          }
        }
        F.splice(0, e);
        var na = a.completedBoundaries;
        for (e = 0; e < na.length; e++) if (!jd(a, b, na[e])) {
          a.destination = null;
          e++;
          na.splice(0, e);
          return;
        }
        na.splice(0, e);
      } finally {
        ba(b), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.close();
      }
    }
    function ld(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return ed(c2, a, b);
        });
        c.clear();
        null !== a.destination && fd(a, a.destination);
      } catch (d) {
        Y(a, d), Vc(a, d);
      }
    }
    exports.renderToReadableStream = function(a, b) {
      return new Promise(function(c, d) {
        var f, e, g = new Promise(function(a2, b2) {
          e = a2;
          f = b2;
        }), h = Rc(a, za(b ? b.identifierPrefix : void 0, b ? b.nonce : void 0, b ? b.bootstrapScriptContent : void 0, b ? b.bootstrapScripts : void 0, b ? b.bootstrapModules : void 0), Aa(b ? b.namespaceURI : void 0), b ? b.progressiveChunkSize : void 0, b ? b.onError : void 0, e, function() {
          var a2 = new ReadableStream({ type: "bytes", pull: function(a3) {
            if (1 === h.status) h.status = 2, da(a3, h.fatalError);
            else if (2 !== h.status && null === h.destination) {
              h.destination = a3;
              try {
                fd(h, a3);
              } catch (A) {
                Y(h, A), Vc(h, A);
              }
            }
          }, cancel: function() {
            ld(h);
          } }, { highWaterMark: 0 });
          a2.allReady = g;
          c(a2);
        }, function(a2) {
          g.catch(function() {
          });
          d(a2);
        }, f);
        if (b && b.signal) {
          var m = b.signal, q = function() {
            ld(h, m.reason);
            m.removeEventListener("abort", q);
          };
          m.addEventListener("abort", q);
        }
        Uc(h);
      });
    };
    exports.version = "18.3.1";
  }
});

// node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/server.browser.js"(exports) {
    "use strict";
    var l;
    var s;
    if (true) {
      l = require_react_dom_server_legacy_browser_production_min();
      s = require_react_dom_server_browser_production_min();
    } else {
      l = null;
      s = null;
    }
    exports.version = l.version;
    exports.renderToString = l.renderToString;
    exports.renderToStaticMarkup = l.renderToStaticMarkup;
    exports.renderToNodeStream = l.renderToNodeStream;
    exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports.renderToReadableStream = s.renderToReadableStream;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/createReadableWrapper.js
var require_createReadableWrapper = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/createReadableWrapper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createReadableWrapper = void 0;
    var orchestrateChunks_1 = require_orchestrateChunks();
    function createReadableWrapper(readableFromReact, clearTimeouts, doNotClosePromise) {
      const streamOperations = {
        operations: null
      };
      let controllerOfUserStream;
      let onEnded;
      const streamEnd = new Promise((r) => {
        onEnded = () => r();
      });
      const readableForUser = new ReadableStream({
        start(controller) {
          controllerOfUserStream = controller;
          onReady(onEnded);
        }
      });
      const { injectToStream, onReactWrite, onBeforeEnd, hasStreamEnded } = (0, orchestrateChunks_1.orchestrateChunks)(streamOperations, doNotClosePromise);
      return { readableForUser, streamEnd, injectToStream, hasStreamEnded };
      async function onReady(onEnded2) {
        streamOperations.operations = {
          writeChunk(chunk2) {
            controllerOfUserStream.enqueue(encodeForWebStream2(chunk2));
          },
          flush: null
        };
        const reader = readableFromReact.getReader();
        while (true) {
          let result;
          try {
            result = await reader.read();
          } catch (err) {
            controllerOfUserStream.close();
            throw err;
          }
          const { value, done } = result;
          if (done) {
            break;
          }
          onReactWrite(value);
        }
        clearTimeouts();
        await onBeforeEnd();
        controllerOfUserStream.close();
        onEnded2();
      }
    }
    exports.createReadableWrapper = createReadableWrapper;
    var encoder2;
    function encodeForWebStream2(thing) {
      if (!encoder2) {
        encoder2 = new TextEncoder();
      }
      if (typeof thing === "string") {
        return encoder2.encode(thing);
      }
      return thing;
    }
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/renderToWebStream.js
var require_renderToWebStream = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/renderToStream/renderToWebStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderToWebStream = void 0;
    var server_browser_1 = require_server_browser();
    var createReadableWrapper_1 = require_createReadableWrapper();
    var common_1 = require_common();
    async function renderToWebStream(element, disable, options, doNotClosePromise, setAbortFn, clearTimeouts) {
      var _a;
      (0, common_1.debugFlow)("creating Web Stream Pipe");
      const controller = new AbortController();
      setAbortFn(() => {
        controller.abort();
      });
      let didError = false;
      let firstErr = null;
      let reactBug = null;
      const onError = (err) => {
        didError = true;
        firstErr = firstErr || err;
        (0, common_1.afterReactBugCatch)(() => {
          var _a2;
          if (err !== reactBug) {
            (_a2 = options.onBoundaryError) === null || _a2 === void 0 ? void 0 : _a2.call(options, err);
          }
        });
      };
      const renderToReadableStream = (_a = options.renderToReadableStream) !== null && _a !== void 0 ? _a : server_browser_1.renderToReadableStream;
      if (!options.renderToReadableStream) {
        (0, common_1.assertReactImport)(renderToReadableStream, "renderToReadableStream");
      }
      const readableOriginal = await renderToReadableStream(element, Object.assign({ onError, signal: controller.signal }, options.streamOptions));
      const { allReady } = readableOriginal;
      let promiseResolved = false;
      allReady.catch((err) => {
        (0, common_1.debugFlow)("react bug");
        didError = true;
        firstErr = firstErr || err;
        reactBug = err;
        if (reactBug !== firstErr || promiseResolved) {
          console.error(reactBug);
        }
      });
      if (didError)
        throw firstErr;
      if (disable)
        await allReady;
      if (didError)
        throw firstErr;
      const { readableForUser, streamEnd, injectToStream, hasStreamEnded } = (0, createReadableWrapper_1.createReadableWrapper)(readableOriginal, clearTimeouts, doNotClosePromise);
      promiseResolved = true;
      return {
        readable: readableForUser,
        pipe: null,
        abort: controller.abort,
        streamEnd: (0, common_1.wrapStreamEnd)(streamEnd, didError),
        injectToStream,
        hasStreamEnded
      };
    }
    exports.renderToWebStream = renderToWebStream;
  }
});

// node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/index.node-and-web.js
var require_index_node_and_web = __commonJS({
  "node_modules/.pnpm/react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-streaming/dist/cjs/server/index.node-and-web.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_server(), exports);
    var renderToNodeStream_1 = require_renderToNodeStream();
    var renderToStream_1 = require_renderToStream();
    (0, renderToStream_1.renderToNodeStream_set)(renderToNodeStream_1.renderToNodeStream);
    var renderToWebStream_1 = require_renderToWebStream();
    var renderToStream_2 = require_renderToStream();
    (0, renderToStream_2.renderToWebStream_set)(renderToWebStream_1.renderToWebStream);
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/getGlobalObject.js
function getGlobalObject2(key, defaultValue2) {
  const globalObjectsAll = globalThis[projectKey2] = globalThis[projectKey2] || {};
  const globalObject12 = globalObjectsAll[key] = globalObjectsAll[key] || defaultValue2;
  return globalObject12;
}
var projectKey2;
var init_getGlobalObject2 = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/getGlobalObject.js"() {
    projectKey2 = "_vike_react";
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/hooks/usePageContext.js
function PageContextProvider({ pageContext, children }) {
  const { reactContext } = globalObject3;
  return import_react2.default.createElement(reactContext.Provider, { value: pageContext }, children);
}
function usePageContext() {
  const { reactContext } = globalObject3;
  const pageContext = (0, import_react2.useContext)(reactContext);
  return pageContext;
}
var import_react2, globalObject3;
var init_usePageContext = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/hooks/usePageContext.js"() {
    import_react2 = __toESM(require_react(), 1);
    init_getGlobalObject2();
    globalObject3 = getGlobalObject2("PageContextProvider.ts", {
      reactContext: import_react2.default.createContext(void 0)
    });
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/isCallable.js
function isCallable2(thing) {
  return thing instanceof Function || typeof thing === "function";
}
var init_isCallable2 = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/isCallable.js"() {
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/hooks/useConfig/configsCumulative.js
var configsCumulative;
var init_configsCumulative = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/hooks/useConfig/configsCumulative.js"() {
    configsCumulative = ["Head", "bodyAttributes", "htmlAttributes"];
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/includes.js
function includes(values, x) {
  return values.includes(x);
}
var init_includes = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/includes.js"() {
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/integration/getHeadSetting.js
function getHeadSetting(configName, pageContext) {
  const valFromUseConfig = pageContext._configFromHook?.[configName];
  const valFromConfig = pageContext.config[configName];
  const getCallable = (val) => isCallable2(val) ? val(pageContext) : val;
  if (!includes(configsCumulative, configName)) {
    if (valFromUseConfig !== void 0)
      return valFromUseConfig;
    return getCallable(valFromConfig);
  } else {
    return [
      //
      ...(valFromConfig ?? []).map(getCallable),
      ...valFromUseConfig ?? []
    ];
  }
}
var init_getHeadSetting = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/integration/getHeadSetting.js"() {
    init_isCallable2();
    init_configsCumulative();
    init_includes();
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/integration/getPageElement.js
function getPageElement(pageContext) {
  const { Page: Page5, config: { Loading } } = pageContext;
  let page = Page5 ? import_react3.default.createElement(Page5, null) : null;
  const addSuspense = (el) => {
    if (!Loading?.layout)
      return el;
    return import_react3.default.createElement(import_react3.Suspense, { fallback: import_react3.default.createElement(Loading.layout, null) }, page);
  };
  page = addSuspense(page);
  [
    // Inner wrapping
    ...pageContext.config.Layout || [],
    // Outer wrapping
    ...pageContext.config.Wrapper || []
  ].forEach((Wrap) => {
    page = import_react3.default.createElement(Wrap, null, page);
    page = addSuspense(page);
  });
  page = import_react3.default.createElement(PageContextProvider, { pageContext }, page);
  let renderPromiseResolve;
  let renderPromise = new Promise((r) => renderPromiseResolve = r);
  page = import_react3.default.createElement(RenderPromiseProvider, { renderPromiseResolve }, page);
  if (pageContext.config.reactStrictMode !== false) {
    page = import_react3.default.createElement(import_react3.default.StrictMode, null, page);
  }
  return { page, renderPromise };
}
function RenderPromiseProvider({ children, renderPromiseResolve }) {
  (0, import_react3.useEffect)(renderPromiseResolve);
  return children;
}
var import_react3;
var init_getPageElement = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/integration/getPageElement.js"() {
    import_react3 = __toESM(require_react(), 1);
    init_usePageContext();
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/isReactElement.js
function isReactElement(value) {
  return (0, import_react4.isValidElement)(value) || Array.isArray(value);
}
var import_react4;
var init_isReactElement = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/isReactElement.js"() {
    import_react4 = __toESM(require_react(), 1);
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/getTagAttributesString.js
function getTagAttributesString(tagAttributes) {
  const tagAttributesString = Object.entries(tagAttributes).filter(([_key, value]) => value !== false && value !== null && value !== void 0).map(([key, value]) => `${ensureIsValidAttributeName(key)}=${JSON.stringify(String(value))}`).join(" ");
  if (tagAttributesString.length === 0)
    return "";
  return ` ${tagAttributesString}`;
}
function ensureIsValidAttributeName(str) {
  if (/^[a-z][a-z0-9\-]*$/i.test(str) && !str.endsWith("-"))
    return str;
  throw new Error(`Invalid HTML tag attribute name ${JSON.stringify(str)}`);
}
var init_getTagAttributesString = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/getTagAttributesString.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/humanizeTime.js
function humanizeTime(milliseconds) {
  const seconds = milliseconds / 1e3;
  if (seconds < 120) {
    const n = round(seconds);
    return `${n} second${plural(n)}`;
  }
  {
    const minutes = seconds / 60;
    const n = round(minutes);
    return `${n} minute${plural(n)}`;
  }
}
function round(n) {
  let rounded = n.toFixed(1);
  if (rounded.endsWith(".0"))
    rounded = rounded.slice(0, -2);
  return rounded;
}
function plural(n) {
  return n === "1" ? "" : "s";
}
var init_humanizeTime = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/humanizeTime.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/hooks/executeHook.js
function isUserHookError(err) {
  if (!isObject(err))
    return false;
  return globalObject4.userHookErrors.get(err) ?? false;
}
function executeHook(hookFnCaller, hook, pageContext) {
  const { hookName, hookFilePath, hookTimeout: { error: timeoutErr, warning: timeoutWarn } } = hook;
  let resolve;
  let reject;
  const promise = new Promise((resolve_, reject_) => {
    resolve = (ret) => {
      clearTimeouts();
      resolve_(ret);
    };
    reject = (err) => {
      clearTimeouts();
      reject_(err);
    };
  });
  const clearTimeouts = () => {
    if (currentTimeoutWarn)
      clearTimeout(currentTimeoutWarn);
    if (currentTimeoutErr)
      clearTimeout(currentTimeoutErr);
  };
  const currentTimeoutWarn = isNotDisabled(timeoutWarn) && setTimeout(() => {
    assertWarning2(false, `The ${hookName}() hook defined by ${hookFilePath} is slow: it's taking more than ${humanizeTime(timeoutWarn)} (https://vike.dev/hooksTimeout)`, { onlyOnce: false });
  }, timeoutWarn);
  const currentTimeoutErr = isNotDisabled(timeoutErr) && setTimeout(() => {
    const err = getProjectError(`The ${hookName}() hook defined by ${hookFilePath} timed out: it didn't finish after ${humanizeTime(timeoutErr)} (https://vike.dev/hooksTimeout)`);
    reject(err);
  }, timeoutErr);
  (async () => {
    try {
      providePageContext(pageContext);
      const ret = await hookFnCaller();
      resolve(ret);
    } catch (err) {
      if (isObject(err)) {
        globalObject4.userHookErrors.set(err, { hookName, hookFilePath });
      }
      reject(err);
    }
  })();
  return promise;
}
function isNotDisabled(timeout) {
  return !!timeout && timeout !== Infinity;
}
function providePageContext(pageContext) {
  globalObject4.pageContext = pageContext;
  Promise.resolve().then(() => {
    globalObject4.pageContext = null;
  });
}
var globalObject4;
var init_executeHook = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/hooks/executeHook.js"() {
    init_assert();
    init_getGlobalObject();
    init_humanizeTime();
    init_isObject();
    globalObject4 = getGlobalObject("utils/executeHook.ts", {
      userHookErrors: /* @__PURE__ */ new WeakMap(),
      pageContext: null
    });
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageContext.js
var init_getPageContext = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageContext.js"() {
    init_executeHook();
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/callCumulativeHooks.js
async function callCumulativeHooks(values, pageContext) {
  if (!values)
    return [];
  const valuesPromises = values.map((val) => {
    if (typeof val === "function") {
      providePageContext(pageContext);
      return val(pageContext);
    } else {
      return val;
    }
  });
  const valuesResolved = await Promise.all(valuesPromises);
  return valuesResolved;
}
var init_callCumulativeHooks = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/utils/callCumulativeHooks.js"() {
    init_getPageContext();
  }
});

// node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/integration/onRenderHtml.js
async function getPageHtml(pageContext) {
  let pageHtml;
  if (!pageContext.Page) {
    pageHtml = "";
  } else {
    const { page } = getPageElement(pageContext);
    const { stream, streamIsRequired } = pageContext.config;
    if (!stream && !streamIsRequired) {
      const pageHtmlString = (0, import_server.renderToString)(page);
      pageContext.pageHtmlString = pageHtmlString;
      pageHtml = dangerouslySkipEscape(pageHtmlString);
    } else {
      const disable = stream === false ? true : void 0;
      const pageHtmlStream = await (0, import_server2.renderToStream)(page, {
        webStream: typeof stream === "string" ? stream === "web" : void 0,
        userAgent: pageContext.headers?.["user-agent"] || // TODO/eventually: remove old way of acccessing the User Agent header.
        // @ts-ignore
        pageContext.userAgent,
        disable
      });
      pageContext.pageHtmlStream = pageHtmlStream;
      pageHtml = pageHtmlStream;
    }
  }
  await callCumulativeHooks(pageContext.config.onAfterRenderHtml, pageContext);
  return pageHtml;
}
function getHeadHtml(pageContext) {
  pageContext._headAlreadySet = true;
  const favicon = getHeadSetting("favicon", pageContext);
  const title = getHeadSetting("title", pageContext);
  const description = getHeadSetting("description", pageContext);
  const image = getHeadSetting("image", pageContext);
  const faviconTag = !favicon ? "" : escapeInject`<link rel="icon" href="${favicon}" />`;
  const titleTags = !title ? "" : escapeInject`<title>${title}</title><meta property="og:title" content="${title}" />`;
  const descriptionTags = !description ? "" : escapeInject`<meta name="description" content="${description}" /><meta property="og:description" content="${description}" />`;
  const imageTags = !image ? "" : escapeInject`<meta property="og:image" content="${image}"><meta name="twitter:card" content="summary_large_image">`;
  const viewportTag = dangerouslySkipEscape(getViewportTag(getHeadSetting("viewport", pageContext)));
  const headElementsHtml = dangerouslySkipEscape([
    // Added by +Head
    ...pageContext.config.Head ?? [],
    // Added by useConfig()
    ...pageContext._configFromHook?.Head ?? []
  ].filter((Head2) => Head2 !== null && Head2 !== void 0).map((Head2) => getHeadElementHtml(Head2, pageContext)).join("\n"));
  const headHtml = escapeInject`
    ${titleTags}
    ${viewportTag}
    ${headElementsHtml}
    ${faviconTag}
    ${descriptionTags}
    ${imageTags}
  `;
  return headHtml;
}
function getHeadElementHtml(Head2, pageContext) {
  let headElement;
  if (isReactElement(Head2)) {
    headElement = Head2;
  } else {
    headElement = import_react5.default.createElement(
      PageContextProvider,
      { pageContext },
      import_react5.default.createElement(Head2, null)
    );
  }
  if (pageContext.config.reactStrictMode !== false) {
    headElement = import_react5.default.createElement(import_react5.default.StrictMode, null, headElement);
  }
  return (0, import_server.renderToStaticMarkup)(headElement);
}
function getTagAttributes(pageContext) {
  let lang = getHeadSetting("lang", pageContext);
  if (lang === void 0)
    lang = "en";
  const bodyAttributes = mergeTagAttributesList(getHeadSetting("bodyAttributes", pageContext));
  const htmlAttributes = mergeTagAttributesList(getHeadSetting("htmlAttributes", pageContext));
  const bodyAttributesString = getTagAttributesString(bodyAttributes);
  const htmlAttributesString = getTagAttributesString({ ...htmlAttributes, lang: lang ?? htmlAttributes.lang });
  return { htmlAttributesString, bodyAttributesString };
}
function mergeTagAttributesList(tagAttributesList = []) {
  const tagAttributes = {};
  tagAttributesList.forEach((tagAttrs) => Object.assign(tagAttributes, tagAttrs));
  return tagAttributes;
}
function getViewportTag(viewport) {
  if (viewport === "responsive" || viewport === void 0) {
    return '<meta name="viewport" content="width=device-width,initial-scale=1">';
  }
  if (typeof viewport === "number") {
    return `<meta name="viewport" content="width=${viewport}">`;
  }
  return "";
}
function addEcosystemStamp() {
  const g = globalThis;
  g._isVikeReactApp = /* Don't set to true so that consumers do `!!globalThis._isVikeApp` instead of `globalThis._isVikeApp === true`.
  true
  */
  // We use an object so that we can eventually, in the future, add helpful information as needed. (E.g. the vike-react version.)
  {};
}
async function getBodyHtmlBoundary(pageContext) {
  const bodyHtmlBegin = dangerouslySkipEscape((await callCumulativeHooks(pageContext.config.bodyHtmlBegin, pageContext)).join(""));
  const bodyHtmlEnd = dangerouslySkipEscape((await callCumulativeHooks(pageContext.config.bodyHtmlEnd, pageContext)).join(""));
  return { bodyHtmlBegin, bodyHtmlEnd };
}
var import_react5, import_server, import_server2, onRenderHtml;
var init_onRenderHtml = __esm({
  "node_modules/.pnpm/vike-react@0.5.7_react-dom@18.3.1_react@18.3.1__react@18.3.1_vike@0.4.198_react-streaming@0.3_x7lwqpkcdwl4f5qehreiounmui/node_modules/vike-react/dist/integration/onRenderHtml.js"() {
    import_react5 = __toESM(require_react(), 1);
    import_server = __toESM(require_server_node(), 1);
    import_server2 = __toESM(require_index_node_and_web(), 1);
    init_runtime();
    init_usePageContext();
    init_getHeadSetting();
    init_getPageElement();
    init_isReactElement();
    init_getTagAttributesString();
    init_callCumulativeHooks();
    addEcosystemStamp();
    onRenderHtml = async (pageContext) => {
      const pageHtml = await getPageHtml(pageContext);
      const headHtml = getHeadHtml(pageContext);
      const { bodyHtmlBegin, bodyHtmlEnd } = await getBodyHtmlBoundary(pageContext);
      const { htmlAttributesString, bodyAttributesString } = getTagAttributes(pageContext);
      delete pageContext._configFromHook;
      return escapeInject`<!DOCTYPE html>
    <html${dangerouslySkipEscape(htmlAttributesString)}>
      <head>
        <meta charset="UTF-8" />
        ${headHtml}
      </head>
      <body${dangerouslySkipEscape(bodyAttributesString)}>
        ${bodyHtmlBegin}
        <div id="root">${pageHtml}</div>
        ${bodyHtmlEnd}
      </body>
    </html>`;
    };
  }
});

// node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
    "use strict";
    var f = require_react();
    var k = Symbol.for("react.element");
    var l = Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    exports.Fragment = l;
    exports.jsx = q;
    exports.jsxs = q;
  }
});

// node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_jsx_runtime_production_min();
    } else {
      module.exports = null;
    }
  }
});

// dist/server/chunks/chunk-Cr-qQ1rv.js
function LayoutDefault({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "root", children });
}
function Head() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", { rel: "icon", type: "image/svg+xml", href: "/logo.png" }) });
}
var import_jsx_runtime, import4;
var init_chunk_Cr_qQ1rv = __esm({
  "dist/server/chunks/chunk-Cr-qQ1rv.js"() {
    "use strict";
    import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
    import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      Head
    }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/server/entries/src_pages_error.mjs
var src_pages_error_exports = {};
__export(src_pages_error_exports, {
  configValuesSerialized: () => configValuesSerialized
});
function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "404 Page Not Found" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "This page could not be found." })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "500 Internal Server Error" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "Something went wrong." })
  ] });
}
var import_jsx_runtime2, import5, configValuesSerialized;
var init_src_pages_error = __esm({
  "dist/server/entries/src_pages_error.mjs"() {
    "use strict";
    init_Loading();
    init_onRenderHtml();
    init_chunk_Cr_qQ1rv();
    import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
    init_usePageContext();
    import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Page
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized = {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["Loading"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/__internal/components/Loading", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: Loading_default
        }
      },
      ["onRenderHtml"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: onRenderHtml
        }
      },
      ["passToClient"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: ["_configFromHook"]
        }]
      },
      ["Layout"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/layouts/LayoutDefault.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "pointer-import",
          value: LayoutDefault
        }]
      },
      ["Head"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/pages/+Head.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "plus-file",
          exportValues: import4
        }]
      },
      ["title"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
        valueSerialized: {
          type: "js-serialized",
          value: "Compound Alchemy"
        }
      },
      ["description"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "description"] },
        valueSerialized: {
          type: "js-serialized",
          value: "Embark on a magical journey as a wizard mastering the art of alchemy. Discover ancient secrets, brew powerful potions, and unlock the mysteries of the arcane."
        }
      },
      ["image"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "image"] },
        valueSerialized: {
          type: "js-serialized",
          value: "/logo.png"
        }
      },
      ["Page"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/_error/+Page.tsx", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import5
        }
      }
    };
  }
});

// node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/url-alphabet/index.js
var urlAlphabet;
var init_url_alphabet = __esm({
  "node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/url-alphabet/index.js"() {
    urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  }
});

// node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/index.js
import { webcrypto as crypto } from "node:crypto";
function fillPool(bytes) {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    crypto.getRandomValues(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    crypto.getRandomValues(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
}
function nanoid(size = 21) {
  fillPool(size -= 0);
  let id = "";
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63];
  }
  return id;
}
var POOL_SIZE_MULTIPLIER, pool, poolOffset;
var init_nanoid = __esm({
  "node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/index.js"() {
    init_url_alphabet();
    POOL_SIZE_MULTIPLIER = 128;
  }
});

// dist/server/entries/src_pages_game.mjs
var src_pages_game_exports = {};
__export(src_pages_game_exports, {
  configValuesSerialized: () => configValuesSerialized2
});
function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = (0, import_react6.useState)(false);
  (0, import_react6.useEffect)(() => {
    function onResize() {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0
      );
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return isTouchDevice;
}
function disableScroll() {
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
}
function enableScroll() {
  document.getElementsByTagName("html")[0].style.overflow = "auto";
}
function boxesIntersect(a, b) {
  return Math.abs(a.style.x - b.style.x) < 80 + 80 && Math.abs(a.style.y - b.style.y) < 28 + 28;
}
function findIntersections(elements, targetId) {
  const target = elements.find((el) => el.id === targetId);
  if (!target) return [];
  return elements.filter((el) => el.id !== targetId && boxesIntersect(el, target)).map((el) => el.id);
}
function averagePosition(elements) {
  const averageX = elements.reduce((acc, el) => acc + el.style.x, 0) / elements.length;
  const averageY = elements.reduce((acc, el) => acc + el.style.y, 0) / elements.length;
  return { x: averageX, y: averageY };
}
function combineElements(target, otherElements) {
  const keys = [target.key, ...otherElements.map((el) => el.key)];
  const combination = combinations.find(
    (comb) => comb.elements.every((el) => keys.includes(el)) && comb.elements.length === keys.length
  );
  if (combination) {
    return items.find((compound) => compound.key === combination.compound) || null;
  }
  return null;
}
function Draggable({ item, onDragStart, onDragStop }) {
  var _a;
  const ref = (0, import_react6.useRef)(null);
  const onProps = useIsTouchDevice() ? { onTouchStart: (e) => onDragStart(e), onTouchEnd: (e) => onDragStop(e) } : { onMouseDown: (e) => onDragStart(e), onMouseUp: (e) => onDragStop(e) };
  const pos = () => {
    if (!item.style) return {};
    if (!ref.current) return {
      left: `${item.style.x - 50}px`,
      top: `${item.style.y - 25}px`,
      position: "absolute"
    };
    return {
      left: `${item.style.x - ref.current.getBoundingClientRect().width / 2}px`,
      top: `${item.style.y - ref.current.getBoundingClientRect().height / 2}px`,
      position: "absolute"
    };
  };
  const hover = ((_a = item.style) == null ? void 0 : _a.hover) ? item.style.hover === 1 ? "shadow-blue-500/50 shadow-[0_0_50px_rgba(0,0,0,1)]" : item.style.hover === 2 ? "shadow-red-500/50 shadow-[0_0_50px_rgba(0,0,0,1)]" : "" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      ref: item.style ? ref : null,
      className: `flex flex-row items-center text-xs md:text-[16px] leading-5 border-2 border-neutral-200 rounded-xl backdrop-blur-sm select-none ${hover}`,
      style: { ...pos() },
      ...item.style ? { ...onProps } : {},
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "p",
          {
            ref: !item.style ? ref : null,
            className: "font-extrabold text-center text-primary min-w-14 md:min-w-20 p-2",
            ...!item.style ? { ...onProps } : {},
            children: item.symbol
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "font-semibold w-fit break-words p-2 pl-0", children: item.name })
      ]
    }
  );
}
function Page2() {
  const sidebarRef = (0, import_react6.useRef)(null);
  const dragId = (0, import_react6.useRef)("");
  const [unlockedElements, setUnlockedElements] = (0, import_react6.useState)(items.slice(0, 116));
  const [elements, setElements] = (0, import_react6.useState)([]);
  const isTouchCapable = useIsTouchDevice();
  (0, import_react6.useEffect)(() => {
    const onMove = ({ x, y }) => {
      setElements((state2) => {
        if (dragId.current === null) return state2;
        const dragElement = state2.find((el) => el.id === dragId.current);
        if (!dragElement) return state2;
        const updatedElement = { ...dragElement, style: { x, y, hover: 0 } };
        state2 = state2.filter((element) => element.id !== dragId.current).concat(updatedElement);
        const intersections = findIntersections(state2, dragId.current);
        state2 = state2.map((element) => {
          const targetElement = state2.find((e) => e.id === dragId.current);
          const otherElements = intersections.map((id) => elements.find((e) => e.id === id)).filter((e) => e !== void 0);
          const compound = combineElements(targetElement, otherElements);
          if (intersections.includes(element.id)) {
            if (compound !== null) {
              element.style.hover = 1;
            } else {
              element.style.hover = 2;
            }
          } else {
            element.style.hover = 0;
          }
          return element;
        });
        return state2;
      });
    };
    const onTouch = (e) => {
      if (dragId.current === "") return;
      e.preventDefault();
      const touch = e.targetTouches[0];
      onMove({ x: touch.pageX, y: touch.pageY });
    };
    const onMouse = (e) => {
      if (dragId.current === "") return;
      e.preventDefault();
      onMove({ x: e.pageX, y: e.pageY });
    };
    if (isTouchCapable) {
      window.addEventListener("touchmove", onTouch, { passive: false });
    } else {
      window.addEventListener("mousemove", onMouse);
    }
    return () => {
      if (isTouchCapable) {
        window.removeEventListener("touchmove", onTouch);
      } else {
        window.removeEventListener("mousemove", onMouse);
      }
    };
  }, [elements, dragId, isTouchCapable]);
  function onDragStart(element, e) {
    e.preventDefault();
    if (!element.id) return;
    disableScroll();
    dragId.current = element.id;
  }
  function onDragStop(e) {
    var _a;
    e.preventDefault();
    if (dragId.current === "") return;
    enableScroll();
    const prevDragId = dragId.current;
    dragId.current = "";
    const targetElement = elements.find((e2) => e2.id === prevDragId);
    if (!targetElement) return;
    const sidebarRect = (_a = sidebarRef.current) == null ? void 0 : _a.getBoundingClientRect();
    if (sidebarRect) {
      const targetRect = targetElement.style;
      if (targetRect && targetRect.x >= sidebarRect.left && targetRect.x <= sidebarRect.right && targetRect.y >= sidebarRect.top && targetRect.y <= sidebarRect.bottom) {
        setElements((state2) => state2.filter((e2) => e2.id !== prevDragId));
      }
    }
    const intersectedIds = findIntersections(elements, prevDragId);
    if (intersectedIds.length === 0) return;
    setElements((state2) => {
      const updatedElements = state2.filter(
        (e2) => e2.id !== prevDragId && !intersectedIds.includes(e2.id)
      );
      const otherElements = intersectedIds.map((id) => elements.find((e2) => e2.id === id)).filter((e2) => e2 !== void 0);
      if (otherElements.length === 0) return state2;
      const compound = combineElements(targetElement, otherElements);
      if (!compound) return state2;
      setUnlockedElements((state22) => {
        if (!state22.find((e2) => e2.key === compound.key)) {
          return state22.concat(compound);
        }
        return state22;
      });
      const newPos = averagePosition([...otherElements, targetElement]);
      const newElement = {
        ...targetElement,
        ...compound,
        id: nanoid(5),
        style: {
          x: newPos.x,
          y: newPos.y,
          hover: 0
        }
      };
      return [...updatedElements, newElement];
    });
  }
  function onSpawnerDragStart(element, event) {
    setElements((state2) => {
      const newId = nanoid(5);
      const newElement = {
        ...element,
        id: newId,
        style: {
          x: "pageX" in event ? event.pageX : event.touches[0].pageX,
          y: "pageY" in event ? event.pageY : event.touches[0].pageY,
          hover: 0
        }
      };
      dragId.current = newId;
      return [...state2, newElement];
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "absolute w-full h-full flex flex-row bg-base-100 text-white overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { ref: sidebarRef, className: "Sidebar w-60 md:w-80 h-full bg-base-200 flex flex-col p-2 md:p-5 gap-5 overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex justify-center items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: "/logo.png", alt: "Logo", className: "w-16 h-16 inline-block md:mr-2" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "hidden md:flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-md md:text-2xl leading-6 font-bold text-white", children: "Compound" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-md md:text-2xl leading-6 font-bold text-[#4b77d1]", children: "Alchemy" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "SpawnerList h-full w-full rounded-2xl border-2 border-base-100 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        className: "flex flex-col p-1 gap-5 justify-center w-full",
        // Render starting elements as draggable components but with no position
        children: unlockedElements.map((element, key) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Draggable,
          {
            item: element,
            onDragStart: (e) => onSpawnerDragStart(element, e),
            onDragStop
          },
          key
        ))
      }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "Playground relative flex items-center justify-center w-full h-full p-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        className: "fixed z-10 top-0 left-0 w-full",
        // Render dynamically added elements as draggable components
        children: elements.map((element) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Draggable,
          {
            item: element,
            onDragStart: (e) => onDragStart(element, e),
            onDragStop
          },
          element.id
        ))
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "img",
        {
          src: "/drag-help.png",
          alt: "Logo",
          className: `w-80 text-neutral-content text-center select-none ${elements.length !== 0 ? "hidden" : ""}`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "absolute md:hidden left-0 bottom-0 flex p-2 flex-col mt-auto select-none", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-2xl leading-6 font-bold text-white/25", children: "Compound" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-2xl leading-6 font-bold text-[#4b77d1]/25", children: "Alchemy" })
      ] })
    ] })
  ] });
}
var import_jsx_runtime3, import_react6, items, combinations, import52, configValuesSerialized2;
var init_src_pages_game = __esm({
  "dist/server/entries/src_pages_game.mjs"() {
    "use strict";
    init_Loading();
    init_onRenderHtml();
    init_chunk_Cr_qQ1rv();
    import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
    import_react6 = __toESM(require_react(), 1);
    init_nanoid();
    items = [
      { key: 0, name: "Hydrogen", symbol: "H" },
      { key: 1, name: "Oxygen", symbol: "O" },
      { key: 2, name: "Sodium", symbol: "Na" },
      { key: 3, name: "Chlorine", symbol: "Cl" },
      { key: 4, name: "Water", symbol: "H2O" },
      // H + O
      { key: 5, name: "Sodium Chloride", symbol: "NaCl" },
      // Na + Cl
      { key: 6, name: "Hydrogen Chloride", symbol: "HCl" },
      // H + Cl
      { key: 7, name: "Sodium Oxide", symbol: "Na2O" },
      // Na + O
      { key: 8, name: "Hydrogen Peroxide", symbol: "H2O2" },
      // H + O2
      { key: 9, name: "Sodium Hydroxide", symbol: "NaOH" },
      // Na + H2O
      { key: 10, name: "Chlorine Dioxide", symbol: "ClO2" },
      // Cl + O2
      { key: 11, name: "Methane", symbol: "CH4" },
      // C + H
      { key: 12, name: "Carbon", symbol: "C" },
      { key: 13, name: "Carbon Dioxide", symbol: "CO2" },
      // C + O2
      { key: 14, name: "Ammonia", symbol: "NH3" },
      // N + H
      { key: 15, name: "Nitrogen", symbol: "N" },
      { key: 16, name: "Nitrogen Dioxide", symbol: "NO2" }
      // N + O2
    ];
    combinations = [
      { elements: [0, 1], compound: 4 },
      // H + O -> Water
      { elements: [2, 3], compound: 5 },
      // Na + Cl -> Sodium Chloride
      { elements: [0, 3], compound: 6 },
      // H + Cl -> Hydrogen Chloride
      { elements: [2, 1], compound: 7 },
      // Na + O -> Sodium Oxide
      { elements: [2, 4], compound: 9 },
      // Na + H2O -> Sodium Hydroxide
      { elements: [3, 1], compound: 10 },
      // Cl + O2 -> Chlorine Dioxide
      { elements: [12, 0], compound: 11 },
      // C + H -> Methane
      { elements: [12, 1], compound: 13 },
      // C + O2 -> Carbon Dioxide
      { elements: [15, 0], compound: 14 },
      // N + H -> Ammonia
      { elements: [15, 1], compound: 16 }
      // N + O2 -> Nitrogen Dioxide
    ];
    import52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Page2
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized2 = {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["Loading"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/__internal/components/Loading", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: Loading_default
        }
      },
      ["onRenderHtml"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: onRenderHtml
        }
      },
      ["passToClient"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: ["_configFromHook"]
        }]
      },
      ["Layout"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/layouts/LayoutDefault.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "pointer-import",
          value: LayoutDefault
        }]
      },
      ["Head"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/pages/+Head.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "plus-file",
          exportValues: import4
        }]
      },
      ["title"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
        valueSerialized: {
          type: "js-serialized",
          value: "Compound Alchemy"
        }
      },
      ["description"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "description"] },
        valueSerialized: {
          type: "js-serialized",
          value: "Embark on a magical journey as a wizard mastering the art of alchemy. Discover ancient secrets, brew powerful potions, and unlock the mysteries of the arcane."
        }
      },
      ["image"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "image"] },
        valueSerialized: {
          type: "js-serialized",
          value: "/logo.png"
        }
      },
      ["Page"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/game/+Page.tsx", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import52
        }
      }
    };
  }
});

// dist/server/entries/src_pages_index.mjs
var src_pages_index_exports = {};
__export(src_pages_index_exports, {
  configValuesSerialized: () => configValuesSerialized3
});
function Page3() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "h-screen w-screen flex flex-col gap-5 items-center justify-center bg-base-100", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "/logo.png", alt: "Logo", className: "w-24 h-24 inline-block md:mr-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-4xl font-bold text-white", children: "Compound" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-4xl font-bold text-[#4b77d1]", children: "Alchemy" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "/game", className: "btn btn-lg px-10", children: "START" })
  ] });
}
var import_jsx_runtime4, import53, configValuesSerialized3;
var init_src_pages_index = __esm({
  "dist/server/entries/src_pages_index.mjs"() {
    "use strict";
    init_Loading();
    init_onRenderHtml();
    init_chunk_Cr_qQ1rv();
    import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
    import53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Page3
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized3 = {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["Loading"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/__internal/components/Loading", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: Loading_default
        }
      },
      ["onRenderHtml"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: onRenderHtml
        }
      },
      ["passToClient"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: ["_configFromHook"]
        }]
      },
      ["Layout"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/layouts/LayoutDefault.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "pointer-import",
          value: LayoutDefault
        }]
      },
      ["Head"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/pages/+Head.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "plus-file",
          exportValues: import4
        }]
      },
      ["title"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
        valueSerialized: {
          type: "js-serialized",
          value: "Compound Alchemy"
        }
      },
      ["description"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "description"] },
        valueSerialized: {
          type: "js-serialized",
          value: "Embark on a magical journey as a wizard mastering the art of alchemy. Discover ancient secrets, brew powerful potions, and unlock the mysteries of the arcane."
        }
      },
      ["image"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "image"] },
        valueSerialized: {
          type: "js-serialized",
          value: "/logo.png"
        }
      },
      ["Page"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/index/+Page.tsx", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import53
        }
      }
    };
  }
});

// dist/server/entries/src_pages_quiz.mjs
var src_pages_quiz_exports = {};
__export(src_pages_quiz_exports, {
  configValuesSerialized: () => configValuesSerialized4
});
function Page4() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "h-screen w-screen flex flex-col gap-5 items-center justify-center bg-base-100", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: "/logo.png", alt: "Logo", className: "w-24 h-24 inline-block md:mr-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-4xl font-bold text-white", children: "Compound" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-4xl font-bold text-[#4b77d1]", children: "Alchemy" })
    ] })
  ] }) });
}
var import_jsx_runtime5, import54, configValuesSerialized4;
var init_src_pages_quiz = __esm({
  "dist/server/entries/src_pages_quiz.mjs"() {
    "use strict";
    init_Loading();
    init_onRenderHtml();
    init_chunk_Cr_qQ1rv();
    import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
    import54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      default: Page4
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized4 = {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["Loading"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/__internal/components/Loading", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: Loading_default
        }
      },
      ["onRenderHtml"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "pointer-import",
          value: onRenderHtml
        }
      },
      ["passToClient"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
        valueSerialized: [{
          type: "js-serialized",
          value: ["_configFromHook"]
        }]
      },
      ["Layout"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/layouts/LayoutDefault.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "pointer-import",
          value: LayoutDefault
        }]
      },
      ["Head"]: {
        type: "cumulative",
        definedAtData: [{ "filePathToShowToUser": "/src/pages/+Head.tsx", "fileExportPathToShowToUser": [] }],
        valueSerialized: [{
          type: "plus-file",
          exportValues: import4
        }]
      },
      ["title"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
        valueSerialized: {
          type: "js-serialized",
          value: "Compound Alchemy"
        }
      },
      ["description"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "description"] },
        valueSerialized: {
          type: "js-serialized",
          value: "Embark on a magical journey as a wizard mastering the art of alchemy. Discover ancient secrets, brew powerful potions, and unlock the mysteries of the arcane."
        }
      },
      ["image"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/+config.ts", "fileExportPathToShowToUser": ["default", "image"] },
        valueSerialized: {
          type: "js-serialized",
          value: "/logo.png"
        }
      },
      ["Page"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/src/pages/quiz/+Page.tsx", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import54
        }
      }
    };
  }
});

// dist/server/entry.mjs
var entry_exports = {};
var pageFilesLazy, pageFilesEager, pageFilesExportNamesLazy, pageFilesExportNamesEager, pageFilesList, neverLoaded, pageConfigsSerialized, pageConfigGlobalSerialized, pageFilesLazyIsomorph1, pageFilesLazyIsomorph, pageFilesExportNamesEagerIsomorph1, pageFilesExportNamesEagerIsomorph, pageFilesLazyServer1, pageFilesLazyServer, pageFilesExportNamesEagerServer1, pageFilesExportNamesEagerServer, pageFilesEagerRoute1, pageFilesEagerRoute, pageFilesExportNamesEagerClient1, pageFilesExportNamesEagerClient, pageFiles;
var init_entry = __esm({
  "dist/server/entry.mjs"() {
    "use strict";
    init_loadImportBuild();
    pageFilesLazy = {};
    pageFilesEager = {};
    pageFilesExportNamesLazy = {};
    pageFilesExportNamesEager = {};
    pageFilesList = [];
    neverLoaded = {};
    pageConfigsSerialized = [
      {
        pageId: "/src/pages/_error",
        isErrorPage: true,
        routeFilesystem: void 0,
        loadConfigValuesAll: () => Promise.resolve().then(() => (init_src_pages_error(), src_pages_error_exports)),
        configValuesSerialized: {
          ["isClientRuntimeLoaded"]: {
            type: "computed",
            definedAtData: null,
            valueSerialized: {
              type: "js-serialized",
              value: true
            }
          },
          ["clientRouting"]: {
            type: "standard",
            definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
            valueSerialized: {
              type: "js-serialized",
              value: true
            }
          }
        }
      },
      {
        pageId: "/src/pages/game",
        isErrorPage: void 0,
        routeFilesystem: { "routeString": "/game", "definedBy": "/src/pages/game/" },
        loadConfigValuesAll: () => Promise.resolve().then(() => (init_src_pages_game(), src_pages_game_exports)),
        configValuesSerialized: {
          ["isClientRuntimeLoaded"]: {
            type: "computed",
            definedAtData: null,
            valueSerialized: {
              type: "js-serialized",
              value: true
            }
          },
          ["clientRouting"]: {
            type: "standard",
            definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
            valueSerialized: {
              type: "js-serialized",
              value: true
            }
          }
        }
      },
      {
        pageId: "/src/pages/index",
        isErrorPage: void 0,
        routeFilesystem: { "routeString": "/", "definedBy": "/src/pages/index/" },
        loadConfigValuesAll: () => Promise.resolve().then(() => (init_src_pages_index(), src_pages_index_exports)),
        configValuesSerialized: {
          ["isClientRuntimeLoaded"]: {
            type: "computed",
            definedAtData: null,
            valueSerialized: {
              type: "js-serialized",
              value: true
            }
          },
          ["clientRouting"]: {
            type: "standard",
            definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
            valueSerialized: {
              type: "js-serialized",
              value: true
            }
          }
        }
      },
      {
        pageId: "/src/pages/quiz",
        isErrorPage: void 0,
        routeFilesystem: { "routeString": "/quiz", "definedBy": "/src/pages/quiz/" },
        loadConfigValuesAll: () => Promise.resolve().then(() => (init_src_pages_quiz(), src_pages_quiz_exports)),
        configValuesSerialized: {
          ["isClientRuntimeLoaded"]: {
            type: "computed",
            definedAtData: null,
            valueSerialized: {
              type: "js-serialized",
              value: true
            }
          },
          ["clientRouting"]: {
            type: "standard",
            definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
            valueSerialized: {
              type: "js-serialized",
              value: true
            }
          }
        }
      }
    ];
    pageConfigGlobalSerialized = {
      configValuesSerialized: {}
    };
    pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
    pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
    pageFilesLazy[".page"] = pageFilesLazyIsomorph;
    pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
    pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
    pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
    pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
    pageFilesLazyServer = { ...pageFilesLazyServer1 };
    pageFilesLazy[".page.server"] = pageFilesLazyServer;
    pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
    pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
    pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
    pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
    pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
    pageFilesEager[".page.route"] = pageFilesEagerRoute;
    pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
    pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
    pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
    pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      neverLoaded,
      pageConfigGlobalSerialized,
      pageConfigsSerialized,
      pageFilesEager,
      pageFilesExportNamesEager,
      pageFilesExportNamesLazy,
      pageFilesLazy,
      pageFilesList
    }, Symbol.toStringTag, { value: "Module" }));
    {
      const assetsManifest = {
        "_chunk-!~{006}~.js": {
          "file": "assets/static/src_layouts_style-63145a3d.BsWflJA-.css",
          "src": "_chunk-!~{006}~.js"
        },
        "_chunk-!~{007}~.js": {
          "file": "assets/static/src_layouts_tailwind-70e1a805.By_qfffU.css",
          "src": "_chunk-!~{007}~.js"
        },
        "_chunk-!~{008}~.js": {
          "file": "assets/static/vike-react-e32b0910.B6DZbHFi.css",
          "src": "_chunk-!~{008}~.js"
        },
        "_chunk-Bq821ozC.js": {
          "file": "assets/chunks/chunk-Bq821ozC.js",
          "name": "executeHook"
        },
        "_chunk-CpI4BrGE.js": {
          "file": "assets/chunks/chunk-CpI4BrGE.js",
          "name": "_onPageTransitionStart",
          "imports": [
            "_chunk-Bq821ozC.js"
          ],
          "css": [
            "assets/static/vike-react-e32b0910.B6DZbHFi.css",
            "assets/static/src_layouts_style-63145a3d.BsWflJA-.css",
            "assets/static/src_layouts_tailwind-70e1a805.By_qfffU.css"
          ]
        },
        "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
          "file": "assets/entries/entry-client-routing.B8sbX04X.js",
          "name": "entries/entry-client-routing",
          "src": "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
          "isEntry": true,
          "imports": [
            "_chunk-Bq821ozC.js"
          ],
          "dynamicImports": [
            "virtual:vike:pageConfigValuesAll:client:/src/pages/_error",
            "virtual:vike:pageConfigValuesAll:client:/src/pages/game",
            "virtual:vike:pageConfigValuesAll:client:/src/pages/index",
            "virtual:vike:pageConfigValuesAll:client:/src/pages/quiz"
          ]
        },
        "virtual:vike:pageConfigValuesAll:client:/src/pages/_error": {
          "file": "assets/entries/src_pages_error.DkDPU_Wo.js",
          "name": "entries/src/pages/_error",
          "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/_error",
          "isEntry": true,
          "isDynamicEntry": true,
          "imports": [
            "_chunk-CpI4BrGE.js",
            "_chunk-Bq821ozC.js"
          ],
          "css": [
            "assets/static/vike-react-e32b0910.B6DZbHFi.css",
            "assets/static/src_layouts_style-63145a3d.BsWflJA-.css",
            "assets/static/src_layouts_tailwind-70e1a805.By_qfffU.css"
          ]
        },
        "virtual:vike:pageConfigValuesAll:client:/src/pages/game": {
          "file": "assets/entries/src_pages_game.xcZSZOAl.js",
          "name": "entries/src/pages/game",
          "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/game",
          "isEntry": true,
          "isDynamicEntry": true,
          "imports": [
            "_chunk-CpI4BrGE.js",
            "_chunk-Bq821ozC.js"
          ],
          "css": [
            "assets/static/vike-react-e32b0910.B6DZbHFi.css",
            "assets/static/src_layouts_style-63145a3d.BsWflJA-.css",
            "assets/static/src_layouts_tailwind-70e1a805.By_qfffU.css"
          ]
        },
        "virtual:vike:pageConfigValuesAll:client:/src/pages/index": {
          "file": "assets/entries/src_pages_index.Cn3Ozrqo.js",
          "name": "entries/src/pages/index",
          "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/index",
          "isEntry": true,
          "isDynamicEntry": true,
          "imports": [
            "_chunk-CpI4BrGE.js",
            "_chunk-Bq821ozC.js"
          ],
          "css": [
            "assets/static/vike-react-e32b0910.B6DZbHFi.css",
            "assets/static/src_layouts_style-63145a3d.BsWflJA-.css",
            "assets/static/src_layouts_tailwind-70e1a805.By_qfffU.css"
          ]
        },
        "virtual:vike:pageConfigValuesAll:client:/src/pages/quiz": {
          "file": "assets/entries/src_pages_quiz.d1CRgLEZ.js",
          "name": "entries/src/pages/quiz",
          "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/quiz",
          "isEntry": true,
          "isDynamicEntry": true,
          "imports": [
            "_chunk-CpI4BrGE.js",
            "_chunk-Bq821ozC.js"
          ],
          "css": [
            "assets/static/vike-react-e32b0910.B6DZbHFi.css",
            "assets/static/src_layouts_style-63145a3d.BsWflJA-.css",
            "assets/static/src_layouts_tailwind-70e1a805.By_qfffU.css"
          ]
        }
      };
      const pluginManifest = {
        "version": "0.4.198",
        "usesClientRouter": false,
        "baseServer": "/",
        "baseAssets": "/",
        "includeAssetsImportedByServer": true,
        "redirects": {},
        "trailingSlash": false,
        "disableUrlNormalization": false
      };
      setImportBuildGetters({
        pageFiles: () => pageFiles,
        getAssetsManifest: () => assetsManifest,
        pluginManifest: () => pluginManifest
      });
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/autoImporter.js
var require_autoImporter = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/autoImporter.js"(exports) {
    exports.status = "SET";
    exports.loadServerEntry = async () => {
      await Promise.resolve().then(() => (init_entry(), entry_exports));
    };
    exports.paths = {
      autoImporterFilePathOriginal: "C:\\Users\\crnc\\Documents\\Development\\compound-alchemy\\node_modules\\.pnpm\\@brillout+vite-plugin-server-entry@0.4.12\\node_modules\\@brillout\\vite-plugin-server-entry\\dist\\runtime\\autoImporter.js",
      autoImporterFileDirActual: (() => {
        try {
          return __dirname;
        } catch {
          return null;
        }
      })(),
      serverEntryFilePathRelative: "../../../../../../../../dist/server/entry.mjs",
      serverEntryFilePathOriginal: "C:/Users/crnc/Documents/Development/compound-alchemy/dist/server/entry.mjs",
      serverEntryFilePathResolved: () => __require.resolve("../../../../../../../../dist/server/entry.mjs")
    };
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/importServerEntry.js
var require_importServerEntry = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/importServerEntry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.importServerEntry = importServerEntry2;
    var utils_1 = require_utils2();
    var debugLogsRuntime_1 = require_debugLogsRuntime();
    var debug_1 = require_debug();
    var crawlServerEntry_1 = require_crawlServerEntry();
    async function importServerEntry2(outDir) {
      const autoImporter = require_autoImporter();
      (0, debugLogsRuntime_1.debugLogsRuntimePre)(autoImporter);
      (0, utils_1.assertUsage)(autoImporter.status !== "DISABLED_BY_INJECT", "As a library author, make sure your library doesn't call importServerEntry() when using `inject: true`");
      let success = false;
      let requireError;
      let isOutsideOfCwd = null;
      if (autoImporter.status === "SET") {
        try {
          await autoImporter.loadServerEntry();
          success = true;
        } catch (err) {
          if (debug_1.DEBUG) {
            requireError = err;
          } else {
            throw err;
          }
        }
        isOutsideOfCwd = isServerEntryOutsideOfCwd(autoImporter.paths);
        if (isOutsideOfCwd) {
          success = false;
        }
      }
      if (!success) {
        success = await (0, crawlServerEntry_1.crawlServerEntry)(outDir);
      }
      (0, debugLogsRuntime_1.debugLogsRuntimePost)({ success, requireError, isOutsideOfCwd, outDir });
      (0, utils_1.assertUsage)(success, "Cannot find server entry. (Re-)build your app and try again. If you still get this error, then you may need to manually import the server entry, see https://github.com/brillout/vite-plugin-server-entry#manual-import");
    }
    function isServerEntryOutsideOfCwd(paths) {
      const cwd = (0, utils_1.getCwd)();
      if (!cwd)
        return null;
      let serverEntryFilePath;
      try {
        serverEntryFilePath = paths.serverEntryFilePathResolved();
      } catch {
        return null;
      }
      if ((0, utils_1.isWebpackResolve)(serverEntryFilePath))
        return null;
      serverEntryFilePath = (0, utils_1.toPosixPath)(serverEntryFilePath);
      (0, utils_1.assertPosixPath)(cwd);
      return !serverEntryFilePath.startsWith(cwd);
    }
  }
});

// node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/index.js
var require_runtime = __commonJS({
  "node_modules/.pnpm/@brillout+vite-plugin-server-entry@0.4.12/node_modules/@brillout/vite-plugin-server-entry/dist/runtime/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.importServerEntry = void 0;
    var importServerEntry_1 = require_importServerEntry();
    Object.defineProperty(exports, "importServerEntry", { enumerable: true, get: function() {
      return importServerEntry_1.importServerEntry;
    } });
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/globalContext/loadImportBuild.js
function setImportBuildGetters(getters) {
  buildGetters.getters = getters;
}
async function loadImportBuild(outDir) {
  if (!buildGetters.getters) {
    await (0, import_runtime.importServerEntry)(outDir);
    assert(buildGetters.getters);
  }
  const [pageFiles2, assetsManifest, pluginManifest] = await Promise.all([
    buildGetters.getters.pageFiles(),
    buildGetters.getters.getAssetsManifest(),
    buildGetters.getters.pluginManifest()
  ]);
  const buildEntries = { pageFiles: pageFiles2, assetsManifest, pluginManifest };
  return buildEntries;
}
var import_runtime, buildGetters;
var init_loadImportBuild = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/globalContext/loadImportBuild.js"() {
    import_runtime = __toESM(require_runtime(), 1);
    init_utils3();
    buildGetters = globalThis.__vike_buildGetters = globalThis.__vike_buildGetters || {
      getters: null
    };
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/assert_exports_old_design.js
function assertExportValues(pageFile) {
  enforceTrue.forEach((exportName) => {
    assert(pageFile.fileExports);
    if (!(exportName in pageFile.fileExports))
      return;
    const explainer = `The value of \`${exportName}\` is only allowed to be \`true\`.`;
    assertUsage2(pageFile.fileExports[exportName] !== false, `${pageFile.filePath} has \`export { ${exportName} }\` with the value \`false\` which is prohibited: remove \`export { ${exportName} }\` instead. (${explainer})`);
    assertUsage2(pageFile.fileExports[exportName] === true, `${pageFile.filePath} has \`export { ${exportName} }\` with a forbidden value. ${explainer}`);
  });
}
function assertDefaultExports(defaultExportName, filePath) {
  assertUsage2(!forbiddenDefaultExports.includes(defaultExportName), `${filePath} has \`export default { ${defaultExportName} }\` which is prohibited, use \`export { ${defaultExportName} }\` instead.`);
}
var enforceTrue, forbiddenDefaultExports;
var init_assert_exports_old_design = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/assert_exports_old_design.js"() {
    init_utils();
    enforceTrue = ["clientRouting"];
    forbiddenDefaultExports = ["render", "clientRouting", "prerender", "doNotPrerender"];
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/determinePageIdOld.js
function determinePageIdOld(filePath) {
  const pageSuffix = ".page.";
  const pageId = slice(filePath.split(pageSuffix), 0, -1).join(pageSuffix);
  assert(!pageId.includes("\\"));
  return pageId;
}
var init_determinePageIdOld = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/determinePageIdOld.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/assertPageFilePath.js
function assertPageFilePath(filePath) {
  assertPosixPath(filePath);
}
var init_assertPageFilePath = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/assertPageFilePath.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/fileTypes.js
function determineFileType(filePath) {
  assertPosixPath(filePath);
  {
    const isCSS = filePath.endsWith(".css");
    if (isCSS) {
      return ".css";
    }
  }
  assert(isScriptFile(filePath), filePath);
  const fileName = filePath.split("/").slice(-1)[0];
  const parts = fileName.split(".");
  const suffix1 = parts.slice(-3)[0];
  const suffix2 = parts.slice(-2)[0];
  if (suffix2 === "page") {
    return ".page";
  }
  assert(suffix1 === "page", filePath);
  if (suffix2 === "server") {
    return ".page.server";
  }
  if (suffix2 === "client") {
    return ".page.client";
  }
  if (suffix2 === "route") {
    return ".page.route";
  }
  assert(false, filePath);
}
var fileTypes;
var init_fileTypes = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/fileTypes.js"() {
    init_utils();
    init_isScriptFile();
    fileTypes = [
      ".page",
      ".page.server",
      ".page.route",
      ".page.client",
      // New type `.page.css`/`.page.server.css`/`.page.client.css` for `extensions[number].pageFileDist`.
      //  - Extensions using `pageFileDist` are expected to use a bundler that generates a `.css` colocated next to the original `.page.js` file (e.g. `/renderer/_default.page.server.css` for `/renderer/_default.page.server.js`.
      //  - Since these `.page.css` files Bundlers We can therefore expect that there isn't any `.page.server.sass`/...
      ".css"
    ];
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/getPageFileObject.js
function getPageFileObject(filePath) {
  const isRelevant = (pageId) => pageFile.pageId === pageId || pageFile.isDefaultPageFile && (isRendererFilePath(pageFile.filePath) || isAncestorDefaultPage(pageId, pageFile.filePath));
  const fileType = determineFileType(filePath);
  const isEnv = (env2) => {
    assert(fileType !== ".page.route");
    if (env2 === "CLIENT_ONLY") {
      return fileType === ".page.client" || fileType === ".css";
    }
    if (env2 === "SERVER_ONLY") {
      return fileType === ".page.server";
    }
    if (env2 === "CLIENT_AND_SERVER") {
      return fileType === ".page";
    }
    assert(false);
  };
  const pageFile = {
    filePath,
    fileType,
    isEnv,
    isRelevant,
    isDefaultPageFile: isDefaultFilePath(filePath),
    isRendererPageFile: fileType !== ".css" && isDefaultFilePath(filePath) && isRendererFilePath(filePath),
    isErrorPageFile: isErrorPageId(filePath, false),
    pageId: determinePageIdOld(filePath)
  };
  return pageFile;
}
function isDefaultFilePath(filePath) {
  assertPageFilePath(filePath);
  if (isErrorPageId(filePath, false)) {
    return false;
  }
  return filePath.includes("/_default");
}
function isRendererFilePath(filePath) {
  assertPageFilePath(filePath);
  return filePath.includes("/renderer/");
}
function isAncestorDefaultPage(pageId, defaultPageFilePath) {
  assertPageFilePath(pageId);
  assertPageFilePath(defaultPageFilePath);
  assert(!pageId.endsWith("/"));
  assert(!defaultPageFilePath.endsWith("/"));
  assert(isDefaultFilePath(defaultPageFilePath));
  const defaultPageDir = slice(defaultPageFilePath.split("/"), 0, -1).filter((filePathSegment) => filePathSegment !== "_default").join("/");
  return pageId.startsWith(defaultPageDir);
}
var init_getPageFileObject = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/getPageFileObject.js"() {
    init_determinePageIdOld();
    init_assertPageFilePath();
    init_error_page();
    init_utils();
    init_fileTypes();
  }
});

// node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/@brillout+json-serializer@0.5.13/node_modules/@brillout/json-serializer/dist/cjs/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseTransform = exports.parse = void 0;
    var types_1 = require_types();
    function parse3(str) {
      const value = JSON.parse(str);
      return parseTransform2(value);
    }
    exports.parse = parse3;
    function parseTransform2(value) {
      if (typeof value === "string") {
        return reviver(value);
      }
      if (
        // Also matches arrays
        typeof value === "object" && value !== null
      ) {
        Object.entries(value).forEach(([key, val]) => {
          ;
          value[key] = parseTransform2(val);
        });
      }
      return value;
    }
    exports.parseTransform = parseTransform2;
    function reviver(value) {
      for (const { match, deserialize } of types_1.types) {
        if (match(value)) {
          return deserialize(value, parse3);
        }
      }
      return value;
    }
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/assertPlusFileExport.js
function assertPlusFileExport(fileExports, filePathToShowToUser, configName) {
  const exportNames = Object.keys(fileExports).filter((exportName) => !EXPORTS_IGNORE.includes(exportName));
  const isValid = (exportName) => exportName === "default" || exportName === configName;
  const exportNamesValid = exportNames.filter(isValid);
  const exportNamesInvalid = exportNames.filter((e) => !isValid(e));
  if (exportNamesValid.length === 1 && exportNamesInvalid.length === 0) {
    return;
  }
  const exportDefault = import_picocolors15.default.code("export default");
  const exportNamed = import_picocolors15.default.code(`export { ${configName} }`);
  assert(exportNamesValid.length <= 2);
  if (exportNamesValid.length === 0) {
    assertUsage2(false, `${filePathToShowToUser} should have a ${exportNamed} or ${exportDefault}`);
  }
  if (exportNamesValid.length === 2) {
    assertWarning2(false, `${filePathToShowToUser} is ambiguous: remove ${exportDefault} or ${exportNamed}`, {
      onlyOnce: true
    });
  }
  if (!TOLERATE_SIDE_EXPORTS.some((ext) => filePathToShowToUser.endsWith(ext))) {
    exportNamesInvalid.forEach((exportInvalid) => {
      assertWarning2(false, `${filePathToShowToUser} unexpected ${import_picocolors15.default.cyan(`export { ${exportInvalid} }`)}`, {
        onlyOnce: true
      });
    });
  }
}
var import_picocolors15, EXPORTS_IGNORE, TOLERATE_SIDE_EXPORTS;
var init_assertPlusFileExport = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/assertPlusFileExport.js"() {
    init_utils();
    import_picocolors15 = __toESM(require_picocolors(), 1);
    EXPORTS_IGNORE = [
      // vite-plugin-solid adds `export { $$registrations }`
      "$$registrations",
      // @vitejs/plugin-vue adds `export { _rerender_only }`
      "_rerender_only"
    ];
    TOLERATE_SIDE_EXPORTS = [".md", ".mdx"];
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/serialize/parsePageConfigs.js
function parseConfigValuesSerialized(configValuesSerialized5) {
  const configValues = parseConfigValuesSerialized_tmp(configValuesSerialized5);
  return configValues;
}
function parsePageConfigs(pageConfigsSerialized2, pageConfigGlobalSerialized2) {
  const pageConfigs = pageConfigsSerialized2.map((pageConfigSerialized) => {
    const configValues = parseConfigValuesSerialized(pageConfigSerialized.configValuesSerialized);
    const { pageId, isErrorPage: isErrorPage2, routeFilesystem, loadConfigValuesAll } = pageConfigSerialized;
    assertRouteConfigValue(configValues);
    return {
      pageId,
      isErrorPage: isErrorPage2,
      routeFilesystem,
      configValues,
      loadConfigValuesAll
    };
  });
  const pageConfigGlobal = { configValues: {} };
  {
    const configValues = parseConfigValuesSerialized(pageConfigGlobalSerialized2.configValuesSerialized);
    Object.assign(pageConfigGlobal.configValues, configValues);
  }
  return { pageConfigs, pageConfigGlobal };
}
function assertRouteConfigValue(configValues) {
  const configName = "route";
  const configValue = configValues[configName];
  if (!configValue)
    return;
  const { value, definedAtData } = configValue;
  const configValueType = typeof value;
  assert(definedAtData);
  const configDefinedAt = getConfigDefinedAt("Config", configName, definedAtData);
  assertUsage2(configValueType === "string" || isCallable(value), `${configDefinedAt} has an invalid type '${configValueType}': it should be a string or a function instead, see https://vike.dev/route`);
}
function parseConfigValuesSerialized_tmp(configValuesSerialized5) {
  const configValues = {};
  Object.entries(configValuesSerialized5).forEach(([configName, configValueSeriliazed]) => {
    let configValue;
    if (configValueSeriliazed.type === "cumulative") {
      const { valueSerialized, ...common } = configValueSeriliazed;
      const value = valueSerialized.map((valueSerializedElement, i) => {
        const { value: value2, sideExports } = parseValueSerialized(valueSerializedElement, configName, () => {
          const definedAtFile = configValueSeriliazed.definedAtData[i];
          assert(definedAtFile);
          return definedAtFile;
        });
        addSideExports(sideExports);
        return value2;
      });
      configValue = { value, ...common };
    } else {
      const { valueSerialized, ...common } = configValueSeriliazed;
      const { value, sideExports } = parseValueSerialized(valueSerialized, configName, () => {
        assert(configValueSeriliazed.type !== "computed");
        return configValueSeriliazed.definedAtData;
      });
      addSideExports(sideExports);
      configValue = { value, ...common };
    }
    configValues[configName] = configValue;
  });
  return configValues;
  function addSideExports(sideExports) {
    sideExports.forEach((sideExport) => {
      const { configName, configValue } = sideExport;
      if (!configValues[configName]) {
        configValues[configName] = configValue;
      } else {
      }
    });
  }
}
function parseValueSerialized(valueSerialized, configName, getDefinedAtFile) {
  if (valueSerialized.type === "js-serialized") {
    let { value } = valueSerialized;
    value = (0, import_parse.parseTransform)(value);
    return { value, sideExports: [] };
  }
  if (valueSerialized.type === "pointer-import") {
    const { value } = valueSerialized;
    return { value, sideExports: [] };
  }
  if (valueSerialized.type === "plus-file") {
    const definedAtFile = getDefinedAtFile();
    const { exportValues } = valueSerialized;
    assertPlusFileExport(exportValues, definedAtFile.filePathToShowToUser, configName);
    let value;
    let valueWasFound = false;
    const sideExports = [];
    Object.entries(exportValues).forEach(([exportName, exportValue]) => {
      const isSideExport = exportName !== "default" && exportName !== configName;
      if (!isSideExport) {
        value = exportValue;
        assert(!valueWasFound);
        valueWasFound = true;
      } else {
        sideExports.push({
          configName: exportName,
          configValue: {
            type: "standard",
            // We don't support side exports for cumulative values. We could support it but it isn't trivial.
            value: exportValue,
            definedAtData: {
              filePathToShowToUser: definedAtFile.filePathToShowToUser,
              fileExportPathToShowToUser: [exportName]
            }
          }
        });
      }
    });
    assert(valueWasFound);
    return { value, sideExports };
  }
  assert(false);
}
var import_parse;
var init_parsePageConfigs = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/serialize/parsePageConfigs.js"() {
    init_utils();
    init_getConfigDefinedAt();
    import_parse = __toESM(require_parse(), 1);
    init_assertPlusFileExport();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/parseGlobResults.js
function parseGlobResults(pageFilesExports) {
  assert(hasProp(pageFilesExports, "pageFilesLazy", "object"));
  assert(hasProp(pageFilesExports, "pageFilesEager", "object"));
  assert(hasProp(pageFilesExports, "pageFilesExportNamesLazy", "object"));
  assert(hasProp(pageFilesExports, "pageFilesExportNamesEager", "object"));
  assert(hasProp(pageFilesExports.pageFilesLazy, ".page"));
  assert(hasProp(pageFilesExports.pageFilesLazy, ".page.client") || hasProp(pageFilesExports.pageFilesLazy, ".page.server"));
  assert(hasProp(pageFilesExports, "pageFilesList", "string[]"));
  assert(hasProp(pageFilesExports, "pageConfigsSerialized"));
  assert(hasProp(pageFilesExports, "pageConfigGlobalSerialized"));
  const { pageConfigsSerialized: pageConfigsSerialized2, pageConfigGlobalSerialized: pageConfigGlobalSerialized2 } = pageFilesExports;
  assertPageConfigsSerialized(pageConfigsSerialized2);
  assertPageConfigGlobalSerialized(pageConfigGlobalSerialized2);
  const { pageConfigs, pageConfigGlobal } = parsePageConfigs(pageConfigsSerialized2, pageConfigGlobalSerialized2);
  const pageFilesMap = {};
  parseGlobResult(pageFilesExports.pageFilesLazy).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const loadModule = globValue;
    assertLoadModule(loadModule);
    pageFile.loadFile = async () => {
      if (!("fileExports" in pageFile)) {
        pageFile.fileExports = await loadModule();
        assertExportValues(pageFile);
      }
    };
  });
  parseGlobResult(pageFilesExports.pageFilesExportNamesLazy).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const loadModule = globValue;
    assertLoadModule(loadModule);
    pageFile.loadExportNames = async () => {
      if (!("exportNames" in pageFile)) {
        const moduleExports = await loadModule();
        assert(hasProp(moduleExports, "exportNames", "string[]"), pageFile.filePath);
        pageFile.exportNames = moduleExports.exportNames;
      }
    };
  });
  parseGlobResult(pageFilesExports.pageFilesEager).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const moduleExports = globValue;
    assert(isObject(moduleExports));
    pageFile.fileExports = moduleExports;
  });
  parseGlobResult(pageFilesExports.pageFilesExportNamesEager).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const moduleExports = globValue;
    assert(isObject(moduleExports));
    assert(hasProp(moduleExports, "exportNames", "string[]"), pageFile.filePath);
    pageFile.exportNames = moduleExports.exportNames;
  });
  pageFilesExports.pageFilesList.forEach((filePath) => {
    pageFilesMap[filePath] = pageFilesMap[filePath] ?? getPageFileObject(filePath);
  });
  const pageFiles2 = Object.values(pageFilesMap);
  pageFiles2.forEach(({ filePath }) => {
    assert(!filePath.includes("\\"));
  });
  return { pageFiles: pageFiles2, pageConfigs, pageConfigGlobal };
}
function parseGlobResult(globObject) {
  const ret = [];
  Object.entries(globObject).forEach(([fileType, globFiles]) => {
    cast(fileType);
    assert(fileTypes.includes(fileType));
    assert(isObject(globFiles));
    Object.entries(globFiles).forEach(([filePath, globValue]) => {
      const pageFile = getPageFileObject(filePath);
      assert(pageFile.fileType === fileType);
      ret.push({ filePath, pageFile, globValue });
    });
  });
  return ret;
}
function assertLoadModule(globValue) {
  assert(isCallable(globValue));
}
function assertPageConfigsSerialized(pageConfigsSerialized2) {
  assert(isArray(pageConfigsSerialized2));
  pageConfigsSerialized2.forEach((pageConfigSerialized) => {
    assert(isObject(pageConfigSerialized));
    assert(hasProp(pageConfigSerialized, "pageId", "string"));
    assert(hasProp(pageConfigSerialized, "routeFilesystem"));
    assert(hasProp(pageConfigSerialized, "configValuesSerialized"));
  });
}
function assertPageConfigGlobalSerialized(pageConfigGlobalSerialized2) {
  assert(hasProp(pageConfigGlobalSerialized2, "configValuesSerialized"));
}
var init_parseGlobResults = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/parseGlobResults.js"() {
    init_utils();
    init_assert_exports_old_design();
    init_getPageFileObject();
    init_fileTypes();
    init_parsePageConfigs();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/setPageFiles.js
function setPageFiles(pageFilesExports) {
  const { pageFiles: pageFiles2, pageConfigs, pageConfigGlobal } = parseGlobResults(pageFilesExports);
  globalObject5.pageFilesAll = pageFiles2;
  globalObject5.pageConfigs = pageConfigs;
  globalObject5.pageConfigGlobal = pageConfigGlobal;
}
function setPageFilesAsync(getPageFilesExports2) {
  globalObject5.pageFilesGetter = async () => {
    setPageFiles(await getPageFilesExports2());
  };
}
async function getPageFilesAll(isClientSide, isProduction) {
  if (isClientSide) {
    assert(!globalObject5.pageFilesGetter);
    assert(isProduction === void 0);
  } else {
    assert(globalObject5.pageFilesGetter);
    assert(typeof isProduction === "boolean");
    if (!globalObject5.pageFilesAll || // We reload all glob imports in dev to make auto-reload work
    !isProduction) {
      await globalObject5.pageFilesGetter();
    }
  }
  const { pageFilesAll, pageConfigs, pageConfigGlobal } = globalObject5;
  assert(pageFilesAll && pageConfigs && pageConfigGlobal);
  const allPageIds = getAllPageIds(pageFilesAll, pageConfigs);
  return { pageFilesAll, allPageIds, pageConfigs, pageConfigGlobal };
}
function getAllPageIds(allPageFiles, pageConfigs) {
  const fileIds = allPageFiles.filter(({ isDefaultPageFile }) => !isDefaultPageFile).map(({ pageId }) => pageId);
  const allPageIds = unique(fileIds);
  const allPageIds2 = pageConfigs.map((p) => p.pageId);
  return [...allPageIds, ...allPageIds2];
}
var globalObject5;
var init_setPageFiles = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/setPageFiles.js"() {
    init_utils();
    init_parseGlobResults();
    init_getGlobalObject();
    globalObject5 = getGlobalObject("setPageFiles.ts", {});
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/getAllPageIdFiles.js
function getPageFilesClientSide(pageFilesAll, pageId) {
  return determine(pageFilesAll, pageId, true);
}
function getPageFilesServerSide(pageFilesAll, pageId) {
  return determine(pageFilesAll, pageId, false);
}
function determine(pageFilesAll, pageId, envIsClient) {
  const env2 = envIsClient ? "CLIENT_ONLY" : "SERVER_ONLY";
  const pageFilesRelevant = pageFilesAll.filter((p) => p.isRelevant(pageId) && p.fileType !== ".page.route").sort(getPageFilesSorter(envIsClient, pageId));
  const getPageIdFile = (iso) => {
    const files = pageFilesRelevant.filter((p) => p.pageId === pageId && p.isEnv(iso ? "CLIENT_AND_SERVER" : env2));
    assertUsage2(files.length <= 1, `Merge the following files into a single file: ${files.map((p) => p.filePath).join(" ")}`);
    const pageIdFile = files[0];
    assert(pageIdFile === void 0 || !pageIdFile.isDefaultPageFile);
    return pageIdFile;
  };
  const pageIdFileEnv = getPageIdFile(false);
  const pageIdFileIso = getPageIdFile(true);
  const getRendererFile = (iso) => pageFilesRelevant.filter((p) => p.isRendererPageFile && p.isEnv(iso ? "CLIENT_AND_SERVER" : env2))[0];
  const rendererFileEnv = getRendererFile(false);
  const rendererFileIso = getRendererFile(true);
  const defaultFilesNonRenderer = pageFilesRelevant.filter((p) => p.isDefaultPageFile && !p.isRendererPageFile && (p.isEnv(env2) || p.isEnv("CLIENT_AND_SERVER")));
  const pageFiles2 = [pageIdFileEnv, pageIdFileIso, ...defaultFilesNonRenderer, rendererFileEnv, rendererFileIso].filter(isNotNullish);
  return pageFiles2;
}
function getPageFilesSorter(envIsClient, pageId) {
  const env2 = envIsClient ? "CLIENT_ONLY" : "SERVER_ONLY";
  const e1First = -1;
  const e2First = 1;
  const noOrder = 0;
  return (e1, e2) => {
    if (!e1.isDefaultPageFile && e2.isDefaultPageFile) {
      return e1First;
    }
    if (!e2.isDefaultPageFile && e1.isDefaultPageFile) {
      return e2First;
    }
    {
      const e1_isRenderer = e1.isRendererPageFile;
      const e2_isRenderer = e2.isRendererPageFile;
      if (!e1_isRenderer && e2_isRenderer) {
        return e1First;
      }
      if (!e2_isRenderer && e1_isRenderer) {
        return e2First;
      }
      assert(e1_isRenderer === e2_isRenderer);
    }
    {
      const e1_distance = getPathDistance(pageId, e1.filePath);
      const e2_distance = getPathDistance(pageId, e2.filePath);
      if (e1_distance < e2_distance) {
        return e1First;
      }
      if (e2_distance < e1_distance) {
        return e2First;
      }
      assert(e1_distance === e2_distance);
    }
    {
      if (e1.isEnv(env2) && e2.isEnv("CLIENT_AND_SERVER")) {
        return e1First;
      }
      if (e2.isEnv(env2) && e1.isEnv("CLIENT_AND_SERVER")) {
        return e2First;
      }
    }
    return noOrder;
  };
}
function getPathDistance(pathA, pathB) {
  assertPageFilePath(pathA);
  assertPageFilePath(pathB);
  let idx = 0;
  for (; idx < pathA.length && idx < pathB.length; idx++) {
    if (pathA[idx] !== pathB[idx])
      break;
  }
  const pathAWithoutCommon = pathA.slice(idx);
  const pathBWithoutCommon = pathB.slice(idx);
  const distanceA = pathAWithoutCommon.split("/").length;
  const distanceB = pathBWithoutCommon.split("/").length;
  const distance = distanceA + distanceB;
  return distance;
}
var init_getAllPageIdFiles = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/getAllPageIdFiles.js"() {
    init_utils();
    init_assertPageFilePath();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/getExports.js
function getPageContextExports(pageFiles2, pageConfig) {
  const configEntries = {};
  const config = {};
  const exportsAll = {};
  pageFiles2.forEach((pageFile) => {
    const exportValues = getExportValues(pageFile);
    exportValues.forEach(({ exportName, exportValue, isFromDefaultExport }) => {
      assert(exportName !== "default");
      exportsAll[exportName] = exportsAll[exportName] ?? [];
      exportsAll[exportName].push({
        exportValue,
        exportSource: `${pageFile.filePath} > ${isFromDefaultExport ? `\`export default { ${exportName} }\`` : `\`export { ${exportName} }\``}`,
        filePath: pageFile.filePath,
        _filePath: pageFile.filePath,
        // TODO/next-major-release: remove
        _fileType: pageFile.fileType,
        _isFromDefaultExport: isFromDefaultExport
      });
    });
  });
  const source = {};
  const sources = {};
  const addSrc = (src, configName) => {
    source[configName] = src;
    sources[configName] ?? (sources[configName] = []);
    sources[configName].push(src);
  };
  const from = {
    configsStandard: {},
    configsCumulative: {},
    configsComputed: {}
  };
  if (pageConfig) {
    Object.entries(pageConfig.configValues).forEach(([configName, configValue]) => {
      const { value } = configValue;
      const configValueFilePathToShowToUser = getConfigValueFilePathToShowToUser(configValue.definedAtData);
      const configDefinedAt = getConfigDefinedAtOptional("Config", configName, configValue.definedAtData);
      config[configName] = config[configName] ?? value;
      configEntries[configName] = configEntries[configName] ?? [];
      assert(configEntries[configName].length === 0);
      configEntries[configName].push({
        configValue: value,
        configDefinedAt,
        configDefinedByFile: configValueFilePathToShowToUser
      });
      if (configValue.type === "standard") {
        const src = {
          type: "configsStandard",
          value: configValue.value,
          definedAt: getDefinedAtString(configValue.definedAtData, configName)
        };
        addSrc(src, configName);
        from.configsStandard[configName] = src;
      }
      if (configValue.type === "cumulative") {
        const src = {
          type: "configsCumulative",
          values: configValue.value.map((value2, i) => {
            const definedAtFile = configValue.definedAtData[i];
            assert(definedAtFile);
            const definedAt = getDefinedAtString(definedAtFile, configName);
            return {
              value: value2,
              definedAt
            };
          })
        };
        addSrc(src, configName);
        from.configsCumulative[configName] = src;
      }
      if (configValue.type === "computed") {
        const src = {
          type: "configsComputed",
          value: configValue.value
        };
        addSrc(src, configName);
        from.configsComputed[configName] = src;
      }
      const exportName = configName;
      exportsAll[exportName] = exportsAll[exportName] ?? [];
      exportsAll[exportName].push({
        exportValue: value,
        exportSource: configDefinedAt,
        filePath: configValueFilePathToShowToUser,
        _filePath: configValueFilePathToShowToUser,
        _fileType: null,
        _isFromDefaultExport: null
      });
    });
  }
  const pageExports = createObjectWithDeprecationWarning();
  const exports = {};
  Object.entries(exportsAll).forEach(([exportName, values]) => {
    values.forEach(({ exportValue, _fileType, _isFromDefaultExport }) => {
      exports[exportName] = exports[exportName] ?? exportValue;
      if (_fileType === ".page" && !_isFromDefaultExport) {
        if (!(exportName in pageExports)) {
          pageExports[exportName] = exportValue;
        }
      }
    });
  });
  assert(!("default" in exports));
  assert(!("default" in exportsAll));
  const pageContextExports = {
    from,
    source,
    sources,
    // TODO/eventually: deprecate/remove every prop below
    config,
    configEntries,
    exports,
    exportsAll,
    pageExports
  };
  return pageContextExports;
}
function getExportValues(pageFile) {
  const { filePath, fileExports } = pageFile;
  assert(fileExports);
  assert(isScriptFile(filePath));
  const exportValues = [];
  Object.entries(fileExports).sort(makeLast(([exportName]) => exportName === "default")).forEach(([exportName, exportValue]) => {
    let isFromDefaultExport = exportName === "default";
    if (isFromDefaultExport) {
      if (isTemplateFile(filePath)) {
        exportName = "Page";
      } else {
        assertUsage2(isObject(exportValue), `The ${import_picocolors16.default.cyan("export default")} of ${filePath} should be an object.`);
        Object.entries(exportValue).forEach(([defaultExportName, defaultExportValue]) => {
          assertDefaultExports(defaultExportName, filePath);
          exportValues.push({
            exportName: defaultExportName,
            exportValue: defaultExportValue,
            isFromDefaultExport
          });
        });
        return;
      }
    }
    exportValues.push({
      exportName,
      exportValue,
      isFromDefaultExport
    });
  });
  exportValues.forEach(({ exportName, isFromDefaultExport }) => {
    assert(!(isFromDefaultExport && forbiddenDefaultExports.includes(exportName)));
  });
  return exportValues;
}
function createObjectWithDeprecationWarning() {
  return new Proxy({}, {
    get(...args) {
      if (!isBrowser()) {
        assertWarning2(false, "`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports", { onlyOnce: true, showStackTrace: true });
      }
      return Reflect.get(...args);
    }
  });
}
var import_picocolors16;
var init_getExports = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/getExports.js"() {
    init_isScriptFile();
    init_utils();
    init_assert_exports_old_design();
    init_getConfigDefinedAt();
    init_helpers();
    import_picocolors16 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles.js
var init_getPageFiles = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles.js"() {
    init_setPageFiles();
    init_setPageFiles();
    init_setPageFiles();
    init_getAllPageIdFiles();
    init_getAllPageIdFiles();
    init_getExports();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/assertRuntimeManifest.js
function assertRuntimeManifest(obj) {
  assert(obj);
  assert(isObject(obj));
  assert(hasProp(obj, "baseServer", "string"));
  assert(hasProp(obj, "baseAssets", "string"));
  assert(isBaseServer(obj.baseServer));
  assert(isBaseAssets(obj.baseAssets));
  assert(hasProp(obj, "includeAssetsImportedByServer", "boolean"));
  assert(hasProp(obj, "redirects", "object"));
  castType(obj);
  assert(hasProp(obj, "trailingSlash", "boolean"));
  assert(hasProp(obj, "disableUrlNormalization", "boolean"));
  checkType(obj);
}
var init_assertRuntimeManifest = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/assertRuntimeManifest.js"() {
    init_utils2();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/assertPluginManifest.js
function assertPluginManifest(pluginManifest) {
  assert(isPlainObject(pluginManifest));
  assertUsage2(pluginManifest.version === projectInfo.projectVersion, `Re-build your app (you're using vike@${projectInfo.projectVersion} but your app was built with vike@${pluginManifest.version})`);
  assertRuntimeManifest(pluginManifest);
  assert(hasProp(pluginManifest, "usesClientRouter", "boolean"));
  assert(hasProp(pluginManifest, "version", "string"));
  const pluginManifestClone = { ...pluginManifest };
  checkType(pluginManifestClone);
}
var init_assertPluginManifest = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/assertPluginManifest.js"() {
    init_assertRuntimeManifest();
    init_utils2();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/getConfigVike.js
async function getConfigVike(config) {
  const { configVikePromise } = config;
  assert(configVikePromise);
  const configVike = await configVikePromise;
  return configVike;
}
var init_getConfigVike = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/getConfigVike.js"() {
    init_utils2();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/virtual-files/virtualFileImportUserCode.js
var idBase, virtualFileIdImportUserCodeServer, virtualFileIdImportUserCodeClientSR, virtualFileIdImportUserCodeClientCR;
var init_virtualFileImportUserCode = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/virtual-files/virtualFileImportUserCode.js"() {
    init_utils2();
    idBase = "virtual:vike:importUserCode";
    virtualFileIdImportUserCodeServer = `${idBase}:server`;
    virtualFileIdImportUserCodeClientSR = `${idBase}:client:server-routing`;
    virtualFileIdImportUserCodeClientCR = `${idBase}:client:client-routing`;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/page-files/getPageFilesExports.js
async function getPageFilesExports() {
  const viteDevServer = getViteDevServer();
  assert(viteDevServer);
  let moduleExports;
  try {
    moduleExports = await viteDevServer.ssrLoadModule(virtualFileIdImportUserCodeServer);
  } catch (err) {
    debugGlob(`Glob error: ${virtualFileIdImportUserCodeServer} transpile error: `, err);
    throw err;
  }
  moduleExports = moduleExports.default || moduleExports;
  debugGlob("Glob result: ", moduleExports);
  assert(isObject(moduleExports));
  return moduleExports;
}
var init_getPageFilesExports = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/page-files/getPageFilesExports.js"() {
    init_utils3();
    init_globalContext();
    init_virtualFileImportUserCode();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/globalContext.js
function getGlobalContext() {
  assert(globalObject6.globalContext);
  return globalObject6.globalContext;
}
function getViteDevServer() {
  return globalObject6.viteDevServer ?? null;
}
async function initGlobalContext_renderPage() {
  await initGlobalContext(!globalObject6.isDev);
}
async function initGlobalContext(isProduction) {
  if (globalObject6.globalContext) {
    assert(globalObject6.globalContext.isProduction === isProduction);
    assert(globalObject6.globalContext.isPrerendering === (globalObject6.isPrerendering ?? false));
    return;
  }
  const { viteDevServer, viteConfig, isDev, isPrerendering } = globalObject6;
  assertNodeEnv_runtime(isDev ?? false);
  if (!isProduction) {
    assert(viteConfig);
    assert(viteDevServer);
    assert(!isPrerendering);
    const configVike = await getConfigVike(viteConfig);
    const pluginManifest = getRuntimeManifest(configVike);
    globalObject6.globalContext = {
      isProduction: false,
      isPrerendering: false,
      assetsManifest: null,
      pluginManifest: null,
      viteDevServer,
      viteConfig,
      baseServer: pluginManifest.baseServer,
      baseAssets: pluginManifest.baseAssets,
      includeAssetsImportedByServer: pluginManifest.includeAssetsImportedByServer,
      redirects: pluginManifest.redirects,
      trailingSlash: pluginManifest.trailingSlash,
      disableUrlNormalization: pluginManifest.disableUrlNormalization
    };
  } else {
    const buildEntries = await loadImportBuild(globalObject6.outDirRoot);
    assertBuildEntries(buildEntries, isPrerendering ?? false);
    const { pageFiles: pageFiles2, assetsManifest, pluginManifest } = buildEntries;
    setPageFiles(pageFiles2);
    assertViteManifest(assetsManifest);
    assertPluginManifest(pluginManifest);
    const globalContext = {
      isProduction: true,
      assetsManifest,
      pluginManifest,
      viteDevServer: null,
      baseServer: pluginManifest.baseServer,
      baseAssets: pluginManifest.baseAssets,
      includeAssetsImportedByServer: pluginManifest.includeAssetsImportedByServer,
      redirects: pluginManifest.redirects,
      trailingSlash: pluginManifest.trailingSlash,
      disableUrlNormalization: pluginManifest.disableUrlNormalization
    };
    if (isPrerendering) {
      assert(viteConfig);
      const configVike = await getConfigVike(viteConfig);
      assert(configVike);
      objectAssign(globalContext, {
        isPrerendering: true,
        viteConfig
      });
      globalObject6.globalContext = globalContext;
    } else {
      objectAssign(globalContext, {
        isPrerendering: false,
        viteConfig: null
      });
      globalObject6.globalContext = globalContext;
    }
  }
}
function getRuntimeManifest(configVike) {
  const { includeAssetsImportedByServer, baseServer: baseServer2, baseAssets, redirects, trailingSlash, disableUrlNormalization } = configVike;
  const manifest = {
    baseServer: baseServer2,
    baseAssets,
    includeAssetsImportedByServer,
    redirects,
    trailingSlash,
    disableUrlNormalization
  };
  assertRuntimeManifest(manifest);
  return manifest;
}
function assertBuildEntries(buildEntries, isPreRendering) {
  const errMsg = [
    `You are tyring to run`,
    isPreRendering ? "pre-rendering" : "the server for production",
    `but your app isn't built yet. Run ${import_picocolors17.default.cyan("$ vite build")} before `,
    isPreRendering ? "pre-rendering." : "running the server."
  ].join(" ");
  assertUsage2(buildEntries, errMsg);
}
function assertViteManifest(manifest) {
  assert(isPlainObject(manifest));
}
var import_picocolors17, globalObject6;
var init_globalContext = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/globalContext.js"() {
    init_utils3();
    init_loadImportBuild();
    init_getPageFiles();
    init_assertPluginManifest();
    init_getConfigVike();
    init_assertRuntimeManifest();
    import_picocolors17 = __toESM(require_picocolors(), 1);
    init_getPageFilesExports();
    globalObject6 = getGlobalObject("globalContext.ts", (() => {
      const { promise: viteDevServerPromise, resolve: viteDevServerPromiseResolve } = genPromise();
      return {
        viteDevServerPromise,
        viteDevServerPromiseResolve
      };
    })());
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/getHtmlTags.js
function getHtmlTags(pageContext, streamFromReactStreamingPackage, injectFilter, pageAssets, viteDevScript, isStream2) {
  assert([true, false].includes(pageContext._isHtmlOnly));
  const isHtmlOnly = pageContext._isHtmlOnly;
  const { isProduction } = getGlobalContext();
  const injectScriptsAt = getInjectScriptsAt(pageContext.pageId, pageContext._pageConfigs);
  const injectFilterEntries = pageAssets.filter((asset) => {
    if (asset.isEntry && asset.assetType === "script") {
      return false;
    }
    return true;
  }).map((asset) => {
    const inject = (() => {
      if (!isProduction) {
        return "HTML_BEGIN";
      }
      if (asset.assetType === "style" || asset.assetType === "font") {
        return "HTML_BEGIN";
      }
      if (asset.assetType === "script") {
        if (isHtmlOnly)
          return false;
        return "HTML_END";
      }
      return false;
    })();
    const entry = {
      ...asset,
      inject,
      // @ts-ignore
      [stamp]: true
    };
    return entry;
  });
  assertInjectFilterEntries(injectFilterEntries);
  if (injectFilter && isProduction) {
    Object.seal(injectFilterEntries);
    Object.values(injectFilterEntries).forEach((entry) => freezePartial(entry, { inject: (val) => val === false || val === "HTML_BEGIN" || val === "HTML_END" }));
    const res = injectFilter(injectFilterEntries);
    assertUsage2(res === void 0, `injectFilter() should return ${import_picocolors18.default.cyan("undefined")}, see https://vike.dev/injectFilter`);
    assertInjectFilterUsage(injectFilterEntries);
  }
  const htmlTags = [];
  injectFilterEntries.filter((asset) => asset.assetType !== "script" && asset.inject).forEach((asset) => {
    if (!asset.inject)
      return;
    const htmlTag = asset.isEntry ? inferAssetTag(asset) : inferPreloadTag(asset);
    htmlTags.push({ htmlTag, position: asset.inject });
  });
  const positionJavaScriptDefault = "HTML_END";
  const positionJavaScriptEntry = (() => {
    if (injectScriptsAt !== null) {
      if (pageContext._pageContextPromise) {
        assertWarning2(injectScriptsAt === "HTML_END" || !isStream2, `You're setting injectScriptsAt to ${import_picocolors18.default.code(JSON.stringify(injectScriptsAt))} while using HTML streaming with a pageContext promise (https://vike.dev/streaming#initial-data-after-stream-end) which is contradictory: the pageContext promise is skipped.`, { onlyOnce: true });
      }
      if (injectScriptsAt === "HTML_STREAM" && !isStream2) {
        return positionJavaScriptDefault;
      }
      return injectScriptsAt;
    }
    if (pageContext._pageContextPromise) {
      return positionJavaScriptDefault;
    }
    if (streamFromReactStreamingPackage && !streamFromReactStreamingPackage.hasStreamEnded()) {
      return "HTML_STREAM";
    }
    return positionJavaScriptDefault;
  })();
  if (pageContext._pageContextPromise && streamFromReactStreamingPackage) {
    assertWarning2(false, "We recommend against using HTML streaming and a pageContext promise (https://vike.dev/streaming#initial-data-after-stream-end) at the same time, because progressive hydration (https://vike.dev/streaming#progressive-rendering) won't work.", { onlyOnce: true });
  }
  if (!isHtmlOnly) {
    htmlTags.push({
      htmlTag: () => (
        // Needs to be called after resolvePageContextPromise()
        getPageContextJsonScriptTag(pageContext)
      ),
      position: positionJavaScriptEntry
    });
  }
  const scriptEntry = mergeScriptEntries(pageAssets, viteDevScript);
  if (scriptEntry) {
    htmlTags.push({
      htmlTag: scriptEntry,
      position: positionJavaScriptEntry
    });
  }
  injectFilterEntries.filter((asset) => asset.assetType === "script").forEach((asset) => {
    assert(!asset.isEntry);
    const htmlTag = inferPreloadTag(asset);
    if (!asset.inject)
      return;
    const position = asset.inject === "HTML_END" ? positionJavaScriptEntry : asset.inject;
    htmlTags.push({ htmlTag, position });
  });
  return htmlTags;
}
function mergeScriptEntries(pageAssets, viteDevScript) {
  const scriptEntries = pageAssets.filter((pageAsset) => pageAsset.isEntry && pageAsset.assetType === "script");
  const scriptTagsHtml = `${viteDevScript}${scriptEntries.map((asset) => inferAssetTag(asset)).join("")}`;
  const scriptTag = mergeScriptTags(scriptTagsHtml);
  return scriptTag;
}
function getPageContextJsonScriptTag(pageContext) {
  const pageContextSerialized = sanitizeJson(serializePageContextClientSide(pageContext));
  const htmlTag = `<script id="vike_pageContext" type="application/json">${pageContextSerialized}</script>`;
  pageContext._pageContextHtmlTag = htmlTag;
  return htmlTag;
}
function assertInjectFilterEntries(injectFilterEntries) {
  try {
    checkForWrongUsage(injectFilterEntries);
  } catch (err) {
    if (err?.message.includes("[Wrong Usage]")) {
      assert(false);
    }
    throw err;
  }
}
function assertInjectFilterUsage(injectFilterEntries) {
  checkForWrongUsage(injectFilterEntries);
  checkForWarnings(injectFilterEntries);
}
function checkForWrongUsage(injectFilterEntries) {
  injectFilterEntries.forEach((entry, i) => {
    assertUsage2(isObject(entry), `[injectFilter()] Entry ${i} isn't an object`);
    assertUsage2(typeof entry.src === "string", `[injectFilter()] Entry ${i} is missing property ${import_picocolors18.default.cyan("src")}`);
    assertUsage2(entry[stamp] === true, `[injectFilter()] Entry ${i} (${entry.src}) isn't the original object, see https://vike.dev/injectFilter`);
    assert([false, "HTML_BEGIN", "HTML_END"].includes(entry.inject));
    assert(entry.assetType === null || typeof entry.assetType === "string");
    assert(entry.mediaType === null || typeof entry.mediaType === "string");
    assert(typeof entry.isEntry === "boolean");
    assert(Object.keys(entry).length === 6);
  });
}
function checkForWarnings(injectFilterEntries) {
  injectFilterEntries.forEach((a) => {
    if (a.assetType === "style" && a.isEntry) {
      assertWarning2(a.inject, `[injectFilter()] We recommend against not injecting ${a.src}`, {
        onlyOnce: true
      });
    }
    if (a.assetType === "script") {
      assertWarning2(a.inject, `[injectFilter()] We recommend against not preloading JavaScript (${a.src})`, {
        onlyOnce: true
      });
    }
  });
}
function getInjectScriptsAt(pageId, pageConfigs) {
  if (pageConfigs.length === 0)
    return null;
  const pageConfig = getPageConfig(pageId, pageConfigs);
  const configValue = getConfigValueRuntime(pageConfig, "injectScriptsAt");
  if (!configValue)
    return null;
  const injectScriptsAt = configValue.value;
  assert(configValue.definedAtData);
  const configDefinedAt = getConfigDefinedAt("Config", "injectScriptsAt", configValue.definedAtData);
  assertUsage2(injectScriptsAt === null || injectScriptsAt === "HTML_BEGIN" || injectScriptsAt === "HTML_END" || injectScriptsAt === "HTML_STREAM", `${configDefinedAt} has an invalid value`);
  return injectScriptsAt;
}
var import_picocolors18, stamp;
var init_getHtmlTags = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/getHtmlTags.js"() {
    init_utils3();
    init_serializePageContextClientSide();
    init_sanitizeJson();
    init_inferHtmlTags();
    init_mergeScriptTags();
    init_helpers();
    init_getConfigValue();
    init_globalContext();
    import_picocolors18 = __toESM(require_picocolors(), 1);
    init_getConfigDefinedAt();
    stamp = "__injectFilterEntry";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/getViteDevScript.js
async function getViteDevScript() {
  const globalContext = getGlobalContext();
  if (globalContext.isProduction) {
    return "";
  }
  const { viteDevServer } = globalContext;
  const fakeHtmlBegin = "<html> <head>";
  const fakeHtmlEnd = "</head><body></body></html>";
  let fakeHtml = fakeHtmlBegin + fakeHtmlEnd;
  fakeHtml = await viteDevServer.transformIndexHtml("/", fakeHtml);
  assertUsage2(!fakeHtml.includes("vite-plugin-pwa"), `The HTML transformer of ${import_picocolors19.default.cyan("vite-plugin-pwa")} cannot be applied, see workaround at https://github.com/vikejs/vike/issues/388#issuecomment-1199280084`);
  assertUsage2(!fakeHtml.startsWith(fakeHtmlBegin.replace(" ", "")), "Vite plugins that minify the HTML are not supported by vike, see https://github.com/vikejs/vike/issues/224");
  assertUsage2(fakeHtml.startsWith(fakeHtmlBegin) && fakeHtml.endsWith(fakeHtmlEnd), "You are using a Vite Plugin that transforms the HTML in a way that conflicts with vike. Create a new GitHub ticket to discuss a solution.");
  const viteInjection = fakeHtml.slice(fakeHtmlBegin.length, -1 * fakeHtmlEnd.length);
  assert(viteInjection.includes("script"));
  assertWarning2(!viteInjection.includes("import("), "Unexpected Vite HMR code. Reach out to a Vike maintainer on GitHub.", { onlyOnce: true });
  const viteDevScript = viteInjection;
  return viteDevScript;
}
var import_picocolors19;
var init_getViteDevScript = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/getViteDevScript.js"() {
    init_globalContext();
    init_utils3();
    import_picocolors19 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets.js
async function injectHtmlTagsToString(htmlParts, pageContext, injectFilter) {
  const pageAssets = await pageContext.__getPageAssets();
  const viteDevScript = await getViteDevScript();
  const htmlTags = getHtmlTags(pageContext, null, injectFilter, pageAssets, viteDevScript, false);
  let htmlString = htmlPartsToString(htmlParts, pageAssets);
  htmlString = injectToHtmlBegin(htmlString, htmlTags);
  htmlString = injectToHtmlEnd(htmlString, htmlTags);
  assert(htmlTags.filter((snippet) => snippet.position === "HTML_STREAM").length === 0);
  return htmlString;
}
function injectHtmlTagsToStream(pageContext, streamFromReactStreamingPackage, injectFilter) {
  let htmlTags;
  return {
    injectAtStreamBegin,
    injectAtStreamAfterFirstChunk,
    injectAtStreamEnd
  };
  async function injectAtStreamBegin(htmlPartsBegin) {
    const pageAssets = await pageContext.__getPageAssets();
    const viteDevScript = await getViteDevScript();
    htmlTags = getHtmlTags(pageContext, streamFromReactStreamingPackage, injectFilter, pageAssets, viteDevScript, true);
    let htmlBegin = htmlPartsToString(htmlPartsBegin, pageAssets);
    htmlBegin = injectToHtmlBegin(htmlBegin, htmlTags);
    if (streamFromReactStreamingPackage) {
      injectHtmlTagsUsingStream(htmlTags, streamFromReactStreamingPackage);
    }
    return htmlBegin;
  }
  function injectAtStreamAfterFirstChunk() {
    if (streamFromReactStreamingPackage)
      return null;
    assert(htmlTags);
    const tags = htmlTags.filter((h) => h.position === "HTML_STREAM");
    if (tags.length === 0)
      return null;
    const htmlFragment = joinHtmlTags(tags);
    return htmlFragment;
  }
  async function injectAtStreamEnd(htmlPartsEnd) {
    assert(htmlTags);
    await resolvePageContextPromise(pageContext);
    const pageAssets = await pageContext.__getPageAssets();
    let htmlEnd = htmlPartsToString(htmlPartsEnd, pageAssets);
    htmlEnd = injectToHtmlEnd(htmlEnd, htmlTags);
    return htmlEnd;
  }
}
function injectToHtmlBegin(htmlBegin, htmlTags) {
  htmlBegin = createHtmlHeadIfMissing(htmlBegin);
  htmlBegin = injectHtmlTags(htmlBegin, htmlTags, "HTML_BEGIN");
  return htmlBegin;
}
function injectToHtmlEnd(htmlEnd, htmlTags) {
  htmlEnd = injectHtmlTags(htmlEnd, htmlTags, "HTML_END");
  return htmlEnd;
}
async function resolvePageContextPromise(pageContext) {
  const pageContextPromise = pageContext._pageContextPromise;
  if (!pageContextPromise) {
    return;
  }
  let pageContextProvidedByUser;
  if (isCallable(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise();
  } else if (isPromise(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise;
  } else {
    assert(false);
  }
  assertPageContextProvidedByUser(pageContextProvidedByUser, pageContext._renderHook);
  Object.assign(pageContext, pageContextProvidedByUser);
}
function htmlPartsToString(htmlParts, pageAssets) {
  let htmlString = "";
  htmlParts.forEach((p) => {
    htmlString += typeof p === "string" ? p : p(pageAssets);
  });
  return htmlString;
}
var init_injectAssets = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets.js"() {
    init_utils3();
    init_assertPageContextProvidedByUser();
    init_injectHtmlTags();
    init_getHtmlTags();
    init_getViteDevScript();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/stream/react-streaming.js
function streamFromReactStreamingPackageToString(stream) {
  if (stream.pipe) {
    return streamPipeNodeToString(stream.pipe);
  }
  if (stream.readable) {
    return streamReadableWebToString(stream.readable);
  }
  assert(false);
}
function isStreamFromReactStreamingPackage(thing) {
  if (hasProp(thing, "injectToStream", "function")) {
    assertUsage2(hasProp(thing, "hasStreamEnded", "function"), isVikeReactApp() ? (
      //
      "Update vike-react to its latest version"
    ) : "Update react-streaming to its latest version");
    return true;
  }
  return false;
}
function getStreamOfReactStreamingPackage(stream) {
  if (stream.pipe) {
    return { __streamPipeNode: stream.pipe };
  }
  if (stream.readable) {
    return stream.readable;
  }
  assert(false);
}
var init_react_streaming = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/stream/react-streaming.js"() {
    init_utils3();
    init_stream();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/stream.js
function isStreamReadableWeb(thing) {
  return typeof ReadableStream !== "undefined" && thing instanceof ReadableStream;
}
function isStreamWritableWeb(thing) {
  return typeof WritableStream !== "undefined" && thing instanceof WritableStream;
}
function isStreamReadableNode(thing) {
  if (isStreamReadableWeb(thing)) {
    return false;
  }
  return hasProp(thing, "read", "function");
}
function isStreamWritableNode(thing) {
  if (isStreamWritableWeb(thing)) {
    return false;
  }
  return hasProp(thing, "write", "function");
}
async function streamReadableNodeToString(readableNode) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    readableNode.on("data", (chunk2) => chunks.push(Buffer.from(chunk2)));
    readableNode.on("error", (err) => reject(err));
    readableNode.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}
async function streamReadableWebToString(readableWeb) {
  const reader = readableWeb.getReader();
  const { decode, getClosingChunk } = decodeChunks();
  let str = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done)
      break;
    str += decode(value);
  }
  str += getClosingChunk();
  return str;
}
async function stringToStreamReadableNode(str) {
  const { Readable } = await loadStreamNodeModule();
  return Readable.from(str);
}
function stringToStreamReadableWeb(str) {
  assertReadableStreamConstructor();
  const readableStream = new ReadableStream({
    start(controller) {
      controller.enqueue(encodeForWebStream(str));
      controller.close();
    }
  });
  return readableStream;
}
function stringToStreamPipeNode(str) {
  return (writable) => {
    writable.write(str);
    writable.end();
  };
}
function stringToStreamPipeWeb(str) {
  return (writable) => {
    const writer = writable.getWriter();
    writer.write(encodeForWebStream(str));
    writer.close();
  };
}
async function streamPipeNodeToString(streamPipeNode) {
  let str = "";
  let resolve;
  let reject;
  const promise = new Promise((resolve_, reject_) => {
    resolve = () => resolve_(str);
    reject = reject_;
  });
  const { Writable } = await loadStreamNodeModule();
  const writable = new Writable({
    write(chunk2, _encoding, callback) {
      const s = chunk2.toString();
      assert(typeof s === "string");
      str += s;
      callback();
    },
    final(callback) {
      resolve();
      callback();
    },
    destroy(err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }
  });
  streamPipeNode(writable);
  return promise;
}
function streamPipeWebToString(streamPipeWeb) {
  const { decode, getClosingChunk } = decodeChunks();
  let str = "";
  let resolve;
  const promise = new Promise((r) => resolve = r);
  const writable = new WritableStream({
    write(chunk2) {
      str += decode(chunk2);
    },
    close() {
      str += getClosingChunk();
      resolve(str);
    }
  });
  streamPipeWeb(writable);
  return promise;
}
async function getStreamReadableNode(htmlRender) {
  if (typeof htmlRender === "string") {
    return stringToStreamReadableNode(htmlRender);
  }
  if (isStreamReadableNode(htmlRender)) {
    return htmlRender;
  }
  return null;
}
function getStreamReadableWeb(htmlRender) {
  if (typeof htmlRender === "string") {
    return stringToStreamReadableWeb(htmlRender);
  }
  if (isStreamReadableWeb(htmlRender)) {
    return htmlRender;
  }
  return null;
}
function pipeToStreamWritableWeb(htmlRender, writable) {
  if (typeof htmlRender === "string") {
    const streamPipeWeb = stringToStreamPipeWeb(htmlRender);
    streamPipeWeb(writable);
    return true;
  }
  if (isStreamReadableWeb(htmlRender)) {
    htmlRender.pipeTo(writable);
    return true;
  }
  if (isStreamPipeWeb(htmlRender)) {
    const streamPipeWeb = getStreamPipeWeb(htmlRender);
    assert(streamPipeWeb);
    streamPipeWeb(writable);
    return true;
  }
  if (isStreamReadableNode(htmlRender) || isStreamPipeNode(htmlRender)) {
    return false;
  }
  checkType(htmlRender);
  assert(false);
}
function pipeToStreamWritableNode(htmlRender, writable) {
  if (typeof htmlRender === "string") {
    const streamPipeNode = stringToStreamPipeNode(htmlRender);
    streamPipeNode(writable);
    return true;
  }
  if (isStreamReadableNode(htmlRender)) {
    htmlRender.pipe(writable);
    return true;
  }
  if (isStreamPipeNode(htmlRender)) {
    const streamPipeNode = getStreamPipeNode(htmlRender);
    assert(streamPipeNode);
    streamPipeNode(writable);
    return true;
  }
  if (isStreamReadableWeb(htmlRender) || isStreamPipeWeb(htmlRender)) {
    return false;
  }
  checkType(htmlRender);
  assert(false);
}
async function processStream(streamOriginal, { injectStringAtBegin, injectStringAfterFirstChunk, injectStringAtEnd, onErrorWhileStreaming, enableEagerStreaming }) {
  const buffer = [];
  let streamOriginalHasStartedEmitting = false;
  let streamOriginalEnded = false;
  let streamClosed = false;
  let onEndWasCalled = false;
  let isReadyToWrite = false;
  let wrapperCreated = false;
  let shouldFlushStream = false;
  let resolve;
  let reject;
  let promiseHasResolved = false;
  let injectStringAfterFirstChunk_done = false;
  const streamWrapperPromise = new Promise((resolve_, reject_) => {
    resolve = (streamWrapper2) => {
      promiseHasResolved = true;
      resolve_(streamWrapper2);
    };
    reject = (err) => {
      promiseHasResolved = true;
      reject_(err);
    };
  });
  let resolveReadyToWrite;
  const promiseReadyToWrite = new Promise((r) => resolveReadyToWrite = r);
  if (injectStringAtBegin) {
    const injectedChunk = await injectStringAtBegin();
    writeStream(injectedChunk);
    flushStream();
  }
  const onStreamDataOrEnd = (cb) => {
    assert(streamOriginalEnded === false);
    streamOriginalHasStartedEmitting = true;
    cb();
    if (wrapperCreated)
      resolvePromise();
  };
  const { streamWrapper, streamWrapperOperations } = await createStreamWrapper({
    streamOriginal,
    onReadyToWrite() {
      debug3("stream begin");
      isReadyToWrite = true;
      flushBuffer();
      resolveReadyToWrite();
    },
    onError(err) {
      if (!promiseHasResolved) {
        reject(err);
      } else {
        onErrorWhileStreaming(err);
      }
    },
    onData(chunk2) {
      onStreamDataOrEnd(() => {
        writeStream(chunk2);
        if (injectStringAfterFirstChunk && !injectStringAfterFirstChunk_done) {
          const injectedChunk = injectStringAfterFirstChunk();
          if (injectedChunk !== null)
            writeStream(injectedChunk);
          injectStringAfterFirstChunk_done = true;
        }
      });
    },
    async onEnd(isCancel) {
      try {
        assert(!onEndWasCalled);
        onEndWasCalled = true;
        debug3("stream end");
        onStreamDataOrEnd(() => {
          streamOriginalEnded = true;
        });
        if (injectStringAtEnd) {
          const injectedChunk = await injectStringAtEnd();
          writeStream(injectedChunk);
        }
        await promiseReadyToWrite;
        assert(isReady());
        flushBuffer();
        streamClosed = true;
        debug3("stream ended");
      } catch (err) {
        if (!isBug(err)) {
          console.error(err);
          assert(false);
        }
        throw err;
      }
    },
    onFlush() {
      flushStream();
    }
  });
  wrapperCreated = true;
  flushBuffer();
  if (!delayStreamStart())
    resolvePromise();
  return streamWrapperPromise;
  function writeStream(chunk2) {
    buffer.push(chunk2);
    flushBuffer();
  }
  function flushBuffer() {
    if (!isReady())
      return;
    assert(!streamClosed);
    buffer.forEach((chunk2) => {
      streamWrapperOperations.writeChunk(chunk2);
    });
    buffer.length = 0;
    if (shouldFlushStream)
      flushStream();
  }
  function resolvePromise() {
    assert(!delayStreamStart());
    assert(wrapperCreated);
    debug3("stream promise resolved");
    resolve(streamWrapper);
  }
  function flushStream() {
    if (!isReady()) {
      shouldFlushStream = true;
      return;
    }
    if (streamWrapperOperations.flushStream === null)
      return;
    streamWrapperOperations.flushStream();
    shouldFlushStream = false;
    debug3("stream flushed");
  }
  function isReady() {
    return isReadyToWrite && // We can't use streamWrapperOperations.writeChunk() if it isn't defined yet
    wrapperCreated && // See comment below
    !delayStreamStart();
  }
  function delayStreamStart() {
    return !enableEagerStreaming && !streamOriginalHasStartedEmitting;
  }
}
async function createStreamWrapper({ streamOriginal, onError, onData, onEnd, onFlush, onReadyToWrite }) {
  if (isStreamFromReactStreamingPackage(streamOriginal)) {
    debug3(`onRenderHtml() hook returned ${import_picocolors20.default.cyan("react-streaming")} result`);
    const stream = getStreamOfReactStreamingPackage(streamOriginal);
    streamOriginal = stream;
  }
  if (isStreamPipeNode(streamOriginal)) {
    debug3("onRenderHtml() hook returned Node.js Stream Pipe");
    let writableOriginal = null;
    const pipeProxy = (writable_) => {
      writableOriginal = writable_;
      debug3("original Node.js Writable received");
      onReadyToWrite();
      if (hasEnded) {
        writableOriginal.end();
      }
    };
    stampPipe(pipeProxy, "node-stream");
    const writeChunk = (chunk2) => {
      assert(writableOriginal);
      writableOriginal.write(chunk2);
      debugWithChunk("data written (Node.js Writable)", chunk2);
    };
    const flushStream = () => {
      assert(writableOriginal);
      if (typeof writableOriginal.flush === "function") {
        writableOriginal.flush();
        debug3("stream flush() performed (Node.js Writable)");
      }
    };
    let hasEnded = false;
    const endStream = () => {
      hasEnded = true;
      if (writableOriginal) {
        writableOriginal.end();
      }
    };
    const { Writable } = await loadStreamNodeModule();
    const writableProxy = new Writable({
      async write(chunk2, _encoding, callback) {
        onData(chunk2);
        callback();
      },
      async destroy(err, callback) {
        if (err) {
          onError(err);
        } else {
          await onEnd();
        }
        callback(err);
        endStream();
      }
    });
    objectAssign(writableProxy, {
      flush: () => {
        onFlush();
      }
    });
    assert(typeof writableProxy.flush === "function");
    const pipeOriginal = getStreamPipeNode(streamOriginal);
    pipeOriginal(writableProxy);
    return { streamWrapper: pipeProxy, streamWrapperOperations: { writeChunk, flushStream } };
  }
  if (isStreamPipeWeb(streamOriginal)) {
    debug3("onRenderHtml() hook returned Web Stream Pipe");
    let writerOriginal = null;
    const pipeProxy = (writableOriginal) => {
      writerOriginal = writableOriginal.getWriter();
      debug3("original Web Writable received");
      (async () => {
        try {
          await writerOriginal.ready;
        } catch (e) {
        }
        onReadyToWrite();
        if (hasEnded) {
          writerOriginal.close();
        }
      })();
    };
    stampPipe(pipeProxy, "web-stream");
    const writeChunk = (chunk2) => {
      assert(writerOriginal);
      writerOriginal.write(encodeForWebStream(chunk2));
      debugWithChunk("data written (Web Writable)", chunk2);
    };
    const flushStream = null;
    let hasEnded = false;
    const endStream = () => {
      hasEnded = true;
      if (writerOriginal) {
        writerOriginal.close();
      }
    };
    let writableProxy;
    if (typeof ReadableStream !== "function") {
      writableProxy = new WritableStream({
        write(chunk2) {
          onData(chunk2);
        },
        async close() {
          await onEnd();
          endStream();
        },
        abort(err) {
          onError(err);
          endStream();
        }
      });
    } else {
      const { readable, writable } = new TransformStream();
      writableProxy = writable;
      handleReadableWeb(readable, {
        onData,
        onError(err) {
          onError(err);
          endStream();
        },
        async onEnd() {
          await onEnd();
          endStream();
        }
      });
    }
    const pipeOriginal = getStreamPipeWeb(streamOriginal);
    pipeOriginal(writableProxy);
    return { streamWrapper: pipeProxy, streamWrapperOperations: { writeChunk, flushStream } };
  }
  if (isStreamReadableWeb(streamOriginal)) {
    debug3("onRenderHtml() hook returned Web Readable");
    const readableOriginal = streamOriginal;
    let controllerProxyIsClosed = false;
    let isClosed = false;
    let isCancel = false;
    const closeStream = async () => {
      if (isClosed)
        return;
      isClosed = true;
      await onEnd(isCancel);
      controllerProxy.close();
      controllerProxyIsClosed = true;
    };
    let controllerProxy;
    assertReadableStreamConstructor();
    const readableProxy = new ReadableStream({
      start(controller) {
        controllerProxy = controller;
        onReadyToWrite();
        handleReadableWeb(readableOriginal, {
          onData,
          onError(err) {
            onError(err);
            controllerProxy.close();
          },
          async onEnd() {
            await closeStream();
          }
        });
      },
      async cancel(...args) {
        isCancel = true;
        await readableOriginal.cancel(...args);
        await closeStream();
      }
    });
    const writeChunk = (chunk2) => {
      if (
        // If readableOriginal doesn't implement readableOriginal.cancel() then it may still emit data after we close the stream. We therefore need to check whether we closed `controllerProxy`.
        !controllerProxyIsClosed
      ) {
        controllerProxy.enqueue(encodeForWebStream(chunk2));
        debugWithChunk("data written (Web Readable)", chunk2);
      } else {
        debugWithChunk("data emitted but not written (Web Readable)", chunk2);
      }
    };
    const flushStream = null;
    return {
      streamWrapper: readableProxy,
      streamWrapperOperations: { writeChunk, flushStream }
    };
  }
  if (isStreamReadableNode(streamOriginal)) {
    debug3("onRenderHtml() hook returned Node.js Readable");
    const readableOriginal = streamOriginal;
    const { Readable } = await loadStreamNodeModule();
    if (readableOriginal._read === Readable.prototype._read) {
      readableOriginal._read = function() {
      };
    }
    const writeChunk = (chunk2) => {
      readableProxy.push(chunk2);
      debugWithChunk("data written (Node.js Readable)", chunk2);
    };
    const flushStream = null;
    const closeProxy = () => {
      readableProxy.push(null);
    };
    const readableProxy = new Readable({ read() {
    } });
    onReadyToWrite();
    readableOriginal.on("data", (chunk2) => {
      onData(chunk2);
    });
    readableOriginal.on("error", (err) => {
      onError(err);
      closeProxy();
    });
    readableOriginal.on("end", async () => {
      await onEnd();
      closeProxy();
    });
    return {
      streamWrapper: readableProxy,
      streamWrapperOperations: { writeChunk, flushStream }
    };
  }
  assert(false);
}
async function handleReadableWeb(readable, { onData, onError, onEnd }) {
  const reader = readable.getReader();
  while (true) {
    let result;
    try {
      result = await reader.read();
    } catch (err) {
      onError(err);
      return;
    }
    const { value, done } = result;
    if (done) {
      break;
    }
    onData(value);
  }
  await onEnd();
}
function isStream(something) {
  if (isStreamReadableWeb(something) || isStreamReadableNode(something) || isStreamPipeNode(something) || isStreamPipeWeb(something) || isStreamFromReactStreamingPackage(something)) {
    checkType(something);
    return true;
  }
  return false;
}
function getStreamPipeWeb(thing) {
  if (!isStreamPipeWeb(thing)) {
    return null;
  }
  if (isObject(thing)) {
    assert(__streamPipeWeb && thing);
    return thing[__streamPipeWeb];
  } else {
    assert(isCallable(thing) && "isWebStreamPipe" in thing);
    return thing;
  }
}
function isStreamPipeWeb(thing) {
  if (isObject(thing) && __streamPipeWeb in thing) {
    return true;
  }
  if (isCallable(thing) && "isWebStreamPipe" in thing) {
    return true;
  }
  return false;
}
function getStreamPipeNode(thing) {
  if (!isStreamPipeNode(thing)) {
    return null;
  }
  if (isObject(thing)) {
    assert(__streamPipeNode in thing);
    return thing[__streamPipeNode];
  } else {
    assert(isCallable(thing) && "isNodeStreamPipe" in thing);
    return thing;
  }
}
function isStreamPipeNode(thing) {
  if (isObject(thing) && __streamPipeNode in thing) {
    return true;
  }
  if (isCallable(thing) && "isNodeStreamPipe" in thing) {
    return true;
  }
  return false;
}
function stampPipe(pipe, pipeType) {
  assertUsage2(pipeType, `stampPipe(pipe, pipeType): argument ${import_picocolors20.default.cyan("pipeType")} is missing.)`, {
    showStackTrace: true
  });
  assertUsage2(["web-stream", "node-stream"].includes(pipeType), `stampPipe(pipe, pipeType): argument ${import_picocolors20.default.cyan("pipeType")} should be either ${import_picocolors20.default.cyan("'web-stream'")} or ${import_picocolors20.default.cyan("'node-stream'")}.`, { showStackTrace: true });
  if (pipeType === "node-stream") {
    Object.assign(pipe, { isNodeStreamPipe: true });
  } else {
    Object.assign(pipe, { isWebStreamPipe: true });
  }
}
async function streamToString(stream) {
  if (isStreamReadableWeb(stream)) {
    return await streamReadableWebToString(stream);
  }
  if (isStreamReadableNode(stream)) {
    return await streamReadableNodeToString(stream);
  }
  if (isStreamPipeNode(stream)) {
    return await streamPipeNodeToString(getStreamPipeNode(stream));
  }
  if (isStreamPipeWeb(stream)) {
    return await streamPipeWebToString(getStreamPipeWeb(stream));
  }
  if (isStreamFromReactStreamingPackage(stream)) {
    return await streamFromReactStreamingPackageToString(stream);
  }
  assert(false);
}
function assertReadableStreamConstructor() {
  assertUsage2(
    typeof ReadableStream === "function",
    // Error message copied from vue's renderToWebStream() implementation
    "ReadableStream constructor isn't available in the global scope. If the target environment does support web streams, consider using pipeToWebWritable() with an existing WritableStream instance instead."
  );
}
function encodeForWebStream(thing) {
  if (!encoder) {
    encoder = new TextEncoder();
  }
  if (typeof thing === "string") {
    return encoder.encode(thing);
  }
  return thing;
}
async function loadStreamNodeModule() {
  const streamModule = (await (0, import_import.import_)("stream")).default;
  const { Readable, Writable } = streamModule;
  return { Readable, Writable };
}
function getStreamName(kind, type) {
  let typeName = capitalizeFirstLetter(type);
  if (typeName === "Node") {
    typeName = "Node.js";
  }
  const kindName = capitalizeFirstLetter(kind);
  if (kind !== "pipe") {
    return `a ${kindName} ${typeName} Stream`;
  }
  if (kind === "pipe") {
    return `a ${typeName} Stream Pipe`;
  }
  assert(false);
}
function inferStreamName(stream) {
  if (isStreamReadableWeb(stream)) {
    return getStreamName("readable", "web");
  }
  if (isStreamReadableNode(stream)) {
    return getStreamName("readable", "node");
  }
  if (isStreamPipeNode(stream)) {
    return getStreamName("pipe", "node");
  }
  if (isStreamPipeWeb(stream)) {
    return getStreamName("pipe", "web");
  }
  assert(false);
}
function decodeChunks() {
  const decoder = new TextDecoder();
  const decode = (chunk2) => {
    if (typeof chunk2 === "string") {
      return chunk2;
    } else if (chunk2 instanceof Uint8Array) {
      return decoder.decode(chunk2, { stream: true });
    } else {
      assert(false);
    }
  };
  const getClosingChunk = () => {
    return decoder.decode();
  };
  return { decode, getClosingChunk };
}
function debugWithChunk(msg, chunk2) {
  if (!debug3.isActivated)
    return;
  let chunkStr;
  try {
    chunkStr = new TextDecoder().decode(chunk2);
  } catch (err) {
    chunkStr = String(chunk2);
  }
  debug3(msg, chunkStr);
}
var import_import, import_picocolors20, debug3, __streamPipeWeb, __streamPipeNode, encoder;
var init_stream = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/stream.js"() {
    init_utils3();
    init_react_streaming();
    import_import = __toESM(require_dist2(), 1);
    import_picocolors20 = __toESM(require_picocolors(), 1);
    debug3 = createDebugger("vike:stream");
    __streamPipeWeb = "__streamPipeWeb";
    __streamPipeNode = "__streamPipeNode";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/renderHtml.js
function isDocumentHtml(something) {
  if (isTemplateWrapped(something) || isEscapedString(something) || isStream(something)) {
    checkType(something);
    return true;
  }
  return false;
}
async function renderDocumentHtml(documentHtml, pageContext, onErrorWhileStreaming, injectFilter) {
  if (isEscapedString(documentHtml)) {
    objectAssign(pageContext, { _isStream: false });
    let htmlString = getEscapedString(documentHtml);
    htmlString = await injectHtmlTagsToString([htmlString], pageContext, injectFilter);
    return htmlString;
  }
  if (isStream(documentHtml)) {
    objectAssign(pageContext, { _isStream: true });
    const stream = documentHtml;
    const streamWrapper = await renderHtmlStream(stream, null, pageContext, onErrorWhileStreaming, injectFilter);
    return streamWrapper;
  }
  if (isTemplateWrapped(documentHtml)) {
    const templateContent = documentHtml._template;
    const render = await renderTemplate(templateContent, pageContext);
    if (!("htmlStream" in render)) {
      objectAssign(pageContext, { _isStream: false });
      const { htmlPartsAll } = render;
      const htmlString = await injectHtmlTagsToString(htmlPartsAll, pageContext, injectFilter);
      return htmlString;
    } else {
      objectAssign(pageContext, { _isStream: true });
      const { htmlStream } = render;
      const streamWrapper = await renderHtmlStream(htmlStream, {
        htmlPartsBegin: render.htmlPartsBegin,
        htmlPartsEnd: render.htmlPartsEnd
      }, pageContext, onErrorWhileStreaming, injectFilter);
      return streamWrapper;
    }
  }
  checkType(documentHtml);
  assert(false);
}
async function renderHtmlStream(streamOriginal, injectString, pageContext, onErrorWhileStreaming, injectFilter) {
  const processStreamOptions = {
    onErrorWhileStreaming,
    enableEagerStreaming: pageContext.enableEagerStreaming
  };
  if (injectString) {
    let streamFromReactStreamingPackage = null;
    if (isStreamFromReactStreamingPackage(streamOriginal) && !streamOriginal.disabled) {
      streamFromReactStreamingPackage = streamOriginal;
    }
    const { injectAtStreamBegin, injectAtStreamAfterFirstChunk, injectAtStreamEnd } = injectHtmlTagsToStream(pageContext, streamFromReactStreamingPackage, injectFilter);
    processStreamOptions.injectStringAtBegin = async () => {
      return await injectAtStreamBegin(injectString.htmlPartsBegin);
    };
    processStreamOptions.injectStringAtEnd = async () => {
      return await injectAtStreamEnd(injectString.htmlPartsEnd);
    };
    processStreamOptions.injectStringAfterFirstChunk = () => {
      return injectAtStreamAfterFirstChunk();
    };
  }
  const streamWrapper = await processStream(streamOriginal, processStreamOptions);
  return streamWrapper;
}
function isTemplateWrapped(something) {
  return hasProp(something, "_template");
}
function isEscapedString(something) {
  const result = hasProp(something, "_escaped");
  if (result) {
    assert(hasProp(something, "_escaped", "string"));
    checkType(something);
  }
  return result;
}
function getEscapedString(escapedString) {
  let htmlString;
  assert(hasProp(escapedString, "_escaped"));
  htmlString = escapedString._escaped;
  assert(typeof htmlString === "string");
  return htmlString;
}
function escapeInject(templateStrings, ...templateVariables) {
  assertUsage2(templateStrings.length === templateVariables.length + 1 && templateStrings.every((str) => typeof str === "string"), `You're using ${import_picocolors21.default.cyan("escapeInject")} as a function, but ${import_picocolors21.default.cyan("escapeInject")} is a string template tag, see https://vike.dev/escapeInject`, { showStackTrace: true });
  return {
    _template: {
      templateStrings,
      templateVariables
    }
  };
}
function dangerouslySkipEscape(alreadyEscapedString) {
  return _dangerouslySkipEscape(alreadyEscapedString);
}
function _dangerouslySkipEscape(arg) {
  if (hasProp(arg, "_escaped")) {
    assert(isEscapedString(arg));
    return arg;
  }
  assertUsage2(!isPromise(arg), `[dangerouslySkipEscape(${import_picocolors21.default.cyan("str")})] Argument ${import_picocolors21.default.cyan("str")} is a promise. It should be a string instead (or a stream). Make sure to ${import_picocolors21.default.cyan("await str")}.`, { showStackTrace: true });
  if (typeof arg === "string") {
    return { _escaped: arg };
  }
  assertWarning2(false, `[dangerouslySkipEscape(${import_picocolors21.default.cyan("str")})] Argument ${import_picocolors21.default.cyan("str")} should be a string but we got ${import_picocolors21.default.cyan(`typeof str === "${typeof arg}"`)}.`, {
    onlyOnce: false,
    showStackTrace: true
  });
  return { _escaped: String(arg) };
}
async function renderTemplate(templateContent, pageContext) {
  const htmlPartsBegin = [];
  const htmlPartsEnd = [];
  let htmlStream = null;
  const addHtmlPart = (htmlPart) => {
    if (htmlStream === null) {
      htmlPartsBegin.push(htmlPart);
    } else {
      htmlPartsEnd.push(htmlPart);
    }
  };
  const setStream = (stream) => {
    const { hookName, hookFilePath } = pageContext._renderHook;
    assertUsage2(!htmlStream, `Injecting two streams in ${import_picocolors21.default.cyan("escapeInject")} template tag of ${hookName}() hook defined by ${hookFilePath}. Inject only one stream instead.`);
    htmlStream = stream;
  };
  const { templateStrings, templateVariables } = templateContent;
  for (let i = 0; i < templateVariables.length; i++) {
    addHtmlPart(templateStrings[i]);
    let templateVar = templateVariables[i];
    if (isEscapedString(templateVar)) {
      const htmlString = getEscapedString(templateVar);
      addHtmlPart(htmlString);
      continue;
    }
    if (isTemplateWrapped(templateVar)) {
      const templateContentInner = templateVar._template;
      const result = await renderTemplate(templateContentInner, pageContext);
      if (!("htmlStream" in result)) {
        result.htmlPartsAll.forEach(addHtmlPart);
      } else {
        result.htmlPartsBegin.forEach(addHtmlPart);
        setStream(result.htmlStream);
        result.htmlPartsEnd.forEach(addHtmlPart);
      }
      continue;
    }
    if (isStream(templateVar)) {
      setStream(templateVar);
      continue;
    }
    const getErrMsg2 = (msg) => {
      const { hookName, hookFilePath } = pageContext._renderHook;
      const nth = i === 0 && "1st" || i === 1 && "2nd" || i === 2 && "3rd" || `${i}-th`;
      return [
        `The ${nth} HTML variable is ${msg}`,
        `The HTML was provided by the ${hookName}() hook at ${hookFilePath}.`
      ].filter(Boolean).join(" ");
    };
    assertUsage2(!isPromise(templateVar), getErrMsg2(`a promise, did you forget to ${import_picocolors21.default.cyan("await")} the promise?`));
    if (templateVar === void 0 || templateVar === null) {
      const msgVal = import_picocolors21.default.cyan(String(templateVar));
      const msgEmptyString = import_picocolors21.default.cyan("''");
      const msg = `${msgVal} which will be converted to an empty string. Pass the empty string ${msgEmptyString} instead of ${msgVal} to remove this warning.`;
      assertWarning2(false, getErrMsg2(msg), { onlyOnce: false });
      templateVar = "";
    }
    {
      const varType = typeof templateVar;
      if (varType !== "string") {
        const msgType = import_picocolors21.default.cyan(`typeof htmlVariable === "${varType}"`);
        const msg = `${msgType} but a string or stream (https://vike.dev/streaming) is expected instead.`;
        assertUsage2(false, getErrMsg2(msg));
      }
    }
    {
      const { isProduction } = getGlobalContext();
      if (isHtml(templateVar) && // We don't show this warning in production because it's expected that some users may (un)willingly do some XSS injection: we avoid flooding the production logs.
      !isProduction) {
        const msgVal = import_picocolors21.default.cyan(String(templateVar));
        const msg = `${msgVal} which seems to be HTML code. Did you forget to wrap the value with dangerouslySkipEscape()?`;
        assertWarning2(false, getErrMsg2(msg), { onlyOnce: false });
      }
    }
    addHtmlPart(escapeHtml(templateVar));
  }
  assert(templateStrings.length === templateVariables.length + 1);
  addHtmlPart(templateStrings[templateStrings.length - 1]);
  if (htmlStream === null) {
    assert(htmlPartsEnd.length === 0);
    return {
      htmlPartsAll: htmlPartsBegin
    };
  }
  return {
    htmlStream,
    htmlPartsBegin,
    htmlPartsEnd
  };
}
async function getHtmlString(htmlRender) {
  if (typeof htmlRender === "string") {
    return htmlRender;
  }
  if (isStream(htmlRender)) {
    return streamToString(htmlRender);
  }
  checkType(htmlRender);
  assert(false);
}
var import_picocolors21;
var init_renderHtml = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/renderHtml.js"() {
    init_utils3();
    init_injectAssets();
    init_stream();
    init_react_streaming();
    init_globalContext();
    import_picocolors21 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageContextUrlComputed.js
function getPageContextUrlComputed(pageContext) {
  assert(typeof pageContext.urlOriginal === "string");
  assertPageContextUrlComputed(pageContext);
  const pageContextUrlComputed = {};
  objectDefineProperty(pageContextUrlComputed, "urlPathname", {
    get: urlPathnameGetter,
    enumerable: true,
    configurable: true
  });
  objectDefineProperty(pageContextUrlComputed, "url", {
    get: urlGetter,
    enumerable: false,
    configurable: true
  });
  objectDefineProperty(pageContextUrlComputed, "urlParsed", {
    get: urlParsedGetter,
    enumerable: true,
    configurable: true
  });
  return pageContextUrlComputed;
}
function getUrlParsed(pageContext) {
  let urlResolved;
  let baseToBeRemoved;
  if (pageContext.urlLogical) {
    urlResolved = pageContext.urlLogical;
    baseToBeRemoved = false;
  } else if (pageContext._urlRewrite) {
    urlResolved = pageContext._urlRewrite;
    baseToBeRemoved = false;
  } else {
    urlResolved = pageContext.urlOriginal;
    baseToBeRemoved = true;
  }
  assert(urlResolved && typeof urlResolved === "string");
  let urlHandler = pageContext._urlHandler;
  if (!urlHandler)
    urlHandler = (url) => url;
  urlResolved = urlHandler(urlResolved);
  const baseServer2 = !baseToBeRemoved ? "/" : pageContext._baseServer;
  return parseUrl(urlResolved, baseServer2);
}
function urlPathnameGetter() {
  const { pathname } = getUrlParsed(this);
  const urlPathname = pathname;
  assert(urlPathname.startsWith("/"));
  return urlPathname;
}
function urlGetter() {
  assertWarning2(false, "`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vike.dev/migration/0.4.23 for more information.)", { onlyOnce: true, showStackTrace: true });
  return urlPathnameGetter.call(this);
}
function urlParsedGetter() {
  const {
    // remove hasBaseServer as it isn't part of UrlPublic
    hasBaseServer: _,
    ...urlParsed
  } = getUrlParsed(this);
  const hashIsAvailable = isBrowser();
  const warnHashNotAvailable = (prop) => {
    assertWarning2(hashIsAvailable, `pageContext.urlParsed.${prop} isn't available on the server-side (HTTP requests don't include the URL hash)`, { onlyOnce: true, showStackTrace: true });
  };
  const urlParsedEnhanced = {
    ...urlParsed,
    get hash() {
      warnHashNotAvailable("hash");
      return urlParsed.hash;
    },
    get hashOriginal() {
      warnHashNotAvailable("hashOriginal");
      return urlParsed.hashOriginal;
    },
    // TODO/next-major-release: remove
    get hashString() {
      assertWarning2(false, "pageContext.urlParsed.hashString has been renamed to pageContext.urlParsed.hashOriginal", {
        onlyOnce: true,
        showStackTrace: true
      });
      warnHashNotAvailable("hashString");
      return urlParsed.hashOriginal;
    },
    // TODO/next-major-release: remove
    get searchString() {
      assertWarning2(false, "pageContext.urlParsed.searchString has been renamed to pageContext.urlParsed.searchOriginal", { onlyOnce: true, showStackTrace: true });
      return urlParsed.searchOriginal;
    }
  };
  changeEnumerable(urlParsedEnhanced, "hashString", false);
  changeEnumerable(urlParsedEnhanced, "searchString", false);
  if (!hashIsAvailable) {
    changeEnumerable(urlParsedEnhanced, "hash", false);
    changeEnumerable(urlParsedEnhanced, "hashOriginal", false);
  }
  return urlParsedEnhanced;
}
function assertPageContextUrl(pageContext) {
  assert(typeof pageContext.urlOriginal === "string");
  assert(typeof pageContext.urlPathname === "string");
  assert(isPlainObject(pageContext.urlParsed));
  assert(pageContext.urlPathname === pageContext.urlParsed.pathname);
  assertPageContextUrlComputed(pageContext);
}
function assertPageContextUrlComputed(pageContext) {
  if ("urlPathname" in pageContext) {
    assert(typeof pageContext.urlPathname === "string");
    assert(isPropertyGetter(pageContext, "urlPathname"));
    assert(isPropertyGetter(pageContext, "urlParsed"));
    assert(isPropertyGetter(pageContext, "url"));
  } else {
    assert(!("urlParsed" in pageContext));
    assert(!("url" in pageContext));
  }
}
var init_getPageContextUrlComputed = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageContextUrlComputed.js"() {
    init_objectDefineProperty();
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getHttpResponseBody.js
function getHttpResponseBody(htmlRender, renderHook) {
  if (typeof htmlRender !== "string") {
    assertUsage2(false, getErrMsg(htmlRender, renderHook, "body", `Use ${import_picocolors22.default.cyan("pageContext.httpResponse.pipe()")} instead`));
  }
  const body = htmlRender;
  return body;
}
function getHttpResponseBodyStreamHandlers(htmlRender, renderHook) {
  return {
    pipe(writable) {
      const getErrMsgMixingStreamTypes = (writableType) => `The ${getErrMsgBody(htmlRender, renderHook)} while a ${writableType} was passed to pageContext.httpResponse.pipe() which is contradictory. You cannot mix a Web Stream with a Node.js Stream.`;
      if (isStreamWritableWeb(writable)) {
        const success = pipeToStreamWritableWeb(htmlRender, writable);
        if (success) {
          return;
        } else {
          assert(isStreamReadableNode(htmlRender) || isStreamPipeNode(htmlRender));
          assertUsage2(false, getErrMsgMixingStreamTypes("Web Writable"));
        }
      }
      if (isStreamWritableNode(writable)) {
        const success = pipeToStreamWritableNode(htmlRender, writable);
        if (success) {
          return;
        } else {
          assert(isStreamReadableWeb(htmlRender) || isStreamPipeWeb(htmlRender));
          assertUsage2(false, getErrMsgMixingStreamTypes("Node.js Writable"));
        }
      }
      assertUsage2(false, `The argument ${import_picocolors22.default.cyan("writable")} passed to ${import_picocolors22.default.cyan("pageContext.httpResponse.pipe(writable)")} doesn't seem to be ${getStreamName("writable", "web")} nor ${getStreamName("writable", "node")}.`);
    },
    getReadableWebStream() {
      const webStream = getStreamReadableWeb(htmlRender);
      if (webStream === null) {
        assertUsage2(false, getErrMsg(htmlRender, renderHook, "getReadableWebStream()", getFixMsg("readable", "web")));
      }
      return webStream;
    },
    async getReadableNodeStream() {
      const nodeStream = await getStreamReadableNode(htmlRender);
      if (nodeStream === null) {
        assertUsage2(false, getErrMsg(htmlRender, renderHook, "getReadableNodeStream()", getFixMsg("readable", "node")));
      }
      return nodeStream;
    },
    async getBody() {
      const body = await getHtmlString(htmlRender);
      return body;
    },
    // TODO/v1-release: remove
    async getNodeStream() {
      assertWarning2(false, "`pageContext.httpResponse.getNodeStream()` is outdated, use `pageContext.httpResponse.getReadableNodeStream()` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const nodeStream = await getStreamReadableNode(htmlRender);
      if (nodeStream === null) {
        assertUsage2(false, getErrMsg(htmlRender, renderHook, "getNodeStream()", getFixMsg("readable", "node")));
      }
      return nodeStream;
    },
    // TODO/v1-release: remove
    getWebStream() {
      assertWarning2(false, "`pageContext.httpResponse.getWebStream(res)` is outdated, use `pageContext.httpResponse.getReadableWebStream(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const webStream = getStreamReadableWeb(htmlRender);
      if (webStream === null) {
        assertUsage2(false, getErrMsg(htmlRender, renderHook, "getWebStream()", getFixMsg("readable", "web")));
      }
      return webStream;
    },
    // TODO/v1-release: remove
    pipeToWebWritable(writable) {
      assertWarning2(false, "`pageContext.httpResponse.pipeToWebWritable(res)` is outdated, use `pageContext.httpResponse.pipe(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const success = pipeToStreamWritableWeb(htmlRender, writable);
      if (!success) {
        assertUsage2(false, getErrMsg(htmlRender, renderHook, "pipeToWebWritable()"));
      }
    },
    // TODO/v1-release: remove
    pipeToNodeWritable(writable) {
      assertWarning2(false, "`pageContext.httpResponse.pipeToNodeWritable(res)` is outdated, use `pageContext.httpResponse.pipe(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const success = pipeToStreamWritableNode(htmlRender, writable);
      if (!success) {
        assertUsage2(false, getErrMsg(htmlRender, renderHook, "pipeToNodeWritable()"));
      }
    }
  };
  function getFixMsg(kind, type) {
    const streamName = getStreamName(kind, type);
    assert(["a ", "an ", "the "].some((s) => streamName.startsWith(s)));
    assert(renderHook);
    const { hookFilePath, hookName } = renderHook;
    return `Make sure the ${hookName}() defined by ${hookFilePath} hook provides ${streamName} instead`;
  }
}
function getErrMsg(htmlRender, renderHook, method, msgAddendum) {
  assert(!msgAddendum || !msgAddendum.endsWith("."));
  const errMsgBody = getErrMsgBody(htmlRender, renderHook);
  return [`pageContext.httpResponse.${method} can't be used because the ${errMsgBody}`, msgAddendum, streamDocs].filter(Boolean).join(". ");
}
function getErrMsgBody(htmlRender, renderHook) {
  assert(renderHook);
  const { hookFilePath, hookName } = renderHook;
  const hookReturnType = getHookReturnType(htmlRender);
  assert(["a ", "an ", "the "].some((s) => hookReturnType.startsWith(s)));
  const errMsgBody = `${hookName}() hook defined by ${hookFilePath} provides ${hookReturnType}`;
  assert(!errMsgBody.endsWith(" "));
  return errMsgBody;
}
function getHookReturnType(htmlRender) {
  if (typeof htmlRender === "string") {
    return "an HTML string";
  } else if (isStream(htmlRender)) {
    return inferStreamName(htmlRender);
  } else {
    assert(false);
  }
}
var import_picocolors22, streamDocs;
var init_getHttpResponseBody = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getHttpResponseBody.js"() {
    init_stream();
    init_utils3();
    init_renderHtml();
    import_picocolors22 = __toESM(require_picocolors(), 1);
    streamDocs = "See https://vike.dev/streaming for more information.";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getEarlyHints.js
function getEarlyHints(assets) {
  const earlyHints = [];
  {
    assets.forEach((asset) => {
      if (isFontFallback(asset, earlyHints))
        return;
      earlyHints.push({
        ...asset,
        earlyHintLink: inferEarlyHintLink(asset)
      });
    });
  }
  return earlyHints;
}
function isFontFallback(asset, earlyHints) {
  if (asset.assetType !== "font") {
    return false;
  }
  const fontUrlBase = removeFileExtentionAndHash(asset.src);
  return earlyHints.some((hint) => {
    return hint.assetType === "font" && removeFileExtentionAndHash(hint.src) === fontUrlBase;
  });
}
function removeFileExtentionAndHash(assetUrl) {
  assert(!assetUrl.includes("\\"));
  assert(!assetUrl.endsWith(".js"));
  const paths = assetUrl.split("/");
  {
    const filename = paths[paths.length - 1];
    const filenameParts = filename.split(".");
    assert(filenameParts.length >= 2);
    const filenameBase = filenameParts.slice(0, filenameParts.length === 2 ? -1 : -2);
    assert(filenameBase.length >= 1);
    paths[paths.length - 1] = filenameBase.join(".");
  }
  return paths.join("/");
}
var init_getEarlyHints = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getEarlyHints.js"() {
    init_inferHtmlTags();
    init_utils3();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse/getCacheControl.js
function getCacheControl(pageId, pageConfigs) {
  if (pageConfigs.length === 0)
    return defaultValue;
  const pageConfig = getPageConfig(pageId, pageConfigs);
  const configValue = getConfigValueRuntime(pageConfig, "cacheControl", "string");
  const value = configValue?.value;
  if (value)
    return value;
  return defaultValue;
}
var defaultValue;
var init_getCacheControl = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse/getCacheControl.js"() {
    init_helpers();
    init_getConfigValue();
    defaultValue = "no-store, max-age=0";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse/assertNoInfiniteHttpRedirect.js
function assertNoInfiniteHttpRedirect(urlRedirectTarget, urlLogical) {
  if (!urlRedirectTarget.startsWith("/")) {
    return;
  }
  assert(urlLogical.startsWith("/"));
  const graph = copy(globalObject7.redirectGraph);
  graph[urlRedirectTarget] ?? (graph[urlRedirectTarget] = /* @__PURE__ */ new Set());
  graph[urlRedirectTarget].add(urlLogical);
  validate(graph);
  globalObject7.redirectGraph = graph;
}
function copy(G) {
  return Object.fromEntries(Object.entries(G).map(([key, val]) => [key, new Set(val)]));
}
function validate(G) {
  Object.keys(G).forEach((n) => check(G, n, []));
}
function check(G, n, path) {
  if (path.includes(n)) {
    const cycle = path.slice(path.indexOf(n)).concat(n);
    assertUsage2(false, `Infinite loop of HTTP URL redirects: ${cycle.map(import_picocolors23.default.cyan).join(" -> ")}`);
  }
  G[n]?.forEach((node) => check(G, node, [...path, n]));
}
var import_picocolors23, globalObject7;
var init_assertNoInfiniteHttpRedirect = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse/assertNoInfiniteHttpRedirect.js"() {
    init_utils3();
    import_picocolors23 = __toESM(require_picocolors(), 1);
    globalObject7 = getGlobalObject("assertNoInfiniteHttpRedirect.ts", {
      redirectGraph: {}
    });
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse.js
async function createHttpResponsePage(htmlRender, renderHook, pageContext) {
  let statusCode = pageContext.abortStatusCode;
  if (!statusCode) {
    const isError = !pageContext.pageId || isErrorPage(pageContext.pageId, pageContext._pageConfigs);
    if (pageContext.errorWhileRendering) {
      assert(isError);
    }
    if (!isError) {
      assert(pageContext.is404 === null);
      statusCode = 200;
    } else {
      assert(pageContext.is404 === true || pageContext.is404 === false);
      statusCode = pageContext.is404 ? 404 : 500;
    }
  }
  const earlyHints = getEarlyHints(await pageContext.__getPageAssets());
  const headers = [];
  assert(pageContext.pageId);
  const cacheControl = getCacheControl(pageContext.pageId, pageContext._pageConfigs);
  if (cacheControl) {
    headers.push(["Cache-Control", cacheControl]);
  }
  return createHttpResponse(statusCode, "text/html;charset=utf-8", headers, htmlRender, earlyHints, renderHook);
}
function createHttpResponseFavicon404() {
  const httpResponse = createHttpResponse(404, "text/html;charset=utf-8", [], "<p>No favicon.ico found.</p><script>console.log('This HTTP response was generated by Vike.')</script>");
  return httpResponse;
}
function createHttpResponseError(pageContext) {
  const reason = (() => {
    if (!pageContext) {
      return "no error page (https://vike.dev/error-page) could be rendered";
    }
    const errorPageId = getErrorPageId(pageContext._pageFilesAll, pageContext._pageConfigs);
    if (errorPageId) {
      return "the error page (https://vike.dev/error-page) couldn't be rendered (for example if an error occurred while rendering the error page)";
    } else {
      return "no error page (https://vike.dev/error-page) is defined, make sure to create one";
    }
  })();
  const httpResponse = createHttpResponse(500, "text/html;charset=utf-8", [], `<p>An error occurred.</p><script>console.log(${JSON.stringify(`This HTTP response was generated by Vike. Vike returned this response because ${reason}.`)})</script>`);
  return httpResponse;
}
async function createHttpResponsePageContextJson(pageContextSerialized) {
  const httpResponse = createHttpResponse(200, "application/json", [], pageContextSerialized, [], null);
  return httpResponse;
}
function createHttpResponseRedirect({ url, statusCode }, urlLogical) {
  assertNoInfiniteHttpRedirect(url, urlLogical);
  assert(url);
  assert(statusCode);
  assert(300 <= statusCode && statusCode <= 399);
  const headers = [["Location", url]];
  return createHttpResponse(
    statusCode,
    "text/html;charset=utf-8",
    headers,
    // For bots / programmatic crawlig: show what's going on.
    // For users: showing a blank page is probably better than a flickering text.
    `<p style="display: none">Redirecting to ${url}</p><script>console.log('This HTTP response was generated by Vike.')</script>`
  );
}
function createHttpResponse(statusCode, contentType, headers, htmlRender, earlyHints = [], renderHook = null) {
  headers.push(["Content-Type", contentType]);
  assert(renderHook || typeof htmlRender === "string");
  return {
    statusCode,
    headers,
    // TODO/v1-release: remove
    get contentType() {
      assertWarning2(false, "pageContext.httpResponse.contentType is deprecated and will be removed in the next major release. Use pageContext.httpResponse.headers instead, see https://vike.dev/migration/0.4.134", { onlyOnce: true });
      return contentType;
    },
    earlyHints,
    get body() {
      return getHttpResponseBody(htmlRender, renderHook);
    },
    ...getHttpResponseBodyStreamHandlers(htmlRender, renderHook)
  };
}
var init_createHttpResponse = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse.js"() {
    init_utils3();
    init_error_page();
    init_getHttpResponseBody();
    init_getEarlyHints();
    init_getCacheControl();
    init_assertNoInfiniteHttpRedirect();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/getExportNames.js
function getExportNames(p) {
  if (p.fileType === ".css") {
    return [];
  }
  if (p.exportNames) {
    return p.exportNames;
  }
  assert(p.fileExports, p.filePath);
  const exportNames = Object.keys(p.fileExports);
  return exportNames;
}
var init_getExportNames = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/getExportNames.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/analyzeExports.js
function analyzeExports({ pageFilesClientSide, pageFilesServerSide, pageId }) {
  return { isHtmlOnly: isHtmlOnly(), isClientRouting: isClientRouting() };
  function isHtmlOnly() {
    {
      const hasPageIdIsmrphFile = pageFilesServerSide.some((p) => p.pageId === pageId && p.fileType === ".page");
      if (hasPageIdIsmrphFile) {
        assertClientSideRenderHook();
        return false;
      }
    }
    {
      const hasPageIdServerFile = pageFilesServerSide.some((p) => p.pageId === pageId && p.fileType === ".page.server");
      if (!hasPageIdServerFile) {
        return false;
      }
    }
    {
      const definesClientRenderer = pageFilesClientSide.some((p) => p.pageId === pageId && p.fileType === ".page.client" && getExportNames(p).includes("render"));
      if (definesClientRenderer) {
        return false;
      }
    }
    return true;
  }
  function assertClientSideRenderHook() {
    const hasClientSideRenderHook = pageFilesClientSide.some((p) => {
      return getExportNames(p).includes("render");
    });
    assertUsage2(hasClientSideRenderHook, [
      "No client-side `render()` hook found.",
      "See https://vike.dev/render-modes for more information.",
      [
        "Loaded client-side page files (none of them `export { render }`):",
        ...pageFilesClientSide.map((p, i) => ` (${i + 1}): ${p.filePath}`)
      ].join("\n")
    ].join(" "));
  }
  function isClientRouting() {
    const hasClientRoutingExport = pageFilesClientSide.some((p) => {
      return getExportNames(p).includes("clientRouting");
    });
    return hasClientRoutingExport;
  }
}
var init_analyzeExports = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/analyzeExports.js"() {
    init_getExportNames();
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/determineClientEntry.js
function determineClientEntry({ pageFilesClientSide, pageFilesServerSide, isHtmlOnly, isClientRouting }) {
  let clientEntries = [];
  const pageFilesServerSideOnly = pageFilesServerSide.filter((p) => !pageFilesClientSide.includes(p));
  const clientDependencies = [];
  clientDependencies.push(...pageFilesClientSide.map((p) => ({ id: p.filePath, onlyAssets: false, eagerlyImported: false })));
  clientDependencies.push(...pageFilesServerSideOnly.map((p) => ({ id: p.filePath, onlyAssets: true, eagerlyImported: false })));
  if (isHtmlOnly) {
    clientEntries = pageFilesClientSide.map((p) => p.filePath);
  } else {
    const clientEntry = getVikeClientEntry(isClientRouting);
    clientDependencies.push({ id: clientEntry, onlyAssets: false, eagerlyImported: false });
    clientEntries = [clientEntry];
  }
  return { clientEntries, clientDependencies };
}
function getVikeClientEntry(isClientRouting) {
  return isClientRouting ? "@@vike/dist/esm/client/client-routing-runtime/entry.js" : "@@vike/dist/esm/client/server-routing-runtime/entry.js";
}
var init_determineClientEntry = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/determineClientEntry.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide.js
function analyzePageClientSide(pageFilesAll, pageId) {
  let pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  const pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
  const { isHtmlOnly, isClientRouting } = analyzeExports({ pageFilesClientSide, pageFilesServerSide, pageId });
  if (isHtmlOnly) {
    pageFilesClientSide = pageFilesClientSide.filter((p) => p.isEnv("CLIENT_ONLY") && !getExportNames(p).includes("render"));
    pageFilesClientSide = removeOverridenPageFiles(pageFilesClientSide);
  }
  const { clientEntries, clientDependencies } = determineClientEntry({
    pageFilesClientSide,
    pageFilesServerSide,
    isHtmlOnly,
    isClientRouting
  });
  return { isHtmlOnly, isClientRouting, clientEntries, clientDependencies, pageFilesClientSide, pageFilesServerSide };
}
async function analyzePageClientSideInit(pageFilesAll, pageId, { sharedPageFilesAlreadyLoaded }) {
  const pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  await Promise.all(pageFilesClientSide.map(async (p) => {
    assert(p.isEnv("CLIENT_ONLY") || p.isEnv("CLIENT_AND_SERVER"));
    if (sharedPageFilesAlreadyLoaded && p.isEnv("CLIENT_AND_SERVER")) {
      return;
    }
    await p.loadExportNames?.();
  }));
}
function removeOverridenPageFiles(pageFilesClientSide) {
  const pageFilesClientSide_ = [];
  for (const p of pageFilesClientSide) {
    pageFilesClientSide_.push(p);
    if (getExportNames(p).includes("overrideDefaultPages")) {
      break;
    }
  }
  return pageFilesClientSide_;
}
var init_analyzePageClientSide = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide.js"() {
    init_analyzeExports();
    init_determineClientEntry();
    init_getAllPageIdFiles();
    init_getAllPageIdFiles();
    init_utils();
    init_getExportNames();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/retrieveAssetsDev.js
async function retrieveAssetsDev(clientDependencies, viteDevServer) {
  const visitedModules = /* @__PURE__ */ new Set();
  const assetUrls = /* @__PURE__ */ new Set();
  await Promise.all(clientDependencies.map(async ({ id }) => {
    if (id.startsWith("@@vike"))
      return;
    assert(id);
    const { moduleGraph } = viteDevServer;
    const [_, graphId] = await moduleGraph.resolveUrl(id);
    assert(graphId, { id });
    const mod = moduleGraph.getModuleById(graphId);
    if (!mod) {
      return;
    }
    assert(mod, { id });
    collectCss(mod, assetUrls, visitedModules);
  }));
  return Array.from(assetUrls);
}
function collectCss(mod, styleUrls, visitedModules, importer) {
  assert(mod);
  if (!mod.url)
    return;
  if (visitedModules.has(mod.url))
    return;
  visitedModules.add(mod.url);
  if (isStyle(mod) && (!importer || !isStyle(importer))) {
    if (mod.url.startsWith("/")) {
      styleUrls.add(mod.url);
    } else if (mod.url.startsWith("\0")) {
      styleUrls.add(`/@id/__x00__${mod.url.substring(1)}`);
    } else {
      styleUrls.add(`/@id/${mod.url}`);
    }
  }
  mod.importedModules.forEach((dep) => {
    collectCss(dep, styleUrls, visitedModules, mod);
  });
}
function isStyle(mod) {
  if (styleFileRE.test(mod.url) || mod.id && /\?vue&type=style/.test(mod.id)) {
    assert(mod.type === "js");
    return true;
  }
  return false;
}
var init_retrieveAssetsDev = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/retrieveAssetsDev.js"() {
    init_utils3();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/extractAssetsQuery.js
function extractAssetsAddQuery(id) {
  const fileExtension = getFileExtension(id);
  if (!fileExtension || id.includes("virtual:vike:")) {
    return `${id}?${query}`;
  } else {
    if (!id.includes("?")) {
      return `${id}?${query}&lang.${fileExtension}`;
    } else {
      return id.replace("?", `?${query}&`);
    }
  }
}
function extractAssetsRemoveQuery(id) {
  if (!id.includes("?"))
    return id;
  const suffix = `?${query}`;
  assert(id.endsWith(query));
  return id.slice(0, -1 * suffix.length);
}
var query;
var init_extractAssetsQuery = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/extractAssetsQuery.js"() {
    init_utils2();
    query = "extractAssets";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/virtual-files/virtualFilePageConfigValuesAll.js
function getVirtualFileIdPageConfigValuesAll(pageId, isForClientSide) {
  const id = `${isForClientSide ? idBaseClient : idBaseServer}${pageId}`;
  return id;
}
function isVirtualFileIdPageConfigValuesAll(id) {
  id = getVirtualFileId(id);
  if (!id.includes(idBase2))
    return false;
  assert(id.startsWith(idBase2));
  const idOriginal = id;
  id = extractAssetsRemoveQuery(id);
  const isExtractAssets = idOriginal !== id;
  if (id.startsWith(idBaseClient)) {
    assert(isExtractAssets === false);
    return {
      pageId: id.slice(idBaseClient.length),
      isForClientSide: true,
      isExtractAssets
    };
  }
  if (id.startsWith(idBaseServer)) {
    return {
      pageId: id.slice(idBaseServer.length),
      isForClientSide: false,
      isExtractAssets
    };
  }
  assert(false);
}
var idBase2, idBaseClient, idBaseServer;
var init_virtualFilePageConfigValuesAll = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/virtual-files/virtualFilePageConfigValuesAll.js"() {
    init_extractAssetsQuery();
    init_utils2();
    idBase2 = "virtual:vike:pageConfigValuesAll:";
    idBaseClient = `${idBase2}client:`;
    idBaseServer = `${idBase2}server:`;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/prependEntriesDir.js
function prependEntriesDir(entryName) {
  if (entryName.startsWith("/")) {
    entryName = entryName.slice(1);
  }
  assert(!entryName.startsWith("/"));
  assert(entryName);
  entryName = `entries/${entryName}`;
  return entryName;
}
var init_prependEntriesDir = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/prependEntriesDir.js"() {
    init_utils2();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/getManifestEntry.js
function getManifestEntry(id, assetsManifest) {
  const debugInfo = getDebugInfo(id, assetsManifest);
  if (id.startsWith("@@vike/")) {
    const manifestKeyEnd = slice(id, "@@vike".length, 0);
    const { manifestKey: manifestKey2, manifestEntry: manifestEntry2 } = findEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id);
    assert(manifestEntry2 && manifestKey2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  if (isVirtualFileIdPageConfigValuesAll(id)) {
    {
      const manifestKey3 = id;
      const manifestEntry3 = assetsManifest[manifestKey3];
      if (manifestEntry3) {
        return { manifestEntry: manifestEntry3, manifestKey: manifestKey3 };
      }
    }
    const manifestKeyEnd = id;
    const { manifestKey: manifestKey2, manifestEntry: manifestEntry2 } = getEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id);
    assert(manifestEntry2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  if (id.startsWith("/")) {
    const manifestKey2 = id.slice(1);
    let manifestEntry2 = assetsManifest[manifestKey2];
    assert(manifestEntry2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  assertIsNpmPackageImport(id);
  const found = Object.entries(assetsManifest).find(([, e]) => e.name === prependEntriesDir(id));
  assert(found);
  const [manifestKey, manifestEntry] = found;
  return { manifestEntry, manifestKey };
}
function findEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id) {
  const debugInfo = getDebugInfo(id, assetsManifest, manifestKeyEnd);
  assert(manifestKeyEnd.startsWith("/"), debugInfo);
  const manifestKeys = [];
  for (const manifestKey2 in assetsManifest) {
    if (manifestKey2.endsWith(manifestKeyEnd)) {
      manifestKeys.push(manifestKey2);
    }
  }
  const manifestKeysRelative = manifestKeys.filter((k) => k.startsWith("../"));
  assert(manifestKeysRelative.length <= 1, debugInfo);
  const manifestKey = manifestKeysRelative[0] ?? manifestKeys[0] ?? null;
  if (!manifestKey) {
    return { manifestEntry: null, manifestKey: null };
  }
  const manifestEntry = assetsManifest[manifestKey];
  return { manifestEntry, manifestKey };
}
function getEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id) {
  const debugInfo = getDebugInfo(id, assetsManifest, manifestKeyEnd);
  const manifestKeys = [];
  for (const manifestKey2 in assetsManifest) {
    if (manifestKey2.endsWith(manifestKeyEnd)) {
      manifestKeys.push(manifestKey2);
    }
  }
  assert(manifestKeys.length <= 1, debugInfo);
  const manifestKey = manifestKeys[0];
  if (!manifestKey) {
    return { manifestEntry: null, manifestKey: null };
  }
  const manifestEntry = assetsManifest[manifestKey];
  return { manifestEntry, manifestKey };
}
function getDebugInfo(id, assetsManifest, manifestKeyEnd) {
  const manifestKeys = Object.keys(assetsManifest);
  if (manifestKeyEnd === void 0) {
    return { manifestKeys, id };
  } else {
    return { manifestKeys, manifestKeyEnd, id };
  }
}
var init_getManifestEntry = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/getManifestEntry.js"() {
    init_utils3();
    init_virtualFilePageConfigValuesAll();
    init_prependEntriesDir();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/retrieveAssetsProd.js
function retrieveAssetsProd(clientDependencies, assetsManifest, includeAssetsImportedByServer) {
  let assetUrls = /* @__PURE__ */ new Set();
  assert(assetsManifest);
  const visistedAssets = /* @__PURE__ */ new Set();
  clientDependencies.forEach(({ id, onlyAssets, eagerlyImported }) => {
    if (eagerlyImported)
      return;
    if (includeAssetsImportedByServer && onlyAssets && id.includes(".page.server.") && // We assume that all npm packages have already built their files: bundlers (Rollup, esbuild, tsup, ...) extract the CSS out of JavaScript => we can assume JavaScript to not import any CSS/assets.
    !isNpmPackageImport(id, {
      // I presume Vite already resolves path aliases when Vite sets the module's id
      cannotBePathAlias: true
    })) {
      id = extractAssetsAddQuery(id);
    }
    const { manifestKey } = getManifestEntry(id, assetsManifest);
    collectAssets(manifestKey, assetUrls, visistedAssets, assetsManifest, onlyAssets);
  });
  collectSingleStyle(assetUrls, assetsManifest);
  return Array.from(assetUrls);
}
function collectAssets(manifestKey, assetUrls, visistedAssets, assetsManifest, onlyCollectStaticAssets) {
  if (visistedAssets.has(manifestKey))
    return;
  visistedAssets.add(manifestKey);
  const manifestEntry = assetsManifest[manifestKey];
  assert(manifestEntry, { manifestKey });
  const { file } = manifestEntry;
  if (!onlyCollectStaticAssets) {
    assetUrls.add(`/${file}`);
  }
  const { imports = [], assets = [], css = [] } = manifestEntry;
  for (const manifestKey2 of imports) {
    const importManifestEntry = assetsManifest[manifestKey2];
    assert(importManifestEntry);
    collectAssets(manifestKey2, assetUrls, visistedAssets, assetsManifest, onlyCollectStaticAssets);
  }
  for (const cssAsset of css) {
    assetUrls.add(`/${cssAsset}`);
  }
  for (const asset of assets) {
    assetUrls.add(`/${asset}`);
  }
}
function collectSingleStyle(assetUrls, assetsManifest) {
  const style = assetsManifest["style.css"];
  if (style && Object.values(assetsManifest).filter((asset) => asset.file.endsWith(".css")).length === 1) {
    assetUrls.add(`/${style.file}`);
  }
}
var init_retrieveAssetsProd = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/retrieveAssetsProd.js"() {
    init_utils3();
    init_getManifestEntry();
    init_extractAssetsQuery();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/inferMediaType.js
function inferMediaType(href) {
  if (styleFileRE.test(href)) {
    return { mediaType: "text/css", assetType: "style" };
  }
  if (isScriptFile(href)) {
    return { mediaType: "text/javascript", assetType: "script" };
  }
  if (href.endsWith(".png")) {
    return { assetType: "image", mediaType: "image/png" };
  }
  if (href.endsWith(".webp")) {
    return { assetType: "image", mediaType: "image/webp" };
  }
  if (href.endsWith(".jpg") || href.endsWith(".jpeg")) {
    return { assetType: "image", mediaType: "image/jpeg" };
  }
  if (href.endsWith(".gif")) {
    return { assetType: "image", mediaType: "image/gif" };
  }
  if (href.endsWith(".svg")) {
    return { assetType: "image", mediaType: "image/svg+xml" };
  }
  if (href.endsWith(".avif")) {
    return { assetType: "image", mediaType: "image/avif" };
  }
  if (href.endsWith(".ttf")) {
    return { assetType: "font", mediaType: "font/ttf" };
  }
  if (href.endsWith(".woff")) {
    return { assetType: "font", mediaType: "font/woff" };
  }
  if (href.endsWith(".woff2")) {
    return { assetType: "font", mediaType: "font/woff2" };
  }
  if (href.endsWith(".mp4")) {
    return { assetType: "video", mediaType: "video/mp4" };
  }
  if (href.endsWith(".webm")) {
    return { assetType: "video", mediaType: "video/webm" };
  }
  if (href.endsWith(".ogv")) {
    return { assetType: "video", mediaType: "video/ogg" };
  }
  if (href.endsWith(".mpeg") || href.endsWith(".mpg")) {
    return { assetType: "video", mediaType: "video/mpeg" };
  }
  if (href.endsWith(".avi")) {
    return { assetType: "video", mediaType: "video/x-msvideo" };
  }
  if (href.endsWith(".mov") || href.endsWith(".qt")) {
    return { assetType: "video", mediaType: "video/quicktime" };
  }
  if (href.endsWith(".mp3")) {
    return { assetType: "audio", mediaType: "audio/mpeg" };
  }
  if (href.endsWith(".wav")) {
    return { assetType: "audio", mediaType: "audio/wav" };
  }
  if (href.endsWith(".ogg")) {
    return { assetType: "audio", mediaType: "audio/ogg" };
  }
  if (href.endsWith(".m4a")) {
    return { assetType: "audio", mediaType: "audio/aac" };
  }
  if (href.endsWith("midi") || href.endsWith(".mid")) {
    return { assetType: "audio", mediaType: "audio/midi" };
  }
  if (href.endsWith(".flac")) {
    return { assetType: "audio", mediaType: "audio/flac" };
  }
  return null;
}
var init_inferMediaType = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/inferMediaType.js"() {
    init_utils3();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/sortPageAssetsForEarlyHintsHeader.js
function sortPageAssetsForEarlyHintsHeader(pageAssets) {
  const globalContext = getGlobalContext();
  pageAssets.sort(higherFirst(({ assetType }) => {
    if (!globalContext.isProduction && assetType === "script") {
      return 1;
    }
    let priority = 0;
    if (assetType === "style")
      return priority;
    priority--;
    if (assetType === "font")
      return priority;
    priority--;
    if (assetType === "image")
      return priority;
    priority--;
    if (assetType === "video")
      return priority;
    priority--;
    if (assetType === "audio")
      return priority;
    priority--;
    if (assetType !== "script")
      return priority;
    priority--;
    return priority;
  }));
}
var init_sortPageAssetsForEarlyHintsHeader = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/sortPageAssetsForEarlyHintsHeader.js"() {
    init_globalContext();
    init_utils3();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets.js
async function getPageAssets(pageContext, clientDependencies, clientEntries) {
  const globalContext = getGlobalContext();
  const isDev = !globalContext.isProduction;
  let assetUrls;
  let clientEntriesSrc;
  if (isDev) {
    const { viteDevServer } = globalContext;
    clientEntriesSrc = await Promise.all(clientEntries.map((clientEntry) => globalObject8.resolveClientEntriesDev(clientEntry, viteDevServer)));
    assetUrls = await retrieveAssetsDev(clientDependencies, viteDevServer);
  } else {
    const { assetsManifest } = globalContext;
    clientEntriesSrc = clientEntries.map((clientEntry) => resolveClientEntriesProd(clientEntry, assetsManifest));
    assetUrls = retrieveAssetsProd(clientDependencies, assetsManifest, pageContext._includeAssetsImportedByServer);
  }
  let pageAssets = [];
  unique([...clientEntriesSrc, ...assetUrls]).forEach((src) => {
    const { mediaType = null, assetType = null } = inferMediaType(src) || {};
    if (isDev && assetType === "style") {
      if (src.endsWith("?inline")) {
        return;
      }
      src = src + "?direct";
    }
    const isEntry = clientEntriesSrc.includes(src) || // Vite automatically injects CSS, not only in development, but also in production (albeit with a FOUC). Therefore, strictly speaking, CSS aren't entries. We still, however, set `isEntry: true` for CSS, in order to denote page assets that should absolutely be injected in the HTML, regardless of preload strategy (not injecting CSS leads to FOUC).
    assetType === "style";
    pageAssets.push({
      src,
      assetType,
      mediaType,
      isEntry
    });
  });
  pageAssets.forEach(({ src }) => {
    assert(1 === pageAssets.filter((p) => p.src === src).length);
  });
  pageAssets = pageAssets.map((pageAsset) => {
    const baseServerAssets = pageContext._baseAssets || pageContext._baseServer;
    pageAsset.src = prependBase(toPosixPath(pageAsset.src), baseServerAssets);
    return pageAsset;
  });
  sortPageAssetsForEarlyHintsHeader(pageAssets);
  return pageAssets;
}
function resolveClientEntriesProd(clientEntry, assetsManifest) {
  const { manifestEntry } = getManifestEntry(clientEntry, assetsManifest);
  assert(manifestEntry.isEntry || manifestEntry.isDynamicEntry || clientEntry.endsWith(".css"), { clientEntry });
  let { file } = manifestEntry;
  assert(!file.startsWith("/"));
  return "/" + file;
}
var globalObject8;
var init_getPageAssets = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets.js"() {
    init_utils3();
    init_retrieveAssetsDev();
    init_retrieveAssetsProd();
    init_inferMediaType();
    init_getManifestEntry();
    init_sortPageAssetsForEarlyHintsHeader();
    init_globalContext();
    globalObject8 = getGlobalObject("getPageAssets.ts", {
      resolveClientEntriesDev: null
    });
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/debugPageFiles.js
function debugPageFiles({ pageContext, isHtmlOnly, isClientRouting, pageFilesLoaded, pageFilesServerSide, pageFilesClientSide, clientEntries, clientDependencies }) {
  const debug5 = createDebugger("vike:pageFiles", { serialization: { emptyArray: "None" } });
  const padding = "   - ";
  debug5("All page files:", printPageFiles(pageContext._pageFilesAll, true));
  debug5(`URL:`, pageContext.urlOriginal);
  debug5.options({ serialization: { emptyArray: "No match" } })(`Routing:`, printRouteMatches(pageContext._debugRouteMatches));
  debug5(`pageId:`, pageContext.pageId);
  debug5("Page type:", isHtmlOnly ? "HTML-only" : "SSR/SPA");
  debug5(`Routing type:`, !isHtmlOnly && isClientRouting ? "Client Routing" : "Server Routing");
  debug5("Server-side page files:", printPageFiles(pageFilesLoaded));
  assert(samePageFiles(pageFilesLoaded, pageFilesServerSide));
  debug5("Client-side page files:", printPageFiles(pageFilesClientSide));
  debug5("Client-side entries:", clientEntries);
  debug5("Client-side dependencies:", clientDependencies);
  return;
  function printRouteMatches(debugRouteMatches) {
    if (debugRouteMatches === "ROUTING_ERROR") {
      return "Routing Failed";
    }
    if (debugRouteMatches === "CUSTOM_ROUTING") {
      return "Custom Routing";
    }
    return debugRouteMatches;
  }
  function printPageFiles(pageFiles2, genericPageFilesLast = false) {
    if (pageFiles2.length === 0) {
      return "None";
    }
    return "\n" + pageFiles2.sort((p1, p2) => p1.filePath.localeCompare(p2.filePath)).sort(makeFirst((p) => p.isRendererPageFile ? !genericPageFilesLast : null)).sort(makeFirst((p) => p.isDefaultPageFile ? !genericPageFilesLast : null)).map((p) => p.filePath).map((s) => s.split("_default.page.").join(`${import_picocolors24.default.blue("_default")}.page.`)).map((s) => s.split("/renderer/").join(`/${import_picocolors24.default.red("renderer")}/`)).map((s) => padding + s).join("\n");
  }
}
function samePageFiles(pageFiles1, pageFiles2) {
  return pageFiles1.every((p1) => pageFiles2.some((p2) => p2.filePath === p1.filePath)) && pageFiles2.every((p2) => pageFiles1.some((p1) => p1.filePath === p2.filePath));
}
var import_picocolors24;
var init_debugPageFiles = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/debugPageFiles.js"() {
    import_picocolors24 = __toESM(require_picocolors(), 1);
    init_utils3();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/findPageConfig.js
function findPageConfig(pageConfigs, pageId) {
  const result = pageConfigs.filter((p) => p.pageId === pageId);
  assert(result.length <= 1);
  const pageConfig = result[0] ?? null;
  return pageConfig;
}
var init_findPageConfig = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/findPageConfig.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzeClientSide.js
function analyzeClientSide(pageConfig, pageFilesAll, pageId) {
  if (pageConfig) {
    const isClientRouting = getConfigValueRuntime(pageConfig, "clientRouting", "boolean")?.value ?? false;
    const isClientRuntimeLoaded = getConfigValueRuntime(pageConfig, "isClientRuntimeLoaded", "boolean")?.value ?? false;
    return { isClientRuntimeLoaded, isClientRouting };
  } else {
    const { isHtmlOnly, isClientRouting } = analyzePageClientSide(pageFilesAll, pageId);
    return { isClientRuntimeLoaded: !isHtmlOnly, isClientRouting };
  }
}
var init_analyzeClientSide = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageFiles/analyzeClientSide.js"() {
    init_getConfigValue();
    init_analyzePageClientSide();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/analyzePage.js
function analyzePage(pageFilesAll, pageConfig, pageId) {
  if (pageConfig) {
    const { isClientRuntimeLoaded, isClientRouting } = analyzeClientSide(pageConfig, pageFilesAll, pageId);
    const clientEntries = [];
    const clientFilePath = getConfigValueRuntime(pageConfig, "client", "string")?.value ?? null;
    if (clientFilePath)
      clientEntries.push(clientFilePath);
    if (isClientRuntimeLoaded)
      clientEntries.push(getVikeClientEntry(isClientRouting));
    const clientDependencies = [];
    clientDependencies.push({
      id: getVirtualFileIdPageConfigValuesAll(pageConfig.pageId, true),
      onlyAssets: isClientRuntimeLoaded ? false : true,
      eagerlyImported: false
    });
    if (!getGlobalContext().isProduction) {
      clientDependencies.push({
        id: getVirtualFileIdPageConfigValuesAll(pageConfig.pageId, false),
        onlyAssets: true,
        eagerlyImported: false
      });
    }
    clientEntries.forEach((clientEntry) => {
      clientDependencies.push({
        id: clientEntry,
        onlyAssets: false,
        eagerlyImported: false
      });
    });
    return {
      isHtmlOnly: !isClientRuntimeLoaded,
      isClientRouting,
      clientEntries,
      clientDependencies,
      // pageFilesClientSide and pageFilesServerSide are only used for debugging
      pageFilesClientSide: [],
      pageFilesServerSide: []
    };
  } else {
    return analyzePageClientSide(pageFilesAll, pageId);
  }
}
var init_analyzePage = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/analyzePage.js"() {
    init_determineClientEntry();
    init_analyzePageClientSide();
    init_virtualFilePageConfigValuesAll();
    init_analyzeClientSide();
    init_globalContext();
    init_getConfigValue();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/loadConfigValues.js
async function loadConfigValues(pageConfig, isDev) {
  if ("isAllLoaded" in pageConfig && // We don't need to cache in dev, since Vite already caches the virtual module
  !isDev) {
    return pageConfig;
  }
  const configValuesLoaded = await pageConfig.loadConfigValuesAll();
  const configValues = parseConfigValuesSerialized(configValuesLoaded.configValuesSerialized);
  Object.assign(pageConfig.configValues, configValues);
  objectAssign(pageConfig, { isAllLoaded: true });
  return pageConfig;
}
var init_loadConfigValues = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/page-configs/loadConfigValues.js"() {
    init_utils();
    init_parsePageConfigs();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/loadUserFilesServerSide.js
async function loadUserFilesServerSide(pageContext) {
  const pageConfig = findPageConfig(pageContext._pageConfigs, pageContext.pageId);
  const [{ pageFilesLoaded, pageContextExports }] = await Promise.all([
    loadPageUserFiles(pageContext._pageFilesAll, pageConfig, pageContext.pageId, !getGlobalContext().isProduction),
    analyzePageClientSideInit(pageContext._pageFilesAll, pageContext.pageId, { sharedPageFilesAlreadyLoaded: true })
  ]);
  const { isHtmlOnly, isClientRouting, clientEntries, clientDependencies, pageFilesClientSide, pageFilesServerSide } = analyzePage(pageContext._pageFilesAll, pageConfig, pageContext.pageId);
  const isV1Design = !!pageConfig;
  const passToClient = [];
  const errMsg = " should be an array of strings.";
  if (!isV1Design) {
    pageContextExports.exportsAll.passToClient?.forEach((e) => {
      assertUsage2(hasProp(e, "exportValue", "string[]"), `${e.exportSource}${errMsg}`);
      passToClient.push(...e.exportValue);
    });
  } else {
    pageContextExports.configEntries.passToClient?.forEach((e) => {
      const { configValue } = e;
      assert(isArray(configValue));
      const vals = configValue.flat(1);
      assertUsage2(isArrayOfStrings(vals), `${e.configDefinedAt}${errMsg}`);
      passToClient.push(...vals);
    });
  }
  const pageContextAddendum = {};
  objectAssign(pageContextAddendum, pageContextExports);
  objectAssign(pageContextAddendum, {
    Page: pageContextExports.exports.Page,
    _isHtmlOnly: isHtmlOnly,
    _passToClient: passToClient,
    _pageFilePathsLoaded: pageFilesLoaded.map((p) => p.filePath)
  });
  objectAssign(pageContextAddendum, {
    __getPageAssets: async () => {
      if ("_pageAssets" in pageContext) {
        return pageContext._pageAssets;
      } else {
        const pageAssets = await getPageAssets(pageContext, clientDependencies, clientEntries);
        objectAssign(pageContext, { _pageAssets: pageAssets });
        return pageContext._pageAssets;
      }
    }
  });
  Object.assign(pageContextAddendum, {
    _getPageAssets: async () => {
      assertWarning2(false, "pageContext._getPageAssets() deprecated, see https://vike.dev/preloading", {
        onlyOnce: true,
        showStackTrace: true
      });
      const pageAssetsOldFormat = [];
      (await pageContextAddendum.__getPageAssets()).forEach((p) => {
        if (p.assetType === "script" && p.isEntry) {
          pageAssetsOldFormat.push({
            src: p.src,
            preloadType: null,
            assetType: "script",
            mediaType: p.mediaType
          });
        }
        pageAssetsOldFormat.push({
          src: p.src,
          preloadType: p.assetType,
          assetType: p.assetType === "style" ? "style" : "preload",
          mediaType: p.mediaType
        });
      });
      return pageAssetsOldFormat;
    }
  });
  {
    debugPageFiles({
      pageContext,
      isHtmlOnly,
      isClientRouting,
      pageFilesLoaded,
      pageFilesClientSide,
      pageFilesServerSide,
      clientEntries,
      clientDependencies
    });
  }
  return pageContextAddendum;
}
async function loadPageUserFiles(pageFilesAll, pageConfig, pageId, isDev) {
  const pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
  const pageConfigLoaded = !pageConfig ? null : await loadConfigValues(pageConfig, isDev);
  await Promise.all(pageFilesServerSide.map((p) => p.loadFile?.()));
  const pageContextExports = getPageContextExports(pageFilesServerSide, pageConfigLoaded);
  return {
    pageContextExports,
    pageFilesLoaded: pageFilesServerSide
  };
}
var init_loadUserFilesServerSide = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/loadUserFilesServerSide.js"() {
    init_getPageFiles();
    init_analyzePageClientSide();
    init_utils3();
    init_getPageAssets();
    init_debugPageFiles();
    init_findPageConfig();
    init_analyzePage();
    init_globalContext();
    init_loadConfigValues();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/hooks/getHook.js
function getHook(pageContext, hookName) {
  if (!(hookName in pageContext.exports)) {
    return null;
  }
  const { hooksTimeout } = pageContext.config;
  const hookTimeout = getHookTimeout(hooksTimeout, hookName);
  const hookFn = pageContext.exports[hookName];
  const file = pageContext.exportsAll[hookName][0];
  assert(file.exportValue === hookFn);
  if (hookFn === null)
    return null;
  const hookFilePath = file.filePath;
  assert(hookFilePath);
  assert(!hookFilePath.endsWith(" "));
  assertHookFn(hookFn, { hookName, hookFilePath });
  return { hookFn, hookName, hookFilePath, hookTimeout };
}
function getHookFromPageConfigGlobal(pageConfigGlobal, hookName) {
  const configValue = pageConfigGlobal.configValues[hookName];
  if (!configValue)
    return null;
  const hookFn = configValue.value;
  if (!hookFn)
    return null;
  const hookFilePath = getHookFilePathToShowToUser(configValue.definedAtData);
  assert(hookFilePath);
  assertHookFn(hookFn, { hookName, hookFilePath });
  const hookTimeout = getHookTimeoutDefault(hookName);
  return { hookFn, hookName, hookFilePath, hookTimeout };
}
function assertHookFn(hookFn, { hookName, hookFilePath }) {
  assert(hookName && hookFilePath);
  assert(!hookName.endsWith(")"));
  assertUsage2(isCallable(hookFn), `Hook ${hookName}() defined by ${hookFilePath} should be a function`);
  checkType(hookFn);
}
function getHookTimeout(hooksTimeoutProvidedByUser, hookName) {
  const hooksTimeoutProvidedbyUserNormalized = getHooksTimeoutProvidedByUserNormalized(hooksTimeoutProvidedByUser);
  if (hooksTimeoutProvidedbyUserNormalized === false)
    return { error: false, warning: false };
  const providedbyUser = hooksTimeoutProvidedbyUserNormalized[hookName];
  const hookTimeout = getHookTimeoutDefault(hookName);
  if (providedbyUser?.error !== void 0)
    hookTimeout.error = providedbyUser.error;
  if (providedbyUser?.warning !== void 0)
    hookTimeout.warning = providedbyUser.warning;
  return hookTimeout;
}
function getHooksTimeoutProvidedByUserNormalized(hooksTimeoutProvidedByUser) {
  if (hooksTimeoutProvidedByUser === void 0)
    return {};
  if (hooksTimeoutProvidedByUser === false)
    return false;
  assertUsage2(isObject(hooksTimeoutProvidedByUser), `Setting ${import_picocolors25.default.cyan("hooksTimeout")} should be ${import_picocolors25.default.cyan("false")} or an object`);
  const hooksTimeoutProvidedByUserNormalized = {};
  Object.entries(hooksTimeoutProvidedByUser).forEach(([hookName, hookTimeoutProvidedbyUser]) => {
    if (hookTimeoutProvidedbyUser === false) {
      hooksTimeoutProvidedByUserNormalized[hookName] = { error: false, warning: false };
      return;
    }
    assertUsage2(isObject(hookTimeoutProvidedbyUser), `Setting ${import_picocolors25.default.cyan(`hooksTimeout.${hookName}`)} should be ${import_picocolors25.default.cyan("false")} or an object`);
    const [error, warning] = ["error", "warning"].map((timeoutName) => {
      const timeoutVal = hookTimeoutProvidedbyUser[timeoutName];
      if (timeoutVal === void 0 || timeoutVal === false)
        return timeoutVal;
      const errPrefix = `Setting ${import_picocolors25.default.cyan(`hooksTimeout.${hookName}.${timeoutName}`)} should be`;
      assertUsage2(typeof timeoutVal === "number", `${errPrefix} ${import_picocolors25.default.cyan("false")} or a number`);
      assertUsage2(timeoutVal > 0, `${errPrefix} a positive number`);
      return timeoutVal;
    });
    hooksTimeoutProvidedByUserNormalized[hookName] = { error, warning };
  });
  return hooksTimeoutProvidedByUserNormalized;
}
function getHookTimeoutDefault(hookName) {
  if (hookName === "onBeforeRoute") {
    return {
      error: 5 * 1e3,
      warning: 1 * 1e3
    };
  }
  if (globalObject9.isPrerendering) {
    return {
      error: 2 * 60 * 1e3,
      warning: 30 * 1e3
    };
  } else {
    assert(!hookName.toLowerCase().includes("prerender"));
  }
  return {
    error: 30 * 1e3,
    warning: 4 * 1e3
  };
}
var import_picocolors25, globalObject9;
var init_getHook = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/hooks/getHook.js"() {
    init_getGlobalObject();
    init_helpers();
    init_getConfigValue();
    init_utils();
    import_picocolors25 = __toESM(require_picocolors(), 1);
    globalObject9 = getGlobalObject("getHook.ts", {});
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/preparePageContextForUserConsumption.js
function preparePageContextForUserConsumption(pageContext) {
  assert(pageContext.pageId);
  assert("config" in pageContext);
  assert("configEntries" in pageContext);
  addIs404ToPageProps(pageContext);
  if (!("_pageId" in pageContext)) {
    Object.defineProperty(pageContext, "_pageId", {
      get() {
        assertWarning2(false, "pageContext._pageId has been renamed to pageContext.pageId", {
          showStackTrace: true,
          onlyOnce: true
        });
        return pageContext.pageId;
      },
      enumerable: false
    });
  }
  sortPageContext(pageContext);
}
function sortPageContext(pageContext) {
  let descriptors = Object.getOwnPropertyDescriptors(pageContext);
  for (const key of Object.keys(pageContext))
    delete pageContext[key];
  descriptors = Object.fromEntries(Object.entries(descriptors).sort(([key1], [key2]) => compareString(key1, key2)));
  Object.defineProperties(pageContext, descriptors);
}
var init_preparePageContextForUserConsumption = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/preparePageContextForUserConsumption.js"() {
    init_utils();
    init_addIs404ToPageProps();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/preparePageContextForUserConsumptionServerSide.js
function preparePageContextForUserConsumptionServerSide(pageContext) {
  assertPageContextUrl(pageContext);
  assert(isPlainObject(pageContext.routeParams));
  assert("Page" in pageContext);
  assert(typeof pageContext.isClientSideNavigation === "boolean");
  preparePageContextForUserConsumption(pageContext);
}
var init_preparePageContextForUserConsumptionServerSide = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/preparePageContextForUserConsumptionServerSide.js"() {
    init_utils3();
    init_getPageContextUrlComputed();
    init_preparePageContextForUserConsumption();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/assertHookReturnedObject.js
function assertHookReturnedObject(obj, keysExpected, errPrefix) {
  assert(!errPrefix.endsWith(" "));
  const keysUnknown = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (!keysExpected.includes(key)) {
      keysUnknown.push(key);
    }
  }
  assertUsage2(keysUnknown.length === 0, [
    errPrefix,
    "returned an object with following unknown keys:",
    stringifyStringArray(keysUnknown) + ".",
    "Only following keys are allowed:",
    stringifyStringArray(keysExpected) + "."
  ].join(" "));
}
var init_assertHookReturnedObject = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/assertHookReturnedObject.js"() {
    init_utils();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertRoutingType.js
function assertClientRouting() {
  assertNoContradiction(checkIfClientRouting());
  state.isClientRouting = true;
}
function checkIfClientRouting() {
  return state.isClientRouting !== false;
}
function assertNoContradiction(noContradiction) {
  assertUsage2(isBrowser(), `${import_picocolors26.default.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`, { showStackTrace: true });
  assertWarning2(noContradiction, "You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.", { showStackTrace: true, onlyOnce: true });
}
var import_picocolors26, state;
var init_assertRoutingType = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/utils/assertRoutingType.js"() {
    init_assert();
    init_getGlobalObject();
    init_isBrowser();
    import_picocolors26 = __toESM(require_picocolors(), 1);
    state = getGlobalObject("utils/assertRouterType.ts", {});
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/utils.js
var init_utils4 = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/utils.js"() {
    init_assertRoutingType();
    init_isBrowser();
    init_assert();
    init_hasProp();
    init_isObjectWithKeys();
    init_sorter();
    init_isPromise();
    init_isPlainObject();
    init_objectAssign();
    init_slice();
    init_unique();
    init_isBrowser();
    init_parseUrl();
    init_checkType();
    init_joinEnglish();
    init_truncateString();
    init_isCallable();
    if (isBrowser()) {
      assertClientRouting();
    }
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/abort.js
function isAbortError(thing) {
  return typeof thing === "object" && thing !== null && stamp2 in thing;
}
function logAbortErrorHandled(err, isProduction, pageContext) {
  if (isProduction)
    return;
  const urlCurrent = pageContext._urlRewrite ?? pageContext.urlOriginal;
  assert(urlCurrent);
  const abortCall = err._pageContextAbort._abortCall;
  assert(abortCall);
  const hookLoc = isUserHookError(err);
  let thrownBy = "";
  if (hookLoc) {
    thrownBy = ` by ${import_picocolors27.default.cyan(`${hookLoc.hookName}()`)} hook defined at ${hookLoc.hookFilePath}`;
  } else {
  }
  assertInfo(false, `${import_picocolors27.default.cyan(abortCall)} thrown${thrownBy} while rendering ${import_picocolors27.default.cyan(urlCurrent)}`, {
    onlyOnce: false
  });
}
function getPageContextFromAllRewrites(pageContextsFromRewrite) {
  assertNoInfiniteLoop(pageContextsFromRewrite);
  const pageContextFromAllRewrites = { _urlRewrite: null };
  pageContextsFromRewrite.forEach((pageContextFromRewrite) => {
    Object.assign(pageContextFromAllRewrites, pageContextFromRewrite);
  });
  return pageContextFromAllRewrites;
}
function assertNoInfiniteLoop(pageContextsFromRewrite) {
  const urlRewrites = [];
  pageContextsFromRewrite.forEach((pageContext) => {
    const urlRewrite = pageContext._urlRewrite;
    {
      const idx = urlRewrites.indexOf(urlRewrite);
      if (idx !== -1) {
        const loop = [...urlRewrites.slice(idx), urlRewrite].map((url) => `render('${url}')`).join(" => ");
        assertUsage2(false, `Infinite loop of render() calls: ${loop}`);
      }
    }
    urlRewrites.push(urlRewrite);
  });
}
function assertNoInfiniteAbortLoop(rewriteCount, redirectCount) {
  const abortCalls = [
    // prettier-ignore
    // biome-ignore format:
    rewriteCount > 0 && import_picocolors27.default.cyan("throw render('/some-url')"),
    redirectCount > 0 && import_picocolors27.default.cyan("throw redirect('/some-url')")
  ].filter(Boolean).join(" and ");
  assertUsage2(rewriteCount + redirectCount <= 7, `Maximum chain length of 7 ${abortCalls} exceeded. Did you define an infinite loop of ${abortCalls}?`);
}
var import_picocolors27, stamp2;
var init_abort = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/abort.js"() {
    init_executeHook();
    init_utils4();
    import_picocolors27 = __toESM(require_picocolors(), 1);
    stamp2 = "_isAbortError";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/isNewError.js
function isNewError(errErrorPage, errNominalPage) {
  warnIfErrorIsNotObject(errErrorPage);
  return !isSameErrorMessage(errNominalPage, errErrorPage) || // Isn't this redudant/superfluous? I think we can remove this entire file and only use isSameErrorMessage() instead.
  !hasAlreadyLogged(errNominalPage);
}
function hasAlreadyLogged(err) {
  if (!isObject(err))
    return false;
  return globalObject10.wasAlreadyLogged.has(err);
}
function setAlreadyLogged(err) {
  if (!isObject(err))
    return;
  globalObject10.wasAlreadyLogged.add(err);
}
var globalObject10;
var init_isNewError = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/isNewError.js"() {
    init_utils3();
    globalObject10 = getGlobalObject("runtime/renderPage/isNewError.ts", {
      wasAlreadyLogged: /* @__PURE__ */ new WeakSet()
    });
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/logErrorHint.js
function logErrorHint(error) {
  const hint = getErrorHint(error);
  if (hint)
    logHint(hint);
}
function getErrorHint(error) {
  {
    const knownErr = isKnownError(error);
    if (knownErr) {
      if (knownErr.link) {
        return hintLinkPrefix + knownErr.link;
      } else {
        return hintDefault;
      }
    }
  }
  return null;
}
function logHint(hint) {
  hint = formatHintLog(hint);
  hint = import_picocolors28.default.bold(hint);
  console.error(hint);
}
function isKnownError(error) {
  const anywhere = getAnywhere(error);
  const knownErr = [
    //
    ...errorsMisc,
    ...errorsReact,
    ...errorsCjsEsm_withPreciseLink,
    ...errorsCjsEsm
  ].find((knownErorr) => {
    if (!includesLowercase(anywhere, knownErorr.errMsg))
      return false;
    if (knownErorr.shouldMentionNodeModules !== false && !includesLowercase(anywhere, "node_modules"))
      return false;
    return true;
  });
  if (!knownErr)
    return false;
  return knownErr;
}
function includesLowercase(str, substr) {
  if (substr instanceof RegExp) {
    let { flags: flags2 } = substr;
    if (!flags2.includes("i"))
      flags2 += "i";
    const regex = new RegExp(substr.source, flags2);
    return regex.test(str);
  }
  if (typeof substr === "string") {
    return str.toLowerCase().includes(substr.toLowerCase());
  }
  assert(false);
}
function getAnywhere(error) {
  const code = getErrCode(error);
  const message = getErrMessage(error);
  const stack = getErrStack(error);
  const anywhere = [code, message, stack].filter(Boolean).join("\n");
  return anywhere;
}
function getErrMessage(err) {
  if (!isObject(err))
    return null;
  if (!err.message)
    return null;
  if (typeof err.message !== "string")
    return null;
  return err.message;
}
function getErrCode(err) {
  if (!isObject(err))
    return null;
  if (!err.code)
    return null;
  if (typeof err.code !== "string")
    return null;
  return err.code;
}
function getErrStack(err) {
  if (!isObject(err))
    return null;
  if (!err.stack)
    return null;
  if (typeof err.stack !== "string")
    return null;
  return err.stack;
}
var import_picocolors28, hintDefault, hintLinkPrefix, errorsMisc, errorsReact, errorsCjsEsm_withPreciseLink, errorsCjsEsm;
var init_logErrorHint = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/logErrorHint.js"() {
    init_utils3();
    import_picocolors28 = __toESM(require_picocolors(), 1);
    hintDefault = "The error could be a CJS/ESM issue, see https://vike.dev/broken-npm-package";
    hintLinkPrefix = "To fix this error, see ";
    errorsMisc = [
      {
        errMsg: "jsxDEV is not a function",
        link: "https://github.com/vikejs/vike/issues/1469#issuecomment-1919518096",
        shouldMentionNodeModules: false
      },
      {
        // ```
        // Error [RollupError]: Could not resolve "../dist/client/assets.json" from "renderer/+onRenderHtml.tsx"
        // ```
        errMsg: "assets.json",
        link: "https://vike.dev/getGlobalContext",
        shouldMentionNodeModules: false
      }
    ];
    errorsReact = [
      {
        errMsg: "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components)",
        link: "https://vike.dev/broken-npm-package#react-invalid-component",
        // The stack trace can be user-land while the import is coming from node_modules
        shouldMentionNodeModules: false
      },
      {
        // React's "Invalid hook call.", see https://github.com/vikejs/vike/discussions/1637#discussioncomment-9424712
        errMsg: "Cannot read properties of null (reading 'useContext')"
      }
    ];
    errorsCjsEsm_withPreciseLink = [
      {
        // `SyntaxError: Named export '${exportName}' not found. The requested module '${packageName}' is a CommonJS module, which may not support all module.exports as named exports.`
        errMsg: /Named export.*not found/i,
        link: "https://vike.dev/broken-npm-package#named-export-not-found",
        // It seems that this always points to an npm package import.
        shouldMentionNodeModules: false
      }
    ];
    errorsCjsEsm = [
      { errMsg: "ERR_UNSUPPORTED_DIR_IMPORT" },
      { errMsg: "ERR_REQUIRE_ESM" },
      { errMsg: "Must use import" },
      { errMsg: /Cannot find \S+ '(\S+)' imported from (\S+)/ },
      { errMsg: "ERR_UNKNOWN_FILE_EXTENSION" },
      { errMsg: /Unknown file extension "\S+" for (\S+)/ },
      // `SyntaxError: Cannot use import statement outside a module`.
      {
        errMsg: "Cannot use import statement",
        // Since user code is always ESM, this error must always originate from an npm package.
        shouldMentionNodeModules: false
      },
      { errMsg: "is not exported" },
      { errMsg: "Cannot read properties of undefined" },
      { errMsg: ".default is not" },
      // Using CJS inside ESM modules.
      { errMsg: "require is not a function" },
      { errMsg: "exports is not defined" },
      { errMsg: "module is not defined" },
      { errMsg: "window is not defined" },
      { errMsg: "not defined in ES" },
      { errMsg: "Unexpected token 'export'" }
    ];
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/loggerProd.js
function logErrorProd(err, _httpRquestId) {
  warnIfErrorIsNotObject(err);
  setAlreadyLogged(err);
  if (isAbortError(err)) {
    return;
  }
  const errStr = isObject(err) && "stack" in err ? String(err.stack) : String(err);
  console.error(import_picocolors29.default.red(errStr));
  onRuntimeError(err);
}
function onRuntimeError(err) {
  logErrorHint(err);
}
var import_picocolors29;
var init_loggerProd = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/loggerProd.js"() {
    init_abort();
    init_isNewError();
    init_utils3();
    import_picocolors29 = __toESM(require_picocolors(), 1);
    init_logErrorHint();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/loggerRuntime.js
var logRuntimeError, logRuntimeInfo;
var init_loggerRuntime = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/loggerRuntime.js"() {
    init_loggerProd();
    logRuntimeInfo = null;
    logRuntimeError = // @ts-expect-error
    logRuntimeError ?? // Default
    logErrorProd;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/executeOnRenderHtmlHook.js
async function executeOnRenderHtmlHook(pageContext) {
  const { renderHook, hookFn } = getRenderHook(pageContext);
  objectAssign(pageContext, { _renderHook: renderHook });
  preparePageContextForUserConsumptionServerSide(pageContext);
  const hookReturnValue = await executeHook(() => hookFn(pageContext), renderHook, pageContext);
  const { documentHtml, pageContextProvidedByRenderHook, pageContextPromise, injectFilter } = processHookReturnValue(hookReturnValue, renderHook);
  Object.assign(pageContext, pageContextProvidedByRenderHook);
  objectAssign(pageContext, { _pageContextPromise: pageContextPromise });
  const onErrorWhileStreaming = (err) => {
    logRuntimeError(err, pageContext._httpRequestId);
    if (!pageContext.errorWhileRendering) {
      pageContext.errorWhileRendering = err;
    }
  };
  const htmlRender = await renderDocumentHtml(documentHtml, pageContext, onErrorWhileStreaming, injectFilter);
  assert(typeof htmlRender === "string" || isStream(htmlRender));
  return { htmlRender, renderHook };
}
function getRenderHook(pageContext) {
  let hookFound;
  {
    let hook;
    let hookName = void 0;
    hook = getHook(pageContext, "onRenderHtml");
    if (hook) {
      hookName = "onRenderHtml";
    } else {
      hook = getHook(pageContext, "render");
      if (hook) {
        hookName = "render";
      }
    }
    if (hook) {
      assert(hookName);
      const { hookFilePath, hookFn, hookTimeout } = hook;
      hookFound = {
        hookFn,
        renderHook: { hookFn, hookFilePath, hookName, hookTimeout }
      };
    }
  }
  if (!hookFound) {
    const hookName = pageContext._pageConfigs.length > 0 ? "onRenderHtml" : "render";
    assertUsage2(false, [
      `No ${hookName}() hook found, see https://vike.dev/${hookName}`
      /*
      'See https://vike.dev/render-modes for more information.',
      [
        // 'Loaded config files (none of them define the onRenderHtml() hook):',
        'Loaded server-side page files (none of them `export { render }`):',
        ...pageContext._pageFilePathsLoaded.map((f, i) => ` (${i + 1}): ${f}`)
      ].join('\n')
      */
    ].join(" "));
  }
  return hookFound;
}
function processHookReturnValue(hookReturnValue, renderHook) {
  let documentHtml;
  let pageContextPromise = null;
  let pageContextProvidedByRenderHook = null;
  let injectFilter = null;
  const ret = () => ({ documentHtml, pageContextProvidedByRenderHook, pageContextPromise, injectFilter });
  if (hookReturnValue === null)
    return ret();
  if (isDocumentHtml(hookReturnValue)) {
    documentHtml = hookReturnValue;
    return ret();
  }
  const errPrefix = `The ${renderHook.hookName}() hook defined at ${renderHook.hookFilePath}`;
  const errSuffix = `a string generated with the ${import_picocolors30.default.cyan("escapeInject`<html>...</html>`")} template tag or a string returned by ${import_picocolors30.default.cyan("dangerouslySkipEscape()")}, see https://vike.dev/escapeInject`;
  if (typeof hookReturnValue === "string") {
    assertWarning2(false, [errPrefix, "returned a plain JavaScript string which is dangerous: it should instead return", errSuffix].join(" "), { onlyOnce: true });
    hookReturnValue = dangerouslySkipEscape(hookReturnValue);
  }
  assertUsage2(isObject(hookReturnValue), [
    errPrefix,
    `should return ${import_picocolors30.default.cyan("null")}, the value ${import_picocolors30.default.cyan("documentHtml")}, or an object ${import_picocolors30.default.cyan("{ documentHtml, pageContext }")} where ${import_picocolors30.default.cyan("pageContext")} is ${import_picocolors30.default.cyan("undefined")} or an object holding additional pageContext values, and where ${import_picocolors30.default.cyan("documentHtml")} is`,
    errSuffix
  ].join(" "));
  assertHookReturnedObject(hookReturnValue, ["documentHtml", "pageContext", "injectFilter"], errPrefix);
  if (hookReturnValue.injectFilter) {
    assertUsage2(isCallable(hookReturnValue.injectFilter), "injectFilter should be a function");
    injectFilter = hookReturnValue.injectFilter;
  }
  assertUsage2(hookReturnValue.documentHtml, `${errPrefix} returned an object that is missing the ${import_picocolors30.default.code("documentHtml")} property.`);
  {
    let val = hookReturnValue.documentHtml;
    const errBegin = `${errPrefix} returned ${import_picocolors30.default.cyan("{ documentHtml }")}, but ${import_picocolors30.default.cyan("documentHtml")}`;
    if (typeof val === "string") {
      assertWarning2(false, [
        errBegin,
        `is a plain JavaScript string which is dangerous: ${import_picocolors30.default.cyan("documentHtml")} should be`,
        errSuffix
      ].join(" "), { onlyOnce: true });
      val = dangerouslySkipEscape(val);
    }
    assertUsage2(isDocumentHtml(val), [errBegin, "should be", errSuffix].join(" "));
    documentHtml = val;
  }
  if (hookReturnValue.pageContext) {
    const val = hookReturnValue.pageContext;
    const errBegin = `${errPrefix} returned ${import_picocolors30.default.cyan("{ pageContext }")}, but ${import_picocolors30.default.cyan("pageContext")}`;
    if (isPromise(val) || isCallable(val)) {
      assertWarning2(!isPromise(val), `${errBegin} is a promise which is deprecated in favor of async functions, see https://vike.dev/streaming#initial-data-after-stream-end`, { onlyOnce: true });
      pageContextPromise = val;
    } else {
      assertUsage2(isObject(val), `${errBegin} should be an object or an async function, see https://vike.dev/streaming#initial-data-after-stream-end`);
      assertPageContextProvidedByUser(val, renderHook);
      pageContextProvidedByRenderHook = val;
    }
  }
  return ret();
}
var import_picocolors30;
var init_executeOnRenderHtmlHook = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/executeOnRenderHtmlHook.js"() {
    init_renderHtml();
    init_getHook();
    init_utils3();
    init_stream();
    init_assertPageContextProvidedByUser();
    init_preparePageContextForUserConsumptionServerSide();
    init_assertHookReturnedObject();
    init_loggerRuntime();
    import_picocolors30 = __toESM(require_picocolors(), 1);
    init_executeHook();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/assertOnBeforeRenderHookReturn.js
function assertOnBeforeRenderHookReturn(hookReturnValue, hookFilePath) {
  if (hookReturnValue === void 0 || hookReturnValue === null) {
    return;
  }
  const errPrefix = `The onBeforeRender() hook defined by ${hookFilePath}`;
  assertUsage2(isPlainObject(hookReturnValue), `${errPrefix} should return a plain JavaScript object, ${import_picocolors31.default.cyan("undefined")}, or ${import_picocolors31.default.cyan("null")}`);
  assertHookReturnedObject(hookReturnValue, ["pageContext"], errPrefix);
  if (hookReturnValue.pageContext) {
    assertPageContextProvidedByUser(hookReturnValue["pageContext"], { hookName: "onBeforeRender", hookFilePath });
  }
}
var import_picocolors31;
var init_assertOnBeforeRenderHookReturn = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/assertOnBeforeRenderHookReturn.js"() {
    init_utils();
    init_assertPageContextProvidedByUser();
    init_assertHookReturnedObject();
    import_picocolors31 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/executeOnBeforeRenderAndDataHooks.js
async function executeOnBeforeRenderAndDataHooks(pageContext) {
  if (pageContext._pageContextAlreadyProvidedByOnPrerenderHook) {
    return;
  }
  const dataHook = getHook(pageContext, "data");
  const onBeforeRenderHook = getHook(pageContext, "onBeforeRender");
  if (!dataHook && !onBeforeRenderHook) {
    return;
  }
  preparePageContextForUserConsumptionServerSide(pageContext);
  if (dataHook) {
    const hookResult = await executeHook(() => dataHook.hookFn(pageContext), dataHook, pageContext);
    const pageContextFromHook = {
      data: hookResult
    };
    Object.assign(pageContext, pageContextFromHook);
  }
  if (onBeforeRenderHook) {
    const hookResult = await executeHook(() => onBeforeRenderHook.hookFn(pageContext), onBeforeRenderHook, pageContext);
    assertOnBeforeRenderHookReturn(hookResult, onBeforeRenderHook.hookFilePath);
    const pageContextFromHook = hookResult?.pageContext;
    Object.assign(pageContext, pageContextFromHook);
  }
}
var init_executeOnBeforeRenderAndDataHooks = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/executeOnBeforeRenderAndDataHooks.js"() {
    init_getHook();
    init_preparePageContextForUserConsumptionServerSide();
    init_assertOnBeforeRenderHookReturn();
    init_executeHook();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/executeGuardHook.js
async function executeGuardHook(pageContext, prepareForUserConsumption) {
  let hook;
  if (pageContext._pageFilesAll.length > 0) {
    assert(pageContext._pageConfigs.length === 0);
    hook = findPageGuard(pageContext.pageId, pageContext._pageFilesAll);
  } else {
    hook = getHook(pageContext, "guard");
  }
  if (!hook)
    return;
  const guard = hook.hookFn;
  let pageContextForUserConsumption = pageContext;
  const res = prepareForUserConsumption(pageContext);
  if (res)
    pageContextForUserConsumption = res;
  const hookResult = await executeHook(() => guard(pageContextForUserConsumption), hook, pageContext);
  assertUsage2(hookResult === void 0, `${errIntro} ${hook.hookFilePath} returns a value, but guard() shouldn't return any value`);
}
function findPageGuard(pageId, pageFilesAll) {
  const pageRouteFile = pageFilesAll.find((p) => p.pageId === pageId && p.fileType === ".page.route");
  if (!pageRouteFile)
    return null;
  const { filePath, fileExports } = pageRouteFile;
  assert(fileExports);
  const hookFn = fileExports.guard;
  if (!hookFn)
    return null;
  const hookFilePath = filePath;
  const hookTimeout = getHookTimeoutDefault("guard");
  assertUsage2(isCallable(hookFn), `${errIntro} ${hookFilePath} should be a function`);
  return { hookFn, hookName: "guard", hookFilePath, hookTimeout };
}
var errIntro;
var init_executeGuardHook = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/executeGuardHook.js"() {
    init_getHook();
    init_utils4();
    init_executeHook();
    errIntro = "The guard() hook defined by";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/deduceRouteStringFromFilesystemPath.js
function deduceRouteStringFromFilesystemPath(pageId, filesystemRoots) {
  const filesystemRootsMatch = filesystemRoots.filter(({ filesystemRoot }) => pageId.startsWith(filesystemRoot)).sort(higherFirst(({ filesystemRoot }) => filesystemRoot.length));
  const fsBase = filesystemRootsMatch[0];
  let filesystemRoute;
  if (fsBase) {
    const { filesystemRoot, urlRoot } = fsBase;
    const debugInfo = { pageId, filesystemRoot, urlRoot };
    assert(urlRoot.startsWith("/") && pageId.startsWith("/") && filesystemRoot.startsWith("/"), debugInfo);
    assert(pageId.startsWith(filesystemRoot), debugInfo);
    if (filesystemRoot !== "/") {
      assert(!filesystemRoot.endsWith("/"), debugInfo);
      filesystemRoute = slice(pageId, filesystemRoot.length, 0);
    } else {
      filesystemRoute = pageId;
    }
    assert(filesystemRoute.startsWith("/"), debugInfo);
    filesystemRoute = urlRoot + (urlRoot.endsWith("/") ? "" : "/") + slice(filesystemRoute, 1, 0);
  } else {
    filesystemRoute = pageId;
  }
  assert(filesystemRoute.startsWith("/"));
  filesystemRoute = filesystemRoute.split("/").filter((dir) => dir !== "pages" && dir !== "src" && dir !== "index").join("/");
  assert(!filesystemRoute.includes(".page."));
  assert(!filesystemRoute.endsWith("."));
  if (filesystemRoute.endsWith("/index")) {
    filesystemRoute = slice(filesystemRoute, 0, -"/index".length);
  }
  if (filesystemRoute === "") {
    filesystemRoute = "/";
  }
  assert(filesystemRoute.startsWith("/"));
  assert(!filesystemRoute.endsWith("/") || filesystemRoute === "/");
  return filesystemRoute;
}
var init_deduceRouteStringFromFilesystemPath = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/deduceRouteStringFromFilesystemPath.js"() {
    init_utils4();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/resolveRouteFunction.js
async function resolveRouteFunction(routeFunction, pageContext, routeDefinedAtString) {
  assertPageContextUrl(pageContext);
  let result = routeFunction(pageContext);
  assertSyncRouting(result, `The Route Function ${routeDefinedAtString}`);
  result = await result;
  if (result === false) {
    return null;
  }
  if (result === true) {
    result = {};
  }
  assertUsage2(isPlainObject(result), `The Route Function ${routeDefinedAtString} should return a boolean or a plain JavaScript object (but it's ${import_picocolors32.default.cyan(`typeof result === ${JSON.stringify(typeof result)}`)} instead)`);
  if ("match" in result) {
    const { match } = result;
    assertUsage2(typeof match === "boolean", `The ${import_picocolors32.default.cyan("match")} value returned by the Route Function ${routeDefinedAtString} should be a boolean.`);
    if (!match) {
      return null;
    }
  }
  let precedence = null;
  if ("precedence" in result) {
    precedence = result.precedence;
    assertUsage2(typeof precedence === "number", `The ${import_picocolors32.default.cyan("precedence")} value returned by the Route Function ${routeDefinedAtString} should be a number.`);
  }
  assertRouteParams(result, `The ${import_picocolors32.default.cyan("routeParams")} object returned by the Route Function ${routeDefinedAtString} should`);
  const routeParams = result.routeParams || {};
  assertUsage2(!("pageContext" in result), `Providing ${import_picocolors32.default.cyan("pageContext")} in Route Functions is prohibited, see https://vike.dev/route-function#cannot-provide-pagecontext`);
  assert(isPlainObject(routeParams));
  Object.keys(result).forEach((key) => {
    assertUsage2(key === "match" || key === "routeParams" || key === "precedence", `The Route Function ${routeDefinedAtString} returned an object with an unknown property ${import_picocolors32.default.cyan(key)} (the known properties are ${import_picocolors32.default.cyan("match")}, ${import_picocolors32.default.cyan("routeParams")}, and ${import_picocolors32.default.cyan("precedence")})`);
  });
  return {
    precedence,
    routeParams
  };
}
function assertSyncRouting(res, errPrefix) {
  assertWarning2(!isPromise(res), `${errPrefix} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vike.dev/route-function#async`, { onlyOnce: true });
}
function warnDeprecatedAllowKey() {
  const allowKey = import_picocolors32.default.cyan("iKnowThePerformanceRisksOfAsyncRouteFunctions");
  assertWarning2(false, `${allowKey} is deprecated and will be removed in the next major release`, { onlyOnce: true });
}
function assertRouteParams(result, errPrefix) {
  assert(errPrefix.endsWith(" should"));
  if (!hasProp(result, "routeParams")) {
    return;
  }
  assert(errPrefix.endsWith(" should"));
  assertUsage2(hasProp(result, "routeParams", "string{}"), `${errPrefix} be an object holding string values.`);
}
var import_picocolors32;
var init_resolveRouteFunction = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/resolveRouteFunction.js"() {
    init_getPageContextUrlComputed();
    init_utils4();
    import_picocolors32 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/loadPageRoutes.js
async function loadPageRoutes(pageFilesAll, pageConfigs, pageConfigGlobal, allPageIds) {
  await Promise.all(pageFilesAll.filter((p) => p.fileType === ".page.route").map((p) => p.loadFile?.()));
  const { onBeforeRouteHook, filesystemRoots } = getGlobalHooks(pageFilesAll, pageConfigs, pageConfigGlobal);
  const pageRoutes = getPageRoutes(filesystemRoots, pageFilesAll, pageConfigs, allPageIds);
  return { pageRoutes, onBeforeRouteHook };
}
function getPageRoutes(filesystemRoots, pageFilesAll, pageConfigs, allPageIds) {
  const pageRoutes = [];
  if (pageConfigs.length > 0) {
    assert(filesystemRoots === null);
    const comesFromV1PageConfig = true;
    pageConfigs.filter((p) => !p.isErrorPage).forEach((pageConfig) => {
      const pageId = pageConfig.pageId;
      let pageRoute = null;
      {
        const configName = "route";
        const configValue = getConfigValueRuntime(pageConfig, configName);
        if (configValue) {
          const route2 = configValue.value;
          assert(configValue.definedAtData);
          const definedAtString = getDefinedAtString(configValue.definedAtData, configName);
          if (typeof route2 === "string") {
            pageRoute = {
              pageId,
              comesFromV1PageConfig,
              routeString: route2,
              routeDefinedAtString: definedAtString,
              routeType: "STRING"
            };
          } else {
            assert(isCallable(route2));
            if (getConfigValueRuntime(pageConfig, "iKnowThePerformanceRisksOfAsyncRouteFunctions", "boolean"))
              warnDeprecatedAllowKey();
            pageRoute = {
              pageId,
              comesFromV1PageConfig,
              routeFunction: route2,
              routeDefinedAtString: definedAtString,
              routeType: "FUNCTION"
            };
          }
        }
      }
      if (!pageRoute) {
        const { routeFilesystem } = pageConfig;
        assert(routeFilesystem);
        const { routeString, definedBy } = routeFilesystem;
        assert(routeFilesystem.routeString.startsWith("/"));
        pageRoute = {
          pageId,
          routeFilesystemDefinedBy: definedBy,
          comesFromV1PageConfig,
          routeString,
          routeDefinedAtString: null,
          routeType: "FILESYSTEM"
        };
      }
      assert(pageRoute);
      pageRoutes.push(pageRoute);
    });
  }
  if (pageConfigs.length === 0) {
    assert(filesystemRoots);
    const comesFromV1PageConfig = false;
    allPageIds.filter((pageId) => !isErrorPageId(pageId, false)).forEach((pageId) => {
      const pageRouteFile = pageFilesAll.find((p) => p.pageId === pageId && p.fileType === ".page.route");
      if (!pageRouteFile || !("default" in pageRouteFile.fileExports)) {
        const routeString = deduceRouteStringFromFilesystemPath(pageId, filesystemRoots);
        assert(routeString.startsWith("/"));
        assert(!routeString.endsWith("/") || routeString === "/");
        pageRoutes.push({
          pageId,
          comesFromV1PageConfig,
          routeString,
          routeDefinedAtString: null,
          routeFilesystemDefinedBy: `${pageId}.page.*`,
          routeType: "FILESYSTEM"
        });
      } else {
        const { filePath, fileExports } = pageRouteFile;
        assert(fileExports.default);
        if (hasProp(fileExports, "default", "string")) {
          const routeString = fileExports.default;
          assertUsage2(routeString.startsWith("/"), `A Route String should start with a leading slash '/' but ${filePath} has \`export default '${routeString}'\`. Make sure to \`export default '/${routeString}'\` instead.`);
          pageRoutes.push({
            pageId,
            comesFromV1PageConfig,
            routeString,
            routeDefinedAtString: filePath,
            routeType: "STRING"
          });
          return;
        }
        if (hasProp(fileExports, "default", "function")) {
          const routeFunction = fileExports.default;
          {
            const allowKey = "iKnowThePerformanceRisksOfAsyncRouteFunctions";
            if (allowKey in fileExports) {
              warnDeprecatedAllowKey();
            }
          }
          pageRoutes.push({
            pageId,
            comesFromV1PageConfig,
            routeFunction,
            routeDefinedAtString: filePath,
            routeType: "FUNCTION"
          });
          return;
        }
        assertUsage2(false, `The default export of ${filePath} should be a string or a function.`);
      }
    });
  }
  return pageRoutes;
}
function getGlobalHooks(pageFilesAll, pageConfigs, pageConfigGlobal) {
  if (pageConfigs.length > 0) {
    const hook = getHookFromPageConfigGlobal(pageConfigGlobal, "onBeforeRoute");
    return { onBeforeRouteHook: hook, filesystemRoots: null };
  }
  let onBeforeRouteHook = null;
  const filesystemRoots = [];
  pageFilesAll.filter((p) => p.fileType === ".page.route" && p.isDefaultPageFile).forEach(({ filePath, fileExports }) => {
    assert(fileExports);
    if ("onBeforeRoute" in fileExports) {
      assertUsage2(hasProp(fileExports, "onBeforeRoute", "function"), `\`export { onBeforeRoute }\` of ${filePath} should be a function.`);
      const { onBeforeRoute } = fileExports;
      const hookName = "onBeforeRoute";
      onBeforeRouteHook = {
        hookFilePath: filePath,
        hookFn: onBeforeRoute,
        hookName,
        hookTimeout: getHookTimeoutDefault(hookName)
      };
    }
    if ("filesystemRoutingRoot" in fileExports) {
      assertUsage2(hasProp(fileExports, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${filePath} should be a string.`);
      assertUsage2(hasProp(fileExports, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${filePath} is \`'${fileExports.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`);
      filesystemRoots.push({
        filesystemRoot: dirname(filePath),
        urlRoot: fileExports.filesystemRoutingRoot
      });
    }
  });
  return { onBeforeRouteHook, filesystemRoots };
}
function dirname(filePath) {
  assert(filePath.startsWith("/"));
  assert(!filePath.endsWith("/"));
  const paths = filePath.split("/");
  const dirPath = slice(paths, 0, -1).join("/") || "/";
  assert(dirPath.startsWith("/"));
  assert(!dirPath.endsWith("/") || dirPath === "/");
  return dirPath;
}
var init_loadPageRoutes = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/loadPageRoutes.js"() {
    init_error_page();
    init_utils4();
    init_deduceRouteStringFromFilesystemPath();
    init_utils();
    init_getConfigValue();
    init_getConfigDefinedAt();
    init_resolveRouteFunction();
    init_getHook();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/assertV1Design.js
function assertV1Design(pageConfigs, pageFilesAll) {
  const isOldDesign = pageFilesAll === true || pageFilesAll !== false && pageFilesAll.length > 0;
  const isV1Design = pageConfigs === true || pageConfigs !== false && pageConfigs.length > 0;
  if (isV1Design && isOldDesign) {
    const lines = ["Mixing the new V1 design with the old V0.4 design is forbidden."];
    const indent = "- ";
    if (typeof pageConfigs !== "boolean") {
      assert(pageConfigs.length > 0);
      const filesV1 = unique(pageConfigs.map((p) => Object.values(p.configValueSources).map((sources) => sources.map((c) => c.definedAtFilePath.filePathAbsoluteUserRootDir).filter(isNotNullish).map((filePathToShowToUser) => indent + filePathToShowToUser))).flat(2));
      lines.push(...["V1 design files:", ...filesV1]);
    }
    if (typeof pageFilesAll !== "boolean") {
      assert(pageFilesAll.length > 0);
      const filesOld = pageFilesAll.map((p) => indent + p.filePath);
      lines.push(...["Old design files:", ...filesOld]);
    }
    assertUsage2(false, lines.join("\n"));
  }
  assertWarning2(!isOldDesign, "You are using Vike's deprecated design. Update to the new V1 design, see https://vike.dev/migration/v1-design for how to migrate.", { onlyOnce: true });
}
var init_assertV1Design = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/shared/assertV1Design.js"() {
    init_utils2();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/renderPageAlreadyRouted.js
async function renderPageAlreadyRouted(pageContext) {
  assert(hasProp(pageContext, "pageId", "string"));
  const isError = pageContext.is404 || !!pageContext.errorWhileRendering;
  assert(isError === (pageContext.pageId === getErrorPageId(pageContext._pageFilesAll, pageContext._pageConfigs)));
  objectAssign(pageContext, await loadUserFilesServerSide(pageContext));
  if (!isError) {
    await executeGuardHook(pageContext, (pageContext2) => preparePageContextForUserConsumptionServerSide(pageContext2));
  }
  if (!isError) {
    await executeOnBeforeRenderAndDataHooks(pageContext);
  } else {
    try {
      await executeOnBeforeRenderAndDataHooks(pageContext);
    } catch (err) {
      if (isNewError(err, pageContext.errorWhileRendering)) {
        logRuntimeError(err, pageContext._httpRequestId);
      }
    }
  }
  if (pageContext.isClientSideNavigation) {
    if (isError) {
      objectAssign(pageContext, { [isServerSideError]: true });
    }
    const pageContextSerialized = serializePageContextClientSide(pageContext);
    const httpResponse2 = await createHttpResponsePageContextJson(pageContextSerialized);
    objectAssign(pageContext, { httpResponse: httpResponse2 });
    return pageContext;
  }
  const renderHookResult = await executeOnRenderHtmlHook(pageContext);
  const { htmlRender, renderHook } = renderHookResult;
  const httpResponse = await createHttpResponsePage(htmlRender, renderHook, pageContext);
  objectAssign(pageContext, { httpResponse });
  return pageContext;
}
function getPageContextInitEnhanced(pageContextInit, renderContext, { ssr: { urlRewrite, urlHandler, isClientSideNavigation } = {
  urlRewrite: null,
  urlHandler: null,
  isClientSideNavigation: false
} } = {}) {
  assert(pageContextInit.urlOriginal);
  const globalContext = getGlobalContext();
  const pageContextInitEnhanced = {};
  objectAssign(pageContextInitEnhanced, pageContextInit);
  objectAssign(pageContextInitEnhanced, {
    _objectCreatedByVike: true,
    // The following is defined on `pageContext` because we can eventually make these non-global (e.g. sot that two pages can have different includeAssetsImportedByServer settings)
    _baseServer: globalContext.baseServer,
    _baseAssets: globalContext.baseAssets,
    _includeAssetsImportedByServer: globalContext.includeAssetsImportedByServer,
    // TODO: use GloablContext instead
    _pageFilesAll: renderContext.pageFilesAll,
    _pageConfigs: renderContext.pageConfigs,
    _pageConfigGlobal: renderContext.pageConfigGlobal,
    _allPageIds: renderContext.allPageIds,
    _pageRoutes: renderContext.pageRoutes,
    _onBeforeRouteHook: renderContext.onBeforeRouteHook,
    _pageContextInit: pageContextInit,
    _urlRewrite: urlRewrite,
    _urlHandler: urlHandler,
    isClientSideNavigation
  });
  const pageContextUrlComputed = getPageContextUrlComputed(pageContextInitEnhanced);
  objectAssign(pageContextInitEnhanced, pageContextUrlComputed);
  {
    let headers;
    if (pageContextInit.headersOriginal) {
      headers = normalizeHeaders(pageContextInit.headersOriginal);
      assertUsage2(!("headers" in pageContextInit), "You're defining pageContextInit.headersOriginal as well as pageContextInit.headers but you should only define pageContextInit.headersOriginal instead, see https://vike.dev/headers");
    } else if (pageContextInit.headers) {
      headers = pageContextInit.headers;
      assertWarning2(false, "Setting pageContextInit.headers is deprecated: set pageContextInit.headersOriginal instead, see https://vike.dev/headers", { onlyOnce: true });
    } else {
      headers = null;
    }
    objectAssign(pageContextInitEnhanced, { headers });
  }
  return pageContextInitEnhanced;
}
async function getRenderContext() {
  const globalContext = getGlobalContext();
  const { pageFilesAll, allPageIds, pageConfigs, pageConfigGlobal } = await getPageFilesAll(false, globalContext.isProduction);
  const { pageRoutes, onBeforeRouteHook } = await loadPageRoutes(pageFilesAll, pageConfigs, pageConfigGlobal, allPageIds);
  assertV1Design(
    // pageConfigs is PageConfigRuntime[] but assertV1Design() requires PageConfigBuildTime[]
    pageConfigs.length > 0,
    pageFilesAll
  );
  const renderContext = {
    pageFilesAll,
    pageConfigs,
    pageConfigGlobal,
    allPageIds,
    pageRoutes,
    onBeforeRouteHook
  };
  return renderContext;
}
var import_picocolors33;
var init_renderPageAlreadyRouted = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/renderPageAlreadyRouted.js"() {
    init_error_page();
    init_renderHtml();
    init_getPageFiles();
    init_utils3();
    init_serializePageContextClientSide();
    init_getPageContextUrlComputed();
    init_globalContext();
    init_createHttpResponse();
    init_loadUserFilesServerSide();
    init_executeOnRenderHtmlHook();
    init_executeOnBeforeRenderAndDataHooks();
    init_loggerRuntime();
    init_isNewError();
    init_preparePageContextForUserConsumptionServerSide();
    init_executeGuardHook();
    init_loadPageRoutes();
    import_picocolors33 = __toESM(require_picocolors(), 1);
    init_isServerSideError();
    init_assertV1Design();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/resolveRouteString.js
function assertRouteString(routeString, errPrefix = "Invalid") {
  let errPrefix2 = `${errPrefix} Route String ${highlight(routeString)}`;
  assertUsage2(routeString !== "", `${errPrefix2} (empty string): set it to ${highlight("/")} instead`);
  assertUsage2(["/", "*"].includes(routeString[0]), `${errPrefix2}: it should start with ${highlight("/")} or ${highlight("*")}`);
  assertUsage2(!routeString.includes("**"), `${errPrefix2}: set it to ${highlight(routeString.split("**").join("*"))} instead`);
}
function resolveRouteString(routeString, urlPathname) {
  assertRouteString(routeString);
  const segments = parseRouteString(routeString);
  const routeRegexStrInner = segments.map((segment) => {
    if (segment.param) {
      return "[^/]+";
    }
    if (segment.glob) {
      return ".*";
    }
    return escapeRegex(segment.static);
  }).map((s) => `(${s})`).join("");
  const routeRegex = new RegExp(`^${routeRegexStrInner}/?$`);
  const routeRegexMatch = urlPathname.match(routeRegex);
  if (!routeRegexMatch)
    return null;
  const routeParams = {};
  const [_, ...segmentsValue] = routeRegexMatch;
  let globIdx = 0;
  const hasMultipleGlobs = segments.filter((segment) => segment.glob).length > 1;
  segments.forEach((segment, i) => {
    let val = segmentsValue[i];
    if (segment.param) {
      routeParams[segment.param] = val;
    }
    if (segment.glob) {
      const param = `*${hasMultipleGlobs ? ++globIdx : ""}`;
      routeParams[param] = val;
    }
  });
  return { routeParams };
}
function parseRouteString(routeString) {
  const segments = [];
  const pushStatic = (s) => {
    const segmentLast = segments[segments.length - 1];
    if (segmentLast?.static) {
      segmentLast.static += s;
    } else {
      segments.push({ static: s });
    }
  };
  const parts = routeString.split("/");
  parts.forEach((s, i) => {
    if (i !== 0)
      pushStatic("/");
    if (isParam(s)) {
      assertWarning2(!s.startsWith(PARAM_TOKEN_OLD), `Outdated Route String ${highlight(routeString)}, use ${highlight(routeString.split(PARAM_TOKEN_OLD).join(PARAM_TOKEN_NEW))} instead`, { onlyOnce: true });
      segments.push({ param: s.slice(1) });
    } else {
      if (s === "*" && i === parts.length - 1 && routeString !== "*" && routeString !== "/*") {
        segments.push({ glob: true });
      } else {
        s.split("*").forEach((s2, i2) => {
          if (i2 !== 0)
            segments.push({ glob: true });
          if (s2 !== "") {
            pushStatic(s2);
          }
        });
      }
    }
  });
  return segments;
}
function analyzeRouteString(routeString) {
  const segments = parseRouteString(routeString);
  const countStaticParts = (s) => s?.split("/").filter(Boolean).length || 0;
  let numberOfStaticPartsBeginning = 0;
  for (const segment of segments) {
    if (!segment.static)
      break;
    numberOfStaticPartsBeginning += countStaticParts(segment.static);
  }
  const numberOfStaticParts = segments.map((s) => countStaticParts(s.static)).reduce((sum, a) => sum + a, 0);
  const numberOfParams = segments.filter((s) => s.param).length;
  const numberOfGlobs = segments.filter((s) => s.glob).length;
  return { numberOfStaticPartsBeginning, numberOfStaticParts, numberOfParams, numberOfGlobs };
}
function isParam(routeSegment) {
  return routeSegment.startsWith(PARAM_TOKEN_NEW) || routeSegment.startsWith(PARAM_TOKEN_OLD);
}
function isStaticRouteString(routeString) {
  const url = routeString;
  const match = resolveRouteString(routeString, url);
  assert(match);
  return Object.keys(match.routeParams).length === 0;
}
function highlight(routeString) {
  if (isBrowser()) {
    return `'${routeString}'`;
  } else {
    if (routeString === "") {
      routeString = "''";
    }
    return import_picocolors34.default.cyan(routeString);
  }
}
var import_picocolors34, PARAM_TOKEN_NEW, PARAM_TOKEN_OLD;
var init_resolveRouteString = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/resolveRouteString.js"() {
    init_utils();
    init_utils4();
    import_picocolors34 = __toESM(require_picocolors(), 1);
    PARAM_TOKEN_NEW = "@";
    PARAM_TOKEN_OLD = ":";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/resolvePrecedence.js
function resolvePrecendence(routeMatches) {
  routeMatches.sort(sortMatches).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !!routeMatch.precedence && routeMatch.precedence < 0)).sort(makeFirst((routeMatch) => routeMatch.routeType === "STRING" && isStaticRouteString(routeMatch.routeString) === false)).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !routeMatch.precedence)).sort(makeFirst((routeMatch) => routeMatch.routeType === "STRING" && isStaticRouteString(routeMatch.routeString) === true)).sort(makeFirst((routeMatch) => routeMatch.routeType === "FILESYSTEM")).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !!routeMatch.precedence && routeMatch.precedence > 0));
}
function sortMatches(routeMatch1, routeMatch2) {
  {
    const precedence1 = routeMatch1.precedence ?? 0;
    const precedence2 = routeMatch2.precedence ?? 0;
    if (precedence1 !== precedence2) {
      return precedence1 > precedence2 ? -1 : 1;
    }
  }
  if (!routeMatch2.routeString) {
    return 0;
  }
  if (!routeMatch1.routeString) {
    return 0;
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfStaticPartsBeginning;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfStaticParts;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfGlobs;
    const result = lowerFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfParams;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  return 0;
}
var init_resolvePrecedence = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/resolvePrecedence.js"() {
    init_resolveRouteString();
    init_utils4();
    init_utils4();
    init_resolveRouteString();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/executeOnBeforeRouteHook.js
async function executeOnBeforeRouteHook(pageContext) {
  const pageContextFromOnBeforeRouteHook = {};
  if (!pageContext._onBeforeRouteHook)
    return null;
  const pageContextFromHook = await getPageContextFromHook(pageContext._onBeforeRouteHook, pageContext);
  if (pageContextFromHook) {
    objectAssign(pageContextFromOnBeforeRouteHook, pageContextFromHook);
    if (hasProp(pageContextFromOnBeforeRouteHook, "pageId", "string") || hasProp(pageContextFromOnBeforeRouteHook, "pageId", "null")) {
      if (!hasProp(pageContextFromOnBeforeRouteHook, "routeParams")) {
        objectAssign(pageContextFromOnBeforeRouteHook, { routeParams: {} });
      } else {
        assert(hasProp(pageContextFromOnBeforeRouteHook, "routeParams", "object"));
      }
      objectAssign(pageContextFromOnBeforeRouteHook, {
        _routingProvidedByOnBeforeRouteHook: true,
        _debugRouteMatches: "CUSTOM_ROUTING"
      });
      return pageContextFromOnBeforeRouteHook;
    }
  }
  objectAssign(pageContextFromOnBeforeRouteHook, {
    _routingProvidedByOnBeforeRouteHook: false
  });
  return pageContextFromOnBeforeRouteHook;
}
async function getPageContextFromHook(onBeforeRouteHook, pageContext) {
  let hookReturn = onBeforeRouteHook.hookFn(pageContext);
  assertSyncRouting(hookReturn, `The onBeforeRoute() hook ${onBeforeRouteHook.hookFilePath}`);
  hookReturn = await executeHook(() => hookReturn, onBeforeRouteHook, pageContext);
  const errPrefix = `The onBeforeRoute() hook defined by ${onBeforeRouteHook.hookFilePath}`;
  assertUsage2(hookReturn === null || hookReturn === void 0 || isObjectWithKeys(hookReturn, ["pageContext"]) && hasProp(hookReturn, "pageContext"), `${errPrefix} should return ${import_picocolors35.default.cyan("null")}, ${import_picocolors35.default.cyan("undefined")}, or a plain JavaScript object ${import_picocolors35.default.cyan("{ pageContext: { /* ... */ } }")}`);
  if (hookReturn === null || hookReturn === void 0) {
    return null;
  }
  assertUsage2(hasProp(hookReturn, "pageContext", "object"), `${errPrefix} returned ${import_picocolors35.default.cyan("{ pageContext }")} but pageContext should be a plain JavaScript object.`);
  if (hasProp(hookReturn.pageContext, "pageId") && !hasProp(hookReturn.pageContext, "pageId", "null")) {
    const errPrefix2 = `${errPrefix} returned ${import_picocolors35.default.cyan("{ pageContext: { pageId } }")} but ${import_picocolors35.default.cyan("pageId")} should be`;
    assertUsage2(hasProp(hookReturn.pageContext, "pageId", "string"), `${errPrefix2} a string or null`);
    assertUsage2(pageContext._allPageIds.includes(hookReturn.pageContext.pageId), `${errPrefix2} ${joinEnglish(pageContext._allPageIds.map((s) => import_picocolors35.default.cyan(s)), "or")}`);
  }
  if (hasProp(hookReturn.pageContext, "routeParams")) {
    assertRouteParams(hookReturn.pageContext, `${errPrefix} returned ${import_picocolors35.default.cyan("{ pageContext: { routeParams } }")} but routeParams should`);
  }
  const deprecatedReturn = (prop) => `${errPrefix} returned ${import_picocolors35.default.cyan(`{ pageContext: { ${prop} } }`)} which is deprecated. Return ${import_picocolors35.default.cyan("{ pageContext: { urlLogical } }")} instead.`;
  if (hasProp(hookReturn.pageContext, "url")) {
    assertWarning2(false, deprecatedReturn("url"), { onlyOnce: true });
    hookReturn.pageContext.urlLogical = hookReturn.pageContext.url;
    delete hookReturn.pageContext.url;
  }
  if (hasProp(hookReturn.pageContext, "urlOriginal")) {
    assertWarning2(false, deprecatedReturn("urlOriginal"), { onlyOnce: true });
    hookReturn.pageContext.urlLogical = hookReturn.pageContext.urlOriginal;
    delete hookReturn.pageContext.urlOriginal;
  }
  if (hasProp(hookReturn.pageContext, "urlLogical")) {
    assertUsageUrlPathnameAbsolute(
      // We skip validation and type-cast instead of assertUsage() in order to save client-side KBs
      hookReturn.pageContext.urlLogical,
      `${errPrefix} returned ${import_picocolors35.default.cyan("{ pageContext: { urlLogical } }")} but ${import_picocolors35.default.cyan("urlLogical")}`
    );
  }
  assertPageContextProvidedByUser(hookReturn.pageContext, {
    hookFilePath: onBeforeRouteHook.hookFilePath,
    hookName: "onBeforeRoute"
  });
  const pageContextAddendumHook = {};
  objectAssign(pageContextAddendumHook, hookReturn.pageContext);
  return pageContextAddendumHook;
}
var import_picocolors35;
var init_executeOnBeforeRouteHook = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/executeOnBeforeRouteHook.js"() {
    init_assertPageContextProvidedByUser();
    init_utils4();
    init_resolveRouteFunction();
    import_picocolors35 = __toESM(require_picocolors(), 1);
    init_executeHook();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/debug.js
function debug4(...args) {
  if (!_debug) {
    _debug = globalThis.__brillout_debug_createDebugger?.("vike:routing");
  }
  if (_debug) {
    _debug(...args);
  }
}
var _debug;
var init_debug2 = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/debug.js"() {
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/index.js
async function route(pageContext) {
  debug4("Pages routes:", pageContext._pageRoutes);
  assertPageContextUrl(pageContext);
  const pageContextFromRoute = {};
  const pageContextFromOnBeforeRouteHook = await executeOnBeforeRouteHook(pageContext);
  if (pageContextFromOnBeforeRouteHook) {
    if (pageContextFromOnBeforeRouteHook._routingProvidedByOnBeforeRouteHook) {
      assert(pageContextFromOnBeforeRouteHook.pageId);
      return pageContextFromOnBeforeRouteHook;
    } else {
      objectAssign(pageContextFromRoute, pageContextFromOnBeforeRouteHook);
    }
  }
  objectAssign(pageContext, pageContextFromOnBeforeRouteHook);
  const allPageIds = pageContext._allPageIds;
  assertUsage2(allPageIds.length > 0, "No page found. You must create at least one page.");
  assert(pageContext._pageFilesAll.length > 0 || pageContext._pageConfigs.length > 0);
  const { urlPathname } = pageContext;
  assert(urlPathname.startsWith("/"));
  const routeMatches = [];
  await Promise.all(pageContext._pageRoutes.map(async (pageRoute) => {
    const { pageId, routeType } = pageRoute;
    if (pageRoute.routeType === "FILESYSTEM") {
      const { routeString } = pageRoute;
      const match = resolveRouteString(routeString, urlPathname);
      if (match) {
        const { routeParams } = match;
        routeMatches.push({ pageId, routeParams, routeString, routeType });
      }
      return;
    }
    if (pageRoute.routeType === "STRING") {
      const { routeString } = pageRoute;
      const match = resolveRouteString(routeString, urlPathname);
      if (match) {
        const { routeParams } = match;
        assert(routeType === "STRING");
        routeMatches.push({
          pageId,
          routeString,
          routeParams,
          routeType
        });
      }
      return;
    }
    if (pageRoute.routeType === "FUNCTION") {
      const { routeFunction, routeDefinedAtString } = pageRoute;
      const match = await resolveRouteFunction(routeFunction, pageContext, routeDefinedAtString);
      if (match) {
        const { routeParams, precedence } = match;
        routeMatches.push({ pageId, precedence, routeParams, routeType });
      }
      return;
    }
    assert(false);
  }));
  resolvePrecendence(routeMatches);
  const winner = routeMatches[0] ?? null;
  debug4(`Route matches for URL ${import_picocolors36.default.cyan(urlPathname)} (in precedence order):`, routeMatches);
  objectAssign(pageContextFromRoute, { _debugRouteMatches: routeMatches });
  objectAssign(pageContextFromRoute, { _routeMatch: winner });
  if (!winner) {
    objectAssign(pageContextFromRoute, {
      pageId: null,
      routeParams: {}
    });
    return pageContextFromRoute;
  }
  {
    const { routeParams } = winner;
    assert(isPlainObject(routeParams));
    objectAssign(pageContextFromRoute, {
      pageId: winner.pageId,
      routeParams: winner.routeParams
    });
  }
  return pageContextFromRoute;
}
var import_picocolors36;
var init_route = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/index.js"() {
    init_assertRoutingType();
    init_isBrowser();
    init_utils4();
    init_getPageContextUrlComputed();
    init_resolvePrecedence();
    init_resolveRouteString();
    init_resolveRouteFunction();
    init_executeOnBeforeRouteHook();
    init_debug2();
    import_picocolors36 = __toESM(require_picocolors(), 1);
    if (isBrowser()) {
      assertClientRouting();
    }
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageContextRequestUrl.js
var pageContextJsonFileExtension, doNotCreateExtraDirectory;
var init_getPageContextRequestUrl = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/getPageContextRequestUrl.js"() {
    init_urlToFile();
    pageContextJsonFileExtension = ".pageContext.json";
    doNotCreateExtraDirectory = false;
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/handlePageContextRequestUrl.js
function handlePageContextRequestUrl(url) {
  if (!hasSuffix(url)) {
    return { urlWithoutPageContextRequestSuffix: url, isPageContextRequest: false };
  }
  return { urlWithoutPageContextRequestSuffix: removePageContextUrlSuffix(url), isPageContextRequest: true };
}
function hasSuffix(url) {
  const { pathnameOriginal, pathname } = parseUrl(url, baseServer);
  assert(pathnameOriginal.endsWith(pageContextJsonFileExtension) === pathname.endsWith(pageContextJsonFileExtension), {
    url
  });
  return pathnameOriginal.endsWith(pageContextJsonFileExtension);
}
function removePageContextUrlSuffix(url) {
  const urlParsed = parseUrl(url, baseServer);
  const { origin, pathnameOriginal, searchOriginal, hashOriginal } = urlParsed;
  assert(doNotCreateExtraDirectory === false);
  const urlSuffix = `/index${pageContextJsonFileExtension}`;
  assert(pathnameOriginal.endsWith(urlSuffix), { url });
  let pathnameModified = slice(pathnameOriginal, 0, -1 * urlSuffix.length);
  if (pathnameModified === "")
    pathnameModified = "/";
  assert(url === `${origin || ""}${pathnameOriginal}${searchOriginal || ""}${hashOriginal || ""}`, { url });
  return `${origin || ""}${pathnameModified}${searchOriginal || ""}${hashOriginal || ""}`;
}
var init_handlePageContextRequestUrl = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/handlePageContextRequestUrl.js"() {
    init_getPageContextRequestUrl();
    init_utils3();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/assertArguments.js
function assertArguments(...args) {
  const prefix = `${import_picocolors37.default.code("renderPage(pageContextInit)")} (https://vike.dev/renderPage)`;
  const pageContextInit = args[0];
  assertUsage2(pageContextInit !== void 0 && pageContextInit !== null, prefix + ` argument ${import_picocolors37.default.cyan("pageContextInit")} is missing`, { showStackTrace: true });
  const len = args.length;
  assertUsage2(len === 1, `${prefix} called with ${len} arguments but renderPage() accepts only one argument.'`, {
    showStackTrace: true
  });
  assertUsage2(isObject(pageContextInit), `${prefix} called with ${import_picocolors37.default.code(`typeof pageContextInit === ${JSON.stringify(typeof pageContextInit)}`)} but ${import_picocolors37.default.code("pageContextInit")} should be an object.`, { showStackTrace: true });
  if ("url" in pageContextInit) {
    assertWarning2(false, "`pageContextInit.url` has been renamed to `pageContextInit.urlOriginal`: replace `renderPage({ url })` with `renderPage({ urlOriginal })`. (See https://vike.dev/migration/0.4.23 for more information.)", { showStackTrace: true, onlyOnce: true });
    pageContextInit.urlOriginal = pageContextInit.url;
    delete pageContextInit.url;
  }
  assert(!("url" in pageContextInit));
  assertUsage2(hasProp(pageContextInit, "urlOriginal"), prefix + ` ${import_picocolors37.default.cyan("pageContextInit")} is missing the property ${import_picocolors37.default.cyan("pageContextInit.urlOriginal")}`, { showStackTrace: true });
  const { urlOriginal } = pageContextInit;
  assertUsage2(typeof urlOriginal === "string", prefix + ` ${import_picocolors37.default.cyan("pageContextInit.urlOriginal")} should be a string but ${import_picocolors37.default.cyan(`typeof pageContextInit.urlOriginal === ${JSON.stringify(typeof urlOriginal)}`)}`, { showStackTrace: true });
  assertUsage2(urlOriginal.startsWith("/") || urlOriginal.startsWith("https://") || urlOriginal.startsWith("http://"), prefix + ` ${import_picocolors37.default.cyan("pageContextInit.urlOriginal")} should start with ${import_picocolors37.default.cyan("/")} (e.g. ${import_picocolors37.default.cyan("/product/42")}), ${import_picocolors37.default.cyan("http://")}, or ${import_picocolors37.default.cyan("https://")} (e.g. ${import_picocolors37.default.cyan("https://example.com/product/42")}), but ${import_picocolors37.default.cyan(`pageContextInit.urlOriginal === ${JSON.stringify(urlOriginal)}`)}`, { showStackTrace: true });
  const urlOriginalWithoutOrigin = urlOriginal.startsWith("http") ? urlOriginal : "http://fake-origin.example.org" + urlOriginal;
  try {
    new URL(urlOriginalWithoutOrigin);
  } catch (err) {
    assertUsage2(false, prefix + ` ${import_picocolors37.default.cyan("pageContextInit.urlOriginal")} should be a URL but ${import_picocolors37.default.cyan(`pageContextInit.urlOriginal === ${JSON.stringify(urlOriginal)}`)}`, { showStackTrace: true });
  }
}
var import_picocolors37;
var init_assertArguments = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/assertArguments.js"() {
    init_utils3();
    import_picocolors37 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/noRouteMatch.js
var noRouteMatch;
var init_noRouteMatch = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/noRouteMatch.js"() {
    noRouteMatch = "doesn't match the route of any of your pages";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/log404/index.js
async function log404(pageContext) {
  const { urlPathname } = pageContext;
  const pageRoutes = pageContext._pageRoutes;
  assertUsage2(
    pageRoutes.length > 0,
    "No page found."
    /* TODO/v1-release: use this
    'No page found. Create at least one /pages/some-page/+Page.js file.'
    */
  );
  const globalContext = getGlobalContext();
  if (!globalContext.isProduction && !isFileRequest(urlPathname) && !pageContext.isClientSideNavigation) {
    const routesInfo = getRoutesInfo(pageRoutes);
    let msg = `URL ${import_picocolors38.default.cyan(urlPathname)} ${noRouteMatch}`;
    const outro = "See https://vike.dev/routing for more information about routing.";
    if (!routesInfo) {
      msg = `${msg}. ${import_picocolors38.default.dim(outro)}`;
    } else {
      msg = `${msg}:
${routesInfo}
${outro}`;
    }
    assertInfo(false, msg, { onlyOnce: false });
  }
}
function getRoutesInfo(pageRoutes) {
  const entries = pageRoutes.map((pageRoute) => {
    let routeStr;
    let routeTypeSrc;
    let routeDefinedBy;
    if (pageRoute.routeType === "FILESYSTEM") {
      assert(pageRoute.routeFilesystemDefinedBy);
      routeDefinedBy = pageRoute.routeFilesystemDefinedBy;
    } else {
      assert(pageRoute.routeDefinedAtString);
      routeDefinedBy = pageRoute.routeDefinedAtString;
    }
    if (pageRoute.routeType === "STRING") {
      routeStr = pageRoute.routeString;
      routeTypeSrc = "Route String";
    } else if (pageRoute.routeType === "FUNCTION") {
      routeStr = String(pageRoute.routeFunction);
      routeTypeSrc = "Route Function";
    } else {
      routeStr = pageRoute.routeString;
      routeTypeSrc = "Filesystem Route";
    }
    assert(routeStr && routeTypeSrc && routeDefinedBy);
    return { routeStr, routeTypeSrc, routeDefinedBy };
  }).sort((e1, e2) => {
    if (e1.routeTypeSrc !== "Route Function" && e2.routeTypeSrc === "Route Function") {
      return -1;
    }
    if (e1.routeTypeSrc === "Route Function" && e2.routeTypeSrc !== "Route Function") {
      return 1;
    }
    return compareString(e1.routeStr, e2.routeStr);
  });
  const linesContent = [
    {
      routeStr: "ROUTE",
      routeTypeSrc: "TYPE",
      routeDefinedBy: "DEFINED BY"
    },
    ...entries
  ];
  const terminalWidth = getTerminalWidth() || 134;
  let width2 = Math.max(...linesContent.map(({ routeTypeSrc }) => stripAnsi(routeTypeSrc).length));
  let width3 = Math.max(...linesContent.map(({ routeDefinedBy }) => stripAnsi(routeDefinedBy).length));
  const width1_max = terminalWidth - width3 - width2 - // Total width of table border & padding
  10;
  if (width1_max < 10)
    return null;
  linesContent.forEach((lineContent) => {
    let { routeStr } = lineContent;
    if (lineContent.routeTypeSrc === "Route Function") {
      routeStr = truncateRouteFunction(routeStr, width1_max);
      assert(stripAnsi(routeStr).length <= width1_max);
    }
    lineContent.routeStr = routeStr;
  });
  let width1 = Math.max(...linesContent.map(({ routeStr }) => stripAnsi(routeStr).length));
  if (width1 > width1_max)
    return null;
  let lines = linesContent.map(({ routeStr, routeTypeSrc, routeDefinedBy }, i) => {
    let cell1 = padEnd(routeStr, width1 + (stripAnsi(routeStr).length - stripAnsi(routeStr).length));
    let cell2 = padEnd(routeTypeSrc, width2);
    let cell3 = padEnd(routeDefinedBy, width3);
    const isHeader = i === 0;
    if (isHeader) {
      cell1 = import_picocolors38.default.dim(cell1);
      cell2 = import_picocolors38.default.dim(cell2);
      cell3 = import_picocolors38.default.dim(cell3);
    }
    let line = [cell1, cell2, cell3].join(import_picocolors38.default.dim(" \u2502 "));
    line = import_picocolors38.default.dim("\u2502 ") + line + import_picocolors38.default.dim(" \u2502");
    return line;
  });
  width1 = width1 + 2;
  width2 = width2 + 2;
  width3 = width3 + 2;
  lines = [
    import_picocolors38.default.dim(`\u250C${"\u2500".repeat(width1)}\u252C${"\u2500".repeat(width2)}\u252C${"\u2500".repeat(width3)}\u2510`),
    lines[0],
    import_picocolors38.default.dim(`\u251C${"\u2500".repeat(width1)}\u253C${"\u2500".repeat(width2)}\u253C${"\u2500".repeat(width3)}\u2524`),
    ...lines.slice(1),
    import_picocolors38.default.dim(`\u2514${"\u2500".repeat(width1)}\u2534${"\u2500".repeat(width2)}\u2534${"\u2500".repeat(width3)}\u2518`)
  ];
  lines.forEach((line) => {
    assert(stripAnsi(line).length <= terminalWidth);
  });
  return lines.join("\n");
}
function truncateRouteFunction(routeStr, lenMax) {
  routeStr = stripAnsi(routeStr);
  routeStr = removeNonAscii(routeStr);
  routeStr = routeStr.split(/\s/).filter(Boolean).join(" ");
  routeStr = truncateString(routeStr, lenMax);
  return routeStr;
}
function padEnd(str, width) {
  const padWidth = Math.max(0, width - stripAnsi(str).length);
  return str + "".padEnd(padWidth, " ");
}
function removeNonAscii(str) {
  return str.replace(/[^\x00-\x7F]/g, "");
}
function isFileRequest(urlPathname) {
  assert(urlPathname.startsWith("/"));
  const paths = urlPathname.split("/");
  const lastPath = paths[paths.length - 1];
  assert(typeof lastPath === "string");
  const parts = lastPath.split(".");
  if (parts.length < 2) {
    return false;
  }
  const fileExtension = parts[parts.length - 1];
  assert(typeof fileExtension === "string");
  return /^[a-z0-9]+$/.test(fileExtension);
}
var import_picocolors38;
var init_log404 = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/log404/index.js"() {
    init_noRouteMatch();
    init_globalContext();
    init_utils3();
    import_picocolors38 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/isConfigInvalid.js
var isConfigInvalid;
var init_isConfigInvalid = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/isConfigInvalid.js"() {
    init_utils3();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/handleErrorWithoutErrorPage.js
async function handleErrorWithoutErrorPage(pageContext) {
  assert(pageContext.pageId === null);
  assert(pageContext.errorWhileRendering || pageContext.is404);
  {
    const isV1 = pageContext._pageConfigs.length > 0;
    warnMissingErrorPage(isV1);
  }
  if (!pageContext.isClientSideNavigation) {
    const httpResponse = createHttpResponseError(pageContext);
    objectAssign(pageContext, { httpResponse });
    return pageContext;
  } else {
    const __getPageAssets = async () => [];
    objectAssign(pageContext, { __getPageAssets });
    const httpResponse = await createHttpResponsePage((0, import_stringify2.stringify)({ serverSideError: true }), null, pageContext);
    objectAssign(pageContext, { httpResponse });
    return pageContext;
  }
}
function warnMissingErrorPage(isV1) {
  const globalContext = getGlobalContext();
  if (!globalContext.isProduction) {
    const msg = [
      `No ${isV1 ? "error page" : import_picocolors39.default.cyan("_error.page.js")} found,`,
      "we recommend defining one",
      "https://vike.dev/error-page"
    ].join(" ");
    assertWarning2(false, msg, { onlyOnce: true });
  }
}
var import_stringify2, import_picocolors39;
var init_handleErrorWithoutErrorPage = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/handleErrorWithoutErrorPage.js"() {
    import_stringify2 = __toESM(require_stringify(), 1);
    init_globalContext();
    init_utils3();
    init_createHttpResponse();
    import_picocolors39 = __toESM(require_picocolors(), 1);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/resolveUrlPathname.js
function resolveUrlPathname(routeString, routeParams) {
  let parts = [{ val: routeString, type: "ROUTE_STRING" }];
  Object.entries(routeParams).forEach(([key, val]) => {
    if (key.startsWith("*")) {
      assert(key === "*" || /\d+/.test(key.slice(1)));
      assertUsage2(key === "*", "Resolving URL with multiple globs isn't implemented yet");
    } else {
      key = `@${key}`;
    }
    parts = parts.map((part) => {
      if (part.type === "URL") {
        return part;
      } else {
        return part.val.split(key).map((rest, i) => {
          const partURL = { val, type: "URL" };
          const partRouteString = { val: rest, type: "ROUTE_STRING" };
          return i === 0 ? [partRouteString] : [partURL, partRouteString];
        }).flat();
      }
    }).flat();
  });
  const urlPathname = parts.map((p) => p.val).join("");
  return urlPathname;
}
var init_resolveUrlPathname = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/shared/route/resolveUrlPathname.js"() {
    init_assertIsNotBrowser();
    init_utils();
    assertIsNotBrowser();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/resolveRedirects.js
function resolveRedirects(redirects, urlPathname) {
  for (const [urlSource, urlTarget] of Object.entries(redirects)) {
    const urlResolved = resolveRouteStringRedirect(urlSource, urlTarget, urlPathname);
    if (urlResolved)
      return urlResolved;
  }
  return null;
}
function resolveRouteStringRedirect(urlSource, urlTarget, urlPathname) {
  assertRouteString(urlSource, `${configSrc} Invalid`);
  assertUsageUrlRedirectTarget(urlTarget, `${configSrc} The URL redirection target`, true);
  assertParams(urlSource, urlTarget);
  const match = resolveRouteString(urlSource, urlPathname);
  if (!match)
    return null;
  const urlResolved = resolveUrlPathname(urlTarget, match.routeParams);
  if (urlResolved === urlPathname)
    return null;
  assert(isUrlRedirectTarget(urlResolved));
  return urlResolved;
}
function assertParams(urlSource, urlTarget) {
  const routeSegments = urlTarget.split("/");
  routeSegments.forEach((routeSegment) => {
    if (routeSegment.startsWith("@") || routeSegment.startsWith("*")) {
      const segments = urlSource.split("/");
      assertUsage2(segments.includes(routeSegment), `${configSrc} The redirection source URL ${import_picocolors40.default.string(urlSource)} is missing the URL parameter ${import_picocolors40.default.string(routeSegment)} used by the redirection target URL ${import_picocolors40.default.string(urlTarget)}`);
    }
  });
}
var import_picocolors40, configSrc;
var init_resolveRedirects = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage/resolveRedirects.js"() {
    init_assertIsNotBrowser();
    init_utils();
    init_resolveUrlPathname();
    init_resolveRouteString();
    import_picocolors40 = __toESM(require_picocolors(), 1);
    assertIsNotBrowser();
    configSrc = "[vite.config.js > vike({ redirects })]";
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage.js
async function renderPage(pageContextInit) {
  assertArguments(...arguments);
  assert(hasProp(pageContextInit, "urlOriginal", "string"));
  assertEnv();
  assertIsUrl(pageContextInit.urlOriginal);
  const urlPathnameWithBase = parseUrl(pageContextInit.urlOriginal, "/").pathname;
  assertIsNotViteRequest(urlPathnameWithBase, pageContextInit.urlOriginal);
  if (urlPathnameWithBase.endsWith("/favicon.ico"))
    return getPageContextHttpResponseFavicon404(pageContextInit);
  const httpRequestId = getRequestId();
  const urlOriginalPretty = getUrlPretty(pageContextInit.urlOriginal);
  logHttpRequest(urlOriginalPretty, httpRequestId);
  const { pageContextReturn } = await renderPage_wrapper(httpRequestId, () => renderPageAndPrepare(pageContextInit, httpRequestId));
  logHttpResponse(urlOriginalPretty, httpRequestId, pageContextReturn);
  checkType(pageContextReturn);
  assert(pageContextReturn.httpResponse);
  return pageContextReturn;
}
async function renderPageAndPrepare(pageContextInit, httpRequestId) {
  const handleInvalidConfig = (err) => {
    logRuntimeInfo?.(import_picocolors41.default.bold(import_picocolors41.default.red("Error while loading a Vike config file, see error above.")), httpRequestId, "error");
    const pageContextWithError = getPageContextHttpResponseError(err, pageContextInit, null);
    return pageContextWithError;
  };
  if (isConfigInvalid) {
    if (1 < 2) {
      return handleInvalidConfig(isConfigInvalid.err);
    }
  }
  let renderContext;
  try {
    await initGlobalContext_renderPage();
    renderContext = await getRenderContext();
  } catch (err) {
    assert(!isAbortError(err));
    logRuntimeError(err, httpRequestId);
    const pageContextWithError = getPageContextHttpResponseError(err, pageContextInit, null);
    return pageContextWithError;
  }
  if (isConfigInvalid) {
    return handleInvalidConfig(isConfigInvalid.err);
  } else {
  }
  assertBaseUrl(pageContextInit);
  {
    const pageContextHttpResponse = normalizeUrl(pageContextInit, httpRequestId);
    if (pageContextHttpResponse)
      return pageContextHttpResponse;
  }
  {
    const pageContextHttpResponse = getPermanentRedirect(pageContextInit, httpRequestId);
    if (pageContextHttpResponse)
      return pageContextHttpResponse;
  }
  return await renderPageAlreadyPrepared(pageContextInit, httpRequestId, renderContext, []);
}
async function renderPageAlreadyPrepared(pageContextInit, httpRequestId, renderContext, pageContextsFromRewrite) {
  assertNoInfiniteAbortLoop(
    pageContextsFromRewrite.length,
    // There doesn't seem to be a way to count the number of HTTP redirects (vike don't have access to the HTTP request headers/cookies)
    // https://stackoverflow.com/questions/9683007/detect-infinite-http-redirect-loop-on-server-side
    0
  );
  let pageContextNominalPageSuccess;
  let pageContextNominalPageInit = {};
  {
    const pageContextFromAllRewrites = getPageContextFromAllRewrites(pageContextsFromRewrite);
    objectAssign(pageContextNominalPageInit, pageContextFromAllRewrites);
  }
  {
    const pageContextInitEnhanced = getPageContextInitEnhancedSSR(pageContextInit, renderContext, pageContextNominalPageInit._urlRewrite, httpRequestId);
    objectAssign(pageContextNominalPageInit, pageContextInitEnhanced);
  }
  let errNominalPage;
  {
    try {
      pageContextNominalPageSuccess = await renderPageNominal(pageContextNominalPageInit);
    } catch (err) {
      errNominalPage = err;
      assert(errNominalPage);
      logRuntimeError(errNominalPage, httpRequestId);
    }
    if (!errNominalPage) {
      assert(pageContextNominalPageSuccess === pageContextNominalPageInit);
    }
  }
  if (pageContextNominalPageSuccess && "is404" in pageContextNominalPageSuccess && pageContextNominalPageSuccess.is404 === true) {
    await log404(pageContextNominalPageSuccess);
  }
  if (errNominalPage === void 0) {
    assert(pageContextNominalPageSuccess);
    return pageContextNominalPageSuccess;
  } else {
    assert(errNominalPage);
    assert(pageContextNominalPageSuccess === void 0);
    assert(pageContextNominalPageInit);
    assert(hasProp(pageContextNominalPageInit, "urlOriginal", "string"));
    const pageContextErrorPageInit = await getPageContextErrorPageInit(pageContextInit, errNominalPage, pageContextNominalPageInit, renderContext, httpRequestId);
    if (isAbortError(errNominalPage)) {
      const handled = await handleAbortError(errNominalPage, pageContextsFromRewrite, pageContextInit, pageContextNominalPageInit, httpRequestId, renderContext, pageContextErrorPageInit);
      if (handled.pageContextReturn) {
        return handled.pageContextReturn;
      } else {
      }
      Object.assign(pageContextErrorPageInit, handled.pageContextAbort);
    }
    {
      const errorPageId = getErrorPageId(renderContext.pageFilesAll, renderContext.pageConfigs);
      if (!errorPageId) {
        objectAssign(pageContextErrorPageInit, { pageId: null });
        return handleErrorWithoutErrorPage(pageContextErrorPageInit);
      } else {
        objectAssign(pageContextErrorPageInit, { pageId: errorPageId });
      }
    }
    let pageContextErrorPage;
    try {
      pageContextErrorPage = await renderPageAlreadyRouted(pageContextErrorPageInit);
    } catch (errErrorPage) {
      if (isAbortError(errErrorPage)) {
        const handled = await handleAbortError(errErrorPage, pageContextsFromRewrite, pageContextInit, pageContextNominalPageInit, httpRequestId, renderContext, pageContextErrorPageInit);
        if (!handled.pageContextReturn) {
          const pageContextAbort = errErrorPage._pageContextAbort;
          assertWarning2(false, `Failed to render error page because ${import_picocolors41.default.cyan(pageContextAbort._abortCall)} was called: make sure ${import_picocolors41.default.cyan(pageContextAbort._abortCaller)} doesn't occur while the error page is being rendered.`, { onlyOnce: false });
          const pageContextHttpWithError = getPageContextHttpResponseError(errNominalPage, pageContextInit, pageContextErrorPageInit);
          return pageContextHttpWithError;
        }
        return handled.pageContextReturn;
      }
      if (isNewError(errErrorPage, errNominalPage)) {
        logRuntimeError(errErrorPage, httpRequestId);
      }
      const pageContextWithError = getPageContextHttpResponseError(errNominalPage, pageContextInit, pageContextErrorPageInit);
      return pageContextWithError;
    }
    return pageContextErrorPage;
  }
}
function logHttpRequest(urlOriginal, httpRequestId) {
  logRuntimeInfo?.(getRequestInfoMessage(urlOriginal), httpRequestId, "info");
}
function getRequestInfoMessage(urlOriginal) {
  return `HTTP request: ${prettyUrl(urlOriginal)}`;
}
function logHttpResponse(urlOriginalPretty, httpRequestId, pageContextReturn) {
  const statusCode = pageContextReturn.httpResponse?.statusCode ?? null;
  let msg;
  let isNominal;
  {
    const { errorWhileRendering } = pageContextReturn;
    const isSkipped = statusCode === null && !errorWhileRendering;
    if (isSkipped) {
      assert(errorWhileRendering === null || errorWhileRendering === void 0);
      msg = `HTTP response ${prettyUrl(urlOriginalPretty)} ${import_picocolors41.default.dim("null")}`;
      isNominal = true;
    } else {
      const isSuccess = statusCode !== null && statusCode >= 200 && statusCode <= 399;
      isNominal = isSuccess || statusCode === 404;
      const color = (s) => import_picocolors41.default.bold(isSuccess ? import_picocolors41.default.green(String(s)) : import_picocolors41.default.red(String(s)));
      const isRedirect = statusCode && 300 <= statusCode && statusCode <= 399;
      const type = isRedirect ? "redirect" : "response";
      if (isRedirect) {
        assert(pageContextReturn.httpResponse);
        const headerRedirect = pageContextReturn.httpResponse.headers.slice().reverse().find((header) => header[0] === "Location");
        assert(headerRedirect);
        const urlRedirect = headerRedirect[1];
        urlOriginalPretty = urlRedirect;
      }
      msg = `HTTP ${type} ${prettyUrl(urlOriginalPretty)} ${color(statusCode ?? "ERR")}`;
    }
  }
  logRuntimeInfo?.(msg, httpRequestId, isNominal ? "info" : "error");
}
function prettyUrl(url) {
  return import_picocolors41.default.bold(decodeURI(url));
}
function getPageContextHttpResponseError(err, pageContextInit, pageContext) {
  const pageContextWithError = createPageContext(pageContextInit);
  const httpResponse = createHttpResponseError(pageContext);
  objectAssign(pageContextWithError, {
    httpResponse,
    errorWhileRendering: err
  });
  return pageContextWithError;
}
function getPageContextHttpResponseFavicon404(pageContextInit) {
  const pageContext = createPageContext(pageContextInit);
  const httpResponse = createHttpResponseFavicon404();
  objectAssign(pageContext, {
    httpResponse
  });
  checkType(pageContext);
  return pageContext;
}
function createPageContext(pageContextInit) {
  const pageContext = {
    _isPageContextObject: true
  };
  Object.assign(pageContext, pageContextInit);
  return pageContext;
}
async function renderPageNominal(pageContext) {
  objectAssign(pageContext, { errorWhileRendering: null });
  {
    const pageContextFromRoute = await route(pageContext);
    objectAssign(pageContext, pageContextFromRoute);
    objectAssign(pageContext, { is404: pageContext.pageId ? null : true });
    if (pageContext.pageId === null) {
      const errorPageId = getErrorPageId(pageContext._pageFilesAll, pageContext._pageConfigs);
      if (!errorPageId) {
        assert(hasProp(pageContext, "pageId", "null"));
        return handleErrorWithoutErrorPage(pageContext);
      }
      objectAssign(pageContext, { pageId: errorPageId });
    }
  }
  assert(hasProp(pageContext, "pageId", "string"));
  assert(pageContext.errorWhileRendering === null);
  const pageContextAfterRender = await renderPageAlreadyRouted(pageContext);
  assert(pageContext === pageContextAfterRender);
  return pageContextAfterRender;
}
async function getPageContextErrorPageInit(pageContextInit, errNominalPage, pageContextNominalPagePartial, renderContext, httpRequestId) {
  const pageContextInitEnhanced = getPageContextInitEnhancedSSR(pageContextInit, renderContext, null, httpRequestId);
  assert(errNominalPage);
  const pageContext = {};
  objectAssign(pageContext, pageContextInitEnhanced);
  objectAssign(pageContext, {
    is404: false,
    errorWhileRendering: errNominalPage,
    routeParams: {}
  });
  objectAssign(pageContext, {
    _debugRouteMatches: pageContextNominalPagePartial._debugRouteMatches || "ROUTING_ERROR"
  });
  assert(pageContext.errorWhileRendering);
  return pageContext;
}
function getPageContextInitEnhancedSSR(pageContextInit, renderContext, urlRewrite, httpRequestId) {
  const { isClientSideNavigation, _urlHandler } = handlePageContextUrl(pageContextInit.urlOriginal);
  const pageContextInitEnhanced = getPageContextInitEnhanced(pageContextInit, renderContext, {
    ssr: {
      urlRewrite,
      urlHandler: _urlHandler,
      isClientSideNavigation
    }
  });
  objectAssign(pageContextInitEnhanced, { _httpRequestId: httpRequestId });
  return pageContextInitEnhanced;
}
function handlePageContextUrl(urlOriginal) {
  const { isPageContextRequest } = handlePageContextRequestUrl(urlOriginal);
  return {
    isClientSideNavigation: isPageContextRequest,
    _urlHandler: (url) => handlePageContextRequestUrl(url).urlWithoutPageContextRequestSuffix
  };
}
function getRequestId() {
  const httpRequestId = ++globalObject11.httpRequestsCount;
  assert(httpRequestId >= 1);
  return httpRequestId;
}
function assertIsUrl(urlOriginal) {
  assertUsage2(isUrl(urlOriginal), `${import_picocolors41.default.code("renderPage(pageContextInit)")} (https://vike.dev/renderPage) called with ${import_picocolors41.default.code(`pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}`)} which isn't a valid URL.`);
}
function assertIsNotViteRequest(urlPathname, urlOriginal) {
  const isViteRequest = urlPathname.startsWith("/@vite/client") || urlPathname.startsWith("/@fs/") || urlPathname.startsWith("/__vite_ping");
  assertUsage2(!isViteRequest, `${import_picocolors41.default.code("renderPage(pageContextInit)")} (https://vike.dev/renderPage) called with ${import_picocolors41.default.code(`pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}`)} which is unexpected because this URL should have already been handled by Vite's development middleware. Make sure to 1. install Vite's development middleware and 2. add Vite's middleware *before* Vike's middleware, see https://vike.dev/renderPage`);
}
function normalizeUrl(pageContextInit, httpRequestId) {
  const { trailingSlash, disableUrlNormalization, baseServer: baseServer2 } = getGlobalContext();
  if (disableUrlNormalization)
    return null;
  const { urlOriginal } = pageContextInit;
  const { isPageContextRequest } = handlePageContextRequestUrl(urlOriginal);
  if (isPageContextRequest)
    return null;
  const urlNormalized = normalizeUrlPathname(urlOriginal, trailingSlash, baseServer2);
  if (!urlNormalized)
    return null;
  logRuntimeInfo?.(`URL normalized from ${import_picocolors41.default.cyan(urlOriginal)} to ${import_picocolors41.default.cyan(urlNormalized)} (https://vike.dev/url-normalization)`, httpRequestId, "info");
  const httpResponse = createHttpResponseRedirect({ url: urlNormalized, statusCode: 301 }, pageContextInit.urlOriginal);
  const pageContextHttpResponse = createPageContext(pageContextInit);
  objectAssign(pageContextHttpResponse, { httpResponse });
  return pageContextHttpResponse;
}
function getPermanentRedirect(pageContextInit, httpRequestId) {
  const { redirects, baseServer: baseServer2 } = getGlobalContext();
  const urlWithoutBase = removeBaseServer2(pageContextInit.urlOriginal, baseServer2);
  let origin = null;
  let urlTargetExternal = null;
  let urlTarget = modifyUrlPathname(urlWithoutBase, (urlPathname) => {
    const urlTarget2 = resolveRedirects(redirects, urlPathname);
    if (urlTarget2 === null)
      return null;
    if (!isUrl(urlTarget2)) {
      assert(isUri(urlTarget2));
      urlTargetExternal = urlTarget2;
      return null;
    }
    const { urlModified, origin: origin_ } = removeUrlOrigin(urlTarget2);
    origin = origin_;
    return urlModified;
  });
  if (urlTargetExternal) {
    urlTarget = urlTargetExternal;
  } else {
    if (origin)
      urlTarget = addUrlOrigin(urlTarget, origin);
    if (urlTarget === urlWithoutBase)
      return null;
    urlTarget = prependBase(urlTarget, baseServer2);
    assert(urlTarget !== pageContextInit.urlOriginal);
  }
  logRuntimeInfo?.(`Permanent redirect defined by your config.redirects (https://vike.dev/redirects)`, httpRequestId, "info");
  const httpResponse = createHttpResponseRedirect({ url: urlTarget, statusCode: 301 }, urlWithoutBase);
  const pageContextHttpResponse = createPageContext(pageContextInit);
  objectAssign(pageContextHttpResponse, { httpResponse });
  return pageContextHttpResponse;
}
async function handleAbortError(errAbort, pageContextsFromRewrite, pageContextInit, pageContextNominalPageInit, httpRequestId, renderContext, pageContextErrorPageInit) {
  logAbortErrorHandled(errAbort, getGlobalContext().isProduction, pageContextNominalPageInit);
  const pageContextAbort = errAbort._pageContextAbort;
  let pageContextSerialized;
  if (pageContextNominalPageInit.isClientSideNavigation) {
    if (pageContextAbort.abortStatusCode) {
      const errorPageId = getErrorPageId(renderContext.pageFilesAll, renderContext.pageConfigs);
      const abortCall = pageContextAbort._abortCall;
      assert(abortCall);
      assertUsage2(errorPageId, `You called ${import_picocolors41.default.cyan(abortCall)} but you didn't define an error page, make sure to define one https://vike.dev/error-page`);
      const pageContext = createPageContext({});
      objectAssign(pageContext, { pageId: errorPageId });
      objectAssign(pageContext, pageContextAbort);
      objectAssign(pageContext, pageContextErrorPageInit);
      objectAssign(pageContext, renderContext);
      objectAssign(pageContext, await loadUserFilesServerSide(pageContext));
      pageContextSerialized = serializePageContextClientSide(pageContext);
    } else {
      pageContextSerialized = serializePageContextAbort(pageContextAbort);
    }
    const httpResponse = await createHttpResponsePageContextJson(pageContextSerialized);
    const pageContextReturn = { httpResponse };
    return { pageContextReturn };
  }
  if (pageContextAbort._urlRewrite) {
    const pageContextReturn = await renderPageAlreadyPrepared(pageContextInit, httpRequestId, renderContext, [
      ...pageContextsFromRewrite,
      pageContextAbort
    ]);
    Object.assign(pageContextReturn, pageContextAbort);
    return { pageContextReturn };
  }
  if (pageContextAbort._urlRedirect) {
    const pageContextReturn = createPageContext(pageContextInit);
    objectAssign(pageContextReturn, pageContextAbort);
    const httpResponse = createHttpResponseRedirect(pageContextAbort._urlRedirect, (() => {
      const { pathname, searchOriginal } = pageContextNominalPageInit.urlParsed;
      const urlLogical = createUrlFromComponents(
        null,
        pathname,
        searchOriginal,
        // The server-side doesn't have access to the hash
        null
      );
      return urlLogical;
    })());
    objectAssign(pageContextReturn, { httpResponse });
    return { pageContextReturn };
  }
  assert(pageContextAbort.abortStatusCode);
  return { pageContextAbort };
}
function assertBaseUrl(pageContextInit) {
  const { baseServer: baseServer2 } = getGlobalContext();
  const { urlOriginal } = pageContextInit;
  const { urlWithoutPageContextRequestSuffix } = handlePageContextRequestUrl(urlOriginal);
  const { hasBaseServer } = parseUrl(urlWithoutPageContextRequestSuffix, baseServer2);
  assertUsage2(hasBaseServer, `${import_picocolors41.default.code("renderPage(pageContextInit)")} (https://vike.dev/renderPage) called with ${import_picocolors41.default.code(`pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}`)} which doesn't start with Base URL ${import_picocolors41.default.code(baseServer2)} (https://vike.dev/base-url)`);
}
var import_picocolors41, globalObject11, renderPage_wrapper;
var init_renderPage = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/renderPage.js"() {
    init_renderPageAlreadyRouted();
    init_route();
    init_utils3();
    init_abort();
    init_globalContext();
    init_handlePageContextRequestUrl();
    init_createHttpResponse();
    init_loggerRuntime();
    init_isNewError();
    init_assertArguments();
    init_log404();
    init_isConfigInvalid();
    import_picocolors41 = __toESM(require_picocolors(), 1);
    init_serializePageContextClientSide();
    init_error_page();
    init_handleErrorWithoutErrorPage();
    init_loadUserFilesServerSide();
    init_resolveRedirects();
    globalObject11 = getGlobalObject("runtime/renderPage.ts", {
      httpRequestsCount: 0
    });
    renderPage_wrapper = async (_httpRequestId, ret) => ({
      pageContextReturn: await ret()
    });
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/injectAssets__public.js
var init_injectAssets_public = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/html/injectAssets/injectAssets__public.js"() {
    init_utils3();
    init_injectAssets();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/createPageRenderer.js
var init_createPageRenderer = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/createPageRenderer.js"() {
    init_renderPage();
    init_utils3();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/page-files/setup.js
var init_setup = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/page-files/setup.js"() {
    init_getPageFiles();
    init_getPageFilesExports();
    setPageFilesAsync(getPageFilesExports);
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/index-common.js
function addEcosystemStamp2() {
  const g = globalThis;
  g._isVikeApp = /* Don't set to true so that consumers do `!!globalThis._isVikeApp` instead of `globalThis._isVikeApp === true`.
  true
  */
  // We use an object so that we can eventually, in the future, add helpful information as needed. (E.g. the Vike version, or global settings.)
  {};
  g._isVitePluginSsr = true;
}
var init_index_common = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/index-common.js"() {
    init_renderPage();
    init_renderHtml();
    init_stream();
    init_utils3();
    init_globalContext();
    init_injectAssets_public();
    init_createPageRenderer();
    init_setup();
    addEcosystemStamp2();
  }
});

// node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/index.js
var init_runtime = __esm({
  "node_modules/.pnpm/vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.8/node_modules/vike/dist/esm/node/runtime/index.js"() {
    init_isBrowser();
    init_assert();
    init_index_common();
    assertUsage2(!isBrowser(), "It's forbidden to `import { something } from 'vike/server'` on the client-side: the module 'vike/server' is a server-only module.", { showStackTrace: true });
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    module.exports = Error;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    module.exports = EvalError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    module.exports = RangeError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    module.exports = ReferenceError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    module.exports = SyntaxError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    module.exports = TypeError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    module.exports = URIError;
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/.pnpm/has-proto@1.0.3/node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/.pnpm/has-proto@1.0.3/node_modules/has-proto/index.js"(exports, module) {
    "use strict";
    var test = {
      __proto__: null,
      foo: {}
    };
    var $Object = Object;
    module.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/.pnpm/get-intrinsic@1.2.4/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/.pnpm/get-intrinsic@1.2.4/node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/.pnpm/es-define-property@1.0.0/node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/.pnpm/es-define-property@1.0.0/node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/.pnpm/gopd@1.0.1/node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/.pnpm/gopd@1.0.1/node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js"(exports, module) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// node_modules/.pnpm/call-bind@1.0.7/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.7/node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = require_type();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $defineProperty = require_es_define_property();
    var $max = GetIntrinsic("%Math.max%");
    module.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/.pnpm/call-bind@1.0.7/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.7/node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/.pnpm/object-inspect@1.13.2/node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/.pnpm/object-inspect@1.13.2/node_modules/object-inspect/util.inspect.js"(exports, module) {
    module.exports = __require("util").inspect;
  }
});

// node_modules/.pnpm/object-inspect@1.13.2/node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/.pnpm/object-inspect@1.13.2/node_modules/object-inspect/index.js"(exports, module) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray2(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray2(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag2 = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag2 + "{}";
        }
        if (indent) {
          return tag2 + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag2 + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray2(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray2(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/.pnpm/side-channel@1.0.6/node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/.pnpm/side-channel@1.0.6/node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('.').ListNode<typeof value>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/utils.js
var require_utils5 = __commonJS({
  "node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray2 = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray2(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray2(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray2(target) && !isArray2(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray2(target) && isArray2(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray2(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/stringify.js
var require_stringify2 = __commonJS({
  "node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils5();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray2 = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify3 = function stringify4(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder2, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder2 && !encodeValuesOnly ? encoder2(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder2) {
          var keyValue = encodeValuesOnly ? prefix : encoder2(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder2(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray2(obj)) {
        if (encodeValuesOnly && encoder2) {
          obj = utils.maybeMap(obj, encoder2);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray2(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
      var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray2(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify4(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray2(obj) ? null : encoder2,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray2(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray2(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify3(
          obj[key],
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    var utils = require_utils5();
    var has = Object.prototype.hasOwnProperty;
    var isArray2 = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray2(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/qs@6.13.0/node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    var stringify3 = require_stringify2();
    var parse3 = require_parse2();
    var formats = require_formats();
    module.exports = {
      formats,
      parse: parse3,
      stringify: stringify3
    };
  }
});

// node_modules/.pnpm/@vite-plugin-vercel+vike@9.0.2_vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18._ygzc3zkdojv73c64tca5t7dqea/node_modules/@vite-plugin-vercel/vike/templates/ssr_.template.ts
init_runtime();

// node_modules/.pnpm/@vite-plugin-vercel+vike@9.0.2_vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18._ygzc3zkdojv73c64tca5t7dqea/node_modules/@vite-plugin-vercel/vike/templates/utils.ts
var import_qs = __toESM(require_lib(), 1);
function getOriginalUrl(xNowRouteMatchesHeader, originalPath, url) {
  const matches = (
    // FIXME x-now-route-matches is not definitive https://github.com/orgs/vercel/discussions/577#discussioncomment-2769478
    typeof xNowRouteMatchesHeader === "string" ? (0, import_qs.parse)(xNowRouteMatchesHeader) : null
  );
  return typeof originalPath === "string" ? originalPath : matches && typeof matches?.["1"] === "string" ? matches["1"] : url ?? "";
}

// node_modules/.pnpm/@vite-plugin-vercel+vike@9.0.2_vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18._ygzc3zkdojv73c64tca5t7dqea/node_modules/@vite-plugin-vercel/vike/templates/node-helpers.ts
function getDefaultPageContextInit(request) {
  const query2 = request.query ?? {};
  const url = getOriginalUrl(request.headers["x-now-route-matches"], query2.__original_path, request.url);
  return {
    url,
    urlOriginal: url,
    body: request.body,
    cookies: request.cookies
  };
}
function getDefaultEmptyResponseHandler(response) {
  response.statusCode = 200;
  response.setHeader("content-type", "text/html; charset=UTF-8");
  return response.end("");
}
function getDefaultResponseHandler(response, httpResponse) {
  const { statusCode, body, headers } = httpResponse;
  response.statusCode = statusCode;
  for (const [name, value] of headers) {
    response.setHeader(name, value);
  }
  return response.end(body);
}

// node_modules/.pnpm/@vite-plugin-vercel+vike@9.0.2_vike@0.4.198_react-streaming@0.3.43_react-dom@18.3.1_react@18._ygzc3zkdojv73c64tca5t7dqea/node_modules/@vite-plugin-vercel/vike/templates/ssr_.template.ts
async function handler(request, response) {
  console.debug("query", request.query);
  console.debug("url", request.url);
  console.debug("headers", request.headers);
  const pageContextInit = getDefaultPageContextInit(request);
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    return getDefaultEmptyResponseHandler(response);
  }
  return getDefaultResponseHandler(response, httpResponse);
}
export {
  handler as default
};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.production.min.js:
  (**
   * @license React
   * react-dom-server.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.browser.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.browser.production.min.js:
  (**
   * @license React
   * react-dom-server.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
