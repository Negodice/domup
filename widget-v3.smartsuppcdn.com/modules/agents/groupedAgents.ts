import type { Agent } from '@smartsupp/websocket-client-visitor'
import { derived } from 'svelte/store'

import { assignedAgents, isWidgetOnline } from '@/modules/chat'

import { activeAgentsByGroup, activeOnlineAgentsByGroup } from './agents'

const emptyAgent: Agent = {
	id: '',
	avatar: '',
	description: '',
	disabled: false,
	fullname: '',
	groups: [],
	status: 'online',
}

export const groupedAgents = derived(
	[activeAgentsByGroup, activeOnlineAgentsByGroup, assignedAgents, isWidgetOnline],
	([$activeAgentsByGroup, $activeOnlineAgentsByGroup, $assignedAgents, $isWidgetOnline]): Agent[] => {
		if ($assignedAgents.length > 0) {
			return [...$assignedAgents].reverse()
		}

		if ($isWidgetOnline) {
			return $activeOnlineAgentsByGroup.length === 0 ? [emptyAgent] : $activeOnlineAgentsByGroup
		}

		return $activeAgentsByGroup
	},
)
