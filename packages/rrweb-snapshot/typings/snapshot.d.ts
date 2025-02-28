import {
  serializedNodeWithId,
  MaskInputOptions,
  SlimDOMOptions,
  DataURLOptions,
  MaskTextFn,
  MaskInputFn,
  KeepIframeSrcFn,
} from './types';
import { Mirror } from './utils';
export declare const IGNORED_NODE = -2;
export declare function absoluteToStylesheet(
  cssText: string | null,
  href: string,
): string;
export declare function absoluteToDoc(
  doc: Document,
  attributeValue: string,
): string;
export declare function transformAttribute(
  doc: Document,
  tagName: string,
  name: string,
  value: string,
): string;
export declare function _isDeletedElement(
  element: HTMLElement,
  deleteSelector: string | null,
): boolean;
export declare function needMaskingText(
  node: Node | null,
  maskTextClass: string | RegExp,
  maskTextSelector: string | null,
): boolean;
export declare function serializeNodeWithId(
  n: Node,
  options: {
    doc: Document;
    mirror: Mirror;
    blockSelector?: string | null;
    deleteSelector: string | null;
    maskTextClass: string | RegExp;
    maskTextSelector: string | null;
    skipChild: boolean;
    inlineStylesheet: boolean;
    maskInputOptions?: MaskInputOptions;
    maskTextFn: MaskTextFn | undefined;
    maskInputFn: MaskInputFn | undefined;
    slimDOMOptions: SlimDOMOptions;
    dataURLOptions?: DataURLOptions;
    keepIframeSrcFn?: KeepIframeSrcFn;
    inlineImages?: boolean;
    recordCanvas?: boolean;
    preserveWhiteSpace?: boolean;
    onSerialize?: (n: Node) => unknown;
    onIframeLoad?: (
      iframeNode: HTMLIFrameElement,
      node: serializedNodeWithId,
    ) => unknown;
    iframeLoadTimeout?: number;
  },
): serializedNodeWithId | null;
declare function snapshot(
  n: Document,
  options?: {
    mirror?: Mirror;
    blockSelector?: string | null;
    deleteSelector?: string | null;
    maskTextClass?: string | RegExp;
    maskTextSelector?: string | null;
    inlineStylesheet?: boolean;
    maskAllInputs?: boolean | MaskInputOptions;
    maskTextFn?: MaskTextFn;
    maskInputFn?: MaskTextFn;
    slimDOM?: boolean | SlimDOMOptions;
    dataURLOptions?: DataURLOptions;
    inlineImages?: boolean;
    recordCanvas?: boolean;
    preserveWhiteSpace?: boolean;
    onSerialize?: (n: Node) => unknown;
    onIframeLoad?: (
      iframeNode: HTMLIFrameElement,
      node: serializedNodeWithId,
    ) => unknown;
    iframeLoadTimeout?: number;
    keepIframeSrcFn?: KeepIframeSrcFn;
  },
): serializedNodeWithId | null;
export declare function visitSnapshot(
  node: serializedNodeWithId,
  onVisit: (node: serializedNodeWithId) => unknown,
): void;
export declare function cleanupSnapshot(): void;
export default snapshot;
