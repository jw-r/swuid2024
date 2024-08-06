import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  typography:
    | 'E_Headline_01'
    | 'E_Subtitle_01'
    | 'Headline_01'
    | 'Headline_02'
    | 'Subtitle_01'
    | 'Subtitle_02'
    | 'Subtitle_03'
    | 'Body_01'
    | 'Body_02'
    | 'Body_03'
    | 'Body_04'
    | 'Body_01_행간'
    | 'Body_02_행간'
    | 'Body_03_행간'
    | 'Body_04_행간'
    | 'Caption_01'
  className?: HTMLElement['className']
}

const Text = ({ typography, className, children }: Props) => {
  return (
    <div
      className={cn(
        {
          // EULYOO1945 font styles
          'font-eulyoo1945 text-[28px] desktop:text-[56px] font-semibold tracking-[-0.01em] desktop:tracking-[0em]':
            typography === 'E_Headline_01',
          'font-eulyoo1945 text-[14px] desktop:text-[28px] font-semibold tracking-[-0.01em] desktop:tracking-[0em]':
            typography === 'E_Subtitle_01',

          // Pretendard font styles
          'font-pretendard text-[20px] desktop:text-[36px] font-semibold leading-[150%] tracking-[-0.01em] desktop:tracking-[-0.02em]':
            typography === 'Headline_01',
          'font-pretendard text-[24px] desktop:text-[28px] font-semibold desktop:font-bold leading-[150%] tracking-[-0.01em] desktop:tracking-[-0.02em]':
            typography === 'Headline_02',

          'font-pretendard text-[16px] desktop:text-[36px] font-semibold desktop:font-bold leading-[150%] tracking-[-0.01em] desktop:tracking-[-0.02em]':
            typography === 'Subtitle_01',
          'font-pretendard text-[14px] desktop:text-[36px] font-semibold desktop:font-light leading-[150%] tracking-[-0.01em] desktop:tracking-[-0.02em]':
            typography === 'Subtitle_02',
          'font-pretendard text-[18px] desktop:text-[24px] font-medium desktop:font-semibold leading-[150%] tracking-[-0.01em]':
            typography === 'Subtitle_03',

          'font-pretendard text-[16px] desktop:text-[28px] font-normal leading-[150%] tracking-[-0.01em] desktop:tracking-[-0.02em]':
            typography === 'Body_01',
          'font-pretendard text-[14px] desktop:text-[24px] font-light desktop:font-normal leading-[150%] tracking-[-0.01em]':
            typography === 'Body_02',
          'font-pretendard text-[16px] desktop:text-[22px] font-light leading-[150%] tracking-[-0.01em]':
            typography === 'Body_03',
          'font-pretendard text-[18px] desktop:text-[15px] font-normal leading-[150%] desktop:leading-[160%] tracking-[-0.01em]':
            typography === 'Body_04',

          'font-pretendard text-[16px] desktop:text-[28px] font-normal leading-[180%] tracking-[-0.01em] desktop:tracking-[-0.02em]':
            typography === 'Body_01_행간',
          'font-pretendard text-[14px] desktop:text-[24px] font-light desktop:font-normal leading-[180%] tracking-[-0.01em]':
            typography === 'Body_02_행간',
          'font-pretendard text-[14px] desktop:text-[22px] font-light leading-[180%] tracking-[-0.01em]':
            typography === 'Body_03_행간',
          'font-pretendard text-[14px] desktop:text-[20px] font-light leading-[180%] tracking-[-0.01em]':
            typography === 'Body_04_행간',

          'font-pretendard text-[12px] desktop:text-[20px] font-normal desktop:font-light leading-[150%] tracking-[0em] desktop:tracking-[-0.01em]':
            typography === 'Caption_01',
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Text
