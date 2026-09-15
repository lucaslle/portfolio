import { useCallback, useEffect, useRef, useState } from 'react'
import type { Spark } from '../types'

const SPARK_ANGLES = [0, 60, 120, 180, 240, 300]
const SPARK_LIFETIME = 520

type Sparks = {
  sparks: Spark[]
  burst: (x: number, y: number) => void
}

export const useSparks = (): Sparks => {
  const [sparks, setSparks] = useState<Spark[]>([])
  const nextId = useRef(0)
  const timeouts = useRef<number[]>([])

  useEffect(() => {
    const pending = timeouts.current

    return () => pending.forEach((id) => window.clearTimeout(id))
  }, [])

  const burst = useCallback((x: number, y: number) => {
    const created = SPARK_ANGLES.map((angle) => ({ id: nextId.current++, angle, x, y }))
    const createdIds = new Set(created.map((spark) => spark.id))

    setSparks((current) => [...current, ...created])

    const timeout = window.setTimeout(() => {
      setSparks((current) => current.filter((spark) => !createdIds.has(spark.id)))
    }, SPARK_LIFETIME)

    timeouts.current.push(timeout)
  }, [])

  return { sparks, burst }
}
