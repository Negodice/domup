<script lang="ts">
import { onDestroy, onMount, tick } from 'svelte'
import IconClose from 'virtual:icons/lucide/x'

import AgentAvatarGroup from '@/components/avatars/AgentAvatarGroup.svelte'
import Button from '@/components/core/Button.svelte'
import IconButton from '@/components/core/IconButton.svelte'
import IconSend from '@/components/icons/IconSend.svelte'
import { openMessengerFrame } from '@/modules/app'
import { readChat } from '@/modules/chat'
import { hasPopupFrameHover, popupFrameHeight } from '@/modules/frames'
import { hasContactMessage, lastUnreadMessage } from '@/modules/messages'
import { t } from '@/modules/translations'
import { getHostWindow } from '@/utils/window'

import WidgetPopupAgentInfo from './WidgetPopupAgentInfo.svelte'

let ref: HTMLDivElement

let setPopupHeight = () => popupFrameHeight.set(ref.getBoundingClientRect().height)
onMount(() => {
	// Set correct height of popup frame => depends on height of content which is dynamic
	setPopupHeight()
	getHostWindow().addEventListener('visibilitychange', setPopupHeight)
})

onDestroy(() => {
	getHostWindow().removeEventListener('visibilitychange', setPopupHeight)
})

const handlePopupClick = () => {
	openMessengerFrame()
}

const handlePopupClose = () => {
	readChat()
}

const handlePopupMouseEnter = () => {
	hasPopupFrameHover.set(true)
}

const handlePopupMouseLeave = () => {
	hasPopupFrameHover.set(false)
}

const onLastUnreadMessage = async () => {
	await tick()
	setPopupHeight()
}

$: $lastUnreadMessage && void onLastUnreadMessage()
$: buttonText = $hasContactMessage ? 'trigger.replyButton' : 'trigger.openChatButton'
</script>

<!-- If block must be wrapped by extra div, otherwise it throws error in console: https://github.com/sveltejs/svelte/issues/6037#issuecomment-1161861663 -->
<div>
	{#if $lastUnreadMessage}
		<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
		<div
			bind:this={ref}
			class="relative p-4 bg-white rounded-lg cursor-pointer"
			on:click={handlePopupClick}
			on:mouseenter={handlePopupMouseEnter}
			on:mouseleave={handlePopupMouseLeave}
		>
			<div class="flex items-center mb-4">
				{#if $lastUnreadMessage.agentId}
					<WidgetPopupAgentInfo agentId={$lastUnreadMessage.agentId} />
				{:else}
					<AgentAvatarGroup />
				{/if}
			</div>
			<div class="text-sm leading-[22px] line-clamp-5 whitespace-pre-wrap color-slate-800">
				{$lastUnreadMessage.content.text}
			</div>
			<div class="mt-4">
				<Button variant="outline" size="lg" icon={IconSend} isBlock>{$t(buttonText)}</Button>
			</div>
			<div class="absolute top-2 right-2 text-gray-500">
				<IconButton icon={IconClose} iconDescription="Close" on:click={handlePopupClose} />
			</div>
		</div>
	{/if}
</div>
