<script lang="ts">
import { testIds } from '@/constants'
import { getAgentAvatarUrl } from '@/modules/agents'
import type { AvatarSize } from '@/types'

export let avatar: string | undefined
export let size: AvatarSize = 'md'

let avatarUrl: string
$: avatarUrl = getAgentAvatarUrl(avatar)
</script>

<img
	src={avatarUrl}
	alt="Agent avatar"
	class="rounded-full"
	data-testid={testIds.avatarAgent}
	class:w-6={size === 'sm'}
	class:h-6={size === 'sm'}
	class:w-8={size === 'md'}
	class:h-8={size === 'md'}
	class:w-11={size === 'lg'}
	class:h-11={size === 'lg'}
/>
