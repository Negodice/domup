<script lang="ts">
import AgentAvatar from '@/components/avatars/AgentAvatar.svelte'
import { getAgentById } from '@/modules/agents'

export let agentId: string

$: agent = getAgentById(agentId)
</script>

{#if $agent}
	<div class="flex-center flex-shrink-0"><AgentAvatar avatar={$agent.avatar} /></div>
	<div class="ml-3 mr-10 font-bold truncate color-slate-800">{$agent.fullname}</div>
{/if}
