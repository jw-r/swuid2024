import { init as amplitudeInit } from '@amplitude/analytics-browser'

export const initAmplitude = () => {
  const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY

  if (!AMPLITUDE_API_KEY) {
    console.warn('Amplitude API 키가 설정되지 않았습니다.')
    return
  }

  amplitudeInit(AMPLITUDE_API_KEY, {
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      fileDownloads: true,
    },
  })
}
