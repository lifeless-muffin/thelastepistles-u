import { useEffect, useRef, useState } from 'react'
import { applyGrainedEffect } from '../plugins/grained/grained'

function GrainedWrapper({ children }) {

  const [effectAdded, setEffectAdded] = useState(false)
  const backgroundFilterRef = useRef(null)

  const applyGrained = (elementId, options) => {
    applyGrainedEffect(window, document, elementId, options);
  }

  useEffect(() => {
    if (backgroundFilterRef.current, !effectAdded && typeof window != "undefined" && typeof document !== "undefined") {
      const elementId = 'noisy-background-filter';
      const options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 1,
        "grainDensity": 1,
        "grainWidth": 1,
        "grainHeight": 1
      };

      applyGrained(elementId, options)
      setEffectAdded(true)
    }
  }, [])

  return (
    <>{children}</>
  );
}

export default GrainedWrapper
