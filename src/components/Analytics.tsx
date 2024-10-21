'use client'

import { useEffect } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export default function Analytics() {
  useEffect(() => {
    // 这里可以添加任何需要在客户端执行的 Google Analytics 相关代码
  }, [])

  return (
    <>
      <GoogleAnalytics gaId="G-KVVHZCZ7WW" />
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="1415ae7d-d364-4b98-b773-58802dbdf0ad"
        strategy="afterInteractive"
      />
    </>
  )
}