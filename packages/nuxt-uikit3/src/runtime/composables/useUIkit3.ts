import { useNuxtApp } from '#imports'

export const useUIkit3 = () => {
  const { $uikit3 } = useNuxtApp()

  if (typeof window !== 'undefined' && !$uikit3)
    console.error('Could not load UIkit plugin!')

  return $uikit3
}
