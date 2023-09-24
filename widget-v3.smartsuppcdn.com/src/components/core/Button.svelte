<script lang="ts">
import type { SvelteComponent } from 'svelte'
import type { HTMLButtonAttributes } from 'svelte/elements'

import { isMobileDevice, isTouchDevice } from '@/modules/device'

import Spinner from './Spinner.svelte'

type ButtonVariant = 'primary' | 'outline'
type ButtonSize = 'md' | 'lg'

type ButtonHTMLProps = Omit<HTMLButtonAttributes, 'size'>

interface $$Props extends Partial<ButtonHTMLProps> {
	variant?: ButtonVariant
	size?: ButtonSize
	icon?: typeof SvelteComponent<Record<string, unknown>>
	iconDescription?: string
	disabled?: boolean
	isBlock?: boolean
	isLoading?: boolean
	testId?: string
}

export let variant: $$Props['variant'] = 'primary'
export let size: $$Props['size'] = 'md'
export let icon: $$Props['icon'] = undefined
export let iconDescription: $$Props['iconDescription'] = undefined
export let disabled: $$Props['disabled'] = undefined
export let isBlock: $$Props['isBlock'] = undefined
export let isLoading: $$Props['isLoading'] = undefined
export let testId: $$Props['testId'] = undefined

let iconComponent = icon
let iconProps = {}
$: if (isLoading) {
	iconComponent = Spinner
	iconProps = { color: 'primaryContent' }
} else {
	iconComponent = icon
	iconProps = {}
}

$: isDisabled = !!disabled || !!isLoading
</script>

<button
	type="button"
	tabindex="0"
	{...$$restProps}
	class={`btn btn-${variant} btn-${size} text-base`}
	class:text-sm={!$isMobileDevice}
	class:btn-disabled={isDisabled}
	class:w-full={!!isBlock}
	class:cursor-auto={isTouchDevice()}
	class:cursor-pointer={!isTouchDevice()}
	disabled={isDisabled}
	data-testid={testId}
	on:click
>
	{#if iconComponent}
		<span class="mr-2"
			><svelte:component this={iconComponent} aria-hidden="true" aria-label={iconDescription} {...iconProps} /></span
		>
	{/if}
	{#if !isLoading}
		<slot />
	{/if}
</button>

<style lang="postcss">
.btn {
	@apply inline-flex items-center justify-center px-4 rounded-3xl transition-all;
}

.btn-primary {
	@apply bg-primary-button text-primary-button-content hover-bg-primary-button-hover;
}

.btn-outline {
	@apply bg-white border border-primary-button text-black hover-bg-primary-button hover-text-primary-button-content;
}

.btn-md {
	@apply h-10;
}

.btn-lg {
	@apply h-12;
}

.btn-disabled {
	@apply opacity-20 cursor-not-allowed;
}
</style>
