<script lang="ts">
import type { Agent } from '@smartsupp/websocket-client-visitor'
import { fly } from 'svelte/transition'

import AgentAvatar from '@/components/avatars/AgentAvatar.svelte'
import { testIds } from '@/constants'
import { groupedAgents } from '@/modules/agents/groupedAgents'
import { isTouchDevice } from '@/modules/device'
import type { AvatarSize } from '@/types'

export let size: AvatarSize = 'md'

const MAX_AVATARS = 3

let agents: Agent[] = []

// Check empty array to prevent double render and breaking animation
$: if ($groupedAgents.length > 0) {
	agents = $groupedAgents.slice(0, MAX_AVATARS)
}
</script>

<div class="group flex-center flex-shrink-0" data-testid={testIds.avatarGroup}>
	{#each agents as { id, avatar } (id)}
		<div
			in:fly|global={{ duration: 300, x: -10 }}
			out:fly|global={{ duration: 150, x: -10 }}
			class={`avatar-group-item avatar-${size} transition-all-400`}
			class:-group-hover:not-first:m-x-1={!isTouchDevice()}
		>
			<AgentAvatar {avatar} {size} />
		</div>
	{/each}
</div>

<style>
.avatar-group-item:nth-of-type(1) {
	z-index: 3;
}

.avatar-group-item:nth-of-type(2) {
	z-index: 2;
}

.avatar-group-item:nth-of-type(3) {
	z-index: 1;
}

.avatar-sm:not(:first-child) {
	margin-left: -12px;
}

.avatar-md:not(:first-child) {
	margin-left: -16px;
}

.avatar-lg:not(:first-child) {
	margin-left: -22px;
}
</style>
