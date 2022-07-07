import React, { useEffect } from 'react'
import { useStores } from '@/store'

export interface HelloProps {
  className?: string;
  name: string;
};

export function Hello () {
  const { envStore } = useStores()
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    if (canvas) {
      const ctx = (canvas as HTMLCanvasElement).getContext('2d')
      console.log('989898', ctx, envStore)
    }
  })

  return (
    <canvas id="canvas" width="600" height="450"></canvas>
  )
}
