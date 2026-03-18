import { RevealApi } from 'reveal.js';
import { ShallowRef } from 'vue';

export { default as Deck } from './Deck.vue';
export { default as Slide } from './Slide.vue';
export { default as Fragment } from './Fragment.vue';
export { default as Code } from './Code.vue';
export { default as Stack } from './Stack.vue';
export { RevealContextKey as RevealContext } from './context';
export type { DeckProps, DeckEmits, SlideProps, StackProps, FragmentProps, CodeProps } from './types';
export declare function useReveal(): ShallowRef<RevealApi | null>;
