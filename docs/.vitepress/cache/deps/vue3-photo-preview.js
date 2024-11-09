import {
  Fragment,
  Teleport,
  computed2 as computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  inject,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  toDisplayString,
  toRefs,
  watch,
  withModifiers
} from "./chunk-IYO332YY.js";
import "./chunk-UXIASGQL.js";

// node_modules/vue3-photo-preview/dist/vue3-photo-preview.esm.js
var updateItemKey = Symbol();
var removeItemKey = Symbol();
var handleShowKey = Symbol();
function useItems(index2) {
  var items = ref([]);
  var getElementIndex = function(children, child) {
    return child ? Array.prototype.indexOf.call(children, child) : -1;
  };
  var sortItems = function(items2) {
    var _a, _b;
    var children = (_b = (_a = items2[0].originRef) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.children;
    if (children && children.length) {
      items2.sort(function(cur, next) {
        return getElementIndex(children, cur.originRef) - getElementIndex(children, next.originRef);
      });
    }
  };
  var updateItem = function(item) {
    var index3 = items.value.findIndex(function(_a) {
      var key = _a.key;
      return item.key === key;
    });
    if (index3 > -1) {
      items.value.splice(index3, 1, item);
    } else {
      items.value.push(item);
      sortItems(items.value);
    }
  };
  var removeItem = function(key) {
    var nextItems = items.value.filter(function(item) {
      return item.key !== key;
    });
    var nextEndIndex = nextItems.length - 1;
    items.value = nextItems;
    index2.value = Math.max(Math.min(index2.value, nextEndIndex), 0);
  };
  return {
    items,
    updateItem,
    removeItem
  };
}
function useVisible(items, index2, onVisibleChange) {
  var visible = ref(false);
  var handleHide = function() {
    visible.value = false;
    onVisibleChange();
  };
  var handleShow = function(key) {
    var itemIndex = items.value.findIndex(function(item) {
      return item.key === key;
    });
    if (itemIndex > -1) {
      index2.value = itemIndex;
      visible.value = true;
      onVisibleChange();
    }
  };
  return {
    visible,
    handleHide,
    handleShow
  };
}
function useIndex(onIndexChange) {
  var index2 = ref(0);
  var updateIndex = function(newIndex) {
    index2.value = newIndex;
    onIndexChange();
  };
  return {
    index: index2,
    updateIndex
  };
}
var script$c = defineComponent({});
var _hoisted_1$a = { class: "PhotoView__Spinner" };
var _hoisted_2$9 = createBaseVNode(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    width: "36",
    height: "36",
    fill: "white"
  },
  [
    createBaseVNode("path", {
      opacity: ".25",
      d: "M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
    }),
    createBaseVNode("path", { d: "M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" })
  ],
  -1
  /* HOISTED */
);
var _hoisted_3$9 = [
  _hoisted_2$9
];
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, _hoisted_3$9);
}
script$c.render = render$c;
script$c.__file = "src/PhotoView/Spinner.vue";
function getSuitableImageSize(naturalWidth, naturalHeight, rotate) {
  var _a;
  var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
  var isVertical = rotate % 180 !== 0;
  if (isVertical) {
    _a = [innerHeight, innerWidth], innerWidth = _a[0], innerHeight = _a[1];
  }
  var width;
  var height;
  var scaleWidth = innerWidth / naturalWidth;
  var scaleHeight = innerHeight / naturalHeight;
  if (naturalWidth < innerWidth && naturalHeight < innerHeight) {
    width = naturalWidth;
    height = naturalHeight;
  } else {
    if (scaleWidth < scaleHeight) {
      width = innerWidth;
      height = innerWidth * (naturalHeight / naturalWidth);
    } else {
      width = innerHeight * (naturalWidth / naturalHeight);
      height = innerHeight;
    }
  }
  return {
    width,
    height
  };
}
function useLoadImage(src) {
  var naturalWidth = ref(0);
  var naturalHeight = ref(0);
  var width = ref(0);
  var height = ref(0);
  var loaded = ref(false);
  function setSuitableImageSize(actualWidth, actualHeight, rotate) {
    var imageSize = getSuitableImageSize(actualWidth, actualHeight, rotate);
    width.value = imageSize.width;
    height.value = imageSize.height;
  }
  var loadImage = function(src2) {
    loaded.value = false;
    var img = new Image();
    img.onload = function() {
      naturalWidth.value = img.naturalWidth;
      naturalHeight.value = img.naturalHeight;
      setSuitableImageSize(naturalWidth.value, naturalHeight.value, 0);
      loaded.value = true;
    };
    img.src = src2;
  };
  loadImage(src.value);
  watch(src, function() {
    loadImage(src.value);
  });
  return {
    width,
    height,
    loaded,
    naturalWidth,
    naturalHeight,
    setSuitableImageSize
  };
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
function useWindowResize(naturalWidth, naturalHeight, rotate, setSuitableImageSize) {
  var handleResize = throttle(function() {
    setSuitableImageSize(naturalWidth.value, naturalHeight.value, rotate.value);
  }, 8);
  window.addEventListener("resize", handleResize);
  onBeforeUnmount(function() {
    window.removeEventListener("resize", handleResize);
  });
}
var ShowAnimateEnum;
(function(ShowAnimateEnum2) {
  ShowAnimateEnum2[ShowAnimateEnum2["None"] = 0] = "None";
  ShowAnimateEnum2[ShowAnimateEnum2["In"] = 1] = "In";
  ShowAnimateEnum2[ShowAnimateEnum2["Out"] = 2] = "Out";
})(ShowAnimateEnum || (ShowAnimateEnum = {}));
var TouchTypeEnum;
(function(TouchTypeEnum2) {
  TouchTypeEnum2[TouchTypeEnum2["Normal"] = 0] = "Normal";
  TouchTypeEnum2[TouchTypeEnum2["X"] = 1] = "X";
  TouchTypeEnum2[TouchTypeEnum2["Y"] = 2] = "Y";
  TouchTypeEnum2[TouchTypeEnum2["Scale"] = 3] = "Scale";
})(TouchTypeEnum || (TouchTypeEnum = {}));
var EdgeTypeEnum;
(function(EdgeTypeEnum2) {
  EdgeTypeEnum2[EdgeTypeEnum2["Left"] = 0] = "Left";
  EdgeTypeEnum2[EdgeTypeEnum2["Right"] = 1] = "Right";
  EdgeTypeEnum2[EdgeTypeEnum2["Top"] = 2] = "Top";
  EdgeTypeEnum2[EdgeTypeEnum2["Bottom"] = 3] = "Bottom";
})(EdgeTypeEnum || (EdgeTypeEnum = {}));
function getAnimateOrigin(originRect) {
  if (originRect) {
    var innerWidth_1 = window.innerWidth, innerHeight_1 = window.innerHeight;
    var xOrigin = originRect.left + originRect.width / 2 - innerWidth_1 / 2;
    var yOrigin = originRect.top + originRect.height / 2 - innerHeight_1 / 2;
    return "".concat(xOrigin, "px ").concat(yOrigin, "px");
  }
  return null;
}
var isTouchDevice = typeof document !== "undefined" && "ontouchstart" in document.documentElement;
var horizontalOffset = 20;
var minStartTouchOffset = 10;
var minSwitchImageOffset = 40;
var maxScale = 6;
function withContinuousTap(singleTap, doubleTap) {
  var continuousCount = 0;
  var withSingleTap = debounce(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    continuousCount = 0;
    singleTap.apply(void 0, args);
  }, 300);
  return function invokeTap() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    continuousCount += 1;
    withSingleTap.apply(void 0, args);
    if (continuousCount >= 2) {
      withSingleTap.cancel();
      continuousCount = 0;
      doubleTap.apply(void 0, args);
    }
  };
}
function getPositionOnMoveOrScale(_a) {
  var x = _a.x, y = _a.y, clientX = _a.clientX, clientY = _a.clientY, fromScale = _a.fromScale, toScale = _a.toScale;
  var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
  var imageCenterClientX = innerWidth / 2 + x;
  var imageCenterClientY = innerHeight / 2 + y;
  var offsetScale = toScale / fromScale;
  var originX = -(clientX - imageCenterClientX) * (offsetScale - 1);
  var originY = -(clientY - imageCenterClientY) * (offsetScale - 1);
  return {
    x: originX + x,
    y: originY + y,
    scale: toScale
  };
}
function getEdgeInfo(_a) {
  var _b;
  var width = _a.width, height = _a.height, scale = _a.scale, rotate = _a.rotate;
  var isVertical = rotate % 180 !== 0;
  if (isVertical) {
    _b = [height, width], width = _b[0], height = _b[1];
  }
  var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
  var currentWidth = width * scale;
  var currentHeight = height * scale;
  var edgeLeft, edgeRight, edgeTop, edgeBottom;
  if (currentWidth > innerWidth) {
    edgeLeft = (currentWidth - innerWidth) / 2;
    edgeRight = -(currentWidth - innerWidth) / 2;
  } else {
    edgeLeft = 0;
    edgeRight = 0;
  }
  if (currentHeight > innerHeight) {
    edgeTop = (currentHeight - innerHeight) / 2;
    edgeBottom = -(currentHeight - innerHeight) / 2;
  } else {
    edgeTop = 0;
    edgeBottom = 0;
  }
  return {
    edgeLeft,
    edgeRight,
    edgeTop,
    edgeBottom
  };
}
function getEdgeTypes(_a) {
  var width = _a.width, height = _a.height, scale = _a.scale, rotate = _a.rotate, x = _a.x, y = _a.y;
  var position = getEdgeInfo({ width, height, scale, rotate });
  var edgeTypes = [];
  if (x === position.edgeLeft) {
    edgeTypes.push(EdgeTypeEnum.Left);
  }
  if (x === position.edgeRight) {
    edgeTypes.push(EdgeTypeEnum.Right);
  }
  if (y === position.edgeTop) {
    edgeTypes.push(EdgeTypeEnum.Top);
  }
  if (y === position.edgeBottom) {
    edgeTypes.push(EdgeTypeEnum.Bottom);
  }
  return edgeTypes;
}
function getStandardPosition(_a) {
  var width = _a.width, height = _a.height, scale = _a.scale, rotate = _a.rotate, x = _a.x, y = _a.y;
  var _b = getEdgeInfo({ width, height, scale, rotate }), edgeLeft = _b.edgeLeft, edgeRight = _b.edgeRight, edgeTop = _b.edgeTop, edgeBottom = _b.edgeBottom;
  if (x > edgeLeft) {
    x = edgeLeft;
  }
  if (x < edgeRight) {
    x = edgeRight;
  }
  if (y > edgeTop) {
    y = edgeTop;
  }
  if (y < edgeBottom) {
    y = edgeBottom;
  }
  return { x, y, scale };
}
function getMultipleTouchPosition(e) {
  var _a = e.touches[0], clientX = _a.clientX, clientY = _a.clientY;
  if (e.touches.length >= 2) {
    var _b = e.touches[1], nextClientX = _b.clientX, nextClientY = _b.clientY;
    return {
      clientX: (clientX + nextClientX) / 2,
      clientY: (clientY + nextClientY) / 2,
      touchLength: Math.sqrt(Math.pow(nextClientX - clientX, 2) + Math.pow(nextClientY - clientY, 2))
    };
  }
  return { clientX, clientY, touchLength: 0 };
}
function useMoveImage(width, height, naturalWidth, naturalHeight, setSuitableImageSize, onTouchStart, onTouchMove, onTouchEnd, onSingleTap) {
  var x = ref(0);
  var y = ref(0);
  var scale = ref(1);
  var rotate = ref(0);
  var touched = ref(false);
  var clientX = ref(0);
  var clientY = ref(0);
  var touchType = ref(TouchTypeEnum.Normal);
  var lastX = ref(0);
  var lastY = ref(0);
  var lastTouchLength = ref(0);
  var lastScale = ref(1);
  var edgeTypes = [];
  var handleMouseDown = function(e) {
    if (isTouchDevice)
      return;
    handleDown(e.clientX, e.clientY, 0);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  var handleTouchStart = function(e) {
    if (!isTouchDevice)
      return;
    var touch = getMultipleTouchPosition(e);
    handleDown(touch.clientX, touch.clientY, touch.touchLength);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };
  var handleDown = function(newClientX, newClientY, touchLength) {
    touched.value = true;
    clientX.value = newClientX;
    clientY.value = newClientY;
    lastTouchLength.value = touchLength;
    lastScale.value = scale.value;
    edgeTypes = getEdgeTypes({
      width: width.value,
      height: height.value,
      scale: scale.value,
      rotate: rotate.value,
      x: lastX.value,
      y: lastY.value
    });
    onTouchStart(newClientX, newClientY);
  };
  var handleMouseMove = function(e) {
    if (isTouchDevice || !touched.value)
      return;
    handleMove(e.clientX, e.clientY, 0);
  };
  var handleTouchMove = function(e) {
    if (!isTouchDevice || !touched.value)
      return;
    var touch = getMultipleTouchPosition(e);
    handleMove(touch.clientX, touch.clientY, touch.touchLength);
  };
  var handleMove = throttle(function(newClientX, newClientY, touchLength) {
    if (touchType.value === TouchTypeEnum.Normal) {
      if (scale.value !== 1 || touchLength) {
        touchType.value = TouchTypeEnum.Scale;
      } else {
        var isMoveX = Math.abs(newClientX - clientX.value) > minStartTouchOffset;
        var isMoveY = Math.abs(newClientY - clientY.value) > minStartTouchOffset;
        if (!isMoveX && !isMoveY)
          return;
        touchType.value = isMoveX ? TouchTypeEnum.X : TouchTypeEnum.Y;
      }
    }
    onTouchMove(touchType.value, newClientX, newClientY, lastScale.value, edgeTypes);
    var newX = newClientX - clientX.value;
    var newY = newClientY - clientY.value;
    if (touchType.value === TouchTypeEnum.Y) {
      x.value = newX + lastX.value;
      y.value = newY + lastY.value;
    }
    if (touchType.value === TouchTypeEnum.Scale) {
      if (touchLength) {
        var endScale = scale.value + (touchLength - lastTouchLength.value) / 100 / 2 * scale.value;
        var toScale = Math.max(Math.min(endScale, Math.max(maxScale, naturalWidth.value / width.value)), 1);
        handleToScale(toScale, newClientX, newClientY);
        lastTouchLength.value = touchLength;
      } else {
        if (!(newX > 0 && edgeTypes.includes(EdgeTypeEnum.Left)) && !(newX < 0 && edgeTypes.includes(EdgeTypeEnum.Right))) {
          x.value = newX + lastX.value;
        }
        y.value = newY + lastY.value;
      }
    }
  }, 8, { trailing: false });
  var handleMouseUp = function(e) {
    if (isTouchDevice)
      return;
    handleUp(e.clientX, e.clientY, e);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
  var handleTouchEnd = function(e) {
    if (!isTouchDevice)
      return;
    var touch = e.changedTouches[0];
    handleUp(touch.clientX, touch.clientY, e);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };
  var onDoubleTap = function(newClientX, newClientY) {
    if (touchType.value !== TouchTypeEnum.Normal)
      return;
    if (scale.value === 1) {
      var toScale = Math.max(2, naturalWidth.value / width.value);
      var position = getPositionOnMoveOrScale({
        x: x.value,
        y: y.value,
        clientX: newClientX,
        clientY: newClientY,
        fromScale: scale.value,
        toScale
      });
      x.value = position.x;
      y.value = position.y;
      scale.value = position.scale;
    } else {
      x.value = 0;
      y.value = 0;
      scale.value = 1;
    }
  };
  var onTap = withContinuousTap(onSingleTap, onDoubleTap);
  var handleUp = function(newClientX, newClientY, e) {
    if (clientX.value === newClientX && clientY.value === newClientY) {
      onTap(newClientX, newClientY, e);
    }
    onTouchEnd(touchType.value, newClientX, newClientY, lastScale.value, edgeTypes);
    if (touchType.value === TouchTypeEnum.Y) {
      x.value = 0;
      y.value = 0;
    }
    if (touchType.value === TouchTypeEnum.Scale) {
      setStandardPosition({
        width: width.value,
        height: height.value,
        scale: scale.value,
        rotate: rotate.value,
        x: x.value,
        y: y.value
      });
    }
    touched.value = false;
    touchType.value = TouchTypeEnum.Normal;
    clientX.value = 0;
    clientY.value = 0;
    lastX.value = x.value;
    lastY.value = y.value;
  };
  var handleWheel = function(e) {
    var endScale = scale.value - e.deltaY / 100 / 2;
    var toScale = Math.max(Math.min(endScale, Math.max(maxScale, naturalWidth.value / width.value)), 1);
    handleToScale(toScale, e.clientX, e.clientY);
  };
  var handleToScale = function(newScale, newClientX, newClientY) {
    var position = getPositionOnMoveOrScale({
      x: x.value,
      y: y.value,
      clientX: newClientX,
      clientY: newClientY,
      fromScale: scale.value,
      toScale: newScale
    });
    setStandardPosition({
      width: width.value,
      height: height.value,
      scale: position.scale,
      rotate: rotate.value,
      x: position.x,
      y: position.y
    });
  };
  var setStandardPosition = function(position) {
    var standardPosition = getStandardPosition(position);
    x.value = standardPosition.x;
    y.value = standardPosition.y;
    lastX.value = standardPosition.x;
    lastY.value = standardPosition.y;
    scale.value = standardPosition.scale;
  };
  var handleRotateLeft = function() {
    rotate.value = rotate.value - 90;
    setSuitableImageSize(naturalWidth.value, naturalHeight.value, rotate.value);
    setStandardPosition({
      width: width.value,
      height: height.value,
      scale: scale.value,
      rotate: rotate.value,
      x: x.value,
      y: y.value
    });
  };
  var handleRotateRight = function() {
    rotate.value = rotate.value + 90;
    setSuitableImageSize(naturalWidth.value, naturalHeight.value, rotate.value);
    setStandardPosition({
      width: width.value,
      height: height.value,
      scale: scale.value,
      rotate: rotate.value,
      x: x.value,
      y: y.value
    });
  };
  return {
    x,
    y,
    scale,
    touched,
    handleMouseDown,
    handleTouchStart,
    handleWheel,
    rotate,
    handleRotateLeft,
    handleRotateRight
  };
}
var script$b = defineComponent({
  name: "PhotoView",
  components: {
    Spinner: script$c
  },
  props: {
    /**
     * 图片地址
     */
    src: {
      type: String,
      required: true
    },
    /**
     * 触发打开模态框的位置信息
     */
    originRect: {
      type: Object,
      default: null
    },
    /**
     * 动画类型
     */
    showAnimateType: {
      type: Number,
      default: null
    }
  },
  emits: ["touchStart", "touchMove", "touchEnd", "singleTap"],
  setup: function(props, _a) {
    var emit = _a.emit;
    var src = toRefs(props).src;
    var _b = useLoadImage(src), width = _b.width, height = _b.height, loaded = _b.loaded, naturalWidth = _b.naturalWidth, naturalHeight = _b.naturalHeight, setSuitableImageSize = _b.setSuitableImageSize;
    var onTouchStart = function(clientX, clientY) {
      emit("touchStart", clientX, clientY);
    };
    var onTouchMove = function(touchType, clientX, clientY, lastScale, edgeTypes) {
      emit("touchMove", touchType, clientX, clientY, lastScale, edgeTypes);
    };
    var onTouchEnd = function(touchType, clientX, clientY, lastScale, edgeTypes) {
      emit("touchEnd", touchType, clientX, clientY, lastScale, edgeTypes);
    };
    var onSingleTap = function(clientX, clientY, e) {
      emit("singleTap", clientX, clientY, e);
    };
    var _c = useMoveImage(width, height, naturalWidth, naturalHeight, setSuitableImageSize, onTouchStart, onTouchMove, onTouchEnd, onSingleTap), x = _c.x, y = _c.y, scale = _c.scale, rotate = _c.rotate, touched = _c.touched, handleMouseDown = _c.handleMouseDown, handleTouchStart = _c.handleTouchStart, handleWheel = _c.handleWheel, handleRotateLeft = _c.handleRotateLeft, handleRotateRight = _c.handleRotateRight;
    useWindowResize(naturalWidth, naturalHeight, rotate, setSuitableImageSize);
    return {
      width,
      height,
      loaded,
      x,
      y,
      scale,
      touched,
      handleMouseDown,
      handleTouchStart,
      handleWheel,
      rotate,
      handleRotateLeft,
      handleRotateRight
    };
  },
  data: function() {
    return {
      ShowAnimateEnum,
      // 翻转
      isFlipHorizontal: false,
      isFlipVertical: false
    };
  },
  methods: {
    getAnimateOrigin,
    toggleFlipHorizontal: function() {
      this.isFlipHorizontal = !this.isFlipHorizontal;
    },
    toggleFlipVertical: function() {
      this.isFlipVertical = !this.isFlipVertical;
    },
    getTransform: function() {
      var scaleX = "".concat(this.isFlipHorizontal ? "-" : "").concat(this.scale);
      var scaleY = "".concat(this.isFlipVertical ? "-" : "").concat(this.scale);
      var transform = {
        matrix: "".concat(scaleX, ", 0, 0, ").concat(scaleY, ", ").concat(this.x, ", ").concat(this.y)
      };
      if (this.rotate) {
        transform.rotate = "".concat(this.rotate, "deg");
      }
      var str = "";
      Object.keys(transform).forEach(function(name) {
        str += "".concat(name, "(").concat(transform[name], ")");
      });
      return str;
    }
  }
});
var _hoisted_1$9 = ["src"];
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_spinner = resolveComponent("spinner");
  return _ctx.loaded ? (openBlock(), createElementBlock(
    "div",
    {
      key: 0,
      class: "PhotoView__PhotoWrap",
      style: normalizeStyle({
        width: `${_ctx.width}px`,
        height: `${_ctx.height}px`
      })
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["PhotoView__PhotoBox", {
            "PhotoView__animateIn": _ctx.showAnimateType === _ctx.ShowAnimateEnum.In,
            "PhotoView__animateOut": _ctx.showAnimateType === _ctx.ShowAnimateEnum.Out
          }]),
          style: normalizeStyle({
            transformOrigin: _ctx.getAnimateOrigin(_ctx.originRect),
            width: _ctx.showAnimateType === _ctx.ShowAnimateEnum.In || _ctx.showAnimateType === _ctx.ShowAnimateEnum.Out ? "0" : "100%"
          })
        },
        [
          createBaseVNode("img", {
            class: "PhotoView__Photo",
            src: _ctx.src,
            style: normalizeStyle({
              width: `${_ctx.width}px`,
              height: `${_ctx.height}px`,
              transform: _ctx.getTransform(),
              transition: _ctx.touched ? void 0 : "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)"
            }),
            onMousedown: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleMouseDown && _ctx.handleMouseDown(...args), ["prevent"])),
            onTouchstart: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleTouchStart && _ctx.handleTouchStart(...args), ["prevent"])),
            onWheel: _cache[2] || (_cache[2] = (...args) => _ctx.handleWheel && _ctx.handleWheel(...args))
          }, null, 44, _hoisted_1$9)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    4
    /* STYLE */
  )) : (openBlock(), createBlock(_component_spinner, { key: 1 }));
}
script$b.render = render$b;
script$b.__file = "src/PhotoView/index.vue";
function useBodyEffect(visible) {
  var style = document.body.style;
  var originalOverflow = style.overflow;
  watch(visible, function() {
    if (visible.value) {
      style.overflow = "hidden";
    } else {
      style.overflow = originalOverflow;
    }
  });
}
function useInnerWidth() {
  var innerWidth = ref(window.innerWidth);
  var handleResize = throttle(function() {
    innerWidth.value = window.innerWidth;
  }, 8);
  window.addEventListener("resize", handleResize);
  onBeforeUnmount(function() {
    window.removeEventListener("resize", handleResize);
  });
  return {
    innerWidth
  };
}
var script$a = defineComponent({});
var _hoisted_1$8 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "44",
  height: "44",
  viewBox: "0 0 768 768"
};
var _hoisted_2$8 = createBaseVNode(
  "path",
  {
    fill: "#FFF",
    d: "M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$8 = [
  _hoisted_2$8
];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
script$a.render = render$a;
script$a.__file = "src/PhotoSlider/Close.vue";
var script$9 = defineComponent({});
var _hoisted_1$7 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "44",
  height: "44",
  viewBox: "0 0 768 768"
};
var _hoisted_2$7 = createBaseVNode(
  "path",
  { d: "M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z" },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$7 = [
  _hoisted_2$7
];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
script$9.render = render$9;
script$9.__file = "src/PhotoSlider/ArrowLeft.vue";
var script$8 = defineComponent({});
var _hoisted_1$6 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "44",
  height: "44",
  viewBox: "0 0 768 768"
};
var _hoisted_2$6 = createBaseVNode(
  "path",
  { d: "M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z" },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$6 = [
  _hoisted_2$6
];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
script$8.render = render$8;
script$8.__file = "src/PhotoSlider/ArrowRight.vue";
var script$7 = defineComponent({});
var _hoisted_1$5 = {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "44",
  height: "44"
};
var _hoisted_2$5 = createBaseVNode(
  "path",
  {
    fill: "#FFF",
    d: "M744.81 959.5c99.37-180.1 116.14-454.76-274.34-445.6v221.85L134.82 400.12 470.46 64.5v217.1c467.59-12.2 519.68 412.74 274.35 677.9z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$5 = [
  _hoisted_2$5
];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
script$7.render = render$7;
script$7.__file = "src/PhotoSlider/RotateLeft.vue";
var script$6 = defineComponent({});
var _hoisted_1$4 = {
  viewBox: "0 0 1000 1000",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "44",
  height: "44"
};
var _hoisted_2$4 = createBaseVNode(
  "path",
  {
    fill: "#FFF",
    d: "M555.668 258.9754V47.24496791175579l327.3385 327.3241L555.668 701.8941V485.52881146582615c-380.8294-8.9369-364.4728 258.9334-267.5596 434.5814C48.8389 661.5105 99.6385 247.0815 555.668 258.9754z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$4 = [
  _hoisted_2$4
];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
script$6.render = render$6;
script$6.__file = "src/PhotoSlider/RotateRight.vue";
var script$5 = defineComponent({});
var _hoisted_1$3 = {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "44",
  height: "44"
};
var _hoisted_2$3 = createBaseVNode(
  "path",
  {
    fill: "#FFF",
    d: "M978.432 492.832l-153.696-116.896c-17.504-13.312-31.968-6.208-32.096 15.776L792.032 480H231.968l-0.608-88.288c-0.16-22.016-14.592-29.088-32.096-15.776l-153.696 116.896c-17.504 13.312-17.12 34.592 0.864 47.264l154.144 108.608c17.984 12.672 32.576 5.056 32.416-16.96L232.384 544h559.2l-0.576 87.712c-0.16 22.016 14.432 29.632 32.416 16.96l154.144-108.608c17.984-12.672 18.4-33.92 0.864-47.232z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$3 = [
  _hoisted_2$3
];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
script$5.render = render$5;
script$5.__file = "src/PhotoSlider/FlipHorizontal.vue";
var script$4 = defineComponent({});
var _hoisted_1$2 = {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "44",
  height: "44"
};
var _hoisted_2$2 = createBaseVNode(
  "path",
  {
    fill: "#FFF",
    d: "M494.03 74.72l-109.59 144.09c-12.48 16.41-5.82 29.97 14.79000001 30.09L482 249.47 482 774.53l-82.77 0.54c-20.64 0.15-27.27 13.68-14.79 30.09l109.59 144.09c12.48 16.41 32.43 16.05 44.31000001-0.81l101.81999999-144.51c11.88-16.86 4.74-30.54-15.9-30.39L542.00000001 774.14l-1e-8-524.25 82.23 0.54c20.64 0.15 27.78-13.53 15.9-30.39l-101.82-144.51c-11.88-16.86-31.8-17.25-44.28-0.81z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$2 = [
  _hoisted_2$2
];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
script$4.render = render$4;
script$4.__file = "src/PhotoSlider/FlipVertical.vue";
var script$3 = defineComponent({});
var _hoisted_1$1 = {
  viewBox: "0 0 1068 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2740",
  width: "44",
  height: "44"
};
var _hoisted_2$1 = createBaseVNode(
  "path",
  {
    d: "M252.622237 809.004596a252.614304 252.614304 0 0 1-31.486765-503.2587v-4.352863a301.406611 301.406611 0 0 1 594.880633-68.660847 288.877568 288.877568 0 0 1-36.146765 575.488683 31.529129 31.529129 0 0 1 0-63.047667 225.819311 225.819311 0 0 0 8.472726-451.479758l-26.244267-0.974363-3.812726-25.990085a238.358944 238.358944 0 0 0-474.176071 34.664037 243.040125 243.040125 0 0 0 1.874591 30.035812l4.501135 35.786673-37.163491-0.3495h-0.730773c-104.521657 0-189.577228 85.034389-189.577228 189.577228s85.034389 189.577228 189.577228 189.577228a31.529129 31.529129 0 0 1 0 63.047667z",
    fill: "#FFF"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$1 = createBaseVNode(
  "path",
  {
    d: "M500.417679 442.421546m10.590906 0l46.599989 0q10.590907 0 10.590907 10.590906l0 528.878103q0 10.590907-10.590907 10.590907l-46.599989 0q-10.590907 0-10.590906-10.590907l0-528.878103q0-10.590907 10.590906-10.590906Z",
    fill: "#FFF"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$1 = createBaseVNode(
  "path",
  {
    d: "M487.406543 980.472843m7.488902-7.488902l171.982631-171.982631q7.488902-7.488902 14.977804 0l32.951168 32.951168q7.488902 7.488902 0 14.977804l-171.982631 171.982631q-7.488902 7.488902-14.977804 0l-32.951168-32.951168q-7.488902-7.488902 0-14.977804Z",
    fill: "#FFF"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_5 = createBaseVNode(
  "path",
  {
    d: "M344.966294 837.223674m7.488902-7.488902l32.951168-32.951168q7.488902-7.488902 14.977804 0l176.198883 176.198883q7.488902 7.488902 0 14.977804l-32.951168 32.951168q-7.488902 7.488902-14.977804 0l-176.198883-176.198883q-7.488902-7.488902 0-14.977804Z",
    fill: "#FFF"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_6 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4$1,
  _hoisted_5
];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_6);
}
script$3.render = render$3;
script$3.__file = "src/PhotoSlider/Download.vue";
function useAnimationHandle(visible, currentItem) {
  var photoVisible = ref(visible.value);
  var showAnimateType = ref(ShowAnimateEnum.None);
  var originRect = ref(null);
  watch(visible, function() {
    var originRef = currentItem.value.originRef;
    if (originRef && originRef.nodeType === 1 && originRef.children.length > 0) {
      var _a = originRef.getBoundingClientRect(), top_1 = _a.top, left = _a.left, width = _a.width, height = _a.height;
      originRect.value = {
        left,
        top: top_1,
        width,
        height
      };
    } else {
      originRect.value = null;
    }
    if (visible.value) {
      showAnimateType.value = ShowAnimateEnum.In;
      photoVisible.value = true;
    } else {
      showAnimateType.value = ShowAnimateEnum.Out;
    }
  });
  var onShowAnimateEnd = function() {
    if (showAnimateType.value === ShowAnimateEnum.Out) {
      photoVisible.value = false;
    }
    showAnimateType.value = ShowAnimateEnum.None;
  };
  return {
    photoVisible,
    showAnimateType,
    originRect,
    onShowAnimateEnd
  };
}
var script$2 = defineComponent({
  name: "PhotoSlider",
  components: {
    PhotoView: script$b,
    Close: script$a,
    ArrowLeft: script$9,
    ArrowRight: script$8,
    RotateLeft: script$7,
    RotateRight: script$6,
    FlipHorizontal: script$5,
    FlipVertical: script$4,
    Download: script$3
  },
  props: {
    /**
     * 图片列表
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * 图片当前索引
     */
    index: {
      type: Number,
      required: true
    },
    /**
     * 是否显示模态框
     */
    visible: {
      type: Boolean,
      required: true
    },
    /**
     * 箭头切换是否需要过渡
     */
    shouldTransition: {
      type: Boolean,
      default: false
    },
    /**
     * 是否切换显隐覆盖物
     */
    toggleOverlay: {
      type: Boolean,
      default: true
    },
    /**
     * 默认背景透明度
     */
    defaultBackdropOpacity: {
      type: Number,
      default: 1
    },
    /**
     * 是否循环显示预览图
     */
    loop: {
      type: Boolean,
      default: false
    },
    /**
     * 下载图片方法，不传使用内置的下载方法
     */
    downloadMethod: {
      type: Function,
      default: null
    }
  },
  emits: ["clickPhoto", "clickMask", "changeIndex", "closeModal"],
  setup: function(props) {
    var _a = toRefs(props), items = _a.items, index2 = _a.index, visible = _a.visible;
    var currentItem = computed(function() {
      return items.value[index2.value] || {};
    });
    useBodyEffect(visible);
    var _b = useAnimationHandle(visible, currentItem), photoVisible = _b.photoVisible, showAnimateType = _b.showAnimateType, originRect = _b.originRect, onShowAnimateEnd = _b.onShowAnimateEnd;
    var innerWidth = useInnerWidth().innerWidth;
    return {
      innerWidth,
      currentItem,
      photoVisible,
      showAnimateType,
      originRect,
      onShowAnimateEnd
    };
  },
  data: function() {
    return {
      // 常量
      horizontalOffset,
      ShowAnimateEnum,
      isTouchDevice,
      // 触摸相关
      touched: false,
      hasMove: false,
      needTransition: false,
      clientX: 0,
      clientY: 0,
      touchMoveX: 0,
      backdropOpacity: this.defaultBackdropOpacity,
      // 是否显示覆盖物
      overlayVisible: true,
      // 虚拟下标，用于循环预览
      virtualIndex: 0,
      // photo-view 子组件
      photoViewRefs: {}
    };
  },
  computed: {
    // 当前显示的图片列表
    showItems: function() {
      var len = this.items.length;
      if (this.loop) {
        var connect = this.items.concat(this.items).concat(this.items);
        return connect.slice(len + this.index - 1, len + this.index + 2);
      }
      return this.items.slice(Math.max(this.index - 1, 0), Math.min(this.index + 2, len));
    }
  },
  created: function() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount: function() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  beforeUpdate: function() {
    this.photoViewRefs = {};
  },
  methods: {
    defaultDownloadMethod: function(item) {
      var paths = item.src.split("/");
      var name = paths[paths.length - 1];
      var img = new Image();
      img.setAttribute("crossOrigin", "Anonymous");
      img.onload = function() {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context === null || context === void 0 ? void 0 : context.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob(function(blob) {
          if (blob) {
            var url = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.download = item.downloadName || name;
            a.href = url;
            a.dispatchEvent(new MouseEvent("click"));
            URL.revokeObjectURL(url);
          }
        });
      };
      img.src = item.src + "?v=" + Date.now();
    },
    handleDownload: function() {
      var item = this.items[this.index];
      if (typeof this.downloadMethod === "function") {
        this.downloadMethod(item);
      } else {
        this.defaultDownloadMethod(item);
      }
    },
    toggleFlipHorizontal: function() {
      var _a;
      (_a = this.photoViewRefs[this.currentItem.key]) === null || _a === void 0 ? void 0 : _a.toggleFlipHorizontal();
    },
    toggleFlipVertical: function() {
      var _a;
      (_a = this.photoViewRefs[this.currentItem.key]) === null || _a === void 0 ? void 0 : _a.toggleFlipVertical();
    },
    handleRotateLeft: function() {
      var _a;
      (_a = this.photoViewRefs[this.currentItem.key]) === null || _a === void 0 ? void 0 : _a.handleRotateLeft();
    },
    handleRotateRight: function() {
      var _a;
      (_a = this.photoViewRefs[this.currentItem.key]) === null || _a === void 0 ? void 0 : _a.handleRotateRight();
    },
    setPhotoViewRef: function(key, ref2) {
      this.photoViewRefs[key] = ref2;
    },
    handleKeyDown: function(e) {
      if (this.visible) {
        switch (e.code) {
          case "ArrowLeft":
            this.handlePrevious();
            break;
          case "ArrowRight":
            this.handleNext();
            break;
          case "Escape":
            this.handleClickClose();
            break;
        }
      }
    },
    handleSingleTap: function(_clientX, _clientY, e) {
      if (this.toggleOverlay) {
        this.overlayVisible = !this.overlayVisible;
      }
      this.$emit("clickPhoto", e);
    },
    handleTouchStart: function(clientX, clientY) {
      this.touched = true;
      this.needTransition = false;
      this.clientX = clientX;
      this.clientY = clientY;
    },
    handleTouchMove: function(touchType, clientX, clientY, lastScale, edgeTypes) {
      if (touchType === TouchTypeEnum.Scale && lastScale !== 1) {
        this.handleTouchScaleMove(clientX, edgeTypes);
      }
      if (touchType === TouchTypeEnum.X) {
        this.handleTouchHorizontalMove(clientX);
      }
      if (touchType === TouchTypeEnum.Y) {
        this.handleTouchVerticalMove(clientX, clientY);
      }
    },
    handleTouchScaleMove: function(clientX, edgeTypes) {
      var touchMoveX = clientX - this.clientX;
      if (touchMoveX > 0 && edgeTypes.includes(EdgeTypeEnum.Left) || touchMoveX < 0 && edgeTypes.includes(EdgeTypeEnum.Right)) {
        this.handleTouchHorizontalMove(clientX);
      }
    },
    handleTouchHorizontalMove: function(clientX) {
      var touchMoveX = clientX - this.clientX;
      if (!this.loop && (this.index === 0 && touchMoveX > 0 || this.index === this.items.length - 1 && touchMoveX < 0)) {
        touchMoveX = touchMoveX / 2;
      }
      this.hasMove = clientX !== this.clientX;
      this.touchMoveX = touchMoveX;
    },
    handleTouchVerticalMove: function(clientX, clientY) {
      var touchMoveY = Math.abs(clientY - this.clientY);
      var opacity = Math.max(Math.min(this.defaultBackdropOpacity, this.defaultBackdropOpacity - touchMoveY / 100 / 4), 0);
      this.hasMove = clientX !== this.clientX || clientY !== this.clientY;
      this.backdropOpacity = opacity;
    },
    handleTouchEnd: function(touchType, clientX, clientY, lastScale, edgeTypes) {
      if (touchType === TouchTypeEnum.Scale && lastScale !== 1) {
        this.handleTouchScaleEnd(clientX, edgeTypes);
      }
      if (touchType === TouchTypeEnum.X) {
        this.handleTouchHorizontalEnd(clientX);
      }
      if (touchType === TouchTypeEnum.Y) {
        this.handleTouchVerticalEnd(clientY);
      }
      if (this.hasMove) {
        this.needTransition = true;
      }
      this.touched = false;
      this.hasMove = false;
      this.clientX = 0;
      this.clientY = 0;
      this.touchMoveX = 0;
    },
    handleTouchScaleEnd: function(clientX, edgeTypes) {
      var offsetX = clientX - this.clientX;
      if (offsetX < -minSwitchImageOffset && edgeTypes.includes(EdgeTypeEnum.Right)) {
        this.handleNext();
      }
      if (offsetX > minSwitchImageOffset && edgeTypes.includes(EdgeTypeEnum.Left)) {
        this.handlePrevious();
      }
    },
    handleTouchHorizontalEnd: function(clientX) {
      var offsetX = clientX - this.clientX;
      if (offsetX < -minSwitchImageOffset) {
        this.handleNext();
      }
      if (offsetX > minSwitchImageOffset) {
        this.handlePrevious();
      }
    },
    handleTouchVerticalEnd: function(clientY) {
      var offsetY = clientY - this.clientY;
      if (Math.abs(offsetY) > window.innerHeight * 0.14) {
        this.$emit("closeModal");
      } else {
        this.resetBackdropOpacity();
      }
    },
    resetBackdropOpacity: function() {
      this.backdropOpacity = this.defaultBackdropOpacity;
    },
    resetNeedTransition: function() {
      this.needTransition = false;
    },
    handlePrevious: function() {
      var len = this.items.length;
      if (!this.loop && this.index === 0)
        return;
      this.$emit("changeIndex", (this.index + len - 1) % len);
      this.virtualIndex -= 1;
    },
    handleNext: function() {
      var len = this.items.length;
      if (!this.loop && this.index === len - 1)
        return;
      this.$emit("changeIndex", (this.index + 1) % len);
      this.virtualIndex += 1;
    },
    handleClickMask: function(e) {
      this.$emit("clickMask", e);
    },
    handleClickClose: function() {
      this.$emit("closeModal");
    },
    // 当预览下一张时，currentIndex 会从 1 变成 0，相当于左移一个单位，所以此时只需要右移一个单位的来平衡 transform 的左移即可
    getItemLeft: function(currentIndex) {
      var index2 = this.virtualIndex + currentIndex;
      if (this.loop || this.index !== 0) {
        index2 -= 1;
      }
      return "".concat((this.innerWidth + this.horizontalOffset) * index2, "px");
    },
    getItemTransition: function() {
      var transition = "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
      if (this.needTransition) {
        return transition;
      }
      if (this.hasMove) {
        return void 0;
      }
      return this.shouldTransition ? transition : void 0;
    },
    getItemTransform: function() {
      return "translate3d(".concat(-(this.innerWidth + this.horizontalOffset) * this.virtualIndex + this.touchMoveX, "px, 0px, 0px)");
    }
  }
});
var _hoisted_1 = { class: "PhotoSlider__BannerWrap" };
var _hoisted_2 = { class: "PhotoSlider__Counter" };
var _hoisted_3 = { class: "PhotoSlider__BannerRight" };
var _hoisted_4 = {
  key: 1,
  class: "PhotoSlider__FooterWrap"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_download = resolveComponent("download");
  const _component_rotate_left = resolveComponent("rotate-left");
  const _component_rotate_right = resolveComponent("rotate-right");
  const _component_flip_horizontal = resolveComponent("flip-horizontal");
  const _component_flip_vertical = resolveComponent("flip-vertical");
  const _component_close = resolveComponent("close");
  const _component_photo_view = resolveComponent("photo-view");
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_arrow_right = resolveComponent("arrow-right");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    _ctx.photoVisible ? (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(["PhotoSlider__Wrapper", {
          "PhotoSlider__Clean": _ctx.showAnimateType !== _ctx.ShowAnimateEnum.None,
          "PhotoSlider__Hide": !_ctx.overlayVisible
        }])
      },
      [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(["PhotoSlider__Backdrop", {
              "PhotoSlider__fadeIn": _ctx.showAnimateType === _ctx.ShowAnimateEnum.In,
              "PhotoSlider__fadeOut": _ctx.showAnimateType === _ctx.ShowAnimateEnum.Out
            }]),
            style: normalizeStyle({
              background: `rgba(0, 0, 0, ${_ctx.backdropOpacity})`
            }),
            onAnimationend: _cache[0] || (_cache[0] = ($event) => (_ctx.onShowAnimateEnd(), _ctx.resetBackdropOpacity()))
          },
          null,
          38
          /* CLASS, STYLE, HYDRATE_EVENTS */
        ),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode(
            "div",
            _hoisted_2,
            toDisplayString(_ctx.index + 1) + " / " + toDisplayString(_ctx.items.length),
            1
            /* TEXT */
          ),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_download, {
              class: "PhotoSlider__BannerIcon",
              onClick: _ctx.handleDownload
            }, null, 8, ["onClick"]),
            createVNode(_component_rotate_left, {
              class: "PhotoSlider__BannerIcon",
              onClick: _ctx.handleRotateLeft
            }, null, 8, ["onClick"]),
            createVNode(_component_rotate_right, {
              class: "PhotoSlider__BannerIcon",
              onClick: _ctx.handleRotateRight
            }, null, 8, ["onClick"]),
            createVNode(_component_flip_horizontal, {
              class: "PhotoSlider__BannerIcon",
              onClick: _ctx.toggleFlipHorizontal
            }, null, 8, ["onClick"]),
            createVNode(_component_flip_vertical, {
              class: "PhotoSlider__BannerIcon",
              onClick: _ctx.toggleFlipVertical
            }, null, 8, ["onClick"]),
            createVNode(_component_close, {
              class: "PhotoSlider__BannerIcon",
              onClick: _ctx.handleClickClose
            }, null, 8, ["onClick"])
          ])
        ]),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.showItems, (item, currentIndex) => {
            return openBlock(), createElementBlock(
              "div",
              {
                key: item.key,
                class: "PhotoSlider__PhotoBox",
                style: normalizeStyle({
                  left: _ctx.getItemLeft(currentIndex),
                  transition: _ctx.getItemTransition(),
                  transform: _ctx.getItemTransform()
                }),
                onTransitionend: _cache[2] || (_cache[2] = (...args) => _ctx.resetNeedTransition && _ctx.resetNeedTransition(...args)),
                onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleClickMask && _ctx.handleClickMask(...args))
              },
              [
                createVNode(_component_photo_view, {
                  ref_for: true,
                  ref: (val) => _ctx.setPhotoViewRef(item.key, val),
                  "origin-rect": _ctx.originRect,
                  "show-animate-type": _ctx.showAnimateType,
                  src: item.src,
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"])),
                  onTouchStart: _ctx.handleTouchStart,
                  onTouchMove: _ctx.handleTouchMove,
                  onTouchEnd: _ctx.handleTouchEnd,
                  onSingleTap: _ctx.handleSingleTap
                }, null, 8, ["origin-rect", "show-animate-type", "src", "onTouchStart", "onTouchMove", "onTouchEnd", "onSingleTap"])
              ],
              36
              /* STYLE, HYDRATE_EVENTS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        !_ctx.isTouchDevice ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            _ctx.loop || _ctx.index > 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "PhotoSlider__ArrowLeft",
              onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handlePrevious && _ctx.handlePrevious(...args))
            }, [
              createVNode(_component_arrow_left)
            ])) : createCommentVNode("v-if", true),
            _ctx.loop || _ctx.index < _ctx.items.length - 1 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "PhotoSlider__ArrowRight",
              onClick: _cache[5] || (_cache[5] = (...args) => _ctx.handleNext && _ctx.handleNext(...args))
            }, [
              createVNode(_component_arrow_right)
            ])) : createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true),
        _ctx.currentItem.intro ? (openBlock(), createElementBlock(
          "div",
          _hoisted_4,
          toDisplayString(_ctx.currentItem.intro),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true)
  ]);
}
script$2.render = render$2;
script$2.__file = "src/PhotoSlider/index.vue";
var script$1 = defineComponent({
  name: "PhotoProvider",
  components: {
    PhotoSlider: script$2
  },
  props: {
    /**
     * 图片点击是否关闭
     */
    photoClosable: {
      type: Boolean,
      default: false
    },
    /**
     * 背景点击是否关闭
     */
    maskClosable: {
      type: Boolean,
      default: true
    },
    /**
     * 箭头切换是否需要过渡
     */
    shouldTransition: {
      type: Boolean,
      default: false
    },
    /**
     * 默认背景透明度
     */
    defaultBackdropOpacity: {
      type: Number,
      default: 1
    },
    /**
     * 是否循环显示预览图
     */
    loop: {
      type: Boolean,
      default: false
    },
    /**
     * 下载图片方法，不传使用内置的下载方法
     */
    downloadMethod: {
      type: Function,
      default: null
    }
  },
  emits: ["indexChange", "visibleChange"],
  setup: function(_props, _a) {
    var emit = _a.emit;
    var onIndexChange = function() {
      emit("indexChange", { index: index2, items, visible });
    };
    var onVisibleChange = function() {
      emit("visibleChange", { index: index2, items, visible });
    };
    var _b = useIndex(onIndexChange), index2 = _b.index, updateIndex = _b.updateIndex;
    var _c = useItems(index2), items = _c.items, updateItem = _c.updateItem, removeItem = _c.removeItem;
    var _d = useVisible(items, index2, onVisibleChange), visible = _d.visible, handleHide = _d.handleHide, handleShow = _d.handleShow;
    provide(updateItemKey, updateItem);
    provide(removeItemKey, removeItem);
    provide(handleShowKey, handleShow);
    return {
      items,
      updateItem,
      removeItem,
      visible,
      handleHide,
      handleShow,
      index: index2,
      updateIndex
    };
  },
  methods: {
    handleClickPhoto: function() {
      if (this.photoClosable) {
        this.handleHide();
      }
    },
    handleClickMask: function() {
      if (this.maskClosable) {
        this.handleHide();
      }
    }
  }
});
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_photo_slider = resolveComponent("photo-slider");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" @slot 默认插槽 "),
      renderSlot(_ctx.$slots, "default"),
      createVNode(_component_photo_slider, {
        visible: _ctx.visible,
        index: _ctx.index,
        "should-transition": _ctx.shouldTransition,
        "toggle-overlay": !_ctx.photoClosable,
        "default-backdrop-opacity": _ctx.defaultBackdropOpacity,
        items: _ctx.items,
        loop: _ctx.loop,
        "download-method": _ctx.downloadMethod,
        onClickPhoto: _ctx.handleClickPhoto,
        onClickMask: _ctx.handleClickMask,
        onChangeIndex: _ctx.updateIndex,
        onCloseModal: _ctx.handleHide
      }, null, 8, ["visible", "index", "should-transition", "toggle-overlay", "default-backdrop-opacity", "items", "loop", "download-method", "onClickPhoto", "onClickMask", "onChangeIndex", "onCloseModal"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
script$1.render = render$1;
script$1.__file = "src/PhotoProvider/index.vue";
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
var INFINITY = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}
var script = defineComponent({
  name: "PhotoConsumer",
  props: {
    /**
     * 图片地址
     */
    src: {
      type: String,
      required: true
    },
    /**
     * 图片介绍
     */
    intro: {
      type: String,
      default: null
    },
    /**
     * 图片下载名称，默认图片名称
     */
    downloadName: {
      type: String,
      default: null
    }
  },
  setup: function(props) {
    var updateItem = inject(updateItemKey);
    var removeItem = inject(removeItemKey);
    var handleShow = inject(handleShowKey);
    var root2 = ref(null);
    var key = uniqueId();
    var _a = toRefs(props), src = _a.src, intro = _a.intro, downloadName = _a.downloadName;
    var handleClick = function() {
      handleShow === null || handleShow === void 0 ? void 0 : handleShow(key);
    };
    var getItem = function() {
      return {
        key,
        src: src.value,
        originRef: root2.value,
        intro: intro.value,
        downloadName: downloadName.value
      };
    };
    watch([src, intro, downloadName], function() {
      updateItem === null || updateItem === void 0 ? void 0 : updateItem(getItem());
    });
    onMounted(function() {
      updateItem === null || updateItem === void 0 ? void 0 : updateItem(getItem());
    });
    onUnmounted(function() {
      removeItem === null || removeItem === void 0 ? void 0 : removeItem(key);
    });
    return {
      root: root2,
      handleClick
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.$slots.default() ? (openBlock(), createElementBlock(
    "span",
    {
      key: 0,
      ref: "root",
      style: { "display": "inline-block" },
      class: "PhotoConsumer",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    },
    [
      createCommentVNode(" @slot 默认插槽 "),
      renderSlot(_ctx.$slots, "default")
    ],
    512
    /* NEED_PATCH */
  )) : createCommentVNode("v-if", true);
}
script.render = render;
script.__file = "src/PhotoConsumer/index.vue";
var components = [
  script$1,
  script,
  script$2
];
var install = function(app) {
  components.forEach(function(component) {
    app.component(component.name, component);
  });
};
var index = { install };
export {
  EdgeTypeEnum,
  script as PhotoConsumer,
  script$1 as PhotoProvider,
  script$2 as PhotoSlider,
  ShowAnimateEnum,
  TouchTypeEnum,
  index as default
};
//# sourceMappingURL=vue3-photo-preview.js.map
