import { derived, writable } from 'svelte/store'

import { isMobileDevice } from '@/modules/device'
import { lastUnreadMessage } from '@/modules/messages'
import { widgetOptions } from '@/modules/options'

import { isMessengerFrameOpen } from './messengerFrame'
import { isWidgetInitialized } from './store'
import { shouldShowWidget } from './widgetVisibility'

const isTypingFrameOpen = writable<boolean>(false)
const isPopupFrameOpen = writable<boolean>(false)

export const openTypingFrame = () => {
	isTypingFrameOpen.set(true)
	isPopupFrameOpen.set(false)
}

export const openPopupFrame = () => {
	isPopupFrameOpen.set(true)
	isTypingFrameOpen.set(false)
}

const shouldRenderPopupIfMobile = derived([isMobileDevice], ([$isMobileDevice]): boolean => {
	const { mobilePopupsEnabled } = widgetOptions.getOptions()
	return $isMobileDevice ? !!mobilePopupsEnabled : true
})

export const shouldRenderTypingFrame = derived(
	[isWidgetInitialized, shouldShowWidget, isTypingFrameOpen, isMessengerFrameOpen, shouldRenderPopupIfMobile],
	([
		$isWidgetInitialized,
		$shouldShowWidget,
		$isTypingFrameOpen,
		$isMessengerFrameOpen,
		$shouldRenderPopupIfMobile,
	]) => {
		return (
			$isWidgetInitialized &&
			$shouldShowWidget &&
			$isTypingFrameOpen &&
			!$isMessengerFrameOpen &&
			$shouldRenderPopupIfMobile
		)
	},
)

export const shouldRenderPopupFrame = derived(
	[
		isWidgetInitialized,
		shouldShowWidget,
		isPopupFrameOpen,
		isMessengerFrameOpen,
		lastUnreadMessage,
		shouldRenderPopupIfMobile,
	],
	([
		$isWidgetInitialized,
		$shouldShowWidget,
		$isPopupFrameOpen,
		$isMessengerFrameOpen,
		$lastUnreadMessage,
		$shouldRenderPopupIfMobile,
	]) => {
		return (
			$isWidgetInitialized &&
			$shouldShowWidget &&
			$isPopupFrameOpen &&
			$lastUnreadMessage &&
			!$isMessengerFrameOpen &&
			$shouldRenderPopupIfMobile
		)
	},
)
