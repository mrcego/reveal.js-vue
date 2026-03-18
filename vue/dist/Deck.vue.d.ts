import { RevealApi } from 'reveal.js';
import { DeckProps } from './types';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DeckProps>, {
    plugins: () => never[];
}>>, {
    reveal: import('vue').ShallowRef<RevealApi | null, RevealApi | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    ready: (deck: RevealApi) => void;
    sync: (event: any) => void;
    slideSync: (event: any) => void;
    slideChanged: (event: any) => void;
    slideTransitionEnd: (event: any) => void;
    fragmentShown: (event: any) => void;
    fragmentHidden: (event: any) => void;
    overviewShown: (event: any) => void;
    overviewHidden: (event: any) => void;
    paused: (event: any) => void;
    resumed: (event: any) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DeckProps>, {
    plugins: () => never[];
}>>> & Readonly<{
    onReady?: ((deck: RevealApi) => any) | undefined;
    onSync?: ((event: any) => any) | undefined;
    onSlideSync?: ((event: any) => any) | undefined;
    onSlideChanged?: ((event: any) => any) | undefined;
    onSlideTransitionEnd?: ((event: any) => any) | undefined;
    onFragmentShown?: ((event: any) => any) | undefined;
    onFragmentHidden?: ((event: any) => any) | undefined;
    onOverviewShown?: ((event: any) => any) | undefined;
    onOverviewHidden?: ((event: any) => any) | undefined;
    onPaused?: ((event: any) => any) | undefined;
    onResumed?: ((event: any) => any) | undefined;
}>, {
    plugins: (import('reveal.js').RevealPlugin | import('reveal.js').RevealPluginFactory)[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
