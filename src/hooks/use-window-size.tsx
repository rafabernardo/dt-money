import { useState, useEffect, useMemo } from 'react'
import { ISize, IWindowSizeProps } from '_types/size'
import { TABLET, MOBILE } from '_utils/constants'

export const useWindowSize = (): IWindowSizeProps => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<ISize>({
    width: 0,
    height: 0,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  const isMobile = useMemo(() => windowSize.width < MOBILE, [windowSize.width])
  const isDesktop = useMemo(
    () => windowSize.width >= TABLET,
    [windowSize.width]
  )
  const isTablet = useMemo(() => !isMobile && !isDesktop, [isDesktop, isMobile])

  return { windowSize, isMobile, isDesktop, isTablet }
}
