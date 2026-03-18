<script setup lang="ts">
import { computed, inject, onMounted, ref, shallowRef, watch } from 'vue';
import type { RevealApi } from 'reveal.js';
import type { SlideProps } from './types';
import { RevealContextKey } from './context';

const props = defineProps<SlideProps>();

const deckRef = inject(RevealContextKey) ?? shallowRef<RevealApi | null>(null);
const slideRef = ref<HTMLElement | null>(null);

let hasMounted = false;

const slideAttributes = computed(() => {
	const attrs: Record<string, any> = {};

	// Helper to set string values, or omit if undefined
	const setIfDefined = (key: string, value: any, isBooleanAttr = false) => {
		if (value == null) return;
		if (isBooleanAttr) {
			if (value) attrs[key] = '';
			return;
		}
		if (value === false) {
			attrs[key] = 'false';
			return;
		}
		attrs[key] = value;
	};

	setIfDefined('data-background', props.background);
	setIfDefined('data-background-image', props.backgroundImage);
	setIfDefined('data-background-video', props.backgroundVideo);
	setIfDefined('data-background-video-loop', props.backgroundVideoLoop, true);
	setIfDefined('data-background-video-muted', props.backgroundVideoMuted, true);
	setIfDefined('data-background-iframe', props.backgroundIframe);
	setIfDefined('data-background-color', props.backgroundColor);
	setIfDefined('data-background-gradient', props.backgroundGradient);
	setIfDefined('data-background-size', props.backgroundSize);
	setIfDefined('data-background-position', props.backgroundPosition);
	setIfDefined('data-background-repeat', props.backgroundRepeat);
	setIfDefined('data-background-opacity', props.backgroundOpacity);
	setIfDefined('data-background-transition', props.backgroundTransition);
	setIfDefined('data-visibility', props.visibility);
	setIfDefined('data-auto-animate', props.autoAnimate, true);
	setIfDefined('data-auto-animate-id', props.autoAnimateId);
	setIfDefined('data-auto-animate-restart', props.autoAnimateRestart, true);
	setIfDefined('data-auto-animate-unmatched', props.autoAnimateUnmatched);
	setIfDefined('data-auto-animate-easing', props.autoAnimateEasing);
	setIfDefined('data-auto-animate-duration', props.autoAnimateDuration);
	setIfDefined('data-auto-animate-delay', props.autoAnimateDelay);
	setIfDefined('data-transition', props.transition);
	setIfDefined('data-transition-speed', props.transitionSpeed);
	setIfDefined('data-autoslide', props.autoSlide);
	setIfDefined('data-notes', props.notes);
	setIfDefined('data-background-interactive', props.backgroundInteractive, true);
	setIfDefined('data-preload', props.preload, typeof props.preload === 'boolean');

	return attrs;
});

const dataAttributesSignature = computed(() => {
	return JSON.stringify(
		Object.entries(slideAttributes.value)
			.filter(([key]) => key.startsWith('data-'))
			.sort(([a], [b]) => a.localeCompare(b))
	);
});

onMounted(() => {
	hasMounted = true;
});

watch(dataAttributesSignature, () => {
	if (!hasMounted) return;
	const deck = deckRef.value;
	const slide = slideRef.value;
	if (!deck || !slide || typeof deck.syncSlide !== 'function') return;
	deck.syncSlide(slide);
});
</script>

<template>
	<section ref="slideRef" v-bind="slideAttributes">
		<slot />
	</section>
</template>
