import { MessageWithDesigner } from '@/types'
import { formatDate } from '@/utils'

interface Props {
  message: MessageWithDesigner
  type: 'A' | 'B' | 'Origin'
}

const Comment = ({ message, type }: Props) => {
  if (type === 'Origin') {
    return (
      <div className="border border-[#FEF5ADB2]/70 bg-[#211A18BF]/75 p-[19px_23px_18.6px_24px] lg:p-[56px_48px_56px_48px]">
        <h3 className="lg:text-web-headline-02 text-[18px] font-[700] leading-[27px] tracking-[-0.02em] text-primary-02">
          From. {message.sender}
        </h3>
        <div className="lg:text-web-body-03 mt-[2.4px] text-[14px] font-[300] leading-[21px] tracking-[-0.01em] text-primary-02 lg:mt-[4px]">
          {formatDate(message.createdAt)}
        </div>
        <div className="lg:text-web-subtitle-03 mt-[7px] text-[18px] font-[700] leading-[27px] tracking-[-0.02em] text-primary-02 lg:mt-[20px]">
          To. {message.designer?.name || '모두에게'}
        </div>
        <p className="lg:text-web-body-03 mt-[4px] text-[16px] font-[300] leading-[28.8px] tracking-[-0.01em] lg:mt-[7px]">
          {message.content}
        </p>
      </div>
    )
  }

  if (type === 'A') {
    return (
      <div className="border border-[#FEF5ADB2]/70 bg-[#211A18BF]/75 p-[19px_23px_18.6px_24px] lg:p-[56px_48px_56px_48px]">
        <h3 className="lg:text-web-headline-02 text-[18px] font-[700] leading-[27px] tracking-[-0.02em] text-primary-02">
          From. {message.sender}
        </h3>
        <div className="lg:text-web-caption-01 mt-[2.4px] text-[14px] font-[300] leading-[21px] tracking-[-0.01em] text-primary-02 lg:mt-[4px]">
          {formatDate(message.createdAt)}
        </div>
        <p className="lg:text-web-body-space-03 mt-mobile text-[16px] font-[300] leading-[28.8px] tracking-[-0.01em] lg:mt-[20px]">
          {message.content}
        </p>
      </div>
    )
  }

  return (
    <div className="flex border-b border-primary-02/50 py-[24px] max-lg:flex-col max-lg:gap-[12px]">
      <div>
        <h3 className="text-subtitle-01 lg:text-web-subtitle-03 lg:w-[235px]">{message.sender}</h3>
        <div className="text-body-02 lg:text-web-caption-01 mt-[4px] opacity-70 lg:mt-[8px]">
          {formatDate(message.createdAt)}
        </div>
      </div>
      <p className="text-body-space-03 lg:text-web-body-space-02">{message.content}</p>
    </div>
  )
}

export default Comment
