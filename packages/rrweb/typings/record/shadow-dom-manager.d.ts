import { mutationCallBack, scrollCallback, MutationBufferParam, SamplingStrategy } from '../types';
import { Mirror } from '@fullview/rrweb-snapshot';
declare type BypassOptions = Omit<MutationBufferParam, 'doc' | 'mutationCb' | 'mirror' | 'shadowDomManager'> & {
    sampling: SamplingStrategy;
};
export declare class ShadowDomManager {
    private mutationCb;
    private scrollCb;
    private bypassOptions;
    private mirror;
    private restorePatches;
    constructor(options: {
        mutationCb: mutationCallBack;
        scrollCb: scrollCallback;
        bypassOptions: BypassOptions;
        mirror: Mirror;
    });
    addShadowRoot(shadowRoot: ShadowRoot, doc: Document): void;
    observeAttachShadow(iframeElement: HTMLIFrameElement): void;
    reset(): void;
}
export {};
